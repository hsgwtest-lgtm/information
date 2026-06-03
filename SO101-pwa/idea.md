## SO101 仮想PWA — 実装依頼（Phase 1-2）

### プロジェクト概要
LeRobot SO-101（6軸+グリッパー = 7DoF）の仮想シミュレーターPWAを実装してください。
GitHub Pages（iOS Safari）で動作することが最優先です。

---

### デプロイ先
`hsgwtest-lgtm.github.io/SO101-pwa/`

---

### ファイル構成（必ずこの構成で作成）

```
SO101-pwa/
├── index.html
├── manifest.json
├── sw.js
├── css/
│   └── style.css
├── js/
│   ├── main.js          # 起動・タブ管理
│   ├── robot.js         # FK計算・Three.jsモデル構築
│   ├── viewer.js        # Three.jsシーン・OrbitControls
│   ├── controls.js      # スライダーUI・モード切替
│   ├── ik.js            # CCD逆運動学アルゴリズム
│   ├── sequencer.js     # タスクステップ実行エンジン
│   ├── objects.js       # 仮想オブジェクト（箱）描画・判定
│   └── animation.js     # ステップ間LERP/SLERP補間
└── icons/
    ├── icon-192.png
    └── icon-512.png
```

---

### 技術スタック
- **Three.js r128**（CDN: `https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js`）
- OrbitControlsも同CDNから取得
- フレームワークなし（Vanilla JS）
- ES Modules使用可

---

### SO101 DHパラメータ（概算値）

| Joint | a(mm) | d(mm) | alpha(rad) | 可動域 |
|-------|-------|-------|------------|--------|
| J1    | 0     | 100   | π/2        | ±180° |
| J2    | 130   | 0     | 0          | -90°〜+90° |
| J3    | 120   | 0     | 0          | -90°〜+90° |
| J4    | 0     | 0     | π/2        | ±180° |
| J5    | 0     | 100   | -π/2       | ±90° |
| J6    | 0     | 60    | 0          | ±180° |
| Gripper | —  | —     | —          | 0〜100% |

---

### 操作モード

#### Mode A: FKリモコン
- 7本のスライダー（Joint1〜6 + Gripper）
- スライダー操作 → Three.jsモデルにリアルタイム反映
- ホームポジションボタン・ゼロポジションボタン

#### Mode B: IK（エンドエフェクタ指定）
- XYZ座標スライダー（またはinput[type=number]）
- Roll/Pitch/Yaw スライダー（オプション、初期はロック可）
- **CCDアルゴリズム**で解を計算（最大反復100回、収束条件1mm）
- 解なし時はエラー表示、最終有効姿勢を維持

#### Mode C: シーケンサー（Phase 2）
- REACH → GRASP → CARRY → RELEASE の4ステップ
- 各ステップにターゲット座標を設定
- 実行・一時停止・リセットボタン
- ループ再生モード
- ステップ間はLERP補間（0.05秒刻みでアニメーション）

---

### 仮想オブジェクト（箱）のルール
```
グリッパーEEとの距離 < 30mm
  AND グリッパー閉じ率 > 50%
    → オブジェクトをEEにアタッチ（追従）

グリッパー閉じ率 < 20%
    → デタッチ → Y=0（床面）へ落下アニメーション
```
- 箱サイズ: 40×40×40mm
- 初期位置: (200, 20, 0) mm

---

### UI/UXデザイン
- **ダーク・グラスモーフィズム**テーマ
  - 背景: `#0a0a0f`
  - パネル: `rgba(255,255,255,0.05)` + `backdrop-filter: blur(12px)`
  - アクセント: シアン `#00d4ff`
- タブ切替: `[FK] [IK] [SEQ]`
- レイアウト: 上60% Three.js Viewer / 下40% コントロールパネル
- iOS SafeエリアCSS対応（`env(safe-area-inset-*)` ）
- タッチスライダーは高さ44px以上

---

### PWA設定
- `manifest.json`: `display: standalone`, `orientation: portrait`
- `sw.js`: キャッシュファースト戦略（Three.js CDNはネットワークフォールバック）
- iOSホーム画面追加ヒント表示（初回起動時のみ）

---

### 実装の優先順位
1. `robot.js` — DH変換行列・FK計算関数
2. `viewer.js` — Three.jsシーン・プリミティブでSO101モデル
3. `controls.js` — FKスライダーUI（Mode A）
4. `ik.js` — CCD実装（Mode B）
5. `objects.js` + `sequencer.js` + `animation.js`（Mode C）
6. PWA仕上げ

---

### 注意事項
- Three.js r128では `THREE.OrbitControls` は別途インポート必要
- iOS Safariでは `touchstart` のpassiveリスナーに注意
- GitHubPages運用のためパス解決は相対パスで統一
- WebSocket口は `js/bridge.js`（空ファイル）として用意だけしておく（Phase 3用）
