# 旅の思い出ディスプレイ v4（正面正方形・壁に密着・隠し蓋）
import numpy as np, trimesh
from manifold3d import Manifold, CrossSection, Mesh
def box(x0,x1,y0,y1,z0,z1): return Manifold.cube([x1-x0,y1-y0,z1-z0]).translate([x0,y0,z0])
def ccw(p):
    a=sum(p[i][0]*p[(i+1)%len(p)][1]-p[(i+1)%len(p)][0]*p[i][1] for i in range(len(p))); return p if a>0 else p[::-1]
def prism_xz(poly,y0,y1):   # poly (x,z), along y
    poly=[(x,-z) for x,z in poly]; poly=ccw(poly)
    m=Manifold.extrude(CrossSection([poly]),y1-y0).rotate([90,0,0])   # (x,y,z)->(x,-z,y)... check below
    return m
def remap(m,f):
    me=m.to_mesh(); v=me.vert_properties[:,:3]; v2=f(v)
    return Manifold(Mesh(vert_properties=np.ascontiguousarray(v2,dtype=np.float32),tri_verts=np.ascontiguousarray(me.tri_verts,dtype=np.uint32)))
def ext(poly,a0,a1,axis):
    """poly in the plane of the two other axes (cyclic order), extruded along axis from a0 to a1"""
    m=Manifold.extrude(CrossSection([ccw(poly)]),a1-a0)   # local (u,v,w)
    if axis=='z': f=lambda v: np.stack([v[:,0],v[:,1],v[:,2]+a0],1)          # poly (x,y)
    if axis=='x': f=lambda v: np.stack([v[:,2]+a0,v[:,0],v[:,1]],1)          # poly (y,z)
    if axis=='y': f=lambda v: np.stack([v[:,1],v[:,2]+a0,v[:,0]],1)          # poly (z,x)
    return remap(m,f)
def cyl(r,h,n=48): return Manifold.cylinder(h,r,r,n)
def tm(m): me=m.to_mesh(); return trimesh.Trimesh(vertices=me.vert_properties[:,:3],faces=me.tri_verts)

IN=90.0; W=8.0                      # 内寸（正方形）・枠の太さ（上下左右すべて8mm）
SK=5.3                               # 壁プレートを隠すスカート（壁まで届く）
BACK=6.0; DEPTH_IN=31.0
G0=BACK+DEPTH_IN; GW=2.0; GD=3.5; CH=1.5; LIP=2.0; ZF=G0+GW+CH+LIP
X1=IN/2+W; YB=-IN/2-W; YT=IN/2; ZB=-SK
gp=[(0,G0),(GD,G0),(GD,G0+GW),(CH,G0+GW),(0,G0+GW+CH)]   # (深さ,z)

# ---------- フレーム ----------
fr=box(-X1,X1,YB,YT,0,BACK)                                       # 背板
fr+=box(IN/2,X1,YB,YT,ZB,ZF)+box(-X1,-IN/2,YB,YT,ZB,ZF)+box(-X1,X1,YB,-IN/2,ZB,ZF)  # 側・底（壁まで）
# 下敷きの溝
cut=ext([(z,IN/2+d) for d,z in gp],-IN/2-GD,YT+1,'y')+ext([(z,-IN/2-d) for d,z in gp],-IN/2-GD,YT+1,'y')
cut+=ext([(-IN/2-d,z) for d,z in gp],-IN/2-GD,IN/2+GD,'x')
fr-=cut
# 蓋用のあり溝（側壁の上面、背面側から前へ。前端は閉じる）
DV_Z1=G0-1.0
for s in (-1,1):
    cx=s*(IN/2+W/2)
    fr-=ext([(cx-1.7,YT+0.01),(cx+1.7,YT+0.01),(cx+2.5,YT-1.8),(cx-2.5,YT-1.8)],ZB-0.1,DV_Z1,'z')
# 背板のありみぞ（2段のキーホール：押し当てて10.5mm下げると掛かる）
def dove(y0,y1): return ext([(-8.3,-0.01),(8.3,-0.01),(12.3,4.0),(-12.3,4.0)],y0,y1,'y') if False else ext([(-0.01,-8.3),(-0.01,8.3),(4.0,12.3),(4.0,-12.3)],y0,y1,'y')
def window(y0,y1): return box(-12.45,12.45,y0,y1,-0.01,4.05)
fr-=window(-19.8,-9.2)+dove(-9.3,1.3)+window(1.2,11.8)+dove(11.7,22.3)

# ---------- 蓋 ----------
lid=box(-X1,X1,YT,YT+W,ZB,ZF)
for s in (-1,1):
    cx=s*(IN/2+W/2)
    # あり：すき間は片側0.2mm（0.4mmは緩すぎた。2026-11-04 えいいち確認）
    lid+=ext([(cx-1.5,YT+0.3),(cx+1.5,YT+0.3),(cx+2.3,YT-1.6),(cx-2.3,YT-1.6)],ZB,DV_Z1-0.3,'z')

# ---------- 壁プレート ----------
PW,PH,PT=88.0,76.0,5.0
pl=box(-PW/2,PW/2,-PH/2,PH/2,0,PT)
def receiver(cx,cy):
    a,b=15,30; e=3.5; pk=box(cx-a/2,cx+a/2,cy-b/2,cy+b/2,0.4,2.5)
    pts=[[cx+sx*w/2,cy+sy*h/2,z] for (w,h,z) in ((a,b,2.5),(a+2*e,b+2*e,PT+0.01)) for sx in(-1,1) for sy in(-1,1)]
    return pk+Manifold.hull_points(np.array(pts))
for cx in(-32,32):
    for cy in(-19,19): pl-=receiver(cx,cy)
def tongue(y0,y1):
    t=ext([(PT-0.01,-8.0),(PT-0.01,8.0),(PT+3.8,11.8),(PT+3.8,-11.8)],y0,y1,'y')
    return t
pl+=tongue(5.5,15.5)+tongue(-15.5,-5.5)

parts={'frame':fr,'lid':lid,'plate':pl}
for k,m in parts.items():
    t=tm(m); print(k,m.status().name,t.is_watertight,t.bounds.round(2).tolist(),round(t.volume/1000,1)); t.export(f'v5_{k}.stl')
print('front',2*X1,'x',YT+W-YB,' depth',ZF-ZB,' sheet',IN+2*GD-0.5,IN+GD-0.3)
