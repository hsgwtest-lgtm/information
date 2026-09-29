# Pocket CAD Pro

無料版 [Pocket CAD](../pocket-cad/) の有料版（月額 9,900 円・税込、14 日間無料トライアル）。
要件と価格の根拠は [REQUIREMENTS.md](REQUIREMENTS.md) を参照。

公開 URL（GitHub Pages）: https://hsgwtest-lgtm.github.io/information/pocket-cad-pro/

## Pro で増える機能（27 種類）

| 分類 | 機能 |
| --- | --- |
| テンプレート | Gridfinity 互換ビン、小物トレイ、スマホスタンド、植木鉢、名札・プレート、ケーブルクリップ、壁掛けフック、ハニカムコースター、ペン立て |
| 設計 | ボルト・ナット・ねじ穴（M2〜M20）、歯車、ケース自動設計、面取り箱、日本語テキスト、画像 / SVG から立体化、リトフェイン、変数による寸法駆動 |
| 加工 | 分割（ダボ付き）、パターン穴あけ（ハニカム・丸・角）、面に配置 |
| 印刷準備 | オーバーハング表示、自動向き最適化、自動配置、印刷時間・材料費の見積もり、プリンター別プロファイル、断面表示、距離計測 |
| 出力・共有・管理 | 三面図（寸法・隠れ線入り SVG）、3MF（パーツ・色付き）/ OBJ、共有リンク、マイパーツ、バージョン履歴、無料版からの取り込み |

画面上部の「Pro を試す」→「14日間 無料で試す」ですぐに全機能を使えます。

## 販売を始める前に（販売者向け）

1. **署名鍵を作る**（1 回だけ・PC で実行）
   ```sh
   cd pocket-cad-pro
   node tools/license/issue.mjs init
   ```
   `tools/license/private-key.pem`（秘密鍵・git 管理外）ができ、公開鍵が
   `js/license-config.js` に書き込まれます。公開鍵の変更をコミットして公開してください。
   秘密鍵は必ずバックアップを。失うと既存のキーを更新できなくなり、漏れると誰でもキーを作れます。

2. **決済ページを設定する**: `js/license-config.js` の `PURCHASE_URL` に
   Stripe Payment Link などの URL を、`SUPPORT_CONTACT` に問い合わせ先を入れます。

3. **購入者にキーを発行する**（毎月、支払い済み期間の末日で）
   ```sh
   node tools/license/issue.mjs issue "購入者名またはメール" 2026-10-31
   ```
   出力された `PCP1.…` をメールなどで送り、購入者はアプリの「プラン → ライセンスキーを入力」に貼り付けます。

4. `js/license-config.js` や他のファイルを変えたら `sw.js` の `VERSION` を上げてください。

### 注意
- 静的サイトのため、キーの検証は端末内で行います。署名は偽造できませんが、
  アプリのコード自体を書き換えれば回避できる点は、クライアントだけで完結する方式の限界です。
- 日本で有料販売する場合、特定商取引法に基づく表記（販売者名・所在地・連絡先・
  価格・支払時期・解約方法など）のページが必要です。販売開始前に用意してください。
- 自動課金・自動キー発行には、決済サービスの Webhook を受けるサーバー処理が別途必要です。

## 構成（無料版からの追加分）

```
js/license.js          プラン状態・キー検証・プラン画面
js/license-config.js   価格・購入 URL・公開鍵（販売設定）
js/pro/features.js     Pro 機能の画面と操作
js/pro/threads.js      ISO メートルねじの形状生成
js/pro/gear.js         インボリュート歯車の輪郭
js/pro/trace.js        画像・文字・SVG → 輪郭
js/pro/lithophane.js   写真 → リトフェイン
js/pro/analysis.js     オーバーハング・自動向き・見積もり
js/pro/export3mf.js    3MF / OBJ 出力（ZIP 作成含む）
js/pro/advanced.js     テンプレート画面・分割・パターン穴・面に配置・マイパーツ・共有リンク・変数・プリンター
js/pro/templates.js    パラメトリックテンプレート 9 種
js/pro/loft.js         面取り箱・Gridfinity ベースの形状
js/pro/pattern.js      ハニカムなどの穴配置
js/pro/drawing.js      三面図（SVG）
js/pro/edges.js        ブーリアン結果の輪郭線抽出（継ぎ目線を除去）
tools/license/issue.mjs  署名鍵の作成とキー発行
```

無料版とは別のデータベース（`pocket-cad-pro`）とキャッシュ（`pcpro-*`）を使うため、
同じ端末で両方をインストールしても干渉しません。
