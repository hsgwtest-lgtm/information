'use strict';

/* ================================================================
   PLANS  (Plan A: ご来光, Plan B: 昼間)
   ================================================================ */

const PLANS = {
  A: {
    icon: '🌄',
    title: 'Plan A — ご来光バージョン',
    desc: '深夜1:00出発 → 山頂でご来光を鑑賞',
    color: '#f97316',
    steps: [
      { day:'7/26', time:'12:00', icon:'🚌', loc:'富士山駅 / 河口湖駅',   alt:null,   temp:null,   note:'シャトルバスで五合目へ（約50分）',   highlight:false },
      { day:'7/26', time:'13:00', icon:'🏔', loc:'五合目着（2,305m）',     alt:2305,   temp:'16℃',  note:'⚠️ 30分以上 高所順応（必須）',         highlight:true  },
      { day:'7/26', time:'14:00', icon:'🏠', loc:'星観荘 チェックイン',   alt:2390,   temp:'15℃',  note:'六合目 · 荷物整理 · 軽装に切替',      highlight:true  },
      { day:'7/26', time:'18:00', icon:'🍽', loc:'夕食',                   alt:2390,   temp:'12℃',  note:'名物 爆弾ハンバーグ御膳',             highlight:false },
      { day:'7/26', time:'20:00', icon:'😴', loc:'就寝',                   alt:2390,   temp:null,   note:'アラームを深夜0:30にセット',           highlight:false },
      { day:'7/27', time:'01:00', icon:'🔦', loc:'星観荘 出発',            alt:2390,   temp:'8℃',   note:'ヘッドライト装着 · 防寒フル装備',     highlight:true  },
      { day:'7/27', time:'02:30', icon:'⛰', loc:'七合目（2,700m）',        alt:2700,   temp:'5℃',   note:'休憩 · 行動食 · 水分補給',            highlight:false },
      { day:'7/27', time:'04:00', icon:'⛰', loc:'八合目（3,100m）',        alt:3100,   temp:'2℃',   note:'休憩 · 防寒再確認',                   highlight:false },
      { day:'7/27', time:'04:30', icon:'🌄', loc:'山頂 ご来光（3,776m）',  alt:3776,   temp:'1℃',   note:'体感 −5℃以下も · 風強い',            highlight:true  },
      { day:'7/27', time:'05:30', icon:'🔵', loc:'お鉢巡り',               alt:3776,   temp:'2℃',   note:'時計回り 約3.5km',                    highlight:false },
      { day:'7/27', time:'07:00', icon:'⬇️', loc:'下山開始',               alt:3776,   temp:null,   note:'吉田ルート下山道（砂礫）',             highlight:false },
      { day:'7/27', time:'10:00', icon:'✅', loc:'五合目 下山完了',        alt:2305,   temp:'16℃',  note:'シャトルバスで麓へ',                  highlight:true  },
    ],
  },
  B: {
    icon: '☀️',
    title: 'Plan B — 昼間登山バージョン',
    desc: '朝5:00出発 → 山頂 · お鉢巡り',
    color: '#eab308',
    steps: [
      { day:'7/26', time:'12:00', icon:'🚌', loc:'富士山駅 / 河口湖駅',   alt:null,   temp:null,   note:'シャトルバスで五合目へ（約50分）',   highlight:false },
      { day:'7/26', time:'13:00', icon:'🏔', loc:'五合目着（2,305m）',     alt:2305,   temp:'16℃',  note:'⚠️ 30分以上 高所順応（必須）',         highlight:true  },
      { day:'7/26', time:'14:00', icon:'🏠', loc:'星観荘 チェックイン',   alt:2390,   temp:'15℃',  note:'六合目 · 荷物整理 · 軽装に切替',      highlight:true  },
      { day:'7/26', time:'18:00', icon:'😴', loc:'夕食・就寝',             alt:2390,   temp:'12℃',  note:'アラームを朝4:30にセット',            highlight:false },
      { day:'7/27', time:'05:00', icon:'☀️', loc:'星観荘 出発',            alt:2390,   temp:'12℃',  note:'明るくなってから · 視界良好',         highlight:true  },
      { day:'7/27', time:'07:00', icon:'⛰', loc:'七合目（2,700m）',        alt:2700,   temp:'9℃',   note:'休憩 · 行動食 · 水分補給',            highlight:false },
      { day:'7/27', time:'08:30', icon:'⛰', loc:'八合目（3,100m）',        alt:3100,   temp:'7℃',   note:'休憩 · 防寒調整',                     highlight:false },
      { day:'7/27', time:'09:30', icon:'🏔', loc:'山頂着（3,776m）',       alt:3776,   temp:'6℃',   note:'日差しあり · 景色良好',               highlight:true  },
      { day:'7/27', time:'10:00', icon:'🔵', loc:'お鉢巡り',               alt:3776,   temp:'6℃',   note:'混雑少なめ',                          highlight:false },
      { day:'7/27', time:'11:30', icon:'⬇️', loc:'下山開始',               alt:3776,   temp:null,   note:'吉田ルート下山道（砂礫）',             highlight:false },
      { day:'7/27', time:'14:30', icon:'✅', loc:'五合目 下山完了',        alt:2305,   temp:'16℃',  note:'シャトルバスで麓へ',                  highlight:true  },
    ],
  },
};

/* ================================================================
   TEMPERATURE  (標高別気温 7月目安)
   ================================================================ */

const TEMPS = [
  { alt: 2305, label:'五合目・六合目（星観荘）', day: 15, night: 9,  feel: '快適（下界より涼しい）' },
  { alt: 2700, label:'七合目',                   day: 13, night: 6,  feel: 'やや寒い' },
  { alt: 3100, label:'八合目',                   day: 10, night: 3,  feel: '寒い・防寒必要' },
  { alt: 3450, label:'八合五勺',                 day:  8, night: 1,  feel: '非常に寒い' },
  { alt: 3776, label:'山頂',                     day:  6, night: 1,  feel: '体感−5℃以下（風次第）' },
];

/* ================================================================
   GEAR  (持ち物チェックリスト)
   ================================================================ */

const GEAR = [
  { id:'wear', cat:'👕 服装・ウェア', items:[
    { id:'w1',  name:'吸湿速乾インナー（長袖）',     note:'綿はNG — 汗冷えで低体温症リスク', req:true  },
    { id:'w2',  name:'長袖シャツ',                   note:'行動中のベースレイヤー',          req:true  },
    { id:'w3',  name:'フリース / 中綿ジャケット',   note:'七合目以上から必要',              req:true  },
    { id:'w4',  name:'レインウェア 上下',            note:'防寒・防風兼用。ゴアテックス推奨',req:true  },
    { id:'w5',  name:'登山パンツ',                   note:'ジーンズ厳禁（重い・乾かない）',  req:true  },
    { id:'w6',  name:'厚手の手袋',                   note:'山頂は指先が悴む',                req:true  },
    { id:'w7',  name:'ニット帽・ネックウォーマー',  note:'深夜の寒さ対策',                  planA:true },
    { id:'w8',  name:'日差し用帽子（つば付き）',     note:'紫外線対策',                      planB:true },
    { id:'w9',  name:'トレッキングシューズ（ハイカット）', note:'スニーカー不可',             req:true  },
    { id:'w10', name:'厚手の登山用靴下＋替え',       note:null,                              req:true  },
  ]},
  { id:'equip', cat:'🔦 装備・道具', items:[
    { id:'e1', name:'ヘッドライト＋予備電池',  note:'スマホライト不可',              planA:true },
    { id:'e2', name:'登山用ストック',          note:'下山の膝負担を大幅軽減',        req:false  },
    { id:'e3', name:'ヘルメット',             note:'六合目で貸出可（¥2,000デポジット）', req:false },
    { id:'e4', name:'リュック（20〜30L）',    note:null,                             req:true  },
    { id:'e5', name:'ゴミ袋・ジップロック',   note:'山内ゴミ捨て不可',              req:true  },
    { id:'e6', name:'モバイルバッテリー',      note:'寒さで電池消耗が激しい',         req:true  },
  ]},
  { id:'food', cat:'🍙 食料・飲料', items:[
    { id:'f1', name:'水 1.5〜2L / 人',              note:'山小屋でも買えるが高額（¥500〜）', req:true  },
    { id:'f2', name:'行動食（チョコ・ゼリー・おにぎり）', note:'こまめにエネルギー補給',    req:true  },
    { id:'f3', name:'温かい飲み物（魔法瓶）',       note:'深夜の寒さに効果大',              planA:true },
    { id:'f4', name:'塩分補給タブレット',            note:'電解質補給',                     req:false  },
  ]},
  { id:'med', cat:'💊 薬・衛生用品', items:[
    { id:'m1', name:'高山病薬（ダイアモックス）',     note:'要医師処方・前日から服用',       req:true  },
    { id:'m2', name:'頭痛薬',                         note:'高山病の頭痛に',                req:true  },
    { id:'m3', name:'胃腸薬',                         note:null,                             req:true  },
    { id:'m4', name:'絆創膏・テーピング',             note:'靴擦れ対策',                    req:true  },
    { id:'m5', name:'日焼け止め SPF50以上',           note:'標高が上がるほど紫外線が強い',   req:true  },
    { id:'m6', name:'サングラス（スポーツタイプ）',   note:'隙間から光が入らないものを',     req:true  },
    { id:'m7', name:'リップクリーム',                 note:null,                             req:false  },
  ]},
  { id:'money', cat:'💴 お金・書類', items:[
    { id:'p1', name:'通行料 4,000円 / 人',              note:'事前オンラインor当日窓口',  req:true },
    { id:'p2', name:'トイレ代の小銭（200〜300円×複数回）', note:null,                      req:true },
    { id:'p3', name:'健康保険証',                       note:null,                        req:true },
    { id:'p4', name:'スマホ（フル充電）',               note:null,                        req:true },
  ]},
];
