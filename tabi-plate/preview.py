import pickle, sys, matplotlib, numpy as np, shapely
matplotlib.use('Agg')
import matplotlib.pyplot as plt
plt.rcParams['font.family']='Noto Sans CJK JP'
from matplotlib.patches import PathPatch, Rectangle
from matplotlib.path import Path
def patch(g, **kw):
    verts=[];codes=[]
    for poly in getattr(g,'geoms',[g]):
        for ring in [poly.exterior]+list(poly.interiors):
            c=np.asarray(ring.coords); verts+=list(c); codes+=[Path.MOVETO]+[Path.LINETO]*(len(c)-2)+[Path.CLOSEPOLY]
    return PathPatch(Path(verts,codes),**kw)
names=sys.argv[1:]
cols=min(len(names),2); rows=(len(names)+1)//2; fig,axs=plt.subplots(rows,cols,figsize=(7*cols,7.2*rows)); axs=np.atleast_1d(axs).ravel()
for ax,n in zip(np.atleast_1d(axs),names):
    G=pickle.load(open(f'out/{n}.pkl','rb'))
    ax.add_patch(patch(G,fc='#151515',ec='none'))
    ax.add_patch(Rectangle((-45,-45),90,90,fill=False,ec='#e0402a',lw=1.0,ls='--'))
    ax.set_xlim(-50,50);ax.set_ylim(-50,46);ax.set_aspect('equal');ax.axis('off');ax.set_title(n.upper(),fontsize=13)
plt.tight_layout();plt.savefig('out/compare.png',dpi=100)
