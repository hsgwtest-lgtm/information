"""箱一式（フレーム・蓋・壁プレート）＋前面シルエットを A1 の1プレート(256mm角)に並べた3MFを作る
使い方: python3 make_1plate.py taiwan   （先に tabi_plate.py で out/taiwan_silhouette.stl を作っておく）
       python3 make_1plate.py taiwan --silhouette-only   （シルエットだけ）
"""
import sys, numpy as np, trimesh
name = sys.argv[1]; only = '--silhouette-only' in sys.argv
def place(m, x0, y0, rot=0):
    m = m.copy()
    if rot: m.apply_transform(trimesh.transformations.rotation_matrix(np.radians(rot), [0, 0, 1]))
    m.apply_translation([x0-m.bounds[0][0], y0-m.bounds[0][1], -m.bounds[0][2]]); return m
S = trimesh.load(f'out/{name}_silhouette.stl')
items = []
if only:
    items.append(('silhouette', place(S, 128-S.extents[0]/2, 128-S.extents[1]/2)))
else:
    items += [('frame', place(trimesh.load('box/frame.stl'), 10, 10)),
              ('wall_plate', place(trimesh.load('box/wall_plate.stl'), 128, 10)),
              ('lid', place(trimesh.load('box/lid.stl'), 228, 10, rot=90)),
              ('silhouette', place(S, 10, 128))]
b = np.vstack([m.bounds for _, m in items]); assert b.min() >= 0 and b[:, :2].max() <= 256, b
sc = trimesh.Scene()
for n, m in items: sc.add_geometry(m, node_name=n, geom_name=n)
out = f'out/{name}_{"silhouette" if only else "all"}_1plate.3mf'
sc.export(out); print(out, 'extent', b.min(0).round(1), b.max(0).round(1))
