// Plan state: free / trial / pro, license key verification and the upgrade screen.
//
// Keys are ECDSA P-256 signatures made offline with tools/license/issue.mjs, so a
// static site can check them without a server. Like any purely client-side check,
// it deters casual copying rather than determined tampering with the code.
import { PRICE_LABEL, PURCHASE_URL, SUPPORT_CONTACT, TRIAL_DAYS, PUBLIC_KEY_JWK } from './license-config.js';
import { el, icon, openDialog, closeDialog, toast } from './ui.js';
import { getSetting, setSetting } from './storage.js';

const DAY = 86400000;
let state = { tier: 'free' };
const listeners = new Set();

const b64urlBytes = (s) => {
  const bin = atob(s.replace(/-/g, '+').replace(/_/g, '/') + '='.repeat((4 - (s.length % 4)) % 4));
  return Uint8Array.from(bin, (c) => c.charCodeAt(0));
};

export async function verifyKey(key) {
  const m = /^PCP1\.([A-Za-z0-9_-]+)\.([A-Za-z0-9_-]+)$/.exec((key || '').trim());
  if (!m) return { ok: false, reason: '形式が正しくありません' };
  if (!PUBLIC_KEY_JWK) return { ok: false, reason: 'このアプリにはまだ検証用の公開鍵が設定されていません' };
  if (!crypto?.subtle) return { ok: false, reason: 'この環境では検証できません（https で開いてください）' };
  let payload;
  try { payload = JSON.parse(new TextDecoder().decode(b64urlBytes(m[1]))); } catch { return { ok: false, reason: '形式が正しくありません' }; }
  try {
    const pub = await crypto.subtle.importKey('jwk', { ...PUBLIC_KEY_JWK, ext: true }, { name: 'ECDSA', namedCurve: 'P-256' }, false, ['verify']);
    const valid = await crypto.subtle.verify({ name: 'ECDSA', hash: 'SHA-256' }, pub, b64urlBytes(m[2]), new TextEncoder().encode(`PCP1.${m[1]}`));
    if (!valid) return { ok: false, reason: 'キーが正しくありません' };
  } catch { return { ok: false, reason: 'キーが正しくありません' }; }
  if (payload.plan !== 'pro') return { ok: false, reason: 'Pro 用のキーではありません' };
  // Valid through the end of the expiry day (local time).
  const end = new Date(payload.exp + 'T23:59:59').getTime();
  if (!Number.isFinite(end)) return { ok: false, reason: '有効期限が読み取れません' };
  if (Date.now() > end) return { ok: false, reason: `有効期限（${payload.exp}）が切れています`, payload, expired: true };
  return { ok: true, payload, end };
}

export async function refresh() {
  const key = getSetting('license', null);
  const trialStart = getSetting('trialStart', null);
  let next = { tier: 'free', trialUsed: !!trialStart };
  if (key) {
    const r = await verifyKey(key);
    if (r.ok) next = { tier: 'pro', sub: r.payload.sub, exp: r.payload.exp, daysLeft: Math.ceil((r.end - Date.now()) / DAY) };
    else if (r.expired) next.expired = r.payload.exp;
  }
  if (next.tier === 'free' && trialStart) {
    const now = Date.now();
    const left = trialStart + TRIAL_DAYS * DAY - now;
    // A clock set back before the trial started does not extend it.
    if (left > 0 && now >= trialStart) next = { tier: 'trial', daysLeft: Math.ceil(left / DAY), trialUsed: true };
  }
  state = next;
  listeners.forEach((f) => f(state));
  return state;
}

export const getState = () => state;
export const isPro = () => state.tier === 'pro' || state.tier === 'trial';
export const onChange = (f) => { listeners.add(f); };

export function startTrial() {
  if (getSetting('trialStart', null)) return false;
  setSetting('trialStart', Date.now());
  return true;
}

export async function activate(key) {
  const r = await verifyKey(key);
  if (r.ok) { setSetting('license', key.trim()); await refresh(); }
  return r;
}

export function deactivate() {
  setSetting('license', null);
  return refresh();
}

// ---- plan screen ----
export const PRO_FEATURES = [
  ['設計', [
    ['ねじ・ボルト・ナット', 'M2〜M20 の ISO メートルねじ。はめあいクリアランス指定、ねじ穴も作成'],
    ['歯車ジェネレーター', 'インボリュート平歯車をモジュール・歯数から自動生成'],
    ['ケース自動設計', '内寸を入れるだけで本体とフタ（はめ込み式）を生成'],
    ['日本語テキスト', 'ゴシック・明朝・丸ゴシックで名札やプレートを立体化'],
    ['画像・SVG から立体化', 'ロゴや手書きイラストを輪郭抽出して押し出し'],
    ['リトフェイン', '写真を光にかざすと浮かび上がるレリーフに変換'],
  ]],
  ['印刷準備', [
    ['オーバーハング解析', 'サポートが必要な面を赤く表示'],
    ['自動向き最適化', 'サポートが最も少なくなる置き方を自動で探索'],
    ['印刷時間・コスト見積もり', '積層ピッチ・充填率・フィラメント単価から算出'],
    ['断面表示・計測', '内部構造の確認と 2 点間の距離計測'],
    ['自動配置', '複数部品を造形エリアに重ならないよう並べる'],
  ]],
  ['出力・管理', [
    ['3MF / OBJ 出力', 'パーツごと・色情報付きでマルチカラー印刷に対応'],
    ['バージョン履歴', 'スナップショットを保存していつでも復元'],
    ['無料版から引き継ぎ', '無料版のプロジェクトをそのまま取り込み'],
  ]],
];

const FREE_ROWS = [
  ['基本形状・ブーリアン・スケッチ・回転体', true, true],
  ['STL 出力・STL 読み込み', true, true],
  ['オフライン動作・自動保存', true, true],
  ['ねじ / 歯車 / ケース自動設計', false, true],
  ['日本語テキスト・画像 / SVG・リトフェイン', false, true],
  ['オーバーハング解析・自動向き・見積もり', false, true],
  ['3MF / OBJ 出力・バージョン履歴', false, true],
];

export function statusLabel(s = state) {
  if (s.tier === 'pro') return `Pro（${s.exp} まで）`;
  if (s.tier === 'trial') return `無料トライアル 残り ${s.daysLeft} 日`;
  return s.expired ? `ライセンス期限切れ（${s.expired}）` : 'フリー';
}

export async function planDialog(reason) {
  const s = state;
  const features = PRO_FEATURES.map(([group, items]) => el('div', { class: 'plan-group' },
    el('h3', {}, group),
    el('ul', { class: 'plan-list' }, items.map(([t, d]) => el('li', {}, icon('check'), el('div', {}, el('b', {}, t), el('span', {}, d)))))));
  const table = el('table', { class: 'plan-table' },
    el('thead', {}, el('tr', {}, el('th', {}, ''), el('th', {}, 'フリー'), el('th', { class: 'pro' }, 'Pro'))),
    el('tbody', {}, FREE_ROWS.map(([label, f, p]) => el('tr', {}, el('td', {}, label), el('td', {}, f ? '○' : '—'), el('td', { class: 'pro' }, p ? '○' : '—')))));
  const body = [
    reason ? el('div', { class: 'plan-reason' }, icon('lock'), `「${reason}」は Pro の機能です`) : null,
    el('div', { class: 'plan-hero' },
      el('div', { class: 'plan-badge' }, 'PRO'),
      el('div', { class: 'plan-price' }, PRICE_LABEL),
      el('div', { class: 'plan-sub' }, `いつでも解約可能 ・ まずは ${TRIAL_DAYS} 日間無料でお試し`),
      el('div', { class: 'plan-status' }, '現在のプラン: ', el('b', {}, statusLabel(s)))),
    ...features,
    el('h3', { class: 'plan-h' }, 'プラン比較'),
    table,
    SUPPORT_CONTACT ? el('p', { class: 'hint' }, `お問い合わせ: ${SUPPORT_CONTACT}`) : null,
  ];
  const buttons = [];
  if (s.tier === 'free' && !s.trialUsed) buttons.push({ label: `${TRIAL_DAYS}日間 無料で試す`, value: 'trial' });
  if (s.tier !== 'pro') buttons.push({ label: '購入する', value: 'buy', cls: 'accent' });
  const keyBtn = el('button', { type: 'button', class: 'btn', style: { width: '100%', marginTop: '12px' }, onclick: () => closeDialog('key') },
    icon('key'), s.tier === 'pro' ? 'ライセンスの管理' : 'ライセンスキーを入力');
  body.push(keyBtn);
  const v = await openDialog({ title: 'Pocket CAD Pro', body, buttons });
  if (v === 'trial') {
    if (startTrial()) { await refresh(); toast(`Pro 機能を ${TRIAL_DAYS} 日間お試しいただけます`, 2500); }
  } else if (v === 'buy') {
    if (PURCHASE_URL) window.open(PURCHASE_URL, '_blank', 'noopener');
    else await openDialog({ title: '購入', body: el('p', {}, '現在、オンライン販売の準備中です。無料トライアルで Pro 機能をお試しください。'), buttons: [{ label: '閉じる', value: 'ok' }] });
  } else if (v === 'key') {
    await licenseDialog();
  }
  return isPro();
}

export async function licenseDialog() {
  const s = state;
  const input = el('textarea', { class: 'txt', rows: 3, placeholder: 'PCP1.…', autocapitalize: 'off', autocomplete: 'off', spellcheck: 'false', style: { height: 'auto', padding: '10px 12px', fontFamily: 'ui-monospace, monospace', fontSize: '14px' } });
  const msg = el('div');
  const body = [
    el('p', { class: 'hint' }, `現在のプラン: ${statusLabel(s)}`),
    s.tier === 'pro' ? el('p', { class: 'hint' }, `登録名: ${s.sub}`) : null,
    el('label', { class: 'field' }, el('span', {}, 'ライセンスキー（購入後にお送りするキーを貼り付け）'), input),
    msg,
  ];
  const buttons = [{ label: '閉じる', value: 'cancel' }, { label: '有効化', value: 'ok', cls: 'accent' }];
  if (s.tier === 'pro') buttons.unshift({ label: '登録解除', value: 'remove', cls: 'danger' });
  // Keep the dialog open on a bad key so the user can fix it.
  const d = document.getElementById('dlg');
  const onClick = async (e) => {
    const b = e.target.closest('button[type=submit]');
    if (!b || b.value !== 'ok') return;
    e.preventDefault();
    const r = await activate(input.value);
    if (r.ok) { closeDialog('done'); toast(`Pro を有効化しました（${r.payload.exp} まで）`, 2500); } else msg.replaceChildren(el('div', { class: 'warnbox' }, r.reason));
  };
  d.addEventListener('click', onClick);
  const v = await openDialog({ title: 'ライセンス', body, buttons });
  d.removeEventListener('click', onClick);
  if (v === 'remove') { await deactivate(); toast('この端末のライセンス登録を解除しました'); }
}

// Gate for Pro features: true when allowed, otherwise shows the plan screen.
export async function requirePro(featureName) {
  if (isPro()) return true;
  return planDialog(featureName);
}
