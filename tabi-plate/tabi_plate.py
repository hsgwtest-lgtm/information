"""旅の思い出ボックス（hottikis）用 前面シルエット生成ツール
使い方: python3 tabi_plate.py configs/korea.json  →  out/<name>_silhouette.stl / _preview.png / _1plate_all.3mf
- 外形・帯・日付・ブリッジ処理は共通。旅ごとに変わるのは title / local / icons / dates だけ。
- 浮いた部分は自動でステンシル風ブリッジ（約1mm幅）を入れて1枚につなぐ。
"""
import json, sys, os, pickle
import numpy as np
from shapely.geometry import Polygon, box, Point, LineString
from shapely.ops import unary_union
from shapely import affinity
from matplotlib.textpath import TextPath
from matplotlib.font_manager import FontProperties

FONT = '/usr/share/fonts/opentype/noto/NotoSansCJK-Black.ttc'
FP = FontProperties(fname=FONT)

# ---------- 箱に合わせた固定寸法（hottikis_tabi v5） ----------
W2 = 48.0                    # 板の半幅（左右の溝に入る）
YB0 = -48.5                  # 下端（溝の底）
BOT_TOP = -37.0              # 日付の帯の上端
TOPBAR = (-14.0, -10.0)      # タイトル上の帯
BASE = TOPBAR[1]             # モチーフが立つ高さ
THICK = 1.0                  # 板厚（溝2.0mm − 下敷き0.8mm）
BRIDGE = 1.0

def text_geom(s, size=10):
    tp = TextPath((0, 0), s, size=size, prop=FP)
    g = Polygon()
    for ring in tp.to_polygons():
        if len(ring) >= 3:
            g = g.symmetric_difference(Polygon(ring).buffer(0))
    return g.buffer(0)

def fit(g, x0, x1, y0, y1, keep_aspect=False):
    b = g.bounds; sx = (x1-x0)/(b[2]-b[0]); sy = (y1-y0)/(b[3]-b[1])
    if keep_aspect: sx = sy = min(sx, sy)
    g = affinity.scale(g, sx, sy, origin=(b[0], b[1])); b = g.bounds
    return affinity.translate(g, (x0+x1)/2-(b[0]+b[2])/2, (y0+y1)/2-(b[1]+b[3])/2)

def roof(cx, y, w, h, lift):
    return Polygon([(cx-w/2, y+lift), (cx-w/2+2.5, y), (cx+w/2-2.5, y), (cx+w/2, y+lift),
                    (cx+w/2-3, y+h*0.55), (cx+w/4, y+h), (cx-w/4, y+h), (cx-w/2+3, y+h*0.55)])

# ================= モチーフ集（x=中心, b=立つ高さ） =================
def n_seoul_tower(x, b=BASE):
    t = unary_union([
        Polygon([(x-5, b-0.5), (x+5, b-0.5), (x+4, b+2), (x-4, b+2)]),
        Polygon([(x-2.2, b+2), (x+2.2, b+2), (x+1.5, b+27), (x-1.5, b+27)]),
        Polygon([(x-3.6, b+27), (x+3.6, b+27), (x+4.2, b+30), (x+3.8, b+33), (x-3.8, b+33), (x-4.2, b+30)]),
        box(x-2.6, b+33, x+2.6, b+35),
        Polygon([(x-1.0, b+35), (x+1.0, b+35), (x+0.6, b+48), (x-0.6, b+48)]),
        box(x-1.6, b+39, x+1.6, b+40.2), box(x-1.3, b+43, x+1.3, b+44),
        box(x-3.0, b+9, x+3.0, b+10.4), box(x-3.0, b+12, x+3.0, b+13.4)])
    return t - box(x-2.4, b+29.2, x+2.4, b+31)

def namdaemun(x, b=BASE):
    stone = Polygon([(x-12, b-0.5), (x+12, b-0.5), (x+10.5, b+8), (x-10.5, b+8)])
    stone = stone - (box(x-2.6, b-1, x+2.6, b+4.2) | Point(x, b+4.2).buffer(2.6, 32))
    g = unary_union([stone, box(x-8, b+8, x+8, b+11), roof(x, b+10.6, 25, 4.6, 1.4),
                     box(x-6, b+15, x+6, b+17.2), roof(x, b+16.8, 21, 5.0, 1.4)])
    for dx in (-5.5, -2, 1.5, 5): g = g - box(x+dx-0.6, b+8.8, x+dx+0.6, b+10.2)
    for dx in (-3.5, 0, 3.5): g = g - box(x+dx-0.6, b+15.6, x+dx+0.6, b+16.6)
    return g

def fried_chicken(x, b=BASE):
    cx, cy = x+3.0, b+13.5
    meat = unary_union([Point(cx, cy).buffer(5.6, 64), Point(cx-4.6, cy-4.8).buffer(2.2, 32)]).convex_hull
    e = (cx-8.6, b+1.9)
    g = unary_union([meat, LineString([(cx-5.0, cy-5.2), e]).buffer(1.1, cap_style=2),
                     Point(e[0]-1.0, e[1]+0.9).buffer(1.5, 32), Point(e[0]+0.9, e[1]-1.0).buffer(1.5, 32)])
    hl = affinity.translate(affinity.rotate(affinity.scale(Point(0, 0).buffer(1, 32), 2.4, 0.9), 35), cx+1.6, cy+2.4)
    return g - hl

def soju_bottle(x, b=BASE):
    g = unary_union([Polygon([(x-4.6, b-0.5), (x+4.6, b-0.5), (x+4.6, b+13), (x+3.6, b+15.5), (x+1.6, b+18),
                              (x+1.6, b+22), (x-1.6, b+22), (x-1.6, b+18), (x-3.6, b+15.5), (x-4.6, b+13)]),
                     box(x-1.9, b+22, x+1.9, b+24.2)])
    return g - box(x-3.0, b+3.5, x+3.0, b+10.5)

def taipei101(x, b=BASE):
    parts = [box(x-5.5, b-0.5, x+5.5, b+3), Polygon([(x-4.2, b+3), (x+4.2, b+3), (x+3.4, b+10), (x-3.4, b+10)])]
    y = b+10
    for i in range(8):                      # 8段の「竹の節」：下が細く上が広い
        h = 3.2
        parts.append(Polygon([(x-2.9, y), (x+2.9, y), (x+3.7, y+h), (x-3.7, y+h)]))
        y += h + 0.0
    parts += [box(x-2.6, y, x+2.6, y+1.6), Polygon([(x-1.8, y+1.6), (x+1.8, y+1.6), (x+1.2, y+4.5), (x-1.2, y+4.5)]),
              Polygon([(x-0.6, y+4.5), (x+0.6, y+4.5), (x+0.4, y+12), (x-0.4, y+12)])]
    g = unary_union(parts)
    # 節の切れ目（細い横スリット：穴だが島にならないよう端は閉じない）
    yy = b+10
    for i in range(8):
        g = g - box(x-2.2, yy+3.2-0.35, x+2.2, yy+3.2+0.35); yy += 3.2
    g = g - Point(x, b+6.5).buffer(1.1, 24)   # 中段の円形装飾（穴）
    return g

def temple(x, b=BASE):
    """台湾の廟：燕尾（ツバメの尾）のように跳ね上がる屋根"""
    g = unary_union([
        box(x-11, b-0.5, x+11, b+2),                       # 基壇
        box(x-9, b+2, x+9, b+9),                           # 本体
        Polygon([(x-14, b+12.5), (x-12.5, b+9), (x+12.5, b+9), (x+14, b+12.5), (x+10, b+12), (x+10, b+13.5),
                 (x-10, b+13.5), (x-10, b+12)]),           # 下の屋根
        box(x-7, b+13.5, x+7, b+15),
        Polygon([(x-13.5, b+20.5), (x-12, b+18.5), (x-9, b+16.5), (x-7, b+15), (x+7, b+15), (x+9, b+16.5),
                 (x+12, b+18.5), (x+13.5, b+20.5), (x+9.5, b+18.6), (x+6, b+17.6), (x-6, b+17.6), (x-9.5, b+18.6)]),  # 燕尾屋根
        Point(x, b+19.0).buffer(1.4, 24),                  # 棟の宝珠
    ])
    g = g - (box(x-2.4, b+2, x+2.4, b+6.8) | Point(x, b+6.8).buffer(2.4, 24))   # 入口
    for dx in (-6.2, 6.2): g = g - box(x+dx-1.3, b+4, x+dx+1.3, b+7)            # 窓
    return g

def xiaolongbao(x, b=BASE):
    """小籠包：せいろの上に包子（ひだは細いスリット）"""
    cx = x+1.0
    steamer = box(cx-8.5, b-0.5, cx+8.5, b+4.5) - box(cx-7.5, b+1.6, cx+7.5, b+2.4)
    bun = unary_union([Point(cx, b+4.5).buffer(6.5, 64).intersection(box(cx-7, b+4.5, cx+7, b+20)),
                       Polygon([(cx-2.6, b+9.5), (cx+2.6, b+9.5), (cx+0.9, b+12.6), (cx-0.9, b+12.6)]),
                       Point(cx, b+12.6).buffer(1.0, 16)])
    g = steamer | bun
    steam = unary_union([LineString([(cx+dx, b+15), (cx+dx+1.0, b+17), (cx+dx-0.6, b+19.5), (cx+dx+0.4, b+21.5)]).buffer(0.6) for dx in (-3.5, 3.5)])
    return g | steam

def bubble_tea(x, b=BASE):
    g = unary_union([
        Polygon([(x-3.6, b-0.5), (x+3.6, b-0.5), (x+4.6, b+15), (x-4.6, b+15)]),   # カップ
        box(x-5.2, b+15, x+5.2, b+16.2),
        Point(x, b+16.2).buffer(4.2, 48).intersection(box(x-5, b+16.2, x+5, b+21)),  # ドーム蓋
        LineString([(x+0.5, b+19), (x+3.8, b+27)]).buffer(0.9, cap_style=2),         # ストロー
    ])
    for (dx, dy) in [(-2.2, 1.6), (0.2, 1.4), (2.4, 1.8), (-1.2, 3.8), (1.3, 3.9), (-2.6, 6.0), (0, 6.2), (2.6, 6.1)]:
        g = g - Point(x+dx, b+dy+0.8).buffer(0.85, 20)                               # タピオカ（穴）
    return g - box(x-3.2, b+11.5, x+3.2, b+12.3)                                     # ミルクティーの境目

ICONS = dict(n_seoul_tower=n_seoul_tower, namdaemun=namdaemun, fried_chicken=fried_chicken, soju_bottle=soju_bottle,
             taipei101=taipei101, temple=temple, xiaolongbao=xiaolongbao, bubble_tea=bubble_tea)

# ================= 組み立て =================
def connect(G, bw=BRIDGE):
    for _ in range(400):
        parts = list(G.geoms) if G.geom_type == 'MultiPolygon' else [G]
        main = [p for p in parts if p.bounds[0] <= -W2+0.01] or [max(parts, key=lambda p: p.area)]
        main = main[0]
        others = [p for p in parts if p is not main and p.area > 0.05]
        if not others: return G
        p = others[0]; rest = G - p; best = None
        for sgn in (-1, 1):
            y0 = p.bounds[1] if sgn < 0 else p.bounds[3]
            x = p.intersection(box(-99, y0-0.7, 99, y0+0.7)).centroid.x
            colp = LineString([(x, -99), (x, 99)]).intersection(p)
            if colp.is_empty: continue
            ysp = [c[1] for g in getattr(colp, 'geoms', [colp]) for c in g.coords]
            y0 = min(ysp) if sgn < 0 else max(ysp)
            hit = LineString([(x, y0+sgn*0.01), (x, y0+sgn*80)]).intersection(rest)
            if hit.is_empty: continue
            ys = [c[1] for g in getattr(hit, 'geoms', [hit]) for c in g.coords]
            yh = max(ys) if sgn < 0 else min(ys)
            d = abs(yh-y0)
            if best is None or d < best[0]: best = (d, min(y0, yh), max(y0, yh), x)
        if best is None: G = G - p; continue
        _, ya, yb, x = best
        G = G | box(x-bw/2, ya-0.3, x+bw/2, yb+0.3)
    return G

TITLE_H_MAX = 23.6      # 英字の最大の高さ（KOREAの基準）
SQUEEZE_MIN = 0.85      # 横方向に縮めてよい限度。これより長い単語は、文字の高さを下げて上の帯ごと下ろす

def layout(title):
    """英字は常に上下の帯に接する。長い単語は上の帯を下げて調整する"""
    g = text_geom(title); b = g.bounds; ar = (b[2]-b[0])/(b[3]-b[1])
    h = min(TITLE_H_MAX, 88.0/(ar*SQUEEZE_MIN))
    w = min(88.0, h*ar)                        # 短い単語は無理に横へ伸ばさない
    y0 = BOT_TOP-0.6; y1 = y0+h
    topbar = (y1-0.6, y1-0.6+4.0)
    return g, w, y0, y1, topbar

def build(cfg):
    tg, w, y0, y1, topbar = layout(cfg['title'])
    base = topbar[1]
    G = box(-W2, YB0, W2, BOT_TOP) | box(-W2, topbar[0], W2, topbar[1])
    # 左右の溝に隠れる柱で上下の帯をつなぐ（正面からは見えない）
    G = G | box(-W2, BOT_TOP-0.1, -45.6, topbar[0]+0.1) | box(45.6, BOT_TOP-0.1, W2, topbar[0]+0.1)
    G = G | fit(tg, -w/2, w/2, y0, y1)
    for it in cfg['icons']:
        G = G | ICONS[it['type']](it['x'], b=base)
    L = cfg['local']
    G = G | fit(text_geom(L['text']), L['x0'], L['x1'], base-0.4, base+L.get('h', 12.0), keep_aspect=True)
    G = G - fit(text_geom(cfg['dates']), -30, 30, -44.0, -39.3, keep_aspect=True)
    return connect(G).buffer(0)

if __name__ == '__main__':
    import trimesh
    cfg = json.load(open(sys.argv[1])); name = cfg['name']
    os.makedirs('out', exist_ok=True)
    G = build(cfg)
    n = len(G.geoms) if G.geom_type == 'MultiPolygon' else 1
    print(name, 'components:', n, 'bounds:', [round(v, 1) for v in G.bounds])
    assert n == 1, '浮いた部分が残っています'
    m = trimesh.creation.extrude_polygon(G, THICK)
    m.export(f'out/{name}_silhouette.stl')
    pickle.dump(G, open(f'out/{name}.pkl', 'wb'))
