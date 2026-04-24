# ANA 特典航空券 マイルシミュレーター PWA

## ファイル構成

```
ana-pwa/
├── index.html      ← メインアプリ（React + Tailwind全込み）
├── manifest.json   ← PWAマニフェスト
├── sw.js           ← Service Worker（オフライン対応）
└── README.md       ← このファイル
```

## GitHub Pages デプロイ手順

### 1. リポジトリ作成
```bash
# GitHubで新規リポジトリ作成後
git init
git add .
git commit -m "feat: ANA miles simulator PWA"
git branch -M main
git remote add origin https://github.com/<USERNAME>/<REPO_NAME>.git
git push -u origin main
```

### 2. GitHub Pages 有効化
1. GitHubリポジトリ → Settings → Pages
2. Source: `Deploy from a branch`
3. Branch: `main` / `/ (root)` → Save

### 3. アクセスURL
```
https://<USERNAME>.github.io/<REPO_NAME>/
```

## iOS Safari PWA として使う方法

1. Safari で上記URLを開く
2. 画面下部の「共有」ボタン（⬆）をタップ
3. 「ホーム画面に追加」を選択
4. 名前を確認して「追加」
→ ネイティブアプリのようにスタンドアロン起動します

## データ更新方法

`index.html` 内の `ZONES` 配列を編集してください（約80行目付近）：

```javascript
const ZONES = [
  {
    id: 'zone1',
    name: 'ゾーン1',
    miles: {
      economy:         { L: 12000, R: 15000, H: 18000 },
      premium_economy: { L: 18000, R: 22000, H: 27000 },
      business:        { L: 22000, R: 27000, H: 33000 },
      first:           { L: 33000, R: 40000, H: 50000 },
    }
  },
  // ...
];
```

## シーズン定義（変更可能）

```javascript
function detectSeason(date) {
  // H = ハイシーズン: 12/20-1/8, 4/25-5/6, 7/22-8/31
  // L = ローシーズン: 1/9-3/19, 6月, 9月, 10/1-14
  // R = レギュラー: それ以外
}
```

## 注意事項
- データはサンプルです。ANAの最新マイル数は公式サイトでご確認ください
- キャンペーン特典など特別条件は含まれていません
