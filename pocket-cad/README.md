# Pocket CAD

iPhone から 3D プリント用のモデルを作って **STL で保存**できる PWA。
要件は [REQUIREMENTS.md](REQUIREMENTS.md) を参照。

公開 URL（GitHub Pages）: https://hsgwtest-lgtm.github.io/information/pocket-cad/

## iPhone へのインストール

1. Safari で上の URL を開く
2. 共有ボタン →「ホーム画面に追加」
3. ホーム画面のアイコンから起動（一度開けば以降はオフラインでも動作）

## 使い方

| 操作 | 方法 |
| --- | --- |
| 視点を回す / ズーム・パン | 1 本指ドラッグ / 2 本指 |
| パーツ追加 | 下のトレイをタップ（何も選択していない状態） |
| 選択 / 解除 | パーツをタップ / 何もない所をタップ |
| 移動 | 選択中のパーツをドラッグ（右上の `XY` ⇔ `Z↕` で方向切替） |
| 正確な寸法・位置 | 下のパネルに数値入力（`20+3.5` のような計算式も可） |
| 穴あけ | 穴にしたいパーツを「ソリッド→穴」に切替 → 複数選択（右上ボタン）→「グループ」 |
| 曲線のスケッチ | スケッチ画面で点を選ぶ →「選択辺をベジエ曲線に」→ 青い■ハンドルをドラッグ。「全体を滑らかに」で全辺を一括で曲線化 |
| STL 保存 | 右上の「STL」→「共有 / 保存」→「"ファイル"に保存」や AirDrop |

プロジェクトは端末内に自動保存されます。左上メニューから一覧・新規作成・
`.json` 書き出し（バックアップ／他端末への移動）ができます。

## 構成

```
index.html          画面
css/style.css       スタイル
js/main.js          状態管理・コマンド・パネル UI
js/geometry.js      形状生成・ブーリアン（CSG）・キャッシュ
js/viewport.js      three.js 描画・タッチ操作
js/sketch.js        2D スケッチエディタ（押し出し / 回転体）
js/bezier.js        スケッチのベジエ曲線計算（分割・折れ線化）
js/stl.js           STL 書き出し・読み込み
js/storage.js       IndexedDB 保存
js/ui.js            ダイアログ・数値入力などの部品
vendor/vendor.js    three.js r180 + three-bvh-csg（esbuild でバンドル済み）
sw.js               Service Worker（オフライン対応）
tools/              vendor.js の再生成スクリプト
```

ファイルを変更したら `sw.js` の `VERSION` を上げてください（古いキャッシュが消えます）。
