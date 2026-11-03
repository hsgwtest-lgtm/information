# 旅の思い出ボックス（hottikis）

前面の文字プレートを「化粧板」と呼ぶ。

旅のたびに、前面のシルエット板だけ作り直して飾る壁掛けボックス。
箱一式（フレーム・蓋・壁プレート）とシルエットを、Bambu Lab A1 の1プレートで印刷できる。

## 旅ごとの手順
1. `configs/<国>.json` を作る（`korea.json` をコピーして書き換え）
   - `title`：大きい英字（例 `TAIWAN`）
   - `local`：現地語（例 `台灣`）と置く位置
   - `icons`：モチーフ4つ（下の一覧から選ぶ。なければ `tabi_plate.py` に関数を追加）
   - `dates`：`YY.MM.DD-YY.MM.DD`
   - 都市版（同じ国の別の街を区別する）：`title` に都市名（SEOUL/BUSAN）、`local` に現地語の都市名（서울/부산）、`band_text` に国名＋日付（`KOREA  26.10.31-26.11.02`）、`horizon` に街の地平線（`mountain`＝山の稜線 / `wave`＝海の波）
2. `python3 tabi_plate.py configs/<国>.json` → `out/<国>_silhouette.stl`（浮いた部分は自動でブリッジ。1枚につながらないとエラー）
3. `python3 preview.py <国>` で見た目を確認
4. 1プレート3MFを作る
   - 初回（箱も印刷）：`python3 make_1plate.py <国>` → `out/<国>_all_1plate.3mf`
   - 2回目以降（シルエットだけ）：`python3 make_1plate.py <国> --silhouette-only`
5. Bambu Studio でスライス → スライス後の画像を確認 → 印刷
   - サポート：有効・**ビルドプレートのみ**（溝にサポートを入れない）

## デザインのルール
- 英字（タイトル）は必ず上下の帯に接する。長い単語は文字を細くしすぎず（横方向は最大0.85倍まで）、上の帯とモチーフをまとめて下げて調整する
- 浮いた部分は約1mm幅のブリッジでつなぐ。上下の帯は左右の溝に隠れる柱でつなぐ

- 線もすき間も **0.8mm以上**（0.4mmノズル2本分）。`tabi_plate.py` が自動でチェックし、細い所があると止まって `out/<name>_thin.png` に赤（細い線）・青（細いすき間）で場所を出す。小さい文字や記号は白抜きの細線にせず、太線で描くか黒地に白抜きにする

## 寸法
- シルエット：96×93mm・厚さ1.0mm。溝(幅2.0mm)に下敷き0.8mmと重ねて入れる（シルエットが奥、下敷きが手前）
- 箱：正面106mm角、内寸90mm角・奥行31mm（`box/build_box.py`）

## モチーフ一覧
| 国 | 関数 |
|---|---|
| 韓国 | `n_seoul_tower` `namdaemun` `fried_chicken` `soju_bottle` |
| 釜山 | `busan_tower` `gwangan_bridge` `eomuk` `gamcheon` |
| 地平線 | `mountain`（ソウル） `wave`（釜山） |
| 台湾 | `taipei101` `temple` `xiaolongbao` `bubble_tea` |
