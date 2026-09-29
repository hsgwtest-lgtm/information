var Si={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},bi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Zf=0,bh=1,$f=2;var Th=1,Jf=2,Wn=3,sn=0,Oe=1,Ze=2,ri=0,ki=1,wh=2,Eh=3,Ah=4,Kf=5,yi=100,jf=101,Qf=102,td=103,ed=104,nd=200,id=201,rd=202,sd=203,ea=204,na=205,od=206,ad=207,cd=208,ld=209,hd=210,ud=211,fd=212,dd=213,pd=214,Xa=0,qa=1,Ya=2,Vi=3,Za=4,$a=5,Ja=6,Ka=7,ja=0,md=1,gd=2,si=0,_d=1,xd=2,yd=3,vd=4,Md=5,Sd=6,bd=7;var Ch=300,qi=301,Yi=302,Qa=303,tc=304,Ks=306,ia=1e3,_i=1001,ra=1002,yn=1003,Td=1004;var js=1005;var Rn=1006,ec=1007;var Ti=1008;var Ln=1009,Rh=1010,Ih=1011,Hr=1012,nc=1013,wi=1014,Xn=1015,Gr=1016,ic=1017,rc=1018,Wr=1020,Ph=35902,Dh=35899,Lh=1021,Nh=1022,vn=1023,Er=1026,Xr=1027,Uh=1028,sc=1029,Fh=1030,oc=1031;var ac=1033,Qs=33776,to=33777,eo=33778,no=33779,cc=35840,lc=35841,hc=35842,uc=35843,fc=36196,dc=37492,pc=37496,mc=37808,gc=37809,_c=37810,xc=37811,yc=37812,vc=37813,Mc=37814,Sc=37815,bc=37816,Tc=37817,wc=37818,Ec=37819,Ac=37820,Cc=37821,Rc=36492,Ic=36494,Pc=36495,Dc=36283,Lc=36284,Nc=36285,Uc=36286;var Cs=2300,sa=2301,ta=2302,ch=2400,lh=2401,hh=2402;var wd=3200,Ed=3201;var Fc=0,Ad=1,oi="",Fe="srgb",Hi="srgb-linear",Rs="linear",ae="srgb";var zi=7680;var uh=519,Cd=512,Rd=513,Id=514,Bh=515,Pd=516,Dd=517,Ld=518,Nd=519,fh=35044;var Oh="300 es",An=2e3,Is=2001;var Vn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let r=n[t];if(r!==void 0){let s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}},ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gf=1234567,Tr=Math.PI/180,Ar=180/Math.PI;function Zi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ze[i&255]+ze[i>>8&255]+ze[i>>16&255]+ze[i>>24&255]+"-"+ze[t&255]+ze[t>>8&255]+"-"+ze[t>>16&15|64]+ze[t>>24&255]+"-"+ze[e&63|128]+ze[e>>8&255]+"-"+ze[e>>16&255]+ze[e>>24&255]+ze[n&255]+ze[n>>8&255]+ze[n>>16&255]+ze[n>>24&255]).toLowerCase()}function Xt(i,t,e){return Math.max(t,Math.min(e,i))}function zh(i,t){return(i%t+t)%t}function sg(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function og(i,t,e){return i!==t?(e-i)/(t-i):0}function ws(i,t,e){return(1-e)*i+e*t}function ag(i,t,e,n){return ws(i,t,1-Math.exp(-e*n))}function cg(i,t=1){return t-Math.abs(zh(i,t*2)-t)}function lg(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function hg(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function ug(i,t){return i+Math.floor(Math.random()*(t-i+1))}function fg(i,t){return i+Math.random()*(t-i)}function dg(i){return i*(.5-Math.random())}function pg(i){i!==void 0&&(gf=i);let t=gf+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function mg(i){return i*Tr}function gg(i){return i*Ar}function _g(i){return(i&i-1)===0&&i!==0}function xg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function yg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function vg(i,t,e,n,r){let s=Math.cos,o=Math.sin,a=s(e/2),u=o(e/2),l=s((t+n)/2),f=o((t+n)/2),p=s((t-n)/2),m=o((t-n)/2),g=s((n-t)/2),y=o((n-t)/2);switch(r){case"XYX":i.set(a*f,u*p,u*m,a*l);break;case"YZY":i.set(u*m,a*f,u*p,a*l);break;case"ZXZ":i.set(u*p,u*m,a*f,a*l);break;case"XZX":i.set(a*f,u*y,u*g,a*l);break;case"YXY":i.set(u*g,a*f,u*y,a*l);break;case"ZYZ":i.set(u*y,u*g,a*f,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function br(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function We(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Bc={DEG2RAD:Tr,RAD2DEG:Ar,generateUUID:Zi,clamp:Xt,euclideanModulo:zh,mapLinear:sg,inverseLerp:og,lerp:ws,damp:ag,pingpong:cg,smoothstep:lg,smootherstep:hg,randInt:ug,randFloat:fg,randFloatSpread:dg,seededRandom:pg,degToRad:mg,radToDeg:gg,isPowerOfTwo:_g,ceilPowerOfTwo:xg,floorPowerOfTwo:yg,setQuaternionFromProperEuler:vg,normalize:We,denormalize:br},ht=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Xt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},on=class{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let u=n[r+0],l=n[r+1],f=n[r+2],p=n[r+3],m=s[o+0],g=s[o+1],y=s[o+2],b=s[o+3];if(a===0){t[e+0]=u,t[e+1]=l,t[e+2]=f,t[e+3]=p;return}if(a===1){t[e+0]=m,t[e+1]=g,t[e+2]=y,t[e+3]=b;return}if(p!==b||u!==m||l!==g||f!==y){let x=1-a,_=u*m+l*g+f*y+p*b,T=_>=0?1:-1,d=1-_*_;if(d>Number.EPSILON){let v=Math.sqrt(d),h=Math.atan2(v,_*T);x=Math.sin(x*h)/v,a=Math.sin(a*h)/v}let c=a*T;if(u=u*x+m*c,l=l*x+g*c,f=f*x+y*c,p=p*x+b*c,x===1-a){let v=1/Math.sqrt(u*u+l*l+f*f+p*p);u*=v,l*=v,f*=v,p*=v}}t[e]=u,t[e+1]=l,t[e+2]=f,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,r,s,o){let a=n[r],u=n[r+1],l=n[r+2],f=n[r+3],p=s[o],m=s[o+1],g=s[o+2],y=s[o+3];return t[e]=a*y+f*p+u*g-l*m,t[e+1]=u*y+f*m+l*p-a*g,t[e+2]=l*y+f*g+a*m-u*p,t[e+3]=f*y-a*p-u*m-l*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,u=Math.sin,l=a(n/2),f=a(r/2),p=a(s/2),m=u(n/2),g=u(r/2),y=u(s/2);switch(o){case"XYZ":this._x=m*f*p+l*g*y,this._y=l*g*p-m*f*y,this._z=l*f*y+m*g*p,this._w=l*f*p-m*g*y;break;case"YXZ":this._x=m*f*p+l*g*y,this._y=l*g*p-m*f*y,this._z=l*f*y-m*g*p,this._w=l*f*p+m*g*y;break;case"ZXY":this._x=m*f*p-l*g*y,this._y=l*g*p+m*f*y,this._z=l*f*y+m*g*p,this._w=l*f*p-m*g*y;break;case"ZYX":this._x=m*f*p-l*g*y,this._y=l*g*p+m*f*y,this._z=l*f*y-m*g*p,this._w=l*f*p+m*g*y;break;case"YZX":this._x=m*f*p+l*g*y,this._y=l*g*p+m*f*y,this._z=l*f*y-m*g*p,this._w=l*f*p-m*g*y;break;case"XZY":this._x=m*f*p-l*g*y,this._y=l*g*p-m*f*y,this._z=l*f*y+m*g*p,this._w=l*f*p+m*g*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],u=e[9],l=e[2],f=e[6],p=e[10],m=n+a+p;if(m>0){let g=.5/Math.sqrt(m+1);this._w=.25/g,this._x=(f-u)*g,this._y=(s-l)*g,this._z=(o-r)*g}else if(n>a&&n>p){let g=2*Math.sqrt(1+n-a-p);this._w=(f-u)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+l)/g}else if(a>p){let g=2*Math.sqrt(1+a-n-p);this._w=(s-l)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(u+f)/g}else{let g=2*Math.sqrt(1+p-n-a);this._w=(o-r)/g,this._x=(s+l)/g,this._y=(u+f)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Xt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,u=e._y,l=e._z,f=e._w;return this._x=n*f+o*a+r*l-s*u,this._y=r*f+o*u+s*a-n*l,this._z=s*f+o*l+n*u-r*a,this._w=o*f-n*a-r*u-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,r=this._y,s=this._z,o=this._w,a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;let u=1-a*a;if(u<=Number.EPSILON){let g=1-e;return this._w=g*o+e*this._w,this._x=g*n+e*this._x,this._y=g*r+e*this._y,this._z=g*s+e*this._z,this.normalize(),this}let l=Math.sqrt(u),f=Math.atan2(l,a),p=Math.sin((1-e)*f)/l,m=Math.sin(e*f)/l;return this._w=o*p+this._w*m,this._x=n*p+this._x*m,this._y=r*p+this._y*m,this._z=s*p+this._z*m,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(_f.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(_f.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,u=t.w,l=2*(o*r-a*n),f=2*(a*e-s*r),p=2*(s*n-o*e);return this.x=e+u*l+o*p-a*f,this.y=n+u*f+a*l-s*p,this.z=r+u*p+s*f-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this.z=Xt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this.z=Xt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,u=e.z;return this.x=r*u-s*a,this.y=s*o-n*u,this.z=n*a-r*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Nl.copy(this).projectOnVector(t),this.sub(Nl)}reflect(t){return this.sub(Nl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Xt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Nl=new F,_f=new on,kt=class i{constructor(t,e,n,r,s,o,a,u,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,u,l)}set(t,e,n,r,s,o,a,u,l){let f=this.elements;return f[0]=t,f[1]=r,f[2]=a,f[3]=e,f[4]=s,f[5]=u,f[6]=n,f[7]=o,f[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],u=n[6],l=n[1],f=n[4],p=n[7],m=n[2],g=n[5],y=n[8],b=r[0],x=r[3],_=r[6],T=r[1],d=r[4],c=r[7],v=r[2],h=r[5],C=r[8];return s[0]=o*b+a*T+u*v,s[3]=o*x+a*d+u*h,s[6]=o*_+a*c+u*C,s[1]=l*b+f*T+p*v,s[4]=l*x+f*d+p*h,s[7]=l*_+f*c+p*C,s[2]=m*b+g*T+y*v,s[5]=m*x+g*d+y*h,s[8]=m*_+g*c+y*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],u=t[6],l=t[7],f=t[8];return e*o*f-e*a*l-n*s*f+n*a*u+r*s*l-r*o*u}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],u=t[6],l=t[7],f=t[8],p=f*o-a*l,m=a*u-f*s,g=l*s-o*u,y=e*p+n*m+r*g;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/y;return t[0]=p*b,t[1]=(r*l-f*n)*b,t[2]=(a*n-r*o)*b,t[3]=m*b,t[4]=(f*e-r*u)*b,t[5]=(r*s-a*e)*b,t[6]=g*b,t[7]=(n*u-l*e)*b,t[8]=(o*e-n*s)*b,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){let u=Math.cos(s),l=Math.sin(s);return this.set(n*u,n*l,-n*(u*o+l*a)+o+t,-r*l,r*u,-r*(-l*o+u*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ul.makeScale(t,e)),this}rotate(t){return this.premultiply(Ul.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ul.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ul=new kt;function kh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ps(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ud(){let i=Ps("canvas");return i.style.display="block",i}var xf={};function Cr(i){i in xf||(xf[i]=!0,console.warn(i))}function Fd(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var yf=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vf=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Mg(){let i={enabled:!0,workingColorSpace:Hi,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ae&&(r.r=ei(r.r),r.g=ei(r.g),r.b=ei(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ae&&(r.r=wr(r.r),r.g=wr(r.g),r.b=wr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===oi?Rs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Cr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Cr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Hi]:{primaries:t,whitePoint:n,transfer:Rs,toXYZ:yf,fromXYZ:vf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Fe},outputColorSpaceConfig:{drawingBufferColorSpace:Fe}},[Fe]:{primaries:t,whitePoint:n,transfer:ae,toXYZ:yf,fromXYZ:vf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Fe}}}),i}var Qt=Mg();function ei(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function wr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var lr,oa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{lr===void 0&&(lr=Ps("canvas")),lr.width=t.width,lr.height=t.height;let r=lr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=lr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ps("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ei(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ei(e[n]/255)*255):e[n]=ei(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Sg=0,Rr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sg++}),this.uuid=Zi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Fl(r[o].image)):s.push(Fl(r[o]))}else s=Fl(r);n.url=s}return e||(t.images[this.uuid]=n),n}};function Fl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?oa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var bg=0,Bl=new F,an=class i extends Vn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=_i,r=_i,s=Rn,o=Ti,a=vn,u=Ln,l=i.DEFAULT_ANISOTROPY,f=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bg++}),this.uuid=Zi(),this.name="",this.source=new Rr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=u,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Bl).x}get height(){return this.source.getSize(Bl).y}get depth(){return this.source.getSize(Bl).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ch)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ia:t.x=t.x-Math.floor(t.x);break;case _i:t.x=t.x<0?0:1;break;case ra:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ia:t.y=t.y-Math.floor(t.y);break;case _i:t.y=t.y<0?0:1;break;case ra:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=Ch;an.DEFAULT_ANISOTROPY=1;var se=class i{constructor(t=0,e=0,n=0,r=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s,u=t.elements,l=u[0],f=u[4],p=u[8],m=u[1],g=u[5],y=u[9],b=u[2],x=u[6],_=u[10];if(Math.abs(f-m)<.01&&Math.abs(p-b)<.01&&Math.abs(y-x)<.01){if(Math.abs(f+m)<.1&&Math.abs(p+b)<.1&&Math.abs(y+x)<.1&&Math.abs(l+g+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let d=(l+1)/2,c=(g+1)/2,v=(_+1)/2,h=(f+m)/4,C=(p+b)/4,A=(y+x)/4;return d>c&&d>v?d<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(d),r=h/n,s=C/n):c>v?c<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(c),n=h/r,s=A/r):v<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(v),n=C/s,r=A/s),this.set(n,r,s,e),this}let T=Math.sqrt((x-y)*(x-y)+(p-b)*(p-b)+(m-f)*(m-f));return Math.abs(T)<.001&&(T=1),this.x=(x-y)/T,this.y=(p-b)/T,this.z=(m-f)/T,this.w=Math.acos((l+g+_-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this.z=Xt(this.z,t.z,e.z),this.w=Xt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this.z=Xt(this.z,t,e),this.w=Xt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},aa=class extends Vn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new se(0,0,t,e),this.scissorTest=!1,this.viewport=new se(0,0,t,e);let r={width:t,height:e,depth:n.depth},s=new an(r);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:Rn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let r=Object.assign({},t.textures[e].image);this.textures[e].source=new Rr(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Hn=class extends aa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ds=class extends an{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=yn,this.minFilter=yn,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ca=class extends an{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=yn,this.minFilter=yn,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ve=class{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Tn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Tn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Tn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Tn):Tn.fromBufferAttribute(s,o),Tn.applyMatrix4(t.matrixWorld),this.expandByPoint(Tn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ao.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ao.copy(n.boundingBox)),Ao.applyMatrix4(t.matrixWorld),this.union(Ao)}let r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Tn),Tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ys),Co.subVectors(this.max,ys),hr.subVectors(t.a,ys),ur.subVectors(t.b,ys),fr.subVectors(t.c,ys),ui.subVectors(ur,hr),fi.subVectors(fr,ur),Ui.subVectors(hr,fr);let e=[0,-ui.z,ui.y,0,-fi.z,fi.y,0,-Ui.z,Ui.y,ui.z,0,-ui.x,fi.z,0,-fi.x,Ui.z,0,-Ui.x,-ui.y,ui.x,0,-fi.y,fi.x,0,-Ui.y,Ui.x,0];return!Ol(e,hr,ur,fr,Co)||(e=[1,0,0,0,1,0,0,0,1],!Ol(e,hr,ur,fr,Co))?!1:(Ro.crossVectors(ui,fi),e=[Ro.x,Ro.y,Ro.z],Ol(e,hr,ur,fr,Co))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Tn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Tn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($n),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},$n=[new F,new F,new F,new F,new F,new F,new F,new F],Tn=new F,Ao=new ve,hr=new F,ur=new F,fr=new F,ui=new F,fi=new F,Ui=new F,ys=new F,Co=new F,Ro=new F,Fi=new F;function Ol(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Fi.fromArray(i,s);let a=r.x*Math.abs(Fi.x)+r.y*Math.abs(Fi.y)+r.z*Math.abs(Fi.z),u=t.dot(Fi),l=e.dot(Fi),f=n.dot(Fi);if(Math.max(-Math.max(u,l,f),Math.min(u,l,f))>a)return!1}return!0}var Tg=new ve,vs=new F,zl=new F,Gi=class{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Tg.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;vs.subVectors(t,this.center);let e=vs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(vs,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(zl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(vs.copy(t.center).add(zl)),this.expandByPoint(vs.copy(t.center).sub(zl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Jn=new F,kl=new F,Io=new F,di=new F,Vl=new F,Po=new F,Hl=new F,qe=class{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Jn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Jn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Jn.copy(this.origin).addScaledVector(this.direction,e),Jn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){kl.copy(t).add(e).multiplyScalar(.5),Io.copy(e).sub(t).normalize(),di.copy(this.origin).sub(kl);let s=t.distanceTo(e)*.5,o=-this.direction.dot(Io),a=di.dot(this.direction),u=-di.dot(Io),l=di.lengthSq(),f=Math.abs(1-o*o),p,m,g,y;if(f>0)if(p=o*u-a,m=o*a-u,y=s*f,p>=0)if(m>=-y)if(m<=y){let b=1/f;p*=b,m*=b,g=p*(p+o*m+2*a)+m*(o*p+m+2*u)+l}else m=s,p=Math.max(0,-(o*m+a)),g=-p*p+m*(m+2*u)+l;else m=-s,p=Math.max(0,-(o*m+a)),g=-p*p+m*(m+2*u)+l;else m<=-y?(p=Math.max(0,-(-o*s+a)),m=p>0?-s:Math.min(Math.max(-s,-u),s),g=-p*p+m*(m+2*u)+l):m<=y?(p=0,m=Math.min(Math.max(-s,-u),s),g=m*(m+2*u)+l):(p=Math.max(0,-(o*s+a)),m=p>0?s:Math.min(Math.max(-s,-u),s),g=-p*p+m*(m+2*u)+l);else m=o>0?-s:s,p=Math.max(0,-(o*m+a)),g=-p*p+m*(m+2*u)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(kl).addScaledVector(Io,m),g}intersectSphere(t,e){Jn.subVectors(t.center,this.origin);let n=Jn.dot(this.direction),r=Jn.dot(Jn)-n*n,s=t.radius*t.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,u=n+o;return u<0?null:a<0?this.at(u,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,u,l=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,m=this.origin;return l>=0?(n=(t.min.x-m.x)*l,r=(t.max.x-m.x)*l):(n=(t.max.x-m.x)*l,r=(t.min.x-m.x)*l),f>=0?(s=(t.min.y-m.y)*f,o=(t.max.y-m.y)*f):(s=(t.max.y-m.y)*f,o=(t.min.y-m.y)*f),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),p>=0?(a=(t.min.z-m.z)*p,u=(t.max.z-m.z)*p):(a=(t.max.z-m.z)*p,u=(t.min.z-m.z)*p),n>u||a>r)||((a>n||n!==n)&&(n=a),(u<r||r!==r)&&(r=u),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Jn)!==null}intersectTriangle(t,e,n,r,s){Vl.subVectors(e,t),Po.subVectors(n,t),Hl.crossVectors(Vl,Po);let o=this.direction.dot(Hl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;di.subVectors(this.origin,t);let u=a*this.direction.dot(Po.crossVectors(di,Po));if(u<0)return null;let l=a*this.direction.dot(Vl.cross(di));if(l<0||u+l>o)return null;let f=-a*di.dot(Hl);return f<0?null:this.at(f/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Gt=class i{constructor(t,e,n,r,s,o,a,u,l,f,p,m,g,y,b,x){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,u,l,f,p,m,g,y,b,x)}set(t,e,n,r,s,o,a,u,l,f,p,m,g,y,b,x){let _=this.elements;return _[0]=t,_[4]=e,_[8]=n,_[12]=r,_[1]=s,_[5]=o,_[9]=a,_[13]=u,_[2]=l,_[6]=f,_[10]=p,_[14]=m,_[3]=g,_[7]=y,_[11]=b,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,r=1/dr.setFromMatrixColumn(t,0).length(),s=1/dr.setFromMatrixColumn(t,1).length(),o=1/dr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),u=Math.cos(r),l=Math.sin(r),f=Math.cos(s),p=Math.sin(s);if(t.order==="XYZ"){let m=o*f,g=o*p,y=a*f,b=a*p;e[0]=u*f,e[4]=-u*p,e[8]=l,e[1]=g+y*l,e[5]=m-b*l,e[9]=-a*u,e[2]=b-m*l,e[6]=y+g*l,e[10]=o*u}else if(t.order==="YXZ"){let m=u*f,g=u*p,y=l*f,b=l*p;e[0]=m+b*a,e[4]=y*a-g,e[8]=o*l,e[1]=o*p,e[5]=o*f,e[9]=-a,e[2]=g*a-y,e[6]=b+m*a,e[10]=o*u}else if(t.order==="ZXY"){let m=u*f,g=u*p,y=l*f,b=l*p;e[0]=m-b*a,e[4]=-o*p,e[8]=y+g*a,e[1]=g+y*a,e[5]=o*f,e[9]=b-m*a,e[2]=-o*l,e[6]=a,e[10]=o*u}else if(t.order==="ZYX"){let m=o*f,g=o*p,y=a*f,b=a*p;e[0]=u*f,e[4]=y*l-g,e[8]=m*l+b,e[1]=u*p,e[5]=b*l+m,e[9]=g*l-y,e[2]=-l,e[6]=a*u,e[10]=o*u}else if(t.order==="YZX"){let m=o*u,g=o*l,y=a*u,b=a*l;e[0]=u*f,e[4]=b-m*p,e[8]=y*p+g,e[1]=p,e[5]=o*f,e[9]=-a*f,e[2]=-l*f,e[6]=g*p+y,e[10]=m-b*p}else if(t.order==="XZY"){let m=o*u,g=o*l,y=a*u,b=a*l;e[0]=u*f,e[4]=-p,e[8]=l*f,e[1]=m*p+b,e[5]=o*f,e[9]=g*p-y,e[2]=y*p-g,e[6]=a*f,e[10]=b*p+m}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(wg,t,Eg)}lookAt(t,e,n){let r=this.elements;return nn.subVectors(t,e),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),pi.crossVectors(n,nn),pi.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),pi.crossVectors(n,nn)),pi.normalize(),Do.crossVectors(nn,pi),r[0]=pi.x,r[4]=Do.x,r[8]=nn.x,r[1]=pi.y,r[5]=Do.y,r[9]=nn.y,r[2]=pi.z,r[6]=Do.z,r[10]=nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],u=n[8],l=n[12],f=n[1],p=n[5],m=n[9],g=n[13],y=n[2],b=n[6],x=n[10],_=n[14],T=n[3],d=n[7],c=n[11],v=n[15],h=r[0],C=r[4],A=r[8],S=r[12],M=r[1],w=r[5],E=r[9],R=r[13],z=r[2],V=r[6],H=r[10],q=r[14],O=r[3],st=r[7],dt=r[11],ft=r[15];return s[0]=o*h+a*M+u*z+l*O,s[4]=o*C+a*w+u*V+l*st,s[8]=o*A+a*E+u*H+l*dt,s[12]=o*S+a*R+u*q+l*ft,s[1]=f*h+p*M+m*z+g*O,s[5]=f*C+p*w+m*V+g*st,s[9]=f*A+p*E+m*H+g*dt,s[13]=f*S+p*R+m*q+g*ft,s[2]=y*h+b*M+x*z+_*O,s[6]=y*C+b*w+x*V+_*st,s[10]=y*A+b*E+x*H+_*dt,s[14]=y*S+b*R+x*q+_*ft,s[3]=T*h+d*M+c*z+v*O,s[7]=T*C+d*w+c*V+v*st,s[11]=T*A+d*E+c*H+v*dt,s[15]=T*S+d*R+c*q+v*ft,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],u=t[9],l=t[13],f=t[2],p=t[6],m=t[10],g=t[14],y=t[3],b=t[7],x=t[11],_=t[15];return y*(+s*u*p-r*l*p-s*a*m+n*l*m+r*a*g-n*u*g)+b*(+e*u*g-e*l*m+s*o*m-r*o*g+r*l*f-s*u*f)+x*(+e*l*p-e*a*g-s*o*p+n*o*g+s*a*f-n*l*f)+_*(-r*a*f-e*u*p+e*a*m+r*o*p-n*o*m+n*u*f)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],u=t[6],l=t[7],f=t[8],p=t[9],m=t[10],g=t[11],y=t[12],b=t[13],x=t[14],_=t[15],T=p*x*l-b*m*l+b*u*g-a*x*g-p*u*_+a*m*_,d=y*m*l-f*x*l-y*u*g+o*x*g+f*u*_-o*m*_,c=f*b*l-y*p*l+y*a*g-o*b*g-f*a*_+o*p*_,v=y*p*u-f*b*u-y*a*m+o*b*m+f*a*x-o*p*x,h=e*T+n*d+r*c+s*v;if(h===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/h;return t[0]=T*C,t[1]=(b*m*s-p*x*s-b*r*g+n*x*g+p*r*_-n*m*_)*C,t[2]=(a*x*s-b*u*s+b*r*l-n*x*l-a*r*_+n*u*_)*C,t[3]=(p*u*s-a*m*s-p*r*l+n*m*l+a*r*g-n*u*g)*C,t[4]=d*C,t[5]=(f*x*s-y*m*s+y*r*g-e*x*g-f*r*_+e*m*_)*C,t[6]=(y*u*s-o*x*s-y*r*l+e*x*l+o*r*_-e*u*_)*C,t[7]=(o*m*s-f*u*s+f*r*l-e*m*l-o*r*g+e*u*g)*C,t[8]=c*C,t[9]=(y*p*s-f*b*s-y*n*g+e*b*g+f*n*_-e*p*_)*C,t[10]=(o*b*s-y*a*s+y*n*l-e*b*l-o*n*_+e*a*_)*C,t[11]=(f*a*s-o*p*s-f*n*l+e*p*l+o*n*g-e*a*g)*C,t[12]=v*C,t[13]=(f*b*r-y*p*r+y*n*m-e*b*m-f*n*x+e*p*x)*C,t[14]=(y*a*r-o*b*r-y*n*u+e*b*u+o*n*x-e*a*x)*C,t[15]=(o*p*r-f*a*r+f*n*u-e*p*u-o*n*m+e*a*m)*C,this}scale(t){let e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,u=t.z,l=s*o,f=s*a;return this.set(l*o+n,l*a-r*u,l*u+r*a,0,l*a+r*u,f*a+n,f*u-r*o,0,l*u-r*a,f*u+r*o,s*u*u+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){let r=this.elements,s=e._x,o=e._y,a=e._z,u=e._w,l=s+s,f=o+o,p=a+a,m=s*l,g=s*f,y=s*p,b=o*f,x=o*p,_=a*p,T=u*l,d=u*f,c=u*p,v=n.x,h=n.y,C=n.z;return r[0]=(1-(b+_))*v,r[1]=(g+c)*v,r[2]=(y-d)*v,r[3]=0,r[4]=(g-c)*h,r[5]=(1-(m+_))*h,r[6]=(x+T)*h,r[7]=0,r[8]=(y+d)*C,r[9]=(x-T)*C,r[10]=(1-(m+b))*C,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){let r=this.elements,s=dr.set(r[0],r[1],r[2]).length(),o=dr.set(r[4],r[5],r[6]).length(),a=dr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],wn.copy(this);let l=1/s,f=1/o,p=1/a;return wn.elements[0]*=l,wn.elements[1]*=l,wn.elements[2]*=l,wn.elements[4]*=f,wn.elements[5]*=f,wn.elements[6]*=f,wn.elements[8]*=p,wn.elements[9]*=p,wn.elements[10]*=p,e.setFromRotationMatrix(wn),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=An,u=!1){let l=this.elements,f=2*s/(e-t),p=2*s/(n-r),m=(e+t)/(e-t),g=(n+r)/(n-r),y,b;if(u)y=s/(o-s),b=o*s/(o-s);else if(a===An)y=-(o+s)/(o-s),b=-2*o*s/(o-s);else if(a===Is)y=-o/(o-s),b=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=f,l[4]=0,l[8]=m,l[12]=0,l[1]=0,l[5]=p,l[9]=g,l[13]=0,l[2]=0,l[6]=0,l[10]=y,l[14]=b,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=An,u=!1){let l=this.elements,f=2/(e-t),p=2/(n-r),m=-(e+t)/(e-t),g=-(n+r)/(n-r),y,b;if(u)y=1/(o-s),b=o/(o-s);else if(a===An)y=-2/(o-s),b=-(o+s)/(o-s);else if(a===Is)y=-1/(o-s),b=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=f,l[4]=0,l[8]=0,l[12]=m,l[1]=0,l[5]=p,l[9]=0,l[13]=g,l[2]=0,l[6]=0,l[10]=y,l[14]=b,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},dr=new F,wn=new Gt,wg=new F(0,0,0),Eg=new F(1,1,1),pi=new F,Do=new F,nn=new F,Mf=new Gt,Sf=new on,cn=class i{constructor(t=0,e=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let r=t.elements,s=r[0],o=r[4],a=r[8],u=r[1],l=r[5],f=r[9],p=r[2],m=r[6],g=r[10];switch(e){case"XYZ":this._y=Math.asin(Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(m,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(u,l)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-p,g),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(u,s));break;case"ZYX":this._y=Math.asin(-Xt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(m,g),this._z=Math.atan2(u,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Xt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-f,l),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Mf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Mf,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Sf.setFromEuler(this),this.setFromQuaternion(Sf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};cn.DEFAULT_ORDER="XYZ";var Ir=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Ag=0,bf=new F,pr=new on,Kn=new Gt,Lo=new F,Ms=new F,Cg=new F,Rg=new on,Tf=new F(1,0,0),wf=new F(0,1,0),Ef=new F(0,0,1),Af={type:"added"},Ig={type:"removed"},mr={type:"childadded",child:null},Gl={type:"childremoved",child:null},Be=class i extends Vn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ag++}),this.uuid=Zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new F,e=new cn,n=new on,r=new F(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Gt},normalMatrix:{value:new kt}}),this.matrix=new Gt,this.matrixWorld=new Gt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ir,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return pr.setFromAxisAngle(t,e),this.quaternion.multiply(pr),this}rotateOnWorldAxis(t,e){return pr.setFromAxisAngle(t,e),this.quaternion.premultiply(pr),this}rotateX(t){return this.rotateOnAxis(Tf,t)}rotateY(t){return this.rotateOnAxis(wf,t)}rotateZ(t){return this.rotateOnAxis(Ef,t)}translateOnAxis(t,e){return bf.copy(t).applyQuaternion(this.quaternion),this.position.add(bf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Tf,t)}translateY(t){return this.translateOnAxis(wf,t)}translateZ(t){return this.translateOnAxis(Ef,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Lo.copy(t):Lo.set(t,e,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(Ms,Lo,this.up):Kn.lookAt(Lo,Ms,this.up),this.quaternion.setFromRotationMatrix(Kn),r&&(Kn.extractRotation(r.matrixWorld),pr.setFromRotationMatrix(Kn),this.quaternion.premultiply(pr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Af),mr.child=t,this.dispatchEvent(mr),mr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ig),Gl.child=t,this.dispatchEvent(Gl),Gl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Kn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Kn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Af),mr.child=t,this.dispatchEvent(mr),mr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,t,Cg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ms,Rg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,u){return a[u.uuid]===void 0&&(a[u.uuid]=u.toJSON(t)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let u=a.shapes;if(Array.isArray(u))for(let l=0,f=u.length;l<f;l++){let p=u[l];s(t.shapes,p)}else s(t.shapes,u)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let u=0,l=this.material.length;u<l;u++)a.push(s(t.materials,this.material[u]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let u=this.animations[a];r.animations.push(s(t.animations,u))}}if(e){let a=o(t.geometries),u=o(t.materials),l=o(t.textures),f=o(t.images),p=o(t.shapes),m=o(t.skeletons),g=o(t.animations),y=o(t.nodes);a.length>0&&(n.geometries=a),u.length>0&&(n.materials=u),l.length>0&&(n.textures=l),f.length>0&&(n.images=f),p.length>0&&(n.shapes=p),m.length>0&&(n.skeletons=m),g.length>0&&(n.animations=g),y.length>0&&(n.nodes=y)}return n.object=r,n;function o(a){let u=[];for(let l in a){let f=a[l];delete f.metadata,u.push(f)}return u}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let r=t.children[n];this.add(r.clone())}return this}};Be.DEFAULT_UP=new F(0,1,0);Be.DEFAULT_MATRIX_AUTO_UPDATE=!0;Be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var En=new F,jn=new F,Wl=new F,Qn=new F,gr=new F,_r=new F,Cf=new F,Xl=new F,ql=new F,Yl=new F,Zl=new se,$l=new se,Jl=new se,le=class i{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),En.subVectors(t,e),r.cross(En);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){En.subVectors(r,e),jn.subVectors(n,e),Wl.subVectors(t,e);let o=En.dot(En),a=En.dot(jn),u=En.dot(Wl),l=jn.dot(jn),f=jn.dot(Wl),p=o*l-a*a;if(p===0)return s.set(0,0,0),null;let m=1/p,g=(l*u-a*f)*m,y=(o*f-a*u)*m;return s.set(1-g-y,y,g)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(t,e,n,r,s,o,a,u){return this.getBarycoord(t,e,n,r,Qn)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(s,Qn.x),u.addScaledVector(o,Qn.y),u.addScaledVector(a,Qn.z),u)}static getInterpolatedAttribute(t,e,n,r,s,o){return Zl.setScalar(0),$l.setScalar(0),Jl.setScalar(0),Zl.fromBufferAttribute(t,e),$l.fromBufferAttribute(t,n),Jl.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(Zl,s.x),o.addScaledVector($l,s.y),o.addScaledVector(Jl,s.z),o}static isFrontFacing(t,e,n,r){return En.subVectors(n,e),jn.subVectors(t,e),En.cross(jn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return En.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),En.cross(jn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return i.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,r=this.b,s=this.c,o,a;gr.subVectors(r,n),_r.subVectors(s,n),Xl.subVectors(t,n);let u=gr.dot(Xl),l=_r.dot(Xl);if(u<=0&&l<=0)return e.copy(n);ql.subVectors(t,r);let f=gr.dot(ql),p=_r.dot(ql);if(f>=0&&p<=f)return e.copy(r);let m=u*p-f*l;if(m<=0&&u>=0&&f<=0)return o=u/(u-f),e.copy(n).addScaledVector(gr,o);Yl.subVectors(t,s);let g=gr.dot(Yl),y=_r.dot(Yl);if(y>=0&&g<=y)return e.copy(s);let b=g*l-u*y;if(b<=0&&l>=0&&y<=0)return a=l/(l-y),e.copy(n).addScaledVector(_r,a);let x=f*y-g*p;if(x<=0&&p-f>=0&&g-y>=0)return Cf.subVectors(s,r),a=(p-f)/(p-f+(g-y)),e.copy(r).addScaledVector(Cf,a);let _=1/(x+b+m);return o=b*_,a=m*_,e.copy(n).addScaledVector(gr,o).addScaledVector(_r,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Bd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mi={h:0,s:0,l:0},No={h:0,s:0,l:0};function Kl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var qt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Fe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=Qt.workingColorSpace){if(t=zh(t,1),e=Xt(e,0,1),n=Xt(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Kl(o,s,t+1/3),this.g=Kl(o,s,t),this.b=Kl(o,s,t-1/3)}return Qt.colorSpaceToWorking(this,r),this}setStyle(t,e=Fe){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Fe){let n=Bd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ei(t.r),this.g=ei(t.g),this.b=ei(t.b),this}copyLinearToSRGB(t){return this.r=wr(t.r),this.g=wr(t.g),this.b=wr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fe){return Qt.workingToColorSpace(ke.copy(this),t),Math.round(Xt(ke.r*255,0,255))*65536+Math.round(Xt(ke.g*255,0,255))*256+Math.round(Xt(ke.b*255,0,255))}getHexString(t=Fe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.workingToColorSpace(ke.copy(this),e);let n=ke.r,r=ke.g,s=ke.b,o=Math.max(n,r,s),a=Math.min(n,r,s),u,l,f=(a+o)/2;if(a===o)u=0,l=0;else{let p=o-a;switch(l=f<=.5?p/(o+a):p/(2-o-a),o){case n:u=(r-s)/p+(r<s?6:0);break;case r:u=(s-n)/p+2;break;case s:u=(n-r)/p+4;break}u/=6}return t.h=u,t.s=l,t.l=f,t}getRGB(t,e=Qt.workingColorSpace){return Qt.workingToColorSpace(ke.copy(this),e),t.r=ke.r,t.g=ke.g,t.b=ke.b,t}getStyle(t=Fe){Qt.workingToColorSpace(ke.copy(this),t);let e=ke.r,n=ke.g,r=ke.b;return t!==Fe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(mi),this.setHSL(mi.h+t,mi.s+e,mi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(mi),t.getHSL(No);let n=ws(mi.h,No.h,e),r=ws(mi.s,No.s,e),s=ws(mi.l,No.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ke=new qt;qt.NAMES=Bd;var Pg=0,Gn=class extends Vn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pg++}),this.uuid=Zi(),this.name="",this.type="Material",this.blending=ki,this.side=sn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ea,this.blendDst=na,this.blendEquation=yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=Vi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=uh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zi,this.stencilZFail=zi,this.stencilZPass=zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ki&&(n.blending=this.blending),this.side!==sn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ea&&(n.blendSrc=this.blendSrc),this.blendDst!==na&&(n.blendDst=this.blendDst),this.blendEquation!==yi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Vi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==uh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==zi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==zi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let u=s[a];delete u.metadata,o.push(u)}return o}if(e){let s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Pr=class extends Gn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=ja,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ie=new F,Uo=new ht,Dg=0,pe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Dg++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=fh,this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Uo.fromBufferAttribute(this,e),Uo.applyMatrix3(t),this.setXY(e,Uo.x,Uo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=br(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=We(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=br(e,this.array)),e}setX(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=br(e,this.array)),e}setY(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=br(e,this.array)),e}setZ(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=br(e,this.array)),e}setW(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array),r=We(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array),r=We(r,this.array),s=We(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==fh&&(t.usage=this.usage),t}};var Ls=class extends pe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ns=class extends pe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Kt=class extends pe{constructor(t,e,n){super(new Float32Array(t),e,n)}},Lg=0,xn=new Gt,jl=new Be,xr=new F,rn=new ve,Ss=new ve,Ue=new F,Te=class i extends Vn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lg++}),this.uuid=Zi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(kh(t)?Ns:Ls)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new kt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return xn.makeRotationFromQuaternion(t),this.applyMatrix4(xn),this}rotateX(t){return xn.makeRotationX(t),this.applyMatrix4(xn),this}rotateY(t){return xn.makeRotationY(t),this.applyMatrix4(xn),this}rotateZ(t){return xn.makeRotationZ(t),this.applyMatrix4(xn),this}translate(t,e,n){return xn.makeTranslation(t,e,n),this.applyMatrix4(xn),this}scale(t,e,n){return xn.makeScale(t,e,n),this.applyMatrix4(xn),this}lookAt(t){return jl.lookAt(t),jl.updateMatrix(),this.applyMatrix4(jl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xr).negate(),this.translate(xr.x,xr.y,xr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let r=0,s=t.length;r<s;r++){let o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Kt(n,3))}else{let n=Math.min(t.length,e.count);for(let r=0;r<n;r++){let s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ve);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){let s=e[n];rn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ue.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Ue)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){let n=this.boundingSphere.center;if(rn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];Ss.setFromBufferAttribute(a),this.morphTargetsRelative?(Ue.addVectors(rn.min,Ss.min),rn.expandByPoint(Ue),Ue.addVectors(rn.max,Ss.max),rn.expandByPoint(Ue)):(rn.expandByPoint(Ss.min),rn.expandByPoint(Ss.max))}rn.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)Ue.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Ue));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],u=this.morphTargetsRelative;for(let l=0,f=a.count;l<f;l++)Ue.fromBufferAttribute(a,l),u&&(xr.fromBufferAttribute(t,l),Ue.add(xr)),r=Math.max(r,n.distanceToSquared(Ue))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pe(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],u=[];for(let A=0;A<n.count;A++)a[A]=new F,u[A]=new F;let l=new F,f=new F,p=new F,m=new ht,g=new ht,y=new ht,b=new F,x=new F;function _(A,S,M){l.fromBufferAttribute(n,A),f.fromBufferAttribute(n,S),p.fromBufferAttribute(n,M),m.fromBufferAttribute(s,A),g.fromBufferAttribute(s,S),y.fromBufferAttribute(s,M),f.sub(l),p.sub(l),g.sub(m),y.sub(m);let w=1/(g.x*y.y-y.x*g.y);isFinite(w)&&(b.copy(f).multiplyScalar(y.y).addScaledVector(p,-g.y).multiplyScalar(w),x.copy(p).multiplyScalar(g.x).addScaledVector(f,-y.x).multiplyScalar(w),a[A].add(b),a[S].add(b),a[M].add(b),u[A].add(x),u[S].add(x),u[M].add(x))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let A=0,S=T.length;A<S;++A){let M=T[A],w=M.start,E=M.count;for(let R=w,z=w+E;R<z;R+=3)_(t.getX(R+0),t.getX(R+1),t.getX(R+2))}let d=new F,c=new F,v=new F,h=new F;function C(A){v.fromBufferAttribute(r,A),h.copy(v);let S=a[A];d.copy(S),d.sub(v.multiplyScalar(v.dot(S))).normalize(),c.crossVectors(h,S);let w=c.dot(u[A])<0?-1:1;o.setXYZW(A,d.x,d.y,d.z,w)}for(let A=0,S=T.length;A<S;++A){let M=T[A],w=M.start,E=M.count;for(let R=w,z=w+E;R<z;R+=3)C(t.getX(R+0)),C(t.getX(R+1)),C(t.getX(R+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let m=0,g=n.count;m<g;m++)n.setXYZ(m,0,0,0);let r=new F,s=new F,o=new F,a=new F,u=new F,l=new F,f=new F,p=new F;if(t)for(let m=0,g=t.count;m<g;m+=3){let y=t.getX(m+0),b=t.getX(m+1),x=t.getX(m+2);r.fromBufferAttribute(e,y),s.fromBufferAttribute(e,b),o.fromBufferAttribute(e,x),f.subVectors(o,s),p.subVectors(r,s),f.cross(p),a.fromBufferAttribute(n,y),u.fromBufferAttribute(n,b),l.fromBufferAttribute(n,x),a.add(f),u.add(f),l.add(f),n.setXYZ(y,a.x,a.y,a.z),n.setXYZ(b,u.x,u.y,u.z),n.setXYZ(x,l.x,l.y,l.z)}else for(let m=0,g=e.count;m<g;m+=3)r.fromBufferAttribute(e,m+0),s.fromBufferAttribute(e,m+1),o.fromBufferAttribute(e,m+2),f.subVectors(o,s),p.subVectors(r,s),f.cross(p),n.setXYZ(m+0,f.x,f.y,f.z),n.setXYZ(m+1,f.x,f.y,f.z),n.setXYZ(m+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(a,u){let l=a.array,f=a.itemSize,p=a.normalized,m=new l.constructor(u.length*f),g=0,y=0;for(let b=0,x=u.length;b<x;b++){a.isInterleavedBufferAttribute?g=u[b]*a.data.stride+a.offset:g=u[b]*f;for(let _=0;_<f;_++)m[y++]=l[g++]}return new pe(m,f,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,r=this.attributes;for(let a in r){let u=r[a],l=t(u,n);e.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let u=[],l=s[a];for(let f=0,p=l.length;f<p;f++){let m=l[f],g=t(m,n);u.push(g)}e.morphAttributes[a]=u}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,u=o.length;a<u;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let u=this.parameters;for(let l in u)u[l]!==void 0&&(t[l]=u[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let u in n){let l=n[u];t.data.attributes[u]=l.toJSON(t.data)}let r={},s=!1;for(let u in this.morphAttributes){let l=this.morphAttributes[u],f=[];for(let p=0,m=l.length;p<m;p++){let g=l[p];f.push(g.toJSON(t.data))}f.length>0&&(r[u]=f,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let r=t.attributes;for(let l in r){let f=r[l];this.setAttribute(l,f.clone(e))}let s=t.morphAttributes;for(let l in s){let f=[],p=s[l];for(let m=0,g=p.length;m<g;m++)f.push(p[m].clone(e));this.morphAttributes[l]=f}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,f=o.length;l<f;l++){let p=o[l];this.addGroup(p.start,p.count,p.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let u=t.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Rf=new Gt,Bi=new qe,Fo=new Gi,If=new F,Bo=new F,Oo=new F,zo=new F,Ql=new F,ko=new F,Pf=new F,Vo=new F,Ye=class extends Be{constructor(t=new Te,e=new Pr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);let a=this.morphTargetInfluences;if(s&&a){ko.set(0,0,0);for(let u=0,l=s.length;u<l;u++){let f=a[u],p=s[u];f!==0&&(Ql.fromBufferAttribute(p,t),o?ko.addScaledVector(Ql,f):ko.addScaledVector(Ql.sub(e),f))}e.add(ko)}return e}raycast(t,e){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fo.copy(n.boundingSphere),Fo.applyMatrix4(s),Bi.copy(t.ray).recast(t.near),!(Fo.containsPoint(Bi.origin)===!1&&(Bi.intersectSphere(Fo,If)===null||Bi.origin.distanceToSquared(If)>(t.far-t.near)**2))&&(Rf.copy(s).invert(),Bi.copy(t.ray).applyMatrix4(Rf),!(n.boundingBox!==null&&Bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Bi)))}_computeIntersections(t,e,n){let r,s=this.geometry,o=this.material,a=s.index,u=s.attributes.position,l=s.attributes.uv,f=s.attributes.uv1,p=s.attributes.normal,m=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let y=0,b=m.length;y<b;y++){let x=m[y],_=o[x.materialIndex],T=Math.max(x.start,g.start),d=Math.min(a.count,Math.min(x.start+x.count,g.start+g.count));for(let c=T,v=d;c<v;c+=3){let h=a.getX(c),C=a.getX(c+1),A=a.getX(c+2);r=Ho(this,_,t,n,l,f,p,h,C,A),r&&(r.faceIndex=Math.floor(c/3),r.face.materialIndex=x.materialIndex,e.push(r))}}else{let y=Math.max(0,g.start),b=Math.min(a.count,g.start+g.count);for(let x=y,_=b;x<_;x+=3){let T=a.getX(x),d=a.getX(x+1),c=a.getX(x+2);r=Ho(this,o,t,n,l,f,p,T,d,c),r&&(r.faceIndex=Math.floor(x/3),e.push(r))}}else if(u!==void 0)if(Array.isArray(o))for(let y=0,b=m.length;y<b;y++){let x=m[y],_=o[x.materialIndex],T=Math.max(x.start,g.start),d=Math.min(u.count,Math.min(x.start+x.count,g.start+g.count));for(let c=T,v=d;c<v;c+=3){let h=c,C=c+1,A=c+2;r=Ho(this,_,t,n,l,f,p,h,C,A),r&&(r.faceIndex=Math.floor(c/3),r.face.materialIndex=x.materialIndex,e.push(r))}}else{let y=Math.max(0,g.start),b=Math.min(u.count,g.start+g.count);for(let x=y,_=b;x<_;x+=3){let T=x,d=x+1,c=x+2;r=Ho(this,o,t,n,l,f,p,T,d,c),r&&(r.faceIndex=Math.floor(x/3),e.push(r))}}}};function Ng(i,t,e,n,r,s,o,a){let u;if(t.side===Oe?u=n.intersectTriangle(o,s,r,!0,a):u=n.intersectTriangle(r,s,o,t.side===sn,a),u===null)return null;Vo.copy(a),Vo.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Vo);return l<e.near||l>e.far?null:{distance:l,point:Vo.clone(),object:i}}function Ho(i,t,e,n,r,s,o,a,u,l){i.getVertexPosition(a,Bo),i.getVertexPosition(u,Oo),i.getVertexPosition(l,zo);let f=Ng(i,t,e,n,Bo,Oo,zo,Pf);if(f){let p=new F;le.getBarycoord(Pf,Bo,Oo,zo,p),r&&(f.uv=le.getInterpolatedAttribute(r,a,u,l,p,new ht)),s&&(f.uv1=le.getInterpolatedAttribute(s,a,u,l,p,new ht)),o&&(f.normal=le.getInterpolatedAttribute(o,a,u,l,p,new F),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));let m={a,b:u,c:l,normal:new F,materialIndex:0};le.getNormal(Bo,Oo,zo,m.normal),f.face=m,f.barycoord=p}return f}var ni=class i extends Te{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let u=[],l=[],f=[],p=[],m=0,g=0;y("z","y","x",-1,-1,n,e,t,o,s,0),y("z","y","x",1,-1,n,e,-t,o,s,1),y("x","z","y",1,1,t,n,e,r,o,2),y("x","z","y",1,-1,t,n,-e,r,o,3),y("x","y","z",1,-1,t,e,n,r,s,4),y("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(u),this.setAttribute("position",new Kt(l,3)),this.setAttribute("normal",new Kt(f,3)),this.setAttribute("uv",new Kt(p,2));function y(b,x,_,T,d,c,v,h,C,A,S){let M=c/C,w=v/A,E=c/2,R=v/2,z=h/2,V=C+1,H=A+1,q=0,O=0,st=new F;for(let dt=0;dt<H;dt++){let ft=dt*w-R;for(let _t=0;_t<V;_t++){let wt=_t*M-E;st[b]=wt*T,st[x]=ft*d,st[_]=z,l.push(st.x,st.y,st.z),st[b]=0,st[x]=0,st[_]=h>0?1:-1,f.push(st.x,st.y,st.z),p.push(_t/C),p.push(1-dt/A),q+=1}}for(let dt=0;dt<A;dt++)for(let ft=0;ft<C;ft++){let _t=m+ft+V*dt,wt=m+ft+V*(dt+1),Z=m+(ft+1)+V*(dt+1),k=m+(ft+1)+V*dt;u.push(_t,wt,k),u.push(wt,Z,k),O+=6}a.addGroup(g,O,S),g+=O,m+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function $i(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Ve(i){let t={};for(let e=0;e<i.length;e++){let n=$i(i[e]);for(let r in n)t[r]=n[r]}return t}function Ug(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Vh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}var Od={clone:$i,merge:Ve},Fg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,In=class extends Gn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fg,this.fragmentShader=Bg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=$i(t.uniforms),this.uniformsGroups=Ug(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Us=class extends Be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Gt,this.projectionMatrix=new Gt,this.projectionMatrixInverse=new Gt,this.coordinateSystem=An,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},gi=new F,Df=new ht,Lf=new ht,Xe=class extends Us{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ar*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Tr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ar*2*Math.atan(Math.tan(Tr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(gi.x,gi.y).multiplyScalar(-t/gi.z),gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gi.x,gi.y).multiplyScalar(-t/gi.z)}getViewSize(t,e){return this.getViewBounds(t,Df,Lf),e.subVectors(Lf,Df)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Tr*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let u=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/u,e-=o.offsetY*n/l,r*=o.width/u,n*=o.height/l}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},yr=-90,vr=1,la=class extends Be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Xe(yr,vr,t,e);r.layers=this.layers,this.add(r);let s=new Xe(yr,vr,t,e);s.layers=this.layers,this.add(s);let o=new Xe(yr,vr,t,e);o.layers=this.layers,this.add(o);let a=new Xe(yr,vr,t,e);a.layers=this.layers,this.add(a);let u=new Xe(yr,vr,t,e);u.layers=this.layers,this.add(u);let l=new Xe(yr,vr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,u]=e;for(let l of e)this.remove(l);if(t===An)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(t===Is)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,u,l,f]=this.children,p=t.getRenderTarget(),m=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),y=t.xr.enabled;t.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,u),t.setRenderTarget(n,4,r),t.render(e,l),n.texture.generateMipmaps=b,t.setRenderTarget(n,5,r),t.render(e,f),t.setRenderTarget(p,m,g),t.xr.enabled=y,n.texture.needsPMREMUpdate=!0}},Fs=class extends an{constructor(t=[],e=qi,n,r,s,o,a,u,l,f){super(t,e,n,r,s,o,a,u,l,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ha=class extends Hn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Fs(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ni(5,5,5),s=new In({name:"CubemapFromEquirect",uniforms:$i(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Oe,blending:ri});s.uniforms.tEquirect.value=e;let o=new Ye(r,s),a=e.minFilter;return e.minFilter===Ti&&(e.minFilter=Rn),new la(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}},xi=class extends Be{constructor(){super(),this.isGroup=!0,this.type="Group"}},Og={type:"move"},Dr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null,a=this._targetRay,u=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let b of t.hand.values()){let x=e.getJointPose(b,n),_=this._getHandJoint(l,b);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}let f=l.joints["index-finger-tip"],p=l.joints["thumb-tip"],m=f.position.distanceTo(p.position),g=.02,y=.005;l.inputState.pinching&&m>g+y?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&m<=g-y&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else u!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Og)))}return a!==null&&(a.visible=r!==null),u!==null&&(u.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new xi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}};var ua=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new qt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},fa=class extends Be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cn,this.environmentIntensity=1,this.environmentRotation=new cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var th=new F,zg=new F,kg=new kt,Ce=class{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let r=th.subVectors(n,e).cross(zg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(th),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||kg.getNormalMatrix(t),r=this.coplanarPoint(th).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Oi=new Gi,Vg=new ht(.5,.5),Go=new F,Lr=class{constructor(t=new Ce,e=new Ce,n=new Ce,r=new Ce,s=new Ce,o=new Ce){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=An,n=!1){let r=this.planes,s=t.elements,o=s[0],a=s[1],u=s[2],l=s[3],f=s[4],p=s[5],m=s[6],g=s[7],y=s[8],b=s[9],x=s[10],_=s[11],T=s[12],d=s[13],c=s[14],v=s[15];if(r[0].setComponents(l-o,g-f,_-y,v-T).normalize(),r[1].setComponents(l+o,g+f,_+y,v+T).normalize(),r[2].setComponents(l+a,g+p,_+b,v+d).normalize(),r[3].setComponents(l-a,g-p,_-b,v-d).normalize(),n)r[4].setComponents(u,m,x,c).normalize(),r[5].setComponents(l-u,g-m,_-x,v-c).normalize();else if(r[4].setComponents(l-u,g-m,_-x,v-c).normalize(),e===An)r[5].setComponents(l+u,g+m,_+x,v+c).normalize();else if(e===Is)r[5].setComponents(u,m,x,c).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Oi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Oi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Oi)}intersectsSprite(t){Oi.center.set(0,0,0);let e=Vg.distanceTo(t.center);return Oi.radius=.7071067811865476+e,Oi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Oi)}intersectsSphere(t){let e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let r=e[n];if(Go.x=r.normal.x>0?t.max.x:t.min.x,Go.y=r.normal.y>0?t.max.y:t.min.y,Go.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Go)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Nr=class extends Gn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},da=new F,pa=new F,Nf=new Gt,bs=new qe,Wo=new Gi,eh=new F,Uf=new F,Bs=class extends Be{constructor(t=new Te,e=new Nr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)da.fromBufferAttribute(e,r-1),pa.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=da.distanceTo(pa);t.setAttribute("lineDistance",new Kt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wo.copy(n.boundingSphere),Wo.applyMatrix4(r),Wo.radius+=s,t.ray.intersectsSphere(Wo)===!1)return;Nf.copy(r).invert(),bs.copy(t.ray).applyMatrix4(Nf);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),u=a*a,l=this.isLineSegments?2:1,f=n.index,m=n.attributes.position;if(f!==null){let g=Math.max(0,o.start),y=Math.min(f.count,o.start+o.count);for(let b=g,x=y-1;b<x;b+=l){let _=f.getX(b),T=f.getX(b+1),d=Xo(this,t,bs,u,_,T,b);d&&e.push(d)}if(this.isLineLoop){let b=f.getX(y-1),x=f.getX(g),_=Xo(this,t,bs,u,b,x,y-1);_&&e.push(_)}}else{let g=Math.max(0,o.start),y=Math.min(m.count,o.start+o.count);for(let b=g,x=y-1;b<x;b+=l){let _=Xo(this,t,bs,u,b,b+1,b);_&&e.push(_)}if(this.isLineLoop){let b=Xo(this,t,bs,u,y-1,g,y-1);b&&e.push(b)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Xo(i,t,e,n,r,s,o){let a=i.geometry.attributes.position;if(da.fromBufferAttribute(a,r),pa.fromBufferAttribute(a,s),e.distanceSqToSegment(da,pa,eh,Uf)>n)return;eh.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(eh);if(!(l<t.near||l>t.far))return{distance:l,point:Uf.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Ff=new F,Bf=new F,ma=class extends Bs{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)Ff.fromBufferAttribute(e,r),Bf.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Ff.distanceTo(Bf);t.setAttribute("lineDistance",new Kt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Os=class extends an{constructor(t,e,n=wi,r,s,o,a=yn,u=yn,l,f=Er,p=1){if(f!==Er&&f!==Xr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let m={width:t,height:e,depth:p};super(m,r,s,o,a,u,f,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Rr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},zs=class extends an{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var ks=class i extends Te{constructor(t=1,e=1,n=1,r=32,s=1,o=!1,a=0,u=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:u};let l=this;r=Math.floor(r),s=Math.floor(s);let f=[],p=[],m=[],g=[],y=0,b=[],x=n/2,_=0;T(),o===!1&&(t>0&&d(!0),e>0&&d(!1)),this.setIndex(f),this.setAttribute("position",new Kt(p,3)),this.setAttribute("normal",new Kt(m,3)),this.setAttribute("uv",new Kt(g,2));function T(){let c=new F,v=new F,h=0,C=(e-t)/n;for(let A=0;A<=s;A++){let S=[],M=A/s,w=M*(e-t)+t;for(let E=0;E<=r;E++){let R=E/r,z=R*u+a,V=Math.sin(z),H=Math.cos(z);v.x=w*V,v.y=-M*n+x,v.z=w*H,p.push(v.x,v.y,v.z),c.set(V,C,H).normalize(),m.push(c.x,c.y,c.z),g.push(R,1-M),S.push(y++)}b.push(S)}for(let A=0;A<r;A++)for(let S=0;S<s;S++){let M=b[S][A],w=b[S+1][A],E=b[S+1][A+1],R=b[S][A+1];(t>0||S!==0)&&(f.push(M,w,R),h+=3),(e>0||S!==s-1)&&(f.push(w,E,R),h+=3)}l.addGroup(_,h,0),_+=h}function d(c){let v=y,h=new ht,C=new F,A=0,S=c===!0?t:e,M=c===!0?1:-1;for(let E=1;E<=r;E++)p.push(0,x*M,0),m.push(0,M,0),g.push(.5,.5),y++;let w=y;for(let E=0;E<=r;E++){let z=E/r*u+a,V=Math.cos(z),H=Math.sin(z);C.x=S*H,C.y=x*M,C.z=S*V,p.push(C.x,C.y,C.z),m.push(0,M,0),h.x=V*.5+.5,h.y=H*.5*M+.5,g.push(h.x,h.y),y++}for(let E=0;E<r;E++){let R=v+E,z=w+E;c===!0?f.push(z,z+1,R):f.push(z+1,z,R),A+=3}l.addGroup(_,A,c===!0?1:2),_+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ga=class i extends ks{constructor(t=1,e=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var qo=new F,Yo=new F,nh=new F,Zo=new le,_a=class extends Te{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let r=Math.pow(10,4),s=Math.cos(Tr*e),o=t.getIndex(),a=t.getAttribute("position"),u=o?o.count:a.count,l=[0,0,0],f=["a","b","c"],p=new Array(3),m={},g=[];for(let y=0;y<u;y+=3){o?(l[0]=o.getX(y),l[1]=o.getX(y+1),l[2]=o.getX(y+2)):(l[0]=y,l[1]=y+1,l[2]=y+2);let{a:b,b:x,c:_}=Zo;if(b.fromBufferAttribute(a,l[0]),x.fromBufferAttribute(a,l[1]),_.fromBufferAttribute(a,l[2]),Zo.getNormal(nh),p[0]=`${Math.round(b.x*r)},${Math.round(b.y*r)},${Math.round(b.z*r)}`,p[1]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,p[2]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,!(p[0]===p[1]||p[1]===p[2]||p[2]===p[0]))for(let T=0;T<3;T++){let d=(T+1)%3,c=p[T],v=p[d],h=Zo[f[T]],C=Zo[f[d]],A=`${c}_${v}`,S=`${v}_${c}`;S in m&&m[S]?(nh.dot(m[S].normal)<=s&&(g.push(h.x,h.y,h.z),g.push(C.x,C.y,C.z)),m[S]=null):A in m||(m[A]={index0:l[T],index1:l[d],normal:nh.clone()})}}for(let y in m)if(m[y]){let{index0:b,index1:x}=m[y];qo.fromBufferAttribute(a,b),Yo.fromBufferAttribute(a,x),g.push(qo.x,qo.y,qo.z),g.push(Yo.x,Yo.y,Yo.z)}this.setAttribute("position",new Kt(g,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},ln=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),r=0,s=n.length,o;e?o=e:o=t*n[s-1];let a=0,u=s-1,l;for(;a<=u;)if(r=Math.floor(a+(u-a)/2),l=n[r]-o,l<0)a=r+1;else if(l>0)u=r-1;else{u=r;break}if(r=u,n[r]===o)return r/(s-1);let f=n[r],m=n[r+1]-f,g=(o-f)/m;return(r+g)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),u=e||(o.isVector2?new ht:new F);return u.copy(a).sub(o).normalize(),u}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new F,r=[],s=[],o=[],a=new F,u=new Gt;for(let g=0;g<=t;g++){let y=g/t;r[g]=this.getTangentAt(y,new F)}s[0]=new F,o[0]=new F;let l=Number.MAX_VALUE,f=Math.abs(r[0].x),p=Math.abs(r[0].y),m=Math.abs(r[0].z);f<=l&&(l=f,n.set(1,0,0)),p<=l&&(l=p,n.set(0,1,0)),m<=l&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let g=1;g<=t;g++){if(s[g]=s[g-1].clone(),o[g]=o[g-1].clone(),a.crossVectors(r[g-1],r[g]),a.length()>Number.EPSILON){a.normalize();let y=Math.acos(Xt(r[g-1].dot(r[g]),-1,1));s[g].applyMatrix4(u.makeRotationAxis(a,y))}o[g].crossVectors(r[g],s[g])}if(e===!0){let g=Math.acos(Xt(s[0].dot(s[t]),-1,1));g/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(g=-g);for(let y=1;y<=t;y++)s[y].applyMatrix4(u.makeRotationAxis(r[y],g*y)),o[y].crossVectors(r[y],s[y])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ur=class extends ln{constructor(t=0,e=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,u=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=u}getPoint(t,e=new ht){let n=e,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+t*s,u=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let f=Math.cos(this.aRotation),p=Math.sin(this.aRotation),m=u-this.aX,g=l-this.aY;u=m*f-g*p+this.aX,l=m*p+g*f+this.aY}return n.set(u,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},xa=class extends Ur{constructor(t,e,n,r,s,o){super(t,e,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Hh(){let i=0,t=0,e=0,n=0;function r(s,o,a,u){i=s,t=a,e=-3*s+3*o-2*a-u,n=2*s-2*o+a+u}return{initCatmullRom:function(s,o,a,u,l){r(o,a,l*(a-s),l*(u-o))},initNonuniformCatmullRom:function(s,o,a,u,l,f,p){let m=(o-s)/l-(a-s)/(l+f)+(a-o)/f,g=(a-o)/f-(u-o)/(f+p)+(u-a)/p;m*=f,g*=f,r(o,a,m,g)},calc:function(s){let o=s*s,a=o*s;return i+t*s+e*o+n*a}}}var $o=new F,ih=new Hh,rh=new Hh,sh=new Hh,ya=class extends ln{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new F){let n=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t,a=Math.floor(o),u=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:u===0&&a===s-1&&(a=s-2,u=1);let l,f;this.closed||a>0?l=r[(a-1)%s]:($o.subVectors(r[0],r[1]).add(r[0]),l=$o);let p=r[a%s],m=r[(a+1)%s];if(this.closed||a+2<s?f=r[(a+2)%s]:($o.subVectors(r[s-1],r[s-2]).add(r[s-1]),f=$o),this.curveType==="centripetal"||this.curveType==="chordal"){let g=this.curveType==="chordal"?.5:.25,y=Math.pow(l.distanceToSquared(p),g),b=Math.pow(p.distanceToSquared(m),g),x=Math.pow(m.distanceToSquared(f),g);b<1e-4&&(b=1),y<1e-4&&(y=b),x<1e-4&&(x=b),ih.initNonuniformCatmullRom(l.x,p.x,m.x,f.x,y,b,x),rh.initNonuniformCatmullRom(l.y,p.y,m.y,f.y,y,b,x),sh.initNonuniformCatmullRom(l.z,p.z,m.z,f.z,y,b,x)}else this.curveType==="catmullrom"&&(ih.initCatmullRom(l.x,p.x,m.x,f.x,this.tension),rh.initCatmullRom(l.y,p.y,m.y,f.y,this.tension),sh.initCatmullRom(l.z,p.z,m.z,f.z,this.tension));return n.set(ih.calc(u),rh.calc(u),sh.calc(u)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(new F().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Of(i,t,e,n,r){let s=(n-t)*.5,o=(r-e)*.5,a=i*i,u=i*a;return(2*e-2*n+s+o)*u+(-3*e+3*n-2*s-o)*a+s*i+e}function Hg(i,t){let e=1-i;return e*e*t}function Gg(i,t){return 2*(1-i)*i*t}function Wg(i,t){return i*i*t}function Es(i,t,e,n){return Hg(i,t)+Gg(i,e)+Wg(i,n)}function Xg(i,t){let e=1-i;return e*e*e*t}function qg(i,t){let e=1-i;return 3*e*e*i*t}function Yg(i,t){return 3*(1-i)*i*i*t}function Zg(i,t){return i*i*i*t}function As(i,t,e,n,r){return Xg(i,t)+qg(i,e)+Yg(i,n)+Zg(i,r)}var Vs=class extends ln{constructor(t=new ht,e=new ht,n=new ht,r=new ht){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new ht){let n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(As(t,r.x,s.x,o.x,a.x),As(t,r.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},va=class extends ln{constructor(t=new F,e=new F,n=new F,r=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new F){let n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(As(t,r.x,s.x,o.x,a.x),As(t,r.y,s.y,o.y,a.y),As(t,r.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Hs=class extends ln{constructor(t=new ht,e=new ht){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ht){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ht){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ma=class extends ln{constructor(t=new F,e=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new F){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new F){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Gs=class extends ln{constructor(t=new ht,e=new ht,n=new ht){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ht){let n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(Es(t,r.x,s.x,o.x),Es(t,r.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Sa=class extends ln{constructor(t=new F,e=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new F){let n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(Es(t,r.x,s.x,o.x),Es(t,r.y,s.y,o.y),Es(t,r.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ws=class extends ln{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ht){let n=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,u=r[o===0?o:o-1],l=r[o],f=r[o>r.length-2?r.length-1:o+1],p=r[o>r.length-3?r.length-1:o+2];return n.set(Of(a,u.x,l.x,f.x,p.x),Of(a,u.y,l.y,f.y,p.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(r.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(new ht().fromArray(r))}return this}},dh=Object.freeze({__proto__:null,ArcCurve:xa,CatmullRomCurve3:ya,CubicBezierCurve:Vs,CubicBezierCurve3:va,EllipseCurve:Ur,LineCurve:Hs,LineCurve3:Ma,QuadraticBezierCurve:Gs,QuadraticBezierCurve3:Sa,SplineCurve:Ws}),ba=class extends ln{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new dh[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=n){let o=r[s]-n,a=this.curves[s],u=a.getLength(),l=u===0?0:1-o/u;return a.getPointAt(l,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,u=o.getPoints(a);for(let l=0;l<u.length;l++){let f=u[l];n&&n.equals(f)||(e.push(f),n=f)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let r=t.curves[e];this.curves.push(new dh[r.type]().fromJSON(r))}return this}},Pn=class extends ba{constructor(t){super(),this.type="Path",this.currentPoint=new ht,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Hs(this.currentPoint.clone(),new ht(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){let s=new Gs(this.currentPoint.clone(),new ht(t,e),new ht(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,o){let a=new Vs(this.currentPoint.clone(),new ht(t,e),new ht(n,r),new ht(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Ws(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,o){let a=this.currentPoint.x,u=this.currentPoint.y;return this.absarc(t+a,e+u,n,r,s,o),this}absarc(t,e,n,r,s,o){return this.absellipse(t,e,n,n,r,s,o),this}ellipse(t,e,n,r,s,o,a,u){let l=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(t+l,e+f,n,r,s,o,a,u),this}absellipse(t,e,n,r,s,o,a,u){let l=new Ur(t,e,n,r,s,o,a,u);if(this.curves.length>0){let p=l.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(l);let f=l.getPoint(1);return this.currentPoint.copy(f),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},kn=class extends Pn{constructor(t){super(t),this.uuid=Zi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,r=this.holes.length;n<r;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let r=t.holes[e];this.holes.push(new Pn().fromJSON(r))}return this}};function $g(i,t,e=2){let n=t&&t.length,r=n?t[0]*e:i.length,s=zd(i,0,r,e,!0),o=[];if(!s||s.next===s.prev)return o;let a,u,l;if(n&&(s=t_(i,t,s,e)),i.length>80*e){a=1/0,u=1/0;let f=-1/0,p=-1/0;for(let m=e;m<r;m+=e){let g=i[m],y=i[m+1];g<a&&(a=g),y<u&&(u=y),g>f&&(f=g),y>p&&(p=y)}l=Math.max(f-a,p-u),l=l!==0?32767/l:0}return Xs(s,o,e,a,u,l,0),o}function zd(i,t,e,n,r){let s;if(r===u_(i,t,e,n)>0)for(let o=t;o<e;o+=n)s=zf(o/n|0,i[o],i[o+1],s);else for(let o=e-n;o>=t;o-=n)s=zf(o/n|0,i[o],i[o+1],s);return s&&Fr(s,s.next)&&(Ys(s),s=s.next),s}function Wi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Fr(e,e.next)||be(e.prev,e,e.next)===0)){if(Ys(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Xs(i,t,e,n,r,s,o){if(!i)return;!o&&s&&s_(i,n,r,s);let a=i;for(;i.prev!==i.next;){let u=i.prev,l=i.next;if(s?Kg(i,n,r,s):Jg(i)){t.push(u.i,i.i,l.i),Ys(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=jg(Wi(i),t),Xs(i,t,e,n,r,s,2)):o===2&&Qg(i,t,e,n,r,s):Xs(Wi(i),t,e,n,r,s,1);break}}}function Jg(i){let t=i.prev,e=i,n=i.next;if(be(t,e,n)>=0)return!1;let r=t.x,s=e.x,o=n.x,a=t.y,u=e.y,l=n.y,f=Math.min(r,s,o),p=Math.min(a,u,l),m=Math.max(r,s,o),g=Math.max(a,u,l),y=n.next;for(;y!==t;){if(y.x>=f&&y.x<=m&&y.y>=p&&y.y<=g&&Ts(r,a,s,u,o,l,y.x,y.y)&&be(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function Kg(i,t,e,n){let r=i.prev,s=i,o=i.next;if(be(r,s,o)>=0)return!1;let a=r.x,u=s.x,l=o.x,f=r.y,p=s.y,m=o.y,g=Math.min(a,u,l),y=Math.min(f,p,m),b=Math.max(a,u,l),x=Math.max(f,p,m),_=ph(g,y,t,e,n),T=ph(b,x,t,e,n),d=i.prevZ,c=i.nextZ;for(;d&&d.z>=_&&c&&c.z<=T;){if(d.x>=g&&d.x<=b&&d.y>=y&&d.y<=x&&d!==r&&d!==o&&Ts(a,f,u,p,l,m,d.x,d.y)&&be(d.prev,d,d.next)>=0||(d=d.prevZ,c.x>=g&&c.x<=b&&c.y>=y&&c.y<=x&&c!==r&&c!==o&&Ts(a,f,u,p,l,m,c.x,c.y)&&be(c.prev,c,c.next)>=0))return!1;c=c.nextZ}for(;d&&d.z>=_;){if(d.x>=g&&d.x<=b&&d.y>=y&&d.y<=x&&d!==r&&d!==o&&Ts(a,f,u,p,l,m,d.x,d.y)&&be(d.prev,d,d.next)>=0)return!1;d=d.prevZ}for(;c&&c.z<=T;){if(c.x>=g&&c.x<=b&&c.y>=y&&c.y<=x&&c!==r&&c!==o&&Ts(a,f,u,p,l,m,c.x,c.y)&&be(c.prev,c,c.next)>=0)return!1;c=c.nextZ}return!0}function jg(i,t){let e=i;do{let n=e.prev,r=e.next.next;!Fr(n,r)&&Vd(n,e,e.next,r)&&qs(n,r)&&qs(r,n)&&(t.push(n.i,e.i,r.i),Ys(e),Ys(e.next),e=i=r),e=e.next}while(e!==i);return Wi(e)}function Qg(i,t,e,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&c_(o,a)){let u=Hd(o,a);o=Wi(o,o.next),u=Wi(u,u.next),Xs(o,t,e,n,r,s,0),Xs(u,t,e,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function t_(i,t,e,n){let r=[];for(let s=0,o=t.length;s<o;s++){let a=t[s]*n,u=s<o-1?t[s+1]*n:i.length,l=zd(i,a,u,n,!1);l===l.next&&(l.steiner=!0),r.push(a_(l))}r.sort(e_);for(let s=0;s<r.length;s++)e=n_(r[s],e);return e}function e_(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=n-r}return e}function n_(i,t){let e=i_(i,t);if(!e)return t;let n=Hd(e,i);return Wi(n,n.next),Wi(e,e.next)}function i_(i,t){let e=t,n=i.x,r=i.y,s=-1/0,o;if(Fr(i,e))return e;do{if(Fr(i,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){let p=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(p<=n&&p>s&&(s=p,o=e.x<e.next.x?e:e.next,p===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,u=o.x,l=o.y,f=1/0;e=o;do{if(n>=e.x&&e.x>=u&&n!==e.x&&kd(r<l?n:s,r,u,l,r<l?s:n,r,e.x,e.y)){let p=Math.abs(r-e.y)/(n-e.x);qs(e,i)&&(p<f||p===f&&(e.x>o.x||e.x===o.x&&r_(o,e)))&&(o=e,f=p)}e=e.next}while(e!==a);return o}function r_(i,t){return be(i.prev,i,t.prev)<0&&be(t.next,i,i.next)<0}function s_(i,t,e,n){let r=i;do r.z===0&&(r.z=ph(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,o_(r)}function o_(i){let t,e=1;do{let n=i,r;i=null;let s=null;for(t=0;n;){t++;let o=n,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let u=e;for(;a>0||u>0&&o;)a!==0&&(u===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,u--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,e*=2}while(t>1);return i}function ph(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function a_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function kd(i,t,e,n,r,s,o,a){return(r-o)*(t-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(n-a)}function Ts(i,t,e,n,r,s,o,a){return!(i===o&&t===a)&&kd(i,t,e,n,r,s,o,a)}function c_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!l_(i,t)&&(qs(i,t)&&qs(t,i)&&h_(i,t)&&(be(i.prev,i,t.prev)||be(i,t.prev,t))||Fr(i,t)&&be(i.prev,i,i.next)>0&&be(t.prev,t,t.next)>0)}function be(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Fr(i,t){return i.x===t.x&&i.y===t.y}function Vd(i,t,e,n){let r=Ko(be(i,t,e)),s=Ko(be(i,t,n)),o=Ko(be(e,n,i)),a=Ko(be(e,n,t));return!!(r!==s&&o!==a||r===0&&Jo(i,e,t)||s===0&&Jo(i,n,t)||o===0&&Jo(e,i,n)||a===0&&Jo(e,t,n))}function Jo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ko(i){return i>0?1:i<0?-1:0}function l_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Vd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function qs(i,t){return be(i.prev,i,i.next)<0?be(i,t,i.next)>=0&&be(i,i.prev,t)>=0:be(i,t,i.prev)<0||be(i,i.next,t)<0}function h_(i,t){let e=i,n=!1,r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Hd(i,t){let e=mh(i.i,i.x,i.y),n=mh(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function zf(i,t,e,n){let r=mh(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Ys(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function mh(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function u_(i,t,e,n){let r=0;for(let s=t,o=e-n;s<e;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}var gh=class{static triangulate(t,e,n=2){return $g(t,e,n)}},Cn=class i{static area(t){let e=t.length,n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],r=[],s=[];kf(t),Vf(n,t);let o=t.length;e.forEach(kf);for(let u=0;u<e.length;u++)r.push(o),o+=e[u].length,Vf(n,e[u]);let a=gh.triangulate(n,r);for(let u=0;u<a.length;u+=3)s.push(a.slice(u,u+3));return s}};function kf(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Vf(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Br=class i extends Te{constructor(t=new kn([new ht(.5,.5),new ht(-.5,.5),new ht(-.5,-.5),new ht(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,r=[],s=[];for(let a=0,u=t.length;a<u;a++){let l=t[a];o(l)}this.setAttribute("position",new Kt(r,3)),this.setAttribute("uv",new Kt(s,2)),this.computeVertexNormals();function o(a){let u=[],l=e.curveSegments!==void 0?e.curveSegments:12,f=e.steps!==void 0?e.steps:1,p=e.depth!==void 0?e.depth:1,m=e.bevelEnabled!==void 0?e.bevelEnabled:!0,g=e.bevelThickness!==void 0?e.bevelThickness:.2,y=e.bevelSize!==void 0?e.bevelSize:g-.1,b=e.bevelOffset!==void 0?e.bevelOffset:0,x=e.bevelSegments!==void 0?e.bevelSegments:3,_=e.extrudePath,T=e.UVGenerator!==void 0?e.UVGenerator:f_,d,c=!1,v,h,C,A;_&&(d=_.getSpacedPoints(f),c=!0,m=!1,v=_.computeFrenetFrames(f,!1),h=new F,C=new F,A=new F),m||(x=0,g=0,y=0,b=0);let S=a.extractPoints(l),M=S.shape,w=S.holes;if(!Cn.isClockWise(M)){M=M.reverse();for(let W=0,X=w.length;W<X;W++){let $=w[W];Cn.isClockWise($)&&(w[W]=$.reverse())}}function R(W){let $=10000000000000001e-36,J=W[0];for(let G=1;G<=W.length;G++){let L=G%W.length,it=W[L],gt=it.x-J.x,Tt=it.y-J.y,B=gt*gt+Tt*Tt,P=Math.max(Math.abs(it.x),Math.abs(it.y),Math.abs(J.x),Math.abs(J.y)),j=$*P*P;if(B<=j){W.splice(L,1),G--;continue}J=it}}R(M),w.forEach(R);let z=w.length,V=M;for(let W=0;W<z;W++){let X=w[W];M=M.concat(X)}function H(W,X,$){return X||console.error("THREE.ExtrudeGeometry: vec does not exist"),W.clone().addScaledVector(X,$)}let q=M.length;function O(W,X,$){let J,G,L,it=W.x-X.x,gt=W.y-X.y,Tt=$.x-W.x,B=$.y-W.y,P=it*it+gt*gt,j=it*B-gt*Tt;if(Math.abs(j)>Number.EPSILON){let rt=Math.sqrt(P),ut=Math.sqrt(Tt*Tt+B*B),ot=X.x-gt/rt,St=X.y+it/rt,yt=$.x-B/ut,Dt=$.y+Tt/ut,Pt=((yt-ot)*B-(Dt-St)*Tt)/(it*B-gt*Tt);J=ot+it*Pt-W.x,G=St+gt*Pt-W.y;let xt=J*J+G*G;if(xt<=2)return new ht(J,G);L=Math.sqrt(xt/2)}else{let rt=!1;it>Number.EPSILON?Tt>Number.EPSILON&&(rt=!0):it<-Number.EPSILON?Tt<-Number.EPSILON&&(rt=!0):Math.sign(gt)===Math.sign(B)&&(rt=!0),rt?(J=-gt,G=it,L=Math.sqrt(P)):(J=it,G=gt,L=Math.sqrt(P/2))}return new ht(J/L,G/L)}let st=[];for(let W=0,X=V.length,$=X-1,J=W+1;W<X;W++,$++,J++)$===X&&($=0),J===X&&(J=0),st[W]=O(V[W],V[$],V[J]);let dt=[],ft,_t=st.concat();for(let W=0,X=z;W<X;W++){let $=w[W];ft=[];for(let J=0,G=$.length,L=G-1,it=J+1;J<G;J++,L++,it++)L===G&&(L=0),it===G&&(it=0),ft[J]=O($[J],$[L],$[it]);dt.push(ft),_t=_t.concat(ft)}let wt;if(x===0)wt=Cn.triangulateShape(V,w);else{let W=[],X=[];for(let $=0;$<x;$++){let J=$/x,G=g*Math.cos(J*Math.PI/2),L=y*Math.sin(J*Math.PI/2)+b;for(let it=0,gt=V.length;it<gt;it++){let Tt=H(V[it],st[it],L);et(Tt.x,Tt.y,-G),J===0&&W.push(Tt)}for(let it=0,gt=z;it<gt;it++){let Tt=w[it];ft=dt[it];let B=[];for(let P=0,j=Tt.length;P<j;P++){let rt=H(Tt[P],ft[P],L);et(rt.x,rt.y,-G),J===0&&B.push(rt)}J===0&&X.push(B)}}wt=Cn.triangulateShape(W,X)}let Z=wt.length,k=y+b;for(let W=0;W<q;W++){let X=m?H(M[W],_t[W],k):M[W];c?(C.copy(v.normals[0]).multiplyScalar(X.x),h.copy(v.binormals[0]).multiplyScalar(X.y),A.copy(d[0]).add(C).add(h),et(A.x,A.y,A.z)):et(X.x,X.y,0)}for(let W=1;W<=f;W++)for(let X=0;X<q;X++){let $=m?H(M[X],_t[X],k):M[X];c?(C.copy(v.normals[W]).multiplyScalar($.x),h.copy(v.binormals[W]).multiplyScalar($.y),A.copy(d[W]).add(C).add(h),et(A.x,A.y,A.z)):et($.x,$.y,p/f*W)}for(let W=x-1;W>=0;W--){let X=W/x,$=g*Math.cos(X*Math.PI/2),J=y*Math.sin(X*Math.PI/2)+b;for(let G=0,L=V.length;G<L;G++){let it=H(V[G],st[G],J);et(it.x,it.y,p+$)}for(let G=0,L=w.length;G<L;G++){let it=w[G];ft=dt[G];for(let gt=0,Tt=it.length;gt<Tt;gt++){let B=H(it[gt],ft[gt],J);c?et(B.x,B.y+d[f-1].y,d[f-1].x+$):et(B.x,B.y,p+$)}}}D(),I();function D(){let W=r.length/3;if(m){let X=0,$=q*X;for(let J=0;J<Z;J++){let G=wt[J];Y(G[2]+$,G[1]+$,G[0]+$)}X=f+x*2,$=q*X;for(let J=0;J<Z;J++){let G=wt[J];Y(G[0]+$,G[1]+$,G[2]+$)}}else{for(let X=0;X<Z;X++){let $=wt[X];Y($[2],$[1],$[0])}for(let X=0;X<Z;X++){let $=wt[X];Y($[0]+q*f,$[1]+q*f,$[2]+q*f)}}n.addGroup(W,r.length/3-W,0)}function I(){let W=r.length/3,X=0;K(V,X),X+=V.length;for(let $=0,J=w.length;$<J;$++){let G=w[$];K(G,X),X+=G.length}n.addGroup(W,r.length/3-W,1)}function K(W,X){let $=W.length;for(;--$>=0;){let J=$,G=$-1;G<0&&(G=W.length-1);for(let L=0,it=f+x*2;L<it;L++){let gt=q*L,Tt=q*(L+1),B=X+J+gt,P=X+G+gt,j=X+G+Tt,rt=X+J+Tt;at(B,P,j,rt)}}}function et(W,X,$){u.push(W),u.push(X),u.push($)}function Y(W,X,$){mt(W),mt(X),mt($);let J=r.length/3,G=T.generateTopUV(n,r,J-3,J-2,J-1);U(G[0]),U(G[1]),U(G[2])}function at(W,X,$,J){mt(W),mt(X),mt(J),mt(X),mt($),mt(J);let G=r.length/3,L=T.generateSideWallUV(n,r,G-6,G-3,G-2,G-1);U(L[0]),U(L[1]),U(L[3]),U(L[1]),U(L[2]),U(L[3])}function mt(W){r.push(u[W*3+0]),r.push(u[W*3+1]),r.push(u[W*3+2])}function U(W){s.push(W.x),s.push(W.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return d_(e,n,t)}static fromJSON(t,e){let n=[];for(let s=0,o=t.shapes.length;s<o;s++){let a=e[t.shapes[s]];n.push(a)}let r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new dh[r.type]().fromJSON(r)),new i(n,t.options)}},f_={generateTopUV:function(i,t,e,n,r){let s=t[e*3],o=t[e*3+1],a=t[n*3],u=t[n*3+1],l=t[r*3],f=t[r*3+1];return[new ht(s,o),new ht(a,u),new ht(l,f)]},generateSideWallUV:function(i,t,e,n,r,s){let o=t[e*3],a=t[e*3+1],u=t[e*3+2],l=t[n*3],f=t[n*3+1],p=t[n*3+2],m=t[r*3],g=t[r*3+1],y=t[r*3+2],b=t[s*3],x=t[s*3+1],_=t[s*3+2];return Math.abs(a-f)<Math.abs(o-l)?[new ht(o,1-u),new ht(l,1-p),new ht(m,1-y),new ht(b,1-_)]:[new ht(a,1-u),new ht(f,1-p),new ht(g,1-y),new ht(x,1-_)]}};function d_(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){let s=i[n];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ta=class i extends Te{constructor(t=[new ht(0,-.5),new ht(.5,0),new ht(0,.5)],e=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:r},e=Math.floor(e),r=Xt(r,0,Math.PI*2);let s=[],o=[],a=[],u=[],l=[],f=1/e,p=new F,m=new ht,g=new F,y=new F,b=new F,x=0,_=0;for(let T=0;T<=t.length-1;T++)switch(T){case 0:x=t[T+1].x-t[T].x,_=t[T+1].y-t[T].y,g.x=_*1,g.y=-x,g.z=_*0,b.copy(g),g.normalize(),u.push(g.x,g.y,g.z);break;case t.length-1:u.push(b.x,b.y,b.z);break;default:x=t[T+1].x-t[T].x,_=t[T+1].y-t[T].y,g.x=_*1,g.y=-x,g.z=_*0,y.copy(g),g.x+=b.x,g.y+=b.y,g.z+=b.z,g.normalize(),u.push(g.x,g.y,g.z),b.copy(y)}for(let T=0;T<=e;T++){let d=n+T*f*r,c=Math.sin(d),v=Math.cos(d);for(let h=0;h<=t.length-1;h++){p.x=t[h].x*c,p.y=t[h].y,p.z=t[h].x*v,o.push(p.x,p.y,p.z),m.x=T/e,m.y=h/(t.length-1),a.push(m.x,m.y);let C=u[3*h+0]*c,A=u[3*h+1],S=u[3*h+0]*v;l.push(C,A,S)}}for(let T=0;T<e;T++)for(let d=0;d<t.length-1;d++){let c=d+T*t.length,v=c,h=c+t.length,C=c+t.length+1,A=c+1;s.push(v,h,A),s.push(C,A,h)}this.setIndex(s),this.setAttribute("position",new Kt(o,3)),this.setAttribute("uv",new Kt(a,2)),this.setAttribute("normal",new Kt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Or=class i extends Te{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};let s=t/2,o=e/2,a=Math.floor(n),u=Math.floor(r),l=a+1,f=u+1,p=t/a,m=e/u,g=[],y=[],b=[],x=[];for(let _=0;_<f;_++){let T=_*m-o;for(let d=0;d<l;d++){let c=d*p-s;y.push(c,-T,0),b.push(0,0,1),x.push(d/a),x.push(1-_/u)}}for(let _=0;_<u;_++)for(let T=0;T<a;T++){let d=T+l*_,c=T+l*(_+1),v=T+1+l*(_+1),h=T+1+l*_;g.push(d,c,h),g.push(c,v,h)}this.setIndex(g),this.setAttribute("position",new Kt(y,3)),this.setAttribute("normal",new Kt(b,3)),this.setAttribute("uv",new Kt(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var wa=class i extends Te{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let u=Math.min(o+a,Math.PI),l=0,f=[],p=new F,m=new F,g=[],y=[],b=[],x=[];for(let _=0;_<=n;_++){let T=[],d=_/n,c=0;_===0&&o===0?c=.5/e:_===n&&u===Math.PI&&(c=-.5/e);for(let v=0;v<=e;v++){let h=v/e;p.x=-t*Math.cos(r+h*s)*Math.sin(o+d*a),p.y=t*Math.cos(o+d*a),p.z=t*Math.sin(r+h*s)*Math.sin(o+d*a),y.push(p.x,p.y,p.z),m.copy(p).normalize(),b.push(m.x,m.y,m.z),x.push(h+c,1-d),T.push(l++)}f.push(T)}for(let _=0;_<n;_++)for(let T=0;T<e;T++){let d=f[_][T+1],c=f[_][T],v=f[_+1][T],h=f[_+1][T+1];(_!==0||o>0)&&g.push(d,c,h),(_!==n-1||u<Math.PI)&&g.push(c,v,h)}this.setIndex(g),this.setAttribute("position",new Kt(y,3)),this.setAttribute("normal",new Kt(b,3)),this.setAttribute("uv",new Kt(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ea=class i extends Te{constructor(t=1,e=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);let o=[],a=[],u=[],l=[],f=new F,p=new F,m=new F;for(let g=0;g<=n;g++)for(let y=0;y<=r;y++){let b=y/r*s,x=g/n*Math.PI*2;p.x=(t+e*Math.cos(x))*Math.cos(b),p.y=(t+e*Math.cos(x))*Math.sin(b),p.z=e*Math.sin(x),a.push(p.x,p.y,p.z),f.x=t*Math.cos(b),f.y=t*Math.sin(b),m.subVectors(p,f).normalize(),u.push(m.x,m.y,m.z),l.push(y/r),l.push(g/n)}for(let g=1;g<=n;g++)for(let y=1;y<=r;y++){let b=(r+1)*g+y-1,x=(r+1)*(g-1)+y-1,_=(r+1)*(g-1)+y,T=(r+1)*g+y;o.push(b,x,T),o.push(x,_,T)}this.setIndex(o),this.setAttribute("position",new Kt(a,3)),this.setAttribute("normal",new Kt(u,3)),this.setAttribute("uv",new Kt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Aa=class extends Gn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fc,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Ca=class extends Gn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new qt(16777215),this.specular=new qt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fc,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=ja,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Ra=class extends Gn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ia=class extends Gn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};var Pa=class extends Nr{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}};function jo(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function p_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Xi=class{constructor(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,r=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<r)){for(let a=n+2;;){if(r===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=e[++n],t<r)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let u=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===u)break;if(r=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(r=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=t*r;for(let o=0;o!==r;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Da=class extends Xi{constructor(t,e,n,r){super(t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ch,endingEnd:ch}}intervalChanged_(t,e,n){let r=this.parameterPositions,s=t-2,o=t+1,a=r[s],u=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case lh:s=t,a=2*e-n;break;case hh:s=r.length-2,a=e+r[s]-r[s+1];break;default:s=t,a=n}if(u===void 0)switch(this.getSettings_().endingEnd){case lh:o=t,u=2*n-e;break;case hh:o=1,u=n+r[1]-r[0];break;default:o=t-1,u=e}let l=(n-e)*.5,f=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(u-n),this._offsetPrev=s*f,this._offsetNext=o*f}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,u=t*a,l=u-a,f=this._offsetPrev,p=this._offsetNext,m=this._weightPrev,g=this._weightNext,y=(n-e)/(r-e),b=y*y,x=b*y,_=-m*x+2*m*b-m*y,T=(1+m)*x+(-1.5-2*m)*b+(-.5+m)*y+1,d=(-1-g)*x+(1.5+g)*b+.5*y,c=g*x-g*b;for(let v=0;v!==a;++v)s[v]=_*o[f+v]+T*o[l+v]+d*o[u+v]+c*o[p+v];return s}},La=class extends Xi{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,u=t*a,l=u-a,f=(n-e)/(r-e),p=1-f;for(let m=0;m!==a;++m)s[m]=o[l+m]*p+o[u+m]*f;return s}},Na=class extends Xi{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t){return this.copySampleValue_(t-1)}},hn=class{constructor(t,e,n,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=jo(e,this.TimeBufferType),this.values=jo(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:jo(t.times,Array),values:jo(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(n.interpolation=r)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Na(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new La(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Da(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Cs:e=this.InterpolantFactoryMethodDiscrete;break;case sa:e=this.InterpolantFactoryMethodLinear;break;case ta:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Cs;case this.InterpolantFactoryMethodLinear:return sa;case this.InterpolantFactoryMethodSmooth:return ta}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]*=t}return this}trim(t,e){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let u=n[a];if(typeof u=="number"&&isNaN(u)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,u),t=!1;break}if(o!==null&&o>u){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,u,o),t=!1;break}o=u}if(r!==void 0&&p_(r))for(let a=0,u=r.length;a!==u;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===ta,s=t.length-1,o=1;for(let a=1;a<s;++a){let u=!1,l=t[a],f=t[a+1];if(l!==f&&(a!==1||l!==t[0]))if(r)u=!0;else{let p=a*n,m=p-n,g=p+n;for(let y=0;y!==n;++y){let b=e[p+y];if(b!==e[m+y]||b!==e[g+y]){u=!0;break}}}if(u){if(a!==o){t[o]=t[a];let p=a*n,m=o*n;for(let g=0;g!==n;++g)e[m+g]=e[p+g]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,u=o*n,l=0;l!==n;++l)e[u+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,r}};hn.prototype.ValueTypeName="";hn.prototype.TimeBufferType=Float32Array;hn.prototype.ValueBufferType=Float32Array;hn.prototype.DefaultInterpolation=sa;var vi=class extends hn{constructor(t,e,n){super(t,e,n)}};vi.prototype.ValueTypeName="bool";vi.prototype.ValueBufferType=Array;vi.prototype.DefaultInterpolation=Cs;vi.prototype.InterpolantFactoryMethodLinear=void 0;vi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ua=class extends hn{constructor(t,e,n,r){super(t,e,n,r)}};Ua.prototype.ValueTypeName="color";var Fa=class extends hn{constructor(t,e,n,r){super(t,e,n,r)}};Fa.prototype.ValueTypeName="number";var Ba=class extends Xi{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,u=(n-e)/(r-e),l=t*a;for(let f=l+a;l!==f;l+=4)on.slerpFlat(s,0,o,l-a,o,l,u);return s}},Zs=class extends hn{constructor(t,e,n,r){super(t,e,n,r)}InterpolantFactoryMethodLinear(t){return new Ba(this.times,this.values,this.getValueSize(),t)}};Zs.prototype.ValueTypeName="quaternion";Zs.prototype.InterpolantFactoryMethodSmooth=void 0;var Mi=class extends hn{constructor(t,e,n){super(t,e,n)}};Mi.prototype.ValueTypeName="string";Mi.prototype.ValueBufferType=Array;Mi.prototype.DefaultInterpolation=Cs;Mi.prototype.InterpolantFactoryMethodLinear=void 0;Mi.prototype.InterpolantFactoryMethodSmooth=void 0;var Oa=class extends hn{constructor(t,e,n,r){super(t,e,n,r)}};Oa.prototype.ValueTypeName="vector";var _h={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},za=class{constructor(t,e,n){let r=this,s=!1,o=0,a=0,u,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(f){a++,s===!1&&r.onStart!==void 0&&r.onStart(f,o,a),s=!0},this.itemEnd=function(f){o++,r.onProgress!==void 0&&r.onProgress(f,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(f){r.onError!==void 0&&r.onError(f)},this.resolveURL=function(f){return u?u(f):f},this.setURLModifier=function(f){return u=f,this},this.addHandler=function(f,p){return l.push(f,p),this},this.removeHandler=function(f){let p=l.indexOf(f);return p!==-1&&l.splice(p,2),this},this.getHandler=function(f){for(let p=0,m=l.length;p<m;p+=2){let g=l[p],y=l[p+1];if(g.global&&(g.lastIndex=0),g.test(f))return y}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Gd=new za,Dn=class{constructor(t){this.manager=t!==void 0?t:Gd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Dn.DEFAULT_MATERIAL_NAME="__DEFAULT";var ti={},xh=class extends Error{constructor(t,e){super(t),this.response=e}},ii=class extends Dn{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=_h.get(`file:${t}`);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(ti[t]!==void 0){ti[t].push({onLoad:e,onProgress:n,onError:r});return}ti[t]=[],ti[t].push({onLoad:e,onProgress:n,onError:r});let o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,u=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let f=ti[t],p=l.body.getReader(),m=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),g=m?parseInt(m):0,y=g!==0,b=0,x=new ReadableStream({start(_){T();function T(){p.read().then(({done:d,value:c})=>{if(d)_.close();else{b+=c.byteLength;let v=new ProgressEvent("progress",{lengthComputable:y,loaded:b,total:g});for(let h=0,C=f.length;h<C;h++){let A=f[h];A.onProgress&&A.onProgress(v)}_.enqueue(c),T()}},d=>{_.error(d)})}}});return new Response(x)}else throw new xh(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(u){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(f=>new DOMParser().parseFromString(f,a));case"json":return l.json();default:if(a==="")return l.text();{let p=/charset="?([^;"\s]*)"?/i.exec(a),m=p&&p[1]?p[1].toLowerCase():void 0,g=new TextDecoder(m);return l.arrayBuffer().then(y=>g.decode(y))}}}).then(l=>{_h.add(`file:${t}`,l);let f=ti[t];delete ti[t];for(let p=0,m=f.length;p<m;p++){let g=f[p];g.onLoad&&g.onLoad(l)}}).catch(l=>{let f=ti[t];if(f===void 0)throw this.manager.itemError(t),l;delete ti[t];for(let p=0,m=f.length;p<m;p++){let g=f[p];g.onError&&g.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var zr=class extends Be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},ka=class extends zr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},oh=new Gt,Hf=new F,Gf=new F,yh=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.mapType=Ln,this.map=null,this.mapPass=null,this.matrix=new Gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lr,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Hf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Hf),Gf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Gf),e.updateMatrixWorld(),oh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oh,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(oh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var kr=class extends Us{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-t,o=n+t,a=r+e,u=r-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=f*this.view.offsetY,u=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,u,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},vh=class extends yh{constructor(){super(new kr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Va=class extends zr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.target=new Be,this.shadow=new vh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Ha=class extends zr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Ga=class extends Xe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Gh="\\[\\]\\.:\\/",m_=new RegExp("["+Gh+"]","g"),Wh="[^"+Gh+"]",g_="[^"+Gh.replace("\\.","")+"]",__=/((?:WC+[\/:])*)/.source.replace("WC",Wh),x_=/(WCOD+)?/.source.replace("WCOD",g_),y_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wh),v_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wh),M_=new RegExp("^"+__+x_+y_+v_+"$"),S_=["material","materials","bones","map"],Mh=class{constructor(t,e,n){let r=n||ye.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ye=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(m_,"")}static parseTrackName(t){let e=M_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);S_.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let u=n(a.children);if(u)return u}return null},r=n(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)t[e++]=n[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,r=e.propertyName,s=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===l){l=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[r];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let u=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}u=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(u=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(u=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ye.Composite=Mh;ye.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ye.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ye.prototype.GetterByBindingType=[ye.prototype._getValue_direct,ye.prototype._getValue_array,ye.prototype._getValue_arrayElement,ye.prototype._getValue_toArray];ye.prototype.SetterByBindingTypeAndVersioning=[[ye.prototype._setValue_direct,ye.prototype._setValue_direct_setNeedsUpdate,ye.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_array,ye.prototype._setValue_array_setNeedsUpdate,ye.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_arrayElement,ye.prototype._setValue_arrayElement_setNeedsUpdate,ye.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_fromArray,ye.prototype._setValue_fromArray_setNeedsUpdate,ye.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var wS=new Float32Array(1);var Wf=new Gt,Wa=class{constructor(t,e,n=0,r=1/0){this.ray=new qe(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new Ir,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Wf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Wf),this}intersectObject(t,e=!0,n=[]){return Sh(t,this,n,e),n.sort(Xf),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)Sh(t[r],this,n,e);return n.sort(Xf),n}};function Xf(i,t){return i.distance-t.distance}function Sh(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let o=0,a=s.length;o<a;o++)Sh(s[o],t,e,!0)}}var Vr=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Xt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Xt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var qf=new ht,$s=class{constructor(t=new ht(1/0,1/0),e=new ht(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=qf.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,qf).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Yf=new F,Qo=new F,Mr=new F,Sr=new F,ah=new F,b_=new F,T_=new F,he=class{constructor(t=new F,e=new F){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Yf.subVectors(t,this.start),Qo.subVectors(this.end,this.start);let n=Qo.dot(Qo),s=Qo.dot(Yf)/n;return e&&(s=Xt(s,0,1)),s}closestPointToPoint(t,e,n){let r=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(r).add(this.start)}distanceSqToLine3(t,e=b_,n=T_){let r=10000000000000001e-32,s,o,a=this.start,u=t.start,l=this.end,f=t.end;Mr.subVectors(l,a),Sr.subVectors(f,u),ah.subVectors(a,u);let p=Mr.dot(Mr),m=Sr.dot(Sr),g=Sr.dot(ah);if(p<=r&&m<=r)return e.copy(a),n.copy(u),e.sub(n),e.dot(e);if(p<=r)s=0,o=g/m,o=Xt(o,0,1);else{let y=Mr.dot(ah);if(m<=r)o=0,s=Xt(-y/p,0,1);else{let b=Mr.dot(Sr),x=p*m-b*b;x!==0?s=Xt((b*g-y*m)/x,0,1):s=0,o=(b*s+g)/m,o<0?(o=0,s=Xt(-y/p,0,1)):o>1&&(o=1,s=Xt((b-y)/p,0,1))}}return e.copy(a).add(Mr.multiplyScalar(s)),n.copy(u).add(Sr.multiplyScalar(o)),e.sub(n),e.dot(e)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var un=class{constructor(){this.type="ShapePath",this.color=new qt,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new Pn,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,r){return this.currentPath.quadraticCurveTo(t,e,n,r),this}bezierCurveTo(t,e,n,r,s,o){return this.currentPath.bezierCurveTo(t,e,n,r,s,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(_){let T=[];for(let d=0,c=_.length;d<c;d++){let v=_[d],h=new kn;h.curves=v.curves,T.push(h)}return T}function n(_,T){let d=T.length,c=!1;for(let v=d-1,h=0;h<d;v=h++){let C=T[v],A=T[h],S=A.x-C.x,M=A.y-C.y;if(Math.abs(M)>Number.EPSILON){if(M<0&&(C=T[h],S=-S,A=T[v],M=-M),_.y<C.y||_.y>A.y)continue;if(_.y===C.y){if(_.x===C.x)return!0}else{let w=M*(_.x-C.x)-S*(_.y-C.y);if(w===0)return!0;if(w<0)continue;c=!c}}else{if(_.y!==C.y)continue;if(A.x<=_.x&&_.x<=C.x||C.x<=_.x&&_.x<=A.x)return!0}}return c}let r=Cn.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,u,l=[];if(s.length===1)return a=s[0],u=new kn,u.curves=a.curves,l.push(u),l;let f=!r(s[0].getPoints());f=t?!f:f;let p=[],m=[],g=[],y=0,b;m[y]=void 0,g[y]=[];for(let _=0,T=s.length;_<T;_++)a=s[_],b=a.getPoints(),o=r(b),o=t?!o:o,o?(!f&&m[y]&&y++,m[y]={s:new kn,p:b},m[y].s.curves=a.curves,f&&y++,g[y]=[]):g[y].push({h:a,p:b[0]});if(!m[0])return e(s);if(m.length>1){let _=!1,T=0;for(let d=0,c=m.length;d<c;d++)p[d]=[];for(let d=0,c=m.length;d<c;d++){let v=g[d];for(let h=0;h<v.length;h++){let C=v[h],A=!0;for(let S=0;S<m.length;S++)n(C.p,m[S].p)&&(d!==S&&T++,A?(A=!1,p[S].push(C)):_=!0);A&&p[d].push(C)}}T>0&&_===!1&&(g=p)}let x;for(let _=0,T=m.length;_<T;_++){u=m[_].s,l.push(u),x=g[_];for(let d=0,c=x.length;d<c;d++)u.holes.push(x[d].h)}return l}},Js=class extends Vn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function Xh(i,t,e,n){let r=w_(n);switch(e){case Lh:return i*t;case Uh:return i*t/r.components*r.byteLength;case sc:return i*t/r.components*r.byteLength;case Fh:return i*t*2/r.components*r.byteLength;case oc:return i*t*2/r.components*r.byteLength;case Nh:return i*t*3/r.components*r.byteLength;case vn:return i*t*4/r.components*r.byteLength;case ac:return i*t*4/r.components*r.byteLength;case Qs:case to:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case eo:case no:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case lc:case uc:return Math.max(i,16)*Math.max(t,8)/4;case cc:case hc:return Math.max(i,8)*Math.max(t,8)/2;case fc:case dc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case pc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case mc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case gc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case _c:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case xc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case yc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case vc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Mc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Sc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case bc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Tc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case wc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ec:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ac:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Cc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Rc:case Ic:case Pc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Dc:case Lc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Nc:case Uc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function w_(i){switch(i){case Ln:case Rh:return{byteLength:1,components:1};case Hr:case Ih:case Gr:return{byteLength:2,components:1};case ic:case rc:return{byteLength:2,components:4};case wi:case nc:case Xn:return{byteLength:4,components:1};case Ph:case Dh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function dp(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function D_(i){let t=new WeakMap;function e(a,u){let l=a.array,f=a.usage,p=l.byteLength,m=i.createBuffer();i.bindBuffer(u,m),i.bufferData(u,l,f),a.onUploadCallback();let g;if(l instanceof Float32Array)g=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)g=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)g=i.SHORT;else if(l instanceof Uint32Array)g=i.UNSIGNED_INT;else if(l instanceof Int32Array)g=i.INT;else if(l instanceof Int8Array)g=i.BYTE;else if(l instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:m,type:g,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:p}}function n(a,u,l){let f=u.array,p=u.updateRanges;if(i.bindBuffer(l,a),p.length===0)i.bufferSubData(l,0,f);else{p.sort((g,y)=>g.start-y.start);let m=0;for(let g=1;g<p.length;g++){let y=p[m],b=p[g];b.start<=y.start+y.count+1?y.count=Math.max(y.count,b.start+b.count-y.start):(++m,p[m]=b)}p.length=m+1;for(let g=0,y=p.length;g<y;g++){let b=p[g];i.bufferSubData(l,b.start*f.BYTES_PER_ELEMENT,f,b.start,b.count)}u.clearUpdateRanges()}u.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let u=t.get(a);u&&(i.deleteBuffer(u.buffer),t.delete(a))}function o(a,u){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let f=t.get(a);(!f||f.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,u));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,u),l.version=a.version}}return{get:r,remove:s,update:o}}var L_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,N_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,U_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,F_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,B_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,O_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,z_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,k_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,V_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,H_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,G_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,W_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,X_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,q_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Y_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Z_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,$_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,J_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,K_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,j_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Q_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,t0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,e0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,n0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,i0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,r0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,s0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,o0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,a0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,c0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,l0="gl_FragColor = linearToOutputTexel( gl_FragColor );",h0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,u0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,f0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,d0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,p0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,m0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,g0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,x0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,y0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,v0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,M0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,S0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,b0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,T0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,w0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,E0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,A0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,C0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,R0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,I0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,P0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,D0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,L0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,N0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,U0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,F0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,B0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,O0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,z0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,k0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,V0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,H0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,G0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,W0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,X0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,q0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Y0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Z0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,$0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,J0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,K0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,j0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Q0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ex=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,nx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ix=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ox=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ax=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,cx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ux=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,px=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,mx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,gx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,_x=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,xx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,vx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Sx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Tx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ex=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ax=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Cx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Rx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ix=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Px=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Dx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ux=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ox=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,zx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,kx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Vx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Hx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Yx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$x=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Kx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Qx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ty=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ey=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ny=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,iy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ry=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ay=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ly=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,hy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,uy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$t={alphahash_fragment:L_,alphahash_pars_fragment:N_,alphamap_fragment:U_,alphamap_pars_fragment:F_,alphatest_fragment:B_,alphatest_pars_fragment:O_,aomap_fragment:z_,aomap_pars_fragment:k_,batching_pars_vertex:V_,batching_vertex:H_,begin_vertex:G_,beginnormal_vertex:W_,bsdfs:X_,iridescence_fragment:q_,bumpmap_pars_fragment:Y_,clipping_planes_fragment:Z_,clipping_planes_pars_fragment:$_,clipping_planes_pars_vertex:J_,clipping_planes_vertex:K_,color_fragment:j_,color_pars_fragment:Q_,color_pars_vertex:t0,color_vertex:e0,common:n0,cube_uv_reflection_fragment:i0,defaultnormal_vertex:r0,displacementmap_pars_vertex:s0,displacementmap_vertex:o0,emissivemap_fragment:a0,emissivemap_pars_fragment:c0,colorspace_fragment:l0,colorspace_pars_fragment:h0,envmap_fragment:u0,envmap_common_pars_fragment:f0,envmap_pars_fragment:d0,envmap_pars_vertex:p0,envmap_physical_pars_fragment:w0,envmap_vertex:m0,fog_vertex:g0,fog_pars_vertex:_0,fog_fragment:x0,fog_pars_fragment:y0,gradientmap_pars_fragment:v0,lightmap_pars_fragment:M0,lights_lambert_fragment:S0,lights_lambert_pars_fragment:b0,lights_pars_begin:T0,lights_toon_fragment:E0,lights_toon_pars_fragment:A0,lights_phong_fragment:C0,lights_phong_pars_fragment:R0,lights_physical_fragment:I0,lights_physical_pars_fragment:P0,lights_fragment_begin:D0,lights_fragment_maps:L0,lights_fragment_end:N0,logdepthbuf_fragment:U0,logdepthbuf_pars_fragment:F0,logdepthbuf_pars_vertex:B0,logdepthbuf_vertex:O0,map_fragment:z0,map_pars_fragment:k0,map_particle_fragment:V0,map_particle_pars_fragment:H0,metalnessmap_fragment:G0,metalnessmap_pars_fragment:W0,morphinstance_vertex:X0,morphcolor_vertex:q0,morphnormal_vertex:Y0,morphtarget_pars_vertex:Z0,morphtarget_vertex:$0,normal_fragment_begin:J0,normal_fragment_maps:K0,normal_pars_fragment:j0,normal_pars_vertex:Q0,normal_vertex:tx,normalmap_pars_fragment:ex,clearcoat_normal_fragment_begin:nx,clearcoat_normal_fragment_maps:ix,clearcoat_pars_fragment:rx,iridescence_pars_fragment:sx,opaque_fragment:ox,packing:ax,premultiplied_alpha_fragment:cx,project_vertex:lx,dithering_fragment:hx,dithering_pars_fragment:ux,roughnessmap_fragment:fx,roughnessmap_pars_fragment:dx,shadowmap_pars_fragment:px,shadowmap_pars_vertex:mx,shadowmap_vertex:gx,shadowmask_pars_fragment:_x,skinbase_vertex:xx,skinning_pars_vertex:yx,skinning_vertex:vx,skinnormal_vertex:Mx,specularmap_fragment:Sx,specularmap_pars_fragment:bx,tonemapping_fragment:Tx,tonemapping_pars_fragment:wx,transmission_fragment:Ex,transmission_pars_fragment:Ax,uv_pars_fragment:Cx,uv_pars_vertex:Rx,uv_vertex:Ix,worldpos_vertex:Px,background_vert:Dx,background_frag:Lx,backgroundCube_vert:Nx,backgroundCube_frag:Ux,cube_vert:Fx,cube_frag:Bx,depth_vert:Ox,depth_frag:zx,distanceRGBA_vert:kx,distanceRGBA_frag:Vx,equirect_vert:Hx,equirect_frag:Gx,linedashed_vert:Wx,linedashed_frag:Xx,meshbasic_vert:qx,meshbasic_frag:Yx,meshlambert_vert:Zx,meshlambert_frag:$x,meshmatcap_vert:Jx,meshmatcap_frag:Kx,meshnormal_vert:jx,meshnormal_frag:Qx,meshphong_vert:ty,meshphong_frag:ey,meshphysical_vert:ny,meshphysical_frag:iy,meshtoon_vert:ry,meshtoon_frag:sy,points_vert:oy,points_frag:ay,shadow_vert:cy,shadow_frag:ly,sprite_vert:hy,sprite_frag:uy},At={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},qn={basic:{uniforms:Ve([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:Ve([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new qt(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:Ve([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:Ve([At.common,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.roughnessmap,At.metalnessmap,At.fog,At.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:Ve([At.common,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.gradientmap,At.fog,At.lights,{emissive:{value:new qt(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:Ve([At.common,At.bumpmap,At.normalmap,At.displacementmap,At.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:Ve([At.points,At.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:Ve([At.common,At.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:Ve([At.common,At.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:Ve([At.common,At.bumpmap,At.normalmap,At.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:Ve([At.sprite,At.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:Ve([At.common,At.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:Ve([At.lights,At.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};qn.physical={uniforms:Ve([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};var Oc={r:0,b:0,g:0},Ji=new cn,fy=new Gt;function dy(i,t,e,n,r,s,o){let a=new qt(0),u=s===!0?0:1,l,f,p=null,m=0,g=null;function y(d){let c=d.isScene===!0?d.background:null;return c&&c.isTexture&&(c=(d.backgroundBlurriness>0?e:t).get(c)),c}function b(d){let c=!1,v=y(d);v===null?_(a,u):v&&v.isColor&&(_(v,1),c=!0);let h=i.xr.getEnvironmentBlendMode();h==="additive"?n.buffers.color.setClear(0,0,0,1,o):h==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||c)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(d,c){let v=y(c);v&&(v.isCubeTexture||v.mapping===Ks)?(f===void 0&&(f=new Ye(new ni(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:$i(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:Oe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(h,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),Ji.copy(c.backgroundRotation),Ji.x*=-1,Ji.y*=-1,Ji.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ji.y*=-1,Ji.z*=-1),f.material.uniforms.envMap.value=v,f.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=c.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(fy.makeRotationFromEuler(Ji)),f.material.toneMapped=Qt.getTransfer(v.colorSpace)!==ae,(p!==v||m!==v.version||g!==i.toneMapping)&&(f.material.needsUpdate=!0,p=v,m=v.version,g=i.toneMapping),f.layers.enableAll(),d.unshift(f,f.geometry,f.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Ye(new Or(2,2),new In({name:"BackgroundMaterial",uniforms:$i(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,l.material.toneMapped=Qt.getTransfer(v.colorSpace)!==ae,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(p!==v||m!==v.version||g!==i.toneMapping)&&(l.material.needsUpdate=!0,p=v,m=v.version,g=i.toneMapping),l.layers.enableAll(),d.unshift(l,l.geometry,l.material,0,0,null))}function _(d,c){d.getRGB(Oc,Vh(i)),n.buffers.color.setClear(Oc.r,Oc.g,Oc.b,c,o)}function T(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(d,c=1){a.set(d),u=c,_(a,u)},getClearAlpha:function(){return u},setClearAlpha:function(d){u=d,_(a,u)},render:b,addToRenderList:x,dispose:T}}function py(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=m(null),s=r,o=!1;function a(M,w,E,R,z){let V=!1,H=p(R,E,w);s!==H&&(s=H,l(s.object)),V=g(M,R,E,z),V&&y(M,R,E,z),z!==null&&t.update(z,i.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,c(M,w,E,R),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function u(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function f(M){return i.deleteVertexArray(M)}function p(M,w,E){let R=E.wireframe===!0,z=n[M.id];z===void 0&&(z={},n[M.id]=z);let V=z[w.id];V===void 0&&(V={},z[w.id]=V);let H=V[R];return H===void 0&&(H=m(u()),V[R]=H),H}function m(M){let w=[],E=[],R=[];for(let z=0;z<e;z++)w[z]=0,E[z]=0,R[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:E,attributeDivisors:R,object:M,attributes:{},index:null}}function g(M,w,E,R){let z=s.attributes,V=w.attributes,H=0,q=E.getAttributes();for(let O in q)if(q[O].location>=0){let dt=z[O],ft=V[O];if(ft===void 0&&(O==="instanceMatrix"&&M.instanceMatrix&&(ft=M.instanceMatrix),O==="instanceColor"&&M.instanceColor&&(ft=M.instanceColor)),dt===void 0||dt.attribute!==ft||ft&&dt.data!==ft.data)return!0;H++}return s.attributesNum!==H||s.index!==R}function y(M,w,E,R){let z={},V=w.attributes,H=0,q=E.getAttributes();for(let O in q)if(q[O].location>=0){let dt=V[O];dt===void 0&&(O==="instanceMatrix"&&M.instanceMatrix&&(dt=M.instanceMatrix),O==="instanceColor"&&M.instanceColor&&(dt=M.instanceColor));let ft={};ft.attribute=dt,dt&&dt.data&&(ft.data=dt.data),z[O]=ft,H++}s.attributes=z,s.attributesNum=H,s.index=R}function b(){let M=s.newAttributes;for(let w=0,E=M.length;w<E;w++)M[w]=0}function x(M){_(M,0)}function _(M,w){let E=s.newAttributes,R=s.enabledAttributes,z=s.attributeDivisors;E[M]=1,R[M]===0&&(i.enableVertexAttribArray(M),R[M]=1),z[M]!==w&&(i.vertexAttribDivisor(M,w),z[M]=w)}function T(){let M=s.newAttributes,w=s.enabledAttributes;for(let E=0,R=w.length;E<R;E++)w[E]!==M[E]&&(i.disableVertexAttribArray(E),w[E]=0)}function d(M,w,E,R,z,V,H){H===!0?i.vertexAttribIPointer(M,w,E,z,V):i.vertexAttribPointer(M,w,E,R,z,V)}function c(M,w,E,R){b();let z=R.attributes,V=E.getAttributes(),H=w.defaultAttributeValues;for(let q in V){let O=V[q];if(O.location>=0){let st=z[q];if(st===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(st=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(st=M.instanceColor)),st!==void 0){let dt=st.normalized,ft=st.itemSize,_t=t.get(st);if(_t===void 0)continue;let wt=_t.buffer,Z=_t.type,k=_t.bytesPerElement,D=Z===i.INT||Z===i.UNSIGNED_INT||st.gpuType===nc;if(st.isInterleavedBufferAttribute){let I=st.data,K=I.stride,et=st.offset;if(I.isInstancedInterleavedBuffer){for(let Y=0;Y<O.locationSize;Y++)_(O.location+Y,I.meshPerAttribute);M.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=I.meshPerAttribute*I.count)}else for(let Y=0;Y<O.locationSize;Y++)x(O.location+Y);i.bindBuffer(i.ARRAY_BUFFER,wt);for(let Y=0;Y<O.locationSize;Y++)d(O.location+Y,ft/O.locationSize,Z,dt,K*k,(et+ft/O.locationSize*Y)*k,D)}else{if(st.isInstancedBufferAttribute){for(let I=0;I<O.locationSize;I++)_(O.location+I,st.meshPerAttribute);M.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let I=0;I<O.locationSize;I++)x(O.location+I);i.bindBuffer(i.ARRAY_BUFFER,wt);for(let I=0;I<O.locationSize;I++)d(O.location+I,ft/O.locationSize,Z,dt,ft*k,ft/O.locationSize*I*k,D)}}else if(H!==void 0){let dt=H[q];if(dt!==void 0)switch(dt.length){case 2:i.vertexAttrib2fv(O.location,dt);break;case 3:i.vertexAttrib3fv(O.location,dt);break;case 4:i.vertexAttrib4fv(O.location,dt);break;default:i.vertexAttrib1fv(O.location,dt)}}}}T()}function v(){A();for(let M in n){let w=n[M];for(let E in w){let R=w[E];for(let z in R)f(R[z].object),delete R[z];delete w[E]}delete n[M]}}function h(M){if(n[M.id]===void 0)return;let w=n[M.id];for(let E in w){let R=w[E];for(let z in R)f(R[z].object),delete R[z];delete w[E]}delete n[M.id]}function C(M){for(let w in n){let E=n[w];if(E[M.id]===void 0)continue;let R=E[M.id];for(let z in R)f(R[z].object),delete R[z];delete E[M.id]}}function A(){S(),o=!0,s!==r&&(s=r,l(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:A,resetDefaultState:S,dispose:v,releaseStatesOfGeometry:h,releaseStatesOfProgram:C,initAttributes:b,enableAttribute:x,disableUnusedAttributes:T}}function my(i,t,e){let n;function r(l){n=l}function s(l,f){i.drawArrays(n,l,f),e.update(f,n,1)}function o(l,f,p){p!==0&&(i.drawArraysInstanced(n,l,f,p),e.update(f,n,p))}function a(l,f,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,f,0,p);let g=0;for(let y=0;y<p;y++)g+=f[y];e.update(g,n,1)}function u(l,f,p,m){if(p===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let y=0;y<l.length;y++)o(l[y],f[y],m[y]);else{g.multiDrawArraysInstancedWEBGL(n,l,0,f,0,m,0,p);let y=0;for(let b=0;b<p;b++)y+=f[b]*m[b];e.update(y,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=u}function gy(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==vn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let A=C===Gr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Ln&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Xn&&!A)}function u(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",f=u(l);f!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",f,"instead."),l=f);let p=e.logarithmicDepthBuffer===!0,m=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),c=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=y>0,h=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:u,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:p,reversedDepthBuffer:m,maxTextures:g,maxVertexTextures:y,maxTextureSize:b,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:T,maxVaryings:d,maxFragmentUniforms:c,vertexTextures:v,maxSamples:h}}function _y(i){let t=this,e=null,n=0,r=!1,s=!1,o=new Ce,a=new kt,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(p,m){let g=p.length!==0||m||n!==0||r;return r=m,n=p.length,g},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,m){e=f(p,m,0)},this.setState=function(p,m,g){let y=p.clippingPlanes,b=p.clipIntersection,x=p.clipShadows,_=i.get(p);if(!r||y===null||y.length===0||s&&!x)s?f(null):l();else{let T=s?0:n,d=T*4,c=_.clippingState||null;u.value=c,c=f(y,m,d,g);for(let v=0;v!==d;++v)c[v]=e[v];_.clippingState=c,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=T}};function l(){u.value!==e&&(u.value=e,u.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function f(p,m,g,y){let b=p!==null?p.length:0,x=null;if(b!==0){if(x=u.value,y!==!0||x===null){let _=g+b*4,T=m.matrixWorldInverse;a.getNormalMatrix(T),(x===null||x.length<_)&&(x=new Float32Array(_));for(let d=0,c=g;d!==b;++d,c+=4)o.copy(p[d]).applyMatrix4(T,a),o.normal.toArray(x,c),x[c+3]=o.constant}u.value=x,u.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,x}}function xy(i){let t=new WeakMap;function e(o,a){return a===Qa?o.mapping=qi:a===tc&&(o.mapping=Yi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Qa||a===tc)if(t.has(o)){let u=t.get(o).texture;return e(u,o.mapping)}else{let u=o.image;if(u&&u.height>0){let l=new ha(u.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",r),e(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let u=t.get(a);u!==void 0&&(t.delete(a),u.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}var Yr=4,Wd=[.125,.215,.35,.446,.526,.582],Qi=20,qh=new kr,Xd=new qt,Yh=null,Zh=0,$h=0,Jh=!1,ji=(1+Math.sqrt(5))/2,qr=1/ji,qd=[new F(-ji,qr,0),new F(ji,qr,0),new F(-qr,0,ji),new F(qr,0,ji),new F(0,ji,-qr),new F(0,ji,qr),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],yy=new F,Vc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100,s={}){let{size:o=256,position:a=yy}=s;Yh=this._renderer.getRenderTarget(),Zh=this._renderer.getActiveCubeFace(),$h=this._renderer.getActiveMipmapLevel(),Jh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(t,n,r,u,a),e>0&&this._blur(u,0,0,e),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$d(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Yh,Zh,$h),this._renderer.xr.enabled=Jh,t.scissorTest=!1,zc(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===qi||t.mapping===Yi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Yh=this._renderer.getRenderTarget(),Zh=this._renderer.getActiveCubeFace(),$h=this._renderer.getActiveMipmapLevel(),Jh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:Gr,format:vn,colorSpace:Hi,depthBuffer:!1},r=Yd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yd(t,e,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vy(s)),this._blurMaterial=My(s,t,e)}return r}_compileMaterial(t){let e=new Ye(this._lodPlanes[0],t);this._renderer.compile(e,qh)}_sceneToCubeUV(t,e,n,r,s){let u=new Xe(90,1,e,n),l=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],p=this._renderer,m=p.autoClear,g=p.toneMapping;p.getClearColor(Xd),p.toneMapping=si,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null));let b=new Pr({name:"PMREM.Background",side:Oe,depthWrite:!1,depthTest:!1}),x=new Ye(new ni,b),_=!1,T=t.background;T?T.isColor&&(b.color.copy(T),t.background=null,_=!0):(b.color.copy(Xd),_=!0);for(let d=0;d<6;d++){let c=d%3;c===0?(u.up.set(0,l[d],0),u.position.set(s.x,s.y,s.z),u.lookAt(s.x+f[d],s.y,s.z)):c===1?(u.up.set(0,0,l[d]),u.position.set(s.x,s.y,s.z),u.lookAt(s.x,s.y+f[d],s.z)):(u.up.set(0,l[d],0),u.position.set(s.x,s.y,s.z),u.lookAt(s.x,s.y,s.z+f[d]));let v=this._cubeSize;zc(r,c*v,d>2?v:0,v,v),p.setRenderTarget(r),_&&p.render(x,u),p.render(t,u)}x.geometry.dispose(),x.material.dispose(),p.toneMapping=g,p.autoClear=m,t.background=T}_textureToCubeUV(t,e){let n=this._renderer,r=t.mapping===qi||t.mapping===Yi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=$d()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zd());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ye(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;let u=this._cubeSize;zc(e,0,0,3*u,2*u),n.setRenderTarget(e),n.render(o,qh)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=qd[(r-s-1)%qd.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){let u=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let f=3,p=new Ye(this._lodPlanes[r],l),m=l.uniforms,g=this._sizeLods[n]-1,y=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Qi-1),b=s/y,x=isFinite(s)?1+Math.floor(f*b):Qi;x>Qi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Qi}`);let _=[],T=0;for(let C=0;C<Qi;++C){let A=C/b,S=Math.exp(-A*A/2);_.push(S),C===0?T+=S:C<x&&(T+=2*S)}for(let C=0;C<_.length;C++)_[C]=_[C]/T;m.envMap.value=t.texture,m.samples.value=x,m.weights.value=_,m.latitudinal.value=o==="latitudinal",a&&(m.poleAxis.value=a);let{_lodMax:d}=this;m.dTheta.value=y,m.mipInt.value=d-n;let c=this._sizeLods[r],v=3*c*(r>d-Yr?r-d+Yr:0),h=4*(this._cubeSize-c);zc(e,v,h,3*c,2*c),u.setRenderTarget(e),u.render(p,qh)}};function vy(i){let t=[],e=[],n=[],r=i,s=i-Yr+1+Wd.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);e.push(a);let u=1/a;o>i-Yr?u=Wd[o-i+Yr-1]:o===0&&(u=0),n.push(u);let l=1/(a-2),f=-l,p=1+l,m=[f,f,p,f,p,p,f,f,p,p,f,p],g=6,y=6,b=3,x=2,_=1,T=new Float32Array(b*y*g),d=new Float32Array(x*y*g),c=new Float32Array(_*y*g);for(let h=0;h<g;h++){let C=h%3*2/3-1,A=h>2?0:-1,S=[C,A,0,C+2/3,A,0,C+2/3,A+1,0,C,A,0,C+2/3,A+1,0,C,A+1,0];T.set(S,b*y*h),d.set(m,x*y*h);let M=[h,h,h,h,h,h];c.set(M,_*y*h)}let v=new Te;v.setAttribute("position",new pe(T,b)),v.setAttribute("uv",new pe(d,x)),v.setAttribute("faceIndex",new pe(c,_)),t.push(v),r>Yr&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Yd(i,t,e){let n=new Hn(i,t,e);return n.texture.mapping=Ks,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zc(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function My(i,t,e){let n=new Float32Array(Qi),r=new F(0,1,0);return new In({name:"SphericalGaussianBlur",defines:{n:Qi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Zd(){return new In({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function $d(){return new In({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function au(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Sy(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let u=a.mapping,l=u===Qa||u===tc,f=u===qi||u===Yi;if(l||f){let p=t.get(a),m=p!==void 0?p.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==m)return e===null&&(e=new Vc(i)),p=l?e.fromEquirectangular(a,p):e.fromCubemap(a,p),p.texture.pmremVersion=a.pmremVersion,t.set(a,p),p.texture;if(p!==void 0)return p.texture;{let g=a.image;return l&&g&&g.height>0||f&&g&&r(g)?(e===null&&(e=new Vc(i)),p=l?e.fromEquirectangular(a):e.fromCubemap(a),p.texture.pmremVersion=a.pmremVersion,t.set(a,p),a.addEventListener("dispose",s),p.texture):null}}}return a}function r(a){let u=0,l=6;for(let f=0;f<l;f++)a[f]!==void 0&&u++;return u===l}function s(a){let u=a.target;u.removeEventListener("dispose",s);let l=t.get(u);l!==void 0&&(t.delete(u),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function by(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let r=e(n);return r===null&&Cr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Ty(i,t,e,n){let r={},s=new WeakMap;function o(p){let m=p.target;m.index!==null&&t.remove(m.index);for(let y in m.attributes)t.remove(m.attributes[y]);m.removeEventListener("dispose",o),delete r[m.id];let g=s.get(m);g&&(t.remove(g),s.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function a(p,m){return r[m.id]===!0||(m.addEventListener("dispose",o),r[m.id]=!0,e.memory.geometries++),m}function u(p){let m=p.attributes;for(let g in m)t.update(m[g],i.ARRAY_BUFFER)}function l(p){let m=[],g=p.index,y=p.attributes.position,b=0;if(g!==null){let T=g.array;b=g.version;for(let d=0,c=T.length;d<c;d+=3){let v=T[d+0],h=T[d+1],C=T[d+2];m.push(v,h,h,C,C,v)}}else if(y!==void 0){let T=y.array;b=y.version;for(let d=0,c=T.length/3-1;d<c;d+=3){let v=d+0,h=d+1,C=d+2;m.push(v,h,h,C,C,v)}}else return;let x=new(kh(m)?Ns:Ls)(m,1);x.version=b;let _=s.get(p);_&&t.remove(_),s.set(p,x)}function f(p){let m=s.get(p);if(m){let g=p.index;g!==null&&m.version<g.version&&l(p)}else l(p);return s.get(p)}return{get:a,update:u,getWireframeAttribute:f}}function wy(i,t,e){let n;function r(m){n=m}let s,o;function a(m){s=m.type,o=m.bytesPerElement}function u(m,g){i.drawElements(n,g,s,m*o),e.update(g,n,1)}function l(m,g,y){y!==0&&(i.drawElementsInstanced(n,g,s,m*o,y),e.update(g,n,y))}function f(m,g,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,s,m,0,y);let x=0;for(let _=0;_<y;_++)x+=g[_];e.update(x,n,1)}function p(m,g,y,b){if(y===0)return;let x=t.get("WEBGL_multi_draw");if(x===null)for(let _=0;_<m.length;_++)l(m[_]/o,g[_],b[_]);else{x.multiDrawElementsInstancedWEBGL(n,g,0,s,m,0,b,0,y);let _=0;for(let T=0;T<y;T++)_+=g[T]*b[T];e.update(_,n,1)}}this.setMode=r,this.setIndex=a,this.render=u,this.renderInstances=l,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function Ey(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function Ay(i,t,e){let n=new WeakMap,r=new se;function s(o,a,u){let l=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=f!==void 0?f.length:0,m=n.get(a);if(m===void 0||m.count!==p){let S=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",S)};m!==void 0&&m.texture.dispose();let g=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,b=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],T=a.morphAttributes.color||[],d=0;g===!0&&(d=1),y===!0&&(d=2),b===!0&&(d=3);let c=a.attributes.position.count*d,v=1;c>t.maxTextureSize&&(v=Math.ceil(c/t.maxTextureSize),c=t.maxTextureSize);let h=new Float32Array(c*v*4*p),C=new Ds(h,c,v,p);C.type=Xn,C.needsUpdate=!0;let A=d*4;for(let M=0;M<p;M++){let w=x[M],E=_[M],R=T[M],z=c*v*4*M;for(let V=0;V<w.count;V++){let H=V*A;g===!0&&(r.fromBufferAttribute(w,V),h[z+H+0]=r.x,h[z+H+1]=r.y,h[z+H+2]=r.z,h[z+H+3]=0),y===!0&&(r.fromBufferAttribute(E,V),h[z+H+4]=r.x,h[z+H+5]=r.y,h[z+H+6]=r.z,h[z+H+7]=0),b===!0&&(r.fromBufferAttribute(R,V),h[z+H+8]=r.x,h[z+H+9]=r.y,h[z+H+10]=r.z,h[z+H+11]=R.itemSize===4?r.w:1)}}m={count:p,texture:C,size:new ht(c,v)},n.set(a,m),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)u.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let b=0;b<l.length;b++)g+=l[b];let y=a.morphTargetsRelative?1:1-g;u.getUniforms().setValue(i,"morphTargetBaseInfluence",y),u.getUniforms().setValue(i,"morphTargetInfluences",l)}u.getUniforms().setValue(i,"morphTargetsTexture",m.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}return{update:s}}function Cy(i,t,e,n){let r=new WeakMap;function s(u){let l=n.render.frame,f=u.geometry,p=t.get(u,f);if(r.get(p)!==l&&(t.update(p),r.set(p,l)),u.isInstancedMesh&&(u.hasEventListener("dispose",a)===!1&&u.addEventListener("dispose",a),r.get(u)!==l&&(e.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&e.update(u.instanceColor,i.ARRAY_BUFFER),r.set(u,l))),u.isSkinnedMesh){let m=u.skeleton;r.get(m)!==l&&(m.update(),r.set(m,l))}return p}function o(){r=new WeakMap}function a(u){let l=u.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}var pp=new an,Jd=new Os(1,1),mp=new Ds,gp=new ca,_p=new Fs,Kd=[],jd=[],Qd=new Float32Array(16),tp=new Float32Array(9),ep=new Float32Array(4);function $r(i,t,e){let n=i[0];if(n<=0||n>0)return i;let r=t*e,s=Kd[r];if(s===void 0&&(s=new Float32Array(r),Kd[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function De(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Le(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Gc(i,t){let e=jd[t];e===void 0&&(e=new Int32Array(t),jd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Ry(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Iy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2fv(this.addr,t),Le(e,t)}}function Py(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;i.uniform3fv(this.addr,t),Le(e,t)}}function Dy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4fv(this.addr,t),Le(e,t)}}function Ly(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Le(e,t)}else{if(De(e,n))return;ep.set(n),i.uniformMatrix2fv(this.addr,!1,ep),Le(e,n)}}function Ny(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Le(e,t)}else{if(De(e,n))return;tp.set(n),i.uniformMatrix3fv(this.addr,!1,tp),Le(e,n)}}function Uy(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Le(e,t)}else{if(De(e,n))return;Qd.set(n),i.uniformMatrix4fv(this.addr,!1,Qd),Le(e,n)}}function Fy(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function By(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2iv(this.addr,t),Le(e,t)}}function Oy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3iv(this.addr,t),Le(e,t)}}function zy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4iv(this.addr,t),Le(e,t)}}function ky(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Vy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2uiv(this.addr,t),Le(e,t)}}function Hy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3uiv(this.addr,t),Le(e,t)}}function Gy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4uiv(this.addr,t),Le(e,t)}}function Wy(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Jd.compareFunction=Bh,s=Jd):s=pp,e.setTexture2D(t||s,r)}function Xy(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||gp,r)}function qy(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||_p,r)}function Yy(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||mp,r)}function Zy(i){switch(i){case 5126:return Ry;case 35664:return Iy;case 35665:return Py;case 35666:return Dy;case 35674:return Ly;case 35675:return Ny;case 35676:return Uy;case 5124:case 35670:return Fy;case 35667:case 35671:return By;case 35668:case 35672:return Oy;case 35669:case 35673:return zy;case 5125:return ky;case 36294:return Vy;case 36295:return Hy;case 36296:return Gy;case 35678:case 36198:case 36298:case 36306:case 35682:return Wy;case 35679:case 36299:case 36307:return Xy;case 35680:case 36300:case 36308:case 36293:return qy;case 36289:case 36303:case 36311:case 36292:return Yy}}function $y(i,t){i.uniform1fv(this.addr,t)}function Jy(i,t){let e=$r(t,this.size,2);i.uniform2fv(this.addr,e)}function Ky(i,t){let e=$r(t,this.size,3);i.uniform3fv(this.addr,e)}function jy(i,t){let e=$r(t,this.size,4);i.uniform4fv(this.addr,e)}function Qy(i,t){let e=$r(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function tv(i,t){let e=$r(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function ev(i,t){let e=$r(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function nv(i,t){i.uniform1iv(this.addr,t)}function iv(i,t){i.uniform2iv(this.addr,t)}function rv(i,t){i.uniform3iv(this.addr,t)}function sv(i,t){i.uniform4iv(this.addr,t)}function ov(i,t){i.uniform1uiv(this.addr,t)}function av(i,t){i.uniform2uiv(this.addr,t)}function cv(i,t){i.uniform3uiv(this.addr,t)}function lv(i,t){i.uniform4uiv(this.addr,t)}function hv(i,t,e){let n=this.cache,r=t.length,s=Gc(e,r);De(n,s)||(i.uniform1iv(this.addr,s),Le(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||pp,s[o])}function uv(i,t,e){let n=this.cache,r=t.length,s=Gc(e,r);De(n,s)||(i.uniform1iv(this.addr,s),Le(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||gp,s[o])}function fv(i,t,e){let n=this.cache,r=t.length,s=Gc(e,r);De(n,s)||(i.uniform1iv(this.addr,s),Le(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||_p,s[o])}function dv(i,t,e){let n=this.cache,r=t.length,s=Gc(e,r);De(n,s)||(i.uniform1iv(this.addr,s),Le(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||mp,s[o])}function pv(i){switch(i){case 5126:return $y;case 35664:return Jy;case 35665:return Ky;case 35666:return jy;case 35674:return Qy;case 35675:return tv;case 35676:return ev;case 5124:case 35670:return nv;case 35667:case 35671:return iv;case 35668:case 35672:return rv;case 35669:case 35673:return sv;case 5125:return ov;case 36294:return av;case 36295:return cv;case 36296:return lv;case 35678:case 36198:case 36298:case 36306:case 35682:return hv;case 35679:case 36299:case 36307:return uv;case 35680:case 36300:case 36308:case 36293:return fv;case 36289:case 36303:case 36311:case 36292:return dv}}var jh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Zy(e.type)}},Qh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=pv(e.type)}},tu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(t,e[a.id],n)}}},Kh=/(\w+)(\])?(\[|\.)?/g;function np(i,t){i.seq.push(t),i.map[t.id]=t}function mv(i,t,e){let n=i.name,r=n.length;for(Kh.lastIndex=0;;){let s=Kh.exec(n),o=Kh.lastIndex,a=s[1],u=s[2]==="]",l=s[3];if(u&&(a=a|0),l===void 0||l==="["&&o+2===r){np(e,l===void 0?new jh(a,i,t):new Qh(a,i,t));break}else{let p=e.map[a];p===void 0&&(p=new tu(a),np(e,p)),e=p}}}var Zr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);mv(s,o,this)}}setValue(t,e,n,r){let s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){let r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){let a=e[s],u=n[a.id];u.needsUpdate!==!1&&a.setValue(t,u.value,r)}}static seqWithValue(t,e){let n=[];for(let r=0,s=t.length;r!==s;++r){let o=t[r];o.id in e&&n.push(o)}return n}};function ip(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var gv=37297,_v=0;function xv(i,t){let e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var rp=new kt;function yv(i){Qt._getMatrix(rp,Qt.workingColorSpace,i);let t=`mat3( ${rp.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(i)){case Rs:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function sp(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+xv(i.getShaderSource(t),a)}else return s}function vv(i,t){let e=yv(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Mv(i,t){let e;switch(t){case _d:e="Linear";break;case xd:e="Reinhard";break;case yd:e="Cineon";break;case vd:e="ACESFilmic";break;case Sd:e="AgX";break;case bd:e="Neutral";break;case Md:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var kc=new F;function Sv(){Qt.getLuminanceCoefficients(kc);let i=kc.x.toFixed(4),t=kc.y.toFixed(4),e=kc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(io).join(`
`)}function Tv(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function wv(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(t,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function io(i){return i!==""}function op(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ap(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ev=/^[ \t]*#include +<([\w\d./]+)>/gm;function eu(i){return i.replace(Ev,Cv)}var Av=new Map;function Cv(i,t){let e=$t[t];if(e===void 0){let n=Av.get(t);if(n!==void 0)e=$t[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return eu(e)}var Rv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cp(i){return i.replace(Rv,Iv)}function Iv(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function lp(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Pv(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Th?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Jf?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Wn&&(t="SHADOWMAP_TYPE_VSM"),t}function Dv(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case qi:case Yi:t="ENVMAP_TYPE_CUBE";break;case Ks:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Lv(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Yi&&(t="ENVMAP_MODE_REFRACTION"),t}function Nv(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ja:t="ENVMAP_BLENDING_MULTIPLY";break;case md:t="ENVMAP_BLENDING_MIX";break;case gd:t="ENVMAP_BLENDING_ADD";break}return t}function Uv(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Fv(i,t,e,n){let r=i.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,u=Pv(e),l=Dv(e),f=Lv(e),p=Nv(e),m=Uv(e),g=bv(e),y=Tv(s),b=r.createProgram(),x,_,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(io).join(`
`),x.length>0&&(x+=`
`),_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(io).join(`
`),_.length>0&&(_+=`
`)):(x=[lp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(io).join(`
`),_=[lp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+f:"",e.envMap?"#define "+p:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==si?"#define TONE_MAPPING":"",e.toneMapping!==si?$t.tonemapping_pars_fragment:"",e.toneMapping!==si?Mv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,vv("linearToOutputTexel",e.outputColorSpace),Sv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(io).join(`
`)),o=eu(o),o=op(o,e),o=ap(o,e),a=eu(a),a=op(a,e),a=ap(a,e),o=cp(o),a=cp(a),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,x=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,_=["#define varying in",e.glslVersion===Oh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Oh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let d=T+x+o,c=T+_+a,v=ip(r,r.VERTEX_SHADER,d),h=ip(r,r.FRAGMENT_SHADER,c);r.attachShader(b,v),r.attachShader(b,h),e.index0AttributeName!==void 0?r.bindAttribLocation(b,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function C(w){if(i.debug.checkShaderErrors){let E=r.getProgramInfoLog(b)||"",R=r.getShaderInfoLog(v)||"",z=r.getShaderInfoLog(h)||"",V=E.trim(),H=R.trim(),q=z.trim(),O=!0,st=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,b,v,h);else{let dt=sp(r,v,"vertex"),ft=sp(r,h,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+V+`
`+dt+`
`+ft)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(H===""||q==="")&&(st=!1);st&&(w.diagnostics={runnable:O,programLog:V,vertexShader:{log:H,prefix:x},fragmentShader:{log:q,prefix:_}})}r.deleteShader(v),r.deleteShader(h),A=new Zr(r,b),S=wv(r,b)}let A;this.getUniforms=function(){return A===void 0&&C(this),A};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(b,gv)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=_v++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=v,this.fragmentShader=h,this}var Bv=0,nu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new iu(t),e.set(t,n)),n}},iu=class{constructor(t){this.id=Bv++,this.code=t,this.usedTimes=0}};function Ov(i,t,e,n,r,s,o){let a=new Ir,u=new nu,l=new Set,f=[],p=r.logarithmicDepthBuffer,m=r.vertexTextures,g=r.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(S){return l.add(S),S===0?"uv":`uv${S}`}function x(S,M,w,E,R){let z=E.fog,V=R.geometry,H=S.isMeshStandardMaterial?E.environment:null,q=(S.isMeshStandardMaterial?e:t).get(S.envMap||H),O=q&&q.mapping===Ks?q.image.height:null,st=y[S.type];S.precision!==null&&(g=r.getMaxPrecision(S.precision),g!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",g,"instead."));let dt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ft=dt!==void 0?dt.length:0,_t=0;V.morphAttributes.position!==void 0&&(_t=1),V.morphAttributes.normal!==void 0&&(_t=2),V.morphAttributes.color!==void 0&&(_t=3);let wt,Z,k,D;if(st){let re=qn[st];wt=re.vertexShader,Z=re.fragmentShader}else wt=S.vertexShader,Z=S.fragmentShader,u.update(S),k=u.getVertexShaderID(S),D=u.getFragmentShaderID(S);let I=i.getRenderTarget(),K=i.state.buffers.depth.getReversed(),et=R.isInstancedMesh===!0,Y=R.isBatchedMesh===!0,at=!!S.map,mt=!!S.matcap,U=!!q,W=!!S.aoMap,X=!!S.lightMap,$=!!S.bumpMap,J=!!S.normalMap,G=!!S.displacementMap,L=!!S.emissiveMap,it=!!S.metalnessMap,gt=!!S.roughnessMap,Tt=S.anisotropy>0,B=S.clearcoat>0,P=S.dispersion>0,j=S.iridescence>0,rt=S.sheen>0,ut=S.transmission>0,ot=Tt&&!!S.anisotropyMap,St=B&&!!S.clearcoatMap,yt=B&&!!S.clearcoatNormalMap,Dt=B&&!!S.clearcoatRoughnessMap,Pt=j&&!!S.iridescenceMap,xt=j&&!!S.iridescenceThicknessMap,Ct=rt&&!!S.sheenColorMap,Ht=rt&&!!S.sheenRoughnessMap,Bt=!!S.specularMap,Rt=!!S.specularColorMap,Zt=!!S.specularIntensityMap,Q=ut&&!!S.transmissionMap,bt=ut&&!!S.thicknessMap,Et=!!S.gradientMap,Nt=!!S.alphaMap,vt=S.alphaTest>0,pt=!!S.alphaHash,Ft=!!S.extensions,Yt=si;S.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Yt=i.toneMapping);let _e={shaderID:st,shaderType:S.type,shaderName:S.name,vertexShader:wt,fragmentShader:Z,defines:S.defines,customVertexShaderID:k,customFragmentShaderID:D,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:g,batching:Y,batchingColor:Y&&R._colorsTexture!==null,instancing:et,instancingColor:et&&R.instanceColor!==null,instancingMorph:et&&R.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:I===null?i.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Hi,alphaToCoverage:!!S.alphaToCoverage,map:at,matcap:mt,envMap:U,envMapMode:U&&q.mapping,envMapCubeUVHeight:O,aoMap:W,lightMap:X,bumpMap:$,normalMap:J,displacementMap:m&&G,emissiveMap:L,normalMapObjectSpace:J&&S.normalMapType===Ad,normalMapTangentSpace:J&&S.normalMapType===Fc,metalnessMap:it,roughnessMap:gt,anisotropy:Tt,anisotropyMap:ot,clearcoat:B,clearcoatMap:St,clearcoatNormalMap:yt,clearcoatRoughnessMap:Dt,dispersion:P,iridescence:j,iridescenceMap:Pt,iridescenceThicknessMap:xt,sheen:rt,sheenColorMap:Ct,sheenRoughnessMap:Ht,specularMap:Bt,specularColorMap:Rt,specularIntensityMap:Zt,transmission:ut,transmissionMap:Q,thicknessMap:bt,gradientMap:Et,opaque:S.transparent===!1&&S.blending===ki&&S.alphaToCoverage===!1,alphaMap:Nt,alphaTest:vt,alphaHash:pt,combine:S.combine,mapUv:at&&b(S.map.channel),aoMapUv:W&&b(S.aoMap.channel),lightMapUv:X&&b(S.lightMap.channel),bumpMapUv:$&&b(S.bumpMap.channel),normalMapUv:J&&b(S.normalMap.channel),displacementMapUv:G&&b(S.displacementMap.channel),emissiveMapUv:L&&b(S.emissiveMap.channel),metalnessMapUv:it&&b(S.metalnessMap.channel),roughnessMapUv:gt&&b(S.roughnessMap.channel),anisotropyMapUv:ot&&b(S.anisotropyMap.channel),clearcoatMapUv:St&&b(S.clearcoatMap.channel),clearcoatNormalMapUv:yt&&b(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Dt&&b(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Pt&&b(S.iridescenceMap.channel),iridescenceThicknessMapUv:xt&&b(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&b(S.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&b(S.sheenRoughnessMap.channel),specularMapUv:Bt&&b(S.specularMap.channel),specularColorMapUv:Rt&&b(S.specularColorMap.channel),specularIntensityMapUv:Zt&&b(S.specularIntensityMap.channel),transmissionMapUv:Q&&b(S.transmissionMap.channel),thicknessMapUv:bt&&b(S.thicknessMap.channel),alphaMapUv:Nt&&b(S.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(J||Tt),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!V.attributes.uv&&(at||Nt),fog:!!z,useFog:S.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:K,skinning:R.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:ft,morphTextureStride:_t,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:Yt,decodeVideoTexture:at&&S.map.isVideoTexture===!0&&Qt.getTransfer(S.map.colorSpace)===ae,decodeVideoTextureEmissive:L&&S.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(S.emissiveMap.colorSpace)===ae,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ze,flipSided:S.side===Oe,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ft&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&S.extensions.multiDraw===!0||Y)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return _e.vertexUv1s=l.has(1),_e.vertexUv2s=l.has(2),_e.vertexUv3s=l.has(3),l.clear(),_e}function _(S){let M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(let w in S.defines)M.push(w),M.push(S.defines[w]);return S.isRawShaderMaterial===!1&&(T(M,S),d(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function T(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function d(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function c(S){let M=y[S.type],w;if(M){let E=qn[M];w=Od.clone(E.uniforms)}else w=S.uniforms;return w}function v(S,M){let w;for(let E=0,R=f.length;E<R;E++){let z=f[E];if(z.cacheKey===M){w=z,++w.usedTimes;break}}return w===void 0&&(w=new Fv(i,M,S,s),f.push(w)),w}function h(S){if(--S.usedTimes===0){let M=f.indexOf(S);f[M]=f[f.length-1],f.pop(),S.destroy()}}function C(S){u.remove(S)}function A(){u.dispose()}return{getParameters:x,getProgramCacheKey:_,getUniforms:c,acquireProgram:v,releaseProgram:h,releaseShaderCache:C,programs:f,dispose:A}}function zv(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,u){i.get(o)[a]=u}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function kv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function hp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function up(){let i=[],t=0,e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(p,m,g,y,b,x){let _=i[t];return _===void 0?(_={id:p.id,object:p,geometry:m,material:g,groupOrder:y,renderOrder:p.renderOrder,z:b,group:x},i[t]=_):(_.id=p.id,_.object=p,_.geometry=m,_.material=g,_.groupOrder=y,_.renderOrder=p.renderOrder,_.z=b,_.group=x),t++,_}function a(p,m,g,y,b,x){let _=o(p,m,g,y,b,x);g.transmission>0?n.push(_):g.transparent===!0?r.push(_):e.push(_)}function u(p,m,g,y,b,x){let _=o(p,m,g,y,b,x);g.transmission>0?n.unshift(_):g.transparent===!0?r.unshift(_):e.unshift(_)}function l(p,m){e.length>1&&e.sort(p||kv),n.length>1&&n.sort(m||hp),r.length>1&&r.sort(m||hp)}function f(){for(let p=t,m=i.length;p<m;p++){let g=i[p];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:u,finish:f,sort:l}}function Vv(){let i=new WeakMap;function t(n,r){let s=i.get(n),o;return s===void 0?(o=new up,i.set(n,[o])):r>=s.length?(o=new up,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Hv(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new qt};break;case"SpotLight":e={position:new F,direction:new F,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new F,halfWidth:new F,halfHeight:new F};break}return i[t.id]=e,e}}}function Gv(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Wv=0;function Xv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function qv(i){let t=new Hv,e=Gv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new F);let r=new F,s=new Gt,o=new Gt;function a(l){let f=0,p=0,m=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let g=0,y=0,b=0,x=0,_=0,T=0,d=0,c=0,v=0,h=0,C=0;l.sort(Xv);for(let S=0,M=l.length;S<M;S++){let w=l[S],E=w.color,R=w.intensity,z=w.distance,V=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)f+=E.r*R,p+=E.g*R,m+=E.b*R;else if(w.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(w.sh.coefficients[H],R);C++}else if(w.isDirectionalLight){let H=t.get(w);if(H.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let q=w.shadow,O=e.get(w);O.shadowIntensity=q.intensity,O.shadowBias=q.bias,O.shadowNormalBias=q.normalBias,O.shadowRadius=q.radius,O.shadowMapSize=q.mapSize,n.directionalShadow[g]=O,n.directionalShadowMap[g]=V,n.directionalShadowMatrix[g]=w.shadow.matrix,T++}n.directional[g]=H,g++}else if(w.isSpotLight){let H=t.get(w);H.position.setFromMatrixPosition(w.matrixWorld),H.color.copy(E).multiplyScalar(R),H.distance=z,H.coneCos=Math.cos(w.angle),H.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),H.decay=w.decay,n.spot[b]=H;let q=w.shadow;if(w.map&&(n.spotLightMap[v]=w.map,v++,q.updateMatrices(w),w.castShadow&&h++),n.spotLightMatrix[b]=q.matrix,w.castShadow){let O=e.get(w);O.shadowIntensity=q.intensity,O.shadowBias=q.bias,O.shadowNormalBias=q.normalBias,O.shadowRadius=q.radius,O.shadowMapSize=q.mapSize,n.spotShadow[b]=O,n.spotShadowMap[b]=V,c++}b++}else if(w.isRectAreaLight){let H=t.get(w);H.color.copy(E).multiplyScalar(R),H.halfWidth.set(w.width*.5,0,0),H.halfHeight.set(0,w.height*.5,0),n.rectArea[x]=H,x++}else if(w.isPointLight){let H=t.get(w);if(H.color.copy(w.color).multiplyScalar(w.intensity),H.distance=w.distance,H.decay=w.decay,w.castShadow){let q=w.shadow,O=e.get(w);O.shadowIntensity=q.intensity,O.shadowBias=q.bias,O.shadowNormalBias=q.normalBias,O.shadowRadius=q.radius,O.shadowMapSize=q.mapSize,O.shadowCameraNear=q.camera.near,O.shadowCameraFar=q.camera.far,n.pointShadow[y]=O,n.pointShadowMap[y]=V,n.pointShadowMatrix[y]=w.shadow.matrix,d++}n.point[y]=H,y++}else if(w.isHemisphereLight){let H=t.get(w);H.skyColor.copy(w.color).multiplyScalar(R),H.groundColor.copy(w.groundColor).multiplyScalar(R),n.hemi[_]=H,_++}}x>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=At.LTC_FLOAT_1,n.rectAreaLTC2=At.LTC_FLOAT_2):(n.rectAreaLTC1=At.LTC_HALF_1,n.rectAreaLTC2=At.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=p,n.ambient[2]=m;let A=n.hash;(A.directionalLength!==g||A.pointLength!==y||A.spotLength!==b||A.rectAreaLength!==x||A.hemiLength!==_||A.numDirectionalShadows!==T||A.numPointShadows!==d||A.numSpotShadows!==c||A.numSpotMaps!==v||A.numLightProbes!==C)&&(n.directional.length=g,n.spot.length=b,n.rectArea.length=x,n.point.length=y,n.hemi.length=_,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=d,n.pointShadowMap.length=d,n.spotShadow.length=c,n.spotShadowMap.length=c,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=d,n.spotLightMatrix.length=c+v-h,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=h,n.numLightProbes=C,A.directionalLength=g,A.pointLength=y,A.spotLength=b,A.rectAreaLength=x,A.hemiLength=_,A.numDirectionalShadows=T,A.numPointShadows=d,A.numSpotShadows=c,A.numSpotMaps=v,A.numLightProbes=C,n.version=Wv++)}function u(l,f){let p=0,m=0,g=0,y=0,b=0,x=f.matrixWorldInverse;for(let _=0,T=l.length;_<T;_++){let d=l[_];if(d.isDirectionalLight){let c=n.directional[p];c.direction.setFromMatrixPosition(d.matrixWorld),r.setFromMatrixPosition(d.target.matrixWorld),c.direction.sub(r),c.direction.transformDirection(x),p++}else if(d.isSpotLight){let c=n.spot[g];c.position.setFromMatrixPosition(d.matrixWorld),c.position.applyMatrix4(x),c.direction.setFromMatrixPosition(d.matrixWorld),r.setFromMatrixPosition(d.target.matrixWorld),c.direction.sub(r),c.direction.transformDirection(x),g++}else if(d.isRectAreaLight){let c=n.rectArea[y];c.position.setFromMatrixPosition(d.matrixWorld),c.position.applyMatrix4(x),o.identity(),s.copy(d.matrixWorld),s.premultiply(x),o.extractRotation(s),c.halfWidth.set(d.width*.5,0,0),c.halfHeight.set(0,d.height*.5,0),c.halfWidth.applyMatrix4(o),c.halfHeight.applyMatrix4(o),y++}else if(d.isPointLight){let c=n.point[m];c.position.setFromMatrixPosition(d.matrixWorld),c.position.applyMatrix4(x),m++}else if(d.isHemisphereLight){let c=n.hemi[b];c.direction.setFromMatrixPosition(d.matrixWorld),c.direction.transformDirection(x),b++}}}return{setup:a,setupView:u,state:n}}function fp(i){let t=new qv(i),e=[],n=[];function r(f){l.camera=f,e.length=0,n.length=0}function s(f){e.push(f)}function o(f){n.push(f)}function a(){t.setup(e)}function u(f){t.setupView(e,f)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:u,pushLight:s,pushShadow:o}}function Yv(i){let t=new WeakMap;function e(r,s=0){let o=t.get(r),a;return o===void 0?(a=new fp(i),t.set(r,[a])):s>=o.length?(a=new fp(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Zv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$v=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Jv(i,t,e){let n=new Lr,r=new ht,s=new ht,o=new se,a=new Ra({depthPacking:Ed}),u=new Ia,l={},f=e.maxTextureSize,p={[sn]:Oe,[Oe]:sn,[Ze]:Ze},m=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:Zv,fragmentShader:$v}),g=m.clone();g.defines.HORIZONTAL_PASS=1;let y=new Te;y.setAttribute("position",new pe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Ye(y,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Th;let _=this.type;this.render=function(h,C,A){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||h.length===0)return;let S=i.getRenderTarget(),M=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),E=i.state;E.setBlending(ri),E.buffers.depth.getReversed()===!0?E.buffers.color.setClear(0,0,0,0):E.buffers.color.setClear(1,1,1,1),E.buffers.depth.setTest(!0),E.setScissorTest(!1);let R=_!==Wn&&this.type===Wn,z=_===Wn&&this.type!==Wn;for(let V=0,H=h.length;V<H;V++){let q=h[V],O=q.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);let st=O.getFrameExtents();if(r.multiply(st),s.copy(O.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/st.x),r.x=s.x*st.x,O.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/st.y),r.y=s.y*st.y,O.mapSize.y=s.y)),O.map===null||R===!0||z===!0){let ft=this.type!==Wn?{minFilter:yn,magFilter:yn}:{};O.map!==null&&O.map.dispose(),O.map=new Hn(r.x,r.y,ft),O.map.texture.name=q.name+".shadowMap",O.camera.updateProjectionMatrix()}i.setRenderTarget(O.map),i.clear();let dt=O.getViewportCount();for(let ft=0;ft<dt;ft++){let _t=O.getViewport(ft);o.set(s.x*_t.x,s.y*_t.y,s.x*_t.z,s.y*_t.w),E.viewport(o),O.updateMatrices(q,ft),n=O.getFrustum(),c(C,A,O.camera,q,this.type)}O.isPointLightShadow!==!0&&this.type===Wn&&T(O,A),O.needsUpdate=!1}_=this.type,x.needsUpdate=!1,i.setRenderTarget(S,M,w)};function T(h,C){let A=t.update(b);m.defines.VSM_SAMPLES!==h.blurSamples&&(m.defines.VSM_SAMPLES=h.blurSamples,g.defines.VSM_SAMPLES=h.blurSamples,m.needsUpdate=!0,g.needsUpdate=!0),h.mapPass===null&&(h.mapPass=new Hn(r.x,r.y)),m.uniforms.shadow_pass.value=h.map.texture,m.uniforms.resolution.value=h.mapSize,m.uniforms.radius.value=h.radius,i.setRenderTarget(h.mapPass),i.clear(),i.renderBufferDirect(C,null,A,m,b,null),g.uniforms.shadow_pass.value=h.mapPass.texture,g.uniforms.resolution.value=h.mapSize,g.uniforms.radius.value=h.radius,i.setRenderTarget(h.map),i.clear(),i.renderBufferDirect(C,null,A,g,b,null)}function d(h,C,A,S){let M=null,w=A.isPointLight===!0?h.customDistanceMaterial:h.customDepthMaterial;if(w!==void 0)M=w;else if(M=A.isPointLight===!0?u:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let E=M.uuid,R=C.uuid,z=l[E];z===void 0&&(z={},l[E]=z);let V=z[R];V===void 0&&(V=M.clone(),z[R]=V,C.addEventListener("dispose",v)),M=V}if(M.visible=C.visible,M.wireframe=C.wireframe,S===Wn?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:p[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,A.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let E=i.properties.get(M);E.light=A}return M}function c(h,C,A,S,M){if(h.visible===!1)return;if(h.layers.test(C.layers)&&(h.isMesh||h.isLine||h.isPoints)&&(h.castShadow||h.receiveShadow&&M===Wn)&&(!h.frustumCulled||n.intersectsObject(h))){h.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,h.matrixWorld);let R=t.update(h),z=h.material;if(Array.isArray(z)){let V=R.groups;for(let H=0,q=V.length;H<q;H++){let O=V[H],st=z[O.materialIndex];if(st&&st.visible){let dt=d(h,st,S,M);h.onBeforeShadow(i,h,C,A,R,dt,O),i.renderBufferDirect(A,null,R,dt,h,O),h.onAfterShadow(i,h,C,A,R,dt,O)}}}else if(z.visible){let V=d(h,z,S,M);h.onBeforeShadow(i,h,C,A,R,V,null),i.renderBufferDirect(A,null,R,V,h,null),h.onAfterShadow(i,h,C,A,R,V,null)}}let E=h.children;for(let R=0,z=E.length;R<z;R++)c(E[R],C,A,S,M)}function v(h){h.target.removeEventListener("dispose",v);for(let A in l){let S=l[A],M=h.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}var Kv={[Xa]:qa,[Ya]:Ja,[Za]:Ka,[Vi]:$a,[qa]:Xa,[Ja]:Ya,[Ka]:Za,[$a]:Vi};function jv(i,t){function e(){let Q=!1,bt=new se,Et=null,Nt=new se(0,0,0,0);return{setMask:function(vt){Et!==vt&&!Q&&(i.colorMask(vt,vt,vt,vt),Et=vt)},setLocked:function(vt){Q=vt},setClear:function(vt,pt,Ft,Yt,_e){_e===!0&&(vt*=Yt,pt*=Yt,Ft*=Yt),bt.set(vt,pt,Ft,Yt),Nt.equals(bt)===!1&&(i.clearColor(vt,pt,Ft,Yt),Nt.copy(bt))},reset:function(){Q=!1,Et=null,Nt.set(-1,0,0,0)}}}function n(){let Q=!1,bt=!1,Et=null,Nt=null,vt=null;return{setReversed:function(pt){if(bt!==pt){let Ft=t.get("EXT_clip_control");pt?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),bt=pt;let Yt=vt;vt=null,this.setClear(Yt)}},getReversed:function(){return bt},setTest:function(pt){pt?I(i.DEPTH_TEST):K(i.DEPTH_TEST)},setMask:function(pt){Et!==pt&&!Q&&(i.depthMask(pt),Et=pt)},setFunc:function(pt){if(bt&&(pt=Kv[pt]),Nt!==pt){switch(pt){case Xa:i.depthFunc(i.NEVER);break;case qa:i.depthFunc(i.ALWAYS);break;case Ya:i.depthFunc(i.LESS);break;case Vi:i.depthFunc(i.LEQUAL);break;case Za:i.depthFunc(i.EQUAL);break;case $a:i.depthFunc(i.GEQUAL);break;case Ja:i.depthFunc(i.GREATER);break;case Ka:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Nt=pt}},setLocked:function(pt){Q=pt},setClear:function(pt){vt!==pt&&(bt&&(pt=1-pt),i.clearDepth(pt),vt=pt)},reset:function(){Q=!1,Et=null,Nt=null,vt=null,bt=!1}}}function r(){let Q=!1,bt=null,Et=null,Nt=null,vt=null,pt=null,Ft=null,Yt=null,_e=null;return{setTest:function(re){Q||(re?I(i.STENCIL_TEST):K(i.STENCIL_TEST))},setMask:function(re){bt!==re&&!Q&&(i.stencilMask(re),bt=re)},setFunc:function(re,Zn,zn){(Et!==re||Nt!==Zn||vt!==zn)&&(i.stencilFunc(re,Zn,zn),Et=re,Nt=Zn,vt=zn)},setOp:function(re,Zn,zn){(pt!==re||Ft!==Zn||Yt!==zn)&&(i.stencilOp(re,Zn,zn),pt=re,Ft=Zn,Yt=zn)},setLocked:function(re){Q=re},setClear:function(re){_e!==re&&(i.clearStencil(re),_e=re)},reset:function(){Q=!1,bt=null,Et=null,Nt=null,vt=null,pt=null,Ft=null,Yt=null,_e=null}}}let s=new e,o=new n,a=new r,u=new WeakMap,l=new WeakMap,f={},p={},m=new WeakMap,g=[],y=null,b=!1,x=null,_=null,T=null,d=null,c=null,v=null,h=null,C=new qt(0,0,0),A=0,S=!1,M=null,w=null,E=null,R=null,z=null,V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,q=0,O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(O)[1]),H=q>=1):O.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),H=q>=2);let st=null,dt={},ft=i.getParameter(i.SCISSOR_BOX),_t=i.getParameter(i.VIEWPORT),wt=new se().fromArray(ft),Z=new se().fromArray(_t);function k(Q,bt,Et,Nt){let vt=new Uint8Array(4),pt=i.createTexture();i.bindTexture(Q,pt),i.texParameteri(Q,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Q,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ft=0;Ft<Et;Ft++)Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?i.texImage3D(bt,0,i.RGBA,1,1,Nt,0,i.RGBA,i.UNSIGNED_BYTE,vt):i.texImage2D(bt+Ft,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,vt);return pt}let D={};D[i.TEXTURE_2D]=k(i.TEXTURE_2D,i.TEXTURE_2D,1),D[i.TEXTURE_CUBE_MAP]=k(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),D[i.TEXTURE_2D_ARRAY]=k(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),D[i.TEXTURE_3D]=k(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),I(i.DEPTH_TEST),o.setFunc(Vi),$(!1),J(bh),I(i.CULL_FACE),W(ri);function I(Q){f[Q]!==!0&&(i.enable(Q),f[Q]=!0)}function K(Q){f[Q]!==!1&&(i.disable(Q),f[Q]=!1)}function et(Q,bt){return p[Q]!==bt?(i.bindFramebuffer(Q,bt),p[Q]=bt,Q===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=bt),Q===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=bt),!0):!1}function Y(Q,bt){let Et=g,Nt=!1;if(Q){Et=m.get(bt),Et===void 0&&(Et=[],m.set(bt,Et));let vt=Q.textures;if(Et.length!==vt.length||Et[0]!==i.COLOR_ATTACHMENT0){for(let pt=0,Ft=vt.length;pt<Ft;pt++)Et[pt]=i.COLOR_ATTACHMENT0+pt;Et.length=vt.length,Nt=!0}}else Et[0]!==i.BACK&&(Et[0]=i.BACK,Nt=!0);Nt&&i.drawBuffers(Et)}function at(Q){return y!==Q?(i.useProgram(Q),y=Q,!0):!1}let mt={[yi]:i.FUNC_ADD,[jf]:i.FUNC_SUBTRACT,[Qf]:i.FUNC_REVERSE_SUBTRACT};mt[td]=i.MIN,mt[ed]=i.MAX;let U={[nd]:i.ZERO,[id]:i.ONE,[rd]:i.SRC_COLOR,[ea]:i.SRC_ALPHA,[hd]:i.SRC_ALPHA_SATURATE,[cd]:i.DST_COLOR,[od]:i.DST_ALPHA,[sd]:i.ONE_MINUS_SRC_COLOR,[na]:i.ONE_MINUS_SRC_ALPHA,[ld]:i.ONE_MINUS_DST_COLOR,[ad]:i.ONE_MINUS_DST_ALPHA,[ud]:i.CONSTANT_COLOR,[fd]:i.ONE_MINUS_CONSTANT_COLOR,[dd]:i.CONSTANT_ALPHA,[pd]:i.ONE_MINUS_CONSTANT_ALPHA};function W(Q,bt,Et,Nt,vt,pt,Ft,Yt,_e,re){if(Q===ri){b===!0&&(K(i.BLEND),b=!1);return}if(b===!1&&(I(i.BLEND),b=!0),Q!==Kf){if(Q!==x||re!==S){if((_!==yi||c!==yi)&&(i.blendEquation(i.FUNC_ADD),_=yi,c=yi),re)switch(Q){case ki:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wh:i.blendFunc(i.ONE,i.ONE);break;case Eh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ah:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",Q);break}else switch(Q){case ki:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wh:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Eh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ah:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",Q);break}T=null,d=null,v=null,h=null,C.set(0,0,0),A=0,x=Q,S=re}return}vt=vt||bt,pt=pt||Et,Ft=Ft||Nt,(bt!==_||vt!==c)&&(i.blendEquationSeparate(mt[bt],mt[vt]),_=bt,c=vt),(Et!==T||Nt!==d||pt!==v||Ft!==h)&&(i.blendFuncSeparate(U[Et],U[Nt],U[pt],U[Ft]),T=Et,d=Nt,v=pt,h=Ft),(Yt.equals(C)===!1||_e!==A)&&(i.blendColor(Yt.r,Yt.g,Yt.b,_e),C.copy(Yt),A=_e),x=Q,S=!1}function X(Q,bt){Q.side===Ze?K(i.CULL_FACE):I(i.CULL_FACE);let Et=Q.side===Oe;bt&&(Et=!Et),$(Et),Q.blending===ki&&Q.transparent===!1?W(ri):W(Q.blending,Q.blendEquation,Q.blendSrc,Q.blendDst,Q.blendEquationAlpha,Q.blendSrcAlpha,Q.blendDstAlpha,Q.blendColor,Q.blendAlpha,Q.premultipliedAlpha),o.setFunc(Q.depthFunc),o.setTest(Q.depthTest),o.setMask(Q.depthWrite),s.setMask(Q.colorWrite);let Nt=Q.stencilWrite;a.setTest(Nt),Nt&&(a.setMask(Q.stencilWriteMask),a.setFunc(Q.stencilFunc,Q.stencilRef,Q.stencilFuncMask),a.setOp(Q.stencilFail,Q.stencilZFail,Q.stencilZPass)),L(Q.polygonOffset,Q.polygonOffsetFactor,Q.polygonOffsetUnits),Q.alphaToCoverage===!0?I(i.SAMPLE_ALPHA_TO_COVERAGE):K(i.SAMPLE_ALPHA_TO_COVERAGE)}function $(Q){M!==Q&&(Q?i.frontFace(i.CW):i.frontFace(i.CCW),M=Q)}function J(Q){Q!==Zf?(I(i.CULL_FACE),Q!==w&&(Q===bh?i.cullFace(i.BACK):Q===$f?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):K(i.CULL_FACE),w=Q}function G(Q){Q!==E&&(H&&i.lineWidth(Q),E=Q)}function L(Q,bt,Et){Q?(I(i.POLYGON_OFFSET_FILL),(R!==bt||z!==Et)&&(i.polygonOffset(bt,Et),R=bt,z=Et)):K(i.POLYGON_OFFSET_FILL)}function it(Q){Q?I(i.SCISSOR_TEST):K(i.SCISSOR_TEST)}function gt(Q){Q===void 0&&(Q=i.TEXTURE0+V-1),st!==Q&&(i.activeTexture(Q),st=Q)}function Tt(Q,bt,Et){Et===void 0&&(st===null?Et=i.TEXTURE0+V-1:Et=st);let Nt=dt[Et];Nt===void 0&&(Nt={type:void 0,texture:void 0},dt[Et]=Nt),(Nt.type!==Q||Nt.texture!==bt)&&(st!==Et&&(i.activeTexture(Et),st=Et),i.bindTexture(Q,bt||D[Q]),Nt.type=Q,Nt.texture=bt)}function B(){let Q=dt[st];Q!==void 0&&Q.type!==void 0&&(i.bindTexture(Q.type,null),Q.type=void 0,Q.texture=void 0)}function P(){try{i.compressedTexImage2D(...arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function j(){try{i.compressedTexImage3D(...arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function rt(){try{i.texSubImage2D(...arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function ut(){try{i.texSubImage3D(...arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function ot(){try{i.compressedTexSubImage2D(...arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function St(){try{i.compressedTexSubImage3D(...arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function yt(){try{i.texStorage2D(...arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function Dt(){try{i.texStorage3D(...arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function Pt(){try{i.texImage2D(...arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function xt(){try{i.texImage3D(...arguments)}catch(Q){console.error("THREE.WebGLState:",Q)}}function Ct(Q){wt.equals(Q)===!1&&(i.scissor(Q.x,Q.y,Q.z,Q.w),wt.copy(Q))}function Ht(Q){Z.equals(Q)===!1&&(i.viewport(Q.x,Q.y,Q.z,Q.w),Z.copy(Q))}function Bt(Q,bt){let Et=l.get(bt);Et===void 0&&(Et=new WeakMap,l.set(bt,Et));let Nt=Et.get(Q);Nt===void 0&&(Nt=i.getUniformBlockIndex(bt,Q.name),Et.set(Q,Nt))}function Rt(Q,bt){let Nt=l.get(bt).get(Q);u.get(bt)!==Nt&&(i.uniformBlockBinding(bt,Nt,Q.__bindingPointIndex),u.set(bt,Nt))}function Zt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},st=null,dt={},p={},m=new WeakMap,g=[],y=null,b=!1,x=null,_=null,T=null,d=null,c=null,v=null,h=null,C=new qt(0,0,0),A=0,S=!1,M=null,w=null,E=null,R=null,z=null,wt.set(0,0,i.canvas.width,i.canvas.height),Z.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:I,disable:K,bindFramebuffer:et,drawBuffers:Y,useProgram:at,setBlending:W,setMaterial:X,setFlipSided:$,setCullFace:J,setLineWidth:G,setPolygonOffset:L,setScissorTest:it,activeTexture:gt,bindTexture:Tt,unbindTexture:B,compressedTexImage2D:P,compressedTexImage3D:j,texImage2D:Pt,texImage3D:xt,updateUBOMapping:Bt,uniformBlockBinding:Rt,texStorage2D:yt,texStorage3D:Dt,texSubImage2D:rt,texSubImage3D:ut,compressedTexSubImage2D:ot,compressedTexSubImage3D:St,scissor:Ct,viewport:Ht,reset:Zt}}function Qv(i,t,e,n,r,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ht,f=new WeakMap,p,m=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(B,P){return g?new OffscreenCanvas(B,P):Ps("canvas")}function b(B,P,j){let rt=1,ut=Tt(B);if((ut.width>j||ut.height>j)&&(rt=j/Math.max(ut.width,ut.height)),rt<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){let ot=Math.floor(rt*ut.width),St=Math.floor(rt*ut.height);p===void 0&&(p=y(ot,St));let yt=P?y(ot,St):p;return yt.width=ot,yt.height=St,yt.getContext("2d").drawImage(B,0,0,ot,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ut.width+"x"+ut.height+") to ("+ot+"x"+St+")."),yt}else return"data"in B&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ut.width+"x"+ut.height+")."),B;return B}function x(B){return B.generateMipmaps}function _(B){i.generateMipmap(B)}function T(B){return B.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?i.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function d(B,P,j,rt,ut=!1){if(B!==null){if(i[B]!==void 0)return i[B];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let ot=P;if(P===i.RED&&(j===i.FLOAT&&(ot=i.R32F),j===i.HALF_FLOAT&&(ot=i.R16F),j===i.UNSIGNED_BYTE&&(ot=i.R8)),P===i.RED_INTEGER&&(j===i.UNSIGNED_BYTE&&(ot=i.R8UI),j===i.UNSIGNED_SHORT&&(ot=i.R16UI),j===i.UNSIGNED_INT&&(ot=i.R32UI),j===i.BYTE&&(ot=i.R8I),j===i.SHORT&&(ot=i.R16I),j===i.INT&&(ot=i.R32I)),P===i.RG&&(j===i.FLOAT&&(ot=i.RG32F),j===i.HALF_FLOAT&&(ot=i.RG16F),j===i.UNSIGNED_BYTE&&(ot=i.RG8)),P===i.RG_INTEGER&&(j===i.UNSIGNED_BYTE&&(ot=i.RG8UI),j===i.UNSIGNED_SHORT&&(ot=i.RG16UI),j===i.UNSIGNED_INT&&(ot=i.RG32UI),j===i.BYTE&&(ot=i.RG8I),j===i.SHORT&&(ot=i.RG16I),j===i.INT&&(ot=i.RG32I)),P===i.RGB_INTEGER&&(j===i.UNSIGNED_BYTE&&(ot=i.RGB8UI),j===i.UNSIGNED_SHORT&&(ot=i.RGB16UI),j===i.UNSIGNED_INT&&(ot=i.RGB32UI),j===i.BYTE&&(ot=i.RGB8I),j===i.SHORT&&(ot=i.RGB16I),j===i.INT&&(ot=i.RGB32I)),P===i.RGBA_INTEGER&&(j===i.UNSIGNED_BYTE&&(ot=i.RGBA8UI),j===i.UNSIGNED_SHORT&&(ot=i.RGBA16UI),j===i.UNSIGNED_INT&&(ot=i.RGBA32UI),j===i.BYTE&&(ot=i.RGBA8I),j===i.SHORT&&(ot=i.RGBA16I),j===i.INT&&(ot=i.RGBA32I)),P===i.RGB&&(j===i.UNSIGNED_INT_5_9_9_9_REV&&(ot=i.RGB9_E5),j===i.UNSIGNED_INT_10F_11F_11F_REV&&(ot=i.R11F_G11F_B10F)),P===i.RGBA){let St=ut?Rs:Qt.getTransfer(rt);j===i.FLOAT&&(ot=i.RGBA32F),j===i.HALF_FLOAT&&(ot=i.RGBA16F),j===i.UNSIGNED_BYTE&&(ot=St===ae?i.SRGB8_ALPHA8:i.RGBA8),j===i.UNSIGNED_SHORT_4_4_4_4&&(ot=i.RGBA4),j===i.UNSIGNED_SHORT_5_5_5_1&&(ot=i.RGB5_A1)}return(ot===i.R16F||ot===i.R32F||ot===i.RG16F||ot===i.RG32F||ot===i.RGBA16F||ot===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function c(B,P){let j;return B?P===null||P===wi||P===Wr?j=i.DEPTH24_STENCIL8:P===Xn?j=i.DEPTH32F_STENCIL8:P===Hr&&(j=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):P===null||P===wi||P===Wr?j=i.DEPTH_COMPONENT24:P===Xn?j=i.DEPTH_COMPONENT32F:P===Hr&&(j=i.DEPTH_COMPONENT16),j}function v(B,P){return x(B)===!0||B.isFramebufferTexture&&B.minFilter!==yn&&B.minFilter!==Rn?Math.log2(Math.max(P.width,P.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?P.mipmaps.length:1}function h(B){let P=B.target;P.removeEventListener("dispose",h),A(P),P.isVideoTexture&&f.delete(P)}function C(B){let P=B.target;P.removeEventListener("dispose",C),M(P)}function A(B){let P=n.get(B);if(P.__webglInit===void 0)return;let j=B.source,rt=m.get(j);if(rt){let ut=rt[P.__cacheKey];ut.usedTimes--,ut.usedTimes===0&&S(B),Object.keys(rt).length===0&&m.delete(j)}n.remove(B)}function S(B){let P=n.get(B);i.deleteTexture(P.__webglTexture);let j=B.source,rt=m.get(j);delete rt[P.__cacheKey],o.memory.textures--}function M(B){let P=n.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),n.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(P.__webglFramebuffer[rt]))for(let ut=0;ut<P.__webglFramebuffer[rt].length;ut++)i.deleteFramebuffer(P.__webglFramebuffer[rt][ut]);else i.deleteFramebuffer(P.__webglFramebuffer[rt]);P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer[rt])}else{if(Array.isArray(P.__webglFramebuffer))for(let rt=0;rt<P.__webglFramebuffer.length;rt++)i.deleteFramebuffer(P.__webglFramebuffer[rt]);else i.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&i.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let rt=0;rt<P.__webglColorRenderbuffer.length;rt++)P.__webglColorRenderbuffer[rt]&&i.deleteRenderbuffer(P.__webglColorRenderbuffer[rt]);P.__webglDepthRenderbuffer&&i.deleteRenderbuffer(P.__webglDepthRenderbuffer)}let j=B.textures;for(let rt=0,ut=j.length;rt<ut;rt++){let ot=n.get(j[rt]);ot.__webglTexture&&(i.deleteTexture(ot.__webglTexture),o.memory.textures--),n.remove(j[rt])}n.remove(B)}let w=0;function E(){w=0}function R(){let B=w;return B>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+r.maxTextures),w+=1,B}function z(B){let P=[];return P.push(B.wrapS),P.push(B.wrapT),P.push(B.wrapR||0),P.push(B.magFilter),P.push(B.minFilter),P.push(B.anisotropy),P.push(B.internalFormat),P.push(B.format),P.push(B.type),P.push(B.generateMipmaps),P.push(B.premultiplyAlpha),P.push(B.flipY),P.push(B.unpackAlignment),P.push(B.colorSpace),P.join()}function V(B,P){let j=n.get(B);if(B.isVideoTexture&&it(B),B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&j.__version!==B.version){let rt=B.image;if(rt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{D(j,B,P);return}}else B.isExternalTexture&&(j.__webglTexture=B.sourceTexture?B.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,j.__webglTexture,i.TEXTURE0+P)}function H(B,P){let j=n.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&j.__version!==B.version){D(j,B,P);return}e.bindTexture(i.TEXTURE_2D_ARRAY,j.__webglTexture,i.TEXTURE0+P)}function q(B,P){let j=n.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&j.__version!==B.version){D(j,B,P);return}e.bindTexture(i.TEXTURE_3D,j.__webglTexture,i.TEXTURE0+P)}function O(B,P){let j=n.get(B);if(B.version>0&&j.__version!==B.version){I(j,B,P);return}e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture,i.TEXTURE0+P)}let st={[ia]:i.REPEAT,[_i]:i.CLAMP_TO_EDGE,[ra]:i.MIRRORED_REPEAT},dt={[yn]:i.NEAREST,[Td]:i.NEAREST_MIPMAP_NEAREST,[js]:i.NEAREST_MIPMAP_LINEAR,[Rn]:i.LINEAR,[ec]:i.LINEAR_MIPMAP_NEAREST,[Ti]:i.LINEAR_MIPMAP_LINEAR},ft={[Cd]:i.NEVER,[Nd]:i.ALWAYS,[Rd]:i.LESS,[Bh]:i.LEQUAL,[Id]:i.EQUAL,[Ld]:i.GEQUAL,[Pd]:i.GREATER,[Dd]:i.NOTEQUAL};function _t(B,P){if(P.type===Xn&&t.has("OES_texture_float_linear")===!1&&(P.magFilter===Rn||P.magFilter===ec||P.magFilter===js||P.magFilter===Ti||P.minFilter===Rn||P.minFilter===ec||P.minFilter===js||P.minFilter===Ti)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(B,i.TEXTURE_WRAP_S,st[P.wrapS]),i.texParameteri(B,i.TEXTURE_WRAP_T,st[P.wrapT]),(B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY)&&i.texParameteri(B,i.TEXTURE_WRAP_R,st[P.wrapR]),i.texParameteri(B,i.TEXTURE_MAG_FILTER,dt[P.magFilter]),i.texParameteri(B,i.TEXTURE_MIN_FILTER,dt[P.minFilter]),P.compareFunction&&(i.texParameteri(B,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(B,i.TEXTURE_COMPARE_FUNC,ft[P.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(P.magFilter===yn||P.minFilter!==js&&P.minFilter!==Ti||P.type===Xn&&t.has("OES_texture_float_linear")===!1)return;if(P.anisotropy>1||n.get(P).__currentAnisotropy){let j=t.get("EXT_texture_filter_anisotropic");i.texParameterf(B,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,r.getMaxAnisotropy())),n.get(P).__currentAnisotropy=P.anisotropy}}}function wt(B,P){let j=!1;B.__webglInit===void 0&&(B.__webglInit=!0,P.addEventListener("dispose",h));let rt=P.source,ut=m.get(rt);ut===void 0&&(ut={},m.set(rt,ut));let ot=z(P);if(ot!==B.__cacheKey){ut[ot]===void 0&&(ut[ot]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,j=!0),ut[ot].usedTimes++;let St=ut[B.__cacheKey];St!==void 0&&(ut[B.__cacheKey].usedTimes--,St.usedTimes===0&&S(P)),B.__cacheKey=ot,B.__webglTexture=ut[ot].texture}return j}function Z(B,P,j){return Math.floor(Math.floor(B/j)/P)}function k(B,P,j,rt){let ot=B.updateRanges;if(ot.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,P.width,P.height,j,rt,P.data);else{ot.sort((xt,Ct)=>xt.start-Ct.start);let St=0;for(let xt=1;xt<ot.length;xt++){let Ct=ot[St],Ht=ot[xt],Bt=Ct.start+Ct.count,Rt=Z(Ht.start,P.width,4),Zt=Z(Ct.start,P.width,4);Ht.start<=Bt+1&&Rt===Zt&&Z(Ht.start+Ht.count-1,P.width,4)===Rt?Ct.count=Math.max(Ct.count,Ht.start+Ht.count-Ct.start):(++St,ot[St]=Ht)}ot.length=St+1;let yt=i.getParameter(i.UNPACK_ROW_LENGTH),Dt=i.getParameter(i.UNPACK_SKIP_PIXELS),Pt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,P.width);for(let xt=0,Ct=ot.length;xt<Ct;xt++){let Ht=ot[xt],Bt=Math.floor(Ht.start/4),Rt=Math.ceil(Ht.count/4),Zt=Bt%P.width,Q=Math.floor(Bt/P.width),bt=Rt,Et=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Zt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Q),e.texSubImage2D(i.TEXTURE_2D,0,Zt,Q,bt,Et,j,rt,P.data)}B.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,yt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Dt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Pt)}}function D(B,P,j){let rt=i.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(rt=i.TEXTURE_2D_ARRAY),P.isData3DTexture&&(rt=i.TEXTURE_3D);let ut=wt(B,P),ot=P.source;e.bindTexture(rt,B.__webglTexture,i.TEXTURE0+j);let St=n.get(ot);if(ot.version!==St.__version||ut===!0){e.activeTexture(i.TEXTURE0+j);let yt=Qt.getPrimaries(Qt.workingColorSpace),Dt=P.colorSpace===oi?null:Qt.getPrimaries(P.colorSpace),Pt=P.colorSpace===oi||yt===Dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);let xt=b(P.image,!1,r.maxTextureSize);xt=gt(P,xt);let Ct=s.convert(P.format,P.colorSpace),Ht=s.convert(P.type),Bt=d(P.internalFormat,Ct,Ht,P.colorSpace,P.isVideoTexture);_t(rt,P);let Rt,Zt=P.mipmaps,Q=P.isVideoTexture!==!0,bt=St.__version===void 0||ut===!0,Et=ot.dataReady,Nt=v(P,xt);if(P.isDepthTexture)Bt=c(P.format===Xr,P.type),bt&&(Q?e.texStorage2D(i.TEXTURE_2D,1,Bt,xt.width,xt.height):e.texImage2D(i.TEXTURE_2D,0,Bt,xt.width,xt.height,0,Ct,Ht,null));else if(P.isDataTexture)if(Zt.length>0){Q&&bt&&e.texStorage2D(i.TEXTURE_2D,Nt,Bt,Zt[0].width,Zt[0].height);for(let vt=0,pt=Zt.length;vt<pt;vt++)Rt=Zt[vt],Q?Et&&e.texSubImage2D(i.TEXTURE_2D,vt,0,0,Rt.width,Rt.height,Ct,Ht,Rt.data):e.texImage2D(i.TEXTURE_2D,vt,Bt,Rt.width,Rt.height,0,Ct,Ht,Rt.data);P.generateMipmaps=!1}else Q?(bt&&e.texStorage2D(i.TEXTURE_2D,Nt,Bt,xt.width,xt.height),Et&&k(P,xt,Ct,Ht)):e.texImage2D(i.TEXTURE_2D,0,Bt,xt.width,xt.height,0,Ct,Ht,xt.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){Q&&bt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Nt,Bt,Zt[0].width,Zt[0].height,xt.depth);for(let vt=0,pt=Zt.length;vt<pt;vt++)if(Rt=Zt[vt],P.format!==vn)if(Ct!==null)if(Q){if(Et)if(P.layerUpdates.size>0){let Ft=Xh(Rt.width,Rt.height,P.format,P.type);for(let Yt of P.layerUpdates){let _e=Rt.data.subarray(Yt*Ft/Rt.data.BYTES_PER_ELEMENT,(Yt+1)*Ft/Rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,vt,0,0,Yt,Rt.width,Rt.height,1,Ct,_e)}P.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,vt,0,0,0,Rt.width,Rt.height,xt.depth,Ct,Rt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,vt,Bt,Rt.width,Rt.height,xt.depth,0,Rt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Q?Et&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,vt,0,0,0,Rt.width,Rt.height,xt.depth,Ct,Ht,Rt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,vt,Bt,Rt.width,Rt.height,xt.depth,0,Ct,Ht,Rt.data)}else{Q&&bt&&e.texStorage2D(i.TEXTURE_2D,Nt,Bt,Zt[0].width,Zt[0].height);for(let vt=0,pt=Zt.length;vt<pt;vt++)Rt=Zt[vt],P.format!==vn?Ct!==null?Q?Et&&e.compressedTexSubImage2D(i.TEXTURE_2D,vt,0,0,Rt.width,Rt.height,Ct,Rt.data):e.compressedTexImage2D(i.TEXTURE_2D,vt,Bt,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Q?Et&&e.texSubImage2D(i.TEXTURE_2D,vt,0,0,Rt.width,Rt.height,Ct,Ht,Rt.data):e.texImage2D(i.TEXTURE_2D,vt,Bt,Rt.width,Rt.height,0,Ct,Ht,Rt.data)}else if(P.isDataArrayTexture)if(Q){if(bt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Nt,Bt,xt.width,xt.height,xt.depth),Et)if(P.layerUpdates.size>0){let vt=Xh(xt.width,xt.height,P.format,P.type);for(let pt of P.layerUpdates){let Ft=xt.data.subarray(pt*vt/xt.data.BYTES_PER_ELEMENT,(pt+1)*vt/xt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,pt,xt.width,xt.height,1,Ct,Ht,Ft)}P.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,xt.width,xt.height,xt.depth,Ct,Ht,xt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Bt,xt.width,xt.height,xt.depth,0,Ct,Ht,xt.data);else if(P.isData3DTexture)Q?(bt&&e.texStorage3D(i.TEXTURE_3D,Nt,Bt,xt.width,xt.height,xt.depth),Et&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,xt.width,xt.height,xt.depth,Ct,Ht,xt.data)):e.texImage3D(i.TEXTURE_3D,0,Bt,xt.width,xt.height,xt.depth,0,Ct,Ht,xt.data);else if(P.isFramebufferTexture){if(bt)if(Q)e.texStorage2D(i.TEXTURE_2D,Nt,Bt,xt.width,xt.height);else{let vt=xt.width,pt=xt.height;for(let Ft=0;Ft<Nt;Ft++)e.texImage2D(i.TEXTURE_2D,Ft,Bt,vt,pt,0,Ct,Ht,null),vt>>=1,pt>>=1}}else if(Zt.length>0){if(Q&&bt){let vt=Tt(Zt[0]);e.texStorage2D(i.TEXTURE_2D,Nt,Bt,vt.width,vt.height)}for(let vt=0,pt=Zt.length;vt<pt;vt++)Rt=Zt[vt],Q?Et&&e.texSubImage2D(i.TEXTURE_2D,vt,0,0,Ct,Ht,Rt):e.texImage2D(i.TEXTURE_2D,vt,Bt,Ct,Ht,Rt);P.generateMipmaps=!1}else if(Q){if(bt){let vt=Tt(xt);e.texStorage2D(i.TEXTURE_2D,Nt,Bt,vt.width,vt.height)}Et&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ct,Ht,xt)}else e.texImage2D(i.TEXTURE_2D,0,Bt,Ct,Ht,xt);x(P)&&_(rt),St.__version=ot.version,P.onUpdate&&P.onUpdate(P)}B.__version=P.version}function I(B,P,j){if(P.image.length!==6)return;let rt=wt(B,P),ut=P.source;e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+j);let ot=n.get(ut);if(ut.version!==ot.__version||rt===!0){e.activeTexture(i.TEXTURE0+j);let St=Qt.getPrimaries(Qt.workingColorSpace),yt=P.colorSpace===oi?null:Qt.getPrimaries(P.colorSpace),Dt=P.colorSpace===oi||St===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);let Pt=P.isCompressedTexture||P.image[0].isCompressedTexture,xt=P.image[0]&&P.image[0].isDataTexture,Ct=[];for(let pt=0;pt<6;pt++)!Pt&&!xt?Ct[pt]=b(P.image[pt],!0,r.maxCubemapSize):Ct[pt]=xt?P.image[pt].image:P.image[pt],Ct[pt]=gt(P,Ct[pt]);let Ht=Ct[0],Bt=s.convert(P.format,P.colorSpace),Rt=s.convert(P.type),Zt=d(P.internalFormat,Bt,Rt,P.colorSpace),Q=P.isVideoTexture!==!0,bt=ot.__version===void 0||rt===!0,Et=ut.dataReady,Nt=v(P,Ht);_t(i.TEXTURE_CUBE_MAP,P);let vt;if(Pt){Q&&bt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Nt,Zt,Ht.width,Ht.height);for(let pt=0;pt<6;pt++){vt=Ct[pt].mipmaps;for(let Ft=0;Ft<vt.length;Ft++){let Yt=vt[Ft];P.format!==vn?Bt!==null?Q?Et&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Ft,0,0,Yt.width,Yt.height,Bt,Yt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Ft,Zt,Yt.width,Yt.height,0,Yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Q?Et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Ft,0,0,Yt.width,Yt.height,Bt,Rt,Yt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Ft,Zt,Yt.width,Yt.height,0,Bt,Rt,Yt.data)}}}else{if(vt=P.mipmaps,Q&&bt){vt.length>0&&Nt++;let pt=Tt(Ct[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Nt,Zt,pt.width,pt.height)}for(let pt=0;pt<6;pt++)if(xt){Q?Et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,Ct[pt].width,Ct[pt].height,Bt,Rt,Ct[pt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,Zt,Ct[pt].width,Ct[pt].height,0,Bt,Rt,Ct[pt].data);for(let Ft=0;Ft<vt.length;Ft++){let _e=vt[Ft].image[pt].image;Q?Et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Ft+1,0,0,_e.width,_e.height,Bt,Rt,_e.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Ft+1,Zt,_e.width,_e.height,0,Bt,Rt,_e.data)}}else{Q?Et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,Bt,Rt,Ct[pt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,Zt,Bt,Rt,Ct[pt]);for(let Ft=0;Ft<vt.length;Ft++){let Yt=vt[Ft];Q?Et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Ft+1,0,0,Bt,Rt,Yt.image[pt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Ft+1,Zt,Bt,Rt,Yt.image[pt])}}}x(P)&&_(i.TEXTURE_CUBE_MAP),ot.__version=ut.version,P.onUpdate&&P.onUpdate(P)}B.__version=P.version}function K(B,P,j,rt,ut,ot){let St=s.convert(j.format,j.colorSpace),yt=s.convert(j.type),Dt=d(j.internalFormat,St,yt,j.colorSpace),Pt=n.get(P),xt=n.get(j);if(xt.__renderTarget=P,!Pt.__hasExternalTextures){let Ct=Math.max(1,P.width>>ot),Ht=Math.max(1,P.height>>ot);ut===i.TEXTURE_3D||ut===i.TEXTURE_2D_ARRAY?e.texImage3D(ut,ot,Dt,Ct,Ht,P.depth,0,St,yt,null):e.texImage2D(ut,ot,Dt,Ct,Ht,0,St,yt,null)}e.bindFramebuffer(i.FRAMEBUFFER,B),L(P)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,ut,xt.__webglTexture,0,G(P)):(ut===i.TEXTURE_2D||ut>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ut<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,rt,ut,xt.__webglTexture,ot),e.bindFramebuffer(i.FRAMEBUFFER,null)}function et(B,P,j){if(i.bindRenderbuffer(i.RENDERBUFFER,B),P.depthBuffer){let rt=P.depthTexture,ut=rt&&rt.isDepthTexture?rt.type:null,ot=c(P.stencilBuffer,ut),St=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=G(P);L(P)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,yt,ot,P.width,P.height):j?i.renderbufferStorageMultisample(i.RENDERBUFFER,yt,ot,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,ot,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,St,i.RENDERBUFFER,B)}else{let rt=P.textures;for(let ut=0;ut<rt.length;ut++){let ot=rt[ut],St=s.convert(ot.format,ot.colorSpace),yt=s.convert(ot.type),Dt=d(ot.internalFormat,St,yt,ot.colorSpace),Pt=G(P);j&&L(P)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Pt,Dt,P.width,P.height):L(P)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Pt,Dt,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,Dt,P.width,P.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Y(B,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,B),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let rt=n.get(P.depthTexture);rt.__renderTarget=P,(!rt.__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),V(P.depthTexture,0);let ut=rt.__webglTexture,ot=G(P);if(P.depthTexture.format===Er)L(P)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ut,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ut,0);else if(P.depthTexture.format===Xr)L(P)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ut,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ut,0);else throw new Error("Unknown depthTexture format")}function at(B){let P=n.get(B),j=B.isWebGLCubeRenderTarget===!0;if(P.__boundDepthTexture!==B.depthTexture){let rt=B.depthTexture;if(P.__depthDisposeCallback&&P.__depthDisposeCallback(),rt){let ut=()=>{delete P.__boundDepthTexture,delete P.__depthDisposeCallback,rt.removeEventListener("dispose",ut)};rt.addEventListener("dispose",ut),P.__depthDisposeCallback=ut}P.__boundDepthTexture=rt}if(B.depthTexture&&!P.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");let rt=B.texture.mipmaps;rt&&rt.length>0?Y(P.__webglFramebuffer[0],B):Y(P.__webglFramebuffer,B)}else if(j){P.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(e.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer[rt]),P.__webglDepthbuffer[rt]===void 0)P.__webglDepthbuffer[rt]=i.createRenderbuffer(),et(P.__webglDepthbuffer[rt],B,!1);else{let ut=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=P.__webglDepthbuffer[rt];i.bindRenderbuffer(i.RENDERBUFFER,ot),i.framebufferRenderbuffer(i.FRAMEBUFFER,ut,i.RENDERBUFFER,ot)}}else{let rt=B.texture.mipmaps;if(rt&&rt.length>0?e.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer===void 0)P.__webglDepthbuffer=i.createRenderbuffer(),et(P.__webglDepthbuffer,B,!1);else{let ut=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=P.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ot),i.framebufferRenderbuffer(i.FRAMEBUFFER,ut,i.RENDERBUFFER,ot)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function mt(B,P,j){let rt=n.get(B);P!==void 0&&K(rt.__webglFramebuffer,B,B.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),j!==void 0&&at(B)}function U(B){let P=B.texture,j=n.get(B),rt=n.get(P);B.addEventListener("dispose",C);let ut=B.textures,ot=B.isWebGLCubeRenderTarget===!0,St=ut.length>1;if(St||(rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture()),rt.__version=P.version,o.memory.textures++),ot){j.__webglFramebuffer=[];for(let yt=0;yt<6;yt++)if(P.mipmaps&&P.mipmaps.length>0){j.__webglFramebuffer[yt]=[];for(let Dt=0;Dt<P.mipmaps.length;Dt++)j.__webglFramebuffer[yt][Dt]=i.createFramebuffer()}else j.__webglFramebuffer[yt]=i.createFramebuffer()}else{if(P.mipmaps&&P.mipmaps.length>0){j.__webglFramebuffer=[];for(let yt=0;yt<P.mipmaps.length;yt++)j.__webglFramebuffer[yt]=i.createFramebuffer()}else j.__webglFramebuffer=i.createFramebuffer();if(St)for(let yt=0,Dt=ut.length;yt<Dt;yt++){let Pt=n.get(ut[yt]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=i.createTexture(),o.memory.textures++)}if(B.samples>0&&L(B)===!1){j.__webglMultisampledFramebuffer=i.createFramebuffer(),j.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let yt=0;yt<ut.length;yt++){let Dt=ut[yt];j.__webglColorRenderbuffer[yt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,j.__webglColorRenderbuffer[yt]);let Pt=s.convert(Dt.format,Dt.colorSpace),xt=s.convert(Dt.type),Ct=d(Dt.internalFormat,Pt,xt,Dt.colorSpace,B.isXRRenderTarget===!0),Ht=G(B);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ht,Ct,B.width,B.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,j.__webglColorRenderbuffer[yt])}i.bindRenderbuffer(i.RENDERBUFFER,null),B.depthBuffer&&(j.__webglDepthRenderbuffer=i.createRenderbuffer(),et(j.__webglDepthRenderbuffer,B,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ot){e.bindTexture(i.TEXTURE_CUBE_MAP,rt.__webglTexture),_t(i.TEXTURE_CUBE_MAP,P);for(let yt=0;yt<6;yt++)if(P.mipmaps&&P.mipmaps.length>0)for(let Dt=0;Dt<P.mipmaps.length;Dt++)K(j.__webglFramebuffer[yt][Dt],B,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Dt);else K(j.__webglFramebuffer[yt],B,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0);x(P)&&_(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let yt=0,Dt=ut.length;yt<Dt;yt++){let Pt=ut[yt],xt=n.get(Pt),Ct=i.TEXTURE_2D;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Ct=B.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Ct,xt.__webglTexture),_t(Ct,Pt),K(j.__webglFramebuffer,B,Pt,i.COLOR_ATTACHMENT0+yt,Ct,0),x(Pt)&&_(Ct)}e.unbindTexture()}else{let yt=i.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(yt=B.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(yt,rt.__webglTexture),_t(yt,P),P.mipmaps&&P.mipmaps.length>0)for(let Dt=0;Dt<P.mipmaps.length;Dt++)K(j.__webglFramebuffer[Dt],B,P,i.COLOR_ATTACHMENT0,yt,Dt);else K(j.__webglFramebuffer,B,P,i.COLOR_ATTACHMENT0,yt,0);x(P)&&_(yt),e.unbindTexture()}B.depthBuffer&&at(B)}function W(B){let P=B.textures;for(let j=0,rt=P.length;j<rt;j++){let ut=P[j];if(x(ut)){let ot=T(B),St=n.get(ut).__webglTexture;e.bindTexture(ot,St),_(ot),e.unbindTexture()}}}let X=[],$=[];function J(B){if(B.samples>0){if(L(B)===!1){let P=B.textures,j=B.width,rt=B.height,ut=i.COLOR_BUFFER_BIT,ot=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=n.get(B),yt=P.length>1;if(yt)for(let Pt=0;Pt<P.length;Pt++)e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer);let Dt=B.texture.mipmaps;Dt&&Dt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let Pt=0;Pt<P.length;Pt++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(ut|=i.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(ut|=i.STENCIL_BUFFER_BIT)),yt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,St.__webglColorRenderbuffer[Pt]);let xt=n.get(P[Pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,xt,0)}i.blitFramebuffer(0,0,j,rt,0,0,j,rt,ut,i.NEAREST),u===!0&&(X.length=0,$.length=0,X.push(i.COLOR_ATTACHMENT0+Pt),B.depthBuffer&&B.resolveDepthBuffer===!1&&(X.push(ot),$.push(ot),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,$)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,X))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),yt)for(let Pt=0;Pt<P.length;Pt++){e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,St.__webglColorRenderbuffer[Pt]);let xt=n.get(P[Pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,xt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.resolveDepthBuffer===!1&&u){let P=B.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[P])}}}function G(B){return Math.min(r.maxSamples,B.samples)}function L(B){let P=n.get(B);return B.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function it(B){let P=o.render.frame;f.get(B)!==P&&(f.set(B,P),B.update())}function gt(B,P){let j=B.colorSpace,rt=B.format,ut=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||j!==Hi&&j!==oi&&(Qt.getTransfer(j)===ae?(rt!==vn||ut!==Ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),P}function Tt(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(l.width=B.naturalWidth||B.width,l.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(l.width=B.displayWidth,l.height=B.displayHeight):(l.width=B.width,l.height=B.height),l}this.allocateTextureUnit=R,this.resetTextureUnits=E,this.setTexture2D=V,this.setTexture2DArray=H,this.setTexture3D=q,this.setTextureCube=O,this.rebindTextures=mt,this.setupRenderTarget=U,this.updateRenderTargetMipmap=W,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=at,this.setupFrameBufferTexture=K,this.useMultisampledRTT=L}function tM(i,t){function e(n,r=oi){let s,o=Qt.getTransfer(r);if(n===Ln)return i.UNSIGNED_BYTE;if(n===ic)return i.UNSIGNED_SHORT_4_4_4_4;if(n===rc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ph)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Dh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Rh)return i.BYTE;if(n===Ih)return i.SHORT;if(n===Hr)return i.UNSIGNED_SHORT;if(n===nc)return i.INT;if(n===wi)return i.UNSIGNED_INT;if(n===Xn)return i.FLOAT;if(n===Gr)return i.HALF_FLOAT;if(n===Lh)return i.ALPHA;if(n===Nh)return i.RGB;if(n===vn)return i.RGBA;if(n===Er)return i.DEPTH_COMPONENT;if(n===Xr)return i.DEPTH_STENCIL;if(n===Uh)return i.RED;if(n===sc)return i.RED_INTEGER;if(n===Fh)return i.RG;if(n===oc)return i.RG_INTEGER;if(n===ac)return i.RGBA_INTEGER;if(n===Qs||n===to||n===eo||n===no)if(o===ae)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Qs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===to)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===eo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===no)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Qs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===to)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===eo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===no)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===cc||n===lc||n===hc||n===uc)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===cc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===lc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===hc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===uc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===fc||n===dc||n===pc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===fc||n===dc)return o===ae?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===pc)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===mc||n===gc||n===_c||n===xc||n===yc||n===vc||n===Mc||n===Sc||n===bc||n===Tc||n===wc||n===Ec||n===Ac||n===Cc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===mc)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===gc)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_c)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===xc)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===yc)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===vc)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Mc)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Sc)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===bc)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Tc)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===wc)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ec)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ac)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Cc)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Rc||n===Ic||n===Pc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Rc)return o===ae?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ic)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Pc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Dc||n===Lc||n===Nc||n===Uc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Dc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Lc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Nc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Uc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Wr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var eM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,ru=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new zs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new In({vertexShader:eM,fragmentShader:nM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ye(new Or(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},su=class extends Vn{constructor(t,e){super();let n=this,r=null,s=1,o=null,a="local-floor",u=1,l=null,f=null,p=null,m=null,g=null,y=null,b=typeof XRWebGLBinding<"u",x=new ru,_={},T=e.getContextAttributes(),d=null,c=null,v=[],h=[],C=new ht,A=null,S=new Xe;S.viewport=new se;let M=new Xe;M.viewport=new se;let w=[S,M],E=new Ga,R=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let I=v[D];return I===void 0&&(I=new Dr,v[D]=I),I.getTargetRaySpace()},this.getControllerGrip=function(D){let I=v[D];return I===void 0&&(I=new Dr,v[D]=I),I.getGripSpace()},this.getHand=function(D){let I=v[D];return I===void 0&&(I=new Dr,v[D]=I),I.getHandSpace()};function V(D){let I=h.indexOf(D.inputSource);if(I===-1)return;let K=v[I];K!==void 0&&(K.update(D.inputSource,D.frame,l||o),K.dispatchEvent({type:D.type,data:D.inputSource}))}function H(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",q);for(let D=0;D<v.length;D++){let I=h[D];I!==null&&(h[D]=null,v[D].disconnect(I))}R=null,z=null,x.reset();for(let D in _)delete _[D];t.setRenderTarget(d),g=null,m=null,p=null,r=null,c=null,k.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){s=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){a=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(D){l=D},this.getBaseLayer=function(){return m!==null?m:g},this.getBinding=function(){return p===null&&b&&(p=new XRWebGLBinding(r,e)),p},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(D){if(r=D,r!==null){if(d=t.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",H),r.addEventListener("inputsourceschange",q),T.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(C),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let K=null,et=null,Y=null;T.depth&&(Y=T.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,K=T.stencil?Xr:Er,et=T.stencil?Wr:wi);let at={colorFormat:e.RGBA8,depthFormat:Y,scaleFactor:s};p=this.getBinding(),m=p.createProjectionLayer(at),r.updateRenderState({layers:[m]}),t.setPixelRatio(1),t.setSize(m.textureWidth,m.textureHeight,!1),c=new Hn(m.textureWidth,m.textureHeight,{format:vn,type:Ln,depthTexture:new Os(m.textureWidth,m.textureHeight,et,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{let K={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,e,K),r.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),c=new Hn(g.framebufferWidth,g.framebufferHeight,{format:vn,type:Ln,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}c.isXRRenderTarget=!0,this.setFoveation(u),l=null,o=await r.requestReferenceSpace(a),k.setContext(r),k.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function q(D){for(let I=0;I<D.removed.length;I++){let K=D.removed[I],et=h.indexOf(K);et>=0&&(h[et]=null,v[et].disconnect(K))}for(let I=0;I<D.added.length;I++){let K=D.added[I],et=h.indexOf(K);if(et===-1){for(let at=0;at<v.length;at++)if(at>=h.length){h.push(K),et=at;break}else if(h[at]===null){h[at]=K,et=at;break}if(et===-1)break}let Y=v[et];Y&&Y.connect(K)}}let O=new F,st=new F;function dt(D,I,K){O.setFromMatrixPosition(I.matrixWorld),st.setFromMatrixPosition(K.matrixWorld);let et=O.distanceTo(st),Y=I.projectionMatrix.elements,at=K.projectionMatrix.elements,mt=Y[14]/(Y[10]-1),U=Y[14]/(Y[10]+1),W=(Y[9]+1)/Y[5],X=(Y[9]-1)/Y[5],$=(Y[8]-1)/Y[0],J=(at[8]+1)/at[0],G=mt*$,L=mt*J,it=et/(-$+J),gt=it*-$;if(I.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(gt),D.translateZ(it),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert(),Y[10]===-1)D.projectionMatrix.copy(I.projectionMatrix),D.projectionMatrixInverse.copy(I.projectionMatrixInverse);else{let Tt=mt+it,B=U+it,P=G-gt,j=L+(et-gt),rt=W*U/B*Tt,ut=X*U/B*Tt;D.projectionMatrix.makePerspective(P,j,rt,ut,Tt,B),D.projectionMatrixInverse.copy(D.projectionMatrix).invert()}}function ft(D,I){I===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(I.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(r===null)return;let I=D.near,K=D.far;x.texture!==null&&(x.depthNear>0&&(I=x.depthNear),x.depthFar>0&&(K=x.depthFar)),E.near=M.near=S.near=I,E.far=M.far=S.far=K,(R!==E.near||z!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),R=E.near,z=E.far),E.layers.mask=D.layers.mask|6,S.layers.mask=E.layers.mask&3,M.layers.mask=E.layers.mask&5;let et=D.parent,Y=E.cameras;ft(E,et);for(let at=0;at<Y.length;at++)ft(Y[at],et);Y.length===2?dt(E,S,M):E.projectionMatrix.copy(S.projectionMatrix),_t(D,E,et)};function _t(D,I,K){K===null?D.matrix.copy(I.matrixWorld):(D.matrix.copy(K.matrixWorld),D.matrix.invert(),D.matrix.multiply(I.matrixWorld)),D.matrix.decompose(D.position,D.quaternion,D.scale),D.updateMatrixWorld(!0),D.projectionMatrix.copy(I.projectionMatrix),D.projectionMatrixInverse.copy(I.projectionMatrixInverse),D.isPerspectiveCamera&&(D.fov=Ar*2*Math.atan(1/D.projectionMatrix.elements[5]),D.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(m===null&&g===null))return u},this.setFoveation=function(D){u=D,m!==null&&(m.fixedFoveation=D),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=D)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(E)},this.getCameraTexture=function(D){return _[D]};let wt=null;function Z(D,I){if(f=I.getViewerPose(l||o),y=I,f!==null){let K=f.views;g!==null&&(t.setRenderTargetFramebuffer(c,g.framebuffer),t.setRenderTarget(c));let et=!1;K.length!==E.cameras.length&&(E.cameras.length=0,et=!0);for(let U=0;U<K.length;U++){let W=K[U],X=null;if(g!==null)X=g.getViewport(W);else{let J=p.getViewSubImage(m,W);X=J.viewport,U===0&&(t.setRenderTargetTextures(c,J.colorTexture,J.depthStencilTexture),t.setRenderTarget(c))}let $=w[U];$===void 0&&($=new Xe,$.layers.enable(U),$.viewport=new se,w[U]=$),$.matrix.fromArray(W.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(W.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(X.x,X.y,X.width,X.height),U===0&&(E.matrix.copy($.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),et===!0&&E.cameras.push($)}let Y=r.enabledFeatures;if(Y&&Y.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&b){p=n.getBinding();let U=p.getDepthInformation(K[0]);U&&U.isValid&&U.texture&&x.init(U,r.renderState)}if(Y&&Y.includes("camera-access")&&b){t.state.unbindTexture(),p=n.getBinding();for(let U=0;U<K.length;U++){let W=K[U].camera;if(W){let X=_[W];X||(X=new zs,_[W]=X);let $=p.getCameraImage(W);X.sourceTexture=$}}}}for(let K=0;K<v.length;K++){let et=h[K],Y=v[K];et!==null&&Y!==void 0&&Y.update(et,I,l||o)}wt&&wt(D,I),I.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:I}),y=null}let k=new dp;k.setAnimationLoop(Z),this.setAnimationLoop=function(D){wt=D},this.dispose=function(){}}},Ki=new cn,iM=new Gt;function rM(i,t){function e(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}function n(x,_){_.color.getRGB(x.fogColor.value,Vh(i)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function r(x,_,T,d,c){_.isMeshBasicMaterial||_.isMeshLambertMaterial?s(x,_):_.isMeshToonMaterial?(s(x,_),p(x,_)):_.isMeshPhongMaterial?(s(x,_),f(x,_)):_.isMeshStandardMaterial?(s(x,_),m(x,_),_.isMeshPhysicalMaterial&&g(x,_,c)):_.isMeshMatcapMaterial?(s(x,_),y(x,_)):_.isMeshDepthMaterial?s(x,_):_.isMeshDistanceMaterial?(s(x,_),b(x,_)):_.isMeshNormalMaterial?s(x,_):_.isLineBasicMaterial?(o(x,_),_.isLineDashedMaterial&&a(x,_)):_.isPointsMaterial?u(x,_,T,d):_.isSpriteMaterial?l(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function s(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,e(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,e(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,e(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===Oe&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,e(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===Oe&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,e(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,e(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,e(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);let T=t.get(_),d=T.envMap,c=T.envMapRotation;d&&(x.envMap.value=d,Ki.copy(c),Ki.x*=-1,Ki.y*=-1,Ki.z*=-1,d.isCubeTexture&&d.isRenderTargetTexture===!1&&(Ki.y*=-1,Ki.z*=-1),x.envMapRotation.value.setFromMatrix4(iM.makeRotationFromEuler(Ki)),x.flipEnvMap.value=d.isCubeTexture&&d.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap&&(x.lightMap.value=_.lightMap,x.lightMapIntensity.value=_.lightMapIntensity,e(_.lightMap,x.lightMapTransform)),_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,e(_.aoMap,x.aoMapTransform))}function o(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,e(_.map,x.mapTransform))}function a(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function u(x,_,T,d){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*T,x.scale.value=d*.5,_.map&&(x.map.value=_.map,e(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,e(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function l(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,e(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,e(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function f(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}function p(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}function m(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,e(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,e(_.roughnessMap,x.roughnessMapTransform)),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function g(x,_,T){x.ior.value=_.ior,_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,e(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,e(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,e(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,e(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,e(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Oe&&x.clearcoatNormalScale.value.negate())),_.dispersion>0&&(x.dispersion.value=_.dispersion),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,e(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,e(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=T.texture,x.transmissionSamplerSize.value.set(T.width,T.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,e(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,e(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,e(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,e(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,e(_.specularIntensityMap,x.specularIntensityMapTransform))}function y(x,_){_.matcap&&(x.matcap.value=_.matcap)}function b(x,_){let T=t.get(_).light;x.referencePosition.value.setFromMatrixPosition(T.matrixWorld),x.nearDistance.value=T.shadow.camera.near,x.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function sM(i,t,e,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function u(T,d){let c=d.program;n.uniformBlockBinding(T,c)}function l(T,d){let c=r[T.id];c===void 0&&(y(T),c=f(T),r[T.id]=c,T.addEventListener("dispose",x));let v=d.program;n.updateUBOMapping(T,v);let h=t.render.frame;s[T.id]!==h&&(m(T),s[T.id]=h)}function f(T){let d=p();T.__bindingPointIndex=d;let c=i.createBuffer(),v=T.__size,h=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,c),i.bufferData(i.UNIFORM_BUFFER,v,h),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,d,c),c}function p(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(T){let d=r[T.id],c=T.uniforms,v=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,d);for(let h=0,C=c.length;h<C;h++){let A=Array.isArray(c[h])?c[h]:[c[h]];for(let S=0,M=A.length;S<M;S++){let w=A[S];if(g(w,h,S,v)===!0){let E=w.__offset,R=Array.isArray(w.value)?w.value:[w.value],z=0;for(let V=0;V<R.length;V++){let H=R[V],q=b(H);typeof H=="number"||typeof H=="boolean"?(w.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,E+z,w.__data)):H.isMatrix3?(w.__data[0]=H.elements[0],w.__data[1]=H.elements[1],w.__data[2]=H.elements[2],w.__data[3]=0,w.__data[4]=H.elements[3],w.__data[5]=H.elements[4],w.__data[6]=H.elements[5],w.__data[7]=0,w.__data[8]=H.elements[6],w.__data[9]=H.elements[7],w.__data[10]=H.elements[8],w.__data[11]=0):(H.toArray(w.__data,z),z+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,E,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(T,d,c,v){let h=T.value,C=d+"_"+c;if(v[C]===void 0)return typeof h=="number"||typeof h=="boolean"?v[C]=h:v[C]=h.clone(),!0;{let A=v[C];if(typeof h=="number"||typeof h=="boolean"){if(A!==h)return v[C]=h,!0}else if(A.equals(h)===!1)return A.copy(h),!0}return!1}function y(T){let d=T.uniforms,c=0,v=16;for(let C=0,A=d.length;C<A;C++){let S=Array.isArray(d[C])?d[C]:[d[C]];for(let M=0,w=S.length;M<w;M++){let E=S[M],R=Array.isArray(E.value)?E.value:[E.value];for(let z=0,V=R.length;z<V;z++){let H=R[z],q=b(H),O=c%v,st=O%q.boundary,dt=O+st;c+=st,dt!==0&&v-dt<q.storage&&(c+=v-dt),E.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=c,c+=q.storage}}}let h=c%v;return h>0&&(c+=v-h),T.__size=c,T.__cache={},this}function b(T){let d={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(d.boundary=4,d.storage=4):T.isVector2?(d.boundary=8,d.storage=8):T.isVector3||T.isColor?(d.boundary=16,d.storage=12):T.isVector4?(d.boundary=16,d.storage=16):T.isMatrix3?(d.boundary=48,d.storage=48):T.isMatrix4?(d.boundary=64,d.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),d}function x(T){let d=T.target;d.removeEventListener("dispose",x);let c=o.indexOf(d.__bindingPointIndex);o.splice(c,1),i.deleteBuffer(r[d.id]),delete r[d.id],delete s[d.id]}function _(){for(let T in r)i.deleteBuffer(r[T]);o=[],r={},s={}}return{bind:u,update:l,dispose:_}}var ou=class{constructor(t={}){let{canvas:e=Ud(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:l=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:m=!1}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let y=new Uint32Array(4),b=new Int32Array(4),x=null,_=null,T=[],d=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let c=this,v=!1;this._outputColorSpace=Fe;let h=0,C=0,A=null,S=-1,M=null,w=new se,E=new se,R=null,z=new qt(0),V=0,H=e.width,q=e.height,O=1,st=null,dt=null,ft=new se(0,0,H,q),_t=new se(0,0,H,q),wt=!1,Z=new Lr,k=!1,D=!1,I=new Gt,K=new F,et=new se,Y={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},at=!1;function mt(){return A===null?O:1}let U=n;function W(N,tt){return e.getContext(N,tt)}try{let N={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:u,preserveDrawingBuffer:l,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",Et,!1),e.addEventListener("webglcontextrestored",Nt,!1),e.addEventListener("webglcontextcreationerror",vt,!1),U===null){let tt="webgl2";if(U=W(tt,N),U===null)throw W(tt)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let X,$,J,G,L,it,gt,Tt,B,P,j,rt,ut,ot,St,yt,Dt,Pt,xt,Ct,Ht,Bt,Rt,Zt;function Q(){X=new by(U),X.init(),Bt=new tM(U,X),$=new gy(U,X,t,Bt),J=new jv(U,X),$.reversedDepthBuffer&&m&&J.buffers.depth.setReversed(!0),G=new Ey(U),L=new zv,it=new Qv(U,X,J,L,$,Bt,G),gt=new xy(c),Tt=new Sy(c),B=new D_(U),Rt=new py(U,B),P=new Ty(U,B,G,Rt),j=new Cy(U,P,B,G),xt=new Ay(U,$,it),yt=new _y(L),rt=new Ov(c,gt,Tt,X,$,Rt,yt),ut=new rM(c,L),ot=new Vv,St=new Yv(X),Pt=new dy(c,gt,Tt,J,j,g,u),Dt=new Jv(c,j,$),Zt=new sM(U,G,$,J),Ct=new my(U,X,G),Ht=new wy(U,X,G),G.programs=rt.programs,c.capabilities=$,c.extensions=X,c.properties=L,c.renderLists=ot,c.shadowMap=Dt,c.state=J,c.info=G}Q();let bt=new su(c,U);this.xr=bt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let N=X.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){let N=X.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(N){N!==void 0&&(O=N,this.setSize(H,q,!1))},this.getSize=function(N){return N.set(H,q)},this.setSize=function(N,tt,ct=!0){if(bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=N,q=tt,e.width=Math.floor(N*O),e.height=Math.floor(tt*O),ct===!0&&(e.style.width=N+"px",e.style.height=tt+"px"),this.setViewport(0,0,N,tt)},this.getDrawingBufferSize=function(N){return N.set(H*O,q*O).floor()},this.setDrawingBufferSize=function(N,tt,ct){H=N,q=tt,O=ct,e.width=Math.floor(N*ct),e.height=Math.floor(tt*ct),this.setViewport(0,0,N,tt)},this.getCurrentViewport=function(N){return N.copy(w)},this.getViewport=function(N){return N.copy(ft)},this.setViewport=function(N,tt,ct,lt){N.isVector4?ft.set(N.x,N.y,N.z,N.w):ft.set(N,tt,ct,lt),J.viewport(w.copy(ft).multiplyScalar(O).round())},this.getScissor=function(N){return N.copy(_t)},this.setScissor=function(N,tt,ct,lt){N.isVector4?_t.set(N.x,N.y,N.z,N.w):_t.set(N,tt,ct,lt),J.scissor(E.copy(_t).multiplyScalar(O).round())},this.getScissorTest=function(){return wt},this.setScissorTest=function(N){J.setScissorTest(wt=N)},this.setOpaqueSort=function(N){st=N},this.setTransparentSort=function(N){dt=N},this.getClearColor=function(N){return N.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor(...arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha(...arguments)},this.clear=function(N=!0,tt=!0,ct=!0){let lt=0;if(N){let nt=!1;if(A!==null){let Mt=A.texture.format;nt=Mt===ac||Mt===oc||Mt===sc}if(nt){let Mt=A.texture.type,It=Mt===Ln||Mt===wi||Mt===Hr||Mt===Wr||Mt===ic||Mt===rc,Ut=Pt.getClearColor(),Lt=Pt.getClearAlpha(),Vt=Ut.r,Wt=Ut.g,Ot=Ut.b;It?(y[0]=Vt,y[1]=Wt,y[2]=Ot,y[3]=Lt,U.clearBufferuiv(U.COLOR,0,y)):(b[0]=Vt,b[1]=Wt,b[2]=Ot,b[3]=Lt,U.clearBufferiv(U.COLOR,0,b))}else lt|=U.COLOR_BUFFER_BIT}tt&&(lt|=U.DEPTH_BUFFER_BIT),ct&&(lt|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(lt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Et,!1),e.removeEventListener("webglcontextrestored",Nt,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),Pt.dispose(),ot.dispose(),St.dispose(),L.dispose(),gt.dispose(),Tt.dispose(),j.dispose(),Rt.dispose(),Zt.dispose(),rt.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",zn),bt.removeEventListener("sessionend",hf),Li.stop()};function Et(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function Nt(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;let N=G.autoReset,tt=Dt.enabled,ct=Dt.autoUpdate,lt=Dt.needsUpdate,nt=Dt.type;Q(),G.autoReset=N,Dt.enabled=tt,Dt.autoUpdate=ct,Dt.needsUpdate=lt,Dt.type=nt}function vt(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function pt(N){let tt=N.target;tt.removeEventListener("dispose",pt),Ft(tt)}function Ft(N){Yt(N),L.remove(N)}function Yt(N){let tt=L.get(N).programs;tt!==void 0&&(tt.forEach(function(ct){rt.releaseProgram(ct)}),N.isShaderMaterial&&rt.releaseShaderCache(N))}this.renderBufferDirect=function(N,tt,ct,lt,nt,Mt){tt===null&&(tt=Y);let It=nt.isMesh&&nt.matrixWorld.determinant()<0,Ut=Qm(N,tt,ct,lt,nt);J.setMaterial(lt,It);let Lt=ct.index,Vt=1;if(lt.wireframe===!0){if(Lt=P.getWireframeAttribute(ct),Lt===void 0)return;Vt=2}let Wt=ct.drawRange,Ot=ct.attributes.position,Jt=Wt.start*Vt,ce=(Wt.start+Wt.count)*Vt;Mt!==null&&(Jt=Math.max(Jt,Mt.start*Vt),ce=Math.min(ce,(Mt.start+Mt.count)*Vt)),Lt!==null?(Jt=Math.max(Jt,0),ce=Math.min(ce,Lt.count)):Ot!=null&&(Jt=Math.max(Jt,0),ce=Math.min(ce,Ot.count));let we=ce-Jt;if(we<0||we===1/0)return;Rt.setup(nt,lt,Ut,ct,Lt);let xe,de=Ct;if(Lt!==null&&(xe=B.get(Lt),de=Ht,de.setIndex(xe)),nt.isMesh)lt.wireframe===!0?(J.setLineWidth(lt.wireframeLinewidth*mt()),de.setMode(U.LINES)):de.setMode(U.TRIANGLES);else if(nt.isLine){let zt=lt.linewidth;zt===void 0&&(zt=1),J.setLineWidth(zt*mt()),nt.isLineSegments?de.setMode(U.LINES):nt.isLineLoop?de.setMode(U.LINE_LOOP):de.setMode(U.LINE_STRIP)}else nt.isPoints?de.setMode(U.POINTS):nt.isSprite&&de.setMode(U.TRIANGLES);if(nt.isBatchedMesh)if(nt._multiDrawInstances!==null)Cr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),de.renderMultiDrawInstances(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount,nt._multiDrawInstances);else if(X.get("WEBGL_multi_draw"))de.renderMultiDraw(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount);else{let zt=nt._multiDrawStarts,Me=nt._multiDrawCounts,ee=nt._multiDrawCount,tn=Lt?B.get(Lt).bytesPerElement:1,cr=L.get(lt).currentProgram.getUniforms();for(let en=0;en<ee;en++)cr.setValue(U,"_gl_DrawID",en),de.render(zt[en]/tn,Me[en])}else if(nt.isInstancedMesh)de.renderInstances(Jt,we,nt.count);else if(ct.isInstancedBufferGeometry){let zt=ct._maxInstanceCount!==void 0?ct._maxInstanceCount:1/0,Me=Math.min(ct.instanceCount,zt);de.renderInstances(Jt,we,Me)}else de.render(Jt,we)};function _e(N,tt,ct){N.transparent===!0&&N.side===Ze&&N.forceSinglePass===!1?(N.side=Oe,N.needsUpdate=!0,Eo(N,tt,ct),N.side=sn,N.needsUpdate=!0,Eo(N,tt,ct),N.side=Ze):Eo(N,tt,ct)}this.compile=function(N,tt,ct=null){ct===null&&(ct=N),_=St.get(ct),_.init(tt),d.push(_),ct.traverseVisible(function(nt){nt.isLight&&nt.layers.test(tt.layers)&&(_.pushLight(nt),nt.castShadow&&_.pushShadow(nt))}),N!==ct&&N.traverseVisible(function(nt){nt.isLight&&nt.layers.test(tt.layers)&&(_.pushLight(nt),nt.castShadow&&_.pushShadow(nt))}),_.setupLights();let lt=new Set;return N.traverse(function(nt){if(!(nt.isMesh||nt.isPoints||nt.isLine||nt.isSprite))return;let Mt=nt.material;if(Mt)if(Array.isArray(Mt))for(let It=0;It<Mt.length;It++){let Ut=Mt[It];_e(Ut,ct,nt),lt.add(Ut)}else _e(Mt,ct,nt),lt.add(Mt)}),_=d.pop(),lt},this.compileAsync=function(N,tt,ct=null){let lt=this.compile(N,tt,ct);return new Promise(nt=>{function Mt(){if(lt.forEach(function(It){L.get(It).currentProgram.isReady()&&lt.delete(It)}),lt.size===0){nt(N);return}setTimeout(Mt,10)}X.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let re=null;function Zn(N){re&&re(N)}function zn(){Li.stop()}function hf(){Li.start()}let Li=new dp;Li.setAnimationLoop(Zn),typeof self<"u"&&Li.setContext(self),this.setAnimationLoop=function(N){re=N,bt.setAnimationLoop(N),N===null?Li.stop():Li.start()},bt.addEventListener("sessionstart",zn),bt.addEventListener("sessionend",hf),this.render=function(N,tt){if(tt!==void 0&&tt.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),tt.parent===null&&tt.matrixWorldAutoUpdate===!0&&tt.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(tt),tt=bt.getCamera()),N.isScene===!0&&N.onBeforeRender(c,N,tt,A),_=St.get(N,d.length),_.init(tt),d.push(_),I.multiplyMatrices(tt.projectionMatrix,tt.matrixWorldInverse),Z.setFromProjectionMatrix(I,An,tt.reversedDepth),D=this.localClippingEnabled,k=yt.init(this.clippingPlanes,D),x=ot.get(N,T.length),x.init(),T.push(x),bt.enabled===!0&&bt.isPresenting===!0){let Mt=c.xr.getDepthSensingMesh();Mt!==null&&Dl(Mt,tt,-1/0,c.sortObjects)}Dl(N,tt,0,c.sortObjects),x.finish(),c.sortObjects===!0&&x.sort(st,dt),at=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,at&&Pt.addToRenderList(x,N),this.info.render.frame++,k===!0&&yt.beginShadows();let ct=_.state.shadowsArray;Dt.render(ct,N,tt),k===!0&&yt.endShadows(),this.info.autoReset===!0&&this.info.reset();let lt=x.opaque,nt=x.transmissive;if(_.setupLights(),tt.isArrayCamera){let Mt=tt.cameras;if(nt.length>0)for(let It=0,Ut=Mt.length;It<Ut;It++){let Lt=Mt[It];ff(lt,nt,N,Lt)}at&&Pt.render(N);for(let It=0,Ut=Mt.length;It<Ut;It++){let Lt=Mt[It];uf(x,N,Lt,Lt.viewport)}}else nt.length>0&&ff(lt,nt,N,tt),at&&Pt.render(N),uf(x,N,tt);A!==null&&C===0&&(it.updateMultisampleRenderTarget(A),it.updateRenderTargetMipmap(A)),N.isScene===!0&&N.onAfterRender(c,N,tt),Rt.resetDefaultState(),S=-1,M=null,d.pop(),d.length>0?(_=d[d.length-1],k===!0&&yt.setGlobalState(c.clippingPlanes,_.state.camera)):_=null,T.pop(),T.length>0?x=T[T.length-1]:x=null};function Dl(N,tt,ct,lt){if(N.visible===!1)return;if(N.layers.test(tt.layers)){if(N.isGroup)ct=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(tt);else if(N.isLight)_.pushLight(N),N.castShadow&&_.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||Z.intersectsSprite(N)){lt&&et.setFromMatrixPosition(N.matrixWorld).applyMatrix4(I);let It=j.update(N),Ut=N.material;Ut.visible&&x.push(N,It,Ut,ct,et.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||Z.intersectsObject(N))){let It=j.update(N),Ut=N.material;if(lt&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),et.copy(N.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),et.copy(It.boundingSphere.center)),et.applyMatrix4(N.matrixWorld).applyMatrix4(I)),Array.isArray(Ut)){let Lt=It.groups;for(let Vt=0,Wt=Lt.length;Vt<Wt;Vt++){let Ot=Lt[Vt],Jt=Ut[Ot.materialIndex];Jt&&Jt.visible&&x.push(N,It,Jt,ct,et.z,Ot)}}else Ut.visible&&x.push(N,It,Ut,ct,et.z,null)}}let Mt=N.children;for(let It=0,Ut=Mt.length;It<Ut;It++)Dl(Mt[It],tt,ct,lt)}function uf(N,tt,ct,lt){let nt=N.opaque,Mt=N.transmissive,It=N.transparent;_.setupLightsView(ct),k===!0&&yt.setGlobalState(c.clippingPlanes,ct),lt&&J.viewport(w.copy(lt)),nt.length>0&&wo(nt,tt,ct),Mt.length>0&&wo(Mt,tt,ct),It.length>0&&wo(It,tt,ct),J.buffers.depth.setTest(!0),J.buffers.depth.setMask(!0),J.buffers.color.setMask(!0),J.setPolygonOffset(!1)}function ff(N,tt,ct,lt){if((ct.isScene===!0?ct.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[lt.id]===void 0&&(_.state.transmissionRenderTarget[lt.id]=new Hn(1,1,{generateMipmaps:!0,type:X.has("EXT_color_buffer_half_float")||X.has("EXT_color_buffer_float")?Gr:Ln,minFilter:Ti,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace}));let Mt=_.state.transmissionRenderTarget[lt.id],It=lt.viewport||w;Mt.setSize(It.z*c.transmissionResolutionScale,It.w*c.transmissionResolutionScale);let Ut=c.getRenderTarget(),Lt=c.getActiveCubeFace(),Vt=c.getActiveMipmapLevel();c.setRenderTarget(Mt),c.getClearColor(z),V=c.getClearAlpha(),V<1&&c.setClearColor(16777215,.5),c.clear(),at&&Pt.render(ct);let Wt=c.toneMapping;c.toneMapping=si;let Ot=lt.viewport;if(lt.viewport!==void 0&&(lt.viewport=void 0),_.setupLightsView(lt),k===!0&&yt.setGlobalState(c.clippingPlanes,lt),wo(N,ct,lt),it.updateMultisampleRenderTarget(Mt),it.updateRenderTargetMipmap(Mt),X.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let ce=0,we=tt.length;ce<we;ce++){let xe=tt[ce],de=xe.object,zt=xe.geometry,Me=xe.material,ee=xe.group;if(Me.side===Ze&&de.layers.test(lt.layers)){let tn=Me.side;Me.side=Oe,Me.needsUpdate=!0,df(de,ct,lt,zt,Me,ee),Me.side=tn,Me.needsUpdate=!0,Jt=!0}}Jt===!0&&(it.updateMultisampleRenderTarget(Mt),it.updateRenderTargetMipmap(Mt))}c.setRenderTarget(Ut,Lt,Vt),c.setClearColor(z,V),Ot!==void 0&&(lt.viewport=Ot),c.toneMapping=Wt}function wo(N,tt,ct){let lt=tt.isScene===!0?tt.overrideMaterial:null;for(let nt=0,Mt=N.length;nt<Mt;nt++){let It=N[nt],Ut=It.object,Lt=It.geometry,Vt=It.group,Wt=It.material;Wt.allowOverride===!0&&lt!==null&&(Wt=lt),Ut.layers.test(ct.layers)&&df(Ut,tt,ct,Lt,Wt,Vt)}}function df(N,tt,ct,lt,nt,Mt){N.onBeforeRender(c,tt,ct,lt,nt,Mt),N.modelViewMatrix.multiplyMatrices(ct.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),nt.onBeforeRender(c,tt,ct,lt,N,Mt),nt.transparent===!0&&nt.side===Ze&&nt.forceSinglePass===!1?(nt.side=Oe,nt.needsUpdate=!0,c.renderBufferDirect(ct,tt,lt,nt,N,Mt),nt.side=sn,nt.needsUpdate=!0,c.renderBufferDirect(ct,tt,lt,nt,N,Mt),nt.side=Ze):c.renderBufferDirect(ct,tt,lt,nt,N,Mt),N.onAfterRender(c,tt,ct,lt,nt,Mt)}function Eo(N,tt,ct){tt.isScene!==!0&&(tt=Y);let lt=L.get(N),nt=_.state.lights,Mt=_.state.shadowsArray,It=nt.state.version,Ut=rt.getParameters(N,nt.state,Mt,tt,ct),Lt=rt.getProgramCacheKey(Ut),Vt=lt.programs;lt.environment=N.isMeshStandardMaterial?tt.environment:null,lt.fog=tt.fog,lt.envMap=(N.isMeshStandardMaterial?Tt:gt).get(N.envMap||lt.environment),lt.envMapRotation=lt.environment!==null&&N.envMap===null?tt.environmentRotation:N.envMapRotation,Vt===void 0&&(N.addEventListener("dispose",pt),Vt=new Map,lt.programs=Vt);let Wt=Vt.get(Lt);if(Wt!==void 0){if(lt.currentProgram===Wt&&lt.lightsStateVersion===It)return mf(N,Ut),Wt}else Ut.uniforms=rt.getUniforms(N),N.onBeforeCompile(Ut,c),Wt=rt.acquireProgram(Ut,Lt),Vt.set(Lt,Wt),lt.uniforms=Ut.uniforms;let Ot=lt.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(Ot.clippingPlanes=yt.uniform),mf(N,Ut),lt.needsLights=eg(N),lt.lightsStateVersion=It,lt.needsLights&&(Ot.ambientLightColor.value=nt.state.ambient,Ot.lightProbe.value=nt.state.probe,Ot.directionalLights.value=nt.state.directional,Ot.directionalLightShadows.value=nt.state.directionalShadow,Ot.spotLights.value=nt.state.spot,Ot.spotLightShadows.value=nt.state.spotShadow,Ot.rectAreaLights.value=nt.state.rectArea,Ot.ltc_1.value=nt.state.rectAreaLTC1,Ot.ltc_2.value=nt.state.rectAreaLTC2,Ot.pointLights.value=nt.state.point,Ot.pointLightShadows.value=nt.state.pointShadow,Ot.hemisphereLights.value=nt.state.hemi,Ot.directionalShadowMap.value=nt.state.directionalShadowMap,Ot.directionalShadowMatrix.value=nt.state.directionalShadowMatrix,Ot.spotShadowMap.value=nt.state.spotShadowMap,Ot.spotLightMatrix.value=nt.state.spotLightMatrix,Ot.spotLightMap.value=nt.state.spotLightMap,Ot.pointShadowMap.value=nt.state.pointShadowMap,Ot.pointShadowMatrix.value=nt.state.pointShadowMatrix),lt.currentProgram=Wt,lt.uniformsList=null,Wt}function pf(N){if(N.uniformsList===null){let tt=N.currentProgram.getUniforms();N.uniformsList=Zr.seqWithValue(tt.seq,N.uniforms)}return N.uniformsList}function mf(N,tt){let ct=L.get(N);ct.outputColorSpace=tt.outputColorSpace,ct.batching=tt.batching,ct.batchingColor=tt.batchingColor,ct.instancing=tt.instancing,ct.instancingColor=tt.instancingColor,ct.instancingMorph=tt.instancingMorph,ct.skinning=tt.skinning,ct.morphTargets=tt.morphTargets,ct.morphNormals=tt.morphNormals,ct.morphColors=tt.morphColors,ct.morphTargetsCount=tt.morphTargetsCount,ct.numClippingPlanes=tt.numClippingPlanes,ct.numIntersection=tt.numClipIntersection,ct.vertexAlphas=tt.vertexAlphas,ct.vertexTangents=tt.vertexTangents,ct.toneMapping=tt.toneMapping}function Qm(N,tt,ct,lt,nt){tt.isScene!==!0&&(tt=Y),it.resetTextureUnits();let Mt=tt.fog,It=lt.isMeshStandardMaterial?tt.environment:null,Ut=A===null?c.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Hi,Lt=(lt.isMeshStandardMaterial?Tt:gt).get(lt.envMap||It),Vt=lt.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,Wt=!!ct.attributes.tangent&&(!!lt.normalMap||lt.anisotropy>0),Ot=!!ct.morphAttributes.position,Jt=!!ct.morphAttributes.normal,ce=!!ct.morphAttributes.color,we=si;lt.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(we=c.toneMapping);let xe=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,de=xe!==void 0?xe.length:0,zt=L.get(lt),Me=_.state.lights;if(k===!0&&(D===!0||N!==M)){let Ge=N===M&&lt.id===S;yt.setState(lt,N,Ge)}let ee=!1;lt.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==Me.state.version||zt.outputColorSpace!==Ut||nt.isBatchedMesh&&zt.batching===!1||!nt.isBatchedMesh&&zt.batching===!0||nt.isBatchedMesh&&zt.batchingColor===!0&&nt.colorTexture===null||nt.isBatchedMesh&&zt.batchingColor===!1&&nt.colorTexture!==null||nt.isInstancedMesh&&zt.instancing===!1||!nt.isInstancedMesh&&zt.instancing===!0||nt.isSkinnedMesh&&zt.skinning===!1||!nt.isSkinnedMesh&&zt.skinning===!0||nt.isInstancedMesh&&zt.instancingColor===!0&&nt.instanceColor===null||nt.isInstancedMesh&&zt.instancingColor===!1&&nt.instanceColor!==null||nt.isInstancedMesh&&zt.instancingMorph===!0&&nt.morphTexture===null||nt.isInstancedMesh&&zt.instancingMorph===!1&&nt.morphTexture!==null||zt.envMap!==Lt||lt.fog===!0&&zt.fog!==Mt||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==yt.numPlanes||zt.numIntersection!==yt.numIntersection)||zt.vertexAlphas!==Vt||zt.vertexTangents!==Wt||zt.morphTargets!==Ot||zt.morphNormals!==Jt||zt.morphColors!==ce||zt.toneMapping!==we||zt.morphTargetsCount!==de)&&(ee=!0):(ee=!0,zt.__version=lt.version);let tn=zt.currentProgram;ee===!0&&(tn=Eo(lt,tt,nt));let cr=!1,en=!1,xs=!1,Se=tn.getUniforms(),gn=zt.uniforms;if(J.useProgram(tn.program)&&(cr=!0,en=!0,xs=!0),lt.id!==S&&(S=lt.id,en=!0),cr||M!==N){J.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),Se.setValue(U,"projectionMatrix",N.projectionMatrix),Se.setValue(U,"viewMatrix",N.matrixWorldInverse);let Je=Se.map.cameraPosition;Je!==void 0&&Je.setValue(U,K.setFromMatrixPosition(N.matrixWorld)),$.logarithmicDepthBuffer&&Se.setValue(U,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(lt.isMeshPhongMaterial||lt.isMeshToonMaterial||lt.isMeshLambertMaterial||lt.isMeshBasicMaterial||lt.isMeshStandardMaterial||lt.isShaderMaterial)&&Se.setValue(U,"isOrthographic",N.isOrthographicCamera===!0),M!==N&&(M=N,en=!0,xs=!0)}if(nt.isSkinnedMesh){Se.setOptional(U,nt,"bindMatrix"),Se.setOptional(U,nt,"bindMatrixInverse");let Ge=nt.skeleton;Ge&&(Ge.boneTexture===null&&Ge.computeBoneTexture(),Se.setValue(U,"boneTexture",Ge.boneTexture,it))}nt.isBatchedMesh&&(Se.setOptional(U,nt,"batchingTexture"),Se.setValue(U,"batchingTexture",nt._matricesTexture,it),Se.setOptional(U,nt,"batchingIdTexture"),Se.setValue(U,"batchingIdTexture",nt._indirectTexture,it),Se.setOptional(U,nt,"batchingColorTexture"),nt._colorsTexture!==null&&Se.setValue(U,"batchingColorTexture",nt._colorsTexture,it));let _n=ct.morphAttributes;if((_n.position!==void 0||_n.normal!==void 0||_n.color!==void 0)&&xt.update(nt,ct,tn),(en||zt.receiveShadow!==nt.receiveShadow)&&(zt.receiveShadow=nt.receiveShadow,Se.setValue(U,"receiveShadow",nt.receiveShadow)),lt.isMeshGouraudMaterial&&lt.envMap!==null&&(gn.envMap.value=Lt,gn.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),lt.isMeshStandardMaterial&&lt.envMap===null&&tt.environment!==null&&(gn.envMapIntensity.value=tt.environmentIntensity),en&&(Se.setValue(U,"toneMappingExposure",c.toneMappingExposure),zt.needsLights&&tg(gn,xs),Mt&&lt.fog===!0&&ut.refreshFogUniforms(gn,Mt),ut.refreshMaterialUniforms(gn,lt,O,q,_.state.transmissionRenderTarget[N.id]),Zr.upload(U,pf(zt),gn,it)),lt.isShaderMaterial&&lt.uniformsNeedUpdate===!0&&(Zr.upload(U,pf(zt),gn,it),lt.uniformsNeedUpdate=!1),lt.isSpriteMaterial&&Se.setValue(U,"center",nt.center),Se.setValue(U,"modelViewMatrix",nt.modelViewMatrix),Se.setValue(U,"normalMatrix",nt.normalMatrix),Se.setValue(U,"modelMatrix",nt.matrixWorld),lt.isShaderMaterial||lt.isRawShaderMaterial){let Ge=lt.uniformsGroups;for(let Je=0,Ll=Ge.length;Je<Ll;Je++){let Ni=Ge[Je];Zt.update(Ni,tn),Zt.bind(Ni,tn)}}return tn}function tg(N,tt){N.ambientLightColor.needsUpdate=tt,N.lightProbe.needsUpdate=tt,N.directionalLights.needsUpdate=tt,N.directionalLightShadows.needsUpdate=tt,N.pointLights.needsUpdate=tt,N.pointLightShadows.needsUpdate=tt,N.spotLights.needsUpdate=tt,N.spotLightShadows.needsUpdate=tt,N.rectAreaLights.needsUpdate=tt,N.hemisphereLights.needsUpdate=tt}function eg(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return h},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(N,tt,ct){let lt=L.get(N);lt.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,lt.__autoAllocateDepthBuffer===!1&&(lt.__useRenderToTexture=!1),L.get(N.texture).__webglTexture=tt,L.get(N.depthTexture).__webglTexture=lt.__autoAllocateDepthBuffer?void 0:ct,lt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,tt){let ct=L.get(N);ct.__webglFramebuffer=tt,ct.__useDefaultFramebuffer=tt===void 0};let ng=U.createFramebuffer();this.setRenderTarget=function(N,tt=0,ct=0){A=N,h=tt,C=ct;let lt=!0,nt=null,Mt=!1,It=!1;if(N){let Lt=L.get(N);if(Lt.__useDefaultFramebuffer!==void 0)J.bindFramebuffer(U.FRAMEBUFFER,null),lt=!1;else if(Lt.__webglFramebuffer===void 0)it.setupRenderTarget(N);else if(Lt.__hasExternalTextures)it.rebindTextures(N,L.get(N.texture).__webglTexture,L.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){let Ot=N.depthTexture;if(Lt.__boundDepthTexture!==Ot){if(Ot!==null&&L.has(Ot)&&(N.width!==Ot.image.width||N.height!==Ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");it.setupDepthRenderbuffer(N)}}let Vt=N.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(It=!0);let Wt=L.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(Wt[tt])?nt=Wt[tt][ct]:nt=Wt[tt],Mt=!0):N.samples>0&&it.useMultisampledRTT(N)===!1?nt=L.get(N).__webglMultisampledFramebuffer:Array.isArray(Wt)?nt=Wt[ct]:nt=Wt,w.copy(N.viewport),E.copy(N.scissor),R=N.scissorTest}else w.copy(ft).multiplyScalar(O).floor(),E.copy(_t).multiplyScalar(O).floor(),R=wt;if(ct!==0&&(nt=ng),J.bindFramebuffer(U.FRAMEBUFFER,nt)&&lt&&J.drawBuffers(N,nt),J.viewport(w),J.scissor(E),J.setScissorTest(R),Mt){let Lt=L.get(N.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Lt.__webglTexture,ct)}else if(It){let Lt=tt;for(let Vt=0;Vt<N.textures.length;Vt++){let Wt=L.get(N.textures[Vt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Vt,Wt.__webglTexture,ct,Lt)}}else if(N!==null&&ct!==0){let Lt=L.get(N.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Lt.__webglTexture,ct)}S=-1},this.readRenderTargetPixels=function(N,tt,ct,lt,nt,Mt,It,Ut=0){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=L.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&It!==void 0&&(Lt=Lt[It]),Lt){J.bindFramebuffer(U.FRAMEBUFFER,Lt);try{let Vt=N.textures[Ut],Wt=Vt.format,Ot=Vt.type;if(!$.textureFormatReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$.textureTypeReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}tt>=0&&tt<=N.width-lt&&ct>=0&&ct<=N.height-nt&&(N.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ut),U.readPixels(tt,ct,lt,nt,Bt.convert(Wt),Bt.convert(Ot),Mt))}finally{let Vt=A!==null?L.get(A).__webglFramebuffer:null;J.bindFramebuffer(U.FRAMEBUFFER,Vt)}}},this.readRenderTargetPixelsAsync=async function(N,tt,ct,lt,nt,Mt,It,Ut=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=L.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&It!==void 0&&(Lt=Lt[It]),Lt)if(tt>=0&&tt<=N.width-lt&&ct>=0&&ct<=N.height-nt){J.bindFramebuffer(U.FRAMEBUFFER,Lt);let Vt=N.textures[Ut],Wt=Vt.format,Ot=Vt.type;if(!$.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$.textureTypeReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Jt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Jt),U.bufferData(U.PIXEL_PACK_BUFFER,Mt.byteLength,U.STREAM_READ),N.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ut),U.readPixels(tt,ct,lt,nt,Bt.convert(Wt),Bt.convert(Ot),0);let ce=A!==null?L.get(A).__webglFramebuffer:null;J.bindFramebuffer(U.FRAMEBUFFER,ce);let we=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Fd(U,we,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Jt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Mt),U.deleteBuffer(Jt),U.deleteSync(we),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,tt=null,ct=0){let lt=Math.pow(2,-ct),nt=Math.floor(N.image.width*lt),Mt=Math.floor(N.image.height*lt),It=tt!==null?tt.x:0,Ut=tt!==null?tt.y:0;it.setTexture2D(N,0),U.copyTexSubImage2D(U.TEXTURE_2D,ct,0,0,It,Ut,nt,Mt),J.unbindTexture()};let ig=U.createFramebuffer(),rg=U.createFramebuffer();this.copyTextureToTexture=function(N,tt,ct=null,lt=null,nt=0,Mt=null){Mt===null&&(nt!==0?(Cr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Mt=nt,nt=0):Mt=0);let It,Ut,Lt,Vt,Wt,Ot,Jt,ce,we,xe=N.isCompressedTexture?N.mipmaps[Mt]:N.image;if(ct!==null)It=ct.max.x-ct.min.x,Ut=ct.max.y-ct.min.y,Lt=ct.isBox3?ct.max.z-ct.min.z:1,Vt=ct.min.x,Wt=ct.min.y,Ot=ct.isBox3?ct.min.z:0;else{let _n=Math.pow(2,-nt);It=Math.floor(xe.width*_n),Ut=Math.floor(xe.height*_n),N.isDataArrayTexture?Lt=xe.depth:N.isData3DTexture?Lt=Math.floor(xe.depth*_n):Lt=1,Vt=0,Wt=0,Ot=0}lt!==null?(Jt=lt.x,ce=lt.y,we=lt.z):(Jt=0,ce=0,we=0);let de=Bt.convert(tt.format),zt=Bt.convert(tt.type),Me;tt.isData3DTexture?(it.setTexture3D(tt,0),Me=U.TEXTURE_3D):tt.isDataArrayTexture||tt.isCompressedArrayTexture?(it.setTexture2DArray(tt,0),Me=U.TEXTURE_2D_ARRAY):(it.setTexture2D(tt,0),Me=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,tt.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,tt.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,tt.unpackAlignment);let ee=U.getParameter(U.UNPACK_ROW_LENGTH),tn=U.getParameter(U.UNPACK_IMAGE_HEIGHT),cr=U.getParameter(U.UNPACK_SKIP_PIXELS),en=U.getParameter(U.UNPACK_SKIP_ROWS),xs=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,xe.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,xe.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Vt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Wt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ot);let Se=N.isDataArrayTexture||N.isData3DTexture,gn=tt.isDataArrayTexture||tt.isData3DTexture;if(N.isDepthTexture){let _n=L.get(N),Ge=L.get(tt),Je=L.get(_n.__renderTarget),Ll=L.get(Ge.__renderTarget);J.bindFramebuffer(U.READ_FRAMEBUFFER,Je.__webglFramebuffer),J.bindFramebuffer(U.DRAW_FRAMEBUFFER,Ll.__webglFramebuffer);for(let Ni=0;Ni<Lt;Ni++)Se&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,L.get(N).__webglTexture,nt,Ot+Ni),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,L.get(tt).__webglTexture,Mt,we+Ni)),U.blitFramebuffer(Vt,Wt,It,Ut,Jt,ce,It,Ut,U.DEPTH_BUFFER_BIT,U.NEAREST);J.bindFramebuffer(U.READ_FRAMEBUFFER,null),J.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(nt!==0||N.isRenderTargetTexture||L.has(N)){let _n=L.get(N),Ge=L.get(tt);J.bindFramebuffer(U.READ_FRAMEBUFFER,ig),J.bindFramebuffer(U.DRAW_FRAMEBUFFER,rg);for(let Je=0;Je<Lt;Je++)Se?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,_n.__webglTexture,nt,Ot+Je):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,_n.__webglTexture,nt),gn?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ge.__webglTexture,Mt,we+Je):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ge.__webglTexture,Mt),nt!==0?U.blitFramebuffer(Vt,Wt,It,Ut,Jt,ce,It,Ut,U.COLOR_BUFFER_BIT,U.NEAREST):gn?U.copyTexSubImage3D(Me,Mt,Jt,ce,we+Je,Vt,Wt,It,Ut):U.copyTexSubImage2D(Me,Mt,Jt,ce,Vt,Wt,It,Ut);J.bindFramebuffer(U.READ_FRAMEBUFFER,null),J.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else gn?N.isDataTexture||N.isData3DTexture?U.texSubImage3D(Me,Mt,Jt,ce,we,It,Ut,Lt,de,zt,xe.data):tt.isCompressedArrayTexture?U.compressedTexSubImage3D(Me,Mt,Jt,ce,we,It,Ut,Lt,de,xe.data):U.texSubImage3D(Me,Mt,Jt,ce,we,It,Ut,Lt,de,zt,xe):N.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Mt,Jt,ce,It,Ut,de,zt,xe.data):N.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Mt,Jt,ce,xe.width,xe.height,de,xe.data):U.texSubImage2D(U.TEXTURE_2D,Mt,Jt,ce,It,Ut,de,zt,xe);U.pixelStorei(U.UNPACK_ROW_LENGTH,ee),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,tn),U.pixelStorei(U.UNPACK_SKIP_PIXELS,cr),U.pixelStorei(U.UNPACK_SKIP_ROWS,en),U.pixelStorei(U.UNPACK_SKIP_IMAGES,xs),Mt===0&&tt.generateMipmaps&&U.generateMipmap(Me),J.unbindTexture()},this.initRenderTarget=function(N){L.get(N).__webglFramebuffer===void 0&&it.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?it.setTextureCube(N,0):N.isData3DTexture?it.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?it.setTexture2DArray(N,0):it.setTexture2D(N,0),J.unbindTexture()},this.resetState=function(){h=0,C=0,A=null,J.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}};var xp={type:"change"},hu={type:"start"},vp={type:"end"},Wc=new qe,yp=new Ce,oM=Math.cos(70*Bc.DEG2RAD),Ne=new F,Ke=2*Math.PI,ue={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},cu=1e-6,lu=class extends Js{constructor(t,e=null){super(t,e),this.state=ue.NONE,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Si.ROTATE,MIDDLE:Si.DOLLY,RIGHT:Si.PAN},this.touches={ONE:bi.ROTATE,TWO:bi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new F,this._lastQuaternion=new on,this._lastTargetPosition=new F,this._quat=new on().setFromUnitVectors(t.up,new F(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Vr,this._sphericalDelta=new Vr,this._scale=1,this._panOffset=new F,this._rotateStart=new ht,this._rotateEnd=new ht,this._rotateDelta=new ht,this._panStart=new ht,this._panEnd=new ht,this._panDelta=new ht,this._dollyStart=new ht,this._dollyEnd=new ht,this._dollyDelta=new ht,this._dollyDirection=new F,this._mouse=new ht,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=cM.bind(this),this._onPointerDown=aM.bind(this),this._onPointerUp=lM.bind(this),this._onContextMenu=gM.bind(this),this._onMouseWheel=fM.bind(this),this._onKeyDown=dM.bind(this),this._onTouchStart=pM.bind(this),this._onTouchMove=mM.bind(this),this._onMouseDown=hM.bind(this),this._onMouseMove=uM.bind(this),this._interceptControlDown=_M.bind(this),this._interceptControlUp=xM.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(xp),this.update(),this.state=ue.NONE}update(t=null){let e=this.object.position;Ne.copy(e).sub(this.target),Ne.applyQuaternion(this._quat),this._spherical.setFromVector3(Ne),this.autoRotate&&this.state===ue.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=Ke:n>Math.PI&&(n-=Ke),r<-Math.PI?r+=Ke:r>Math.PI&&(r-=Ke),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Ne.setFromSpherical(this._spherical),Ne.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ne),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Ne.length();o=this._clampDistance(a*this._scale);let u=a-o;this.object.position.addScaledVector(this._dollyDirection,u),this.object.updateMatrixWorld(),s=!!u}else if(this.object.isOrthographicCamera){let a=new F(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=u!==this.object.zoom;let l=new F(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Ne.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Wc.origin.copy(this.object.position),Wc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Wc.direction))<oM?this.object.lookAt(this.target):(yp.setFromNormalAndCoplanarPoint(this.object.up,this.target),Wc.intersectPlane(yp,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>cu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>cu||this._lastTargetPosition.distanceToSquared(this.target)>cu?(this.dispatchEvent(xp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ke/60*this.autoRotateSpeed*t:Ke/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ne.setFromMatrixColumn(e,0),Ne.multiplyScalar(-t),this._panOffset.add(Ne)}_panUp(t,e){this.screenSpacePanning===!0?Ne.setFromMatrixColumn(e,1):(Ne.setFromMatrixColumn(e,0),Ne.crossVectors(this.object.up,Ne)),Ne.multiplyScalar(t),this._panOffset.add(Ne)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;Ne.copy(r).sub(this.target);let s=Ne.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=t-n.left,s=e-n.top,o=n.width,a=n.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Ke*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ke*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Ke*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Ke*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Ke*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Ke*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(n,r)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Ke*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ke*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ht,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function aM(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function cM(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function lM(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(vp),this.state=ue.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function hM(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Si.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ue.DOLLY;break;case Si.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ue.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ue.ROTATE}break;case Si.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ue.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ue.PAN}break;default:this.state=ue.NONE}this.state!==ue.NONE&&this.dispatchEvent(hu)}function uM(i){switch(this.state){case ue.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ue.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ue.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function fM(i){this.enabled===!1||this.enableZoom===!1||this.state!==ue.NONE||(i.preventDefault(),this.dispatchEvent(hu),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(vp))}function dM(i){this.enabled!==!1&&this._handleKeyDown(i)}function pM(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case bi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ue.TOUCH_ROTATE;break;case bi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ue.TOUCH_PAN;break;default:this.state=ue.NONE}break;case 2:switch(this.touches.TWO){case bi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ue.TOUCH_DOLLY_PAN;break;case bi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ue.TOUCH_DOLLY_ROTATE;break;default:this.state=ue.NONE}break;default:this.state=ue.NONE}this.state!==ue.NONE&&this.dispatchEvent(hu)}function mM(i){switch(this._trackPointer(i),this.state){case ue.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ue.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ue.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ue.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ue.NONE}}function gM(i){this.enabled!==!1&&i.preventDefault()}function _M(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function xM(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var uu=class extends Dn{constructor(t){super(t)}load(t,e,n,r){let s=this,o=new ii(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){try{e(s.parse(a))}catch(u){r?r(u):console.error(u),s.manager.itemError(t)}},n,r)}parse(t){function e(l){let f=new DataView(l),p=32/8*3+32/8*3*3+16/8,m=f.getUint32(80,!0);if(80+32/8+m*p===f.byteLength)return!0;let y=[115,111,108,105,100];for(let b=0;b<5;b++)if(n(y,f,b))return!1;return!0}function n(l,f,p){for(let m=0,g=l.length;m<g;m++)if(l[m]!==f.getUint8(p+m))return!1;return!0}function r(l){let f=new DataView(l),p=f.getUint32(80,!0),m,g,y,b=!1,x,_,T,d,c;for(let w=0;w<70;w++)f.getUint32(w,!1)==1129270351&&f.getUint8(w+4)==82&&f.getUint8(w+5)==61&&(b=!0,x=new Float32Array(p*3*3),_=f.getUint8(w+6)/255,T=f.getUint8(w+7)/255,d=f.getUint8(w+8)/255,c=f.getUint8(w+9)/255);let v=84,h=50,C=new Te,A=new Float32Array(p*3*3),S=new Float32Array(p*3*3),M=new qt;for(let w=0;w<p;w++){let E=v+w*h,R=f.getFloat32(E,!0),z=f.getFloat32(E+4,!0),V=f.getFloat32(E+8,!0);if(b){let H=f.getUint16(E+48,!0);(H&32768)===0?(m=(H&31)/31,g=(H>>5&31)/31,y=(H>>10&31)/31):(m=_,g=T,y=d)}for(let H=1;H<=3;H++){let q=E+H*12,O=w*3*3+(H-1)*3;A[O]=f.getFloat32(q,!0),A[O+1]=f.getFloat32(q+4,!0),A[O+2]=f.getFloat32(q+8,!0),S[O]=R,S[O+1]=z,S[O+2]=V,b&&(M.setRGB(m,g,y,Fe),x[O]=M.r,x[O+1]=M.g,x[O+2]=M.b)}}return C.setAttribute("position",new pe(A,3)),C.setAttribute("normal",new pe(S,3)),b&&(C.setAttribute("color",new pe(x,3)),C.hasColors=!0,C.alpha=c),C}function s(l){let f=new Te,p=/solid([\s\S]*?)endsolid/g,m=/facet([\s\S]*?)endfacet/g,g=/solid\s(.+)/,y=0,b=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,x=new RegExp("vertex"+b+b+b,"g"),_=new RegExp("normal"+b+b+b,"g"),T=[],d=[],c=[],v=new F,h,C=0,A=0,S=0;for(;(h=p.exec(l))!==null;){A=S;let M=h[0],w=(h=g.exec(M))!==null?h[1]:"";for(c.push(w);(h=m.exec(M))!==null;){let z=0,V=0,H=h[0];for(;(h=_.exec(H))!==null;)v.x=parseFloat(h[1]),v.y=parseFloat(h[2]),v.z=parseFloat(h[3]),V++;for(;(h=x.exec(H))!==null;)T.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3])),d.push(v.x,v.y,v.z),z++,S++;V!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+y),z!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+y),y++}let E=A,R=S-A;f.userData.groupNames=c,f.addGroup(E,R,C),C++}return f.setAttribute("position",new Kt(T,3)),f.setAttribute("normal",new Kt(d,3)),f}function o(l){return typeof l!="string"?new TextDecoder().decode(l):l}function a(l){if(typeof l=="string"){let f=new Uint8Array(l.length);for(let p=0;p<l.length;p++)f[p]=l.charCodeAt(p)&255;return f.buffer||f}else return l}let u=a(t);return e(u)?r(u):s(o(t))}};var yM=Fe,fu=class i extends Dn{constructor(t){super(t),this.defaultDPI=90,this.defaultUnit="px"}load(t,e,n,r){let s=this,o=new ii(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(t,function(a){try{e(s.parse(a))}catch(u){r?r(u):console.error(u),s.manager.itemError(t)}},n,r)}parse(t){let e=this;function n(Z,k){if(Z.nodeType!==1)return;let D=c(Z),I=!1,K=null;switch(Z.nodeName){case"svg":k=y(Z,k);break;case"style":s(Z);break;case"g":k=y(Z,k);break;case"path":k=y(Z,k),Z.hasAttribute("d")&&(K=r(Z));break;case"rect":k=y(Z,k),K=u(Z);break;case"polygon":k=y(Z,k),K=l(Z);break;case"polyline":k=y(Z,k),K=f(Z);break;case"circle":k=y(Z,k),K=p(Z);break;case"ellipse":k=y(Z,k),K=m(Z);break;case"line":k=y(Z,k),K=g(Z);break;case"defs":I=!0;break;case"use":k=y(Z,k);let at=(Z.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),mt=Z.viewportElement.getElementById(at);mt?n(mt,k):console.warn("SVGLoader: 'use node' references non-existent node id: "+at);break;default:}K&&(k.fill!==void 0&&k.fill!=="none"&&K.color.setStyle(k.fill,yM),h(K,ft),E.push(K),K.userData={node:Z,style:k});let et=Z.childNodes;for(let Y=0;Y<et.length;Y++){let at=et[Y];I&&at.nodeName!=="style"&&at.nodeName!=="defs"||n(at,k)}D&&(z.pop(),z.length>0?ft.copy(z[z.length-1]):ft.identity())}function r(Z){let k=new un,D=new ht,I=new ht,K=new ht,et=!0,Y=!1,at=Z.getAttribute("d");if(at===""||at==="none")return null;let mt=at.match(/[a-df-z][^a-df-z]*/ig);for(let U=0,W=mt.length;U<W;U++){let X=mt[U],$=X.charAt(0),J=X.slice(1).trim();et===!0&&(Y=!0,et=!1);let G;switch($){case"M":G=x(J);for(let L=0,it=G.length;L<it;L+=2)D.x=G[L+0],D.y=G[L+1],I.x=D.x,I.y=D.y,L===0?k.moveTo(D.x,D.y):k.lineTo(D.x,D.y),L===0&&K.copy(D);break;case"H":G=x(J);for(let L=0,it=G.length;L<it;L++)D.x=G[L],I.x=D.x,I.y=D.y,k.lineTo(D.x,D.y),L===0&&Y===!0&&K.copy(D);break;case"V":G=x(J);for(let L=0,it=G.length;L<it;L++)D.y=G[L],I.x=D.x,I.y=D.y,k.lineTo(D.x,D.y),L===0&&Y===!0&&K.copy(D);break;case"L":G=x(J);for(let L=0,it=G.length;L<it;L+=2)D.x=G[L+0],D.y=G[L+1],I.x=D.x,I.y=D.y,k.lineTo(D.x,D.y),L===0&&Y===!0&&K.copy(D);break;case"C":G=x(J);for(let L=0,it=G.length;L<it;L+=6)k.bezierCurveTo(G[L+0],G[L+1],G[L+2],G[L+3],G[L+4],G[L+5]),I.x=G[L+2],I.y=G[L+3],D.x=G[L+4],D.y=G[L+5],L===0&&Y===!0&&K.copy(D);break;case"S":G=x(J);for(let L=0,it=G.length;L<it;L+=4)k.bezierCurveTo(b(D.x,I.x),b(D.y,I.y),G[L+0],G[L+1],G[L+2],G[L+3]),I.x=G[L+0],I.y=G[L+1],D.x=G[L+2],D.y=G[L+3],L===0&&Y===!0&&K.copy(D);break;case"Q":G=x(J);for(let L=0,it=G.length;L<it;L+=4)k.quadraticCurveTo(G[L+0],G[L+1],G[L+2],G[L+3]),I.x=G[L+0],I.y=G[L+1],D.x=G[L+2],D.y=G[L+3],L===0&&Y===!0&&K.copy(D);break;case"T":G=x(J);for(let L=0,it=G.length;L<it;L+=2){let gt=b(D.x,I.x),Tt=b(D.y,I.y);k.quadraticCurveTo(gt,Tt,G[L+0],G[L+1]),I.x=gt,I.y=Tt,D.x=G[L+0],D.y=G[L+1],L===0&&Y===!0&&K.copy(D)}break;case"A":G=x(J,[3,4],7);for(let L=0,it=G.length;L<it;L+=7){if(G[L+5]==D.x&&G[L+6]==D.y)continue;let gt=D.clone();D.x=G[L+5],D.y=G[L+6],I.x=D.x,I.y=D.y,o(k,G[L],G[L+1],G[L+2],G[L+3],G[L+4],gt,D),L===0&&Y===!0&&K.copy(D)}break;case"m":G=x(J);for(let L=0,it=G.length;L<it;L+=2)D.x+=G[L+0],D.y+=G[L+1],I.x=D.x,I.y=D.y,L===0?k.moveTo(D.x,D.y):k.lineTo(D.x,D.y),L===0&&K.copy(D);break;case"h":G=x(J);for(let L=0,it=G.length;L<it;L++)D.x+=G[L],I.x=D.x,I.y=D.y,k.lineTo(D.x,D.y),L===0&&Y===!0&&K.copy(D);break;case"v":G=x(J);for(let L=0,it=G.length;L<it;L++)D.y+=G[L],I.x=D.x,I.y=D.y,k.lineTo(D.x,D.y),L===0&&Y===!0&&K.copy(D);break;case"l":G=x(J);for(let L=0,it=G.length;L<it;L+=2)D.x+=G[L+0],D.y+=G[L+1],I.x=D.x,I.y=D.y,k.lineTo(D.x,D.y),L===0&&Y===!0&&K.copy(D);break;case"c":G=x(J);for(let L=0,it=G.length;L<it;L+=6)k.bezierCurveTo(D.x+G[L+0],D.y+G[L+1],D.x+G[L+2],D.y+G[L+3],D.x+G[L+4],D.y+G[L+5]),I.x=D.x+G[L+2],I.y=D.y+G[L+3],D.x+=G[L+4],D.y+=G[L+5],L===0&&Y===!0&&K.copy(D);break;case"s":G=x(J);for(let L=0,it=G.length;L<it;L+=4)k.bezierCurveTo(b(D.x,I.x),b(D.y,I.y),D.x+G[L+0],D.y+G[L+1],D.x+G[L+2],D.y+G[L+3]),I.x=D.x+G[L+0],I.y=D.y+G[L+1],D.x+=G[L+2],D.y+=G[L+3],L===0&&Y===!0&&K.copy(D);break;case"q":G=x(J);for(let L=0,it=G.length;L<it;L+=4)k.quadraticCurveTo(D.x+G[L+0],D.y+G[L+1],D.x+G[L+2],D.y+G[L+3]),I.x=D.x+G[L+0],I.y=D.y+G[L+1],D.x+=G[L+2],D.y+=G[L+3],L===0&&Y===!0&&K.copy(D);break;case"t":G=x(J);for(let L=0,it=G.length;L<it;L+=2){let gt=b(D.x,I.x),Tt=b(D.y,I.y);k.quadraticCurveTo(gt,Tt,D.x+G[L+0],D.y+G[L+1]),I.x=gt,I.y=Tt,D.x=D.x+G[L+0],D.y=D.y+G[L+1],L===0&&Y===!0&&K.copy(D)}break;case"a":G=x(J,[3,4],7);for(let L=0,it=G.length;L<it;L+=7){if(G[L+5]==0&&G[L+6]==0)continue;let gt=D.clone();D.x+=G[L+5],D.y+=G[L+6],I.x=D.x,I.y=D.y,o(k,G[L],G[L+1],G[L+2],G[L+3],G[L+4],gt,D),L===0&&Y===!0&&K.copy(D)}break;case"Z":case"z":k.currentPath.autoClose=!0,k.currentPath.curves.length>0&&(D.copy(K),k.currentPath.currentPoint.copy(D),et=!0);break;default:console.warn(X)}Y=!1}return k}function s(Z){if(!(!Z.sheet||!Z.sheet.cssRules||!Z.sheet.cssRules.length))for(let k=0;k<Z.sheet.cssRules.length;k++){let D=Z.sheet.cssRules[k];if(D.type!==1)continue;let I=D.selectorText.split(/,/gm).filter(Boolean).map(K=>K.trim());for(let K=0;K<I.length;K++){let et=Object.fromEntries(Object.entries(D.style).filter(([,Y])=>Y!==""));R[I[K]]=Object.assign(R[I[K]]||{},et)}}}function o(Z,k,D,I,K,et,Y,at){if(k==0||D==0){Z.lineTo(at.x,at.y);return}I=I*Math.PI/180,k=Math.abs(k),D=Math.abs(D);let mt=(Y.x-at.x)/2,U=(Y.y-at.y)/2,W=Math.cos(I)*mt+Math.sin(I)*U,X=-Math.sin(I)*mt+Math.cos(I)*U,$=k*k,J=D*D,G=W*W,L=X*X,it=G/$+L/J;if(it>1){let yt=Math.sqrt(it);k=yt*k,D=yt*D,$=k*k,J=D*D}let gt=$*L+J*G,Tt=($*J-gt)/gt,B=Math.sqrt(Math.max(0,Tt));K===et&&(B=-B);let P=B*k*X/D,j=-B*D*W/k,rt=Math.cos(I)*P-Math.sin(I)*j+(Y.x+at.x)/2,ut=Math.sin(I)*P+Math.cos(I)*j+(Y.y+at.y)/2,ot=a(1,0,(W-P)/k,(X-j)/D),St=a((W-P)/k,(X-j)/D,(-W-P)/k,(-X-j)/D)%(Math.PI*2);Z.currentPath.absellipse(rt,ut,k,D,ot,ot+St,et===0,I)}function a(Z,k,D,I){let K=Z*D+k*I,et=Math.sqrt(Z*Z+k*k)*Math.sqrt(D*D+I*I),Y=Math.acos(Math.max(-1,Math.min(1,K/et)));return Z*I-k*D<0&&(Y=-Y),Y}function u(Z){let k=d(Z.getAttribute("x")||0),D=d(Z.getAttribute("y")||0),I=d(Z.getAttribute("rx")||Z.getAttribute("ry")||0),K=d(Z.getAttribute("ry")||Z.getAttribute("rx")||0),et=d(Z.getAttribute("width")),Y=d(Z.getAttribute("height")),at=1-.551915024494,mt=new un;return mt.moveTo(k+I,D),mt.lineTo(k+et-I,D),(I!==0||K!==0)&&mt.bezierCurveTo(k+et-I*at,D,k+et,D+K*at,k+et,D+K),mt.lineTo(k+et,D+Y-K),(I!==0||K!==0)&&mt.bezierCurveTo(k+et,D+Y-K*at,k+et-I*at,D+Y,k+et-I,D+Y),mt.lineTo(k+I,D+Y),(I!==0||K!==0)&&mt.bezierCurveTo(k+I*at,D+Y,k,D+Y-K*at,k,D+Y-K),mt.lineTo(k,D+K),(I!==0||K!==0)&&mt.bezierCurveTo(k,D+K*at,k+I*at,D,k+I,D),mt}function l(Z){function k(et,Y,at){let mt=d(Y),U=d(at);K===0?I.moveTo(mt,U):I.lineTo(mt,U),K++}let D=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,I=new un,K=0;return Z.getAttribute("points").replace(D,k),I.currentPath.autoClose=!0,I}function f(Z){function k(et,Y,at){let mt=d(Y),U=d(at);K===0?I.moveTo(mt,U):I.lineTo(mt,U),K++}let D=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,I=new un,K=0;return Z.getAttribute("points").replace(D,k),I.currentPath.autoClose=!1,I}function p(Z){let k=d(Z.getAttribute("cx")||0),D=d(Z.getAttribute("cy")||0),I=d(Z.getAttribute("r")||0),K=new Pn;K.absarc(k,D,I,0,Math.PI*2);let et=new un;return et.subPaths.push(K),et}function m(Z){let k=d(Z.getAttribute("cx")||0),D=d(Z.getAttribute("cy")||0),I=d(Z.getAttribute("rx")||0),K=d(Z.getAttribute("ry")||0),et=new Pn;et.absellipse(k,D,I,K,0,Math.PI*2);let Y=new un;return Y.subPaths.push(et),Y}function g(Z){let k=d(Z.getAttribute("x1")||0),D=d(Z.getAttribute("y1")||0),I=d(Z.getAttribute("x2")||0),K=d(Z.getAttribute("y2")||0),et=new un;return et.moveTo(k,D),et.lineTo(I,K),et.currentPath.autoClose=!1,et}function y(Z,k){k=Object.assign({},k);let D={};if(Z.hasAttribute("class")){let Y=Z.getAttribute("class").split(/\s/).filter(Boolean).map(at=>at.trim());for(let at=0;at<Y.length;at++)D=Object.assign(D,R["."+Y[at]])}Z.hasAttribute("id")&&(D=Object.assign(D,R["#"+Z.getAttribute("id")]));function I(Y,at,mt){mt===void 0&&(mt=function(W){return W.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),W}),Z.hasAttribute(Y)&&(k[at]=mt(Z.getAttribute(Y))),D[Y]&&(k[at]=mt(D[Y])),Z.style&&Z.style[Y]!==""&&(k[at]=mt(Z.style[Y]))}function K(Y){return Math.max(0,Math.min(1,d(Y)))}function et(Y){return Math.max(0,d(Y))}return I("fill","fill"),I("fill-opacity","fillOpacity",K),I("fill-rule","fillRule"),I("opacity","opacity",K),I("stroke","stroke"),I("stroke-opacity","strokeOpacity",K),I("stroke-width","strokeWidth",et),I("stroke-linejoin","strokeLineJoin"),I("stroke-linecap","strokeLineCap"),I("stroke-miterlimit","strokeMiterLimit",et),I("visibility","visibility"),k}function b(Z,k){return Z-(k-Z)}function x(Z,k,D){if(typeof Z!="string")throw new TypeError("Invalid input: "+typeof Z);let I={SEPARATOR:/[ \t\r\n\,.\-+]/,WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},K=0,et=1,Y=2,at=3,mt=K,U=!0,W="",X="",$=[];function J(gt,Tt,B){let P=new SyntaxError('Unexpected character "'+gt+'" at index '+Tt+".");throw P.partial=B,P}function G(){W!==""&&(X===""?$.push(Number(W)):$.push(Number(W)*Math.pow(10,Number(X)))),W="",X=""}let L,it=Z.length;for(let gt=0;gt<it;gt++){if(L=Z[gt],Array.isArray(k)&&k.includes($.length%D)&&I.FLAGS.test(L)){mt=et,W=L,G();continue}if(mt===K){if(I.WHITESPACE.test(L))continue;if(I.DIGIT.test(L)||I.SIGN.test(L)){mt=et,W=L;continue}if(I.POINT.test(L)){mt=Y,W=L;continue}I.COMMA.test(L)&&(U&&J(L,gt,$),U=!0)}if(mt===et){if(I.DIGIT.test(L)){W+=L;continue}if(I.POINT.test(L)){W+=L,mt=Y;continue}if(I.EXP.test(L)){mt=at;continue}I.SIGN.test(L)&&W.length===1&&I.SIGN.test(W[0])&&J(L,gt,$)}if(mt===Y){if(I.DIGIT.test(L)){W+=L;continue}if(I.EXP.test(L)){mt=at;continue}I.POINT.test(L)&&W[W.length-1]==="."&&J(L,gt,$)}if(mt===at){if(I.DIGIT.test(L)){X+=L;continue}if(I.SIGN.test(L)){if(X===""){X+=L;continue}X.length===1&&I.SIGN.test(X)&&J(L,gt,$)}}I.WHITESPACE.test(L)?(G(),mt=K,U=!1):I.COMMA.test(L)?(G(),mt=K,U=!0):I.SIGN.test(L)?(G(),mt=et,W=L):I.POINT.test(L)?(G(),mt=Y,W=L):J(L,gt,$)}return G(),$}let _=["mm","cm","in","pt","pc","px"],T={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function d(Z){let k="px";if(typeof Z=="string"||Z instanceof String)for(let I=0,K=_.length;I<K;I++){let et=_[I];if(Z.endsWith(et)){k=et,Z=Z.substring(0,Z.length-et.length);break}}let D;return k==="px"&&e.defaultUnit!=="px"?D=T.in[e.defaultUnit]/e.defaultDPI:(D=T[k][e.defaultUnit],D<0&&(D=T[k].in*e.defaultDPI)),D*parseFloat(Z)}function c(Z){if(!(Z.hasAttribute("transform")||Z.nodeName==="use"&&(Z.hasAttribute("x")||Z.hasAttribute("y"))))return null;let k=v(Z);return z.length>0&&k.premultiply(z[z.length-1]),ft.copy(k),z.push(k),k}function v(Z){let k=new kt,D=V;if(Z.nodeName==="use"&&(Z.hasAttribute("x")||Z.hasAttribute("y"))){let I=d(Z.getAttribute("x")),K=d(Z.getAttribute("y"));k.translate(I,K)}if(Z.hasAttribute("transform")){let I=Z.getAttribute("transform").split(")");for(let K=I.length-1;K>=0;K--){let et=I[K].trim();if(et==="")continue;let Y=et.indexOf("("),at=et.length;if(Y>0&&Y<at){let mt=et.slice(0,Y),U=x(et.slice(Y+1));switch(D.identity(),mt){case"translate":if(U.length>=1){let W=U[0],X=0;U.length>=2&&(X=U[1]),D.translate(W,X)}break;case"rotate":if(U.length>=1){let W=0,X=0,$=0;W=U[0]*Math.PI/180,U.length>=3&&(X=U[1],$=U[2]),H.makeTranslation(-X,-$),q.makeRotation(W),O.multiplyMatrices(q,H),H.makeTranslation(X,$),D.multiplyMatrices(H,O)}break;case"scale":if(U.length>=1){let W=U[0],X=W;U.length>=2&&(X=U[1]),D.scale(W,X)}break;case"skewX":U.length===1&&D.set(1,Math.tan(U[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":U.length===1&&D.set(1,0,0,Math.tan(U[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":U.length===6&&D.set(U[0],U[2],U[4],U[1],U[3],U[5],0,0,1);break}}k.premultiply(D)}}return k}function h(Z,k){function D(Y){dt.set(Y.x,Y.y,1).applyMatrix3(k),Y.set(dt.x,dt.y)}function I(Y){let at=Y.xRadius,mt=Y.yRadius,U=Math.cos(Y.aRotation),W=Math.sin(Y.aRotation),X=new F(at*U,at*W,0),$=new F(-mt*W,mt*U,0),J=X.applyMatrix3(k),G=$.applyMatrix3(k),L=V.set(J.x,G.x,0,J.y,G.y,0,0,0,1),it=H.copy(L).invert(),B=q.copy(it).transpose().multiply(it).elements,P=w(B[0],B[1],B[4]),j=Math.sqrt(P.rt1),rt=Math.sqrt(P.rt2);if(Y.xRadius=1/j,Y.yRadius=1/rt,Y.aRotation=Math.atan2(P.sn,P.cs),!((Y.aEndAngle-Y.aStartAngle)%(2*Math.PI)<Number.EPSILON)){let ot=H.set(j,0,0,0,rt,0,0,0,1),St=q.set(P.cs,P.sn,0,-P.sn,P.cs,0,0,0,1),yt=ot.multiply(St).multiply(L),Dt=Pt=>{let{x:xt,y:Ct}=new F(Math.cos(Pt),Math.sin(Pt),0).applyMatrix3(yt);return Math.atan2(Ct,xt)};Y.aStartAngle=Dt(Y.aStartAngle),Y.aEndAngle=Dt(Y.aEndAngle),C(k)&&(Y.aClockwise=!Y.aClockwise)}}function K(Y){let at=S(k),mt=M(k);Y.xRadius*=at,Y.yRadius*=mt;let U=at>Number.EPSILON?Math.atan2(k.elements[1],k.elements[0]):Math.atan2(-k.elements[3],k.elements[4]);Y.aRotation+=U,C(k)&&(Y.aStartAngle*=-1,Y.aEndAngle*=-1,Y.aClockwise=!Y.aClockwise)}let et=Z.subPaths;for(let Y=0,at=et.length;Y<at;Y++){let U=et[Y].curves;for(let W=0;W<U.length;W++){let X=U[W];X.isLineCurve?(D(X.v1),D(X.v2)):X.isCubicBezierCurve?(D(X.v0),D(X.v1),D(X.v2),D(X.v3)):X.isQuadraticBezierCurve?(D(X.v0),D(X.v1),D(X.v2)):X.isEllipseCurve&&(st.set(X.aX,X.aY),D(st),X.aX=st.x,X.aY=st.y,A(k)?I(X):K(X))}}}function C(Z){let k=Z.elements;return k[0]*k[4]-k[1]*k[3]<0}function A(Z){let k=Z.elements,D=k[0]*k[3]+k[1]*k[4];if(D===0)return!1;let I=S(Z),K=M(Z);return Math.abs(D/(I*K))>Number.EPSILON}function S(Z){let k=Z.elements;return Math.sqrt(k[0]*k[0]+k[1]*k[1])}function M(Z){let k=Z.elements;return Math.sqrt(k[3]*k[3]+k[4]*k[4])}function w(Z,k,D){let I,K,et,Y,at,mt=Z+D,U=Z-D,W=Math.sqrt(U*U+4*k*k);return mt>0?(I=.5*(mt+W),at=1/I,K=Z*at*D-k*at*k):mt<0?K=.5*(mt-W):(I=.5*W,K=-.5*W),U>0?et=U+W:et=U-W,Math.abs(et)>2*Math.abs(k)?(at=-2*k/et,Y=1/Math.sqrt(1+at*at),et=at*Y):Math.abs(k)===0?(et=1,Y=0):(at=-.5*et/k,et=1/Math.sqrt(1+at*at),Y=at*et),U>0&&(at=et,et=-Y,Y=at),{rt1:I,rt2:K,cs:et,sn:Y}}let E=[],R={},z=[],V=new kt,H=new kt,q=new kt,O=new kt,st=new ht,dt=new F,ft=new kt,_t=new DOMParser().parseFromString(t,"image/svg+xml");return n(_t.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:E,xml:_t.documentElement}}static createShapes(t){let n={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},r={loc:n.ORIGIN,t:0};function s(b,x,_,T){let d=b.x,c=x.x,v=_.x,h=T.x,C=b.y,A=x.y,S=_.y,M=T.y,w=(h-v)*(C-S)-(M-S)*(d-v),E=(c-d)*(C-S)-(A-C)*(d-v),R=(M-S)*(c-d)-(h-v)*(A-C),z=w/R,V=E/R;if(R===0&&w!==0||z<=0||z>=1||V<0||V>1)return null;if(w===0&&R===0){for(let H=0;H<2;H++)if(o(H===0?_:T,b,x),r.loc==n.ORIGIN){let q=H===0?_:T;return{x:q.x,y:q.y,t:r.t}}else if(r.loc==n.BETWEEN){let q=+(d+r.t*(c-d)).toPrecision(10),O=+(C+r.t*(A-C)).toPrecision(10);return{x:q,y:O,t:r.t}}return null}else{for(let O=0;O<2;O++)if(o(O===0?_:T,b,x),r.loc==n.ORIGIN){let st=O===0?_:T;return{x:st.x,y:st.y,t:r.t}}let H=+(d+z*(c-d)).toPrecision(10),q=+(C+z*(A-C)).toPrecision(10);return{x:H,y:q,t:z}}}function o(b,x,_){let T=_.x-x.x,d=_.y-x.y,c=b.x-x.x,v=b.y-x.y,h=T*v-c*d;if(b.x===x.x&&b.y===x.y){r.loc=n.ORIGIN,r.t=0;return}if(b.x===_.x&&b.y===_.y){r.loc=n.DESTINATION,r.t=1;return}if(h<-Number.EPSILON){r.loc=n.LEFT;return}if(h>Number.EPSILON){r.loc=n.RIGHT;return}if(T*c<0||d*v<0){r.loc=n.BEHIND;return}if(Math.sqrt(T*T+d*d)<Math.sqrt(c*c+v*v)){r.loc=n.BEYOND;return}let C;T!==0?C=c/T:C=v/d,r.loc=n.BETWEEN,r.t=C}function a(b,x){let _=[],T=[];for(let d=1;d<b.length;d++){let c=b[d-1],v=b[d];for(let h=1;h<x.length;h++){let C=x[h-1],A=x[h],S=s(c,v,C,A);S!==null&&_.find(M=>M.t<=S.t+Number.EPSILON&&M.t>=S.t-Number.EPSILON)===void 0&&(_.push(S),T.push(new ht(S.x,S.y)))}}return T}function u(b,x,_){let T=new ht;x.getCenter(T);let d=[];return _.forEach(c=>{c.boundingBox.containsPoint(T)&&a(b,c.points).forEach(h=>{d.push({identifier:c.identifier,isCW:c.isCW,point:h})})}),d.sort((c,v)=>c.point.x-v.point.x),d}function l(b,x,_,T,d){(d==null||d==="")&&(d="nonzero");let c=new ht;b.boundingBox.getCenter(c);let v=[new ht(_,c.y),new ht(T,c.y)],h=u(v,b.boundingBox,x);h.sort((E,R)=>E.point.x-R.point.x);let C=[],A=[];h.forEach(E=>{E.identifier===b.identifier?C.push(E):A.push(E)});let S=C[0].point.x,M=[],w=0;for(;w<A.length&&A[w].point.x<S;)M.length>0&&M[M.length-1]===A[w].identifier?M.pop():M.push(A[w].identifier),w++;if(M.push(b.identifier),d==="evenodd"){let E=M.length%2===0,R=M[M.length-2];return{identifier:b.identifier,isHole:E,for:R}}else if(d==="nonzero"){let E=!0,R=null,z=null;for(let V=0;V<M.length;V++){let H=M[V];E?(z=x[H].isCW,E=!1,R=H):z!==x[H].isCW&&(z=x[H].isCW,E=!0)}return{identifier:b.identifier,isHole:E,for:R}}else console.warn('fill-rule: "'+d+'" is currently not implemented.')}let f=999999999,p=-999999999,m=t.subPaths.map(b=>{let x=b.getPoints(),_=-999999999,T=999999999,d=-999999999,c=999999999;for(let v=0;v<x.length;v++){let h=x[v];h.y>_&&(_=h.y),h.y<T&&(T=h.y),h.x>d&&(d=h.x),h.x<c&&(c=h.x)}return p<=d&&(p=d+1),f>=c&&(f=c-1),{curves:b.curves,points:x,isCW:Cn.isClockWise(x),identifier:-1,boundingBox:new $s(new ht(c,T),new ht(d,_))}});m=m.filter(b=>b.points.length>1);for(let b=0;b<m.length;b++)m[b].identifier=b;let g=m.map(b=>l(b,m,f,p,t.userData?t.userData.style.fillRule:void 0)),y=[];return m.forEach(b=>{if(!g[b.identifier].isHole){let _=new kn;_.curves=b.curves,g.filter(d=>d.isHole&&d.for===b.identifier).forEach(d=>{let c=m[d.identifier],v=new Pn;v.curves=c.curves,_.holes.push(v)}),y.push(_)}}),y}static getStrokeStyle(t,e,n,r,s){return t=t!==void 0?t:1,e=e!==void 0?e:"#000",n=n!==void 0?n:"miter",r=r!==void 0?r:"butt",s=s!==void 0?s:4,{strokeColor:e,strokeWidth:t,strokeLineJoin:n,strokeLineCap:r,strokeMiterLimit:s}}static pointsToStroke(t,e,n,r){let s=[],o=[],a=[];if(i.pointsToStrokeWithBuffers(t,e,n,r,s,o,a)===0)return null;let u=new Te;return u.setAttribute("position",new Kt(s,3)),u.setAttribute("normal",new Kt(o,3)),u.setAttribute("uv",new Kt(a,2)),u}static pointsToStrokeWithBuffers(t,e,n,r,s,o,a,u){let l=new ht,f=new ht,p=new ht,m=new ht,g=new ht,y=new ht,b=new ht,x=new ht,_=new ht,T=new ht,d=new ht,c=new ht,v=new ht,h=new ht,C=new ht,A=new ht,S=new ht;n=n!==void 0?n:12,r=r!==void 0?r:.001,u=u!==void 0?u:0,t=U(t);let M=t.length;if(M<2)return 0;let w=t[0].equals(t[M-1]),E,R=t[0],z,V=e.strokeWidth/2,H=1/(M-1),q=0,O,st,dt,ft,_t=!1,wt=0,Z=u*3,k=u*2;D(t[0],t[1],l).multiplyScalar(V),x.copy(t[0]).sub(l),_.copy(t[0]).add(l),T.copy(x),d.copy(_);for(let W=1;W<M;W++){E=t[W],W===M-1?w?z=t[1]:z=void 0:z=t[W+1];let X=l;if(D(R,E,X),p.copy(X).multiplyScalar(V),c.copy(E).sub(p),v.copy(E).add(p),O=q+H,st=!1,z!==void 0){D(E,z,f),p.copy(f).multiplyScalar(V),h.copy(E).sub(p),C.copy(E).add(p),dt=!0,p.subVectors(z,R),X.dot(p)<0&&(dt=!1),W===1&&(_t=dt),p.subVectors(z,E),p.normalize();let $=Math.abs(X.dot(p));if($>Number.EPSILON){let J=V/$;p.multiplyScalar(-J),m.subVectors(E,R),g.copy(m).setLength(J).add(p),A.copy(g).negate();let G=g.length(),L=m.length();m.divideScalar(L),y.subVectors(z,E);let it=y.length();switch(y.divideScalar(it),m.dot(A)<L&&y.dot(A)<it&&(st=!0),S.copy(g).add(E),A.add(E),ft=!1,st?dt?(C.copy(A),v.copy(A)):(h.copy(A),c.copy(A)):et(),e.strokeLineJoin){case"bevel":Y(dt,st,O);break;case"round":at(dt,st),dt?K(E,c,h,O,0):K(E,C,v,O,1);break;default:let gt=V*e.strokeMiterLimit/G;if(gt<1)if(e.strokeLineJoin!=="miter-clip"){Y(dt,st,O);break}else at(dt,st),dt?(y.subVectors(S,c).multiplyScalar(gt).add(c),b.subVectors(S,h).multiplyScalar(gt).add(h),I(c,O,0),I(y,O,0),I(E,O,.5),I(E,O,.5),I(y,O,0),I(b,O,0),I(E,O,.5),I(b,O,0),I(h,O,0)):(y.subVectors(S,v).multiplyScalar(gt).add(v),b.subVectors(S,C).multiplyScalar(gt).add(C),I(v,O,1),I(y,O,1),I(E,O,.5),I(E,O,.5),I(y,O,1),I(b,O,1),I(E,O,.5),I(b,O,1),I(C,O,1));else st?(dt?(I(_,q,1),I(x,q,0),I(S,O,0),I(_,q,1),I(S,O,0),I(A,O,1)):(I(_,q,1),I(x,q,0),I(S,O,1),I(x,q,0),I(A,O,0),I(S,O,1)),dt?h.copy(S):C.copy(S)):dt?(I(c,O,0),I(S,O,0),I(E,O,.5),I(E,O,.5),I(S,O,0),I(h,O,0)):(I(v,O,1),I(S,O,1),I(E,O,.5),I(E,O,.5),I(S,O,1),I(C,O,1)),ft=!0;break}}else et()}else et();!w&&W===M-1&&mt(t[0],T,d,dt,!0,q),q=O,R=E,x.copy(h),_.copy(C)}if(!w)mt(E,c,v,dt,!1,O);else if(st&&s){let W=S,X=A;_t!==dt&&(W=A,X=S),dt?(ft||_t)&&(X.toArray(s,0),X.toArray(s,9),ft&&W.toArray(s,3)):(ft||!_t)&&(X.toArray(s,3),X.toArray(s,9),ft&&W.toArray(s,0))}return wt;function D(W,X,$){return $.subVectors(X,W),$.set(-$.y,$.x).normalize()}function I(W,X,$){s&&(s[Z]=W.x,s[Z+1]=W.y,s[Z+2]=0,o&&(o[Z]=0,o[Z+1]=0,o[Z+2]=1),Z+=3,a&&(a[k]=X,a[k+1]=$,k+=2)),wt+=3}function K(W,X,$,J,G){l.copy(X).sub(W).normalize(),f.copy($).sub(W).normalize();let L=Math.PI,it=l.dot(f);Math.abs(it)<1&&(L=Math.abs(Math.acos(it))),L/=n,p.copy(X);for(let gt=0,Tt=n-1;gt<Tt;gt++)m.copy(p).rotateAround(W,L),I(p,J,G),I(m,J,G),I(W,J,.5),p.copy(m);I(m,J,G),I($,J,G),I(W,J,.5)}function et(){I(_,q,1),I(x,q,0),I(c,O,0),I(_,q,1),I(c,O,0),I(v,O,1)}function Y(W,X,$){X?W?(I(_,q,1),I(x,q,0),I(c,O,0),I(_,q,1),I(c,O,0),I(A,O,1),I(c,$,0),I(h,$,0),I(A,$,.5)):(I(_,q,1),I(x,q,0),I(v,O,1),I(x,q,0),I(A,O,0),I(v,O,1),I(v,$,1),I(A,$,0),I(C,$,1)):W?(I(c,$,0),I(h,$,0),I(E,$,.5)):(I(v,$,1),I(C,$,0),I(E,$,.5))}function at(W,X){X&&(W?(I(_,q,1),I(x,q,0),I(c,O,0),I(_,q,1),I(c,O,0),I(A,O,1),I(c,q,0),I(E,O,.5),I(A,O,1),I(E,O,.5),I(h,q,0),I(A,O,1)):(I(_,q,1),I(x,q,0),I(v,O,1),I(x,q,0),I(A,O,0),I(v,O,1),I(v,q,1),I(A,O,0),I(E,O,.5),I(E,O,.5),I(A,O,0),I(C,q,1)))}function mt(W,X,$,J,G,L){switch(e.strokeLineCap){case"round":G?K(W,$,X,L,.5):K(W,X,$,L,.5);break;case"square":if(G)l.subVectors(X,W),f.set(l.y,-l.x),p.addVectors(l,f).add(W),m.subVectors(f,l).add(W),J?(p.toArray(s,3),m.toArray(s,0),m.toArray(s,9)):(p.toArray(s,3),a[7]===1?m.toArray(s,9):p.toArray(s,9),m.toArray(s,0));else{l.subVectors($,W),f.set(l.y,-l.x),p.addVectors(l,f).add(W),m.subVectors(f,l).add(W);let it=s.length;J?(p.toArray(s,it-3),m.toArray(s,it-6),m.toArray(s,it-12)):(m.toArray(s,it-6),p.toArray(s,it-3),m.toArray(s,it-12))}break;default:break}}function U(W){let X=!1;for(let J=1,G=W.length-1;J<G;J++)if(W[J].distanceTo(W[J+1])<r){X=!0;break}if(!X)return W;let $=[];$.push(W[0]);for(let J=1,G=W.length-1;J<G;J++)W[J].distanceTo(W[J+1])>=r&&$.push(W[J]);return $.push(W[W.length-1]),$}}};var du=class extends Dn{constructor(t){super(t)}load(t,e,n,r){let s=this,o=new ii(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){let u=s.parse(JSON.parse(a));e&&e(u)},n,r)}parse(t){return new Xc(t)}},Xc=class{constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,e=100){let n=[],r=vM(t,e,this.data);for(let s=0,o=r.length;s<o;s++)n.push(...r[s].toShapes());return n}};function vM(i,t,e){let n=Array.from(i),r=t/e.resolution,s=(e.boundingBox.yMax-e.boundingBox.yMin+e.underlineThickness)*r,o=[],a=0,u=0;for(let l=0;l<n.length;l++){let f=n[l];if(f===`
`)a=0,u-=s;else{let p=MM(f,r,a,u,e);a+=p.offsetX,o.push(p.path)}}return o}function MM(i,t,e,n,r){let s=r.glyphs[i]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+i+'" does not exists in font family '+r.familyName+".");return}let o=new un,a,u,l,f,p,m,g,y;if(s.o){let b=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let x=0,_=b.length;x<_;)switch(b[x++]){case"m":a=b[x++]*t+e,u=b[x++]*t+n,o.moveTo(a,u);break;case"l":a=b[x++]*t+e,u=b[x++]*t+n,o.lineTo(a,u);break;case"q":l=b[x++]*t+e,f=b[x++]*t+n,p=b[x++]*t+e,m=b[x++]*t+n,o.quadraticCurveTo(p,m,l,f);break;case"b":l=b[x++]*t+e,f=b[x++]*t+n,p=b[x++]*t+e,m=b[x++]*t+n,g=b[x++]*t+e,y=b[x++]*t+n,o.bezierCurveTo(p,m,g,y,l,f);break}}return{offsetX:s.ha*t,path:o}}var pu=class extends Br{constructor(t,e={}){let n=e.font;if(n===void 0)super();else{let r=n.generateShapes(t,e.size);e.depth===void 0&&(e.depth=50),e.bevelThickness===void 0&&(e.bevelThickness=10),e.bevelSize===void 0&&(e.bevelSize=8),e.bevelEnabled===void 0&&(e.bevelEnabled=!1),super(r,e)}this.type="TextGeometry"}};var ro=new F;function Mn(i,t,e,n,r,s){let o=2*Math.PI*r/4,a=Math.max(s-2*r,0),u=Math.PI/4;ro.copy(t),ro[n]=0,ro.normalize();let l=.5*o/(o+a),f=1-ro.angleTo(i)/u;return Math.sign(ro[e])===1?f*l:a/(o+a)+l+l*(1-f)}var mu=class i extends ni{constructor(t=1,e=1,n=1,r=2,s=.1){let o=r*2+1;if(s=Math.min(t/2,e/2,n/2,s),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:r,radius:s},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let u=new F,l=new F,f=new F(t,e,n).divideScalar(2).subScalar(s),p=this.attributes.position.array,m=this.attributes.normal.array,g=this.attributes.uv.array,y=p.length/6,b=new F,x=.5/o;for(let _=0,T=0;_<p.length;_+=3,T+=2)switch(u.fromArray(p,_),l.copy(u),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),p[_+0]=f.x*Math.sign(u.x)+l.x*s,p[_+1]=f.y*Math.sign(u.y)+l.y*s,p[_+2]=f.z*Math.sign(u.z)+l.z*s,m[_+0]=l.x,m[_+1]=l.y,m[_+2]=l.z,Math.floor(_/y)){case 0:b.set(1,0,0),g[T+0]=Mn(b,l,"z","y",s,n),g[T+1]=1-Mn(b,l,"y","z",s,e);break;case 1:b.set(-1,0,0),g[T+0]=1-Mn(b,l,"z","y",s,n),g[T+1]=1-Mn(b,l,"y","z",s,e);break;case 2:b.set(0,1,0),g[T+0]=1-Mn(b,l,"x","z",s,t),g[T+1]=Mn(b,l,"z","x",s,n);break;case 3:b.set(0,-1,0),g[T+0]=1-Mn(b,l,"x","z",s,t),g[T+1]=1-Mn(b,l,"z","x",s,n);break;case 4:b.set(0,0,1),g[T+0]=1-Mn(b,l,"x","y",s,t),g[T+1]=1-Mn(b,l,"y","x",s,e);break;case 5:b.set(0,0,-1),g[T+0]=Mn(b,l,"x","y",s,t),g[T+1]=1-Mn(b,l,"y","x",s,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};function SM(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},o={},a=i[0].morphTargetsRelative,u=new Te,l=0;for(let f=0;f<i.length;++f){let p=i[f],m=0;if(e!==(p.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let g in p.attributes){if(!n.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;s[g]===void 0&&(s[g]=[]),s[g].push(p.attributes[g]),m++}if(m!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". Make sure all geometries have the same number of attributes."),null;if(a!==p.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let g in p.morphAttributes){if(!r.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+".  .morphAttributes must be consistent throughout all geometries."),null;o[g]===void 0&&(o[g]=[]),o[g].push(p.morphAttributes[g])}if(t){let g;if(e)g=p.index.count;else if(p.attributes.position!==void 0)g=p.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". The geometry must have either an index or a position attribute"),null;u.addGroup(l,g,f),l+=g}}if(e){let f=0,p=[];for(let m=0;m<i.length;++m){let g=i[m].index;for(let y=0;y<g.count;++y)p.push(g.getX(y)+f);f+=i[m].attributes.position.count}u.setIndex(p)}for(let f in s){let p=Mp(s[f]);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" attribute."),null;u.setAttribute(f,p)}for(let f in o){let p=o[f][0].length;if(p===0)break;u.morphAttributes=u.morphAttributes||{},u.morphAttributes[f]=[];for(let m=0;m<p;++m){let g=[];for(let b=0;b<o[f].length;++b)g.push(o[f][b][m]);let y=Mp(g);if(!y)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" morphAttribute."),null;u.morphAttributes[f].push(y)}}return u}function Mp(i){let t,e,n,r=-1,s=0;for(let l=0;l<i.length;++l){let f=i[l];if(t===void 0&&(t=f.array.constructor),t!==f.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=f.itemSize),e!==f.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=f.normalized),n!==f.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=f.gpuType),r!==f.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=f.count*e}let o=new t(s),a=new pe(o,e,n),u=0;for(let l=0;l<i.length;++l){let f=i[l];if(f.isInterleavedBufferAttribute){let p=u/e;for(let m=0,g=f.count;m<g;m++)for(let y=0;y<e;y++){let b=f.getComponent(m,y);a.setComponent(m+p,y,b)}}else o.set(f.array,u);u+=f.count*e}return r!==void 0&&(a.gpuType=r),a}function bM(i,t=1e-4){t=Math.max(t,Number.EPSILON);let e={},n=i.getIndex(),r=i.getAttribute("position"),s=n?n.count:r.count,o=0,a=Object.keys(i.attributes),u={},l={},f=[],p=["getX","getY","getZ","getW"],m=["setX","setY","setZ","setW"];for(let T=0,d=a.length;T<d;T++){let c=a[T],v=i.attributes[c];u[c]=new v.constructor(new v.array.constructor(v.count*v.itemSize),v.itemSize,v.normalized);let h=i.morphAttributes[c];h&&(l[c]||(l[c]=[]),h.forEach((C,A)=>{let S=new C.array.constructor(C.count*C.itemSize);l[c][A]=new C.constructor(S,C.itemSize,C.normalized)}))}let g=t*.5,y=Math.log10(1/t),b=Math.pow(10,y),x=g*b;for(let T=0;T<s;T++){let d=n?n.getX(T):T,c="";for(let v=0,h=a.length;v<h;v++){let C=a[v],A=i.getAttribute(C),S=A.itemSize;for(let M=0;M<S;M++)c+=`${~~(A[p[M]](d)*b+x)},`}if(c in e)f.push(e[c]);else{for(let v=0,h=a.length;v<h;v++){let C=a[v],A=i.getAttribute(C),S=i.morphAttributes[C],M=A.itemSize,w=u[C],E=l[C];for(let R=0;R<M;R++){let z=p[R],V=m[R];if(w[V](o,A[z](d)),S)for(let H=0,q=S.length;H<q;H++)E[H][V](o,S[H][z](d))}}e[c]=o,f.push(o),o++}}let _=i.clone();for(let T in i.attributes){let d=u[T];if(_.setAttribute(T,new d.constructor(d.array.slice(0,o*d.itemSize),d.itemSize,d.normalized)),T in l)for(let c=0;c<l[T].length;c++){let v=l[T][c];_.morphAttributes[T][c]=new v.constructor(v.array.slice(0,o*v.itemSize),v.itemSize,v.normalized)}}return _.setIndex(f),_}var Jr=Math.pow(2,-24),so=Symbol("SKIP_GENERATION"),qc={strategy:0,maxDepth:40,targetLeafSize:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null,[so]:!1};function me(i,t,e){return e.min.x=t[i],e.min.y=t[i+1],e.min.z=t[i+2],e.max.x=t[i+3],e.max.y=t[i+4],e.max.z=t[i+5],e}function oo(i){let t=-1,e=-1/0;for(let n=0;n<3;n++){let r=i[n+3]-i[n];r>e&&(e=r,t=n)}return t}function gu(i,t){t.set(i)}function _u(i,t,e){let n,r;for(let s=0;s<3;s++){let o=s+3;n=i[s],r=t[s],e[s]=n<r?n:r,n=i[o],r=t[o],e[o]=n>r?n:r}}function ao(i,t,e){for(let n=0;n<3;n++){let r=t[i+2*n],s=t[i+2*n+1],o=r-s,a=r+s;o<e[n]&&(e[n]=o),a>e[n+3]&&(e[n+3]=a)}}function Kr(i){let t=i[3]-i[0],e=i[4]-i[1],n=i[5]-i[2];return 2*(t*e+e*n+n*t)}function jt(i,t){return t[i+15]===65535}function oe(i,t){return t[i+6]}function fe(i,t){return t[i+14]}function ne(i){return i+8}function ie(i,t){let e=t[i+6];return i+e*8}function jr(i,t){return t[i+7]}function Yc(i,t,e,n,r){let s=1/0,o=1/0,a=1/0,u=-1/0,l=-1/0,f=-1/0,p=1/0,m=1/0,g=1/0,y=-1/0,b=-1/0,x=-1/0,_=i.offset||0;for(let T=(t-_)*6,d=(t+e-_)*6;T<d;T+=6){let c=i[T+0],v=i[T+1],h=c-v,C=c+v;h<s&&(s=h),C>u&&(u=C),c<p&&(p=c),c>y&&(y=c);let A=i[T+2],S=i[T+3],M=A-S,w=A+S;M<o&&(o=M),w>l&&(l=w),A<m&&(m=A),A>b&&(b=A);let E=i[T+4],R=i[T+5],z=E-R,V=E+R;z<a&&(a=z),V>f&&(f=V),E<g&&(g=E),E>x&&(x=E)}n[0]=s,n[1]=o,n[2]=a,n[3]=u,n[4]=l,n[5]=f,r[0]=p,r[1]=m,r[2]=g,r[3]=y,r[4]=b,r[5]=x}var ai=32,EM=(i,t)=>i.candidate-t.candidate,Ei=new Array(ai).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),Zc=new Float32Array(6);function bp(i,t,e,n,r,s){let o=-1,a=0;if(s===0)o=oo(t),o!==-1&&(a=(t[o]+t[o+3])/2);else if(s===1)o=oo(i),o!==-1&&(a=AM(e,n,r,o));else if(s===2){let u=Kr(i),l=1.25*r,f=e.offset||0,p=(n-f)*6,m=(n+r-f)*6;for(let g=0;g<3;g++){let y=t[g],_=(t[g+3]-y)/ai;if(r<ai/4){let T=[...Ei];T.length=r;let d=0;for(let v=p;v<m;v+=6,d++){let h=T[d];h.candidate=e[v+2*g],h.count=0;let{bounds:C,leftCacheBounds:A,rightCacheBounds:S}=h;for(let M=0;M<3;M++)S[M]=1/0,S[M+3]=-1/0,A[M]=1/0,A[M+3]=-1/0,C[M]=1/0,C[M+3]=-1/0;ao(v,e,C)}T.sort(EM);let c=r;for(let v=0;v<c;v++){let h=T[v];for(;v+1<c&&T[v+1].candidate===h.candidate;)T.splice(v+1,1),c--}for(let v=p;v<m;v+=6){let h=e[v+2*g];for(let C=0;C<c;C++){let A=T[C];h>=A.candidate?ao(v,e,A.rightCacheBounds):(ao(v,e,A.leftCacheBounds),A.count++)}}for(let v=0;v<c;v++){let h=T[v],C=h.count,A=r-h.count,S=h.leftCacheBounds,M=h.rightCacheBounds,w=0;C!==0&&(w=Kr(S)/u);let E=0;A!==0&&(E=Kr(M)/u);let R=1+1.25*(w*C+E*A);R<l&&(o=g,l=R,a=h.candidate)}}else{for(let c=0;c<ai;c++){let v=Ei[c];v.count=0,v.candidate=y+_+c*_;let h=v.bounds;for(let C=0;C<3;C++)h[C]=1/0,h[C+3]=-1/0}for(let c=p;c<m;c+=6){let C=~~((e[c+2*g]-y)/_);C>=ai&&(C=ai-1);let A=Ei[C];A.count++,ao(c,e,A.bounds)}let T=Ei[ai-1];gu(T.bounds,T.rightCacheBounds);for(let c=ai-2;c>=0;c--){let v=Ei[c],h=Ei[c+1];_u(v.bounds,h.rightCacheBounds,v.rightCacheBounds)}let d=0;for(let c=0;c<ai-1;c++){let v=Ei[c],h=v.count,C=v.bounds,S=Ei[c+1].rightCacheBounds;h!==0&&(d===0?gu(C,Zc):_u(C,Zc,Zc)),d+=h;let M=0,w=0;d!==0&&(M=Kr(Zc)/u);let E=r-d;E!==0&&(w=Kr(S)/u);let R=1+1.25*(M*d+w*E);R<l&&(o=g,l=R,a=v.candidate)}}}}else console.warn(`BVH: Invalid build strategy value ${s} used.`);return{axis:o,pos:a}}function AM(i,t,e,n){let r=0,s=i.offset;for(let o=t,a=t+e;o<a;o++)r+=i[(o-s)*6+n*2];return r/e}var Qr=class{constructor(){this.boundingData=new Float32Array(6)}};function Tp(i,t,e,n,r,s){let o=n,a=n+r-1,u=s.pos,l=s.axis*2,f=e.offset||0;for(;;){for(;o<=a&&e[(o-f)*6+l]<u;)o++;for(;o<=a&&e[(a-f)*6+l]>=u;)a--;if(o<a){for(let p=0;p<t;p++){let m=i[o*t+p];i[o*t+p]=i[a*t+p],i[a*t+p]=m}for(let p=0;p<6;p++){let m=o-f,g=a-f,y=e[m*6+p];e[m*6+p]=e[g*6+p],e[g*6+p]=y}o++,a--}else return o}}var wp,$c,xu,Ep,CM=Math.pow(2,32);function Jc(i){return"count"in i?1:1+Jc(i.left)+Jc(i.right)}function Ap(i,t,e){return wp=new Float32Array(e),$c=new Uint32Array(e),xu=new Uint16Array(e),Ep=new Uint8Array(e),yu(i,t)}function yu(i,t){let e=i/4,n=i/2,r="count"in t,s=t.boundingData;for(let o=0;o<6;o++)wp[e+o]=s[o];if(r)return t.buffer?(Ep.set(new Uint8Array(t.buffer),i),i+t.buffer.byteLength):($c[e+6]=t.offset,xu[n+14]=t.count,xu[n+15]=65535,i+32);{let{left:o,right:a,splitAxis:u}=t,l=i+32,f=yu(l,o),p=i/32,g=f/32-p;if(g>CM)throw new Error("MeshBVH: Cannot store relative child node offset greater than 32 bits.");return $c[e+6]=g,$c[e+7]=u,yu(f,a)}}function RM(i,t,e,n,r,s){let{maxDepth:o,verbose:a,targetLeafSize:u,_strictLeafSize:l=1/0,strategy:f,onProgress:p}=r,m=i.primitiveBuffer,g=i.primitiveBufferStride,y=new Float32Array(6),b=!1,x=new Qr;return Yc(t,e,n,x.boundingData,y),T(x,e,n,y),x;function _(d){p&&p((d-s.offset)/s.count)}function T(d,c,v,h=null,C=0){!b&&C>=o&&(b=!0,a&&console.warn(`BVH: Max depth of ${o} reached when generating BVH. Consider increasing maxDepth.`));let A=v>l;if(v<=u&&!A||C>=o)return _(c+v),d.offset=c,d.count=v,d;let S=bp(d.boundingData,h,t,c,v,f),M=S.axis===-1?-1:Tp(m,g,t,c,v,S);if(S.axis===-1||M===c||M===c+v){if(!A)return _(c+v),d.offset=c,d.count=v,d;S.axis=Math.max(0,oo(d.boundingData)),M=c+Math.max(1,Math.floor(v/2))}d.splitAxis=S.axis;let w=new Qr,E=c,R=M-c;d.left=w,Yc(t,E,R,w.boundingData,y),T(w,E,R,y,C+1);let z=new Qr,V=M,H=v-R;return d.right=z,Yc(t,V,H,z.boundingData,y),T(z,V,H,y,C+1),d}}function Cp(i,t){let e=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,n=i.getRootRanges(t.range),r=n[0],s=n[n.length-1],o={offset:r.offset,count:s.offset+s.count-r.offset},a=new Float32Array(6*o.count);a.offset=o.offset,i.computePrimitiveBounds(o.offset,o.count,a),i._roots=n.map(u=>{let l=RM(i,a,u.offset,u.count,t,o),f=Jc(l),p=new e(32*f);return Ap(0,l,p),p})}var Ai=class{constructor(t){this._getNewPrimitive=t,this._primitives=[]}getPrimitive(){let t=this._primitives;return t.length===0?this._getNewPrimitive():t.pop()}releasePrimitive(t){this._primitives.push(t)}};var vu=class{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;let t=[],e=null;this.setBuffer=n=>{e&&t.push(e),e=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{e=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,t.length!==0&&this.setBuffer(t.pop())}}},te=new vu;var Ci,es,ts=[],Kc=new Ai(()=>new ve);function Rp(i,t,e,n,r,s){Ci=Kc.getPrimitive(),es=Kc.getPrimitive(),ts.push(Ci,es),te.setBuffer(i._roots[t]);let o=Mu(0,i.geometry,e,n,r,s);te.clearBuffer(),Kc.releasePrimitive(Ci),Kc.releasePrimitive(es),ts.pop(),ts.pop();let a=ts.length;return a>0&&(es=ts[a-1],Ci=ts[a-2]),o}function Mu(i,t,e,n,r=null,s=0,o=0){let{float32Array:a,uint16Array:u,uint32Array:l}=te,f=i*2;if(jt(f,u)){let m=oe(i,l),g=fe(f,u);return me(i,a,Ci),n(m,g,!1,o,s+i/8,Ci)}else{let M=function(E){let{uint16Array:R,uint32Array:z}=te,V=E*2;for(;!jt(V,R);)E=ne(E),V=E*2;return oe(E,z)},w=function(E){let{uint16Array:R,uint32Array:z}=te,V=E*2;for(;!jt(V,R);)E=ie(E,z),V=E*2;return oe(E,z)+fe(V,R)},m=ne(i),g=ie(i,l),y=m,b=g,x,_,T,d;if(r&&(T=Ci,d=es,me(y,a,T),me(b,a,d),x=r(T),_=r(d),_<x)){y=g,b=m;let E=x;x=_,_=E,T=d}T||(T=Ci,me(y,a,T));let c=jt(y*2,u),v=e(T,c,x,o+1,s+y/8),h;if(v===2){let E=M(y),z=w(y)-E;h=n(E,z,!0,o+1,s+y/8,T)}else h=v&&Mu(y,t,e,n,r,s,o+1);if(h)return!0;d=es,me(b,a,d);let C=jt(b*2,u),A=e(d,C,_,o+1,s+b/8),S;if(A===2){let E=M(b),z=w(b)-E;S=n(E,z,!0,o+1,s+b/8,d)}else S=A&&Mu(b,t,e,n,r,s,o+1);return!!S}}var co=new te.constructor,jc=new te.constructor,Ri=new Ai(()=>new ve),ns=new ve,is=new ve,bu=new ve,Tu=new ve,wu=!1;function Ip(i,t,e,n){if(wu)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");wu=!0;let r=i._roots,s=t._roots,o,a=0,u=0,l=new Gt().copy(e).invert();for(let f=0,p=r.length;f<p;f++){co.setBuffer(r[f]),u=0;let m=Ri.getPrimitive();me(0,co.float32Array,m),m.applyMatrix4(l);for(let g=0,y=s.length;g<y&&(jc.setBuffer(s[g]),o=Nn(0,0,e,l,n,a,u,0,0,m),jc.clearBuffer(),u+=s[g].byteLength/32,!o);g++);if(Ri.releasePrimitive(m),co.clearBuffer(),a+=r[f].byteLength/32,o)break}return wu=!1,o}function Nn(i,t,e,n,r,s=0,o=0,a=0,u=0,l=null,f=!1){let p,m;f?(p=jc,m=co):(p=co,m=jc);let g=p.float32Array,y=p.uint32Array,b=p.uint16Array,x=m.float32Array,_=m.uint32Array,T=m.uint16Array,d=i*2,c=t*2,v=jt(d,b),h=jt(c,T),C=!1;if(h&&v)f?C=r(oe(t,_),fe(t*2,T),oe(i,y),fe(i*2,b),u,o+t/8,a,s+i/8):C=r(oe(i,y),fe(i*2,b),oe(t,_),fe(t*2,T),a,s+i/8,u,o+t/8);else if(h){let A=Ri.getPrimitive();me(t,x,A),A.applyMatrix4(e);let S=ne(i),M=ie(i,y);me(S,g,ns),me(M,g,is);let w=A.intersectsBox(ns),E=A.intersectsBox(is);C=w&&Nn(t,S,n,e,r,o,s,u,a+1,A,!f)||E&&Nn(t,M,n,e,r,o,s,u,a+1,A,!f),Ri.releasePrimitive(A)}else{let A=ne(t),S=ie(t,_);me(A,x,bu),me(S,x,Tu);let M=l.intersectsBox(bu),w=l.intersectsBox(Tu);if(M&&w)C=Nn(i,A,e,n,r,s,o,a,u+1,l,f)||Nn(i,S,e,n,r,s,o,a,u+1,l,f);else if(M)if(v)C=Nn(i,A,e,n,r,s,o,a,u+1,l,f);else{let E=Ri.getPrimitive();E.copy(bu).applyMatrix4(e);let R=ne(i),z=ie(i,y);me(R,g,ns),me(z,g,is);let V=E.intersectsBox(ns),H=E.intersectsBox(is);C=V&&Nn(A,R,n,e,r,o,s,u,a+1,E,!f)||H&&Nn(A,z,n,e,r,o,s,u,a+1,E,!f),Ri.releasePrimitive(E)}else if(w)if(v)C=Nn(i,S,e,n,r,s,o,a,u+1,l,f);else{let E=Ri.getPrimitive();E.copy(Tu).applyMatrix4(e);let R=ne(i),z=ie(i,y);me(R,g,ns),me(z,g,is);let V=E.intersectsBox(ns),H=E.intersectsBox(is);C=V&&Nn(S,R,n,e,r,o,s,u,a+1,E,!f)||H&&Nn(S,z,n,e,r,o,s,u,a+1,E,!f),Ri.releasePrimitive(E)}}return C}var Qc=new class{constructor(){let i=null,t=null,e=null,n=!1;this.root=null,this.buffer=null,this.uint32Array=null,this.uint16Array=null,this.setBVH=(s,o)=>{if(n)throw new Error("BVHTraversalHelper: cannot call setBVH during an active traversal.");this.root=o,this.buffer=i=s._roots[o],this.uint16Array=e=new Uint16Array(i),this.uint32Array=t=new Uint32Array(i)},this.reset=()=>{this.root=null,this.buffer=i=null,this.uint16Array=e=null,this.uint32Array=t=null},this.getRangeStart=s=>{let o=s*2;for(;!jt(o,e);)s=ne(s),o=s*2;return oe(s,t)},this.getRangeEnd=s=>{let o=s*2;for(;!jt(o,e);)s=ie(s,t),o=s*2;return oe(s,t)+fe(o,e)};let r=(s,o,a)=>{let u=o*2,l=jt(u,e);if(!s(a,l,o)&&!l){let p=ne(o),m=ie(o,t);r(s,p,a+1),r(s,m,a+1)}};this.traverseBuffer=s=>{if(n)throw new Error("BVHTraversalHelper: cannot start a traversal during an active traversal.");n=!0;try{r(s,0,0)}finally{n=!1}},this.traverse=s=>{this.traverseBuffer((o,a,u)=>{if(a){let l=u*2,f=t[u+6],p=e[l+14];return s(o,a,new Float32Array(i,u*4,6),f,p)}else{let l=jr(u,t);return s(o,a,new Float32Array(i,u*4,6),l)}})}}};var Pp=new ve,rs=new Float32Array(6),tl=class{constructor(){this._roots=null,this.primitiveBuffer=null,this.primitiveBufferStride=null}init(t){t={...qc,...t},"maxLeafSize"in t&&(console.warn('BVH: "maxLeafSize" option has been deprecated. Use "targetLeafSize", instead.'),t={...t,targetLeafSize:t.maxLeafSize}),Cp(this,t)}getRootRanges(){throw new Error("BVH: getRootRanges() not implemented")}writePrimitiveBounds(){throw new Error("BVH: writePrimitiveBounds() not implemented")}writePrimitiveRangeBounds(t,e,n,r){let s=1/0,o=1/0,a=1/0,u=-1/0,l=-1/0,f=-1/0;for(let p=t,m=t+e;p<m;p++){this.writePrimitiveBounds(p,rs,0);let[g,y,b,x,_,T]=rs;g<s&&(s=g),x>u&&(u=x),y<o&&(o=y),_>l&&(l=_),b<a&&(a=b),T>f&&(f=T)}return n[r+0]=s,n[r+1]=o,n[r+2]=a,n[r+3]=u,n[r+4]=l,n[r+5]=f,n}computePrimitiveBounds(t,e,n){let r=n.offset||0;for(let s=t,o=t+e;s<o;s++){this.writePrimitiveBounds(s,rs,0);let[a,u,l,f,p,m]=rs,g=(a+f)/2,y=(u+p)/2,b=(l+m)/2,x=(f-a)/2,_=(p-u)/2,T=(m-l)/2,d=(s-r)*6;n[d+0]=g,n[d+1]=x+(Math.abs(g)+x)*Jr,n[d+2]=y,n[d+3]=_+(Math.abs(y)+_)*Jr,n[d+4]=b,n[d+5]=T+(Math.abs(b)+T)*Jr}return n}shiftPrimitiveOffsets(t){let e=this._indirectBuffer;if(e)for(let n=0,r=e.length;n<r;n++)e[n]+=t;else{let n=this._roots;for(let r=0;r<n.length;r++){let s=n[r],o=new Uint32Array(s),a=new Uint16Array(s),u=s.byteLength/32;for(let l=0;l<u;l++){let f=8*l,p=2*f;jt(p,a)&&(o[f+6]+=t)}}}}traverse(t,e=0){Qc.setBVH(this,e),Qc.traverse(t),Qc.reset()}refit(){let t=this._roots;for(let e=0,n=t.length;e<n;e++){let r=t[e],s=new Uint32Array(r),o=new Uint16Array(r),a=new Float32Array(r),u=r.byteLength/32;for(let l=u-1;l>=0;l--){let f=l*8,p=f*2;if(jt(p,o)){let g=oe(f,s),y=fe(p,o);this.writePrimitiveRangeBounds(g,y,rs,0),a.set(rs,f)}else{let g=ne(f),y=ie(f,s);for(let b=0;b<3;b++){let x=a[g+b],_=a[g+b+3],T=a[y+b],d=a[y+b+3];a[f+b]=x<T?x:T,a[f+b+3]=_>d?_:d}}}}}getBoundingBox(t){return t.makeEmpty(),this._roots.forEach(n=>{me(0,new Float32Array(n),Pp),t.union(Pp)}),t}shapecast(t){let{boundsTraverseOrder:e,intersectsBounds:n,intersectsRange:r,intersectsPrimitive:s,scratchPrimitive:o,iterate:a}=t;if(r&&s){let p=r;r=(m,g,y,b,x)=>p(m,g,y,b,x)?!0:a(m,g,this,s,y,b,o)}else r||(s?r=(p,m,g,y)=>a(p,m,this,s,g,y,o):r=(p,m,g)=>g);let u=!1,l=0,f=this._roots;for(let p=0,m=f.length;p<m;p++){let g=f[p];if(u=Rp(this,p,n,r,e,l),u)break;l+=g.byteLength/32}return u}bvhcast(t,e,n){let{intersectsRanges:r}=n;return Ip(this,t,e,r)}};function Dp(){return typeof SharedArrayBuffer<"u"}function Eu(i){return i.index?i.index.count:i.attributes.position.count}function Ii(i){return Eu(i)/3}function PM(i,t=ArrayBuffer){return i>65535?new Uint32Array(new t(4*i)):new Uint16Array(new t(2*i))}function Lp(i,t){if(!i.index){let e=i.attributes.position.count,n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,r=PM(e,n);i.setIndex(new pe(r,1));for(let s=0;s<e;s++)r[s]=s}}function DM(i,t,e){let n=Eu(i)/e,r=t||i.drawRange,s=r.start/e,o=(r.start+r.count)/e,a=Math.max(0,s),u=Math.min(n,o)-a;return{offset:Math.floor(a),count:Math.floor(u)}}function LM(i,t){return i.groups.map(e=>({offset:e.start/t,count:e.count/t}))}function Au(i,t,e){let n=DM(i,t,e),r=LM(i,e);if(!r.length)return[n];let s=[],o=n.offset,a=n.offset+n.count,u=Eu(i)/e,l=[];for(let m of r){let{offset:g,count:y}=m,b=g,x=isFinite(y)?y:u-g,_=g+x;b<a&&_>o&&(l.push({pos:Math.max(o,b),isStart:!0}),l.push({pos:Math.min(a,_),isStart:!1}))}l.sort((m,g)=>m.pos!==g.pos?m.pos-g.pos:m.type==="end"?-1:1);let f=0,p=null;for(let m of l){let g=m.pos;f!==0&&g!==p&&s.push({offset:p,count:g-p}),f+=m.isStart?1:-1,p=g}return s}function NM(i,t){let e=i[i.length-1],n=e.offset+e.count>2**16,r=i.reduce((l,f)=>l+f.count,0),s=n?4:2,o=t?new SharedArrayBuffer(r*s):new ArrayBuffer(r*s),a=n?new Uint32Array(o):new Uint16Array(o),u=0;for(let l=0;l<i.length;l++){let{offset:f,count:p}=i[l];for(let m=0;m<p;m++)a[u+m]=f+m;u+=p}return a}var el=class extends tl{get indirect(){return!!this._indirectBuffer}get primitiveStride(){return null}get primitiveBufferStride(){return this.indirect?1:this.primitiveStride}set primitiveBufferStride(t){}get primitiveBuffer(){return this.indirect?this._indirectBuffer:this.geometry.index.array}set primitiveBuffer(t){}constructor(t,e={}){if(t.isBufferGeometry){if(t.index&&t.index.isInterleavedBufferAttribute)throw new Error("BVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("BVH: Only BufferGeometries are supported.");if(e.useSharedArrayBuffer&&!Dp())throw new Error("BVH: SharedArrayBuffer is not available.");super(),this.geometry=t,this.resolvePrimitiveIndex=e.indirect?n=>this._indirectBuffer[n]:n=>n,this.primitiveBuffer=null,this.primitiveBufferStride=null,this._indirectBuffer=null,e={...qc,...e},e[so]||this.init(e)}init(t){let{geometry:e,primitiveStride:n}=this;if(t.indirect){let r=Au(e,t.range,n),s=NM(r,t.useSharedArrayBuffer);this._indirectBuffer=s}else Lp(e,t);super.init(t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new ve))}getRootRanges(t){return this.indirect?[{offset:0,count:this._indirectBuffer.length}]:Au(this.geometry,t,this.primitiveStride)}raycastObject3D(){throw new Error("BVH: raycastObject3D() not implemented")}};var fn=class{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(t,e){let n=1/0,r=-1/0;for(let s=0,o=t.length;s<o;s++){let u=t[s][e];n=u<n?u:n,r=u>r?u:r}this.min=n,this.max=r}setFromPoints(t,e){let n=1/0,r=-1/0;for(let s=0,o=e.length;s<o;s++){let a=e[s],u=t.dot(a);n=u<n?u:n,r=u>r?u:r}this.min=n,this.max=r}isSeparated(t){return this.min>t.max||t.min>this.max}};fn.prototype.setFromBox=(function(){let i=new F;return function(e,n){let r=n.min,s=n.max,o=1/0,a=-1/0;for(let u=0;u<=1;u++)for(let l=0;l<=1;l++)for(let f=0;f<=1;f++){i.x=r.x*u+s.x*(1-u),i.y=r.y*l+s.y*(1-l),i.z=r.z*f+s.z*(1-f);let p=e.dot(i);o=Math.min(p,o),a=Math.max(p,a)}this.min=o,this.max=a}})();var UM=(function(){let i=new F,t=new F,e=new F;return function(r,s,o){let a=r.start,u=i,l=s.start,f=t;e.subVectors(a,l),i.subVectors(r.end,r.start),t.subVectors(s.end,s.start);let p=e.dot(f),m=f.dot(u),g=f.dot(f),y=e.dot(u),x=u.dot(u)*g-m*m,_,T;x!==0?_=(p*m-y*g)/x:_=0,T=(p+_*m)/g,o.x=_,o.y=T}})(),lo=(function(){let i=new ht,t=new F,e=new F;return function(r,s,o,a){UM(r,s,i);let u=i.x,l=i.y;if(u>=0&&u<=1&&l>=0&&l<=1){r.at(u,o),s.at(l,a);return}else if(u>=0&&u<=1){l<0?s.at(0,a):s.at(1,a),r.closestPointToPoint(a,!0,o);return}else if(l>=0&&l<=1){u<0?r.at(0,o):r.at(1,o),s.closestPointToPoint(o,!0,a);return}else{let f;u<0?f=r.start:f=r.end;let p;l<0?p=s.start:p=s.end;let m=t,g=e;if(r.closestPointToPoint(p,!0,t),s.closestPointToPoint(f,!0,e),m.distanceToSquared(p)<=g.distanceToSquared(f)){o.copy(m),a.copy(p);return}else{o.copy(f),a.copy(g);return}}}})(),Np=(function(){let i=new F,t=new F,e=new Ce,n=new he;return function(s,o){let{radius:a,center:u}=s,{a:l,b:f,c:p}=o;if(n.start=l,n.end=f,n.closestPointToPoint(u,!0,i).distanceTo(u)<=a||(n.start=l,n.end=p,n.closestPointToPoint(u,!0,i).distanceTo(u)<=a)||(n.start=f,n.end=p,n.closestPointToPoint(u,!0,i).distanceTo(u)<=a))return!0;let b=o.getPlane(e);if(Math.abs(b.distanceToPoint(u))<=a){let _=b.projectPoint(u,t);if(o.containsPoint(_))return!0}return!1}})();var FM=["x","y","z"],ci=1e-15,Up=ci*ci;function Sn(i){return Math.abs(i)<ci}var Ee=class extends le{constructor(...t){super(...t),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new F),this.satBounds=new Array(4).fill().map(()=>new fn),this.points=[this.a,this.b,this.c],this.plane=new Ce,this.isDegenerateIntoSegment=!1,this.isDegenerateIntoPoint=!1,this.degenerateSegment=new he,this.needsUpdate=!0}intersectsSphere(t){return Np(t,this)}update(){let t=this.a,e=this.b,n=this.c,r=this.points,s=this.satAxes,o=this.satBounds,a=s[0],u=o[0];this.getNormal(a),u.setFromPoints(a,r);let l=s[1],f=o[1];l.subVectors(t,e),f.setFromPoints(l,r);let p=s[2],m=o[2];p.subVectors(e,n),m.setFromPoints(p,r);let g=s[3],y=o[3];g.subVectors(n,t),y.setFromPoints(g,r);let b=l.length(),x=p.length(),_=g.length();this.isDegenerateIntoPoint=!1,this.isDegenerateIntoSegment=!1,b<ci?x<ci||_<ci?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(t),this.degenerateSegment.end.copy(n)):x<ci?_<ci?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(e),this.degenerateSegment.end.copy(t)):_<ci&&(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(n),this.degenerateSegment.end.copy(e)),this.plane.setFromNormalAndCoplanarPoint(a,t),this.needsUpdate=!1}};Ee.prototype.closestPointToSegment=(function(){let i=new F,t=new F,e=new he;return function(r,s=null,o=null){let{start:a,end:u}=r,l=this.points,f,p=1/0;for(let m=0;m<3;m++){let g=(m+1)%3;e.start.copy(l[m]),e.end.copy(l[g]),lo(e,r,i,t),f=i.distanceToSquared(t),f<p&&(p=f,s&&s.copy(i),o&&o.copy(t))}return this.closestPointToPoint(a,i),f=a.distanceToSquared(i),f<p&&(p=f,s&&s.copy(i),o&&o.copy(a)),this.closestPointToPoint(u,i),f=u.distanceToSquared(i),f<p&&(p=f,s&&s.copy(i),o&&o.copy(u)),Math.sqrt(p)}})();Ee.prototype.intersectsTriangle=(function(){let i=new Ee,t=new fn,e=new fn,n=new F,r=new F,s=new F,o=new F,a=new he,u=new he,l=new F,f=new ht,p=new ht;function m(d,c,v,h){let C=n;!d.isDegenerateIntoPoint&&!d.isDegenerateIntoSegment?C.copy(d.plane.normal):C.copy(c.plane.normal);let A=d.satBounds,S=d.satAxes;for(let E=1;E<4;E++){let R=A[E],z=S[E];if(t.setFromPoints(z,c.points),R.isSeparated(t)||(o.copy(C).cross(z),t.setFromPoints(o,d.points),e.setFromPoints(o,c.points),t.isSeparated(e)))return!1}let M=c.satBounds,w=c.satAxes;for(let E=1;E<4;E++){let R=M[E],z=w[E];if(t.setFromPoints(z,d.points),R.isSeparated(t)||(o.crossVectors(C,z),t.setFromPoints(o,d.points),e.setFromPoints(o,c.points),t.isSeparated(e)))return!1}return v&&(h||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),v.start.set(0,0,0),v.end.set(0,0,0)),!0}function g(d,c,v,h,C,A,S,M,w,E,R){let z=S/(S-M);E.x=h+(C-h)*z,R.start.subVectors(c,d).multiplyScalar(z).add(d),z=S/(S-w),E.y=h+(A-h)*z,R.end.subVectors(v,d).multiplyScalar(z).add(d)}function y(d,c,v,h,C,A,S,M,w,E,R){if(C>0)g(d.c,d.a,d.b,h,c,v,w,S,M,E,R);else if(A>0)g(d.b,d.a,d.c,v,c,h,M,S,w,E,R);else if(M*w>0||S!=0)g(d.a,d.b,d.c,c,v,h,S,M,w,E,R);else if(M!=0)g(d.b,d.a,d.c,v,c,h,M,S,w,E,R);else if(w!=0)g(d.c,d.a,d.b,h,c,v,w,S,M,E,R);else return!0;return!1}function b(d,c,v,h){let C=c.degenerateSegment,A=d.plane.distanceToPoint(C.start),S=d.plane.distanceToPoint(C.end);return Sn(A)?Sn(S)?m(d,c,v,h):(v&&(v.start.copy(C.start),v.end.copy(C.start)),d.containsPoint(C.start)):Sn(S)?(v&&(v.start.copy(C.end),v.end.copy(C.end)),d.containsPoint(C.end)):d.plane.intersectLine(C,n)!=null?(v&&(v.start.copy(n),v.end.copy(n)),d.containsPoint(n)):!1}function x(d,c,v){let h=c.a;return Sn(d.plane.distanceToPoint(h))&&d.containsPoint(h)?(v&&(v.start.copy(h),v.end.copy(h)),!0):!1}function _(d,c,v){let h=d.degenerateSegment,C=c.a;return h.closestPointToPoint(C,!0,n),C.distanceToSquared(n)<Up?(v&&(v.start.copy(C),v.end.copy(C)),!0):!1}function T(d,c,v,h){if(d.isDegenerateIntoSegment)if(c.isDegenerateIntoSegment){let C=d.degenerateSegment,A=c.degenerateSegment,S=r,M=s;C.delta(S),A.delta(M);let w=n.subVectors(A.start,C.start),E=S.x*M.y-S.y*M.x;if(Sn(E))return!1;let R=(w.x*M.y-w.y*M.x)/E,z=-(S.x*w.y-S.y*w.x)/E;if(R<0||R>1||z<0||z>1)return!1;let V=C.start.z+S.z*R,H=A.start.z+M.z*z;return Sn(V-H)?(v&&(v.start.copy(C.start).addScaledVector(S,R),v.end.copy(C.start).addScaledVector(S,R)),!0):!1}else return c.isDegenerateIntoPoint?_(d,c,v):b(c,d,v,h);else{if(d.isDegenerateIntoPoint)return c.isDegenerateIntoPoint?c.a.distanceToSquared(d.a)<Up?(v&&(v.start.copy(d.a),v.end.copy(d.a)),!0):!1:c.isDegenerateIntoSegment?_(c,d,v):x(c,d,v);if(c.isDegenerateIntoPoint)return x(d,c,v);if(c.isDegenerateIntoSegment)return b(d,c,v,h)}}return function(c,v=null,h=!1){this.needsUpdate&&this.update(),c.isExtendedTriangle?c.needsUpdate&&c.update():(i.copy(c),i.update(),c=i);let C=T(this,c,v,h);if(C!==void 0)return C;let A=this.plane,S=c.plane,M=S.distanceToPoint(this.a),w=S.distanceToPoint(this.b),E=S.distanceToPoint(this.c);Sn(M)&&(M=0),Sn(w)&&(w=0),Sn(E)&&(E=0);let R=M*w,z=M*E;if(R>0&&z>0)return!1;let V=A.distanceToPoint(c.a),H=A.distanceToPoint(c.b),q=A.distanceToPoint(c.c);Sn(V)&&(V=0),Sn(H)&&(H=0),Sn(q)&&(q=0);let O=V*H,st=V*q;if(O>0&&st>0)return!1;r.copy(A.normal),s.copy(S.normal);let dt=r.cross(s),ft=0,_t=Math.abs(dt.x),wt=Math.abs(dt.y);wt>_t&&(_t=wt,ft=1),Math.abs(dt.z)>_t&&(ft=2);let k=FM[ft],D=this.a[k],I=this.b[k],K=this.c[k],et=c.a[k],Y=c.b[k],at=c.c[k];if(y(this,D,I,K,R,z,M,w,E,f,a))return m(this,c,v,h);if(y(c,et,Y,at,O,st,V,H,q,p,u))return m(this,c,v,h);if(f.y<f.x){let mt=f.y;f.y=f.x,f.x=mt,l.copy(a.start),a.start.copy(a.end),a.end.copy(l)}if(p.y<p.x){let mt=p.y;p.y=p.x,p.x=mt,l.copy(u.start),u.start.copy(u.end),u.end.copy(l)}return f.y<p.x||p.y<f.x?!1:(v&&(p.x>f.x?v.start.copy(u.start):v.start.copy(a.start),p.y<f.y?v.end.copy(u.end):v.end.copy(a.end)),!0)}})();Ee.prototype.distanceToPoint=(function(){let i=new F;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}})();Ee.prototype.distanceToTriangle=(function(){let i=new F,t=new F,e=["a","b","c"],n=new he,r=new he;return function(o,a=null,u=null){let l=a||u?n:null;if(this.intersectsTriangle(o,l,!0))return(a||u)&&(a&&l.getCenter(a),u&&l.getCenter(u)),0;let f=1/0;for(let p=0;p<3;p++){let m,g=e[p],y=o[g];this.closestPointToPoint(y,i),m=y.distanceToSquared(i),m<f&&(f=m,a&&a.copy(i),u&&u.copy(y));let b=this[g];o.closestPointToPoint(b,i),m=b.distanceToSquared(i),m<f&&(f=m,a&&a.copy(b),u&&u.copy(i))}for(let p=0;p<3;p++){let m=e[p],g=e[(p+1)%3];n.set(this[m],this[g]);for(let y=0;y<3;y++){let b=e[y],x=e[(y+1)%3];r.set(o[b],o[x]),lo(n,r,i,t);let _=i.distanceToSquared(t);_<f&&(f=_,a&&a.copy(i),u&&u.copy(t))}}return Math.sqrt(f)}})();var Ae=class{constructor(t,e,n){this.isOrientedBox=!0,this.min=new F,this.max=new F,this.matrix=new Gt,this.invMatrix=new Gt,this.points=new Array(8).fill().map(()=>new F),this.satAxes=new Array(3).fill().map(()=>new F),this.satBounds=new Array(3).fill().map(()=>new fn),this.alignedSatBounds=new Array(3).fill().map(()=>new fn),this.needsUpdate=!1,t&&this.min.copy(t),e&&this.max.copy(e),n&&this.matrix.copy(n)}set(t,e,n){this.min.copy(t),this.max.copy(e),this.matrix.copy(n),this.needsUpdate=!0}copy(t){this.min.copy(t.min),this.max.copy(t.max),this.matrix.copy(t.matrix),this.needsUpdate=!0}};Ae.prototype.update=(function(){return function(){let t=this.matrix,e=this.min,n=this.max,r=this.points;for(let l=0;l<=1;l++)for(let f=0;f<=1;f++)for(let p=0;p<=1;p++){let m=1*l|2*f|4*p,g=r[m];g.x=l?n.x:e.x,g.y=f?n.y:e.y,g.z=p?n.z:e.z,g.applyMatrix4(t)}let s=this.satBounds,o=this.satAxes,a=r[0];for(let l=0;l<3;l++){let f=o[l],p=s[l],m=1<<l,g=r[m];f.subVectors(a,g),p.setFromPoints(f,r)}let u=this.alignedSatBounds;u[0].setFromPointsField(r,"x"),u[1].setFromPointsField(r,"y"),u[2].setFromPointsField(r,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}})();Ae.prototype.intersectsBox=(function(){let i=new fn;return function(e){this.needsUpdate&&this.update();let n=e.min,r=e.max,s=this.satBounds,o=this.satAxes,a=this.alignedSatBounds;if(i.min=n.x,i.max=r.x,a[0].isSeparated(i)||(i.min=n.y,i.max=r.y,a[1].isSeparated(i))||(i.min=n.z,i.max=r.z,a[2].isSeparated(i)))return!1;for(let u=0;u<3;u++){let l=o[u],f=s[u];if(i.setFromBox(l,e),f.isSeparated(i))return!1}return!0}})();Ae.prototype.intersectsTriangle=(function(){let i=new Ee,t=new Array(3),e=new fn,n=new fn,r=new F;return function(o){this.needsUpdate&&this.update(),o.isExtendedTriangle?o.needsUpdate&&o.update():(i.copy(o),i.update(),o=i);let a=this.satBounds,u=this.satAxes;t[0]=o.a,t[1]=o.b,t[2]=o.c;for(let m=0;m<3;m++){let g=a[m],y=u[m];if(e.setFromPoints(y,t),g.isSeparated(e))return!1}let l=o.satBounds,f=o.satAxes,p=this.points;for(let m=0;m<3;m++){let g=l[m],y=f[m];if(e.setFromPoints(y,p),g.isSeparated(e))return!1}for(let m=0;m<3;m++){let g=u[m];for(let y=0;y<4;y++){let b=f[y];if(r.crossVectors(g,b),e.setFromPoints(r,t),n.setFromPoints(r,p),e.isSeparated(n))return!1}}return!0}})();Ae.prototype.closestPointToPoint=(function(){return function(t,e){return this.needsUpdate&&this.update(),e.copy(t).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),e}})();Ae.prototype.distanceToPoint=(function(){let i=new F;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}})();Ae.prototype.distanceToBox=(function(){let i=["x","y","z"],t=new Array(12).fill().map(()=>new he),e=new Array(12).fill().map(()=>new he),n=new F,r=new F;return function(o,a=0,u=null,l=null){if(this.needsUpdate&&this.update(),this.intersectsBox(o))return(u||l)&&(o.getCenter(r),this.closestPointToPoint(r,n),o.closestPointToPoint(n,r),u&&u.copy(n),l&&l.copy(r)),0;let f=a*a,p=o.min,m=o.max,g=this.points,y=1/0;for(let x=0;x<8;x++){let _=g[x];r.copy(_).clamp(p,m);let T=_.distanceToSquared(r);if(T<y&&(y=T,u&&u.copy(_),l&&l.copy(r),T<f))return Math.sqrt(T)}let b=0;for(let x=0;x<3;x++)for(let _=0;_<=1;_++)for(let T=0;T<=1;T++){let d=(x+1)%3,c=(x+2)%3,v=_<<d|T<<c,h=1<<x|_<<d|T<<c,C=g[v],A=g[h];t[b].set(C,A);let M=i[x],w=i[d],E=i[c],R=e[b],z=R.start,V=R.end;z[M]=p[M],z[w]=_?p[w]:m[w],z[E]=T?p[E]:m[w],V[M]=m[M],V[w]=_?p[w]:m[w],V[E]=T?p[E]:m[w],b++}for(let x=0;x<=1;x++)for(let _=0;_<=1;_++)for(let T=0;T<=1;T++){r.x=x?m.x:p.x,r.y=_?m.y:p.y,r.z=T?m.z:p.z,this.closestPointToPoint(r,n);let d=r.distanceToSquared(n);if(d<y&&(y=d,u&&u.copy(n),l&&l.copy(r),d<f))return Math.sqrt(d)}for(let x=0;x<12;x++){let _=t[x];for(let T=0;T<12;T++){let d=e[T];lo(_,d,n,r);let c=n.distanceToSquared(r);if(c<y&&(y=c,u&&u.copy(n),l&&l.copy(r),c<f))return Math.sqrt(c)}}return Math.sqrt(y)}})();var Cu=class extends Ai{constructor(){super(()=>new Ee)}},$e=new Cu;var ho=new F,Ru=new F;function Fp(i,t,e={},n=0,r=1/0){let s=n*n,o=r*r,a=1/0,u=null;if(i.shapecast({boundsTraverseOrder:f=>(ho.copy(t).clamp(f.min,f.max),ho.distanceToSquared(t)),intersectsBounds:(f,p,m)=>m<a&&m<o,intersectsTriangle:(f,p)=>{f.closestPointToPoint(t,ho);let m=t.distanceToSquared(ho);return m<a&&(Ru.copy(ho),a=m,u=p),m<s}}),a===1/0)return null;let l=Math.sqrt(a);return e.point?e.point.copy(Ru):e.point=Ru.clone(),e.distance=l,e.faceIndex=u,e}var nl=parseInt("180")>=169,BM=parseInt("180")<=161,tr=new F,er=new F,nr=new F,il=new ht,rl=new ht,sl=new ht,Bp=new F,Op=new F,zp=new F,uo=new F;function OM(i,t,e,n,r,s,o,a){let u;if(s===Oe?u=i.intersectTriangle(n,e,t,!0,r):u=i.intersectTriangle(t,e,n,s!==Ze,r),u===null)return null;let l=i.origin.distanceTo(r);return l<o||l>a?null:{distance:l,point:r.clone()}}function kp(i,t,e,n,r,s,o,a,u,l,f){tr.fromBufferAttribute(t,s),er.fromBufferAttribute(t,o),nr.fromBufferAttribute(t,a);let p=OM(i,tr,er,nr,uo,u,l,f);if(p){if(n){il.fromBufferAttribute(n,s),rl.fromBufferAttribute(n,o),sl.fromBufferAttribute(n,a),p.uv=new ht;let g=le.getInterpolation(uo,tr,er,nr,il,rl,sl,p.uv);nl||(p.uv=g)}if(r){il.fromBufferAttribute(r,s),rl.fromBufferAttribute(r,o),sl.fromBufferAttribute(r,a),p.uv1=new ht;let g=le.getInterpolation(uo,tr,er,nr,il,rl,sl,p.uv1);nl||(p.uv1=g),BM&&(p.uv2=p.uv1)}if(e){Bp.fromBufferAttribute(e,s),Op.fromBufferAttribute(e,o),zp.fromBufferAttribute(e,a),p.normal=new F;let g=le.getInterpolation(uo,tr,er,nr,Bp,Op,zp,p.normal);p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1),nl||(p.normal=g)}let m={a:s,b:o,c:a,normal:new F,materialIndex:0};if(le.getNormal(tr,er,nr,m.normal),p.face=m,p.faceIndex=s,nl){let g=new F;le.getBarycoord(uo,tr,er,nr,g),p.barycoord=g}}return p}function Vp(i){return i&&i.isMaterial?i.side:i}function ss(i,t,e,n,r,s,o){let a=n*3,u=a+0,l=a+1,f=a+2,{index:p,groups:m}=i;i.index&&(u=p.getX(u),l=p.getX(l),f=p.getX(f));let{position:g,normal:y,uv:b,uv1:x}=i.attributes;if(Array.isArray(t)){let _=n*3;for(let T=0,d=m.length;T<d;T++){let{start:c,count:v,materialIndex:h}=m[T];if(_>=c&&_<c+v){let C=Vp(t[h]),A=kp(e,g,y,b,x,u,l,f,C,s,o);if(A)if(A.faceIndex=n,A.face.materialIndex=h,r)r.push(A);else return A}}}else{let _=Vp(t),T=kp(e,g,y,b,x,u,l,f,_,s,o);if(T)if(T.faceIndex=n,T.face.materialIndex=0,r)r.push(T);else return T}return null}function ge(i,t,e,n){let r=i.a,s=i.b,o=i.c,a=t,u=t+1,l=t+2;e&&(a=e.getX(a),u=e.getX(u),l=e.getX(l)),r.x=n.getX(a),r.y=n.getY(a),r.z=n.getZ(a),s.x=n.getX(u),s.y=n.getY(u),s.z=n.getZ(u),o.x=n.getX(l),o.y=n.getY(l),o.z=n.getZ(l)}function Hp(i,t,e,n,r,s,o,a){let{geometry:u,_indirectBuffer:l}=i;for(let f=n,p=n+r;f<p;f++)ss(u,t,e,f,s,o,a)}function Gp(i,t,e,n,r,s,o){let{geometry:a,_indirectBuffer:u}=i,l=1/0,f=null;for(let p=n,m=n+r;p<m;p++){let g;g=ss(a,t,e,p,null,s,o),g&&g.distance<l&&(f=g,l=g.distance)}return f}function Wp(i,t,e,n,r,s,o){let{geometry:a}=e,{index:u}=a,l=a.attributes.position;for(let f=i,p=t+i;f<p;f++){let m;if(m=f,ge(o,m*3,u,l),o.needsUpdate=!0,n(o,m,r,s))return!0}return!1}function Xp(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));let e=i.geometry,n=e.index?e.index.array:null,r=e.attributes.position,s,o,a,u,l=0,f=i._roots;for(let m=0,g=f.length;m<g;m++)s=f[m],o=new Uint32Array(s),a=new Uint16Array(s),u=new Float32Array(s),p(0,l),l+=s.byteLength;function p(m,g,y=!1){let b=m*2;if(jt(b,a)){let x=oe(m,o),_=fe(b,a),T=1/0,d=1/0,c=1/0,v=-1/0,h=-1/0,C=-1/0;for(let A=3*x,S=3*(x+_);A<S;A++){let M=n[A],w=r.getX(M),E=r.getY(M),R=r.getZ(M);w<T&&(T=w),w>v&&(v=w),E<d&&(d=E),E>h&&(h=E),R<c&&(c=R),R>C&&(C=R)}return u[m+0]!==T||u[m+1]!==d||u[m+2]!==c||u[m+3]!==v||u[m+4]!==h||u[m+5]!==C?(u[m+0]=T,u[m+1]=d,u[m+2]=c,u[m+3]=v,u[m+4]=h,u[m+5]=C,!0):!1}else{let x=ne(m),_=ie(m,o),T=y,d=!1,c=!1;if(t){if(!T){let M=x/8+g/32,w=_/8+g/32;d=t.has(M),c=t.has(w),T=!d&&!c}}else d=!0,c=!0;let v=T||d,h=T||c,C=!1;v&&(C=p(x,g,T));let A=!1;h&&(A=p(_,g,T));let S=C||A;if(S)for(let M=0;M<3;M++){let w=x+M,E=_+M,R=u[w],z=u[w+3],V=u[E],H=u[E+3];u[m+M]=R<V?R:V,u[m+M+3]=z>H?z:H}return S}}}function bn(i,t,e,n,r){let s,o,a,u,l,f,p=1/e.direction.x,m=1/e.direction.y,g=1/e.direction.z,y=e.origin.x,b=e.origin.y,x=e.origin.z,_=t[i],T=t[i+3],d=t[i+1],c=t[i+3+1],v=t[i+2],h=t[i+3+2];return p>=0?(s=(_-y)*p,o=(T-y)*p):(s=(T-y)*p,o=(_-y)*p),m>=0?(a=(d-b)*m,u=(c-b)*m):(a=(c-b)*m,u=(d-b)*m),s>u||a>o||((a>s||isNaN(s))&&(s=a),(u<o||isNaN(o))&&(o=u),g>=0?(l=(v-x)*g,f=(h-x)*g):(l=(h-x)*g,f=(v-x)*g),s>f||l>o)?!1:((l>s||s!==s)&&(s=l),(f<o||o!==o)&&(o=f),s<=r&&o>=n)}function qp(i,t,e,n,r,s,o,a){let{geometry:u,_indirectBuffer:l}=i;for(let f=n,p=n+r;f<p;f++){let m=l?l[f]:f;ss(u,t,e,m,s,o,a)}}function Yp(i,t,e,n,r,s,o){let{geometry:a,_indirectBuffer:u}=i,l=1/0,f=null;for(let p=n,m=n+r;p<m;p++){let g;g=ss(a,t,e,u?u[p]:p,null,s,o),g&&g.distance<l&&(f=g,l=g.distance)}return f}function Zp(i,t,e,n,r,s,o){let{geometry:a}=e,{index:u}=a,l=a.attributes.position;for(let f=i,p=t+i;f<p;f++){let m;if(m=e.resolveTriangleIndex(f),ge(o,m*3,u,l),o.needsUpdate=!0,n(o,m,r,s))return!0}return!1}function $p(i,t,e,n,r,s,o){te.setBuffer(i._roots[t]),Iu(0,i,e,n,r,s,o),te.clearBuffer()}function Iu(i,t,e,n,r,s,o){let{float32Array:a,uint16Array:u,uint32Array:l}=te,f=i*2;if(jt(f,u)){let m=oe(i,l),g=fe(f,u);Hp(t,e,n,m,g,r,s,o)}else{let m=ne(i);bn(m,a,n,s,o)&&Iu(m,t,e,n,r,s,o);let g=ie(i,l);bn(g,a,n,s,o)&&Iu(g,t,e,n,r,s,o)}}var zM=["x","y","z"];function Jp(i,t,e,n,r,s){te.setBuffer(i._roots[t]);let o=Pu(0,i,e,n,r,s);return te.clearBuffer(),o}function Pu(i,t,e,n,r,s){let{float32Array:o,uint16Array:a,uint32Array:u}=te,l=i*2;if(jt(l,a)){let p=oe(i,u),m=fe(l,a);return Gp(t,e,n,p,m,r,s)}else{let p=jr(i,u),m=zM[p],y=n.direction[m]>=0,b,x;y?(b=ne(i),x=ie(i,u)):(b=ie(i,u),x=ne(i));let T=bn(b,o,n,r,s)?Pu(b,t,e,n,r,s):null;if(T){let v=T.point[m];if(y?v<=o[x+p]:v>=o[x+p+3])return T}let c=bn(x,o,n,r,s)?Pu(x,t,e,n,r,s):null;return T&&c?T.distance<=c.distance?T:c:T||c||null}}var ol=new ve,os=new Ee,as=new Ee,fo=new Gt,Kp=new Ae,al=new Ae;function jp(i,t,e,n){te.setBuffer(i._roots[t]);let r=Du(0,i,e,n);return te.clearBuffer(),r}function Du(i,t,e,n,r=null){let{float32Array:s,uint16Array:o,uint32Array:a}=te,u=i*2;if(r===null&&(e.boundingBox||e.computeBoundingBox(),Kp.set(e.boundingBox.min,e.boundingBox.max,n),r=Kp),jt(u,o)){let f=t.geometry,p=f.index,m=f.attributes.position,g=e.index,y=e.attributes.position,b=oe(i,a),x=fe(u,o);if(fo.copy(n).invert(),e.boundsTree)return me(i,s,al),al.matrix.copy(fo),al.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:T=>al.intersectsBox(T),intersectsTriangle:T=>{T.a.applyMatrix4(n),T.b.applyMatrix4(n),T.c.applyMatrix4(n),T.needsUpdate=!0;for(let d=b*3,c=(x+b)*3;d<c;d+=3)if(ge(as,d,p,m),as.needsUpdate=!0,T.intersectsTriangle(as))return!0;return!1}});{let _=Ii(e);for(let T=b*3,d=(x+b)*3;T<d;T+=3){ge(os,T,p,m),os.a.applyMatrix4(fo),os.b.applyMatrix4(fo),os.c.applyMatrix4(fo),os.needsUpdate=!0;for(let c=0,v=_*3;c<v;c+=3)if(ge(as,c,g,y),as.needsUpdate=!0,os.intersectsTriangle(as))return!0}}}else{let f=ne(i),p=ie(i,a);return me(f,s,ol),!!(r.intersectsBox(ol)&&Du(f,t,e,n,r)||(me(p,s,ol),r.intersectsBox(ol)&&Du(p,t,e,n,r)))}}var cl=new Gt,Lu=new Ae,po=new Ae,kM=new F,VM=new F,HM=new F,GM=new F;function Qp(i,t,e,n={},r={},s=0,o=1/0){t.boundingBox||t.computeBoundingBox(),Lu.set(t.boundingBox.min,t.boundingBox.max,e),Lu.needsUpdate=!0;let a=i.geometry,u=a.attributes.position,l=a.index,f=t.attributes.position,p=t.index,m=$e.getPrimitive(),g=$e.getPrimitive(),y=kM,b=VM,x=null,_=null;r&&(x=HM,_=GM);let T=1/0,d=null,c=null;return cl.copy(e).invert(),po.matrix.copy(cl),i.shapecast({boundsTraverseOrder:v=>Lu.distanceToBox(v),intersectsBounds:(v,h,C)=>C<T&&C<o?(h&&(po.min.copy(v.min),po.max.copy(v.max),po.needsUpdate=!0),!0):!1,intersectsRange:(v,h)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:A=>po.distanceToBox(A),intersectsBounds:(A,S,M)=>M<T&&M<o,intersectsRange:(A,S)=>{for(let M=A,w=A+S;M<w;M++){ge(g,3*M,p,f),g.a.applyMatrix4(e),g.b.applyMatrix4(e),g.c.applyMatrix4(e),g.needsUpdate=!0;for(let E=v,R=v+h;E<R;E++){ge(m,3*E,l,u),m.needsUpdate=!0;let z=m.distanceToTriangle(g,y,x);if(z<T&&(b.copy(y),_&&_.copy(x),T=z,d=E,c=M),z<s)return!0}}}});{let C=Ii(t);for(let A=0,S=C;A<S;A++){ge(g,3*A,p,f),g.a.applyMatrix4(e),g.b.applyMatrix4(e),g.c.applyMatrix4(e),g.needsUpdate=!0;for(let M=v,w=v+h;M<w;M++){ge(m,3*M,l,u),m.needsUpdate=!0;let E=m.distanceToTriangle(g,y,x);if(E<T&&(b.copy(y),_&&_.copy(x),T=E,d=M,c=A),E<s)return!0}}}}}),$e.releasePrimitive(m),$e.releasePrimitive(g),T===1/0?null:(n.point?n.point.copy(b):n.point=b.clone(),n.distance=T,n.faceIndex=d,r&&(r.point?r.point.copy(_):r.point=_.clone(),r.point.applyMatrix4(cl),b.applyMatrix4(cl),r.distance=b.sub(r.point).length(),r.faceIndex=c),n)}function tm(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));let e=i.geometry,n=e.index?e.index.array:null,r=e.attributes.position,s,o,a,u,l=0,f=i._roots;for(let m=0,g=f.length;m<g;m++)s=f[m],o=new Uint32Array(s),a=new Uint16Array(s),u=new Float32Array(s),p(0,l),l+=s.byteLength;function p(m,g,y=!1){let b=m*2;if(jt(b,a)){let x=oe(m,o),_=fe(b,a),T=1/0,d=1/0,c=1/0,v=-1/0,h=-1/0,C=-1/0;for(let A=x,S=x+_;A<S;A++){let M=3*i.resolveTriangleIndex(A);for(let w=0;w<3;w++){let E=M+w;E=n?n[E]:E;let R=r.getX(E),z=r.getY(E),V=r.getZ(E);R<T&&(T=R),R>v&&(v=R),z<d&&(d=z),z>h&&(h=z),V<c&&(c=V),V>C&&(C=V)}}return u[m+0]!==T||u[m+1]!==d||u[m+2]!==c||u[m+3]!==v||u[m+4]!==h||u[m+5]!==C?(u[m+0]=T,u[m+1]=d,u[m+2]=c,u[m+3]=v,u[m+4]=h,u[m+5]=C,!0):!1}else{let x=ne(m),_=ie(m,o),T=y,d=!1,c=!1;if(t){if(!T){let M=x/8+g/32,w=_/8+g/32;d=t.has(M),c=t.has(w),T=!d&&!c}}else d=!0,c=!0;let v=T||d,h=T||c,C=!1;v&&(C=p(x,g,T));let A=!1;h&&(A=p(_,g,T));let S=C||A;if(S)for(let M=0;M<3;M++){let w=x+M,E=_+M,R=u[w],z=u[w+3],V=u[E],H=u[E+3];u[m+M]=R<V?R:V,u[m+M+3]=z>H?z:H}return S}}}function em(i,t,e,n,r,s,o){te.setBuffer(i._roots[t]),Nu(0,i,e,n,r,s,o),te.clearBuffer()}function Nu(i,t,e,n,r,s,o){let{float32Array:a,uint16Array:u,uint32Array:l}=te,f=i*2;if(jt(f,u)){let m=oe(i,l),g=fe(f,u);qp(t,e,n,m,g,r,s,o)}else{let m=ne(i);bn(m,a,n,s,o)&&Nu(m,t,e,n,r,s,o);let g=ie(i,l);bn(g,a,n,s,o)&&Nu(g,t,e,n,r,s,o)}}var WM=["x","y","z"];function nm(i,t,e,n,r,s){te.setBuffer(i._roots[t]);let o=Uu(0,i,e,n,r,s);return te.clearBuffer(),o}function Uu(i,t,e,n,r,s){let{float32Array:o,uint16Array:a,uint32Array:u}=te,l=i*2;if(jt(l,a)){let p=oe(i,u),m=fe(l,a);return Yp(t,e,n,p,m,r,s)}else{let p=jr(i,u),m=WM[p],y=n.direction[m]>=0,b,x;y?(b=ne(i),x=ie(i,u)):(b=ie(i,u),x=ne(i));let T=bn(b,o,n,r,s)?Uu(b,t,e,n,r,s):null;if(T){let v=T.point[m];if(y?v<=o[x+p]:v>=o[x+p+3])return T}let c=bn(x,o,n,r,s)?Uu(x,t,e,n,r,s):null;return T&&c?T.distance<=c.distance?T:c:T||c||null}}var ll=new ve,cs=new Ee,ls=new Ee,mo=new Gt,im=new Ae,hl=new Ae;function rm(i,t,e,n){te.setBuffer(i._roots[t]);let r=Fu(0,i,e,n);return te.clearBuffer(),r}function Fu(i,t,e,n,r=null){let{float32Array:s,uint16Array:o,uint32Array:a}=te,u=i*2;if(r===null&&(e.boundingBox||e.computeBoundingBox(),im.set(e.boundingBox.min,e.boundingBox.max,n),r=im),jt(u,o)){let f=t.geometry,p=f.index,m=f.attributes.position,g=e.index,y=e.attributes.position,b=oe(i,a),x=fe(u,o);if(mo.copy(n).invert(),e.boundsTree)return me(i,s,hl),hl.matrix.copy(mo),hl.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:T=>hl.intersectsBox(T),intersectsTriangle:T=>{T.a.applyMatrix4(n),T.b.applyMatrix4(n),T.c.applyMatrix4(n),T.needsUpdate=!0;for(let d=b,c=x+b;d<c;d++)if(ge(ls,3*t.resolveTriangleIndex(d),p,m),ls.needsUpdate=!0,T.intersectsTriangle(ls))return!0;return!1}});{let _=Ii(e);for(let T=b,d=x+b;T<d;T++){let c=t.resolveTriangleIndex(T);ge(cs,3*c,p,m),cs.a.applyMatrix4(mo),cs.b.applyMatrix4(mo),cs.c.applyMatrix4(mo),cs.needsUpdate=!0;for(let v=0,h=_*3;v<h;v+=3)if(ge(ls,v,g,y),ls.needsUpdate=!0,cs.intersectsTriangle(ls))return!0}}}else{let f=ne(i),p=ie(i,a);return me(f,s,ll),!!(r.intersectsBox(ll)&&Fu(f,t,e,n,r)||(me(p,s,ll),r.intersectsBox(ll)&&Fu(p,t,e,n,r)))}}var ul=new Gt,Bu=new Ae,go=new Ae,XM=new F,qM=new F,YM=new F,ZM=new F;function sm(i,t,e,n={},r={},s=0,o=1/0){t.boundingBox||t.computeBoundingBox(),Bu.set(t.boundingBox.min,t.boundingBox.max,e),Bu.needsUpdate=!0;let a=i.geometry,u=a.attributes.position,l=a.index,f=t.attributes.position,p=t.index,m=$e.getPrimitive(),g=$e.getPrimitive(),y=XM,b=qM,x=null,_=null;r&&(x=YM,_=ZM);let T=1/0,d=null,c=null;return ul.copy(e).invert(),go.matrix.copy(ul),i.shapecast({boundsTraverseOrder:v=>Bu.distanceToBox(v),intersectsBounds:(v,h,C)=>C<T&&C<o?(h&&(go.min.copy(v.min),go.max.copy(v.max),go.needsUpdate=!0),!0):!1,intersectsRange:(v,h)=>{if(t.boundsTree){let C=t.boundsTree;return C.shapecast({boundsTraverseOrder:A=>go.distanceToBox(A),intersectsBounds:(A,S,M)=>M<T&&M<o,intersectsRange:(A,S)=>{for(let M=A,w=A+S;M<w;M++){let E=C.resolveTriangleIndex(M);ge(g,3*E,p,f),g.a.applyMatrix4(e),g.b.applyMatrix4(e),g.c.applyMatrix4(e),g.needsUpdate=!0;for(let R=v,z=v+h;R<z;R++){let V=i.resolveTriangleIndex(R);ge(m,3*V,l,u),m.needsUpdate=!0;let H=m.distanceToTriangle(g,y,x);if(H<T&&(b.copy(y),_&&_.copy(x),T=H,d=R,c=M),H<s)return!0}}}})}else{let C=Ii(t);for(let A=0,S=C;A<S;A++){ge(g,3*A,p,f),g.a.applyMatrix4(e),g.b.applyMatrix4(e),g.c.applyMatrix4(e),g.needsUpdate=!0;for(let M=v,w=v+h;M<w;M++){let E=i.resolveTriangleIndex(M);ge(m,3*E,l,u),m.needsUpdate=!0;let R=m.distanceToTriangle(g,y,x);if(R<T&&(b.copy(y),_&&_.copy(x),T=R,d=M,c=A),R<s)return!0}}}}}),$e.releasePrimitive(m),$e.releasePrimitive(g),T===1/0?null:(n.point?n.point.copy(b):n.point=b.clone(),n.distance=T,n.faceIndex=d,r&&(r.point?r.point.copy(_):r.point=_.clone(),r.point.applyMatrix4(ul),b.applyMatrix4(ul),r.distance=b.sub(r.point).length(),r.faceIndex=c),n)}function Ou(i,t,e){return i===null?null:(i.point.applyMatrix4(t.matrixWorld),i.distance=i.point.distanceTo(e.ray.origin),i.object=t,i)}var fl=new Ae,dl=new qe,om=new F,am=new Gt,cm=new F,zu=["getX","getY","getZ"],_o=class i extends el{static serialize(t,e={}){e={cloneBuffers:!0,...e};let n=t.geometry,r=t._roots,s=t._indirectBuffer,o=n.getIndex(),a={version:1,roots:null,index:null,indirectBuffer:null};return e.cloneBuffers?(a.roots=r.map(u=>u.slice()),a.index=o?o.array.slice():null,a.indirectBuffer=s?s.slice():null):(a.roots=r,a.index=o?o.array:null,a.indirectBuffer=s),a}static deserialize(t,e,n={}){n={setIndex:!0,indirect:!!t.indirectBuffer,...n};let{index:r,roots:s,indirectBuffer:o}=t;t.version||(console.warn("MeshBVH.deserialize: Serialization format has been changed and will be fixed up. It is recommended to regenerate any stored serialized data."),u(s));let a=new i(e,{...n,[so]:!0});if(a._roots=s,a._indirectBuffer=o||null,n.setIndex){let l=e.getIndex();if(l===null){let f=new pe(t.index,1,!1);e.setIndex(f)}else l.array!==r&&(l.array.set(r),l.needsUpdate=!0)}return a;function u(l){for(let f=0;f<l.length;f++){let p=l[f],m=new Uint32Array(p),g=new Uint16Array(p);for(let y=0,b=p.byteLength/32;y<b;y++){let x=8*y,_=2*x;jt(_,g)||(m[x+6]=m[x+6]/8-y)}}}}get primitiveStride(){return 3}get resolveTriangleIndex(){return this.resolvePrimitiveIndex}constructor(t,e={}){e.maxLeafTris&&(console.warn('MeshBVH: "maxLeafTris" option has been deprecated. Use "targetLeafSize", instead.'),e={...e,targetLeafSize:e.maxLeafTris}),super(t,e)}shiftTriangleOffsets(t){return super.shiftPrimitiveOffsets(t)}writePrimitiveBounds(t,e,n){let r=this.geometry,s=this._indirectBuffer,o=r.attributes.position,a=r.index?r.index.array:null,l=(s?s[t]:t)*3,f=l+0,p=l+1,m=l+2;a&&(f=a[f],p=a[p],m=a[m]);for(let g=0;g<3;g++){let y=o[zu[g]](f),b=o[zu[g]](p),x=o[zu[g]](m),_=y;b<_&&(_=b),x<_&&(_=x);let T=y;b>T&&(T=b),x>T&&(T=x),e[n+g]=_,e[n+g+3]=T}return e}computePrimitiveBounds(t,e,n){let r=this.geometry,s=this._indirectBuffer,o=r.attributes.position,a=r.index?r.index.array:null,u=o.normalized;if(t<0||e+t-n.offset>n.length/6)throw new Error("MeshBVH: compute triangle bounds range is invalid.");let l=o.array,f=o.offset||0,p=3;o.isInterleavedBufferAttribute&&(p=o.data.stride);let m=["getX","getY","getZ"],g=n.offset;for(let y=t,b=t+e;y<b;y++){let _=(s?s[y]:y)*3,T=(y-g)*6,d=_+0,c=_+1,v=_+2;a&&(d=a[d],c=a[c],v=a[v]),u||(d=d*p+f,c=c*p+f,v=v*p+f);for(let h=0;h<3;h++){let C,A,S;u?(C=o[m[h]](d),A=o[m[h]](c),S=o[m[h]](v)):(C=l[d+h],A=l[c+h],S=l[v+h]);let M=C;A<M&&(M=A),S<M&&(M=S);let w=C;A>w&&(w=A),S>w&&(w=S);let E=(w-M)/2,R=h*2;n[T+R+0]=M+E,n[T+R+1]=E+(Math.abs(M)+E)*Jr}}return n}raycastObject3D(t,e,n=[]){let{material:r}=t;if(r===void 0)return;am.copy(t.matrixWorld).invert(),dl.copy(e.ray).applyMatrix4(am),cm.setFromMatrixScale(t.matrixWorld),om.copy(dl.direction).multiply(cm);let s=om.length(),o=e.near/s,a=e.far/s;if(e.firstHitOnly===!0){let u=this.raycastFirst(dl,r,o,a);u=Ou(u,t,e),u&&n.push(u)}else{let u=this.raycast(dl,r,o,a);for(let l=0,f=u.length;l<f;l++){let p=Ou(u[l],t,e);p&&n.push(p)}}return n}refit(t=null){return(this.indirect?tm:Xp)(this,t)}raycast(t,e=sn,n=0,r=1/0){let s=this._roots,o=[],a=this.indirect?em:$p;for(let u=0,l=s.length;u<l;u++)a(this,u,e,t,o,n,r);return o}raycastFirst(t,e=sn,n=0,r=1/0){let s=this._roots,o=null,a=this.indirect?nm:Jp;for(let u=0,l=s.length;u<l;u++){let f=a(this,u,e,t,n,r);f!=null&&(o==null||f.distance<o.distance)&&(o=f)}return o}intersectsGeometry(t,e){let n=!1,r=this._roots,s=this.indirect?rm:jp;for(let o=0,a=r.length;o<a&&(n=s(this,o,t,e),!n);o++);return n}shapecast(t){let e=$e.getPrimitive(),n=super.shapecast({...t,intersectsPrimitive:t.intersectsTriangle,scratchPrimitive:e,iterate:this.indirect?Zp:Wp});return $e.releasePrimitive(e),n}bvhcast(t,e,n){let{intersectsRanges:r,intersectsTriangles:s}=n,o=$e.getPrimitive(),a=this.geometry.index,u=this.geometry.attributes.position,l=this.indirect?y=>{let b=this.resolveTriangleIndex(y);ge(o,b*3,a,u)}:y=>{ge(o,y*3,a,u)},f=$e.getPrimitive(),p=t.geometry.index,m=t.geometry.attributes.position,g=t.indirect?y=>{let b=t.resolveTriangleIndex(y);ge(f,b*3,p,m)}:y=>{ge(f,y*3,p,m)};if(s){if(!(t instanceof i))throw new Error('MeshBVH: "intersectsTriangles" callback can only be used with another MeshBVH.');let y=(b,x,_,T,d,c,v,h)=>{for(let C=_,A=_+T;C<A;C++){g(C),f.a.applyMatrix4(e),f.b.applyMatrix4(e),f.c.applyMatrix4(e),f.needsUpdate=!0;for(let S=b,M=b+x;S<M;S++)if(l(S),o.needsUpdate=!0,s(o,f,S,C,d,c,v,h))return!0}return!1};if(r){let b=r;r=function(x,_,T,d,c,v,h,C){return b(x,_,T,d,c,v,h,C)?!0:y(x,_,T,d,c,v,h,C)}}else r=y}return super.bvhcast(t,e,{intersectsRanges:r})}intersectsBox(t,e){return fl.set(t.min,t.max,e),fl.needsUpdate=!0,this.shapecast({intersectsBounds:n=>fl.intersectsBox(n),intersectsTriangle:n=>fl.intersectsTriangle(n)})}intersectsSphere(t){return this.shapecast({intersectsBounds:e=>t.intersectsBox(e),intersectsTriangle:e=>e.intersectsSphere(t)})}closestPointToGeometry(t,e,n={},r={},s=0,o=1/0){return(this.indirect?sm:Qp)(this,t,e,n,r,s,o)}closestPointToPoint(t,e={},n=0,r=1/0){return Fp(this,t,e,n,r)}};var lm=Math.pow(10,-Math.log10(1e-6)),$M=5e-7*lm;function Un(i){return~~(i*lm+$M)}function hm(i){return`${Un(i.x)},${Un(i.y)}`}function ku(i){return`${Un(i.x)},${Un(i.y)},${Un(i.z)}`}function um(i){return`${Un(i.x)},${Un(i.y)},${Un(i.z)},${Un(i.w)}`}function fm(i,t,e){e.direction.subVectors(t,i).normalize();let n=i.dot(e.direction);return e.origin.copy(i).addScaledVector(e.direction,-n),e}function pl(){return typeof SharedArrayBuffer<"u"}function dm(i){if(i.buffer instanceof SharedArrayBuffer)return i;let t=i.constructor,e=i.buffer,n=new SharedArrayBuffer(e.byteLength),r=new Uint8Array(e);return new Uint8Array(n).set(r,0),new t(n)}function JM(i){return i.index?i.index.count:i.attributes.position.count}function hs(i){return JM(i)/3}var KM=1e-8,jM=new F;function mm(i){return~~(i/3)}function gm(i){return i%3}function pm(i,t){return i.start-t.start}function Vu(i,t){return jM.subVectors(t,i.origin).dot(i.direction)}function _m(i,t,e,n=KM){i.sort(pm),t.sort(pm);for(let a=0;a<i.length;a++){let u=i[a];for(let l=0;l<t.length;l++){let f=t[l];if(!(f.start>u.end)){if(u.end<f.start||f.end<u.start)continue;if(u.start<=f.start&&u.end>=f.end)s(f.end,u.end)||i.splice(a+1,0,{start:f.end,end:u.end,index:u.index}),u.end=f.start,f.start=0,f.end=0;else if(u.start>=f.start&&u.end<=f.end)s(u.end,f.end)||t.splice(l+1,0,{start:u.end,end:f.end,index:f.index}),f.end=u.start,u.start=0,u.end=0;else if(u.start<=f.start&&u.end<=f.end){let p=u.end;u.end=f.start,f.start=p}else if(u.start>=f.start&&u.end>=f.end){let p=f.end;f.end=u.start,u.start=p}else throw new Error}if(e.has(u.index)||e.set(u.index,[]),e.has(f.index)||e.set(f.index,[]),e.get(u.index).push(f.index),e.get(f.index).push(u.index),o(f)&&(t.splice(l,1),l--),o(u)){i.splice(a,1),a--;break}}}r(i),r(t);function r(a){for(let u=0;u<a.length;u++)o(a[u])&&(a.splice(u,1),u--)}function s(a,u){return Math.abs(u-a)<n}function o(a){return Math.abs(a.end-a.start)<n}}var ml=class{constructor(){this._rays=[]}addRay(t){this._rays.push(t)}findClosestRay(t){let e=this._rays,n=t.clone();n.direction.multiplyScalar(-1);let r=1/0,s=null;for(let u=0,l=e.length;u<l;u++){let f=e[u];if(o(f,t)&&o(f,n))continue;let p=a(f,t),m=a(f,n),g=Math.min(p,m);g<r&&(r=g,s=f)}return s;function o(u,l){let f=u.origin.distanceTo(l.origin)>1e-5;return u.direction.angleTo(l.direction)>1e-4||f}function a(u,l){let f=u.origin.distanceTo(l.origin),p=u.direction.angleTo(l.direction);return f/1e-5+p/1e-4}}};var Hu=new F,Gu=new F,gl=new qe;function xm(i,t,e){let n=i.attributes,r=i.index,s=n.position,o=new Map,a=new Map,u=Array.from(t),l=new ml;for(let f=0,p=u.length;f<p;f++){let m=u[f],g=mm(m),y=gm(m),b=3*g+y,x=3*g+(y+1)%3;r&&(b=r.getX(b),x=r.getX(x)),Hu.fromBufferAttribute(s,b),Gu.fromBufferAttribute(s,x),fm(Hu,Gu,gl);let _,T=l.findClosestRay(gl);T===null&&(T=gl.clone(),l.addRay(T)),a.has(T)||a.set(T,{forward:[],reverse:[],ray:T}),_=a.get(T);let d=Vu(T,Hu),c=Vu(T,Gu);d>c&&([d,c]=[c,d]),gl.direction.dot(T.direction)<0?_.reverse.push({start:d,end:c,index:m}):_.forward.push({start:d,end:c,index:m})}return a.forEach(({forward:f,reverse:p},m)=>{_m(f,p,o,e),f.length===0&&p.length===0&&a.delete(m)}),{disjointConnectivityMap:o,fragmentMap:a}}var QM=new ht,Wu=new F,tS=new se,Xu=["","",""],_l=class{constructor(){this.data=null,this.disjointConnections=null,this.unmatchedDisjointEdges=null,this.unmatchedEdges=-1,this.matchedEdges=-1,this.useDrawRange=!0,this.useAllAttributes=!1,this.matchDisjointEdges=!1,this.degenerateEpsilon=1e-8}getSiblingTriangleIndex(t,e){let n=this.data[t*3+e];return n===-1?-1:~~(n/3)}getSiblingEdgeIndex(t,e){let n=this.data[t*3+e];return n===-1?-1:n%3}getDisjointSiblingTriangleIndices(t,e){let n=t*3+e,r=this.disjointConnections.get(n);return r?r.map(s=>~~(s/3)):[]}getDisjointSiblingEdgeIndices(t,e){let n=t*3+e,r=this.disjointConnections.get(n);return r?r.map(s=>s%3):[]}isFullyConnected(){return this.unmatchedEdges===0}updateFrom(t){let{useAllAttributes:e,useDrawRange:n,matchDisjointEdges:r,degenerateEpsilon:s}=this,o=e?d:T,a=new Map,{attributes:u}=t,l=e?Object.keys(u):null,f=t.index,p=u.position,m=hs(t),g=m,y=0;n&&(y=t.drawRange.start,t.drawRange.count!==1/0&&(m=~~(t.drawRange.count/3)));let b=this.data;(!b||b.length<3*g)&&(b=new Int32Array(3*g)),b.fill(-1);let x=0,_=new Set;for(let c=y,v=m*3+y;c<v;c+=3){let h=c;for(let C=0;C<3;C++){let A=h+C;f&&(A=f.getX(A)),Xu[C]=o(A)}for(let C=0;C<3;C++){let A=(C+1)%3,S=Xu[C],M=Xu[A],w=`${M}_${S}`;if(a.has(w)){let E=h+C,R=a.get(w);b[E]=R,b[R]=E,a.delete(w),x+=2,_.delete(R)}else{let E=`${S}_${M}`,R=h+C;a.set(E,R),_.add(R)}}}if(r){let{fragmentMap:c,disjointConnectivityMap:v}=xm(t,_,s);_.clear(),c.forEach(({forward:h,reverse:C})=>{h.forEach(({index:A})=>_.add(A)),C.forEach(({index:A})=>_.add(A))}),this.unmatchedDisjointEdges=c,this.disjointConnections=v,x=m*3-_.size}this.matchedEdges=x,this.unmatchedEdges=_.size,this.data=b;function T(c){return Wu.fromBufferAttribute(p,c),ku(Wu)}function d(c){let v="";for(let h=0,C=l.length;h<C;h++){let A=u[l[h]],S;switch(A.itemSize){case 1:S=Un(A.getX(c));break;case 2:S=hm(QM.fromBufferAttribute(A,c));break;case 3:S=ku(Wu.fromBufferAttribute(A,c));break;case 4:S=um(tS.fromBufferAttribute(A,c));break}v!==""&&(v+="|"),v+=S}return v}}};var us=class extends Ye{constructor(...t){super(...t),this.isBrush=!0,this._previousMatrix=new Gt,this._previousMatrix.elements.fill(0),this._halfEdges=null,this._boundsTree=null,this._groupIndices=null,this._hash=null}markUpdated(){this._previousMatrix.copy(this.matrix)}isDirty(){let{matrix:t,_previousMatrix:e}=this,n=t.elements,r=e.elements;for(let s=0;s<16;s++)if(n[s]!==r[s])return!0;return!1}prepareGeometry(){let t=this.geometry,e=t.attributes,n=pl(),r=t.index,s=t.attributes.position,o=r?`${r.uuid}_${r.count}_${r.version}`:"-1_-1_-1",a=`${s.uuid}_${s.count}_${s.version}`,u=`${t.uuid}_${o}_${a}`;if(this._hash===u)return;if(this._hash=u,n)for(let m in e){let g=e[m];if(g.isInterleavedBufferAttribute)throw new Error("Brush: InterleavedBufferAttributes are not supported.");g.array=dm(g.array)}t.boundsTree=new _o(t,{maxLeafSize:3,indirect:!0,useSharedArrayBuffer:n}),t.halfEdges||(t.halfEdges=new _l),t.halfEdges.updateFrom(t);let l=hs(t);(!t.groupIndices||t.groupIndices.length!==l)&&(t.groupIndices=new Uint16Array(l));let f=t.groupIndices,p=t.groups;for(let m=0,g=p.length;m<g;m++){let{start:y,count:b}=p[m];for(let x=y/3,_=(y+b)/3;x<_;x++)f[x]=m}}disposeCacheData(){let{geometry:t}=this;t.halfEdges=null,t.boundsTree=null,t.groupIndices=null}};var eS=Object.getOwnPropertyNames,dn=(i,t)=>function(){return t||(0,i[eS(i)[0]])((t={exports:{}}).exports,t),t.exports},xl=dn({"node_modules/binary-search-bounds/search-bounds.js"(i,t){"use strict";function e(u,l,f,p,m){for(var g=m+1;p<=m;){var y=p+m>>>1,b=u[y],x=f!==void 0?f(b,l):b-l;x>=0?(g=y,m=y-1):p=y+1}return g}function n(u,l,f,p,m){for(var g=m+1;p<=m;){var y=p+m>>>1,b=u[y],x=f!==void 0?f(b,l):b-l;x>0?(g=y,m=y-1):p=y+1}return g}function r(u,l,f,p,m){for(var g=p-1;p<=m;){var y=p+m>>>1,b=u[y],x=f!==void 0?f(b,l):b-l;x<0?(g=y,p=y+1):m=y-1}return g}function s(u,l,f,p,m){for(var g=p-1;p<=m;){var y=p+m>>>1,b=u[y],x=f!==void 0?f(b,l):b-l;x<=0?(g=y,p=y+1):m=y-1}return g}function o(u,l,f,p,m){for(;p<=m;){var g=p+m>>>1,y=u[g],b=f!==void 0?f(y,l):y-l;if(b===0)return g;b<=0?p=g+1:m=g-1}return-1}function a(u,l,f,p,m,g){return typeof f=="function"?g(u,l,f,p===void 0?0:p|0,m===void 0?u.length-1:m|0):g(u,l,void 0,f===void 0?0:f|0,p===void 0?u.length-1:p|0)}t.exports={ge:function(u,l,f,p,m){return a(u,l,f,p,m,e)},gt:function(u,l,f,p,m){return a(u,l,f,p,m,n)},lt:function(u,l,f,p,m){return a(u,l,f,p,m,r)},le:function(u,l,f,p,m){return a(u,l,f,p,m,s)},eq:function(u,l,f,p,m){return a(u,l,f,p,m,o)}}}}),qu=dn({"node_modules/two-product/two-product.js"(i,t){"use strict";t.exports=n;var e=+(Math.pow(2,27)+1);function n(r,s,o){var a=r*s,u=e*r,l=u-r,f=u-l,p=r-f,m=e*s,g=m-s,y=m-g,b=s-y,x=a-f*y,_=x-p*y,T=_-f*b,d=p*b-T;return o?(o[0]=d,o[1]=a,o):[d,a]}}}),ym=dn({"node_modules/robust-sum/robust-sum.js"(i,t){"use strict";t.exports=n;function e(r,s){var o=r+s,a=o-r,u=o-a,l=s-a,f=r-u,p=f+l;return p?[p,o]:[o]}function n(r,s){var o=r.length|0,a=s.length|0;if(o===1&&a===1)return e(r[0],s[0]);var u=o+a,l=new Array(u),f=0,p=0,m=0,g=Math.abs,y=r[p],b=g(y),x=s[m],_=g(x),T,d;b<_?(d=y,p+=1,p<o&&(y=r[p],b=g(y))):(d=x,m+=1,m<a&&(x=s[m],_=g(x))),p<o&&b<_||m>=a?(T=y,p+=1,p<o&&(y=r[p],b=g(y))):(T=x,m+=1,m<a&&(x=s[m],_=g(x)));for(var c=T+d,v=c-T,h=d-v,C=h,A=c,S,M,w,E,R;p<o&&m<a;)b<_?(T=y,p+=1,p<o&&(y=r[p],b=g(y))):(T=x,m+=1,m<a&&(x=s[m],_=g(x))),d=C,c=T+d,v=c-T,h=d-v,h&&(l[f++]=h),S=A+c,M=S-A,w=S-M,E=c-M,R=A-w,C=R+E,A=S;for(;p<o;)T=y,d=C,c=T+d,v=c-T,h=d-v,h&&(l[f++]=h),S=A+c,M=S-A,w=S-M,E=c-M,R=A-w,C=R+E,A=S,p+=1,p<o&&(y=r[p]);for(;m<a;)T=x,d=C,c=T+d,v=c-T,h=d-v,h&&(l[f++]=h),S=A+c,M=S-A,w=S-M,E=c-M,R=A-w,C=R+E,A=S,m+=1,m<a&&(x=s[m]);return C&&(l[f++]=C),A&&(l[f++]=A),f||(l[f++]=0),l.length=f,l}}}),nS=dn({"node_modules/two-sum/two-sum.js"(i,t){"use strict";t.exports=e;function e(n,r,s){var o=n+r,a=o-n,u=o-a,l=r-a,f=n-u;return s?(s[0]=f+l,s[1]=o,s):[f+l,o]}}}),vm=dn({"node_modules/robust-scale/robust-scale.js"(i,t){"use strict";var e=qu(),n=nS();t.exports=r;function r(s,o){var a=s.length;if(a===1){var u=e(s[0],o);return u[0]?u:[u[1]]}var l=new Array(2*a),f=[.1,.1],p=[.1,.1],m=0;e(s[0],o,f),f[0]&&(l[m++]=f[0]);for(var g=1;g<a;++g){e(s[g],o,p);var y=f[1];n(y,p[0],f),f[0]&&(l[m++]=f[0]);var b=p[1],x=f[1],_=b+x,T=_-b,d=x-T;f[1]=_,d&&(l[m++]=d)}return f[1]&&(l[m++]=f[1]),m===0&&(l[m++]=0),l.length=m,l}}}),Mm=dn({"node_modules/robust-subtract/robust-diff.js"(i,t){"use strict";t.exports=n;function e(r,s){var o=r+s,a=o-r,u=o-a,l=s-a,f=r-u,p=f+l;return p?[p,o]:[o]}function n(r,s){var o=r.length|0,a=s.length|0;if(o===1&&a===1)return e(r[0],-s[0]);var u=o+a,l=new Array(u),f=0,p=0,m=0,g=Math.abs,y=r[p],b=g(y),x=-s[m],_=g(x),T,d;b<_?(d=y,p+=1,p<o&&(y=r[p],b=g(y))):(d=x,m+=1,m<a&&(x=-s[m],_=g(x))),p<o&&b<_||m>=a?(T=y,p+=1,p<o&&(y=r[p],b=g(y))):(T=x,m+=1,m<a&&(x=-s[m],_=g(x)));for(var c=T+d,v=c-T,h=d-v,C=h,A=c,S,M,w,E,R;p<o&&m<a;)b<_?(T=y,p+=1,p<o&&(y=r[p],b=g(y))):(T=x,m+=1,m<a&&(x=-s[m],_=g(x))),d=C,c=T+d,v=c-T,h=d-v,h&&(l[f++]=h),S=A+c,M=S-A,w=S-M,E=c-M,R=A-w,C=R+E,A=S;for(;p<o;)T=y,d=C,c=T+d,v=c-T,h=d-v,h&&(l[f++]=h),S=A+c,M=S-A,w=S-M,E=c-M,R=A-w,C=R+E,A=S,p+=1,p<o&&(y=r[p]);for(;m<a;)T=x,d=C,c=T+d,v=c-T,h=d-v,h&&(l[f++]=h),S=A+c,M=S-A,w=S-M,E=c-M,R=A-w,C=R+E,A=S,m+=1,m<a&&(x=-s[m]);return C&&(l[f++]=C),A&&(l[f++]=A),f||(l[f++]=0),l.length=f,l}}}),iS=dn({"node_modules/robust-orientation/orientation.js"(i,t){"use strict";var e=qu(),n=ym(),r=vm(),s=Mm(),o=5,a=11102230246251565e-32,u=(3+16*a)*a,l=(7+56*a)*a;function f(c,v,h,C){return function(S,M,w){var E=c(c(v(M[1],w[0]),v(-w[1],M[0])),c(v(S[1],M[0]),v(-M[1],S[0]))),R=c(v(S[1],w[0]),v(-w[1],S[0])),z=C(E,R);return z[z.length-1]}}function p(c,v,h,C){return function(S,M,w,E){var R=c(c(h(c(v(w[1],E[0]),v(-E[1],w[0])),M[2]),c(h(c(v(M[1],E[0]),v(-E[1],M[0])),-w[2]),h(c(v(M[1],w[0]),v(-w[1],M[0])),E[2]))),c(h(c(v(M[1],E[0]),v(-E[1],M[0])),S[2]),c(h(c(v(S[1],E[0]),v(-E[1],S[0])),-M[2]),h(c(v(S[1],M[0]),v(-M[1],S[0])),E[2])))),z=c(c(h(c(v(w[1],E[0]),v(-E[1],w[0])),S[2]),c(h(c(v(S[1],E[0]),v(-E[1],S[0])),-w[2]),h(c(v(S[1],w[0]),v(-w[1],S[0])),E[2]))),c(h(c(v(M[1],w[0]),v(-w[1],M[0])),S[2]),c(h(c(v(S[1],w[0]),v(-w[1],S[0])),-M[2]),h(c(v(S[1],M[0]),v(-M[1],S[0])),w[2])))),V=C(R,z);return V[V.length-1]}}function m(c,v,h,C){return function(S,M,w,E,R){var z=c(c(c(h(c(h(c(v(E[1],R[0]),v(-R[1],E[0])),w[2]),c(h(c(v(w[1],R[0]),v(-R[1],w[0])),-E[2]),h(c(v(w[1],E[0]),v(-E[1],w[0])),R[2]))),M[3]),c(h(c(h(c(v(E[1],R[0]),v(-R[1],E[0])),M[2]),c(h(c(v(M[1],R[0]),v(-R[1],M[0])),-E[2]),h(c(v(M[1],E[0]),v(-E[1],M[0])),R[2]))),-w[3]),h(c(h(c(v(w[1],R[0]),v(-R[1],w[0])),M[2]),c(h(c(v(M[1],R[0]),v(-R[1],M[0])),-w[2]),h(c(v(M[1],w[0]),v(-w[1],M[0])),R[2]))),E[3]))),c(h(c(h(c(v(w[1],E[0]),v(-E[1],w[0])),M[2]),c(h(c(v(M[1],E[0]),v(-E[1],M[0])),-w[2]),h(c(v(M[1],w[0]),v(-w[1],M[0])),E[2]))),-R[3]),c(h(c(h(c(v(E[1],R[0]),v(-R[1],E[0])),M[2]),c(h(c(v(M[1],R[0]),v(-R[1],M[0])),-E[2]),h(c(v(M[1],E[0]),v(-E[1],M[0])),R[2]))),S[3]),h(c(h(c(v(E[1],R[0]),v(-R[1],E[0])),S[2]),c(h(c(v(S[1],R[0]),v(-R[1],S[0])),-E[2]),h(c(v(S[1],E[0]),v(-E[1],S[0])),R[2]))),-M[3])))),c(c(h(c(h(c(v(M[1],R[0]),v(-R[1],M[0])),S[2]),c(h(c(v(S[1],R[0]),v(-R[1],S[0])),-M[2]),h(c(v(S[1],M[0]),v(-M[1],S[0])),R[2]))),E[3]),c(h(c(h(c(v(M[1],E[0]),v(-E[1],M[0])),S[2]),c(h(c(v(S[1],E[0]),v(-E[1],S[0])),-M[2]),h(c(v(S[1],M[0]),v(-M[1],S[0])),E[2]))),-R[3]),h(c(h(c(v(w[1],E[0]),v(-E[1],w[0])),M[2]),c(h(c(v(M[1],E[0]),v(-E[1],M[0])),-w[2]),h(c(v(M[1],w[0]),v(-w[1],M[0])),E[2]))),S[3]))),c(h(c(h(c(v(w[1],E[0]),v(-E[1],w[0])),S[2]),c(h(c(v(S[1],E[0]),v(-E[1],S[0])),-w[2]),h(c(v(S[1],w[0]),v(-w[1],S[0])),E[2]))),-M[3]),c(h(c(h(c(v(M[1],E[0]),v(-E[1],M[0])),S[2]),c(h(c(v(S[1],E[0]),v(-E[1],S[0])),-M[2]),h(c(v(S[1],M[0]),v(-M[1],S[0])),E[2]))),w[3]),h(c(h(c(v(M[1],w[0]),v(-w[1],M[0])),S[2]),c(h(c(v(S[1],w[0]),v(-w[1],S[0])),-M[2]),h(c(v(S[1],M[0]),v(-M[1],S[0])),w[2]))),-E[3]))))),V=c(c(c(h(c(h(c(v(E[1],R[0]),v(-R[1],E[0])),w[2]),c(h(c(v(w[1],R[0]),v(-R[1],w[0])),-E[2]),h(c(v(w[1],E[0]),v(-E[1],w[0])),R[2]))),S[3]),h(c(h(c(v(E[1],R[0]),v(-R[1],E[0])),S[2]),c(h(c(v(S[1],R[0]),v(-R[1],S[0])),-E[2]),h(c(v(S[1],E[0]),v(-E[1],S[0])),R[2]))),-w[3])),c(h(c(h(c(v(w[1],R[0]),v(-R[1],w[0])),S[2]),c(h(c(v(S[1],R[0]),v(-R[1],S[0])),-w[2]),h(c(v(S[1],w[0]),v(-w[1],S[0])),R[2]))),E[3]),h(c(h(c(v(w[1],E[0]),v(-E[1],w[0])),S[2]),c(h(c(v(S[1],E[0]),v(-E[1],S[0])),-w[2]),h(c(v(S[1],w[0]),v(-w[1],S[0])),E[2]))),-R[3]))),c(c(h(c(h(c(v(w[1],R[0]),v(-R[1],w[0])),M[2]),c(h(c(v(M[1],R[0]),v(-R[1],M[0])),-w[2]),h(c(v(M[1],w[0]),v(-w[1],M[0])),R[2]))),S[3]),h(c(h(c(v(w[1],R[0]),v(-R[1],w[0])),S[2]),c(h(c(v(S[1],R[0]),v(-R[1],S[0])),-w[2]),h(c(v(S[1],w[0]),v(-w[1],S[0])),R[2]))),-M[3])),c(h(c(h(c(v(M[1],R[0]),v(-R[1],M[0])),S[2]),c(h(c(v(S[1],R[0]),v(-R[1],S[0])),-M[2]),h(c(v(S[1],M[0]),v(-M[1],S[0])),R[2]))),w[3]),h(c(h(c(v(M[1],w[0]),v(-w[1],M[0])),S[2]),c(h(c(v(S[1],w[0]),v(-w[1],S[0])),-M[2]),h(c(v(S[1],M[0]),v(-M[1],S[0])),w[2]))),-R[3])))),H=C(z,V);return H[H.length-1]}}function g(c){var v=c===3?f:c===4?p:m;return v(n,e,r,s)}var y=g(3),b=g(4),x=[function(){return 0},function(){return 0},function(v,h){return h[0]-v[0]},function(v,h,C){var A=(v[1]-C[1])*(h[0]-C[0]),S=(v[0]-C[0])*(h[1]-C[1]),M=A-S,w;if(A>0){if(S<=0)return M;w=A+S}else if(A<0){if(S>=0)return M;w=-(A+S)}else return M;var E=u*w;return M>=E||M<=-E?M:y(v,h,C)},function(v,h,C,A){var S=v[0]-A[0],M=h[0]-A[0],w=C[0]-A[0],E=v[1]-A[1],R=h[1]-A[1],z=C[1]-A[1],V=v[2]-A[2],H=h[2]-A[2],q=C[2]-A[2],O=M*z,st=w*R,dt=w*E,ft=S*z,_t=S*R,wt=M*E,Z=V*(O-st)+H*(dt-ft)+q*(_t-wt),k=(Math.abs(O)+Math.abs(st))*Math.abs(V)+(Math.abs(dt)+Math.abs(ft))*Math.abs(H)+(Math.abs(_t)+Math.abs(wt))*Math.abs(q),D=l*k;return Z>D||-Z>D?Z:b(v,h,C,A)}];function _(c){var v=x[c.length];return v||(v=x[c.length]=g(c.length)),v.apply(void 0,c)}function T(c,v,h,C,A,S,M){return function(E,R,z,V,H){switch(arguments.length){case 0:case 1:return 0;case 2:return C(E,R);case 3:return A(E,R,z);case 4:return S(E,R,z,V);case 5:return M(E,R,z,V,H)}for(var q=new Array(arguments.length),O=0;O<arguments.length;++O)q[O]=arguments[O];return c(q)}}function d(){for(;x.length<=o;)x.push(g(x.length));t.exports=T.apply(void 0,[_].concat(x));for(var c=0;c<=o;++c)t.exports[c]=x[c]}d()}}),rS=dn({"node_modules/cdt2d/lib/monotone.js"(i,t){"use strict";var e=xl(),n=iS()[3],r=0,s=1,o=2;t.exports=b;function a(x,_,T,d,c){this.a=x,this.b=_,this.idx=T,this.lowerIds=d,this.upperIds=c}function u(x,_,T,d){this.a=x,this.b=_,this.type=T,this.idx=d}function l(x,_){var T=x.a[0]-_.a[0]||x.a[1]-_.a[1]||x.type-_.type;return T||x.type!==r&&(T=n(x.a,x.b,_.b),T)?T:x.idx-_.idx}function f(x,_){return n(x.a,x.b,_)}function p(x,_,T,d,c){for(var v=e.lt(_,d,f),h=e.gt(_,d,f),C=v;C<h;++C){for(var A=_[C],S=A.lowerIds,w=S.length;w>1&&n(T[S[w-2]],T[S[w-1]],d)>0;)x.push([S[w-1],S[w-2],c]),w-=1;S.length=w,S.push(c);for(var M=A.upperIds,w=M.length;w>1&&n(T[M[w-2]],T[M[w-1]],d)<0;)x.push([M[w-2],M[w-1],c]),w-=1;M.length=w,M.push(c)}}function m(x,_){var T;return x.a[0]<_.a[0]?T=n(x.a,x.b,_.a):T=n(_.b,_.a,x.a),T||(_.b[0]<x.b[0]?T=n(x.a,x.b,_.b):T=n(_.b,_.a,x.b),T||x.idx-_.idx)}function g(x,_,T){var d=e.le(x,T,m),c=x[d],v=c.upperIds,h=v[v.length-1];c.upperIds=[h],x.splice(d+1,0,new a(T.a,T.b,T.idx,[h],v))}function y(x,_,T){var d=T.a;T.a=T.b,T.b=d;var c=e.eq(x,T,m),v=x[c],h=x[c-1];h.upperIds=v.upperIds,x.splice(c,1)}function b(x,_){for(var T=x.length,d=_.length,c=[],v=0;v<T;++v)c.push(new u(x[v],null,r,v));for(var v=0;v<d;++v){var h=_[v],C=x[h[0]],A=x[h[1]];C[0]<A[0]?c.push(new u(C,A,o,v),new u(A,C,s,v)):C[0]>A[0]&&c.push(new u(A,C,o,v),new u(C,A,s,v))}c.sort(l);for(var S=c[0].a[0]-(1+Math.abs(c[0].a[0]))*Math.pow(2,-52),M=[new a([S,1],[S,0],-1,[],[],[],[])],w=[],v=0,E=c.length;v<E;++v){var R=c[v],z=R.type;z===r?p(w,M,x,R.a,R.idx):z===o?g(M,x,R):y(M,x,R)}return w}}}),sS=dn({"node_modules/cdt2d/lib/triangulation.js"(i,t){"use strict";var e=xl();t.exports=o;function n(a,u){this.stars=a,this.edges=u}var r=n.prototype;function s(a,u,l){for(var f=1,p=a.length;f<p;f+=2)if(a[f-1]===u&&a[f]===l){a[f-1]=a[p-2],a[f]=a[p-1],a.length=p-2;return}}r.isConstraint=(function(){var a=[0,0];function u(l,f){return l[0]-f[0]||l[1]-f[1]}return function(l,f){return a[0]=Math.min(l,f),a[1]=Math.max(l,f),e.eq(this.edges,a,u)>=0}})(),r.removeTriangle=function(a,u,l){var f=this.stars;s(f[a],u,l),s(f[u],l,a),s(f[l],a,u)},r.addTriangle=function(a,u,l){var f=this.stars;f[a].push(u,l),f[u].push(l,a),f[l].push(a,u)},r.opposite=function(a,u){for(var l=this.stars[u],f=1,p=l.length;f<p;f+=2)if(l[f]===a)return l[f-1];return-1},r.flip=function(a,u){var l=this.opposite(a,u),f=this.opposite(u,a);this.removeTriangle(a,u,l),this.removeTriangle(u,a,f),this.addTriangle(a,f,l),this.addTriangle(u,l,f)},r.edges=function(){for(var a=this.stars,u=[],l=0,f=a.length;l<f;++l)for(var p=a[l],m=0,g=p.length;m<g;m+=2)u.push([p[m],p[m+1]]);return u},r.cells=function(){for(var a=this.stars,u=[],l=0,f=a.length;l<f;++l)for(var p=a[l],m=0,g=p.length;m<g;m+=2){var y=p[m],b=p[m+1];l<Math.min(y,b)&&u.push([l,y,b])}return u};function o(a,u){for(var l=new Array(a),f=0;f<a;++f)l[f]=[];return new n(l,u)}}}),oS=dn({"node_modules/robust-in-sphere/in-sphere.js"(i,t){"use strict";var e=qu(),n=ym(),r=Mm(),s=vm(),o=6;function a(d){var c=d===3?p:d===4?m:d===5?g:y;return c(n,r,e,s)}function u(){return 0}function l(){return 0}function f(){return 0}function p(d,c,v,h){function C(A,S,M){var w=v(A[0],A[0]),E=h(w,S[0]),R=h(w,M[0]),z=v(S[0],S[0]),V=h(z,A[0]),H=h(z,M[0]),q=v(M[0],M[0]),O=h(q,A[0]),st=h(q,S[0]),dt=d(c(st,H),c(V,E)),ft=c(O,R),_t=c(dt,ft);return _t[_t.length-1]}return C}function m(d,c,v,h){function C(A,S,M,w){var E=d(v(A[0],A[0]),v(A[1],A[1])),R=h(E,S[0]),z=h(E,M[0]),V=h(E,w[0]),H=d(v(S[0],S[0]),v(S[1],S[1])),q=h(H,A[0]),O=h(H,M[0]),st=h(H,w[0]),dt=d(v(M[0],M[0]),v(M[1],M[1])),ft=h(dt,A[0]),_t=h(dt,S[0]),wt=h(dt,w[0]),Z=d(v(w[0],w[0]),v(w[1],w[1])),k=h(Z,A[0]),D=h(Z,S[0]),I=h(Z,M[0]),K=d(d(h(c(I,wt),S[1]),d(h(c(D,st),-M[1]),h(c(_t,O),w[1]))),d(h(c(D,st),A[1]),d(h(c(k,V),-S[1]),h(c(q,R),w[1])))),et=d(d(h(c(I,wt),A[1]),d(h(c(k,V),-M[1]),h(c(ft,z),w[1]))),d(h(c(_t,O),A[1]),d(h(c(ft,z),-S[1]),h(c(q,R),M[1])))),Y=c(K,et);return Y[Y.length-1]}return C}function g(d,c,v,h){function C(A,S,M,w,E){var R=d(v(A[0],A[0]),d(v(A[1],A[1]),v(A[2],A[2]))),z=h(R,S[0]),V=h(R,M[0]),H=h(R,w[0]),q=h(R,E[0]),O=d(v(S[0],S[0]),d(v(S[1],S[1]),v(S[2],S[2]))),st=h(O,A[0]),dt=h(O,M[0]),ft=h(O,w[0]),_t=h(O,E[0]),wt=d(v(M[0],M[0]),d(v(M[1],M[1]),v(M[2],M[2]))),Z=h(wt,A[0]),k=h(wt,S[0]),D=h(wt,w[0]),I=h(wt,E[0]),K=d(v(w[0],w[0]),d(v(w[1],w[1]),v(w[2],w[2]))),et=h(K,A[0]),Y=h(K,S[0]),at=h(K,M[0]),mt=h(K,E[0]),U=d(v(E[0],E[0]),d(v(E[1],E[1]),v(E[2],E[2]))),W=h(U,A[0]),X=h(U,S[0]),$=h(U,M[0]),J=h(U,w[0]),G=d(d(d(h(d(h(c(J,mt),M[1]),d(h(c($,I),-w[1]),h(c(at,D),E[1]))),S[2]),d(h(d(h(c(J,mt),S[1]),d(h(c(X,_t),-w[1]),h(c(Y,ft),E[1]))),-M[2]),h(d(h(c($,I),S[1]),d(h(c(X,_t),-M[1]),h(c(k,dt),E[1]))),w[2]))),d(h(d(h(c(at,D),S[1]),d(h(c(Y,ft),-M[1]),h(c(k,dt),w[1]))),-E[2]),d(h(d(h(c(J,mt),S[1]),d(h(c(X,_t),-w[1]),h(c(Y,ft),E[1]))),A[2]),h(d(h(c(J,mt),A[1]),d(h(c(W,q),-w[1]),h(c(et,H),E[1]))),-S[2])))),d(d(h(d(h(c(X,_t),A[1]),d(h(c(W,q),-S[1]),h(c(st,z),E[1]))),w[2]),d(h(d(h(c(Y,ft),A[1]),d(h(c(et,H),-S[1]),h(c(st,z),w[1]))),-E[2]),h(d(h(c(at,D),S[1]),d(h(c(Y,ft),-M[1]),h(c(k,dt),w[1]))),A[2]))),d(h(d(h(c(at,D),A[1]),d(h(c(et,H),-M[1]),h(c(Z,V),w[1]))),-S[2]),d(h(d(h(c(Y,ft),A[1]),d(h(c(et,H),-S[1]),h(c(st,z),w[1]))),M[2]),h(d(h(c(k,dt),A[1]),d(h(c(Z,V),-S[1]),h(c(st,z),M[1]))),-w[2]))))),L=d(d(d(h(d(h(c(J,mt),M[1]),d(h(c($,I),-w[1]),h(c(at,D),E[1]))),A[2]),h(d(h(c(J,mt),A[1]),d(h(c(W,q),-w[1]),h(c(et,H),E[1]))),-M[2])),d(h(d(h(c($,I),A[1]),d(h(c(W,q),-M[1]),h(c(Z,V),E[1]))),w[2]),h(d(h(c(at,D),A[1]),d(h(c(et,H),-M[1]),h(c(Z,V),w[1]))),-E[2]))),d(d(h(d(h(c($,I),S[1]),d(h(c(X,_t),-M[1]),h(c(k,dt),E[1]))),A[2]),h(d(h(c($,I),A[1]),d(h(c(W,q),-M[1]),h(c(Z,V),E[1]))),-S[2])),d(h(d(h(c(X,_t),A[1]),d(h(c(W,q),-S[1]),h(c(st,z),E[1]))),M[2]),h(d(h(c(k,dt),A[1]),d(h(c(Z,V),-S[1]),h(c(st,z),M[1]))),-E[2])))),it=c(G,L);return it[it.length-1]}return C}function y(d,c,v,h){function C(A,S,M,w,E,R){var z=d(d(v(A[0],A[0]),v(A[1],A[1])),d(v(A[2],A[2]),v(A[3],A[3]))),V=h(z,S[0]),H=h(z,M[0]),q=h(z,w[0]),O=h(z,E[0]),st=h(z,R[0]),dt=d(d(v(S[0],S[0]),v(S[1],S[1])),d(v(S[2],S[2]),v(S[3],S[3]))),ft=h(dt,A[0]),_t=h(dt,M[0]),wt=h(dt,w[0]),Z=h(dt,E[0]),k=h(dt,R[0]),D=d(d(v(M[0],M[0]),v(M[1],M[1])),d(v(M[2],M[2]),v(M[3],M[3]))),I=h(D,A[0]),K=h(D,S[0]),et=h(D,w[0]),Y=h(D,E[0]),at=h(D,R[0]),mt=d(d(v(w[0],w[0]),v(w[1],w[1])),d(v(w[2],w[2]),v(w[3],w[3]))),U=h(mt,A[0]),W=h(mt,S[0]),X=h(mt,M[0]),$=h(mt,E[0]),J=h(mt,R[0]),G=d(d(v(E[0],E[0]),v(E[1],E[1])),d(v(E[2],E[2]),v(E[3],E[3]))),L=h(G,A[0]),it=h(G,S[0]),gt=h(G,M[0]),Tt=h(G,w[0]),B=h(G,R[0]),P=d(d(v(R[0],R[0]),v(R[1],R[1])),d(v(R[2],R[2]),v(R[3],R[3]))),j=h(P,A[0]),rt=h(P,S[0]),ut=h(P,M[0]),ot=h(P,w[0]),St=h(P,E[0]),yt=d(d(d(h(d(d(h(d(h(c(St,B),w[1]),d(h(c(ot,J),-E[1]),h(c(Tt,$),R[1]))),M[2]),h(d(h(c(St,B),M[1]),d(h(c(ut,at),-E[1]),h(c(gt,Y),R[1]))),-w[2])),d(h(d(h(c(ot,J),M[1]),d(h(c(ut,at),-w[1]),h(c(X,et),R[1]))),E[2]),h(d(h(c(Tt,$),M[1]),d(h(c(gt,Y),-w[1]),h(c(X,et),E[1]))),-R[2]))),S[3]),d(h(d(d(h(d(h(c(St,B),w[1]),d(h(c(ot,J),-E[1]),h(c(Tt,$),R[1]))),S[2]),h(d(h(c(St,B),S[1]),d(h(c(rt,k),-E[1]),h(c(it,Z),R[1]))),-w[2])),d(h(d(h(c(ot,J),S[1]),d(h(c(rt,k),-w[1]),h(c(W,wt),R[1]))),E[2]),h(d(h(c(Tt,$),S[1]),d(h(c(it,Z),-w[1]),h(c(W,wt),E[1]))),-R[2]))),-M[3]),h(d(d(h(d(h(c(St,B),M[1]),d(h(c(ut,at),-E[1]),h(c(gt,Y),R[1]))),S[2]),h(d(h(c(St,B),S[1]),d(h(c(rt,k),-E[1]),h(c(it,Z),R[1]))),-M[2])),d(h(d(h(c(ut,at),S[1]),d(h(c(rt,k),-M[1]),h(c(K,_t),R[1]))),E[2]),h(d(h(c(gt,Y),S[1]),d(h(c(it,Z),-M[1]),h(c(K,_t),E[1]))),-R[2]))),w[3]))),d(d(h(d(d(h(d(h(c(ot,J),M[1]),d(h(c(ut,at),-w[1]),h(c(X,et),R[1]))),S[2]),h(d(h(c(ot,J),S[1]),d(h(c(rt,k),-w[1]),h(c(W,wt),R[1]))),-M[2])),d(h(d(h(c(ut,at),S[1]),d(h(c(rt,k),-M[1]),h(c(K,_t),R[1]))),w[2]),h(d(h(c(X,et),S[1]),d(h(c(W,wt),-M[1]),h(c(K,_t),w[1]))),-R[2]))),-E[3]),h(d(d(h(d(h(c(Tt,$),M[1]),d(h(c(gt,Y),-w[1]),h(c(X,et),E[1]))),S[2]),h(d(h(c(Tt,$),S[1]),d(h(c(it,Z),-w[1]),h(c(W,wt),E[1]))),-M[2])),d(h(d(h(c(gt,Y),S[1]),d(h(c(it,Z),-M[1]),h(c(K,_t),E[1]))),w[2]),h(d(h(c(X,et),S[1]),d(h(c(W,wt),-M[1]),h(c(K,_t),w[1]))),-E[2]))),R[3])),d(h(d(d(h(d(h(c(St,B),w[1]),d(h(c(ot,J),-E[1]),h(c(Tt,$),R[1]))),S[2]),h(d(h(c(St,B),S[1]),d(h(c(rt,k),-E[1]),h(c(it,Z),R[1]))),-w[2])),d(h(d(h(c(ot,J),S[1]),d(h(c(rt,k),-w[1]),h(c(W,wt),R[1]))),E[2]),h(d(h(c(Tt,$),S[1]),d(h(c(it,Z),-w[1]),h(c(W,wt),E[1]))),-R[2]))),A[3]),h(d(d(h(d(h(c(St,B),w[1]),d(h(c(ot,J),-E[1]),h(c(Tt,$),R[1]))),A[2]),h(d(h(c(St,B),A[1]),d(h(c(j,st),-E[1]),h(c(L,O),R[1]))),-w[2])),d(h(d(h(c(ot,J),A[1]),d(h(c(j,st),-w[1]),h(c(U,q),R[1]))),E[2]),h(d(h(c(Tt,$),A[1]),d(h(c(L,O),-w[1]),h(c(U,q),E[1]))),-R[2]))),-S[3])))),d(d(d(h(d(d(h(d(h(c(St,B),S[1]),d(h(c(rt,k),-E[1]),h(c(it,Z),R[1]))),A[2]),h(d(h(c(St,B),A[1]),d(h(c(j,st),-E[1]),h(c(L,O),R[1]))),-S[2])),d(h(d(h(c(rt,k),A[1]),d(h(c(j,st),-S[1]),h(c(ft,V),R[1]))),E[2]),h(d(h(c(it,Z),A[1]),d(h(c(L,O),-S[1]),h(c(ft,V),E[1]))),-R[2]))),w[3]),h(d(d(h(d(h(c(ot,J),S[1]),d(h(c(rt,k),-w[1]),h(c(W,wt),R[1]))),A[2]),h(d(h(c(ot,J),A[1]),d(h(c(j,st),-w[1]),h(c(U,q),R[1]))),-S[2])),d(h(d(h(c(rt,k),A[1]),d(h(c(j,st),-S[1]),h(c(ft,V),R[1]))),w[2]),h(d(h(c(W,wt),A[1]),d(h(c(U,q),-S[1]),h(c(ft,V),w[1]))),-R[2]))),-E[3])),d(h(d(d(h(d(h(c(Tt,$),S[1]),d(h(c(it,Z),-w[1]),h(c(W,wt),E[1]))),A[2]),h(d(h(c(Tt,$),A[1]),d(h(c(L,O),-w[1]),h(c(U,q),E[1]))),-S[2])),d(h(d(h(c(it,Z),A[1]),d(h(c(L,O),-S[1]),h(c(ft,V),E[1]))),w[2]),h(d(h(c(W,wt),A[1]),d(h(c(U,q),-S[1]),h(c(ft,V),w[1]))),-E[2]))),R[3]),h(d(d(h(d(h(c(ot,J),M[1]),d(h(c(ut,at),-w[1]),h(c(X,et),R[1]))),S[2]),h(d(h(c(ot,J),S[1]),d(h(c(rt,k),-w[1]),h(c(W,wt),R[1]))),-M[2])),d(h(d(h(c(ut,at),S[1]),d(h(c(rt,k),-M[1]),h(c(K,_t),R[1]))),w[2]),h(d(h(c(X,et),S[1]),d(h(c(W,wt),-M[1]),h(c(K,_t),w[1]))),-R[2]))),A[3]))),d(d(h(d(d(h(d(h(c(ot,J),M[1]),d(h(c(ut,at),-w[1]),h(c(X,et),R[1]))),A[2]),h(d(h(c(ot,J),A[1]),d(h(c(j,st),-w[1]),h(c(U,q),R[1]))),-M[2])),d(h(d(h(c(ut,at),A[1]),d(h(c(j,st),-M[1]),h(c(I,H),R[1]))),w[2]),h(d(h(c(X,et),A[1]),d(h(c(U,q),-M[1]),h(c(I,H),w[1]))),-R[2]))),-S[3]),h(d(d(h(d(h(c(ot,J),S[1]),d(h(c(rt,k),-w[1]),h(c(W,wt),R[1]))),A[2]),h(d(h(c(ot,J),A[1]),d(h(c(j,st),-w[1]),h(c(U,q),R[1]))),-S[2])),d(h(d(h(c(rt,k),A[1]),d(h(c(j,st),-S[1]),h(c(ft,V),R[1]))),w[2]),h(d(h(c(W,wt),A[1]),d(h(c(U,q),-S[1]),h(c(ft,V),w[1]))),-R[2]))),M[3])),d(h(d(d(h(d(h(c(ut,at),S[1]),d(h(c(rt,k),-M[1]),h(c(K,_t),R[1]))),A[2]),h(d(h(c(ut,at),A[1]),d(h(c(j,st),-M[1]),h(c(I,H),R[1]))),-S[2])),d(h(d(h(c(rt,k),A[1]),d(h(c(j,st),-S[1]),h(c(ft,V),R[1]))),M[2]),h(d(h(c(K,_t),A[1]),d(h(c(I,H),-S[1]),h(c(ft,V),M[1]))),-R[2]))),-w[3]),h(d(d(h(d(h(c(X,et),S[1]),d(h(c(W,wt),-M[1]),h(c(K,_t),w[1]))),A[2]),h(d(h(c(X,et),A[1]),d(h(c(U,q),-M[1]),h(c(I,H),w[1]))),-S[2])),d(h(d(h(c(W,wt),A[1]),d(h(c(U,q),-S[1]),h(c(ft,V),w[1]))),M[2]),h(d(h(c(K,_t),A[1]),d(h(c(I,H),-S[1]),h(c(ft,V),M[1]))),-w[2]))),R[3]))))),Dt=d(d(d(h(d(d(h(d(h(c(St,B),w[1]),d(h(c(ot,J),-E[1]),h(c(Tt,$),R[1]))),M[2]),h(d(h(c(St,B),M[1]),d(h(c(ut,at),-E[1]),h(c(gt,Y),R[1]))),-w[2])),d(h(d(h(c(ot,J),M[1]),d(h(c(ut,at),-w[1]),h(c(X,et),R[1]))),E[2]),h(d(h(c(Tt,$),M[1]),d(h(c(gt,Y),-w[1]),h(c(X,et),E[1]))),-R[2]))),A[3]),d(h(d(d(h(d(h(c(St,B),w[1]),d(h(c(ot,J),-E[1]),h(c(Tt,$),R[1]))),A[2]),h(d(h(c(St,B),A[1]),d(h(c(j,st),-E[1]),h(c(L,O),R[1]))),-w[2])),d(h(d(h(c(ot,J),A[1]),d(h(c(j,st),-w[1]),h(c(U,q),R[1]))),E[2]),h(d(h(c(Tt,$),A[1]),d(h(c(L,O),-w[1]),h(c(U,q),E[1]))),-R[2]))),-M[3]),h(d(d(h(d(h(c(St,B),M[1]),d(h(c(ut,at),-E[1]),h(c(gt,Y),R[1]))),A[2]),h(d(h(c(St,B),A[1]),d(h(c(j,st),-E[1]),h(c(L,O),R[1]))),-M[2])),d(h(d(h(c(ut,at),A[1]),d(h(c(j,st),-M[1]),h(c(I,H),R[1]))),E[2]),h(d(h(c(gt,Y),A[1]),d(h(c(L,O),-M[1]),h(c(I,H),E[1]))),-R[2]))),w[3]))),d(d(h(d(d(h(d(h(c(ot,J),M[1]),d(h(c(ut,at),-w[1]),h(c(X,et),R[1]))),A[2]),h(d(h(c(ot,J),A[1]),d(h(c(j,st),-w[1]),h(c(U,q),R[1]))),-M[2])),d(h(d(h(c(ut,at),A[1]),d(h(c(j,st),-M[1]),h(c(I,H),R[1]))),w[2]),h(d(h(c(X,et),A[1]),d(h(c(U,q),-M[1]),h(c(I,H),w[1]))),-R[2]))),-E[3]),h(d(d(h(d(h(c(Tt,$),M[1]),d(h(c(gt,Y),-w[1]),h(c(X,et),E[1]))),A[2]),h(d(h(c(Tt,$),A[1]),d(h(c(L,O),-w[1]),h(c(U,q),E[1]))),-M[2])),d(h(d(h(c(gt,Y),A[1]),d(h(c(L,O),-M[1]),h(c(I,H),E[1]))),w[2]),h(d(h(c(X,et),A[1]),d(h(c(U,q),-M[1]),h(c(I,H),w[1]))),-E[2]))),R[3])),d(h(d(d(h(d(h(c(St,B),M[1]),d(h(c(ut,at),-E[1]),h(c(gt,Y),R[1]))),S[2]),h(d(h(c(St,B),S[1]),d(h(c(rt,k),-E[1]),h(c(it,Z),R[1]))),-M[2])),d(h(d(h(c(ut,at),S[1]),d(h(c(rt,k),-M[1]),h(c(K,_t),R[1]))),E[2]),h(d(h(c(gt,Y),S[1]),d(h(c(it,Z),-M[1]),h(c(K,_t),E[1]))),-R[2]))),A[3]),h(d(d(h(d(h(c(St,B),M[1]),d(h(c(ut,at),-E[1]),h(c(gt,Y),R[1]))),A[2]),h(d(h(c(St,B),A[1]),d(h(c(j,st),-E[1]),h(c(L,O),R[1]))),-M[2])),d(h(d(h(c(ut,at),A[1]),d(h(c(j,st),-M[1]),h(c(I,H),R[1]))),E[2]),h(d(h(c(gt,Y),A[1]),d(h(c(L,O),-M[1]),h(c(I,H),E[1]))),-R[2]))),-S[3])))),d(d(d(h(d(d(h(d(h(c(St,B),S[1]),d(h(c(rt,k),-E[1]),h(c(it,Z),R[1]))),A[2]),h(d(h(c(St,B),A[1]),d(h(c(j,st),-E[1]),h(c(L,O),R[1]))),-S[2])),d(h(d(h(c(rt,k),A[1]),d(h(c(j,st),-S[1]),h(c(ft,V),R[1]))),E[2]),h(d(h(c(it,Z),A[1]),d(h(c(L,O),-S[1]),h(c(ft,V),E[1]))),-R[2]))),M[3]),h(d(d(h(d(h(c(ut,at),S[1]),d(h(c(rt,k),-M[1]),h(c(K,_t),R[1]))),A[2]),h(d(h(c(ut,at),A[1]),d(h(c(j,st),-M[1]),h(c(I,H),R[1]))),-S[2])),d(h(d(h(c(rt,k),A[1]),d(h(c(j,st),-S[1]),h(c(ft,V),R[1]))),M[2]),h(d(h(c(K,_t),A[1]),d(h(c(I,H),-S[1]),h(c(ft,V),M[1]))),-R[2]))),-E[3])),d(h(d(d(h(d(h(c(gt,Y),S[1]),d(h(c(it,Z),-M[1]),h(c(K,_t),E[1]))),A[2]),h(d(h(c(gt,Y),A[1]),d(h(c(L,O),-M[1]),h(c(I,H),E[1]))),-S[2])),d(h(d(h(c(it,Z),A[1]),d(h(c(L,O),-S[1]),h(c(ft,V),E[1]))),M[2]),h(d(h(c(K,_t),A[1]),d(h(c(I,H),-S[1]),h(c(ft,V),M[1]))),-E[2]))),R[3]),h(d(d(h(d(h(c(Tt,$),M[1]),d(h(c(gt,Y),-w[1]),h(c(X,et),E[1]))),S[2]),h(d(h(c(Tt,$),S[1]),d(h(c(it,Z),-w[1]),h(c(W,wt),E[1]))),-M[2])),d(h(d(h(c(gt,Y),S[1]),d(h(c(it,Z),-M[1]),h(c(K,_t),E[1]))),w[2]),h(d(h(c(X,et),S[1]),d(h(c(W,wt),-M[1]),h(c(K,_t),w[1]))),-E[2]))),A[3]))),d(d(h(d(d(h(d(h(c(Tt,$),M[1]),d(h(c(gt,Y),-w[1]),h(c(X,et),E[1]))),A[2]),h(d(h(c(Tt,$),A[1]),d(h(c(L,O),-w[1]),h(c(U,q),E[1]))),-M[2])),d(h(d(h(c(gt,Y),A[1]),d(h(c(L,O),-M[1]),h(c(I,H),E[1]))),w[2]),h(d(h(c(X,et),A[1]),d(h(c(U,q),-M[1]),h(c(I,H),w[1]))),-E[2]))),-S[3]),h(d(d(h(d(h(c(Tt,$),S[1]),d(h(c(it,Z),-w[1]),h(c(W,wt),E[1]))),A[2]),h(d(h(c(Tt,$),A[1]),d(h(c(L,O),-w[1]),h(c(U,q),E[1]))),-S[2])),d(h(d(h(c(it,Z),A[1]),d(h(c(L,O),-S[1]),h(c(ft,V),E[1]))),w[2]),h(d(h(c(W,wt),A[1]),d(h(c(U,q),-S[1]),h(c(ft,V),w[1]))),-E[2]))),M[3])),d(h(d(d(h(d(h(c(gt,Y),S[1]),d(h(c(it,Z),-M[1]),h(c(K,_t),E[1]))),A[2]),h(d(h(c(gt,Y),A[1]),d(h(c(L,O),-M[1]),h(c(I,H),E[1]))),-S[2])),d(h(d(h(c(it,Z),A[1]),d(h(c(L,O),-S[1]),h(c(ft,V),E[1]))),M[2]),h(d(h(c(K,_t),A[1]),d(h(c(I,H),-S[1]),h(c(ft,V),M[1]))),-E[2]))),-w[3]),h(d(d(h(d(h(c(X,et),S[1]),d(h(c(W,wt),-M[1]),h(c(K,_t),w[1]))),A[2]),h(d(h(c(X,et),A[1]),d(h(c(U,q),-M[1]),h(c(I,H),w[1]))),-S[2])),d(h(d(h(c(W,wt),A[1]),d(h(c(U,q),-S[1]),h(c(ft,V),w[1]))),M[2]),h(d(h(c(K,_t),A[1]),d(h(c(I,H),-S[1]),h(c(ft,V),M[1]))),-w[2]))),E[3]))))),Pt=c(yt,Dt);return Pt[Pt.length-1]}return C}var b=[u,l,f];function x(d){var c=b[d.length];return c||(c=b[d.length]=a(d.length)),c.apply(void 0,d)}function _(d,c,v,h,C,A,S,M){function w(E,R,z,V,H,q){switch(arguments.length){case 0:case 1:return 0;case 2:return h(E,R);case 3:return C(E,R,z);case 4:return A(E,R,z,V);case 5:return S(E,R,z,V,H);case 6:return M(E,R,z,V,H,q)}for(var O=new Array(arguments.length),st=0;st<arguments.length;++st)O[st]=arguments[st];return d(O)}return w}function T(){for(;b.length<=o;)b.push(a(b.length));t.exports=_.apply(void 0,[x].concat(b));for(var d=0;d<=o;++d)t.exports[d]=b[d]}T()}}),aS=dn({"node_modules/cdt2d/lib/delaunay.js"(i,t){"use strict";var e=oS()[4],n=xl();t.exports=s;function r(o,a,u,l,f,p){var m=a.opposite(l,f);if(!(m<0)){if(f<l){var g=l;l=f,f=g,g=p,p=m,m=g}a.isConstraint(l,f)||e(o[l],o[f],o[p],o[m])<0&&u.push(l,f)}}function s(o,a){for(var u=[],l=o.length,f=a.stars,p=0;p<l;++p)for(var m=f[p],g=1;g<m.length;g+=2){var y=m[g];if(!(y<p)&&!a.isConstraint(p,y)){for(var b=m[g-1],x=-1,_=1;_<m.length;_+=2)if(m[_-1]===y){x=m[_];break}x<0||e(o[p],o[y],o[b],o[x])<0&&u.push(p,y)}}for(;u.length>0;){for(var y=u.pop(),p=u.pop(),b=-1,x=-1,m=f[p],T=1;T<m.length;T+=2){var d=m[T-1],c=m[T];d===y?x=c:c===y&&(b=d)}b<0||x<0||e(o[p],o[y],o[b],o[x])>=0||(a.flip(p,y),r(o,a,u,b,p,x),r(o,a,u,p,x,b),r(o,a,u,x,y,b),r(o,a,u,y,b,x))}}}}),cS=dn({"node_modules/cdt2d/lib/filter.js"(i,t){"use strict";var e=xl();t.exports=u;function n(l,f,p,m,g,y,b){this.cells=l,this.neighbor=f,this.flags=m,this.constraint=p,this.active=g,this.next=y,this.boundary=b}var r=n.prototype;function s(l,f){return l[0]-f[0]||l[1]-f[1]||l[2]-f[2]}r.locate=(function(){var l=[0,0,0];return function(f,p,m){var g=f,y=p,b=m;return p<m?p<f&&(g=p,y=m,b=f):m<f&&(g=m,y=f,b=p),g<0?-1:(l[0]=g,l[1]=y,l[2]=b,e.eq(this.cells,l,s))}})();function o(l,f){for(var p=l.cells(),m=p.length,g=0;g<m;++g){var y=p[g],b=y[0],x=y[1],_=y[2];x<_?x<b&&(y[0]=x,y[1]=_,y[2]=b):_<b&&(y[0]=_,y[1]=b,y[2]=x)}p.sort(s);for(var T=new Array(m),g=0;g<T.length;++g)T[g]=0;var d=[],c=[],v=new Array(3*m),h=new Array(3*m),C=null;f&&(C=[]);for(var A=new n(p,v,h,T,d,c,C),g=0;g<m;++g)for(var y=p[g],S=0;S<3;++S){var b=y[S],x=y[(S+1)%3],M=v[3*g+S]=A.locate(x,b,l.opposite(x,b)),w=h[3*g+S]=l.isConstraint(b,x);M<0&&(w?c.push(g):(d.push(g),T[g]=1),f&&C.push([x,b,-1]))}return A}function a(l,f,p){for(var m=0,g=0;g<l.length;++g)f[g]===p&&(l[m++]=l[g]);return l.length=m,l}function u(l,f,p){var m=o(l,p);if(f===0)return p?m.cells.concat(m.boundary):m.cells;for(var g=1,y=m.active,b=m.next,x=m.flags,_=m.cells,T=m.constraint,d=m.neighbor;y.length>0||b.length>0;){for(;y.length>0;){var c=y.pop();if(x[c]!==-g){x[c]=g;for(var v=_[c],h=0;h<3;++h){var C=d[3*c+h];C>=0&&x[C]===0&&(T[3*c+h]?b.push(C):(y.push(C),x[C]=g))}}}var A=b;b=y,y=A,b.length=0,g=-g}var S=a(_,x,f);return p?S.concat(m.boundary):S}}}),lS=dn({"node_modules/cdt2d/cdt2d.js"(i,t){var e=rS(),n=sS(),r=aS(),s=cS();t.exports=f;function o(p){return[Math.min(p[0],p[1]),Math.max(p[0],p[1])]}function a(p,m){return p[0]-m[0]||p[1]-m[1]}function u(p){return p.map(o).sort(a)}function l(p,m,g){return m in p?p[m]:g}function f(p,m,g){Array.isArray(m)?(g=g||{},m=m||[]):(g=m||{},m=[]);var y=!!l(g,"delaunay",!0),b=!!l(g,"interior",!0),x=!!l(g,"exterior",!0),_=!!l(g,"infinity",!1);if(!b&&!x||p.length===0)return[];var T=e(p,m);if(y||b!==x||_){for(var d=n(p.length,u(m)),c=0;c<T.length;++c){var v=T[c];d.addTriangle(v[0],v[1],v[2])}return y&&r(p,d),x?b?_?s(d,0,_):d.cells():s(d,1,_):s(d,-1)}else return T}}}),Sm=lS();var pn=class{constructor(t){this.createFn=t,this._pool=[],this._index=0}getInstance(){return this._index>=this._pool.length&&this._pool.push(this.createFn()),this._pool[this._index++]}clear(){this._index=0}reset(){this._pool.length=0,this._index=0}};var bm=1e-16,hS=1e-16,ir=new F,Tm=new F,wm=new pn(()=>({param:0,index:0})),uS=new pn(()=>new F);function fS(i,t,e,n){wm.clear(),t.length=0,e.length=0;for(let l=0,f=i.length;l<f;l++){let p=i[l];u(p.start),u(p.end)}for(let l=0,f=i.length;l<f;l++){let p=i[l];for(let m=l+1;m<f;m++){let g=i[m];p.distanceSqToLine3(g,ir,Tm)<bm*n&&u(Tm)}}let r=[];for(let l=0,f=i.length;l<f;l++){r.length=0;let p=i[l];for(let m=0,g=t.length;m<g;m++){let y=t[m],b=p.closestPointToPointParameter(y,!0);if(p.at(b,ir),y.distanceToSquared(ir)<bm*n){let x=wm.getInstance();x.param=b,x.index=m,r.push(x)}}r.sort(a);for(let m=0,g=r.length-1;m<g;m++){let y=r[m].index,b=r[m+1].index;y!==b&&e.push([y,b])}}let s=new Set,o=0;for(let l=0,f=e.length;l<f;l++){let p=e[l],m=Math.min(p[0],p[1]),g=Math.max(p[0],p[1]),y=m+","+g;s.has(y)||(s.add(y),e[o++]=p)}e.length=o;function a(l,f){return l.param-f.param}function u(l){for(let f=0;f<t.length;f++){let p=t[f];if(l===p||l.distanceToSquared(p)<hS*n)return f}return t.push(uS.getInstance().copy(l)),t.length-1}}var xo=class{constructor(){this.trianglePool=new pn(()=>new Ee),this.linePool=new pn(()=>new he),this.triangles=[],this.triangleIndices=[],this.constrainedEdges=[],this.triangleConnectivity=[],this.normal=new F,this.projOrigin=new F,this.projU=new F,this.projV=new F,this.baseTri=new Ee,this.baseIndices=new Array(3)}initialize(t,e=null,n=null,r=null){this.reset();let{normal:s,baseTri:o,projU:a,projV:u,projOrigin:l,constrainedEdges:f,linePool:p,baseIndices:m}=this;t.getNormal(s),o.copy(t),o.update(),m[0]=e,m[1]=n,m[2]=r,f.length=0;let g=p.getInstance();g.start.copy(o.a),g.end.copy(o.b);let y=p.getInstance();y.start.copy(o.b),y.end.copy(o.c);let b=p.getInstance();b.start.copy(o.c),b.end.copy(o.a),f.push(g,y,b),l.copy(o.a),a.subVectors(o.b,o.a).normalize(),u.crossVectors(s,a).normalize()}addConstraintEdge(t){let{constrainedEdges:e,linePool:n}=this,r=n.getInstance().copy(t);e.push(r)}_to2D(t,e){let{projOrigin:n,projU:r,projV:s}=this;return ir.subVectors(t,n),e.set(ir.dot(r),ir.dot(s),0)}_from2D(t,e,n){let{projOrigin:r,projU:s,projV:o}=this;return n.copy(r).addScaledVector(s,t).addScaledVector(o,e),n}triangulate(){let{triangles:t,trianglePool:e,triangleConnectivity:n,triangleIndices:r,linePool:s,baseTri:o,constrainedEdges:a,baseIndices:u}=this;t.length=0,e.clear();let l=[];for(let _=0,T=a.length;_<T;_++){let d=a[_],c=s.getInstance();this._to2D(d.start,c.start),this._to2D(d.end,c.end),l.push(c)}let f=0;for(let _=0;_<3;_++){let T=this._to2D(o.points[_],ir);f=Math.max(f,Math.abs(T.x),Math.abs(T.y))}let p=[],m=[];fS(l,p,m,f);let g=[];for(let _=0,T=p.length;_<T;_++){let d=p[_];g.push([d.x,d.y])}let y=Sm(g,m,{exterior:!1}),b=new Map;for(let _=0,T=m.length;_<T;_++){let d=m[_];b.set(`${d[0]}_${d[1]}`,-1),b.set(`${d[1]}_${d[0]}`,-1)}let x=`${u[0]}_${u[1]}_${u[2]}_`;for(let _=0,T=y.length;_<T;_++){let d=y[_],[c,v,h]=d,C=e.getInstance();this._from2D(g[c][0],g[c][1],C.a),this._from2D(g[v][0],g[v][1],C.b),this._from2D(g[h][0],g[h][1],C.c),t.push(C);let A=[];n.push(A);let S=[];r.push(S);for(let M=0;M<3;M++){let w=d[M];S.push(w<3?u[w]:x+w);let E=d[(M+1)%3],R=`${w}_${E}`;if(b.has(R)){let z=b.get(R);z!==-1&&(A.push(z),n[z].push(_))}else{let z=`${E}_${w}`;b.set(z,_)}}}}reset(){this.trianglePool.clear(),this.linePool.clear(),this.triangles.length=0,this.triangleIndices.length=0,this.triangleConnectivity.length=0,this.constrainedEdges.length=0}};var dS=1e-14,Yu=new F,Em=new F,Am=new F;function Fn(i,t=dS){Yu.subVectors(i.b,i.a),Em.subVectors(i.c,i.a),Am.subVectors(i.b,i.c);let e=Yu.angleTo(Em),n=Yu.angleTo(Am),r=Math.PI-e-n;return Math.abs(e)<t||Math.abs(n)<t||Math.abs(r)<t||i.a.distanceToSquared(i.b)<t||i.a.distanceToSquared(i.c)<t||i.b.distanceToSquared(i.c)<t}var Zu=1e-10,yo=1e-10,li=new he,Re=new he,hi=new F,Cm=new F,Rm=new F,yl=new Ce,$u=new Ee,vo=class{constructor(){this.trianglePool=new pn(()=>new le),this.triangles=[],this.normal=new F}initialize(t){this.reset();let{triangles:e,trianglePool:n,normal:r}=this;if(Array.isArray(t))for(let s=0,o=t.length;s<o;s++){let a=t[s];if(s===0)a.getNormal(r);else if(Math.abs(1-a.getNormal(hi).dot(r))>Zu)throw new Error("Triangle Splitter: Cannot initialize with triangles that have different normals.");let u=n.getInstance();u.copy(a),e.push(u)}else{t.getNormal(r);let s=n.getInstance();s.copy(t),e.push(s)}}splitByTriangle(t,e){let{triangles:n}=this;if(e){for(let s=0,o=n.length;s<o;s++){let a=n[s];a.coplanarCount=0}let r=[t.a,t.b,t.c];for(let s=0;s<3;s++){let o=(s+1)%3,a=r[s],u=r[o];t.getNormal(Cm).normalize(),hi.subVectors(u,a).normalize(),Rm.crossVectors(Cm,hi),yl.setFromNormalAndCoplanarPoint(Rm,a),this.splitByPlane(yl,t)}}else t.getPlane(yl),this.splitByPlane(yl,t)}splitByPlane(t,e){let{triangles:n,trianglePool:r}=this;$u.copy(e),$u.needsUpdate=!0;for(let s=0,o=n.length;s<o;s++){let a=n[s];if(!$u.intersectsTriangle(a,li,!0))continue;let{a:u,b:l,c:f}=a,p=0,m=-1,g=!1,y=[],b=[],x=[u,l,f];for(let _=0;_<3;_++){let T=(_+1)%3;li.start.copy(x[_]),li.end.copy(x[T]);let d=t.distanceToPoint(li.start),c=t.distanceToPoint(li.end);if(Math.abs(d)<yo&&Math.abs(c)<yo){g=!0;break}if(d>0?y.push(_):b.push(_),Math.abs(d)<yo)continue;let v=!!t.intersectLine(li,hi);!v&&Math.abs(c)<yo&&(hi.copy(li.end),v=!0),v&&!(hi.distanceTo(li.start)<Zu)&&(hi.distanceTo(li.end)<Zu&&(m=_),p===0?Re.start.copy(hi):Re.end.copy(hi),p++)}if(!g&&p===2&&Re.distance()>yo)if(m!==-1){m=(m+1)%3;let _=0;_===m&&(_=(_+1)%3);let T=_+1;T===m&&(T=(T+1)%3);let d=r.getInstance();d.a.copy(x[T]),d.b.copy(Re.end),d.c.copy(Re.start),Fn(d)||n.push(d),a.a.copy(x[_]),a.b.copy(Re.start),a.c.copy(Re.end),Fn(a)&&(n.splice(s,1),s--,o--)}else{let _=y.length>=2?b[0]:y[0];if(_===0){let h=Re.start;Re.start=Re.end,Re.end=h}let T=(_+1)%3,d=(_+2)%3,c=r.getInstance(),v=r.getInstance();x[T].distanceToSquared(Re.start)<x[d].distanceToSquared(Re.end)?(c.a.copy(x[T]),c.b.copy(Re.start),c.c.copy(Re.end),v.a.copy(x[T]),v.b.copy(x[d]),v.c.copy(Re.start)):(c.a.copy(x[d]),c.b.copy(Re.start),c.c.copy(Re.end),v.a.copy(x[T]),v.b.copy(x[d]),v.c.copy(Re.end)),a.a.copy(x[_]),a.b.copy(Re.end),a.c.copy(Re.start),Fn(c)||n.push(c),Fn(v)||n.push(v),Fn(a)&&(n.splice(s,1),s--,o--)}else p===3&&console.warn("TriangleClipper: Coplanar clip not handled")}}reset(){this.triangles.length=0,this.trianglePool.clear()}};var Mo=class{constructor(){this.coplanarSet=new Map,this.intersectionSet=new Map,this.edgeSet=new Map,this.ids=[]}add(t,e,n=!1){let{intersectionSet:r,coplanarSet:s,ids:o}=this;r.has(t)||(r.set(t,[]),o.push(t)),r.get(t).push(e),n&&(s.has(t)||s.set(t,new Set),s.get(t).add(e))}addIntersectionEdge(t,e){let{edgeSet:n}=this;n.has(t)||n.set(t,new Set),n.get(t).add(e)}getIntersectionEdges(t){return this.edgeSet.get(t)||null}};var Im=0,Pm=1;var Dm=3;var Ju=1e-10,pS=1e-15,mS=1e-10,gS=1e-10,Lm=new he,fs=new he,Nm=new F,Um=new F,Fm=new F,Ku=new Ce,ds=new F,vl=new F;function Om(i,t){i.getNormal(ds),t.getNormal(vl);let e=ds.dot(vl);if(Math.abs(1-Math.abs(e))>=mS)return!1;let n=ds.dot(i.a),r=ds.dot(t.a);return Math.abs(n-r)<gS}function Bm(i,t,e,n){let r=0,s=1;i.delta(Nm);let o=[t.a,t.b,t.c];for(let a=0;a<3;a++){let u=o[a],l=o[(a+1)%3];Um.subVectors(l,u),Fm.crossVectors(e,Um),Ku.setFromNormalAndCoplanarPoint(Fm,u);let f=Ku.distanceToPoint(i.start),p=Ku.normal.dot(Nm);if(Math.abs(p)<pS){if(f<-Ju)return null;continue}let m=-f/p;if(p>0?r=Math.max(r,m):s=Math.min(s,m),r>s+Ju)return null}return s-r<Ju?null:(i.at(r,n.start),i.at(s,n.end),n)}function ju(i,t,e){let n=0;i.getNormal(ds),t.getNormal(vl);let r=[t.a,t.b,t.c];for(let o=0;o<3;o++){fs.start.copy(r[o]),fs.end.copy(r[(o+1)%3]);let a=Bm(fs,i,ds,Lm);a!==null&&(n>=e.length&&e.push(new he),e[n].copy(a),n++)}let s=[i.a,i.b,i.c];for(let o=0;o<3;o++){fs.start.copy(s[o]),fs.end.copy(s[(o+1)%3]);let a=Bm(fs,t,vl,Lm);a!==null&&(n>=e.length&&e.push(new he),e[n].copy(a),n++)}return n}var ps=new qe,zm=new Gt,Ml=new he,Qu=[],Sl=new pn(()=>new he),ms=-1,gs=1,So=-2,bo=2,_s=0,rr=1,Tl=2,bl=null;function tf(i){bl=i}function ef(i,t,e=null){i.getMidpoint(ps.origin),i.getNormal(ps.direction),e&&(ps.origin.applyMatrix4(e),ps.direction.transformDirection(e));let n=t.raycastFirst(ps,Ze);return!!(n&&ps.direction.dot(n.face.normal)>0)?ms:gs}function km(i,t){let e=new Mo,n=new Mo;return Sl.clear(),zm.copy(i.matrixWorld).invert().multiply(t.matrixWorld),i.geometry.boundsTree.bvhcast(t.geometry.boundsTree,zm,{intersectsTriangles(r,s,o,a){if(!Fn(r)&&!Fn(s)){let l=(Om(r,s)?ju(r,s,Qu):0)>2;if(l||r.intersectsTriangle(s,Ml,!0)){let p=i.geometry.boundsTree.resolveTriangleIndex(o),m=t.geometry.boundsTree.resolveTriangleIndex(a);if(e.add(p,m,l),n.add(m,p,l),l){let g=ju(r,s,Qu);for(let y=0;y<g;y++){let b=Sl.getInstance().copy(Qu[y]);e.addIntersectionEdge(p,b),n.addIntersectionEdge(m,b)}}else{let g=Sl.getInstance().copy(Ml),y=Sl.getInstance().copy(Ml);e.addIntersectionEdge(p,g),n.addIntersectionEdge(m,y)}bl&&(bl.addEdge(Ml),bl.addIntersectingTriangles(o,r,a,s))}}return!1}}),{aIntersections:e,bIntersections:n}}function nf(i,t,e=!1){switch(i){case 0:if(t===gs||t===bo&&!e)return rr;break;case 1:if(e){if(t===ms)return _s}else if(t===gs||t===So)return rr;break;case 2:if(e){if(t===gs||t===So)return rr}else if(t===ms)return _s;break;case 4:if(t===ms)return _s;if(t===gs)return rr;break;case 3:if(t===ms||t===bo&&!e)return rr;break;case 5:if(!e&&(t===gs||t===So))return rr;break;case 6:if(!e&&(t===ms||t===bo))return rr;break;default:throw new Error(`Unrecognized CSG operation enum "${i}".`)}return Tl}var rf=class{constructor(t){this.triangle=new le().copy(t),this.intersects={}}addTriangle(t,e){this.intersects[t]=new le().copy(e)}getIntersectArray(){let t=[],{intersects:e}=this;for(let n in e)t.push(e[n]);return t}},wl=class{constructor(){this.data={}}addTriangleIntersection(t,e,n,r){let{data:s}=this;s[t]||(s[t]=new rf(e)),s[t].addTriangle(n,r)}getTrianglesAsArray(t=null){let{data:e}=this,n=[];if(t!==null)t in e&&n.push(e[t].triangle);else for(let r in e)n.push(e[r].triangle);return n}getTriangleIndices(){return Object.keys(this.data).map(t=>parseInt(t))}getIntersectionIndices(t){let{data:e}=this;return e[t]?Object.keys(e[t].intersects).map(n=>parseInt(n)):[]}getIntersectionsAsArray(t=null,e=null){let{data:n}=this,r=new Set,s=[],o=a=>{if(n[a])if(e!==null)n[a].intersects[e]&&s.push(n[a].intersects[e]);else{let u=n[a].intersects;for(let l in u)r.has(l)||(r.add(l),s.push(u[l]))}};if(t!==null)o(t);else for(let a in n)o(a);return s}reset(){this.data={}}},El=class{constructor(){this.enabled=!1,this.triangleIntersectsA=new wl,this.triangleIntersectsB=new wl,this.intersectionEdges=[]}addIntersectingTriangles(t,e,n,r){let{triangleIntersectsA:s,triangleIntersectsB:o}=this;s.addTriangleIntersection(t,e,n,r),o.addTriangleIntersection(n,r,t,e)}addEdge(t){this.intersectionEdges.push(t.clone())}reset(){this.triangleIntersectsA.reset(),this.triangleIntersectsB.reset(),this.intersectionEdges=[]}init(){this.enabled&&(this.reset(),tf(this))}complete(){this.enabled&&tf(null)}};var mn=new Gt,sr=new Gt,je=new Gt,Di=new kt,Bn=new le,or=new le,On=new le,Pi=new le,ar=[],Yn=[],Al=new Set,Vm=new F,Hm=new F,Gm=new pn(()=>new le),Wm=new F,Cl=[];function Ym(i,t,e,n,r,s={}){let{useGroups:o=!0}=s,{aIntersections:a,bIntersections:u}=km(i,t),l=[],f=null,p;return p=o?0:-1,qm(i,t,a,e,!1,r,p),Xm(i,t,a,e,!1,n,r,p),e.findIndex(g=>g!==6&&g!==5)!==-1&&(r.forEach(g=>g.clearIndexMap()),p=o?i.geometry.groups.length||1:-1,qm(t,i,u,e,!0,r,p),Xm(t,i,u,e,!0,n,r,p)),r.forEach(g=>g.clearIndexMap()),ar.length=0,{groups:l,materials:f}}function Xm(i,t,e,n,r,s,o,a=0){mn.copy(t.matrixWorld).invert().multiply(i.matrixWorld),sr.copy(mn).invert(),r?je.copy(mn):je.identity();let u=je.determinant()<0;Di.getNormalMatrix(je).multiplyScalar(u?-1:1);let l=i.geometry.groupIndices,f=i.geometry.index,p=i.geometry.attributes.position,m=t.geometry.boundsTree,g=t.geometry.index,y=t.geometry.attributes.position,b=e.ids;for(let x=0,_=b.length;x<_;x++){let T=b[x],d=a===-1?0:l[T]+a,c=3*T,v=c+0,h=c+1,C=c+2;f&&(v=f.getX(v),h=f.getX(h),C=f.getX(C)),Bn.a.fromBufferAttribute(p,v),Bn.b.fromBufferAttribute(p,h),Bn.c.fromBufferAttribute(p,C),r&&(Bn.a.applyMatrix4(mn),Bn.b.applyMatrix4(mn),Bn.c.applyMatrix4(mn)),s.reset(),s.initialize(Bn,v,h,C),Cl.length=0,Gm.clear(),Bn.getNormal(Hm);let A=e.coplanarSet.get(T);if(A)for(let E of A){let R=3*E,z=R+0,V=R+1,H=R+2;g&&(z=g.getX(z),V=g.getX(V),H=g.getX(H));let q=Gm.getInstance();q.a.fromBufferAttribute(y,z),q.b.fromBufferAttribute(y,V),q.c.fromBufferAttribute(y,H),r||(q.a.applyMatrix4(sr),q.b.applyMatrix4(sr),q.c.applyMatrix4(sr)),Cl.push(q)}if(s.addConstraintEdge){let E=e.getIntersectionEdges(T);if(E)for(let R of E)s.addConstraintEdge(R);s.triangulate()}else{let R=e.intersectionSet.get(T);for(let z=0,V=R.length;z<V;z++){let H=R[z],q=A&&A.has(H),O=3*H,st=O+0,dt=O+1,ft=O+2;g&&(st=g.getX(st),dt=g.getX(dt),ft=g.getX(ft)),or.a.fromBufferAttribute(y,st),or.b.fromBufferAttribute(y,dt),or.c.fromBufferAttribute(y,ft),r||(or.a.applyMatrix4(sr),or.b.applyMatrix4(sr),or.c.applyMatrix4(sr)),s.splitByTriangle(or,q)}}let{triangles:S,triangleIndices:M=[],triangleConnectivity:w=[]}=s;for(let E=0,R=o.length;E<R;E++)o[E].initInterpolatedAttributeData(i.geometry,je,Di,v,h,C);Al.clear();for(let E=0,R=S.length;E<R;E++){if(Al.has(E))continue;let z=S[E],V=r?null:mn,H=null;z.getMidpoint(Vm);for(let q=0,O=Cl.length;q<O;q++){let st=Cl[q];if(st.containsPoint(Vm)){st.getNormal(Wm),H=Hm.dot(Wm)>0?bo:So;break}}H===null&&(H=ef(z,m,V)),ar.length=0,Yn.length=0;for(let q=0,O=n.length;q<O;q++){let st=nf(n[q],H,r);st!==Tl&&(ar.push(st),Yn.push(o[q]))}if(Yn.length!==0){let q=[E];for(;q.length>0;){let O=q.pop();if(Al.has(O))continue;Al.add(O);let st=M[O],dt=null,ft=null,_t=null;st&&(dt=st[0],ft=st[1],_t=st[2]);let wt=S[O];Bn.getBarycoord(wt.a,Pi.a),Bn.getBarycoord(wt.b,Pi.b),Bn.getBarycoord(wt.c,Pi.c);for(let Z=0,k=Yn.length;Z<k;Z++){let D=Yn[Z],K=ar[Z]===_s,et=u!==K;D.appendInterpolatedAttributeData(d,Pi.a,dt,et),et?(D.appendInterpolatedAttributeData(d,Pi.c,_t,et),D.appendInterpolatedAttributeData(d,Pi.b,ft,et)):(D.appendInterpolatedAttributeData(d,Pi.b,ft,et),D.appendInterpolatedAttributeData(d,Pi.c,_t,et))}}}}}return b.length}function qm(i,t,e,n,r,s,o=0){mn.copy(t.matrixWorld).invert().multiply(i.matrixWorld),r?je.copy(mn):je.identity();let a=je.determinant()<0;Di.getNormalMatrix(je).multiplyScalar(a?-1:1);let u=t.geometry.boundsTree,l=i.geometry.groupIndices,f=i.geometry.index,m=i.geometry.attributes.position,g=[],y=i.geometry.halfEdges,b=new Set(e.ids),x=hs(i.geometry);for(let _=0;_<x&&b.size!==x;_++){if(b.has(_))continue;b.add(_),g.push(_);let T=3*_,d=T+0,c=T+1,v=T+2;f&&(d=f.getX(d),c=f.getX(c),v=f.getX(v)),On.a.fromBufferAttribute(m,d),On.b.fromBufferAttribute(m,c),On.c.fromBufferAttribute(m,v),r&&(On.a.applyMatrix4(mn),On.b.applyMatrix4(mn),On.c.applyMatrix4(mn));let h=ef(On,u,r?null:mn);ar.length=0,Yn.length=0;for(let C=0,A=n.length;C<A;C++){let S=nf(n[C],h,r);S!==Tl&&(ar.push(S),Yn.push(s[C]))}for(;g.length>0;){let C=g.pop();for(let A=0;A<3;A++){let S=y.getSiblingTriangleIndex(C,A);S!==-1&&!b.has(S)&&(g.push(S),b.add(S))}if(Yn.length!==0){let A=3*C,S=A+0,M=A+1,w=A+2;f&&(S=f.getX(S),M=f.getX(M),w=f.getX(w));let E=o===-1?0:l[C]+o;if(On.a.fromBufferAttribute(m,S),On.b.fromBufferAttribute(m,M),On.c.fromBufferAttribute(m,w),!Fn(On))for(let R=0,z=Yn.length;R<z;R++){let V=Yn[R],O=ar[R]===_s!==a;V.appendIndexFromGeometry(i.geometry,je,Di,E,S,O),O?(V.appendIndexFromGeometry(i.geometry,je,Di,E,w,O),V.appendIndexFromGeometry(i.geometry,je,Di,E,M,O)):(V.appendIndexFromGeometry(i.geometry,je,Di,E,M,O),V.appendIndexFromGeometry(i.geometry,je,Di,E,w,O))}}}}}function yS(i){return i=~~i,i+4-i%4}var Rl=class{constructor(t,e=500){this.expansionFactor=1.5,this.type=t,this.length=0,this.array=null,this.setSize(e)}setType(t){if(t===this.type)return;if(this.length!==0)throw new Error("TypeBackedArray: Cannot change the type while there is used data in the buffer.");let e=this.array.buffer;this.array=new t(e),this.type=t}setSize(t){if(this.array&&t===this.array.length)return;let e=this.type,n=pl()?SharedArrayBuffer:ArrayBuffer,r=new e(new n(yS(t*e.BYTES_PER_ELEMENT)));this.array&&r.set(this.array,0),this.array=r}expand(){let{array:t,expansionFactor:e}=this;this.setSize(t.length*e)}push(...t){let{array:e,length:n}=this;n+t.length>e.length&&(this.expand(),e=this.array);for(let r=0,s=t.length;r<s;r++)e[n+r]=t[r];this.length+=t.length}clear(){this.length=0}};var Qe=new F,sf=new F,of=new F,af=new F,Il=new se,vS=new se,MS=new se,SS=new se;function bS(i,t,e,n,r,s=!1,o=!1){return r.set(0,0,0,0).addScaledVector(i,n.x).addScaledVector(t,n.y).addScaledVector(e,n.z),s&&r.normalize(),o&&r.multiplyScalar(-1),r}function Zm(i,t,e){switch(t){case 1:e.push(i.x);break;case 2:e.push(i.x,i.y);break;case 3:e.push(i.x,i.y,i.z);break;case 4:e.push(i.x,i.y,i.z,i.w);break}}var To=class extends Rl{get count(){return this.length/this.itemSize}constructor(...t){super(...t),this.itemSize=1,this.normalized=!1}},Pl=class{constructor(){this.attributeData={},this.groupIndices=[],this.forwardIndexMap=new Map,this.invertedIndexMap=new Map,this.interpolatedFields={}}initFromGeometry(t,e){this.clear();let{attributeData:n}=this,r=t.attributes;for(let s=0,o=e.length;s<o;s++){let a=e[s],u=r[a],l=u.array.constructor;n[a]||(n[a]=new To(l)),n[a].setType(l),n[a].itemSize=u.itemSize,n[a].normalized=u.normalized}for(let s in n.attributes)e.includes(s)||n.delete(s)}initInterpolatedAttributeData(t,e,n,r,s,o){let{attributeData:a,interpolatedFields:u}=this,{attributes:l}=t;for(let f in a){let p=l[f];if(!p)throw new Error(`CSG Operations: Attribute ${f} not available on geometry.`);let m,g,y;if(f==="position"?(m=sf.fromBufferAttribute(p,r).applyMatrix4(e),g=of.fromBufferAttribute(p,s).applyMatrix4(e),y=af.fromBufferAttribute(p,o).applyMatrix4(e)):f==="normal"?(m=sf.fromBufferAttribute(p,r).applyNormalMatrix(n),g=of.fromBufferAttribute(p,s).applyNormalMatrix(n),y=af.fromBufferAttribute(p,o).applyNormalMatrix(n)):f==="tangent"?(m=sf.fromBufferAttribute(p,r).transformDirection(e),g=of.fromBufferAttribute(p,s).transformDirection(e),y=af.fromBufferAttribute(p,o).transformDirection(e)):(m=vS.fromBufferAttribute(p,r),g=MS.fromBufferAttribute(p,s),y=SS.fromBufferAttribute(p,o)),!u[f])u[f]=[m.clone(),g.clone(),y.clone()];else{let b=u[f];b[0].copy(m),b[1].copy(g),b[2].copy(y)}}}appendInterpolatedAttributeData(t,e,n=null,r=!1){let{groupIndices:s,attributeData:o,interpolatedFields:a,forwardIndexMap:u,invertedIndexMap:l}=this;for(;s.length<=t;)s.push(new To(Uint32Array));let f=r?l:u,p=s[t];if(n!==null&&f.has(n))p.push(f.get(n));else{f.set(n,o.position.count),p.push(o.position.count);for(let m in a){let g=o[m],y=m==="normal"||m==="tangent",b=r&&y,x=g.itemSize,[_,T,d]=a[m];bS(_,T,d,e,Il,y,b),Zm(Il,x,g)}}}appendIndexFromGeometry(t,e,n,r,s,o=!1){let{groupIndices:a,attributeData:u,forwardIndexMap:l,invertedIndexMap:f}=this;for(;a.length<=r;)a.push(new To(Uint32Array));let p=o?f:l,m=a[r];if(s!==null&&p.has(s))m.push(p.get(s));else{p.set(s,u.position.count),m.push(u.position.count);let{attributes:g}=t;for(let y in u){let b=u[y],x=g[y];if(!x)throw new Error(`CSG Operations: Attribute ${y} not available on geometry.`);let _=x.itemSize;y==="position"?(Qe.fromBufferAttribute(x,s).applyMatrix4(e),b.push(Qe.x,Qe.y,Qe.z)):y==="normal"?(Qe.fromBufferAttribute(x,s).applyNormalMatrix(n),o&&Qe.multiplyScalar(-1),b.push(Qe.x,Qe.y,Qe.z)):y==="tangent"?(Qe.fromBufferAttribute(x,s).transformDirection(e),o&&Qe.multiplyScalar(-1),b.push(Qe.x,Qe.y,Qe.z)):(Il.fromBufferAttribute(x,s),Zm(Il,_,b))}}}buildGeometry(t,e){let n=!1,{groupIndices:r,attributeData:s}=this,{attributes:o,index:a}=t;for(let f in s){let p=s[f],{type:m,itemSize:g,normalized:y,length:b,count:x}=p,_=p.array.buffer,T=o[f];(!T||T.count<x||T.array.type!==m)&&(T=new pe(new m(b),g,y),t.setAttribute(f,T),n=!0),T.array.set(new m(_,0,b),0),T.needsUpdate=!0}let u=r.reduce((f,p)=>p.count+f,0);(!t.index||a.count<u||a.array.type!==Uint32Array)&&(t.setIndex(new pe(new Uint32Array(u),1)),n=!0),t.clearGroups();let l=0;for(let f=0,p=Math.min(e.length,r.length);f<p;f++){let{index:m,materialIndex:g}=e[f],{count:y}=r[m],b=r[m].array.buffer;y!==0&&(t.index.array.set(new Uint32Array(b,0,y),l),t.addGroup(l,y,g),l+=y)}t.setDrawRange(0,l),t.boundsTree=null,t.boundingBox=null,t.boundingSphere=null,n&&t.dispose()}clearIndexMap(){this.forwardIndexMap.clear(),this.invertedIndexMap.clear()}clear(){let{groupIndices:t,attributeData:e}=this;this.interpolatedFields={};for(let n in e)e[n].clear();t.forEach(n=>{n.clear()}),this.clearIndexMap()}};function $m(i,t){for(let e in i.attributes)t.includes(e)||(i.deleteAttribute(e),i.dispose());return i}function Jm(i,t){let e=[];for(let n=0,r=i.length;n<r;n++){let s=i[n],o=t[s.materialIndex];e.push({...s,materialIndex:t.indexOf(o)})}return e}function Km(i,t){let e=[],n=new Map;for(let r=0,s=i.length;r<s;r++){let o=i[r];n.has(o.materialIndex)||(n.set(o.materialIndex,e.length),e.push(t[o.materialIndex])),o.materialIndex=n.get(o.materialIndex)}return e}function jm(i){for(let t=0;t<i.length-1;t++){let e=i[t],n=i[t+1];if(e.materialIndex===n.materialIndex){let r=e.start,s=n.start+n.count;n.start=r,n.count=s-r,i.splice(t,1),t--}}}function cf(i,t){let e=t;return Array.isArray(t)||(e=[],i.forEach(n=>{e[n.materialIndex]=t})),e}var lf=class{get useCDTClipping(){return this.triangleSplitter instanceof xo}set useCDTClipping(t){t!==this.useCDTClipping&&(this.triangleSplitter=t?new xo:new vo)}constructor(){this.triangleSplitter=new vo,this.geometryBuilders=[],this.attributes=["position","uv","normal"],this.useGroups=!0,this.consolidateGroups=!0,this.removeUnusedMaterials=!0,this.debug=new El}getGroupRanges(t){return!this.useGroups||t.groups.length===0?[{start:0,count:1/0,materialIndex:0}]:t.groups.map(n=>({...n}))}evaluate(t,e,n,r=new us){let s=!0;if(Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r],s=!1),r.length!==n.length)throw new Error("Evaluator: operations and target array passed as different sizes.");t.prepareGeometry(),e.prepareGeometry();let{triangleSplitter:o,geometryBuilders:a,attributes:u,useGroups:l,consolidateGroups:f,removeUnusedMaterials:p,debug:m}=this;for(;a.length<r.length;)a.push(new Pl);r.forEach((d,c)=>{a[c].initFromGeometry(t.geometry,u),$m(d.geometry,u)}),m.init(),Ym(t,e,n,o,a,{useGroups:l}),m.complete();let g=this.getGroupRanges(t.geometry),y=cf(g,t.material),b=this.getGroupRanges(e.geometry),x=cf(b,e.material);b.forEach(d=>d.materialIndex+=y.length);let _=[...y,...x],T=[...g,...b].map((d,c)=>({...d,index:c}));return l?l&&f&&(T=Jm(T,_),T.sort((d,c)=>d.materialIndex-c.materialIndex)):T=[{start:0,count:1/0,index:0,materialIndex:0}],r.forEach((d,c)=>{let v=d.geometry;a[c].buildGeometry(v,T),t.matrixWorld.decompose(d.position,d.quaternion,d.scale),d.updateMatrix(),d.matrixWorld.copy(t.matrixWorld),l?(d.material=_,f&&jm(v.groups),p&&(d.material=Km(v.groups,_))):d.material=_[0]}),s?r:r[0]}evaluateHierarchy(t,e=new us){t.updateMatrixWorld(!0);let n=(s,o)=>{let a=s.children;for(let u=0,l=a.length;u<l;u++){let f=a[u];f.isOperationGroup?n(f,o):o(f)}},r=s=>{let o=s.children,a=!1;for(let l=0,f=o.length;l<f;l++){let p=o[l];a=r(p)||a}let u=s.isDirty();if(u&&s.markUpdated(),a&&!s.isOperationGroup){let l;return n(s,f=>{l?l=this.evaluate(l,f,f.operation):l=this.evaluate(s,f,f.operation)}),s._cachedGeometry=l.geometry,s._cachedMaterials=l.material,!0}else return a||u};return r(t),e.geometry=t._cachedGeometry,e.material=t._cachedMaterials,e}reset(){this.triangleSplitter.reset()}};export{Im as ADDITION,Ha as AmbientLight,ve as Box3,ni as BoxGeometry,us as Brush,pe as BufferAttribute,Te as BufferGeometry,qt as Color,ga as ConeGeometry,ks as CylinderGeometry,Va as DirectionalLight,Ze as DoubleSide,_a as EdgesGeometry,cn as Euler,lf as Evaluator,Br as ExtrudeGeometry,Kt as Float32BufferAttribute,ua as Fog,Xc as Font,du as FontLoader,sn as FrontSide,xi as Group,ka as HemisphereLight,Dm as INTERSECTION,Ta as LatheGeometry,Bs as Line,Nr as LineBasicMaterial,Pa as LineDashedMaterial,ma as LineSegments,Bc as MathUtils,Gt as Matrix4,Ye as Mesh,_o as MeshBVH,Pr as MeshBasicMaterial,Ca as MeshPhongMaterial,Aa as MeshStandardMaterial,Be as Object3D,lu as OrbitControls,kr as OrthographicCamera,Pn as Path,Xe as PerspectiveCamera,Ce as Plane,Or as PlaneGeometry,on as Quaternion,qe as Ray,Wa as Raycaster,mu as RoundedBoxGeometry,Fe as SRGBColorSpace,uu as STLLoader,Pm as SUBTRACTION,fu as SVGLoader,fa as Scene,kn as Shape,Cn as ShapeUtils,wa as SphereGeometry,pu as TextGeometry,Ea as TorusGeometry,ht as Vector2,F as Vector3,ou as WebGLRenderer,SM as mergeGeometries,bM as mergeVertices};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
