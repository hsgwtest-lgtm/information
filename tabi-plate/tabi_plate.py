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


# ---------- 釜山 ----------
def busan_tower(x, b=BASE):
    g = unary_union([
        Polygon([(x-4.5, b-0.5), (x+4.5, b-0.5), (x+3.5, b+2.5), (x-3.5, b+2.5)]),
        Polygon([(x-1.8, b+2.5), (x+1.8, b+2.5), (x+1.3, b+28), (x-1.3, b+28)]),          # 塔身
        Polygon([(x-1.3, b+28), (x+1.3, b+28), (x+4.2, b+31.5), (x-4.2, b+31.5)]),          # 蓮の花のように開く展望部
        box(x-4.2, b+31.5, x+4.2, b+34), Polygon([(x-4.2, b+34), (x+4.2, b+34), (x+2.6, b+36), (x-2.6, b+36)]),
        Polygon([(x-0.7, b+36), (x+0.7, b+36), (x+0.4, b+42), (x-0.4, b+42)]),
    ])
    return g - box(x-3.2, b+32.2, x+3.2, b+33.3)

def gwangan_bridge(x, b=BASE):
    """広安大橋：2本の主塔と吊りケーブル"""
    dk = b+4.0
    g = box(x-15, dk, x+15, dk+1.3)                                     # 橋桁
    for px in (-14.2, -7, 7, 14.2): g = g | box(x+px-0.8, b-0.5, x+px+0.8, dk)   # 橋脚
    for tx in (-7, 7):
        g = g | box(x+tx-0.9, dk, x+tx+0.9, b+18) | box(x+tx-1.6, b+12.5, x+tx+1.6, b+13.5)
    def cable(x0, y0, x1, y1, sag):
        t = np.linspace(0, 1, 30); xs = x0+(x1-x0)*t; ys = y0+(y1-y0)*t - sag*4*t*(1-t)
        return LineString(list(zip(xs, ys))).buffer(0.45)
    g = g | cable(x-7, b+17.5, x+7, b+17.5, 10.5) | cable(x-15, dk+1.2, x-7, b+17.5, -1.5) | cable(x+7, b+17.5, x+15, dk+1.2, 1.5)
    for hx in (-4.5, -2, 2, 4.5):                                        # ハンガー
        t = (hx+7)/14; yc = b+17.5 - 10.5*4*t*(1-t)
        g = g | box(x+hx-0.35, dk+1.2, x+hx+0.35, yc+0.2)
    return g

def gamcheon(x, b=BASE):
    """甘川文化村：坂に重なる小さな家"""
    hill = Polygon([(x-8, b-0.5), (x+8, b-0.5), (x+8, b+5), (x-8, b+0.5)])
    houses = [(-5.2, 0.0, 5.2, 5.0), (0.2, 1.8, 5.2, 5.8), (5.4, 3.6, 5.0, 5.0), (-2.6, 5.0, 4.8, 4.6), (2.8, 7.6, 4.8, 4.6), (0.0, 12.2, 4.4, 4.2)]
    g = hill
    for (dx, y, w, h) in houses:
        hb = box(x+dx-w/2, b+y-0.5, x+dx+w/2, b+y+h)
        hb = hb - box(x+dx-w/2+0.9, b+y+h-2.5, x+dx-w/2+2.0, b+y+h-1.2)
        hb = hb - box(x+dx+w/2-2.0, b+y+h-2.5, x+dx+w/2-0.9, b+y+h-1.2)
        g = g | hb
    return g

def eomuk(x, b=BASE):
    """串おでん（オムク）：紙コップに刺さった波形の練り物2本"""
    cup = Polygon([(x-4.0, b-0.5), (x+4.0, b-0.5), (x+4.8, b+7), (x-4.8, b+7)])
    g = cup - box(x-3.4, b+4.6, x+3.4, b+5.3)
    for (sx, ang, top) in ((-1.6, 10, 19), (1.8, -12, 21)):
        stick = LineString([(x+sx, b+6), (x+sx+np.sin(np.radians(-ang))*top*0.5, b+top+1.5)]).buffer(0.5, cap_style=2)
        yy = np.linspace(b+8.5, b+18.5, 60)                                     # 波形に折った練り物
        xx = x+sx+2.0*np.sin((yy-b)*np.pi/2.2)+np.sin(np.radians(-ang))*(yy-b-6)*0.5
        cake = LineString(list(zip(xx, yy))).buffer(1.15, join_style=1)
        g = g | stick | cake
    return g

def horizon_mountain(b):
    """ソウル：山の稜線（北漢山・南山）"""
    xs = [-48, -45, -42, -40, -29.5, -27, -25.2, -23, 12.5, 14.5, 16.5, 34, 42.5, 45, 48]
    ys = [1.2, 4.0, 2.2, 0.4, 0.4, 3.6, 1.2, 0.3, 0.3, 3.0, 0.4, 0.3, 0.3, 2.8, 1.2]
    return Polygon([(-48, b-0.5)]+[(xx, b+yy) for xx, yy in zip(xs, ys)]+[(48, b-0.5)])

def horizon_wave(b):
    """釜山：海の波"""
    xs = np.linspace(-48, 48, 400); ys = b+1.4+1.0*np.sin(xs/48*np.pi*9)
    g = Polygon([(-48, b-0.5)]+list(zip(xs, ys))+[(48, b-0.5)])
    return g

HORIZON = dict(mountain=horizon_mountain, wave=horizon_wave)

# ---------- ハノイ ----------
def hanoi_flag_tower(x, b=BASE):
    """ハノイ国旗掲揚塔（3段の台座＋八角塔＋旗）"""
    g = unary_union([box(x-6, b-0.5, x+6, b+3), box(x-4.6, b+3, x+4.6, b+6), box(x-3.4, b+6, x+3.4, b+8.5),
                     Polygon([(x-2.2, b+8.5), (x+2.2, b+8.5), (x+1.8, b+24), (x-1.8, b+24)]),
                     box(x-2.6, b+24, x+2.6, b+25.5), box(x-1.6, b+25.5, x+1.6, b+27.5),
                     box(x-0.45, b+27.5, x+0.45, b+40),
                     Polygon([(x+0.4, b+39.8), (x+7.5, b+38.3), (x+7.0, b+35.6), (x+0.4, b+35.0)])])  # 旗
    for yy in (12, 16, 20): g = g - box(x-0.6, b+yy, x+0.6, b+yy+1.6)      # 窓
    return g - box(x-1.4, b-0.5, x+1.4, b+2.2)

def one_pillar_pagoda(x, b=BASE):
    """一柱寺：池から立つ1本の柱の上のお堂"""
    g = unary_union([box(x-9, b-0.5, x+9, b+1.4),                          # 池
                     Polygon([(x-1.3, b+1.4), (x+1.3, b+1.4), (x+1.0, b+7.5), (x-1.0, b+7.5)]),   # 1本柱
                     Polygon([(x-3.6, b+7.5), (x+3.6, b+7.5), (x+5.4, b+9.2), (x-5.4, b+9.2)]),   # 柱の上の受け
                     box(x-4.4, b+9.2, x+4.4, b+12.6),                      # お堂
                     roof(x, b+12.2, 17, 5.0, 1.8), Point(x, b+17.6).buffer(1.0, 16)])
    g = g - box(x-2.8, b+9.8, x+2.8, b+11.8)
    return g - box(x-7.5, b+0.3, x+7.5, b+0.8)

def scooter(x, b=BASE):
    """ハノイのバイク（ベスパ型スクーター）"""
    wr, wf = (x-5.8, b+2.4), (x+6.0, b+2.4)
    body = unary_union([affinity.scale(Point(x-4.6, b+5.6).buffer(1, 48), 4.6, 3.4),       # 後ろの丸いボディ
                        box(x-2.0, b+2.8, x+4.2, b+4.4),                                       # 足元
                        Polygon([(x+3.2, b+2.8), (x+5.6, b+3.4), (x+6.4, b+10.5), (x+4.6, b+11.0), (x+3.4, b+4.4)]),  # 前の盾
                        Point(x+6.0, b+3.6).buffer(2.4, 32).intersection(box(x+3, b+3.6, x+9, b+7))])  # 前フェンダー
    g = unary_union([Point(wr).buffer(2.4, 32), Point(wf).buffer(2.4, 32), body,
                     affinity.scale(Point(x-4.4, b+9.4).buffer(1, 32), 3.6, 0.9),             # シート
                     box(x+3.2, b+10.6, x+8.2, b+11.6), Point(x+7.2, b+12.2).buffer(0.9, 16),  # ハンドルとライト
                     box(x-1.0, b-0.5, x+1.0, b+3.0)])
    for c in (wr, wf): g = g - Point(c).buffer(1.0, 24)
    return g

def pho_bowl(x, b=BASE):
    bowl = Point(x, b+7).buffer(7, 64).intersection(box(x-7.5, b+1.5, x+7.5, b+7))
    g = unary_union([box(x-2.5, b-0.5, x+2.5, b+1.6), bowl, box(x-7.6, b+7, x+7.6, b+8.0),
                     LineString([(x-2, b+8), (x+7.5, b+16)]).buffer(0.5), LineString([(x-0.5, b+8), (x+8.6, b+14.5)]).buffer(0.5)])  # 箸
    steam = unary_union([LineString([(x+dx, b+9.5), (x+dx+1.0, b+11.5), (x+dx-0.5, b+13.5), (x+dx+0.5, b+15.5)]).buffer(0.55) for dx in (-4.5, -1.5)])
    return (g | steam) - box(x-5.5, b+3.8, x+5.5, b+4.6)

# ---------- マニラ ----------
def rizal_monument(x, b=BASE):
    g = unary_union([box(x-6, b-0.5, x+6, b+2.5), box(x-4.5, b+2.5, x+4.5, b+8.5),
                     Polygon([(x-2.2, b+8.5), (x+2.2, b+8.5), (x+0.9, b+33), (x-0.9, b+33)]),   # オベリスク
                     Point(x, b+34).buffer(1.1, 16)])
    g = g | box(x-1.6, b+8.5, x+1.6, b+13.5)                              # 像
    return g - box(x-3.2, b+4, x+3.2, b+7)

def manila_cathedral(x, b=BASE):
    g = unary_union([box(x-10, b-0.5, x+10, b+11), Polygon([(x-10, b+11), (x+10, b+11), (x, b+16)]),
                     box(x+6.5, b+11, x+10, b+19), Point(x+8.25, b+19).buffer(1.75, 24),       # 鐘楼
                     Point(x, b+19.5).buffer(3.0, 32).intersection(box(x-3.2, b+15, x+3.2, b+23)), box(x-0.35, b+22, x+0.35, b+26),
                     box(x-1.3, b+24.3, x+1.3, b+25)])                    # ドームと十字架
    g = g - (box(x-2.4, b-0.5, x+2.4, b+5) | Point(x, b+5).buffer(2.4, 24))
    for dx in (-6.5, 6.5): g = g - (box(x+dx-1.2, b+5, x+dx+1.2, b+8) | Point(x+dx, b+8).buffer(1.2, 16))
    return g - Point(x, b+12.6).buffer(1.4, 24)

def jeepney(x, b=BASE):
    g = unary_union([Point(x-6, b+2.2).buffer(2.2, 32), Point(x+6, b+2.2).buffer(2.2, 32),
                     box(x-10, b+2.4, x+7, b+9.5),                        # 客室
                     Polygon([(x+7, b+2.4), (x+11, b+2.4), (x+11, b+6.4), (x+7, b+7.6)]),  # ボンネット
                     box(x-10.5, b+9.5, x+7.5, b+10.6),                   # 屋根
                     Polygon([(x+8.0, b+10.6), (x+11.0, b+12.6), (x+11.0, b+13.4), (x+7.2, b+10.6)]),  # 飾り
                     box(x-1.0, b-0.5, x+1.0, b+2.6)])
    for wx in range(-9, 6, 3): g = g - box(x+wx+0.3, b+6.2, x+wx+2.3, b+8.6)   # 窓
    for c in (-6, 6): g = g - Point(x+c, b+2.2).buffer(0.9, 16)
    return g

# ---------- セブ ----------
def palm_tree(x, b=BASE):
    t = np.linspace(0, 1, 30)
    trunk = LineString(list(zip(x+3.0*t**2, b-0.5+30*t))).buffer(1.0)
    top = (x+3.0, b+29.5); leaves = []
    for ang, L in ((160, 10), (130, 9), (95, 7), (60, 9), (25, 10), (195, 8), (-15, 8)):
        a = np.radians(ang); pts = [(top[0]+L*s*np.cos(a), top[1]+L*s*np.sin(a)-2.2*s**2*L/6) for s in np.linspace(0, 1, 12)]
        leaves.append(LineString(pts).buffer(1.1, cap_style=1))
    return unary_union([trunk, Point(top).buffer(1.6, 16)]+leaves)

def magellans_cross(x, b=BASE):
    """マゼランクロスの八角堂"""
    g = unary_union([box(x-9, b-0.5, x+9, b+1.6), box(x-7.5, b+1.6, x+7.5, b+10),
                     Polygon([(x-10, b+10), (x+10, b+10), (x+5, b+15), (x-5, b+15)]),
                     box(x-0.6, b+15, x+0.6, b+21), box(x-2.2, b+18.6, x+2.2, b+19.6)])
    for dx in (-4.2, 0, 4.2):
        g = g - (box(x+dx-1.4, b+1.6, x+dx+1.4, b+6.5) | Point(x+dx, b+6.5).buffer(1.4, 16))
    return g

def lechon(x, b=BASE):
    """レチョン（豚の丸焼き）：串に刺して脚を前後に伸ばした姿"""
    body = affinity.scale(Point(x, b+7.2).buffer(1, 64), 8.0, 3.6)
    head = unary_union([Point(x+8.2, b+8.0).buffer(2.8, 32),
                        Polygon([(x+10.0, b+7.0), (x+13.0, b+6.6), (x+13.2, b+8.6), (x+10.4, b+9.6)])])
    ear = Polygon([(x+7.0, b+10.2), (x+8.0, b+12.8), (x+9.4, b+10.6)])
    legs = unary_union([LineString([(x+4.5, b+5.0), (x+9.0, b+3.4)]).buffer(0.9), LineString([(x+2.5, b+4.8), (x+7.0, b+3.0)]).buffer(0.9),
                        LineString([(x-4.5, b+5.0), (x-9.5, b+3.6)]).buffer(0.9), LineString([(x-2.8, b+4.6), (x-7.8, b+3.0)]).buffer(0.9)])
    tail = LineString([(x-7.8, b+8.4), (x-9.6, b+9.6), (x-9.0, b+11.0), (x-8.0, b+10.2)]).buffer(0.45)
    spit = unary_union([LineString([(x-14.5, b+7.6), (x+15, b+7.6)]).buffer(0.5), box(x-14.5, b-0.5, x-13.3, b+7.6), box(x+13.8, b-0.5, x+15.0, b+7.6)])
    g = unary_union([body, head, ear, legs, tail, spit])
    g = g - Point(x+9.0, b+8.8).buffer(0.55, 12)
    for dx in (-4, -1, 2): g = g - LineString([(x+dx-0.6, b+10.0), (x+dx+0.6, b+5.6)]).buffer(0.3)   # 焼き目
    return g

def mango(x, b=BASE):
    m = affinity.rotate(affinity.scale(Point(0, 0).buffer(1, 64), 4.0, 5.6), -25)
    g = unary_union([affinity.translate(m, x, b+6.6), LineString([(x+1.6, b+11.6), (x+2.6, b+13.8)]).buffer(0.6),
                     affinity.translate(affinity.rotate(affinity.scale(Point(0, 0).buffer(1, 32), 2.8, 1.1), 25), x+4.6, b+13.4)])
    return g - affinity.translate(affinity.rotate(affinity.scale(Point(0, 0).buffer(1, 24), 0.8, 2.0), -25), x-1.2, b+7.6)

def horizon_lake(b):
    """ハノイ：湖のさざなみ（低め）"""
    xs = np.linspace(-48, 48, 400); ys = b+0.9+0.45*np.sin(xs/48*np.pi*16)
    return Polygon([(-48, b-0.5)]+list(zip(xs, ys))+[(48, b-0.5)])

def horizon_sunset(b):
    """マニラ湾の夕日：波＋水平線に沈む太陽"""
    g = horizon_wave(b)
    sun = Point(36, b+1.0).buffer(7.6, 64).intersection(box(-99, b, 99, b+20)) - Point(36, b+1.0).buffer(6.3, 64)
    rays = unary_union([LineString([(36+8.8*np.cos(np.radians(a)), b+1+8.8*np.sin(np.radians(a))),
                                    (36+10.6*np.cos(np.radians(a)), b+1+10.6*np.sin(np.radians(a)))]).buffer(0.55) for a in (30, 60, 90, 120, 150)])
    return g | sun | rays

HORIZON.update(lake=horizon_lake, sunset=horizon_sunset)

ICONS = dict(hanoi_flag_tower=hanoi_flag_tower, one_pillar_pagoda=one_pillar_pagoda, scooter=scooter, pho_bowl=pho_bowl, rizal_monument=rizal_monument, manila_cathedral=manila_cathedral, jeepney=jeepney, palm_tree=palm_tree, magellans_cross=magellans_cross, lechon=lechon, mango=mango, busan_tower=busan_tower, gwangan_bridge=gwangan_bridge, gamcheon=gamcheon, eomuk=eomuk, n_seoul_tower=n_seoul_tower, namdaemun=namdaemun, fried_chicken=fried_chicken, soju_bottle=soju_bottle,
             taipei101=taipei101, temple=temple, xiaolongbao=xiaolongbao, bubble_tea=bubble_tea)


# ---------- セブ：ジンベイザメとカジノ ----------
def _bez(P, t):
    P = np.array(P, float); t = np.asarray(t)[:, None]
    return (1-t)**3*P[0] + 3*(1-t)**2*t*P[1] + 3*(1-t)*t**2*P[2] + t**3*P[3]

def whale_shark(x, b=BASE):
    """波から弧を描いて跳び上がるジンベイザメ（尾は波しぶきの中、頭は右上）"""
    P = [(x-20, b+1.5), (x-17, b+20), (x-8, b+38), (x+11, b+38.5)]
    t = np.linspace(0, 1, 200); C = _bez(P, t)
    d = np.gradient(C, axis=0); d /= np.linalg.norm(d, axis=1)[:, None]
    n = np.stack([-d[:, 1], d[:, 0]], 1)            # 左法線＝背中側
    w = np.interp(t, [0, 0.12, 0.35, 0.6, 0.8, 0.93, 1.0], [1.0, 1.9, 4.0, 5.8, 6.4, 6.2, 5.6])
    L = C + n*w[:, None]; R = C - n*w[:, None]
    body = Polygon(list(map(tuple, L)) + list(map(tuple, R[::-1]))).buffer(0)
    # 平たく四角い頭の先（角を丸める）
    e = C[-1]; de = d[-1]; ne = n[-1]
    nose = Polygon([tuple(e+ne*5.6), tuple(e+ne*4.6+de*2.0), tuple(e-ne*4.4+de*2.0), tuple(e-ne*5.6)]).buffer(0.8).buffer(-0.8)
    body = unary_union([body, nose])
    def at(tt, off):
        i = int(tt*199); return C[i] + n[i]*off, d[i], n[i]
    # 三日月形の尾びれ（上葉が長い）
    p, dd, nn = at(0.0, 0)
    up = p - dd*4.5 - nn*8.5; lo = p - dd*3.0 + nn*5.5
    tail = Polygon([tuple(p+dd*2.5+nn*1.3), tuple(lo), tuple(p-dd*0.8), tuple(up), tuple(p+dd*2.5-nn*1.3)]).buffer(0.35)
    # 第1背びれ・第2背びれ
    p, dd, nn = at(0.50, 5.0)
    dors = Polygon([tuple(p+dd*3.4-nn*1.2), tuple(p-dd*3.4+nn*6.2), tuple(p-dd*3.2-nn*1.2)])
    p2, dd2, nn2 = at(0.24, 3.0)
    dors2 = Polygon([tuple(p2+dd2*1.8-nn2*0.8), tuple(p2-dd2*2.0+nn2*3.0), tuple(p2-dd2*1.8-nn2*0.8)])
    # 胸びれ（腹側へ後ろ向きに）
    p, dd, nn = at(0.74, -5.6)
    pect = Polygon([tuple(p+dd*3.0+nn*1.2), tuple(p-dd*6.5-nn*6.0), tuple(p-dd*1.5+nn*1.2)])
    g = unary_union([body, tail, dors, dors2, pect])
    # 横長の大きな口（頭の先端に切り込み）、目、えら
    tip = e + de*2.0
    mouth = Polygon([tuple(tip+de*1 - ne*0.4), tuple(tip+de*1 - ne*2.4), tuple(tip - de*4.5 - ne*1.9)]).buffer(0.3)
    eye = Point(*(e - de*3.2 + ne*2.4)).buffer(0.8, 16)
    gills = unary_union([LineString([tuple(C[i]+n[i]*3.4), tuple(C[i]-n[i]*3.8)]).buffer(0.5) for i in (int(0.87*199), int(0.83*199), int(0.79*199))])
    g = g - mouth - eye - gills
    # 白い斑点と縞（ジンベイザメの水玉模様）
    inner = body.buffer(-1.2)
    for tt in np.linspace(0.16, 0.76, 13):
        i = int(tt*199); k = int(round(tt*20)) % 2
        m = 2 if w[i] < 3 else 4
        for s in np.linspace(-0.68, 0.68, m) + (0.17 if k else -0.0)*(m > 2):
            q = C[i] + n[i]*w[i]*s
            spot = Point(*q).buffer(0.5 + 0.3*w[i]/6.4, 16)
            if inner.contains(spot): g = g - spot
    # 頭の上の細かい点
    for (u, v) in ((-6.5, 3.4), (-6.0, 0.6), (-8.4, 2.0), (-9.0, 4.6), (-8.4, -0.8)):
        spot = Point(*(e + de*u + ne*v)).buffer(0.5, 12)
        if inner.contains(spot): g = g - spot
    # 水しぶき：尾の入水点から王冠状に
    base0 = np.array([x-20.0, b+1.0]); sp = []
    for ang, Lh, wb in ((158, 6.5, 1.1), (128, 8.0, 1.2), (52, 8.0, 1.2), (24, 6.5, 1.1)):
        a = np.radians(ang); tipp = base0 + np.array([np.cos(a), np.sin(a)])*Lh
        sp.append(Polygon([tuple(base0 + np.array([-wb*1.6, 0])), tuple(tipp), tuple(base0 + np.array([wb*1.6, 0]))]))
        sp.append(Point(*tipp).buffer(0.85, 12))
    return unary_union([g] + sp)

def _card(cx, cy, w, h, ang, suit):
    c = box(-w/2+1, -h/2+1, w/2-1, h/2-1).buffer(1.0, 8)
    c = c - box(-w/2+1.0, -h/2+1.0, w/2-1.0, h/2-1.0).buffer(1.0, 8).buffer(-1.1)   # 縁取り1.1mm
    c = c | suit
    return affinity.translate(affinity.rotate(c, ang, origin=(0, 0)), cx, cy)

def _spade(s=1.0):
    h = unary_union([Point(-1.6*s, 0).buffer(2.0*s, 32), Point(1.6*s, 0).buffer(2.0*s, 32),
                     Polygon([(-3.55*s, -0.3*s), (3.55*s, -0.3*s), (0, 4.6*s)])])
    return unary_union([h, Polygon([(0, -0.5*s), (-1.8*s, -3.6*s), (1.8*s, -3.6*s)])])

def _heart(s=1.0):
    return unary_union([Point(-1.5*s, 0.6*s).buffer(1.9*s, 32), Point(1.5*s, 0.6*s).buffer(1.9*s, 32),
                        Polygon([(-3.3*s, 0.0), (3.3*s, 0.0), (0, -4.2*s)])])

def casino_cards(x, b=BASE):
    """トランプ2枚（黒地にハート・スペードを白抜き）。線もすき間も1mm以上"""
    def card(cx, cy, ang, suit):
        c = box(-5.0, -7.5, 5.0, 7.5).buffer(1.0, 8)
        c = c - affinity.translate(suit(1.05), 0, -0.4)                       # 中央の大きなマーク
        c = c - affinity.translate(suit(0.42), -3.6, 5.4)                     # 左上の小さなマーク
        return affinity.translate(affinity.rotate(c, ang, origin=(0, 0)), cx, cy)
    back = card(x-4.4, b+9.4, 20, _heart)
    front = card(x+3.6, b+9.8, -10, _spade)
    back = (back - front.buffer(1.0)).buffer(-0.45).buffer(0.45)              # 重なり部分は1mmのすき間
    g = unary_union([back, front, box(x-8, b-0.5, x+8, b+1.6)])
    close = g.buffer(1.0).buffer(-1.0).intersection(box(x-9, b-0.5, x+9, b+4.0))   # 足元の細いすき間を埋める
    return unary_union([g, close])

def _dollar(cx, cy, hgt):
    """太線で描いた＄（線1.1mm・すき間1mm以上）"""
    k = hgt/7.0; lw = 0.55*max(k, 1.0)
    t = np.linspace(0, 1, 60)
    # S字：上の弧→斜め→下の弧
    up = [(cx+1.6*k*np.cos(a), cy+1.6*k+1.2*k*np.sin(a)) for a in np.linspace(np.radians(10), np.radians(270), 40)]
    lo = [(cx+1.6*k*np.cos(a), cy-1.6*k+1.2*k*np.sin(a)) for a in np.linspace(np.radians(90), np.radians(-170), 40)]
    S = LineString(up + lo).buffer(lw, cap_style=1)
    bar = LineString([(cx, cy-4.2*k), (cx, cy+4.2*k)]).buffer(lw, cap_style=2)
    return unary_union([S, bar])

def chip_stack(x, b=BASE):
    """カジノチップの山と、立てかけた$チップ（線もすき間も1mm以上）"""
    g = []; H = 3.0
    for k in range(4):
        y = b + k*H; dx = (0.5 if k % 2 else -0.4)
        ch = box(x-5.6+dx, (y if k else b-0.5), x+5.6+dx, y+H)
        for sx in (-3.2, 0, 3.2): ch = ch - box(x+dx+sx-0.6, y+1.0, x+dx+sx+0.6, y+2.0)   # 縁の模様（白1.2×1.0）
        g.append(ch)
    stack = unary_union(g)
    for k in range(1, 4):                       # 段の区切り：両端にV字の切れ込み
        y = b + k*H
        for sgn in (-1, 1):
            ex = x + sgn*6.2
            stack = stack - Polygon([(ex, y-0.6), (ex - sgn*1.6, y), (ex, y+0.6)])
    cx, cy, R = x+0.6, b+4*H+6.6, 6.0
    face = Point(cx, cy).buffer(R, 64)
    for k in range(8):                          # 外周の切り欠き（幅1.6・深さ1.3）
        face = face - affinity.rotate(box(cx+R-1.3, cy-0.8, cx+R+0.5, cy+0.8), k*45+22.5, origin=(cx, cy))
    face = face - Point(cx, cy).buffer(3.75, 64)       # 中を抜いて…
    face = face | _dollar(cx, cy, 6.4)                  # 太い＄を内側の輪につなげて描く
    return unary_union([stack, face])

def dice(x, b=BASE):
    d = affinity.rotate(box(x-3.6, b+0.0, x+3.6, b+7.2).buffer(0.8, 8).buffer(-0.8, 8), 12, origin=(x, b+0.3))
    c = d.centroid
    for px, py in ((-1.9, 1.9), (0, 0), (1.9, -1.9), (-1.9, -1.9), (1.9, 1.9)):
        q = affinity.rotate(Point(c.x+px, c.y+py), 12, origin=(c.x, c.y))
        d = d - q.buffer(0.75, 16)
    return d | box(x-3.5, b-0.5, x+3.0, b+1.0)

ICONS.update(whale_shark=whale_shark, casino_cards=casino_cards, chip_stack=chip_stack, dice=dice)

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
    if cfg.get('horizon'):                     # 地平線（街の性格：山・海など）
        G = G | HORIZON[cfg['horizon']](base)
    for it in cfg['icons']:
        G = G | ICONS[it['type']](it['x'], b=base)
    L = cfg['local']
    G = G | fit(text_geom(L['text']), L['x0'], L['x1'], base-0.4, base+L.get('h', 12.0), keep_aspect=True)
    band = cfg.get('band_text', cfg['dates'])  # 下の帯（日付。都市版は国名も入れる）
    G = G - fit(text_geom(band), -40, 40, -44.0, -39.3, keep_aspect=True)
    return connect(G).buffer(0)

# ================= 細さチェック =================
MIN_W = 0.8     # 線・すき間の最小幅（0.4mmノズル2本分）。これより細い所があると印刷を止める
WIN = box(-45, -45, 45, 45)   # 正面から見える範囲

def _long_side(p):
    r = p.minimum_rotated_rectangle; xy = np.array(r.exterior.coords)
    return max(np.hypot(*(xy[1]-xy[0])), np.hypot(*(xy[2]-xy[1])))

def thin_check(G, minw=MIN_W):
    """細すぎる「線」と「すき間」を見つける（窓から見える所だけ）"""
    r = minw/2
    op = G.buffer(-r, join_style=1).buffer(r, join_style=1)
    thin = G.difference(op.buffer(0.03)).intersection(WIN)
    hole = box(-70, -70, 70, 70).difference(G)
    gop = hole.buffer(-r, join_style=1).buffer(r, join_style=1)
    gap = hole.difference(gop.buffer(0.03)).intersection(WIN.buffer(-0.5))
    pick = lambda g: [p for p in getattr(g, 'geoms', [g]) if p.area > 0.25 and not p.is_empty
                      and _long_side(p) > 2.5]
    return pick(thin), pick(gap)

def thin_report(name, G):
    import matplotlib; matplotlib.use('Agg'); import matplotlib.pyplot as plt
    thin, gap = thin_check(G)
    if thin or gap:
        fig, ax = plt.subplots(figsize=(7, 7))
        for p in getattr(G, 'geoms', [G]):
            ax.fill(*p.exterior.xy, color='#222')
            for i in p.interiors: ax.fill(*i.xy, color='white')
        for p in thin: ax.fill(*p.exterior.xy, color='red')
        for p in gap: ax.fill(*p.exterior.xy, color='deepskyblue')
        ax.set_aspect('equal'); ax.axis('off'); ax.set_title(f'{name}: 細い線(赤) {len(thin)} / 細いすき間(青) {len(gap)}')
        plt.savefig(f'out/{name}_thin.png', dpi=110); plt.close()
    return thin, gap

if __name__ == '__main__':
    import trimesh
    cfg = json.load(open(sys.argv[1])); name = cfg['name']
    os.makedirs('out', exist_ok=True)
    G = build(cfg)
    n = len(G.geoms) if G.geom_type == 'MultiPolygon' else 1
    print(name, 'components:', n, 'bounds:', [round(v, 1) for v in G.bounds])
    assert n == 1, '浮いた部分が残っています'
    thin, gap = thin_report(name, G)
    print(name, f'細い線 {len(thin)} か所 / 細いすき間 {len(gap)} か所（{MIN_W}mm未満）', [(round(p.centroid.x,1), round(p.centroid.y,1)) for p in thin+gap][:10])
    if (thin or gap) and '--force' not in sys.argv: sys.exit(f'NG: 細い所があります → out/{name}_thin.png を確認')
    m = trimesh.creation.extrude_polygon(G, THICK)
    m.export(f'out/{name}_silhouette.stl')
    pickle.dump(G, open(f'out/{name}.pkl', 'wb'))
