var yi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},vi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Xf=0,Sh=1,qf=2;var bh=1,Yf=2,zn=3,sn=0,Be=1,Ye=2,ti=0,Bi=1,Th=2,wh=3,Eh=4,Zf=5,gi=100,$f=101,Jf=102,Kf=103,jf=104,Qf=200,td=201,ed=202,nd=203,Qo=204,ta=205,id=206,rd=207,sd=208,od=209,ad=210,cd=211,ld=212,hd=213,ud=214,Ga=0,Wa=1,Xa=2,Oi=3,qa=4,Ya=5,Za=6,$a=7,Ja=0,fd=1,dd=2,ei=0,pd=1,md=2,gd=3,_d=4,xd=5,yd=6,vd=7;var Ah=300,Xi=301,qi=302,Ka=303,ja=304,Js=306,ea=1e3,di=1001,na=1002,xn=1003,Md=1004;var Ks=1005;var An=1006,Qa=1007;var Mi=1008;var Rn=1009,Ch=1010,Rh=1011,kr=1012,tc=1013,Si=1014,Vn=1015,Hr=1016,ec=1017,nc=1018,Gr=1020,Ih=35902,Ph=35899,Dh=1021,Lh=1022,yn=1023,wr=1026,Wr=1027,Nh=1028,ic=1029,Uh=1030,rc=1031;var sc=1033,js=33776,Qs=33777,to=33778,eo=33779,oc=35840,ac=35841,cc=35842,lc=35843,hc=36196,uc=37492,fc=37496,dc=37808,pc=37809,mc=37810,gc=37811,_c=37812,xc=37813,yc=37814,vc=37815,Mc=37816,Sc=37817,bc=37818,Tc=37819,wc=37820,Ec=37821,Ac=36492,Cc=36494,Rc=36495,Ic=36283,Pc=36284,Dc=36285,Lc=36286;var As=2300,ia=2301,jo=2302,ah=2400,ch=2401,lh=2402;var Sd=3200,bd=3201;var Nc=0,Td=1,ni="",Ve="srgb",zi="srgb-linear",Cs="linear",ae="srgb";var Fi=7680;var hh=519,wd=512,Ed=513,Ad=514,Fh=515,Cd=516,Rd=517,Id=518,Pd=519,uh=35044;var Bh="300 es",En=2e3,Rs=2001;var Fn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let r=n[t];if(r!==void 0){let s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}},Oe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],pf=1234567,br=Math.PI/180,Er=180/Math.PI;function Yi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Oe[i&255]+Oe[i>>8&255]+Oe[i>>16&255]+Oe[i>>24&255]+"-"+Oe[t&255]+Oe[t>>8&255]+"-"+Oe[t>>16&15|64]+Oe[t>>24&255]+"-"+Oe[e&63|128]+Oe[e>>8&255]+"-"+Oe[e>>16&255]+Oe[e>>24&255]+Oe[n&255]+Oe[n>>8&255]+Oe[n>>16&255]+Oe[n>>24&255]).toLowerCase()}function Gt(i,t,e){return Math.max(t,Math.min(e,i))}function Oh(i,t){return(i%t+t)%t}function ng(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function ig(i,t,e){return i!==t?(e-i)/(t-i):0}function Ts(i,t,e){return(1-e)*i+e*t}function rg(i,t,e,n){return Ts(i,t,1-Math.exp(-e*n))}function sg(i,t=1){return t-Math.abs(Oh(i,t*2)-t)}function og(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function ag(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function cg(i,t){return i+Math.floor(Math.random()*(t-i+1))}function lg(i,t){return i+Math.random()*(t-i)}function hg(i){return i*(.5-Math.random())}function ug(i){i!==void 0&&(pf=i);let t=pf+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function fg(i){return i*br}function dg(i){return i*Er}function pg(i){return(i&i-1)===0&&i!==0}function mg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function gg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function _g(i,t,e,n,r){let s=Math.cos,o=Math.sin,a=s(e/2),h=o(e/2),l=s((t+n)/2),f=o((t+n)/2),d=s((t-n)/2),m=o((t-n)/2),g=s((n-t)/2),y=o((n-t)/2);switch(r){case"XYX":i.set(a*f,h*d,h*m,a*l);break;case"YZY":i.set(h*m,a*f,h*d,a*l);break;case"ZXZ":i.set(h*d,h*m,a*f,a*l);break;case"XZX":i.set(a*f,h*y,h*g,a*l);break;case"YXY":i.set(h*g,a*f,h*y,a*l);break;case"ZYZ":i.set(h*y,h*g,a*f,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Sr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function We(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Uc={DEG2RAD:br,RAD2DEG:Er,generateUUID:Yi,clamp:Gt,euclideanModulo:Oh,mapLinear:ng,inverseLerp:ig,lerp:Ts,damp:rg,pingpong:sg,smoothstep:og,smootherstep:ag,randInt:cg,randFloat:lg,randFloatSpread:hg,seededRandom:ug,degToRad:fg,radToDeg:dg,isPowerOfTwo:pg,ceilPowerOfTwo:mg,floorPowerOfTwo:gg,setQuaternionFromProperEuler:_g,normalize:We,denormalize:Sr},ot=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Gt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},on=class{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let h=n[r+0],l=n[r+1],f=n[r+2],d=n[r+3],m=s[o+0],g=s[o+1],y=s[o+2],b=s[o+3];if(a===0){t[e+0]=h,t[e+1]=l,t[e+2]=f,t[e+3]=d;return}if(a===1){t[e+0]=m,t[e+1]=g,t[e+2]=y,t[e+3]=b;return}if(d!==b||h!==m||l!==g||f!==y){let x=1-a,_=h*m+l*g+f*y+d*b,T=_>=0?1:-1,p=1-_*_;if(p>Number.EPSILON){let v=Math.sqrt(p),u=Math.atan2(v,_*T);x=Math.sin(x*u)/v,a=Math.sin(a*u)/v}let c=a*T;if(h=h*x+m*c,l=l*x+g*c,f=f*x+y*c,d=d*x+b*c,x===1-a){let v=1/Math.sqrt(h*h+l*l+f*f+d*d);h*=v,l*=v,f*=v,d*=v}}t[e]=h,t[e+1]=l,t[e+2]=f,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,r,s,o){let a=n[r],h=n[r+1],l=n[r+2],f=n[r+3],d=s[o],m=s[o+1],g=s[o+2],y=s[o+3];return t[e]=a*y+f*d+h*g-l*m,t[e+1]=h*y+f*m+l*d-a*g,t[e+2]=l*y+f*g+a*m-h*d,t[e+3]=f*y-a*d-h*m-l*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,h=Math.sin,l=a(n/2),f=a(r/2),d=a(s/2),m=h(n/2),g=h(r/2),y=h(s/2);switch(o){case"XYZ":this._x=m*f*d+l*g*y,this._y=l*g*d-m*f*y,this._z=l*f*y+m*g*d,this._w=l*f*d-m*g*y;break;case"YXZ":this._x=m*f*d+l*g*y,this._y=l*g*d-m*f*y,this._z=l*f*y-m*g*d,this._w=l*f*d+m*g*y;break;case"ZXY":this._x=m*f*d-l*g*y,this._y=l*g*d+m*f*y,this._z=l*f*y+m*g*d,this._w=l*f*d-m*g*y;break;case"ZYX":this._x=m*f*d-l*g*y,this._y=l*g*d+m*f*y,this._z=l*f*y-m*g*d,this._w=l*f*d+m*g*y;break;case"YZX":this._x=m*f*d+l*g*y,this._y=l*g*d+m*f*y,this._z=l*f*y-m*g*d,this._w=l*f*d-m*g*y;break;case"XZY":this._x=m*f*d-l*g*y,this._y=l*g*d-m*f*y,this._z=l*f*y+m*g*d,this._w=l*f*d+m*g*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],h=e[9],l=e[2],f=e[6],d=e[10],m=n+a+d;if(m>0){let g=.5/Math.sqrt(m+1);this._w=.25/g,this._x=(f-h)*g,this._y=(s-l)*g,this._z=(o-r)*g}else if(n>a&&n>d){let g=2*Math.sqrt(1+n-a-d);this._w=(f-h)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+l)/g}else if(a>d){let g=2*Math.sqrt(1+a-n-d);this._w=(s-l)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(h+f)/g}else{let g=2*Math.sqrt(1+d-n-a);this._w=(o-r)/g,this._x=(s+l)/g,this._y=(h+f)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Gt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,h=e._y,l=e._z,f=e._w;return this._x=n*f+o*a+r*l-s*h,this._y=r*f+o*h+s*a-n*l,this._z=s*f+o*l+n*h-r*a,this._w=o*f-n*a-r*h-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,r=this._y,s=this._z,o=this._w,a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;let h=1-a*a;if(h<=Number.EPSILON){let g=1-e;return this._w=g*o+e*this._w,this._x=g*n+e*this._x,this._y=g*r+e*this._y,this._z=g*s+e*this._z,this.normalize(),this}let l=Math.sqrt(h),f=Math.atan2(l,a),d=Math.sin((1-e)*f)/l,m=Math.sin(e*f)/l;return this._w=o*d+this._w*m,this._x=n*d+this._x*m,this._y=r*d+this._y*m,this._z=s*d+this._z*m,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(mf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(mf.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,h=t.w,l=2*(o*r-a*n),f=2*(a*e-s*r),d=2*(s*n-o*e);return this.x=e+h*l+o*d-a*f,this.y=n+h*f+a*l-s*d,this.z=r+h*d+s*f-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this.z=Gt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this.z=Gt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,h=e.z;return this.x=r*h-s*a,this.y=s*o-n*h,this.z=n*a-r*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ll.copy(this).projectOnVector(t),this.sub(Ll)}reflect(t){return this.sub(Ll.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Gt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ll=new D,mf=new on,Xt=class i{constructor(t,e,n,r,s,o,a,h,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,h,l)}set(t,e,n,r,s,o,a,h,l){let f=this.elements;return f[0]=t,f[1]=r,f[2]=a,f[3]=e,f[4]=s,f[5]=h,f[6]=n,f[7]=o,f[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],h=n[6],l=n[1],f=n[4],d=n[7],m=n[2],g=n[5],y=n[8],b=r[0],x=r[3],_=r[6],T=r[1],p=r[4],c=r[7],v=r[2],u=r[5],C=r[8];return s[0]=o*b+a*T+h*v,s[3]=o*x+a*p+h*u,s[6]=o*_+a*c+h*C,s[1]=l*b+f*T+d*v,s[4]=l*x+f*p+d*u,s[7]=l*_+f*c+d*C,s[2]=m*b+g*T+y*v,s[5]=m*x+g*p+y*u,s[8]=m*_+g*c+y*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],h=t[6],l=t[7],f=t[8];return e*o*f-e*a*l-n*s*f+n*a*h+r*s*l-r*o*h}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],h=t[6],l=t[7],f=t[8],d=f*o-a*l,m=a*h-f*s,g=l*s-o*h,y=e*d+n*m+r*g;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/y;return t[0]=d*b,t[1]=(r*l-f*n)*b,t[2]=(a*n-r*o)*b,t[3]=m*b,t[4]=(f*e-r*h)*b,t[5]=(r*s-a*e)*b,t[6]=g*b,t[7]=(n*h-l*e)*b,t[8]=(o*e-n*s)*b,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){let h=Math.cos(s),l=Math.sin(s);return this.set(n*h,n*l,-n*(h*o+l*a)+o+t,-r*l,r*h,-r*(-l*o+h*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Nl.makeScale(t,e)),this}rotate(t){return this.premultiply(Nl.makeRotation(-t)),this}translate(t,e){return this.premultiply(Nl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Nl=new Xt;function zh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Is(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Dd(){let i=Is("canvas");return i.style.display="block",i}var gf={};function Ar(i){i in gf||(gf[i]=!0,console.warn(i))}function Ld(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var _f=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xf=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xg(){let i={enabled:!0,workingColorSpace:zi,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ae&&(r.r=Kn(r.r),r.g=Kn(r.g),r.b=Kn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ae&&(r.r=Tr(r.r),r.g=Tr(r.g),r.b=Tr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ni?Cs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ar("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ar("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[zi]:{primaries:t,whitePoint:n,transfer:Cs,toXYZ:_f,fromXYZ:xf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ve},outputColorSpaceConfig:{drawingBufferColorSpace:Ve}},[Ve]:{primaries:t,whitePoint:n,transfer:ae,toXYZ:_f,fromXYZ:xf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ve}}}),i}var jt=xg();function Kn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Tr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var cr,ra=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{cr===void 0&&(cr=Is("canvas")),cr.width=t.width,cr.height=t.height;let r=cr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=cr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Is("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Kn(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Kn(e[n]/255)*255):e[n]=Kn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},yg=0,Cr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yg++}),this.uuid=Yi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ul(r[o].image)):s.push(Ul(r[o]))}else s=Ul(r);n.url=s}return e||(t.images[this.uuid]=n),n}};function Ul(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ra.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var vg=0,Fl=new D,an=class i extends Fn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=di,r=di,s=An,o=Mi,a=yn,h=Rn,l=i.DEFAULT_ANISOTROPY,f=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vg++}),this.uuid=Yi(),this.name="",this.source=new Cr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=h,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Fl).x}get height(){return this.source.getSize(Fl).y}get depth(){return this.source.getSize(Fl).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ah)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ea:t.x=t.x-Math.floor(t.x);break;case di:t.x=t.x<0?0:1;break;case na:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ea:t.y=t.y-Math.floor(t.y);break;case di:t.y=t.y<0?0:1;break;case na:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=Ah;an.DEFAULT_ANISOTROPY=1;var se=class i{constructor(t=0,e=0,n=0,r=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s,h=t.elements,l=h[0],f=h[4],d=h[8],m=h[1],g=h[5],y=h[9],b=h[2],x=h[6],_=h[10];if(Math.abs(f-m)<.01&&Math.abs(d-b)<.01&&Math.abs(y-x)<.01){if(Math.abs(f+m)<.1&&Math.abs(d+b)<.1&&Math.abs(y+x)<.1&&Math.abs(l+g+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let p=(l+1)/2,c=(g+1)/2,v=(_+1)/2,u=(f+m)/4,C=(d+b)/4,E=(y+x)/4;return p>c&&p>v?p<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(p),r=u/n,s=C/n):c>v?c<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(c),n=u/r,s=E/r):v<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(v),n=C/s,r=E/s),this.set(n,r,s,e),this}let T=Math.sqrt((x-y)*(x-y)+(d-b)*(d-b)+(m-f)*(m-f));return Math.abs(T)<.001&&(T=1),this.x=(x-y)/T,this.y=(d-b)/T,this.z=(m-f)/T,this.w=Math.acos((l+g+_-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Gt(this.x,t.x,e.x),this.y=Gt(this.y,t.y,e.y),this.z=Gt(this.z,t.z,e.z),this.w=Gt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Gt(this.x,t,e),this.y=Gt(this.y,t,e),this.z=Gt(this.z,t,e),this.w=Gt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Gt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},sa=class extends Fn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:An,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new se(0,0,t,e),this.scissorTest=!1,this.viewport=new se(0,0,t,e);let r={width:t,height:e,depth:n.depth},s=new an(r);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:An,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let r=Object.assign({},t.textures[e].image);this.textures[e].source=new Cr(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Bn=class extends sa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ps=class extends an{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=xn,this.minFilter=xn,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var oa=class extends an{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=xn,this.minFilter=xn,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ve=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(bn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(bn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=bn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,bn):bn.fromBufferAttribute(s,o),bn.applyMatrix4(t.matrixWorld),this.expandByPoint(bn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),wo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),wo.copy(n.boundingBox)),wo.applyMatrix4(t.matrixWorld),this.union(wo)}let r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,bn),bn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(xs),Eo.subVectors(this.max,xs),lr.subVectors(t.a,xs),hr.subVectors(t.b,xs),ur.subVectors(t.c,xs),ai.subVectors(hr,lr),ci.subVectors(ur,hr),Di.subVectors(lr,ur);let e=[0,-ai.z,ai.y,0,-ci.z,ci.y,0,-Di.z,Di.y,ai.z,0,-ai.x,ci.z,0,-ci.x,Di.z,0,-Di.x,-ai.y,ai.x,0,-ci.y,ci.x,0,-Di.y,Di.x,0];return!Bl(e,lr,hr,ur,Eo)||(e=[1,0,0,0,1,0,0,0,1],!Bl(e,lr,hr,ur,Eo))?!1:(Ao.crossVectors(ai,ci),e=[Ao.x,Ao.y,Ao.z],Bl(e,lr,hr,ur,Eo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,bn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(bn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Wn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Wn=[new D,new D,new D,new D,new D,new D,new D,new D],bn=new D,wo=new ve,lr=new D,hr=new D,ur=new D,ai=new D,ci=new D,Di=new D,xs=new D,Eo=new D,Ao=new D,Li=new D;function Bl(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Li.fromArray(i,s);let a=r.x*Math.abs(Li.x)+r.y*Math.abs(Li.y)+r.z*Math.abs(Li.z),h=t.dot(Li),l=e.dot(Li),f=n.dot(Li);if(Math.max(-Math.max(h,l,f),Math.min(h,l,f))>a)return!1}return!0}var Mg=new ve,ys=new D,Ol=new D,Vi=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Mg.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ys.subVectors(t,this.center);let e=ys.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(ys,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ol.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ys.copy(t.center).add(Ol)),this.expandByPoint(ys.copy(t.center).sub(Ol))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Xn=new D,zl=new D,Co=new D,li=new D,Vl=new D,Ro=new D,kl=new D,Je=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Xn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Xn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Xn.copy(this.origin).addScaledVector(this.direction,e),Xn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){zl.copy(t).add(e).multiplyScalar(.5),Co.copy(e).sub(t).normalize(),li.copy(this.origin).sub(zl);let s=t.distanceTo(e)*.5,o=-this.direction.dot(Co),a=li.dot(this.direction),h=-li.dot(Co),l=li.lengthSq(),f=Math.abs(1-o*o),d,m,g,y;if(f>0)if(d=o*h-a,m=o*a-h,y=s*f,d>=0)if(m>=-y)if(m<=y){let b=1/f;d*=b,m*=b,g=d*(d+o*m+2*a)+m*(o*d+m+2*h)+l}else m=s,d=Math.max(0,-(o*m+a)),g=-d*d+m*(m+2*h)+l;else m=-s,d=Math.max(0,-(o*m+a)),g=-d*d+m*(m+2*h)+l;else m<=-y?(d=Math.max(0,-(-o*s+a)),m=d>0?-s:Math.min(Math.max(-s,-h),s),g=-d*d+m*(m+2*h)+l):m<=y?(d=0,m=Math.min(Math.max(-s,-h),s),g=m*(m+2*h)+l):(d=Math.max(0,-(o*s+a)),m=d>0?s:Math.min(Math.max(-s,-h),s),g=-d*d+m*(m+2*h)+l);else m=o>0?-s:s,d=Math.max(0,-(o*m+a)),g=-d*d+m*(m+2*h)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(zl).addScaledVector(Co,m),g}intersectSphere(t,e){Xn.subVectors(t.center,this.origin);let n=Xn.dot(this.direction),r=Xn.dot(Xn)-n*n,s=t.radius*t.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,h=n+o;return h<0?null:a<0?this.at(h,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,h,l=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,m=this.origin;return l>=0?(n=(t.min.x-m.x)*l,r=(t.max.x-m.x)*l):(n=(t.max.x-m.x)*l,r=(t.min.x-m.x)*l),f>=0?(s=(t.min.y-m.y)*f,o=(t.max.y-m.y)*f):(s=(t.max.y-m.y)*f,o=(t.min.y-m.y)*f),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(t.min.z-m.z)*d,h=(t.max.z-m.z)*d):(a=(t.max.z-m.z)*d,h=(t.min.z-m.z)*d),n>h||a>r)||((a>n||n!==n)&&(n=a),(h<r||r!==r)&&(r=h),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Xn)!==null}intersectTriangle(t,e,n,r,s){Vl.subVectors(e,t),Ro.subVectors(n,t),kl.crossVectors(Vl,Ro);let o=this.direction.dot(kl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;li.subVectors(this.origin,t);let h=a*this.direction.dot(Ro.crossVectors(li,Ro));if(h<0)return null;let l=a*this.direction.dot(Vl.cross(li));if(l<0||h+l>o)return null;let f=-a*li.dot(kl);return f<0?null:this.at(f/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},kt=class i{constructor(t,e,n,r,s,o,a,h,l,f,d,m,g,y,b,x){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,h,l,f,d,m,g,y,b,x)}set(t,e,n,r,s,o,a,h,l,f,d,m,g,y,b,x){let _=this.elements;return _[0]=t,_[4]=e,_[8]=n,_[12]=r,_[1]=s,_[5]=o,_[9]=a,_[13]=h,_[2]=l,_[6]=f,_[10]=d,_[14]=m,_[3]=g,_[7]=y,_[11]=b,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,r=1/fr.setFromMatrixColumn(t,0).length(),s=1/fr.setFromMatrixColumn(t,1).length(),o=1/fr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),h=Math.cos(r),l=Math.sin(r),f=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){let m=o*f,g=o*d,y=a*f,b=a*d;e[0]=h*f,e[4]=-h*d,e[8]=l,e[1]=g+y*l,e[5]=m-b*l,e[9]=-a*h,e[2]=b-m*l,e[6]=y+g*l,e[10]=o*h}else if(t.order==="YXZ"){let m=h*f,g=h*d,y=l*f,b=l*d;e[0]=m+b*a,e[4]=y*a-g,e[8]=o*l,e[1]=o*d,e[5]=o*f,e[9]=-a,e[2]=g*a-y,e[6]=b+m*a,e[10]=o*h}else if(t.order==="ZXY"){let m=h*f,g=h*d,y=l*f,b=l*d;e[0]=m-b*a,e[4]=-o*d,e[8]=y+g*a,e[1]=g+y*a,e[5]=o*f,e[9]=b-m*a,e[2]=-o*l,e[6]=a,e[10]=o*h}else if(t.order==="ZYX"){let m=o*f,g=o*d,y=a*f,b=a*d;e[0]=h*f,e[4]=y*l-g,e[8]=m*l+b,e[1]=h*d,e[5]=b*l+m,e[9]=g*l-y,e[2]=-l,e[6]=a*h,e[10]=o*h}else if(t.order==="YZX"){let m=o*h,g=o*l,y=a*h,b=a*l;e[0]=h*f,e[4]=b-m*d,e[8]=y*d+g,e[1]=d,e[5]=o*f,e[9]=-a*f,e[2]=-l*f,e[6]=g*d+y,e[10]=m-b*d}else if(t.order==="XZY"){let m=o*h,g=o*l,y=a*h,b=a*l;e[0]=h*f,e[4]=-d,e[8]=l*f,e[1]=m*d+b,e[5]=o*f,e[9]=g*d-y,e[2]=y*d-g,e[6]=a*f,e[10]=b*d+m}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Sg,t,bg)}lookAt(t,e,n){let r=this.elements;return nn.subVectors(t,e),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),hi.crossVectors(n,nn),hi.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),hi.crossVectors(n,nn)),hi.normalize(),Io.crossVectors(nn,hi),r[0]=hi.x,r[4]=Io.x,r[8]=nn.x,r[1]=hi.y,r[5]=Io.y,r[9]=nn.y,r[2]=hi.z,r[6]=Io.z,r[10]=nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],h=n[8],l=n[12],f=n[1],d=n[5],m=n[9],g=n[13],y=n[2],b=n[6],x=n[10],_=n[14],T=n[3],p=n[7],c=n[11],v=n[15],u=r[0],C=r[4],E=r[8],S=r[12],M=r[1],w=r[5],A=r[9],R=r[13],U=r[2],F=r[6],B=r[10],k=r[14],O=r[3],Z=r[7],at=r[11],it=r[15];return s[0]=o*u+a*M+h*U+l*O,s[4]=o*C+a*w+h*F+l*Z,s[8]=o*E+a*A+h*B+l*at,s[12]=o*S+a*R+h*k+l*it,s[1]=f*u+d*M+m*U+g*O,s[5]=f*C+d*w+m*F+g*Z,s[9]=f*E+d*A+m*B+g*at,s[13]=f*S+d*R+m*k+g*it,s[2]=y*u+b*M+x*U+_*O,s[6]=y*C+b*w+x*F+_*Z,s[10]=y*E+b*A+x*B+_*at,s[14]=y*S+b*R+x*k+_*it,s[3]=T*u+p*M+c*U+v*O,s[7]=T*C+p*w+c*F+v*Z,s[11]=T*E+p*A+c*B+v*at,s[15]=T*S+p*R+c*k+v*it,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],h=t[9],l=t[13],f=t[2],d=t[6],m=t[10],g=t[14],y=t[3],b=t[7],x=t[11],_=t[15];return y*(+s*h*d-r*l*d-s*a*m+n*l*m+r*a*g-n*h*g)+b*(+e*h*g-e*l*m+s*o*m-r*o*g+r*l*f-s*h*f)+x*(+e*l*d-e*a*g-s*o*d+n*o*g+s*a*f-n*l*f)+_*(-r*a*f-e*h*d+e*a*m+r*o*d-n*o*m+n*h*f)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],h=t[6],l=t[7],f=t[8],d=t[9],m=t[10],g=t[11],y=t[12],b=t[13],x=t[14],_=t[15],T=d*x*l-b*m*l+b*h*g-a*x*g-d*h*_+a*m*_,p=y*m*l-f*x*l-y*h*g+o*x*g+f*h*_-o*m*_,c=f*b*l-y*d*l+y*a*g-o*b*g-f*a*_+o*d*_,v=y*d*h-f*b*h-y*a*m+o*b*m+f*a*x-o*d*x,u=e*T+n*p+r*c+s*v;if(u===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/u;return t[0]=T*C,t[1]=(b*m*s-d*x*s-b*r*g+n*x*g+d*r*_-n*m*_)*C,t[2]=(a*x*s-b*h*s+b*r*l-n*x*l-a*r*_+n*h*_)*C,t[3]=(d*h*s-a*m*s-d*r*l+n*m*l+a*r*g-n*h*g)*C,t[4]=p*C,t[5]=(f*x*s-y*m*s+y*r*g-e*x*g-f*r*_+e*m*_)*C,t[6]=(y*h*s-o*x*s-y*r*l+e*x*l+o*r*_-e*h*_)*C,t[7]=(o*m*s-f*h*s+f*r*l-e*m*l-o*r*g+e*h*g)*C,t[8]=c*C,t[9]=(y*d*s-f*b*s-y*n*g+e*b*g+f*n*_-e*d*_)*C,t[10]=(o*b*s-y*a*s+y*n*l-e*b*l-o*n*_+e*a*_)*C,t[11]=(f*a*s-o*d*s-f*n*l+e*d*l+o*n*g-e*a*g)*C,t[12]=v*C,t[13]=(f*b*r-y*d*r+y*n*m-e*b*m-f*n*x+e*d*x)*C,t[14]=(y*a*r-o*b*r-y*n*h+e*b*h+o*n*x-e*a*x)*C,t[15]=(o*d*r-f*a*r+f*n*h-e*d*h-o*n*m+e*a*m)*C,this}scale(t){let e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,h=t.z,l=s*o,f=s*a;return this.set(l*o+n,l*a-r*h,l*h+r*a,0,l*a+r*h,f*a+n,f*h-r*o,0,l*h-r*a,f*h+r*o,s*h*h+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){let r=this.elements,s=e._x,o=e._y,a=e._z,h=e._w,l=s+s,f=o+o,d=a+a,m=s*l,g=s*f,y=s*d,b=o*f,x=o*d,_=a*d,T=h*l,p=h*f,c=h*d,v=n.x,u=n.y,C=n.z;return r[0]=(1-(b+_))*v,r[1]=(g+c)*v,r[2]=(y-p)*v,r[3]=0,r[4]=(g-c)*u,r[5]=(1-(m+_))*u,r[6]=(x+T)*u,r[7]=0,r[8]=(y+p)*C,r[9]=(x-T)*C,r[10]=(1-(m+b))*C,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){let r=this.elements,s=fr.set(r[0],r[1],r[2]).length(),o=fr.set(r[4],r[5],r[6]).length(),a=fr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Tn.copy(this);let l=1/s,f=1/o,d=1/a;return Tn.elements[0]*=l,Tn.elements[1]*=l,Tn.elements[2]*=l,Tn.elements[4]*=f,Tn.elements[5]*=f,Tn.elements[6]*=f,Tn.elements[8]*=d,Tn.elements[9]*=d,Tn.elements[10]*=d,e.setFromRotationMatrix(Tn),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=En,h=!1){let l=this.elements,f=2*s/(e-t),d=2*s/(n-r),m=(e+t)/(e-t),g=(n+r)/(n-r),y,b;if(h)y=s/(o-s),b=o*s/(o-s);else if(a===En)y=-(o+s)/(o-s),b=-2*o*s/(o-s);else if(a===Rs)y=-o/(o-s),b=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=f,l[4]=0,l[8]=m,l[12]=0,l[1]=0,l[5]=d,l[9]=g,l[13]=0,l[2]=0,l[6]=0,l[10]=y,l[14]=b,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=En,h=!1){let l=this.elements,f=2/(e-t),d=2/(n-r),m=-(e+t)/(e-t),g=-(n+r)/(n-r),y,b;if(h)y=1/(o-s),b=o/(o-s);else if(a===En)y=-2/(o-s),b=-(o+s)/(o-s);else if(a===Rs)y=-1/(o-s),b=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=f,l[4]=0,l[8]=0,l[12]=m,l[1]=0,l[5]=d,l[9]=0,l[13]=g,l[2]=0,l[6]=0,l[10]=y,l[14]=b,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},fr=new D,Tn=new kt,Sg=new D(0,0,0),bg=new D(1,1,1),hi=new D,Io=new D,nn=new D,yf=new kt,vf=new on,cn=class i{constructor(t=0,e=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let r=t.elements,s=r[0],o=r[4],a=r[8],h=r[1],l=r[5],f=r[9],d=r[2],m=r[6],g=r[10];switch(e){case"XYZ":this._y=Math.asin(Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(m,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(h,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(h,s));break;case"ZYX":this._y=Math.asin(-Gt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(m,g),this._z=Math.atan2(h,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Gt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-f,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return yf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(yf,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return vf.setFromEuler(this),this.setFromQuaternion(vf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};cn.DEFAULT_ORDER="XYZ";var Rr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Tg=0,Mf=new D,dr=new on,qn=new kt,Po=new D,vs=new D,wg=new D,Eg=new on,Sf=new D(1,0,0),bf=new D(0,1,0),Tf=new D(0,0,1),wf={type:"added"},Ag={type:"removed"},pr={type:"childadded",child:null},Hl={type:"childremoved",child:null},Fe=class i extends Fn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tg++}),this.uuid=Yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new D,e=new cn,n=new on,r=new D(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new kt},normalMatrix:{value:new Xt}}),this.matrix=new kt,this.matrixWorld=new kt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return dr.setFromAxisAngle(t,e),this.quaternion.multiply(dr),this}rotateOnWorldAxis(t,e){return dr.setFromAxisAngle(t,e),this.quaternion.premultiply(dr),this}rotateX(t){return this.rotateOnAxis(Sf,t)}rotateY(t){return this.rotateOnAxis(bf,t)}rotateZ(t){return this.rotateOnAxis(Tf,t)}translateOnAxis(t,e){return Mf.copy(t).applyQuaternion(this.quaternion),this.position.add(Mf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Sf,t)}translateY(t){return this.translateOnAxis(bf,t)}translateZ(t){return this.translateOnAxis(Tf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Po.copy(t):Po.set(t,e,n);let r=this.parent;this.updateWorldMatrix(!0,!1),vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(vs,Po,this.up):qn.lookAt(Po,vs,this.up),this.quaternion.setFromRotationMatrix(qn),r&&(qn.extractRotation(r.matrixWorld),dr.setFromRotationMatrix(qn),this.quaternion.premultiply(dr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(wf),pr.child=t,this.dispatchEvent(pr),pr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ag),Hl.child=t,this.dispatchEvent(Hl),Hl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),qn.multiply(t.parent.matrixWorld)),t.applyMatrix4(qn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(wf),pr.child=t,this.dispatchEvent(pr),pr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,t,wg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,Eg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,h){return a[h.uuid]===void 0&&(a[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let h=a.shapes;if(Array.isArray(h))for(let l=0,f=h.length;l<f;l++){let d=h[l];s(t.shapes,d)}else s(t.shapes,h)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let h=0,l=this.material.length;h<l;h++)a.push(s(t.materials,this.material[h]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let h=this.animations[a];r.animations.push(s(t.animations,h))}}if(e){let a=o(t.geometries),h=o(t.materials),l=o(t.textures),f=o(t.images),d=o(t.shapes),m=o(t.skeletons),g=o(t.animations),y=o(t.nodes);a.length>0&&(n.geometries=a),h.length>0&&(n.materials=h),l.length>0&&(n.textures=l),f.length>0&&(n.images=f),d.length>0&&(n.shapes=d),m.length>0&&(n.skeletons=m),g.length>0&&(n.animations=g),y.length>0&&(n.nodes=y)}return n.object=r,n;function o(a){let h=[];for(let l in a){let f=a[l];delete f.metadata,h.push(f)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let r=t.children[n];this.add(r.clone())}return this}};Fe.DEFAULT_UP=new D(0,1,0);Fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var wn=new D,Yn=new D,Gl=new D,Zn=new D,mr=new D,gr=new D,Ef=new D,Wl=new D,Xl=new D,ql=new D,Yl=new se,Zl=new se,$l=new se,le=class i{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),wn.subVectors(t,e),r.cross(wn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){wn.subVectors(r,e),Yn.subVectors(n,e),Gl.subVectors(t,e);let o=wn.dot(wn),a=wn.dot(Yn),h=wn.dot(Gl),l=Yn.dot(Yn),f=Yn.dot(Gl),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;let m=1/d,g=(l*h-a*f)*m,y=(o*f-a*h)*m;return s.set(1-g-y,y,g)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(t,e,n,r,s,o,a,h){return this.getBarycoord(t,e,n,r,Zn)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(s,Zn.x),h.addScaledVector(o,Zn.y),h.addScaledVector(a,Zn.z),h)}static getInterpolatedAttribute(t,e,n,r,s,o){return Yl.setScalar(0),Zl.setScalar(0),$l.setScalar(0),Yl.fromBufferAttribute(t,e),Zl.fromBufferAttribute(t,n),$l.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(Yl,s.x),o.addScaledVector(Zl,s.y),o.addScaledVector($l,s.z),o}static isFrontFacing(t,e,n,r){return wn.subVectors(n,e),Yn.subVectors(t,e),wn.cross(Yn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return wn.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),wn.cross(Yn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return i.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,r=this.b,s=this.c,o,a;mr.subVectors(r,n),gr.subVectors(s,n),Wl.subVectors(t,n);let h=mr.dot(Wl),l=gr.dot(Wl);if(h<=0&&l<=0)return e.copy(n);Xl.subVectors(t,r);let f=mr.dot(Xl),d=gr.dot(Xl);if(f>=0&&d<=f)return e.copy(r);let m=h*d-f*l;if(m<=0&&h>=0&&f<=0)return o=h/(h-f),e.copy(n).addScaledVector(mr,o);ql.subVectors(t,s);let g=mr.dot(ql),y=gr.dot(ql);if(y>=0&&g<=y)return e.copy(s);let b=g*l-h*y;if(b<=0&&l>=0&&y<=0)return a=l/(l-y),e.copy(n).addScaledVector(gr,a);let x=f*y-g*d;if(x<=0&&d-f>=0&&g-y>=0)return Ef.subVectors(s,r),a=(d-f)/(d-f+(g-y)),e.copy(r).addScaledVector(Ef,a);let _=1/(x+b+m);return o=b*_,a=m*_,e.copy(n).addScaledVector(mr,o).addScaledVector(gr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Nd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},Do={h:0,s:0,l:0};function Jl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Wt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ve){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,jt.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=jt.workingColorSpace){if(t=Oh(t,1),e=Gt(e,0,1),n=Gt(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Jl(o,s,t+1/3),this.g=Jl(o,s,t),this.b=Jl(o,s,t-1/3)}return jt.colorSpaceToWorking(this,r),this}setStyle(t,e=Ve){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ve){let n=Nd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Kn(t.r),this.g=Kn(t.g),this.b=Kn(t.b),this}copyLinearToSRGB(t){return this.r=Tr(t.r),this.g=Tr(t.g),this.b=Tr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ve){return jt.workingToColorSpace(ze.copy(this),t),Math.round(Gt(ze.r*255,0,255))*65536+Math.round(Gt(ze.g*255,0,255))*256+Math.round(Gt(ze.b*255,0,255))}getHexString(t=Ve){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.workingToColorSpace(ze.copy(this),e);let n=ze.r,r=ze.g,s=ze.b,o=Math.max(n,r,s),a=Math.min(n,r,s),h,l,f=(a+o)/2;if(a===o)h=0,l=0;else{let d=o-a;switch(l=f<=.5?d/(o+a):d/(2-o-a),o){case n:h=(r-s)/d+(r<s?6:0);break;case r:h=(s-n)/d+2;break;case s:h=(n-r)/d+4;break}h/=6}return t.h=h,t.s=l,t.l=f,t}getRGB(t,e=jt.workingColorSpace){return jt.workingToColorSpace(ze.copy(this),e),t.r=ze.r,t.g=ze.g,t.b=ze.b,t}getStyle(t=Ve){jt.workingToColorSpace(ze.copy(this),t);let e=ze.r,n=ze.g,r=ze.b;return t!==Ve?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(ui),this.setHSL(ui.h+t,ui.s+e,ui.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ui),t.getHSL(Do);let n=Ts(ui.h,Do.h,e),r=Ts(ui.s,Do.s,e),s=Ts(ui.l,Do.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ze=new Wt;Wt.NAMES=Nd;var Cg=0,On=class extends Fn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cg++}),this.uuid=Yi(),this.name="",this.type="Material",this.blending=Bi,this.side=sn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qo,this.blendDst=ta,this.blendEquation=gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Wt(0,0,0),this.blendAlpha=0,this.depthFunc=Oi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fi,this.stencilZFail=Fi,this.stencilZPass=Fi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Bi&&(n.blending=this.blending),this.side!==sn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Qo&&(n.blendSrc=this.blendSrc),this.blendDst!==ta&&(n.blendDst=this.blendDst),this.blendEquation!==gi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Oi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Fi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Fi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let h=s[a];delete h.metadata,o.push(h)}return o}if(e){let s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Ir=class extends On{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=Ja,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ie=new D,Lo=new ot,Rg=0,pe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Rg++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=uh,this.updateRanges=[],this.gpuType=Vn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Lo.fromBufferAttribute(this,e),Lo.applyMatrix3(t),this.setXY(e,Lo.x,Lo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Sr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=We(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Sr(e,this.array)),e}setX(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Sr(e,this.array)),e}setY(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Sr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Sr(e,this.array)),e}setW(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array),r=We(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array),r=We(r,this.array),s=We(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==uh&&(t.usage=this.usage),t}};var Ds=class extends pe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ls=class extends pe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ee=class extends pe{constructor(t,e,n){super(new Float32Array(t),e,n)}},Ig=0,_n=new kt,Kl=new Fe,_r=new D,rn=new ve,Ms=new ve,Ue=new D,Ce=class i extends Fn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ig++}),this.uuid=Yi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(zh(t)?Ls:Ds)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Xt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return _n.makeRotationFromQuaternion(t),this.applyMatrix4(_n),this}rotateX(t){return _n.makeRotationX(t),this.applyMatrix4(_n),this}rotateY(t){return _n.makeRotationY(t),this.applyMatrix4(_n),this}rotateZ(t){return _n.makeRotationZ(t),this.applyMatrix4(_n),this}translate(t,e,n){return _n.makeTranslation(t,e,n),this.applyMatrix4(_n),this}scale(t,e,n){return _n.makeScale(t,e,n),this.applyMatrix4(_n),this}lookAt(t){return Kl.lookAt(t),Kl.updateMatrix(),this.applyMatrix4(Kl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_r).negate(),this.translate(_r.x,_r.y,_r.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let r=0,s=t.length;r<s;r++){let o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ee(n,3))}else{let n=Math.min(t.length,e.count);for(let r=0;r<n;r++){let s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ve);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){let s=e[n];rn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ue.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Ue)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){let n=this.boundingSphere.center;if(rn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];Ms.setFromBufferAttribute(a),this.morphTargetsRelative?(Ue.addVectors(rn.min,Ms.min),rn.expandByPoint(Ue),Ue.addVectors(rn.max,Ms.max),rn.expandByPoint(Ue)):(rn.expandByPoint(Ms.min),rn.expandByPoint(Ms.max))}rn.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)Ue.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Ue));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],h=this.morphTargetsRelative;for(let l=0,f=a.count;l<f;l++)Ue.fromBufferAttribute(a,l),h&&(_r.fromBufferAttribute(t,l),Ue.add(_r)),r=Math.max(r,n.distanceToSquared(Ue))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pe(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],h=[];for(let E=0;E<n.count;E++)a[E]=new D,h[E]=new D;let l=new D,f=new D,d=new D,m=new ot,g=new ot,y=new ot,b=new D,x=new D;function _(E,S,M){l.fromBufferAttribute(n,E),f.fromBufferAttribute(n,S),d.fromBufferAttribute(n,M),m.fromBufferAttribute(s,E),g.fromBufferAttribute(s,S),y.fromBufferAttribute(s,M),f.sub(l),d.sub(l),g.sub(m),y.sub(m);let w=1/(g.x*y.y-y.x*g.y);isFinite(w)&&(b.copy(f).multiplyScalar(y.y).addScaledVector(d,-g.y).multiplyScalar(w),x.copy(d).multiplyScalar(g.x).addScaledVector(f,-y.x).multiplyScalar(w),a[E].add(b),a[S].add(b),a[M].add(b),h[E].add(x),h[S].add(x),h[M].add(x))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let E=0,S=T.length;E<S;++E){let M=T[E],w=M.start,A=M.count;for(let R=w,U=w+A;R<U;R+=3)_(t.getX(R+0),t.getX(R+1),t.getX(R+2))}let p=new D,c=new D,v=new D,u=new D;function C(E){v.fromBufferAttribute(r,E),u.copy(v);let S=a[E];p.copy(S),p.sub(v.multiplyScalar(v.dot(S))).normalize(),c.crossVectors(u,S);let w=c.dot(h[E])<0?-1:1;o.setXYZW(E,p.x,p.y,p.z,w)}for(let E=0,S=T.length;E<S;++E){let M=T[E],w=M.start,A=M.count;for(let R=w,U=w+A;R<U;R+=3)C(t.getX(R+0)),C(t.getX(R+1)),C(t.getX(R+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let m=0,g=n.count;m<g;m++)n.setXYZ(m,0,0,0);let r=new D,s=new D,o=new D,a=new D,h=new D,l=new D,f=new D,d=new D;if(t)for(let m=0,g=t.count;m<g;m+=3){let y=t.getX(m+0),b=t.getX(m+1),x=t.getX(m+2);r.fromBufferAttribute(e,y),s.fromBufferAttribute(e,b),o.fromBufferAttribute(e,x),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),a.fromBufferAttribute(n,y),h.fromBufferAttribute(n,b),l.fromBufferAttribute(n,x),a.add(f),h.add(f),l.add(f),n.setXYZ(y,a.x,a.y,a.z),n.setXYZ(b,h.x,h.y,h.z),n.setXYZ(x,l.x,l.y,l.z)}else for(let m=0,g=e.count;m<g;m+=3)r.fromBufferAttribute(e,m+0),s.fromBufferAttribute(e,m+1),o.fromBufferAttribute(e,m+2),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),n.setXYZ(m+0,f.x,f.y,f.z),n.setXYZ(m+1,f.x,f.y,f.z),n.setXYZ(m+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(a,h){let l=a.array,f=a.itemSize,d=a.normalized,m=new l.constructor(h.length*f),g=0,y=0;for(let b=0,x=h.length;b<x;b++){a.isInterleavedBufferAttribute?g=h[b]*a.data.stride+a.offset:g=h[b]*f;for(let _=0;_<f;_++)m[y++]=l[g++]}return new pe(m,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,r=this.attributes;for(let a in r){let h=r[a],l=t(h,n);e.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let h=[],l=s[a];for(let f=0,d=l.length;f<d;f++){let m=l[f],g=t(m,n);h.push(g)}e.morphAttributes[a]=h}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,h=o.length;a<h;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let h=this.parameters;for(let l in h)h[l]!==void 0&&(t[l]=h[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let h in n){let l=n[h];t.data.attributes[h]=l.toJSON(t.data)}let r={},s=!1;for(let h in this.morphAttributes){let l=this.morphAttributes[h],f=[];for(let d=0,m=l.length;d<m;d++){let g=l[d];f.push(g.toJSON(t.data))}f.length>0&&(r[h]=f,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let r=t.attributes;for(let l in r){let f=r[l];this.setAttribute(l,f.clone(e))}let s=t.morphAttributes;for(let l in s){let f=[],d=s[l];for(let m=0,g=d.length;m<g;m++)f.push(d[m].clone(e));this.morphAttributes[l]=f}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,f=o.length;l<f;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Af=new kt,Ni=new Je,No=new Vi,Cf=new D,Uo=new D,Fo=new D,Bo=new D,jl=new D,Oo=new D,Rf=new D,zo=new D,qe=class extends Fe{constructor(t=new Ce,e=new Ir){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);let a=this.morphTargetInfluences;if(s&&a){Oo.set(0,0,0);for(let h=0,l=s.length;h<l;h++){let f=a[h],d=s[h];f!==0&&(jl.fromBufferAttribute(d,t),o?Oo.addScaledVector(jl,f):Oo.addScaledVector(jl.sub(e),f))}e.add(Oo)}return e}raycast(t,e){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),No.copy(n.boundingSphere),No.applyMatrix4(s),Ni.copy(t.ray).recast(t.near),!(No.containsPoint(Ni.origin)===!1&&(Ni.intersectSphere(No,Cf)===null||Ni.origin.distanceToSquared(Cf)>(t.far-t.near)**2))&&(Af.copy(s).invert(),Ni.copy(t.ray).applyMatrix4(Af),!(n.boundingBox!==null&&Ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ni)))}_computeIntersections(t,e,n){let r,s=this.geometry,o=this.material,a=s.index,h=s.attributes.position,l=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,m=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let y=0,b=m.length;y<b;y++){let x=m[y],_=o[x.materialIndex],T=Math.max(x.start,g.start),p=Math.min(a.count,Math.min(x.start+x.count,g.start+g.count));for(let c=T,v=p;c<v;c+=3){let u=a.getX(c),C=a.getX(c+1),E=a.getX(c+2);r=Vo(this,_,t,n,l,f,d,u,C,E),r&&(r.faceIndex=Math.floor(c/3),r.face.materialIndex=x.materialIndex,e.push(r))}}else{let y=Math.max(0,g.start),b=Math.min(a.count,g.start+g.count);for(let x=y,_=b;x<_;x+=3){let T=a.getX(x),p=a.getX(x+1),c=a.getX(x+2);r=Vo(this,o,t,n,l,f,d,T,p,c),r&&(r.faceIndex=Math.floor(x/3),e.push(r))}}else if(h!==void 0)if(Array.isArray(o))for(let y=0,b=m.length;y<b;y++){let x=m[y],_=o[x.materialIndex],T=Math.max(x.start,g.start),p=Math.min(h.count,Math.min(x.start+x.count,g.start+g.count));for(let c=T,v=p;c<v;c+=3){let u=c,C=c+1,E=c+2;r=Vo(this,_,t,n,l,f,d,u,C,E),r&&(r.faceIndex=Math.floor(c/3),r.face.materialIndex=x.materialIndex,e.push(r))}}else{let y=Math.max(0,g.start),b=Math.min(h.count,g.start+g.count);for(let x=y,_=b;x<_;x+=3){let T=x,p=x+1,c=x+2;r=Vo(this,o,t,n,l,f,d,T,p,c),r&&(r.faceIndex=Math.floor(x/3),e.push(r))}}}};function Pg(i,t,e,n,r,s,o,a){let h;if(t.side===Be?h=n.intersectTriangle(o,s,r,!0,a):h=n.intersectTriangle(r,s,o,t.side===sn,a),h===null)return null;zo.copy(a),zo.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(zo);return l<e.near||l>e.far?null:{distance:l,point:zo.clone(),object:i}}function Vo(i,t,e,n,r,s,o,a,h,l){i.getVertexPosition(a,Uo),i.getVertexPosition(h,Fo),i.getVertexPosition(l,Bo);let f=Pg(i,t,e,n,Uo,Fo,Bo,Rf);if(f){let d=new D;le.getBarycoord(Rf,Uo,Fo,Bo,d),r&&(f.uv=le.getInterpolatedAttribute(r,a,h,l,d,new ot)),s&&(f.uv1=le.getInterpolatedAttribute(s,a,h,l,d,new ot)),o&&(f.normal=le.getInterpolatedAttribute(o,a,h,l,d,new D),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));let m={a,b:h,c:l,normal:new D,materialIndex:0};le.getNormal(Uo,Fo,Bo,m.normal),f.face=m,f.barycoord=d}return f}var jn=class i extends Ce{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let h=[],l=[],f=[],d=[],m=0,g=0;y("z","y","x",-1,-1,n,e,t,o,s,0),y("z","y","x",1,-1,n,e,-t,o,s,1),y("x","z","y",1,1,t,n,e,r,o,2),y("x","z","y",1,-1,t,n,-e,r,o,3),y("x","y","z",1,-1,t,e,n,r,s,4),y("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(h),this.setAttribute("position",new ee(l,3)),this.setAttribute("normal",new ee(f,3)),this.setAttribute("uv",new ee(d,2));function y(b,x,_,T,p,c,v,u,C,E,S){let M=c/C,w=v/E,A=c/2,R=v/2,U=u/2,F=C+1,B=E+1,k=0,O=0,Z=new D;for(let at=0;at<B;at++){let it=at*w-R;for(let ut=0;ut<F;ut++){let Mt=ut*M-A;Z[b]=Mt*T,Z[x]=it*p,Z[_]=U,l.push(Z.x,Z.y,Z.z),Z[b]=0,Z[x]=0,Z[_]=u>0?1:-1,f.push(Z.x,Z.y,Z.z),d.push(ut/C),d.push(1-at/E),k+=1}}for(let at=0;at<E;at++)for(let it=0;it<C;it++){let ut=m+it+F*at,Mt=m+it+F*(at+1),St=m+(it+1)+F*(at+1),yt=m+(it+1)+F*at;h.push(ut,Mt,yt),h.push(Mt,St,yt),O+=6}a.addGroup(g,O,S),g+=O,m+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Zi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function ke(i){let t={};for(let e=0;e<i.length;e++){let n=Zi(i[e]);for(let r in n)t[r]=n[r]}return t}function Dg(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Vh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}var Ud={clone:Zi,merge:ke},Lg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ng=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Cn=class extends On{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lg,this.fragmentShader=Ng,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Zi(t.uniforms),this.uniformsGroups=Dg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Ns=class extends Fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new kt,this.projectionMatrix=new kt,this.projectionMatrixInverse=new kt,this.coordinateSystem=En,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},fi=new D,If=new ot,Pf=new ot,Xe=class extends Ns{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Er*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(br*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Er*2*Math.atan(Math.tan(br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(fi.x,fi.y).multiplyScalar(-t/fi.z),fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fi.x,fi.y).multiplyScalar(-t/fi.z)}getViewSize(t,e){return this.getViewBounds(t,If,Pf),e.subVectors(Pf,If)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(br*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let h=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/h,e-=o.offsetY*n/l,r*=o.width/h,n*=o.height/l}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},xr=-90,yr=1,aa=class extends Fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Xe(xr,yr,t,e);r.layers=this.layers,this.add(r);let s=new Xe(xr,yr,t,e);s.layers=this.layers,this.add(s);let o=new Xe(xr,yr,t,e);o.layers=this.layers,this.add(o);let a=new Xe(xr,yr,t,e);a.layers=this.layers,this.add(a);let h=new Xe(xr,yr,t,e);h.layers=this.layers,this.add(h);let l=new Xe(xr,yr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,h]=e;for(let l of e)this.remove(l);if(t===En)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===Rs)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,h,l,f]=this.children,d=t.getRenderTarget(),m=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),y=t.xr.enabled;t.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,h),t.setRenderTarget(n,4,r),t.render(e,l),n.texture.generateMipmaps=b,t.setRenderTarget(n,5,r),t.render(e,f),t.setRenderTarget(d,m,g),t.xr.enabled=y,n.texture.needsPMREMUpdate=!0}},Us=class extends an{constructor(t=[],e=Xi,n,r,s,o,a,h,l,f){super(t,e,n,r,s,o,a,h,l,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ca=class extends Bn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Us(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new jn(5,5,5),s=new Cn({name:"CubemapFromEquirect",uniforms:Zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Be,blending:ti});s.uniforms.tEquirect.value=e;let o=new qe(r,s),a=e.minFilter;return e.minFilter===Mi&&(e.minFilter=An),new aa(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}},pi=class extends Fe{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ug={type:"move"},Pr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null,a=this._targetRay,h=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let b of t.hand.values()){let x=e.getJointPose(b,n),_=this._getHandJoint(l,b);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}let f=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],m=f.position.distanceTo(d.position),g=.02,y=.005;l.inputState.pinching&&m>g+y?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&m<=g-y&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(h.matrix.fromArray(s.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,s.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(s.linearVelocity)):h.hasLinearVelocity=!1,s.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(s.angularVelocity)):h.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ug)))}return a!==null&&(a.visible=r!==null),h!==null&&(h.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new pi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}};var la=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Wt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ha=class extends Fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cn,this.environmentIntensity=1,this.environmentRotation=new cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Ql=new D,Fg=new D,Bg=new Xt,Ae=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let r=Ql.subVectors(n,e).cross(Fg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Ql),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Bg.getNormalMatrix(t),r=this.coplanarPoint(Ql).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ui=new Vi,Og=new ot(.5,.5),ko=new D,Dr=class{constructor(t=new Ae,e=new Ae,n=new Ae,r=new Ae,s=new Ae,o=new Ae){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=En,n=!1){let r=this.planes,s=t.elements,o=s[0],a=s[1],h=s[2],l=s[3],f=s[4],d=s[5],m=s[6],g=s[7],y=s[8],b=s[9],x=s[10],_=s[11],T=s[12],p=s[13],c=s[14],v=s[15];if(r[0].setComponents(l-o,g-f,_-y,v-T).normalize(),r[1].setComponents(l+o,g+f,_+y,v+T).normalize(),r[2].setComponents(l+a,g+d,_+b,v+p).normalize(),r[3].setComponents(l-a,g-d,_-b,v-p).normalize(),n)r[4].setComponents(h,m,x,c).normalize(),r[5].setComponents(l-h,g-m,_-x,v-c).normalize();else if(r[4].setComponents(l-h,g-m,_-x,v-c).normalize(),e===En)r[5].setComponents(l+h,g+m,_+x,v+c).normalize();else if(e===Rs)r[5].setComponents(h,m,x,c).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(t){Ui.center.set(0,0,0);let e=Og.distanceTo(t.center);return Ui.radius=.7071067811865476+e,Ui.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(t){let e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let r=e[n];if(ko.x=r.normal.x>0?t.max.x:t.min.x,ko.y=r.normal.y>0?t.max.y:t.min.y,ko.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(ko)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Lr=class extends On{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},ua=new D,fa=new D,Df=new kt,Ss=new Je,Ho=new Vi,th=new D,Lf=new D,Fs=class extends Fe{constructor(t=new Ce,e=new Lr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)ua.fromBufferAttribute(e,r-1),fa.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=ua.distanceTo(fa);t.setAttribute("lineDistance",new ee(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ho.copy(n.boundingSphere),Ho.applyMatrix4(r),Ho.radius+=s,t.ray.intersectsSphere(Ho)===!1)return;Df.copy(r).invert(),Ss.copy(t.ray).applyMatrix4(Df);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),h=a*a,l=this.isLineSegments?2:1,f=n.index,m=n.attributes.position;if(f!==null){let g=Math.max(0,o.start),y=Math.min(f.count,o.start+o.count);for(let b=g,x=y-1;b<x;b+=l){let _=f.getX(b),T=f.getX(b+1),p=Go(this,t,Ss,h,_,T,b);p&&e.push(p)}if(this.isLineLoop){let b=f.getX(y-1),x=f.getX(g),_=Go(this,t,Ss,h,b,x,y-1);_&&e.push(_)}}else{let g=Math.max(0,o.start),y=Math.min(m.count,o.start+o.count);for(let b=g,x=y-1;b<x;b+=l){let _=Go(this,t,Ss,h,b,b+1,b);_&&e.push(_)}if(this.isLineLoop){let b=Go(this,t,Ss,h,y-1,g,y-1);b&&e.push(b)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Go(i,t,e,n,r,s,o){let a=i.geometry.attributes.position;if(ua.fromBufferAttribute(a,r),fa.fromBufferAttribute(a,s),e.distanceSqToSegment(ua,fa,th,Lf)>n)return;th.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(th);if(!(l<t.near||l>t.far))return{distance:l,point:Lf.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Nf=new D,Uf=new D,da=class extends Fs{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)Nf.fromBufferAttribute(e,r),Uf.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Nf.distanceTo(Uf);t.setAttribute("lineDistance",new ee(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Bs=class extends an{constructor(t,e,n=Si,r,s,o,a=xn,h=xn,l,f=wr,d=1){if(f!==wr&&f!==Wr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let m={width:t,height:e,depth:d};super(m,r,s,o,a,h,f,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Cr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Os=class extends an{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var zs=class i extends Ce{constructor(t=1,e=1,n=1,r=32,s=1,o=!1,a=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:h};let l=this;r=Math.floor(r),s=Math.floor(s);let f=[],d=[],m=[],g=[],y=0,b=[],x=n/2,_=0;T(),o===!1&&(t>0&&p(!0),e>0&&p(!1)),this.setIndex(f),this.setAttribute("position",new ee(d,3)),this.setAttribute("normal",new ee(m,3)),this.setAttribute("uv",new ee(g,2));function T(){let c=new D,v=new D,u=0,C=(e-t)/n;for(let E=0;E<=s;E++){let S=[],M=E/s,w=M*(e-t)+t;for(let A=0;A<=r;A++){let R=A/r,U=R*h+a,F=Math.sin(U),B=Math.cos(U);v.x=w*F,v.y=-M*n+x,v.z=w*B,d.push(v.x,v.y,v.z),c.set(F,C,B).normalize(),m.push(c.x,c.y,c.z),g.push(R,1-M),S.push(y++)}b.push(S)}for(let E=0;E<r;E++)for(let S=0;S<s;S++){let M=b[S][E],w=b[S+1][E],A=b[S+1][E+1],R=b[S][E+1];(t>0||S!==0)&&(f.push(M,w,R),u+=3),(e>0||S!==s-1)&&(f.push(w,A,R),u+=3)}l.addGroup(_,u,0),_+=u}function p(c){let v=y,u=new ot,C=new D,E=0,S=c===!0?t:e,M=c===!0?1:-1;for(let A=1;A<=r;A++)d.push(0,x*M,0),m.push(0,M,0),g.push(.5,.5),y++;let w=y;for(let A=0;A<=r;A++){let U=A/r*h+a,F=Math.cos(U),B=Math.sin(U);C.x=S*B,C.y=x*M,C.z=S*F,d.push(C.x,C.y,C.z),m.push(0,M,0),u.x=F*.5+.5,u.y=B*.5*M+.5,g.push(u.x,u.y),y++}for(let A=0;A<r;A++){let R=v+A,U=w+A;c===!0?f.push(U,U+1,R):f.push(U+1,U,R),E+=3}l.addGroup(_,E,c===!0?1:2),_+=E}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},pa=class i extends zs{constructor(t=1,e=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Wo=new D,Xo=new D,eh=new D,qo=new le,ma=class extends Ce{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let r=Math.pow(10,4),s=Math.cos(br*e),o=t.getIndex(),a=t.getAttribute("position"),h=o?o.count:a.count,l=[0,0,0],f=["a","b","c"],d=new Array(3),m={},g=[];for(let y=0;y<h;y+=3){o?(l[0]=o.getX(y),l[1]=o.getX(y+1),l[2]=o.getX(y+2)):(l[0]=y,l[1]=y+1,l[2]=y+2);let{a:b,b:x,c:_}=qo;if(b.fromBufferAttribute(a,l[0]),x.fromBufferAttribute(a,l[1]),_.fromBufferAttribute(a,l[2]),qo.getNormal(eh),d[0]=`${Math.round(b.x*r)},${Math.round(b.y*r)},${Math.round(b.z*r)}`,d[1]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,d[2]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let T=0;T<3;T++){let p=(T+1)%3,c=d[T],v=d[p],u=qo[f[T]],C=qo[f[p]],E=`${c}_${v}`,S=`${v}_${c}`;S in m&&m[S]?(eh.dot(m[S].normal)<=s&&(g.push(u.x,u.y,u.z),g.push(C.x,C.y,C.z)),m[S]=null):E in m||(m[E]={index0:l[T],index1:l[p],normal:eh.clone()})}}for(let y in m)if(m[y]){let{index0:b,index1:x}=m[y];Wo.fromBufferAttribute(a,b),Xo.fromBufferAttribute(a,x),g.push(Wo.x,Wo.y,Wo.z),g.push(Xo.x,Xo.y,Xo.z)}this.setAttribute("position",new ee(g,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},ln=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),r=0,s=n.length,o;e?o=e:o=t*n[s-1];let a=0,h=s-1,l;for(;a<=h;)if(r=Math.floor(a+(h-a)/2),l=n[r]-o,l<0)a=r+1;else if(l>0)h=r-1;else{h=r;break}if(r=h,n[r]===o)return r/(s-1);let f=n[r],m=n[r+1]-f,g=(o-f)/m;return(r+g)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),h=e||(o.isVector2?new ot:new D);return h.copy(a).sub(o).normalize(),h}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new D,r=[],s=[],o=[],a=new D,h=new kt;for(let g=0;g<=t;g++){let y=g/t;r[g]=this.getTangentAt(y,new D)}s[0]=new D,o[0]=new D;let l=Number.MAX_VALUE,f=Math.abs(r[0].x),d=Math.abs(r[0].y),m=Math.abs(r[0].z);f<=l&&(l=f,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),m<=l&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let g=1;g<=t;g++){if(s[g]=s[g-1].clone(),o[g]=o[g-1].clone(),a.crossVectors(r[g-1],r[g]),a.length()>Number.EPSILON){a.normalize();let y=Math.acos(Gt(r[g-1].dot(r[g]),-1,1));s[g].applyMatrix4(h.makeRotationAxis(a,y))}o[g].crossVectors(r[g],s[g])}if(e===!0){let g=Math.acos(Gt(s[0].dot(s[t]),-1,1));g/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(g=-g);for(let y=1;y<=t;y++)s[y].applyMatrix4(h.makeRotationAxis(r[y],g*y)),o[y].crossVectors(r[y],s[y])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Nr=class extends ln{constructor(t=0,e=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=h}getPoint(t,e=new ot){let n=e,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+t*s,h=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let f=Math.cos(this.aRotation),d=Math.sin(this.aRotation),m=h-this.aX,g=l-this.aY;h=m*f-g*d+this.aX,l=m*d+g*f+this.aY}return n.set(h,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},ga=class extends Nr{constructor(t,e,n,r,s,o){super(t,e,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function kh(){let i=0,t=0,e=0,n=0;function r(s,o,a,h){i=s,t=a,e=-3*s+3*o-2*a-h,n=2*s-2*o+a+h}return{initCatmullRom:function(s,o,a,h,l){r(o,a,l*(a-s),l*(h-o))},initNonuniformCatmullRom:function(s,o,a,h,l,f,d){let m=(o-s)/l-(a-s)/(l+f)+(a-o)/f,g=(a-o)/f-(h-o)/(f+d)+(h-a)/d;m*=f,g*=f,r(o,a,m,g)},calc:function(s){let o=s*s,a=o*s;return i+t*s+e*o+n*a}}}var Yo=new D,nh=new kh,ih=new kh,rh=new kh,_a=class extends ln{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new D){let n=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t,a=Math.floor(o),h=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:h===0&&a===s-1&&(a=s-2,h=1);let l,f;this.closed||a>0?l=r[(a-1)%s]:(Yo.subVectors(r[0],r[1]).add(r[0]),l=Yo);let d=r[a%s],m=r[(a+1)%s];if(this.closed||a+2<s?f=r[(a+2)%s]:(Yo.subVectors(r[s-1],r[s-2]).add(r[s-1]),f=Yo),this.curveType==="centripetal"||this.curveType==="chordal"){let g=this.curveType==="chordal"?.5:.25,y=Math.pow(l.distanceToSquared(d),g),b=Math.pow(d.distanceToSquared(m),g),x=Math.pow(m.distanceToSquared(f),g);b<1e-4&&(b=1),y<1e-4&&(y=b),x<1e-4&&(x=b),nh.initNonuniformCatmullRom(l.x,d.x,m.x,f.x,y,b,x),ih.initNonuniformCatmullRom(l.y,d.y,m.y,f.y,y,b,x),rh.initNonuniformCatmullRom(l.z,d.z,m.z,f.z,y,b,x)}else this.curveType==="catmullrom"&&(nh.initCatmullRom(l.x,d.x,m.x,f.x,this.tension),ih.initCatmullRom(l.y,d.y,m.y,f.y,this.tension),rh.initCatmullRom(l.z,d.z,m.z,f.z,this.tension));return n.set(nh.calc(h),ih.calc(h),rh.calc(h)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(new D().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Ff(i,t,e,n,r){let s=(n-t)*.5,o=(r-e)*.5,a=i*i,h=i*a;return(2*e-2*n+s+o)*h+(-3*e+3*n-2*s-o)*a+s*i+e}function zg(i,t){let e=1-i;return e*e*t}function Vg(i,t){return 2*(1-i)*i*t}function kg(i,t){return i*i*t}function ws(i,t,e,n){return zg(i,t)+Vg(i,e)+kg(i,n)}function Hg(i,t){let e=1-i;return e*e*e*t}function Gg(i,t){let e=1-i;return 3*e*e*i*t}function Wg(i,t){return 3*(1-i)*i*i*t}function Xg(i,t){return i*i*i*t}function Es(i,t,e,n,r){return Hg(i,t)+Gg(i,e)+Wg(i,n)+Xg(i,r)}var Vs=class extends ln{constructor(t=new ot,e=new ot,n=new ot,r=new ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new ot){let n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Es(t,r.x,s.x,o.x,a.x),Es(t,r.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},xa=class extends ln{constructor(t=new D,e=new D,n=new D,r=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new D){let n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Es(t,r.x,s.x,o.x,a.x),Es(t,r.y,s.y,o.y,a.y),Es(t,r.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ks=class extends ln{constructor(t=new ot,e=new ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ot){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ot){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ya=class extends ln{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Hs=class extends ln{constructor(t=new ot,e=new ot,n=new ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ot){let n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(ws(t,r.x,s.x,o.x),ws(t,r.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},va=class extends ln{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){let n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(ws(t,r.x,s.x,o.x),ws(t,r.y,s.y,o.y),ws(t,r.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Gs=class extends ln{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ot){let n=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,h=r[o===0?o:o-1],l=r[o],f=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return n.set(Ff(a,h.x,l.x,f.x,d.x),Ff(a,h.y,l.y,f.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(r.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(new ot().fromArray(r))}return this}},fh=Object.freeze({__proto__:null,ArcCurve:ga,CatmullRomCurve3:_a,CubicBezierCurve:Vs,CubicBezierCurve3:xa,EllipseCurve:Nr,LineCurve:ks,LineCurve3:ya,QuadraticBezierCurve:Hs,QuadraticBezierCurve3:va,SplineCurve:Gs}),Ma=class extends ln{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new fh[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=n){let o=r[s]-n,a=this.curves[s],h=a.getLength(),l=h===0?0:1-o/h;return a.getPointAt(l,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,h=o.getPoints(a);for(let l=0;l<h.length;l++){let f=h[l];n&&n.equals(f)||(e.push(f),n=f)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let r=t.curves[e];this.curves.push(new fh[r.type]().fromJSON(r))}return this}},ki=class extends Ma{constructor(t){super(),this.type="Path",this.currentPoint=new ot,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new ks(this.currentPoint.clone(),new ot(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){let s=new Hs(this.currentPoint.clone(),new ot(t,e),new ot(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,o){let a=new Vs(this.currentPoint.clone(),new ot(t,e),new ot(n,r),new ot(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Gs(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,o){let a=this.currentPoint.x,h=this.currentPoint.y;return this.absarc(t+a,e+h,n,r,s,o),this}absarc(t,e,n,r,s,o){return this.absellipse(t,e,n,n,r,s,o),this}ellipse(t,e,n,r,s,o,a,h){let l=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(t+l,e+f,n,r,s,o,a,h),this}absellipse(t,e,n,r,s,o,a,h){let l=new Nr(t,e,n,r,s,o,a,h);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let f=l.getPoint(1);return this.currentPoint.copy(f),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},mi=class extends ki{constructor(t){super(t),this.uuid=Yi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,r=this.holes.length;n<r;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let r=t.holes[e];this.holes.push(new ki().fromJSON(r))}return this}};function qg(i,t,e=2){let n=t&&t.length,r=n?t[0]*e:i.length,s=Fd(i,0,r,e,!0),o=[];if(!s||s.next===s.prev)return o;let a,h,l;if(n&&(s=Kg(i,t,s,e)),i.length>80*e){a=1/0,h=1/0;let f=-1/0,d=-1/0;for(let m=e;m<r;m+=e){let g=i[m],y=i[m+1];g<a&&(a=g),y<h&&(h=y),g>f&&(f=g),y>d&&(d=y)}l=Math.max(f-a,d-h),l=l!==0?32767/l:0}return Ws(s,o,e,a,h,l,0),o}function Fd(i,t,e,n,r){let s;if(r===c_(i,t,e,n)>0)for(let o=t;o<e;o+=n)s=Bf(o/n|0,i[o],i[o+1],s);else for(let o=e-n;o>=t;o-=n)s=Bf(o/n|0,i[o],i[o+1],s);return s&&Ur(s,s.next)&&(qs(s),s=s.next),s}function Hi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ur(e,e.next)||be(e.prev,e,e.next)===0)){if(qs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ws(i,t,e,n,r,s,o){if(!i)return;!o&&s&&n_(i,n,r,s);let a=i;for(;i.prev!==i.next;){let h=i.prev,l=i.next;if(s?Zg(i,n,r,s):Yg(i)){t.push(h.i,i.i,l.i),qs(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=$g(Hi(i),t),Ws(i,t,e,n,r,s,2)):o===2&&Jg(i,t,e,n,r,s):Ws(Hi(i),t,e,n,r,s,1);break}}}function Yg(i){let t=i.prev,e=i,n=i.next;if(be(t,e,n)>=0)return!1;let r=t.x,s=e.x,o=n.x,a=t.y,h=e.y,l=n.y,f=Math.min(r,s,o),d=Math.min(a,h,l),m=Math.max(r,s,o),g=Math.max(a,h,l),y=n.next;for(;y!==t;){if(y.x>=f&&y.x<=m&&y.y>=d&&y.y<=g&&bs(r,a,s,h,o,l,y.x,y.y)&&be(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function Zg(i,t,e,n){let r=i.prev,s=i,o=i.next;if(be(r,s,o)>=0)return!1;let a=r.x,h=s.x,l=o.x,f=r.y,d=s.y,m=o.y,g=Math.min(a,h,l),y=Math.min(f,d,m),b=Math.max(a,h,l),x=Math.max(f,d,m),_=dh(g,y,t,e,n),T=dh(b,x,t,e,n),p=i.prevZ,c=i.nextZ;for(;p&&p.z>=_&&c&&c.z<=T;){if(p.x>=g&&p.x<=b&&p.y>=y&&p.y<=x&&p!==r&&p!==o&&bs(a,f,h,d,l,m,p.x,p.y)&&be(p.prev,p,p.next)>=0||(p=p.prevZ,c.x>=g&&c.x<=b&&c.y>=y&&c.y<=x&&c!==r&&c!==o&&bs(a,f,h,d,l,m,c.x,c.y)&&be(c.prev,c,c.next)>=0))return!1;c=c.nextZ}for(;p&&p.z>=_;){if(p.x>=g&&p.x<=b&&p.y>=y&&p.y<=x&&p!==r&&p!==o&&bs(a,f,h,d,l,m,p.x,p.y)&&be(p.prev,p,p.next)>=0)return!1;p=p.prevZ}for(;c&&c.z<=T;){if(c.x>=g&&c.x<=b&&c.y>=y&&c.y<=x&&c!==r&&c!==o&&bs(a,f,h,d,l,m,c.x,c.y)&&be(c.prev,c,c.next)>=0)return!1;c=c.nextZ}return!0}function $g(i,t){let e=i;do{let n=e.prev,r=e.next.next;!Ur(n,r)&&Od(n,e,e.next,r)&&Xs(n,r)&&Xs(r,n)&&(t.push(n.i,e.i,r.i),qs(e),qs(e.next),e=i=r),e=e.next}while(e!==i);return Hi(e)}function Jg(i,t,e,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&s_(o,a)){let h=zd(o,a);o=Hi(o,o.next),h=Hi(h,h.next),Ws(o,t,e,n,r,s,0),Ws(h,t,e,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function Kg(i,t,e,n){let r=[];for(let s=0,o=t.length;s<o;s++){let a=t[s]*n,h=s<o-1?t[s+1]*n:i.length,l=Fd(i,a,h,n,!1);l===l.next&&(l.steiner=!0),r.push(r_(l))}r.sort(jg);for(let s=0;s<r.length;s++)e=Qg(r[s],e);return e}function jg(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=n-r}return e}function Qg(i,t){let e=t_(i,t);if(!e)return t;let n=zd(e,i);return Hi(n,n.next),Hi(e,e.next)}function t_(i,t){let e=t,n=i.x,r=i.y,s=-1/0,o;if(Ur(i,e))return e;do{if(Ur(i,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){let d=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>s&&(s=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,h=o.x,l=o.y,f=1/0;e=o;do{if(n>=e.x&&e.x>=h&&n!==e.x&&Bd(r<l?n:s,r,h,l,r<l?s:n,r,e.x,e.y)){let d=Math.abs(r-e.y)/(n-e.x);Xs(e,i)&&(d<f||d===f&&(e.x>o.x||e.x===o.x&&e_(o,e)))&&(o=e,f=d)}e=e.next}while(e!==a);return o}function e_(i,t){return be(i.prev,i,t.prev)<0&&be(t.next,i,i.next)<0}function n_(i,t,e,n){let r=i;do r.z===0&&(r.z=dh(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,i_(r)}function i_(i){let t,e=1;do{let n=i,r;i=null;let s=null;for(t=0;n;){t++;let o=n,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let h=e;for(;a>0||h>0&&o;)a!==0&&(h===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,h--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,e*=2}while(t>1);return i}function dh(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function r_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Bd(i,t,e,n,r,s,o,a){return(r-o)*(t-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(n-a)}function bs(i,t,e,n,r,s,o,a){return!(i===o&&t===a)&&Bd(i,t,e,n,r,s,o,a)}function s_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!o_(i,t)&&(Xs(i,t)&&Xs(t,i)&&a_(i,t)&&(be(i.prev,i,t.prev)||be(i,t.prev,t))||Ur(i,t)&&be(i.prev,i,i.next)>0&&be(t.prev,t,t.next)>0)}function be(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ur(i,t){return i.x===t.x&&i.y===t.y}function Od(i,t,e,n){let r=$o(be(i,t,e)),s=$o(be(i,t,n)),o=$o(be(e,n,i)),a=$o(be(e,n,t));return!!(r!==s&&o!==a||r===0&&Zo(i,e,t)||s===0&&Zo(i,n,t)||o===0&&Zo(e,i,n)||a===0&&Zo(e,t,n))}function Zo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function $o(i){return i>0?1:i<0?-1:0}function o_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Od(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Xs(i,t){return be(i.prev,i,i.next)<0?be(i,t,i.next)>=0&&be(i,i.prev,t)>=0:be(i,t,i.prev)<0||be(i,i.next,t)<0}function a_(i,t){let e=i,n=!1,r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function zd(i,t){let e=ph(i.i,i.x,i.y),n=ph(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Bf(i,t,e,n){let r=ph(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function qs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ph(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function c_(i,t,e,n){let r=0;for(let s=t,o=e-n;s<e;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}var mh=class{static triangulate(t,e,n=2){return qg(t,e,n)}},Jn=class i{static area(t){let e=t.length,n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],r=[],s=[];Of(t),zf(n,t);let o=t.length;e.forEach(Of);for(let h=0;h<e.length;h++)r.push(o),o+=e[h].length,zf(n,e[h]);let a=mh.triangulate(n,r);for(let h=0;h<a.length;h+=3)s.push(a.slice(h,h+3));return s}};function Of(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function zf(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Fr=class i extends Ce{constructor(t=new mi([new ot(.5,.5),new ot(-.5,.5),new ot(-.5,-.5),new ot(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,r=[],s=[];for(let a=0,h=t.length;a<h;a++){let l=t[a];o(l)}this.setAttribute("position",new ee(r,3)),this.setAttribute("uv",new ee(s,2)),this.computeVertexNormals();function o(a){let h=[],l=e.curveSegments!==void 0?e.curveSegments:12,f=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,m=e.bevelEnabled!==void 0?e.bevelEnabled:!0,g=e.bevelThickness!==void 0?e.bevelThickness:.2,y=e.bevelSize!==void 0?e.bevelSize:g-.1,b=e.bevelOffset!==void 0?e.bevelOffset:0,x=e.bevelSegments!==void 0?e.bevelSegments:3,_=e.extrudePath,T=e.UVGenerator!==void 0?e.UVGenerator:l_,p,c=!1,v,u,C,E;_&&(p=_.getSpacedPoints(f),c=!0,m=!1,v=_.computeFrenetFrames(f,!1),u=new D,C=new D,E=new D),m||(x=0,g=0,y=0,b=0);let S=a.extractPoints(l),M=S.shape,w=S.holes;if(!Jn.isClockWise(M)){M=M.reverse();for(let tt=0,J=w.length;tt<J;tt++){let Y=w[tt];Jn.isClockWise(Y)&&(w[tt]=Y.reverse())}}function R(tt){let Y=10000000000000001e-36,q=tt[0];for(let mt=1;mt<=tt.length;mt++){let nt=mt%tt.length,rt=tt[nt],Rt=rt.x-q.x,Ct=rt.y-q.y,L=Rt*Rt+Ct*Ct,I=Math.max(Math.abs(rt.x),Math.abs(rt.y),Math.abs(q.x),Math.abs(q.y)),V=Y*I*I;if(L<=V){tt.splice(nt,1),mt--;continue}q=rt}}R(M),w.forEach(R);let U=w.length,F=M;for(let tt=0;tt<U;tt++){let J=w[tt];M=M.concat(J)}function B(tt,J,Y){return J||console.error("THREE.ExtrudeGeometry: vec does not exist"),tt.clone().addScaledVector(J,Y)}let k=M.length;function O(tt,J,Y){let q,mt,nt,rt=tt.x-J.x,Rt=tt.y-J.y,Ct=Y.x-tt.x,L=Y.y-tt.y,I=rt*rt+Rt*Rt,V=rt*L-Rt*Ct;if(Math.abs(V)>Number.EPSILON){let W=Math.sqrt(I),et=Math.sqrt(Ct*Ct+L*L),X=J.x-Rt/W,xt=J.y+rt/W,_t=Y.x-L/et,Lt=Y.y+Ct/et,Pt=((_t-X)*L-(Lt-xt)*Ct)/(rt*L-Rt*Ct);q=X+rt*Pt-tt.x,mt=xt+Rt*Pt-tt.y;let ft=q*q+mt*mt;if(ft<=2)return new ot(q,mt);nt=Math.sqrt(ft/2)}else{let W=!1;rt>Number.EPSILON?Ct>Number.EPSILON&&(W=!0):rt<-Number.EPSILON?Ct<-Number.EPSILON&&(W=!0):Math.sign(Rt)===Math.sign(L)&&(W=!0),W?(q=-Rt,mt=rt,nt=Math.sqrt(I)):(q=rt,mt=Rt,nt=Math.sqrt(I/2))}return new ot(q/nt,mt/nt)}let Z=[];for(let tt=0,J=F.length,Y=J-1,q=tt+1;tt<J;tt++,Y++,q++)Y===J&&(Y=0),q===J&&(q=0),Z[tt]=O(F[tt],F[Y],F[q]);let at=[],it,ut=Z.concat();for(let tt=0,J=U;tt<J;tt++){let Y=w[tt];it=[];for(let q=0,mt=Y.length,nt=mt-1,rt=q+1;q<mt;q++,nt++,rt++)nt===mt&&(nt=0),rt===mt&&(rt=0),it[q]=O(Y[q],Y[nt],Y[rt]);at.push(it),ut=ut.concat(it)}let Mt;if(x===0)Mt=Jn.triangulateShape(F,w);else{let tt=[],J=[];for(let Y=0;Y<x;Y++){let q=Y/x,mt=g*Math.cos(q*Math.PI/2),nt=y*Math.sin(q*Math.PI/2)+b;for(let rt=0,Rt=F.length;rt<Rt;rt++){let Ct=B(F[rt],Z[rt],nt);lt(Ct.x,Ct.y,-mt),q===0&&tt.push(Ct)}for(let rt=0,Rt=U;rt<Rt;rt++){let Ct=w[rt];it=at[rt];let L=[];for(let I=0,V=Ct.length;I<V;I++){let W=B(Ct[I],it[I],nt);lt(W.x,W.y,-mt),q===0&&L.push(W)}q===0&&J.push(L)}}Mt=Jn.triangulateShape(tt,J)}let St=Mt.length,yt=y+b;for(let tt=0;tt<k;tt++){let J=m?B(M[tt],ut[tt],yt):M[tt];c?(C.copy(v.normals[0]).multiplyScalar(J.x),u.copy(v.binormals[0]).multiplyScalar(J.y),E.copy(p[0]).add(C).add(u),lt(E.x,E.y,E.z)):lt(J.x,J.y,0)}for(let tt=1;tt<=f;tt++)for(let J=0;J<k;J++){let Y=m?B(M[J],ut[J],yt):M[J];c?(C.copy(v.normals[tt]).multiplyScalar(Y.x),u.copy(v.binormals[tt]).multiplyScalar(Y.y),E.copy(p[tt]).add(C).add(u),lt(E.x,E.y,E.z)):lt(Y.x,Y.y,d/f*tt)}for(let tt=x-1;tt>=0;tt--){let J=tt/x,Y=g*Math.cos(J*Math.PI/2),q=y*Math.sin(J*Math.PI/2)+b;for(let mt=0,nt=F.length;mt<nt;mt++){let rt=B(F[mt],Z[mt],q);lt(rt.x,rt.y,d+Y)}for(let mt=0,nt=w.length;mt<nt;mt++){let rt=w[mt];it=at[mt];for(let Rt=0,Ct=rt.length;Rt<Ct;Rt++){let L=B(rt[Rt],it[Rt],q);c?lt(L.x,L.y+p[f-1].y,p[f-1].x+Y):lt(L.x,L.y,d+Y)}}}$(),Q();function $(){let tt=r.length/3;if(m){let J=0,Y=k*J;for(let q=0;q<St;q++){let mt=Mt[q];ht(mt[2]+Y,mt[1]+Y,mt[0]+Y)}J=f+x*2,Y=k*J;for(let q=0;q<St;q++){let mt=Mt[q];ht(mt[0]+Y,mt[1]+Y,mt[2]+Y)}}else{for(let J=0;J<St;J++){let Y=Mt[J];ht(Y[2],Y[1],Y[0])}for(let J=0;J<St;J++){let Y=Mt[J];ht(Y[0]+k*f,Y[1]+k*f,Y[2]+k*f)}}n.addGroup(tt,r.length/3-tt,0)}function Q(){let tt=r.length/3,J=0;ct(F,J),J+=F.length;for(let Y=0,q=w.length;Y<q;Y++){let mt=w[Y];ct(mt,J),J+=mt.length}n.addGroup(tt,r.length/3-tt,1)}function ct(tt,J){let Y=tt.length;for(;--Y>=0;){let q=Y,mt=Y-1;mt<0&&(mt=tt.length-1);for(let nt=0,rt=f+x*2;nt<rt;nt++){let Rt=k*nt,Ct=k*(nt+1),L=J+q+Rt,I=J+mt+Rt,V=J+mt+Ct,W=J+q+Ct;At(L,I,V,W)}}}function lt(tt,J,Y){h.push(tt),h.push(J),h.push(Y)}function ht(tt,J,Y){qt(tt),qt(J),qt(Y);let q=r.length/3,mt=T.generateTopUV(n,r,q-3,q-2,q-1);N(mt[0]),N(mt[1]),N(mt[2])}function At(tt,J,Y,q){qt(tt),qt(J),qt(q),qt(J),qt(Y),qt(q);let mt=r.length/3,nt=T.generateSideWallUV(n,r,mt-6,mt-3,mt-2,mt-1);N(nt[0]),N(nt[1]),N(nt[3]),N(nt[1]),N(nt[2]),N(nt[3])}function qt(tt){r.push(h[tt*3+0]),r.push(h[tt*3+1]),r.push(h[tt*3+2])}function N(tt){s.push(tt.x),s.push(tt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return h_(e,n,t)}static fromJSON(t,e){let n=[];for(let s=0,o=t.shapes.length;s<o;s++){let a=e[t.shapes[s]];n.push(a)}let r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new fh[r.type]().fromJSON(r)),new i(n,t.options)}},l_={generateTopUV:function(i,t,e,n,r){let s=t[e*3],o=t[e*3+1],a=t[n*3],h=t[n*3+1],l=t[r*3],f=t[r*3+1];return[new ot(s,o),new ot(a,h),new ot(l,f)]},generateSideWallUV:function(i,t,e,n,r,s){let o=t[e*3],a=t[e*3+1],h=t[e*3+2],l=t[n*3],f=t[n*3+1],d=t[n*3+2],m=t[r*3],g=t[r*3+1],y=t[r*3+2],b=t[s*3],x=t[s*3+1],_=t[s*3+2];return Math.abs(a-f)<Math.abs(o-l)?[new ot(o,1-h),new ot(l,1-d),new ot(m,1-y),new ot(b,1-_)]:[new ot(a,1-h),new ot(f,1-d),new ot(g,1-y),new ot(x,1-_)]}};function h_(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){let s=i[n];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Sa=class i extends Ce{constructor(t=[new ot(0,-.5),new ot(.5,0),new ot(0,.5)],e=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:r},e=Math.floor(e),r=Gt(r,0,Math.PI*2);let s=[],o=[],a=[],h=[],l=[],f=1/e,d=new D,m=new ot,g=new D,y=new D,b=new D,x=0,_=0;for(let T=0;T<=t.length-1;T++)switch(T){case 0:x=t[T+1].x-t[T].x,_=t[T+1].y-t[T].y,g.x=_*1,g.y=-x,g.z=_*0,b.copy(g),g.normalize(),h.push(g.x,g.y,g.z);break;case t.length-1:h.push(b.x,b.y,b.z);break;default:x=t[T+1].x-t[T].x,_=t[T+1].y-t[T].y,g.x=_*1,g.y=-x,g.z=_*0,y.copy(g),g.x+=b.x,g.y+=b.y,g.z+=b.z,g.normalize(),h.push(g.x,g.y,g.z),b.copy(y)}for(let T=0;T<=e;T++){let p=n+T*f*r,c=Math.sin(p),v=Math.cos(p);for(let u=0;u<=t.length-1;u++){d.x=t[u].x*c,d.y=t[u].y,d.z=t[u].x*v,o.push(d.x,d.y,d.z),m.x=T/e,m.y=u/(t.length-1),a.push(m.x,m.y);let C=h[3*u+0]*c,E=h[3*u+1],S=h[3*u+0]*v;l.push(C,E,S)}}for(let T=0;T<e;T++)for(let p=0;p<t.length-1;p++){let c=p+T*t.length,v=c,u=c+t.length,C=c+t.length+1,E=c+1;s.push(v,u,E),s.push(C,E,u)}this.setIndex(s),this.setAttribute("position",new ee(o,3)),this.setAttribute("uv",new ee(a,2)),this.setAttribute("normal",new ee(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Br=class i extends Ce{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};let s=t/2,o=e/2,a=Math.floor(n),h=Math.floor(r),l=a+1,f=h+1,d=t/a,m=e/h,g=[],y=[],b=[],x=[];for(let _=0;_<f;_++){let T=_*m-o;for(let p=0;p<l;p++){let c=p*d-s;y.push(c,-T,0),b.push(0,0,1),x.push(p/a),x.push(1-_/h)}}for(let _=0;_<h;_++)for(let T=0;T<a;T++){let p=T+l*_,c=T+l*(_+1),v=T+1+l*(_+1),u=T+1+l*_;g.push(p,c,u),g.push(c,v,u)}this.setIndex(g),this.setAttribute("position",new ee(y,3)),this.setAttribute("normal",new ee(b,3)),this.setAttribute("uv",new ee(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var ba=class i extends Ce{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let h=Math.min(o+a,Math.PI),l=0,f=[],d=new D,m=new D,g=[],y=[],b=[],x=[];for(let _=0;_<=n;_++){let T=[],p=_/n,c=0;_===0&&o===0?c=.5/e:_===n&&h===Math.PI&&(c=-.5/e);for(let v=0;v<=e;v++){let u=v/e;d.x=-t*Math.cos(r+u*s)*Math.sin(o+p*a),d.y=t*Math.cos(o+p*a),d.z=t*Math.sin(r+u*s)*Math.sin(o+p*a),y.push(d.x,d.y,d.z),m.copy(d).normalize(),b.push(m.x,m.y,m.z),x.push(u+c,1-p),T.push(l++)}f.push(T)}for(let _=0;_<n;_++)for(let T=0;T<e;T++){let p=f[_][T+1],c=f[_][T],v=f[_+1][T],u=f[_+1][T+1];(_!==0||o>0)&&g.push(p,c,u),(_!==n-1||h<Math.PI)&&g.push(c,v,u)}this.setIndex(g),this.setAttribute("position",new ee(y,3)),this.setAttribute("normal",new ee(b,3)),this.setAttribute("uv",new ee(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ta=class i extends Ce{constructor(t=1,e=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);let o=[],a=[],h=[],l=[],f=new D,d=new D,m=new D;for(let g=0;g<=n;g++)for(let y=0;y<=r;y++){let b=y/r*s,x=g/n*Math.PI*2;d.x=(t+e*Math.cos(x))*Math.cos(b),d.y=(t+e*Math.cos(x))*Math.sin(b),d.z=e*Math.sin(x),a.push(d.x,d.y,d.z),f.x=t*Math.cos(b),f.y=t*Math.sin(b),m.subVectors(d,f).normalize(),h.push(m.x,m.y,m.z),l.push(y/r),l.push(g/n)}for(let g=1;g<=n;g++)for(let y=1;y<=r;y++){let b=(r+1)*g+y-1,x=(r+1)*(g-1)+y-1,_=(r+1)*(g-1)+y,T=(r+1)*g+y;o.push(b,x,T),o.push(x,_,T)}this.setIndex(o),this.setAttribute("position",new ee(a,3)),this.setAttribute("normal",new ee(h,3)),this.setAttribute("uv",new ee(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var wa=class extends On{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nc,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Ea=class extends On{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Wt(16777215),this.specular=new Wt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nc,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=Ja,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Aa=class extends On{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ca=class extends On{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};var Ra=class extends Lr{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}};function Jo(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function u_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Gi=class{constructor(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,r=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<r)){for(let a=n+2;;){if(r===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=e[++n],t<r)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let h=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===h)break;if(r=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(r=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=t*r;for(let o=0;o!==r;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ia=class extends Gi{constructor(t,e,n,r){super(t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ah,endingEnd:ah}}intervalChanged_(t,e,n){let r=this.parameterPositions,s=t-2,o=t+1,a=r[s],h=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case ch:s=t,a=2*e-n;break;case lh:s=r.length-2,a=e+r[s]-r[s+1];break;default:s=t,a=n}if(h===void 0)switch(this.getSettings_().endingEnd){case ch:o=t,h=2*n-e;break;case lh:o=1,h=n+r[1]-r[0];break;default:o=t-1,h=e}let l=(n-e)*.5,f=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(h-n),this._offsetPrev=s*f,this._offsetNext=o*f}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,h=t*a,l=h-a,f=this._offsetPrev,d=this._offsetNext,m=this._weightPrev,g=this._weightNext,y=(n-e)/(r-e),b=y*y,x=b*y,_=-m*x+2*m*b-m*y,T=(1+m)*x+(-1.5-2*m)*b+(-.5+m)*y+1,p=(-1-g)*x+(1.5+g)*b+.5*y,c=g*x-g*b;for(let v=0;v!==a;++v)s[v]=_*o[f+v]+T*o[l+v]+p*o[h+v]+c*o[d+v];return s}},Pa=class extends Gi{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,h=t*a,l=h-a,f=(n-e)/(r-e),d=1-f;for(let m=0;m!==a;++m)s[m]=o[l+m]*d+o[h+m]*f;return s}},Da=class extends Gi{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t){return this.copySampleValue_(t-1)}},hn=class{constructor(t,e,n,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Jo(e,this.TimeBufferType),this.values=Jo(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Jo(t.times,Array),values:Jo(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(n.interpolation=r)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Da(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Pa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ia(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case As:e=this.InterpolantFactoryMethodDiscrete;break;case ia:e=this.InterpolantFactoryMethodLinear;break;case jo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return As;case this.InterpolantFactoryMethodLinear:return ia;case this.InterpolantFactoryMethodSmooth:return jo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]*=t}return this}trim(t,e){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let h=n[a];if(typeof h=="number"&&isNaN(h)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,h),t=!1;break}if(o!==null&&o>h){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,h,o),t=!1;break}o=h}if(r!==void 0&&u_(r))for(let a=0,h=r.length;a!==h;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===jo,s=t.length-1,o=1;for(let a=1;a<s;++a){let h=!1,l=t[a],f=t[a+1];if(l!==f&&(a!==1||l!==t[0]))if(r)h=!0;else{let d=a*n,m=d-n,g=d+n;for(let y=0;y!==n;++y){let b=e[d+y];if(b!==e[m+y]||b!==e[g+y]){h=!0;break}}}if(h){if(a!==o){t[o]=t[a];let d=a*n,m=o*n;for(let g=0;g!==n;++g)e[m+g]=e[d+g]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,h=o*n,l=0;l!==n;++l)e[h+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,r}};hn.prototype.ValueTypeName="";hn.prototype.TimeBufferType=Float32Array;hn.prototype.ValueBufferType=Float32Array;hn.prototype.DefaultInterpolation=ia;var _i=class extends hn{constructor(t,e,n){super(t,e,n)}};_i.prototype.ValueTypeName="bool";_i.prototype.ValueBufferType=Array;_i.prototype.DefaultInterpolation=As;_i.prototype.InterpolantFactoryMethodLinear=void 0;_i.prototype.InterpolantFactoryMethodSmooth=void 0;var La=class extends hn{constructor(t,e,n,r){super(t,e,n,r)}};La.prototype.ValueTypeName="color";var Na=class extends hn{constructor(t,e,n,r){super(t,e,n,r)}};Na.prototype.ValueTypeName="number";var Ua=class extends Gi{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,h=(n-e)/(r-e),l=t*a;for(let f=l+a;l!==f;l+=4)on.slerpFlat(s,0,o,l-a,o,l,h);return s}},Ys=class extends hn{constructor(t,e,n,r){super(t,e,n,r)}InterpolantFactoryMethodLinear(t){return new Ua(this.times,this.values,this.getValueSize(),t)}};Ys.prototype.ValueTypeName="quaternion";Ys.prototype.InterpolantFactoryMethodSmooth=void 0;var xi=class extends hn{constructor(t,e,n){super(t,e,n)}};xi.prototype.ValueTypeName="string";xi.prototype.ValueBufferType=Array;xi.prototype.DefaultInterpolation=As;xi.prototype.InterpolantFactoryMethodLinear=void 0;xi.prototype.InterpolantFactoryMethodSmooth=void 0;var Fa=class extends hn{constructor(t,e,n,r){super(t,e,n,r)}};Fa.prototype.ValueTypeName="vector";var gh={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Ba=class{constructor(t,e,n){let r=this,s=!1,o=0,a=0,h,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(f){a++,s===!1&&r.onStart!==void 0&&r.onStart(f,o,a),s=!0},this.itemEnd=function(f){o++,r.onProgress!==void 0&&r.onProgress(f,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(f){r.onError!==void 0&&r.onError(f)},this.resolveURL=function(f){return h?h(f):f},this.setURLModifier=function(f){return h=f,this},this.addHandler=function(f,d){return l.push(f,d),this},this.removeHandler=function(f){let d=l.indexOf(f);return d!==-1&&l.splice(d,2),this},this.getHandler=function(f){for(let d=0,m=l.length;d<m;d+=2){let g=l[d],y=l[d+1];if(g.global&&(g.lastIndex=0),g.test(f))return y}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Vd=new Ba,Qn=class{constructor(t){this.manager=t!==void 0?t:Vd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Qn.DEFAULT_MATERIAL_NAME="__DEFAULT";var $n={},_h=class extends Error{constructor(t,e){super(t),this.response=e}},Wi=class extends Qn{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=gh.get(`file:${t}`);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if($n[t]!==void 0){$n[t].push({onLoad:e,onProgress:n,onError:r});return}$n[t]=[],$n[t].push({onLoad:e,onProgress:n,onError:r});let o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,h=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let f=$n[t],d=l.body.getReader(),m=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),g=m?parseInt(m):0,y=g!==0,b=0,x=new ReadableStream({start(_){T();function T(){d.read().then(({done:p,value:c})=>{if(p)_.close();else{b+=c.byteLength;let v=new ProgressEvent("progress",{lengthComputable:y,loaded:b,total:g});for(let u=0,C=f.length;u<C;u++){let E=f[u];E.onProgress&&E.onProgress(v)}_.enqueue(c),T()}},p=>{_.error(p)})}}});return new Response(x)}else throw new _h(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(h){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(f=>new DOMParser().parseFromString(f,a));case"json":return l.json();default:if(a==="")return l.text();{let d=/charset="?([^;"\s]*)"?/i.exec(a),m=d&&d[1]?d[1].toLowerCase():void 0,g=new TextDecoder(m);return l.arrayBuffer().then(y=>g.decode(y))}}}).then(l=>{gh.add(`file:${t}`,l);let f=$n[t];delete $n[t];for(let d=0,m=f.length;d<m;d++){let g=f[d];g.onLoad&&g.onLoad(l)}}).catch(l=>{let f=$n[t];if(f===void 0)throw this.manager.itemError(t),l;delete $n[t];for(let d=0,m=f.length;d<m;d++){let g=f[d];g.onError&&g.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Or=class extends Fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Wt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Oa=class extends Or{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Wt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},sh=new kt,Vf=new D,kf=new D,xh=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.mapType=Rn,this.map=null,this.mapPass=null,this.matrix=new kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Dr,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Vf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Vf),kf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(kf),e.updateMatrixWorld(),sh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sh,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(sh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var zr=class extends Ns{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-t,o=n+t,a=r+e,h=r-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=f*this.view.offsetY,h=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},yh=class extends xh{constructor(){super(new zr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},za=class extends Or{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.target=new Fe,this.shadow=new yh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Va=class extends Or{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var ka=class extends Xe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Hh="\\[\\]\\.:\\/",f_=new RegExp("["+Hh+"]","g"),Gh="[^"+Hh+"]",d_="[^"+Hh.replace("\\.","")+"]",p_=/((?:WC+[\/:])*)/.source.replace("WC",Gh),m_=/(WCOD+)?/.source.replace("WCOD",d_),g_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gh),__=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gh),x_=new RegExp("^"+p_+m_+g_+__+"$"),y_=["material","materials","bones","map"],vh=class{constructor(t,e,n){let r=n||ye.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ye=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(f_,"")}static parseTrackName(t){let e=x_.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);y_.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let h=n(a.children);if(h)return h}return null},r=n(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)t[e++]=n[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,r=e.propertyName,s=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===l){l=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[r];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}h=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(h=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ye.Composite=vh;ye.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ye.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ye.prototype.GetterByBindingType=[ye.prototype._getValue_direct,ye.prototype._getValue_array,ye.prototype._getValue_arrayElement,ye.prototype._getValue_toArray];ye.prototype.SetterByBindingTypeAndVersioning=[[ye.prototype._setValue_direct,ye.prototype._setValue_direct_setNeedsUpdate,ye.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_array,ye.prototype._setValue_array_setNeedsUpdate,ye.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_arrayElement,ye.prototype._setValue_arrayElement_setNeedsUpdate,ye.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_fromArray,ye.prototype._setValue_fromArray_setNeedsUpdate,ye.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var MS=new Float32Array(1);var Hf=new kt,Ha=class{constructor(t,e,n=0,r=1/0){this.ray=new Je(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new Rr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Hf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Hf),this}intersectObject(t,e=!0,n=[]){return Mh(t,this,n,e),n.sort(Gf),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)Mh(t[r],this,n,e);return n.sort(Gf),n}};function Gf(i,t){return i.distance-t.distance}function Mh(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let o=0,a=s.length;o<a;o++)Mh(s[o],t,e,!0)}}var Vr=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Gt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Gt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Wf=new D,Ko=new D,vr=new D,Mr=new D,oh=new D,v_=new D,M_=new D,he=class{constructor(t=new D,e=new D){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Wf.subVectors(t,this.start),Ko.subVectors(this.end,this.start);let n=Ko.dot(Ko),s=Ko.dot(Wf)/n;return e&&(s=Gt(s,0,1)),s}closestPointToPoint(t,e,n){let r=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(r).add(this.start)}distanceSqToLine3(t,e=v_,n=M_){let r=10000000000000001e-32,s,o,a=this.start,h=t.start,l=this.end,f=t.end;vr.subVectors(l,a),Mr.subVectors(f,h),oh.subVectors(a,h);let d=vr.dot(vr),m=Mr.dot(Mr),g=Mr.dot(oh);if(d<=r&&m<=r)return e.copy(a),n.copy(h),e.sub(n),e.dot(e);if(d<=r)s=0,o=g/m,o=Gt(o,0,1);else{let y=vr.dot(oh);if(m<=r)o=0,s=Gt(-y/d,0,1);else{let b=vr.dot(Mr),x=d*m-b*b;x!==0?s=Gt((b*g-y*m)/x,0,1):s=0,o=(b*s+g)/m,o<0?(o=0,s=Gt(-y/d,0,1)):o>1&&(o=1,s=Gt((b-y)/d,0,1))}}return e.copy(a).add(vr.multiplyScalar(s)),n.copy(h).add(Mr.multiplyScalar(o)),e.sub(n),e.dot(e)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var Zs=class{constructor(){this.type="ShapePath",this.color=new Wt,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new ki,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,r){return this.currentPath.quadraticCurveTo(t,e,n,r),this}bezierCurveTo(t,e,n,r,s,o){return this.currentPath.bezierCurveTo(t,e,n,r,s,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(_){let T=[];for(let p=0,c=_.length;p<c;p++){let v=_[p],u=new mi;u.curves=v.curves,T.push(u)}return T}function n(_,T){let p=T.length,c=!1;for(let v=p-1,u=0;u<p;v=u++){let C=T[v],E=T[u],S=E.x-C.x,M=E.y-C.y;if(Math.abs(M)>Number.EPSILON){if(M<0&&(C=T[u],S=-S,E=T[v],M=-M),_.y<C.y||_.y>E.y)continue;if(_.y===C.y){if(_.x===C.x)return!0}else{let w=M*(_.x-C.x)-S*(_.y-C.y);if(w===0)return!0;if(w<0)continue;c=!c}}else{if(_.y!==C.y)continue;if(E.x<=_.x&&_.x<=C.x||C.x<=_.x&&_.x<=E.x)return!0}}return c}let r=Jn.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,h,l=[];if(s.length===1)return a=s[0],h=new mi,h.curves=a.curves,l.push(h),l;let f=!r(s[0].getPoints());f=t?!f:f;let d=[],m=[],g=[],y=0,b;m[y]=void 0,g[y]=[];for(let _=0,T=s.length;_<T;_++)a=s[_],b=a.getPoints(),o=r(b),o=t?!o:o,o?(!f&&m[y]&&y++,m[y]={s:new mi,p:b},m[y].s.curves=a.curves,f&&y++,g[y]=[]):g[y].push({h:a,p:b[0]});if(!m[0])return e(s);if(m.length>1){let _=!1,T=0;for(let p=0,c=m.length;p<c;p++)d[p]=[];for(let p=0,c=m.length;p<c;p++){let v=g[p];for(let u=0;u<v.length;u++){let C=v[u],E=!0;for(let S=0;S<m.length;S++)n(C.p,m[S].p)&&(p!==S&&T++,E?(E=!1,d[S].push(C)):_=!0);E&&d[p].push(C)}}T>0&&_===!1&&(g=d)}let x;for(let _=0,T=m.length;_<T;_++){h=m[_].s,l.push(h),x=g[_];for(let p=0,c=x.length;p<c;p++)h.holes.push(x[p].h)}return l}},$s=class extends Fn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function Wh(i,t,e,n){let r=S_(n);switch(e){case Dh:return i*t;case Nh:return i*t/r.components*r.byteLength;case ic:return i*t/r.components*r.byteLength;case Uh:return i*t*2/r.components*r.byteLength;case rc:return i*t*2/r.components*r.byteLength;case Lh:return i*t*3/r.components*r.byteLength;case yn:return i*t*4/r.components*r.byteLength;case sc:return i*t*4/r.components*r.byteLength;case js:case Qs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case to:case eo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ac:case lc:return Math.max(i,16)*Math.max(t,8)/4;case oc:case cc:return Math.max(i,8)*Math.max(t,8)/2;case hc:case uc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case fc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case dc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case pc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case mc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case gc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case _c:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case xc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case yc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case vc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Mc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Sc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case bc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Tc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case wc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ec:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ac:case Cc:case Rc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ic:case Pc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Dc:case Lc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function S_(i){switch(i){case Rn:case Ch:return{byteLength:1,components:1};case kr:case Rh:case Hr:return{byteLength:2,components:1};case ec:case nc:return{byteLength:2,components:4};case Si:case tc:case Vn:return{byteLength:4,components:1};case Ih:case Ph:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function hp(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function R_(i){let t=new WeakMap;function e(a,h){let l=a.array,f=a.usage,d=l.byteLength,m=i.createBuffer();i.bindBuffer(h,m),i.bufferData(h,l,f),a.onUploadCallback();let g;if(l instanceof Float32Array)g=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)g=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)g=i.SHORT;else if(l instanceof Uint32Array)g=i.UNSIGNED_INT;else if(l instanceof Int32Array)g=i.INT;else if(l instanceof Int8Array)g=i.BYTE;else if(l instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:m,type:g,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,h,l){let f=h.array,d=h.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,f);else{d.sort((g,y)=>g.start-y.start);let m=0;for(let g=1;g<d.length;g++){let y=d[m],b=d[g];b.start<=y.start+y.count+1?y.count=Math.max(y.count,b.start+b.count-y.start):(++m,d[m]=b)}d.length=m+1;for(let g=0,y=d.length;g<y;g++){let b=d[g];i.bufferSubData(l,b.start*f.BYTES_PER_ELEMENT,f,b.start,b.count)}h.clearUpdateRanges()}h.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let h=t.get(a);h&&(i.deleteBuffer(h.buffer),t.delete(a))}function o(a,h){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let f=t.get(a);(!f||f.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,h));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,h),l.version=a.version}}return{get:r,remove:s,update:o}}var I_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,P_=`#ifdef USE_ALPHAHASH
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
#endif`,D_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,L_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,N_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,U_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,F_=`#ifdef USE_AOMAP
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
#endif`,B_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,O_=`#ifdef USE_BATCHING
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
#endif`,z_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,V_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,k_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,H_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,G_=`#ifdef USE_IRIDESCENCE
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
#endif`,W_=`#ifdef USE_BUMPMAP
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
#endif`,X_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,q_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Y_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Z_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,J_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,K_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,j_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Q_=`#define PI 3.141592653589793
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
} // validated`,t0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,e0=`vec3 transformedNormal = objectNormal;
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
#endif`,n0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,i0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,r0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,s0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,o0="gl_FragColor = linearToOutputTexel( gl_FragColor );",a0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,c0=`#ifdef USE_ENVMAP
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
#endif`,l0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,h0=`#ifdef USE_ENVMAP
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
#endif`,u0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,f0=`#ifdef USE_ENVMAP
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
#endif`,d0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,p0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,m0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,g0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_0=`#ifdef USE_GRADIENTMAP
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
}`,x0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,y0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,v0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,M0=`uniform bool receiveShadow;
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
#endif`,S0=`#ifdef USE_ENVMAP
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
#endif`,b0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,T0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,w0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,E0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,A0=`PhysicalMaterial material;
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
#endif`,C0=`struct PhysicalMaterial {
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
}`,R0=`
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
#endif`,I0=`#if defined( RE_IndirectDiffuse )
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
#endif`,P0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,D0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,L0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,N0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,U0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,F0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,B0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,O0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,z0=`#if defined( USE_POINTS_UV )
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
#endif`,V0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,k0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,H0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,G0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,W0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,X0=`#ifdef USE_MORPHTARGETS
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
#endif`,q0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Y0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Z0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,J0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,K0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,j0=`#ifdef USE_NORMALMAP
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
#endif`,Q0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ex=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ix=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,sx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ox=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ax=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ux=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,px=`float getShadowMask() {
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
}`,mx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gx=`#ifdef USE_SKINNING
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
#endif`,_x=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xx=`#ifdef USE_SKINNING
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
#endif`,yx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,bx=`#ifdef USE_TRANSMISSION
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
#endif`,Tx=`#ifdef USE_TRANSMISSION
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
#endif`,wx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ax=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Rx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ix=`uniform sampler2D t2D;
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
}`,Px=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Lx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ux=`#include <common>
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
}`,Fx=`#if DEPTH_PACKING == 3200
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
}`,Bx=`#define DISTANCE
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
}`,Ox=`#define DISTANCE
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
}`,zx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kx=`uniform float scale;
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
}`,Hx=`uniform vec3 diffuse;
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
}`,Gx=`#include <common>
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
}`,Wx=`uniform vec3 diffuse;
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
}`,Xx=`#define LAMBERT
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
}`,qx=`#define LAMBERT
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
}`,Yx=`#define MATCAP
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
}`,Zx=`#define MATCAP
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
}`,$x=`#define NORMAL
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
}`,Jx=`#define NORMAL
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
}`,Kx=`#define PHONG
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
}`,jx=`#define PHONG
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
}`,Qx=`#define STANDARD
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
}`,ty=`#define STANDARD
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
}`,ey=`#define TOON
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
}`,ny=`#define TOON
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
}`,iy=`uniform float size;
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
}`,ry=`uniform vec3 diffuse;
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
}`,sy=`#include <common>
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
}`,oy=`uniform vec3 color;
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
}`,ay=`uniform float rotation;
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
}`,cy=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:I_,alphahash_pars_fragment:P_,alphamap_fragment:D_,alphamap_pars_fragment:L_,alphatest_fragment:N_,alphatest_pars_fragment:U_,aomap_fragment:F_,aomap_pars_fragment:B_,batching_pars_vertex:O_,batching_vertex:z_,begin_vertex:V_,beginnormal_vertex:k_,bsdfs:H_,iridescence_fragment:G_,bumpmap_pars_fragment:W_,clipping_planes_fragment:X_,clipping_planes_pars_fragment:q_,clipping_planes_pars_vertex:Y_,clipping_planes_vertex:Z_,color_fragment:$_,color_pars_fragment:J_,color_pars_vertex:K_,color_vertex:j_,common:Q_,cube_uv_reflection_fragment:t0,defaultnormal_vertex:e0,displacementmap_pars_vertex:n0,displacementmap_vertex:i0,emissivemap_fragment:r0,emissivemap_pars_fragment:s0,colorspace_fragment:o0,colorspace_pars_fragment:a0,envmap_fragment:c0,envmap_common_pars_fragment:l0,envmap_pars_fragment:h0,envmap_pars_vertex:u0,envmap_physical_pars_fragment:S0,envmap_vertex:f0,fog_vertex:d0,fog_pars_vertex:p0,fog_fragment:m0,fog_pars_fragment:g0,gradientmap_pars_fragment:_0,lightmap_pars_fragment:x0,lights_lambert_fragment:y0,lights_lambert_pars_fragment:v0,lights_pars_begin:M0,lights_toon_fragment:b0,lights_toon_pars_fragment:T0,lights_phong_fragment:w0,lights_phong_pars_fragment:E0,lights_physical_fragment:A0,lights_physical_pars_fragment:C0,lights_fragment_begin:R0,lights_fragment_maps:I0,lights_fragment_end:P0,logdepthbuf_fragment:D0,logdepthbuf_pars_fragment:L0,logdepthbuf_pars_vertex:N0,logdepthbuf_vertex:U0,map_fragment:F0,map_pars_fragment:B0,map_particle_fragment:O0,map_particle_pars_fragment:z0,metalnessmap_fragment:V0,metalnessmap_pars_fragment:k0,morphinstance_vertex:H0,morphcolor_vertex:G0,morphnormal_vertex:W0,morphtarget_pars_vertex:X0,morphtarget_vertex:q0,normal_fragment_begin:Y0,normal_fragment_maps:Z0,normal_pars_fragment:$0,normal_pars_vertex:J0,normal_vertex:K0,normalmap_pars_fragment:j0,clearcoat_normal_fragment_begin:Q0,clearcoat_normal_fragment_maps:tx,clearcoat_pars_fragment:ex,iridescence_pars_fragment:nx,opaque_fragment:ix,packing:rx,premultiplied_alpha_fragment:sx,project_vertex:ox,dithering_fragment:ax,dithering_pars_fragment:cx,roughnessmap_fragment:lx,roughnessmap_pars_fragment:hx,shadowmap_pars_fragment:ux,shadowmap_pars_vertex:fx,shadowmap_vertex:dx,shadowmask_pars_fragment:px,skinbase_vertex:mx,skinning_pars_vertex:gx,skinning_vertex:_x,skinnormal_vertex:xx,specularmap_fragment:yx,specularmap_pars_fragment:vx,tonemapping_fragment:Mx,tonemapping_pars_fragment:Sx,transmission_fragment:bx,transmission_pars_fragment:Tx,uv_pars_fragment:wx,uv_pars_vertex:Ex,uv_vertex:Ax,worldpos_vertex:Cx,background_vert:Rx,background_frag:Ix,backgroundCube_vert:Px,backgroundCube_frag:Dx,cube_vert:Lx,cube_frag:Nx,depth_vert:Ux,depth_frag:Fx,distanceRGBA_vert:Bx,distanceRGBA_frag:Ox,equirect_vert:zx,equirect_frag:Vx,linedashed_vert:kx,linedashed_frag:Hx,meshbasic_vert:Gx,meshbasic_frag:Wx,meshlambert_vert:Xx,meshlambert_frag:qx,meshmatcap_vert:Yx,meshmatcap_frag:Zx,meshnormal_vert:$x,meshnormal_frag:Jx,meshphong_vert:Kx,meshphong_frag:jx,meshphysical_vert:Qx,meshphysical_frag:ty,meshtoon_vert:ey,meshtoon_frag:ny,points_vert:iy,points_frag:ry,shadow_vert:sy,shadow_frag:oy,sprite_vert:ay,sprite_frag:cy},bt={common:{diffuse:{value:new Wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new Wt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},kn={basic:{uniforms:ke([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:ke([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Wt(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:ke([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Wt(0)},specular:{value:new Wt(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:ke([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new Wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:ke([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new Wt(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:ke([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:ke([bt.points,bt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:ke([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:ke([bt.common,bt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:ke([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:ke([bt.sprite,bt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:ke([bt.common,bt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:ke([bt.lights,bt.fog,{color:{value:new Wt(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};kn.physical={uniforms:ke([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new Wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new Wt(0)},specularColor:{value:new Wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};var Fc={r:0,b:0,g:0},$i=new cn,ly=new kt;function hy(i,t,e,n,r,s,o){let a=new Wt(0),h=s===!0?0:1,l,f,d=null,m=0,g=null;function y(p){let c=p.isScene===!0?p.background:null;return c&&c.isTexture&&(c=(p.backgroundBlurriness>0?e:t).get(c)),c}function b(p){let c=!1,v=y(p);v===null?_(a,h):v&&v.isColor&&(_(v,1),c=!0);let u=i.xr.getEnvironmentBlendMode();u==="additive"?n.buffers.color.setClear(0,0,0,1,o):u==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||c)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(p,c){let v=y(c);v&&(v.isCubeTexture||v.mapping===Js)?(f===void 0&&(f=new qe(new jn(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:Zi(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:Be,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(u,C,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),$i.copy(c.backgroundRotation),$i.x*=-1,$i.y*=-1,$i.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),f.material.uniforms.envMap.value=v,f.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=c.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(ly.makeRotationFromEuler($i)),f.material.toneMapped=jt.getTransfer(v.colorSpace)!==ae,(d!==v||m!==v.version||g!==i.toneMapping)&&(f.material.needsUpdate=!0,d=v,m=v.version,g=i.toneMapping),f.layers.enableAll(),p.unshift(f,f.geometry,f.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new qe(new Br(2,2),new Cn({name:"BackgroundMaterial",uniforms:Zi(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=c.backgroundIntensity,l.material.toneMapped=jt.getTransfer(v.colorSpace)!==ae,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||m!==v.version||g!==i.toneMapping)&&(l.material.needsUpdate=!0,d=v,m=v.version,g=i.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function _(p,c){p.getRGB(Fc,Vh(i)),n.buffers.color.setClear(Fc.r,Fc.g,Fc.b,c,o)}function T(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(p,c=1){a.set(p),h=c,_(a,h)},getClearAlpha:function(){return h},setClearAlpha:function(p){h=p,_(a,h)},render:b,addToRenderList:x,dispose:T}}function uy(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=m(null),s=r,o=!1;function a(M,w,A,R,U){let F=!1,B=d(R,A,w);s!==B&&(s=B,l(s.object)),F=g(M,R,A,U),F&&y(M,R,A,U),U!==null&&t.update(U,i.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,c(M,w,A,R),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function h(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function f(M){return i.deleteVertexArray(M)}function d(M,w,A){let R=A.wireframe===!0,U=n[M.id];U===void 0&&(U={},n[M.id]=U);let F=U[w.id];F===void 0&&(F={},U[w.id]=F);let B=F[R];return B===void 0&&(B=m(h()),F[R]=B),B}function m(M){let w=[],A=[],R=[];for(let U=0;U<e;U++)w[U]=0,A[U]=0,R[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:A,attributeDivisors:R,object:M,attributes:{},index:null}}function g(M,w,A,R){let U=s.attributes,F=w.attributes,B=0,k=A.getAttributes();for(let O in k)if(k[O].location>=0){let at=U[O],it=F[O];if(it===void 0&&(O==="instanceMatrix"&&M.instanceMatrix&&(it=M.instanceMatrix),O==="instanceColor"&&M.instanceColor&&(it=M.instanceColor)),at===void 0||at.attribute!==it||it&&at.data!==it.data)return!0;B++}return s.attributesNum!==B||s.index!==R}function y(M,w,A,R){let U={},F=w.attributes,B=0,k=A.getAttributes();for(let O in k)if(k[O].location>=0){let at=F[O];at===void 0&&(O==="instanceMatrix"&&M.instanceMatrix&&(at=M.instanceMatrix),O==="instanceColor"&&M.instanceColor&&(at=M.instanceColor));let it={};it.attribute=at,at&&at.data&&(it.data=at.data),U[O]=it,B++}s.attributes=U,s.attributesNum=B,s.index=R}function b(){let M=s.newAttributes;for(let w=0,A=M.length;w<A;w++)M[w]=0}function x(M){_(M,0)}function _(M,w){let A=s.newAttributes,R=s.enabledAttributes,U=s.attributeDivisors;A[M]=1,R[M]===0&&(i.enableVertexAttribArray(M),R[M]=1),U[M]!==w&&(i.vertexAttribDivisor(M,w),U[M]=w)}function T(){let M=s.newAttributes,w=s.enabledAttributes;for(let A=0,R=w.length;A<R;A++)w[A]!==M[A]&&(i.disableVertexAttribArray(A),w[A]=0)}function p(M,w,A,R,U,F,B){B===!0?i.vertexAttribIPointer(M,w,A,U,F):i.vertexAttribPointer(M,w,A,R,U,F)}function c(M,w,A,R){b();let U=R.attributes,F=A.getAttributes(),B=w.defaultAttributeValues;for(let k in F){let O=F[k];if(O.location>=0){let Z=U[k];if(Z===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(Z=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(Z=M.instanceColor)),Z!==void 0){let at=Z.normalized,it=Z.itemSize,ut=t.get(Z);if(ut===void 0)continue;let Mt=ut.buffer,St=ut.type,yt=ut.bytesPerElement,$=St===i.INT||St===i.UNSIGNED_INT||Z.gpuType===tc;if(Z.isInterleavedBufferAttribute){let Q=Z.data,ct=Q.stride,lt=Z.offset;if(Q.isInstancedInterleavedBuffer){for(let ht=0;ht<O.locationSize;ht++)_(O.location+ht,Q.meshPerAttribute);M.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ht=0;ht<O.locationSize;ht++)x(O.location+ht);i.bindBuffer(i.ARRAY_BUFFER,Mt);for(let ht=0;ht<O.locationSize;ht++)p(O.location+ht,it/O.locationSize,St,at,ct*yt,(lt+it/O.locationSize*ht)*yt,$)}else{if(Z.isInstancedBufferAttribute){for(let Q=0;Q<O.locationSize;Q++)_(O.location+Q,Z.meshPerAttribute);M.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Q=0;Q<O.locationSize;Q++)x(O.location+Q);i.bindBuffer(i.ARRAY_BUFFER,Mt);for(let Q=0;Q<O.locationSize;Q++)p(O.location+Q,it/O.locationSize,St,at,it*yt,it/O.locationSize*Q*yt,$)}}else if(B!==void 0){let at=B[k];if(at!==void 0)switch(at.length){case 2:i.vertexAttrib2fv(O.location,at);break;case 3:i.vertexAttrib3fv(O.location,at);break;case 4:i.vertexAttrib4fv(O.location,at);break;default:i.vertexAttrib1fv(O.location,at)}}}}T()}function v(){E();for(let M in n){let w=n[M];for(let A in w){let R=w[A];for(let U in R)f(R[U].object),delete R[U];delete w[A]}delete n[M]}}function u(M){if(n[M.id]===void 0)return;let w=n[M.id];for(let A in w){let R=w[A];for(let U in R)f(R[U].object),delete R[U];delete w[A]}delete n[M.id]}function C(M){for(let w in n){let A=n[w];if(A[M.id]===void 0)continue;let R=A[M.id];for(let U in R)f(R[U].object),delete R[U];delete A[M.id]}}function E(){S(),o=!0,s!==r&&(s=r,l(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:E,resetDefaultState:S,dispose:v,releaseStatesOfGeometry:u,releaseStatesOfProgram:C,initAttributes:b,enableAttribute:x,disableUnusedAttributes:T}}function fy(i,t,e){let n;function r(l){n=l}function s(l,f){i.drawArrays(n,l,f),e.update(f,n,1)}function o(l,f,d){d!==0&&(i.drawArraysInstanced(n,l,f,d),e.update(f,n,d))}function a(l,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,f,0,d);let g=0;for(let y=0;y<d;y++)g+=f[y];e.update(g,n,1)}function h(l,f,d,m){if(d===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let y=0;y<l.length;y++)o(l[y],f[y],m[y]);else{g.multiDrawArraysInstancedWEBGL(n,l,0,f,0,m,0,d);let y=0;for(let b=0;b<d;b++)y+=f[b]*m[b];e.update(y,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=h}function dy(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==yn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let E=C===Hr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Rn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Vn&&!E)}function h(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",f=h(l);f!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",f,"instead."),l=f);let d=e.logarithmicDepthBuffer===!0,m=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),c=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=y>0,u=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:h,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:m,maxTextures:g,maxVertexTextures:y,maxTextureSize:b,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:T,maxVaryings:p,maxFragmentUniforms:c,vertexTextures:v,maxSamples:u}}function py(i){let t=this,e=null,n=0,r=!1,s=!1,o=new Ae,a=new Xt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(d,m){let g=d.length!==0||m||n!==0||r;return r=m,n=d.length,g},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,m){e=f(d,m,0)},this.setState=function(d,m,g){let y=d.clippingPlanes,b=d.clipIntersection,x=d.clipShadows,_=i.get(d);if(!r||y===null||y.length===0||s&&!x)s?f(null):l();else{let T=s?0:n,p=T*4,c=_.clippingState||null;h.value=c,c=f(y,m,p,g);for(let v=0;v!==p;++v)c[v]=e[v];_.clippingState=c,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=T}};function l(){h.value!==e&&(h.value=e,h.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function f(d,m,g,y){let b=d!==null?d.length:0,x=null;if(b!==0){if(x=h.value,y!==!0||x===null){let _=g+b*4,T=m.matrixWorldInverse;a.getNormalMatrix(T),(x===null||x.length<_)&&(x=new Float32Array(_));for(let p=0,c=g;p!==b;++p,c+=4)o.copy(d[p]).applyMatrix4(T,a),o.normal.toArray(x,c),x[c+3]=o.constant}h.value=x,h.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,x}}function my(i){let t=new WeakMap;function e(o,a){return a===Ka?o.mapping=Xi:a===ja&&(o.mapping=qi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ka||a===ja)if(t.has(o)){let h=t.get(o).texture;return e(h,o.mapping)}else{let h=o.image;if(h&&h.height>0){let l=new ca(h.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",r),e(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let h=t.get(a);h!==void 0&&(t.delete(a),h.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}var qr=4,kd=[.125,.215,.35,.446,.526,.582],ji=20,Xh=new zr,Hd=new Wt,qh=null,Yh=0,Zh=0,$h=!1,Ki=(1+Math.sqrt(5))/2,Xr=1/Ki,Gd=[new D(-Ki,Xr,0),new D(Ki,Xr,0),new D(-Xr,0,Ki),new D(Xr,0,Ki),new D(0,Ki,-Xr),new D(0,Ki,Xr),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],gy=new D,zc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100,s={}){let{size:o=256,position:a=gy}=s;qh=this._renderer.getRenderTarget(),Yh=this._renderer.getActiveCubeFace(),Zh=this._renderer.getActiveMipmapLevel(),$h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(t,n,r,h,a),e>0&&this._blur(h,0,0,e),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(qh,Yh,Zh),this._renderer.xr.enabled=$h,t.scissorTest=!1,Bc(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Xi||t.mapping===qi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),qh=this._renderer.getRenderTarget(),Yh=this._renderer.getActiveCubeFace(),Zh=this._renderer.getActiveMipmapLevel(),$h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:An,minFilter:An,generateMipmaps:!1,type:Hr,format:yn,colorSpace:zi,depthBuffer:!1},r=Wd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wd(t,e,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_y(s)),this._blurMaterial=xy(s,t,e)}return r}_compileMaterial(t){let e=new qe(this._lodPlanes[0],t);this._renderer.compile(e,Xh)}_sceneToCubeUV(t,e,n,r,s){let h=new Xe(90,1,e,n),l=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],d=this._renderer,m=d.autoClear,g=d.toneMapping;d.getClearColor(Hd),d.toneMapping=ei,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null));let b=new Ir({name:"PMREM.Background",side:Be,depthWrite:!1,depthTest:!1}),x=new qe(new jn,b),_=!1,T=t.background;T?T.isColor&&(b.color.copy(T),t.background=null,_=!0):(b.color.copy(Hd),_=!0);for(let p=0;p<6;p++){let c=p%3;c===0?(h.up.set(0,l[p],0),h.position.set(s.x,s.y,s.z),h.lookAt(s.x+f[p],s.y,s.z)):c===1?(h.up.set(0,0,l[p]),h.position.set(s.x,s.y,s.z),h.lookAt(s.x,s.y+f[p],s.z)):(h.up.set(0,l[p],0),h.position.set(s.x,s.y,s.z),h.lookAt(s.x,s.y,s.z+f[p]));let v=this._cubeSize;Bc(r,c*v,p>2?v:0,v,v),d.setRenderTarget(r),_&&d.render(x,h),d.render(t,h)}x.geometry.dispose(),x.material.dispose(),d.toneMapping=g,d.autoClear=m,t.background=T}_textureToCubeUV(t,e){let n=this._renderer,r=t.mapping===Xi||t.mapping===qi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=qd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xd());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new qe(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;let h=this._cubeSize;Bc(e,0,0,3*h,2*h),n.setRenderTarget(e),n.render(o,Xh)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Gd[(r-s-1)%Gd.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){let h=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let f=3,d=new qe(this._lodPlanes[r],l),m=l.uniforms,g=this._sizeLods[n]-1,y=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*ji-1),b=s/y,x=isFinite(s)?1+Math.floor(f*b):ji;x>ji&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${ji}`);let _=[],T=0;for(let C=0;C<ji;++C){let E=C/b,S=Math.exp(-E*E/2);_.push(S),C===0?T+=S:C<x&&(T+=2*S)}for(let C=0;C<_.length;C++)_[C]=_[C]/T;m.envMap.value=t.texture,m.samples.value=x,m.weights.value=_,m.latitudinal.value=o==="latitudinal",a&&(m.poleAxis.value=a);let{_lodMax:p}=this;m.dTheta.value=y,m.mipInt.value=p-n;let c=this._sizeLods[r],v=3*c*(r>p-qr?r-p+qr:0),u=4*(this._cubeSize-c);Bc(e,v,u,3*c,2*c),h.setRenderTarget(e),h.render(d,Xh)}};function _y(i){let t=[],e=[],n=[],r=i,s=i-qr+1+kd.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);e.push(a);let h=1/a;o>i-qr?h=kd[o-i+qr-1]:o===0&&(h=0),n.push(h);let l=1/(a-2),f=-l,d=1+l,m=[f,f,d,f,d,d,f,f,d,d,f,d],g=6,y=6,b=3,x=2,_=1,T=new Float32Array(b*y*g),p=new Float32Array(x*y*g),c=new Float32Array(_*y*g);for(let u=0;u<g;u++){let C=u%3*2/3-1,E=u>2?0:-1,S=[C,E,0,C+2/3,E,0,C+2/3,E+1,0,C,E,0,C+2/3,E+1,0,C,E+1,0];T.set(S,b*y*u),p.set(m,x*y*u);let M=[u,u,u,u,u,u];c.set(M,_*y*u)}let v=new Ce;v.setAttribute("position",new pe(T,b)),v.setAttribute("uv",new pe(p,x)),v.setAttribute("faceIndex",new pe(c,_)),t.push(v),r>qr&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Wd(i,t,e){let n=new Bn(i,t,e);return n.texture.mapping=Js,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Bc(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function xy(i,t,e){let n=new Float32Array(ji),r=new D(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:ji,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ou(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Xd(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ou(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function qd(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ou(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function ou(){return`

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
	`}function yy(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let h=a.mapping,l=h===Ka||h===ja,f=h===Xi||h===qi;if(l||f){let d=t.get(a),m=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==m)return e===null&&(e=new zc(i)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{let g=a.image;return l&&g&&g.height>0||f&&g&&r(g)?(e===null&&(e=new zc(i)),d=l?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let h=0,l=6;for(let f=0;f<l;f++)a[f]!==void 0&&h++;return h===l}function s(a){let h=a.target;h.removeEventListener("dispose",s);let l=t.get(h);l!==void 0&&(t.delete(h),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function vy(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let r=e(n);return r===null&&Ar("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function My(i,t,e,n){let r={},s=new WeakMap;function o(d){let m=d.target;m.index!==null&&t.remove(m.index);for(let y in m.attributes)t.remove(m.attributes[y]);m.removeEventListener("dispose",o),delete r[m.id];let g=s.get(m);g&&(t.remove(g),s.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,e.memory.geometries--}function a(d,m){return r[m.id]===!0||(m.addEventListener("dispose",o),r[m.id]=!0,e.memory.geometries++),m}function h(d){let m=d.attributes;for(let g in m)t.update(m[g],i.ARRAY_BUFFER)}function l(d){let m=[],g=d.index,y=d.attributes.position,b=0;if(g!==null){let T=g.array;b=g.version;for(let p=0,c=T.length;p<c;p+=3){let v=T[p+0],u=T[p+1],C=T[p+2];m.push(v,u,u,C,C,v)}}else if(y!==void 0){let T=y.array;b=y.version;for(let p=0,c=T.length/3-1;p<c;p+=3){let v=p+0,u=p+1,C=p+2;m.push(v,u,u,C,C,v)}}else return;let x=new(zh(m)?Ls:Ds)(m,1);x.version=b;let _=s.get(d);_&&t.remove(_),s.set(d,x)}function f(d){let m=s.get(d);if(m){let g=d.index;g!==null&&m.version<g.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:h,getWireframeAttribute:f}}function Sy(i,t,e){let n;function r(m){n=m}let s,o;function a(m){s=m.type,o=m.bytesPerElement}function h(m,g){i.drawElements(n,g,s,m*o),e.update(g,n,1)}function l(m,g,y){y!==0&&(i.drawElementsInstanced(n,g,s,m*o,y),e.update(g,n,y))}function f(m,g,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,s,m,0,y);let x=0;for(let _=0;_<y;_++)x+=g[_];e.update(x,n,1)}function d(m,g,y,b){if(y===0)return;let x=t.get("WEBGL_multi_draw");if(x===null)for(let _=0;_<m.length;_++)l(m[_]/o,g[_],b[_]);else{x.multiDrawElementsInstancedWEBGL(n,g,0,s,m,0,b,0,y);let _=0;for(let T=0;T<y;T++)_+=g[T]*b[T];e.update(_,n,1)}}this.setMode=r,this.setIndex=a,this.render=h,this.renderInstances=l,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function by(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function Ty(i,t,e){let n=new WeakMap,r=new se;function s(o,a,h){let l=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=f!==void 0?f.length:0,m=n.get(a);if(m===void 0||m.count!==d){let S=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",S)};m!==void 0&&m.texture.dispose();let g=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,b=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],T=a.morphAttributes.color||[],p=0;g===!0&&(p=1),y===!0&&(p=2),b===!0&&(p=3);let c=a.attributes.position.count*p,v=1;c>t.maxTextureSize&&(v=Math.ceil(c/t.maxTextureSize),c=t.maxTextureSize);let u=new Float32Array(c*v*4*d),C=new Ps(u,c,v,d);C.type=Vn,C.needsUpdate=!0;let E=p*4;for(let M=0;M<d;M++){let w=x[M],A=_[M],R=T[M],U=c*v*4*M;for(let F=0;F<w.count;F++){let B=F*E;g===!0&&(r.fromBufferAttribute(w,F),u[U+B+0]=r.x,u[U+B+1]=r.y,u[U+B+2]=r.z,u[U+B+3]=0),y===!0&&(r.fromBufferAttribute(A,F),u[U+B+4]=r.x,u[U+B+5]=r.y,u[U+B+6]=r.z,u[U+B+7]=0),b===!0&&(r.fromBufferAttribute(R,F),u[U+B+8]=r.x,u[U+B+9]=r.y,u[U+B+10]=r.z,u[U+B+11]=R.itemSize===4?r.w:1)}}m={count:d,texture:C,size:new ot(c,v)},n.set(a,m),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let b=0;b<l.length;b++)g+=l[b];let y=a.morphTargetsRelative?1:1-g;h.getUniforms().setValue(i,"morphTargetBaseInfluence",y),h.getUniforms().setValue(i,"morphTargetInfluences",l)}h.getUniforms().setValue(i,"morphTargetsTexture",m.texture,e),h.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}return{update:s}}function wy(i,t,e,n){let r=new WeakMap;function s(h){let l=n.render.frame,f=h.geometry,d=t.get(h,f);if(r.get(d)!==l&&(t.update(d),r.set(d,l)),h.isInstancedMesh&&(h.hasEventListener("dispose",a)===!1&&h.addEventListener("dispose",a),r.get(h)!==l&&(e.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,i.ARRAY_BUFFER),r.set(h,l))),h.isSkinnedMesh){let m=h.skeleton;r.get(m)!==l&&(m.update(),r.set(m,l))}return d}function o(){r=new WeakMap}function a(h){let l=h.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}var up=new an,Yd=new Bs(1,1),fp=new Ps,dp=new oa,pp=new Us,Zd=[],$d=[],Jd=new Float32Array(16),Kd=new Float32Array(9),jd=new Float32Array(4);function Zr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let r=t*e,s=Zd[r];if(s===void 0&&(s=new Float32Array(r),Zd[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function De(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Le(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function kc(i,t){let e=$d[t];e===void 0&&(e=new Int32Array(t),$d[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Ey(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Ay(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2fv(this.addr,t),Le(e,t)}}function Cy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;i.uniform3fv(this.addr,t),Le(e,t)}}function Ry(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4fv(this.addr,t),Le(e,t)}}function Iy(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Le(e,t)}else{if(De(e,n))return;jd.set(n),i.uniformMatrix2fv(this.addr,!1,jd),Le(e,n)}}function Py(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Le(e,t)}else{if(De(e,n))return;Kd.set(n),i.uniformMatrix3fv(this.addr,!1,Kd),Le(e,n)}}function Dy(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Le(e,t)}else{if(De(e,n))return;Jd.set(n),i.uniformMatrix4fv(this.addr,!1,Jd),Le(e,n)}}function Ly(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Ny(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2iv(this.addr,t),Le(e,t)}}function Uy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3iv(this.addr,t),Le(e,t)}}function Fy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4iv(this.addr,t),Le(e,t)}}function By(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Oy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2uiv(this.addr,t),Le(e,t)}}function zy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3uiv(this.addr,t),Le(e,t)}}function Vy(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4uiv(this.addr,t),Le(e,t)}}function ky(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Yd.compareFunction=Fh,s=Yd):s=up,e.setTexture2D(t||s,r)}function Hy(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||dp,r)}function Gy(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||pp,r)}function Wy(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||fp,r)}function Xy(i){switch(i){case 5126:return Ey;case 35664:return Ay;case 35665:return Cy;case 35666:return Ry;case 35674:return Iy;case 35675:return Py;case 35676:return Dy;case 5124:case 35670:return Ly;case 35667:case 35671:return Ny;case 35668:case 35672:return Uy;case 35669:case 35673:return Fy;case 5125:return By;case 36294:return Oy;case 36295:return zy;case 36296:return Vy;case 35678:case 36198:case 36298:case 36306:case 35682:return ky;case 35679:case 36299:case 36307:return Hy;case 35680:case 36300:case 36308:case 36293:return Gy;case 36289:case 36303:case 36311:case 36292:return Wy}}function qy(i,t){i.uniform1fv(this.addr,t)}function Yy(i,t){let e=Zr(t,this.size,2);i.uniform2fv(this.addr,e)}function Zy(i,t){let e=Zr(t,this.size,3);i.uniform3fv(this.addr,e)}function $y(i,t){let e=Zr(t,this.size,4);i.uniform4fv(this.addr,e)}function Jy(i,t){let e=Zr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Ky(i,t){let e=Zr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function jy(i,t){let e=Zr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Qy(i,t){i.uniform1iv(this.addr,t)}function tv(i,t){i.uniform2iv(this.addr,t)}function ev(i,t){i.uniform3iv(this.addr,t)}function nv(i,t){i.uniform4iv(this.addr,t)}function iv(i,t){i.uniform1uiv(this.addr,t)}function rv(i,t){i.uniform2uiv(this.addr,t)}function sv(i,t){i.uniform3uiv(this.addr,t)}function ov(i,t){i.uniform4uiv(this.addr,t)}function av(i,t,e){let n=this.cache,r=t.length,s=kc(e,r);De(n,s)||(i.uniform1iv(this.addr,s),Le(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||up,s[o])}function cv(i,t,e){let n=this.cache,r=t.length,s=kc(e,r);De(n,s)||(i.uniform1iv(this.addr,s),Le(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||dp,s[o])}function lv(i,t,e){let n=this.cache,r=t.length,s=kc(e,r);De(n,s)||(i.uniform1iv(this.addr,s),Le(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||pp,s[o])}function hv(i,t,e){let n=this.cache,r=t.length,s=kc(e,r);De(n,s)||(i.uniform1iv(this.addr,s),Le(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||fp,s[o])}function uv(i){switch(i){case 5126:return qy;case 35664:return Yy;case 35665:return Zy;case 35666:return $y;case 35674:return Jy;case 35675:return Ky;case 35676:return jy;case 5124:case 35670:return Qy;case 35667:case 35671:return tv;case 35668:case 35672:return ev;case 35669:case 35673:return nv;case 5125:return iv;case 36294:return rv;case 36295:return sv;case 36296:return ov;case 35678:case 36198:case 36298:case 36306:case 35682:return av;case 35679:case 36299:case 36307:return cv;case 35680:case 36300:case 36308:case 36293:return lv;case 36289:case 36303:case 36311:case 36292:return hv}}var Kh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Xy(e.type)}},jh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=uv(e.type)}},Qh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(t,e[a.id],n)}}},Jh=/(\w+)(\])?(\[|\.)?/g;function Qd(i,t){i.seq.push(t),i.map[t.id]=t}function fv(i,t,e){let n=i.name,r=n.length;for(Jh.lastIndex=0;;){let s=Jh.exec(n),o=Jh.lastIndex,a=s[1],h=s[2]==="]",l=s[3];if(h&&(a=a|0),l===void 0||l==="["&&o+2===r){Qd(e,l===void 0?new Kh(a,i,t):new jh(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new Qh(a),Qd(e,d)),e=d}}}var Yr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);fv(s,o,this)}}setValue(t,e,n,r){let s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){let r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){let a=e[s],h=n[a.id];h.needsUpdate!==!1&&a.setValue(t,h.value,r)}}static seqWithValue(t,e){let n=[];for(let r=0,s=t.length;r!==s;++r){let o=t[r];o.id in e&&n.push(o)}return n}};function tp(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var dv=37297,pv=0;function mv(i,t){let e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var ep=new Xt;function gv(i){jt._getMatrix(ep,jt.workingColorSpace,i);let t=`mat3( ${ep.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(i)){case Cs:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function np(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+mv(i.getShaderSource(t),a)}else return s}function _v(i,t){let e=gv(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function xv(i,t){let e;switch(t){case pd:e="Linear";break;case md:e="Reinhard";break;case gd:e="Cineon";break;case _d:e="ACESFilmic";break;case yd:e="AgX";break;case vd:e="Neutral";break;case xd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Oc=new D;function yv(){jt.getLuminanceCoefficients(Oc);let i=Oc.x.toFixed(4),t=Oc.y.toFixed(4),e=Oc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(no).join(`
`)}function Mv(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Sv(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(t,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function no(i){return i!==""}function ip(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function rp(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var bv=/^[ \t]*#include +<([\w\d./]+)>/gm;function tu(i){return i.replace(bv,wv)}var Tv=new Map;function wv(i,t){let e=$t[t];if(e===void 0){let n=Tv.get(t);if(n!==void 0)e=$t[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return tu(e)}var Ev=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sp(i){return i.replace(Ev,Av)}function Av(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function op(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Cv(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===bh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Yf?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===zn&&(t="SHADOWMAP_TYPE_VSM"),t}function Rv(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Xi:case qi:t="ENVMAP_TYPE_CUBE";break;case Js:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Iv(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===qi&&(t="ENVMAP_MODE_REFRACTION"),t}function Pv(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ja:t="ENVMAP_BLENDING_MULTIPLY";break;case fd:t="ENVMAP_BLENDING_MIX";break;case dd:t="ENVMAP_BLENDING_ADD";break}return t}function Dv(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Lv(i,t,e,n){let r=i.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,h=Cv(e),l=Rv(e),f=Iv(e),d=Pv(e),m=Dv(e),g=vv(e),y=Mv(s),b=r.createProgram(),x,_,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(no).join(`
`),x.length>0&&(x+=`
`),_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(no).join(`
`),_.length>0&&(_+=`
`)):(x=[op(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(no).join(`
`),_=[op(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+f:"",e.envMap?"#define "+d:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ei?"#define TONE_MAPPING":"",e.toneMapping!==ei?$t.tonemapping_pars_fragment:"",e.toneMapping!==ei?xv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,_v("linearToOutputTexel",e.outputColorSpace),yv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(no).join(`
`)),o=tu(o),o=ip(o,e),o=rp(o,e),a=tu(a),a=ip(a,e),a=rp(a,e),o=sp(o),a=sp(a),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,x=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,_=["#define varying in",e.glslVersion===Bh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Bh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let p=T+x+o,c=T+_+a,v=tp(r,r.VERTEX_SHADER,p),u=tp(r,r.FRAGMENT_SHADER,c);r.attachShader(b,v),r.attachShader(b,u),e.index0AttributeName!==void 0?r.bindAttribLocation(b,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function C(w){if(i.debug.checkShaderErrors){let A=r.getProgramInfoLog(b)||"",R=r.getShaderInfoLog(v)||"",U=r.getShaderInfoLog(u)||"",F=A.trim(),B=R.trim(),k=U.trim(),O=!0,Z=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,b,v,u);else{let at=np(r,v,"vertex"),it=np(r,u,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+F+`
`+at+`
`+it)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(B===""||k==="")&&(Z=!1);Z&&(w.diagnostics={runnable:O,programLog:F,vertexShader:{log:B,prefix:x},fragmentShader:{log:k,prefix:_}})}r.deleteShader(v),r.deleteShader(u),E=new Yr(r,b),S=Sv(r,b)}let E;this.getUniforms=function(){return E===void 0&&C(this),E};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(b,dv)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=pv++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=v,this.fragmentShader=u,this}var Nv=0,eu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new nu(t),e.set(t,n)),n}},nu=class{constructor(t){this.id=Nv++,this.code=t,this.usedTimes=0}};function Uv(i,t,e,n,r,s,o){let a=new Rr,h=new eu,l=new Set,f=[],d=r.logarithmicDepthBuffer,m=r.vertexTextures,g=r.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(S){return l.add(S),S===0?"uv":`uv${S}`}function x(S,M,w,A,R){let U=A.fog,F=R.geometry,B=S.isMeshStandardMaterial?A.environment:null,k=(S.isMeshStandardMaterial?e:t).get(S.envMap||B),O=k&&k.mapping===Js?k.image.height:null,Z=y[S.type];S.precision!==null&&(g=r.getMaxPrecision(S.precision),g!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",g,"instead."));let at=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,it=at!==void 0?at.length:0,ut=0;F.morphAttributes.position!==void 0&&(ut=1),F.morphAttributes.normal!==void 0&&(ut=2),F.morphAttributes.color!==void 0&&(ut=3);let Mt,St,yt,$;if(Z){let re=kn[Z];Mt=re.vertexShader,St=re.fragmentShader}else Mt=S.vertexShader,St=S.fragmentShader,h.update(S),yt=h.getVertexShaderID(S),$=h.getFragmentShaderID(S);let Q=i.getRenderTarget(),ct=i.state.buffers.depth.getReversed(),lt=R.isInstancedMesh===!0,ht=R.isBatchedMesh===!0,At=!!S.map,qt=!!S.matcap,N=!!k,tt=!!S.aoMap,J=!!S.lightMap,Y=!!S.bumpMap,q=!!S.normalMap,mt=!!S.displacementMap,nt=!!S.emissiveMap,rt=!!S.metalnessMap,Rt=!!S.roughnessMap,Ct=S.anisotropy>0,L=S.clearcoat>0,I=S.dispersion>0,V=S.iridescence>0,W=S.sheen>0,et=S.transmission>0,X=Ct&&!!S.anisotropyMap,xt=L&&!!S.clearcoatMap,_t=L&&!!S.clearcoatNormalMap,Lt=L&&!!S.clearcoatRoughnessMap,Pt=V&&!!S.iridescenceMap,ft=V&&!!S.iridescenceThicknessMap,Et=W&&!!S.sheenColorMap,Vt=W&&!!S.sheenRoughnessMap,Ft=!!S.specularMap,Tt=!!S.specularColorMap,Zt=!!S.specularIntensityMap,z=et&&!!S.transmissionMap,gt=et&&!!S.thicknessMap,vt=!!S.gradientMap,Dt=!!S.alphaMap,dt=S.alphaTest>0,st=!!S.alphaHash,Ut=!!S.extensions,Yt=ei;S.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Yt=i.toneMapping);let _e={shaderID:Z,shaderType:S.type,shaderName:S.name,vertexShader:Mt,fragmentShader:St,defines:S.defines,customVertexShaderID:yt,customFragmentShaderID:$,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:g,batching:ht,batchingColor:ht&&R._colorsTexture!==null,instancing:lt,instancingColor:lt&&R.instanceColor!==null,instancingMorph:lt&&R.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:zi,alphaToCoverage:!!S.alphaToCoverage,map:At,matcap:qt,envMap:N,envMapMode:N&&k.mapping,envMapCubeUVHeight:O,aoMap:tt,lightMap:J,bumpMap:Y,normalMap:q,displacementMap:m&&mt,emissiveMap:nt,normalMapObjectSpace:q&&S.normalMapType===Td,normalMapTangentSpace:q&&S.normalMapType===Nc,metalnessMap:rt,roughnessMap:Rt,anisotropy:Ct,anisotropyMap:X,clearcoat:L,clearcoatMap:xt,clearcoatNormalMap:_t,clearcoatRoughnessMap:Lt,dispersion:I,iridescence:V,iridescenceMap:Pt,iridescenceThicknessMap:ft,sheen:W,sheenColorMap:Et,sheenRoughnessMap:Vt,specularMap:Ft,specularColorMap:Tt,specularIntensityMap:Zt,transmission:et,transmissionMap:z,thicknessMap:gt,gradientMap:vt,opaque:S.transparent===!1&&S.blending===Bi&&S.alphaToCoverage===!1,alphaMap:Dt,alphaTest:dt,alphaHash:st,combine:S.combine,mapUv:At&&b(S.map.channel),aoMapUv:tt&&b(S.aoMap.channel),lightMapUv:J&&b(S.lightMap.channel),bumpMapUv:Y&&b(S.bumpMap.channel),normalMapUv:q&&b(S.normalMap.channel),displacementMapUv:mt&&b(S.displacementMap.channel),emissiveMapUv:nt&&b(S.emissiveMap.channel),metalnessMapUv:rt&&b(S.metalnessMap.channel),roughnessMapUv:Rt&&b(S.roughnessMap.channel),anisotropyMapUv:X&&b(S.anisotropyMap.channel),clearcoatMapUv:xt&&b(S.clearcoatMap.channel),clearcoatNormalMapUv:_t&&b(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Lt&&b(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Pt&&b(S.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&b(S.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&b(S.sheenColorMap.channel),sheenRoughnessMapUv:Vt&&b(S.sheenRoughnessMap.channel),specularMapUv:Ft&&b(S.specularMap.channel),specularColorMapUv:Tt&&b(S.specularColorMap.channel),specularIntensityMapUv:Zt&&b(S.specularIntensityMap.channel),transmissionMapUv:z&&b(S.transmissionMap.channel),thicknessMapUv:gt&&b(S.thicknessMap.channel),alphaMapUv:Dt&&b(S.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(q||Ct),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!F.attributes.uv&&(At||Dt),fog:!!U,useFog:S.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ct,skinning:R.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:ut,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:Yt,decodeVideoTexture:At&&S.map.isVideoTexture===!0&&jt.getTransfer(S.map.colorSpace)===ae,decodeVideoTextureEmissive:nt&&S.emissiveMap.isVideoTexture===!0&&jt.getTransfer(S.emissiveMap.colorSpace)===ae,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ye,flipSided:S.side===Be,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ut&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&S.extensions.multiDraw===!0||ht)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return _e.vertexUv1s=l.has(1),_e.vertexUv2s=l.has(2),_e.vertexUv3s=l.has(3),l.clear(),_e}function _(S){let M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(let w in S.defines)M.push(w),M.push(S.defines[w]);return S.isRawShaderMaterial===!1&&(T(M,S),p(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function T(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function p(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function c(S){let M=y[S.type],w;if(M){let A=kn[M];w=Ud.clone(A.uniforms)}else w=S.uniforms;return w}function v(S,M){let w;for(let A=0,R=f.length;A<R;A++){let U=f[A];if(U.cacheKey===M){w=U,++w.usedTimes;break}}return w===void 0&&(w=new Lv(i,M,S,s),f.push(w)),w}function u(S){if(--S.usedTimes===0){let M=f.indexOf(S);f[M]=f[f.length-1],f.pop(),S.destroy()}}function C(S){h.remove(S)}function E(){h.dispose()}return{getParameters:x,getProgramCacheKey:_,getUniforms:c,acquireProgram:v,releaseProgram:u,releaseShaderCache:C,programs:f,dispose:E}}function Fv(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,h){i.get(o)[a]=h}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function Bv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function ap(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function cp(){let i=[],t=0,e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(d,m,g,y,b,x){let _=i[t];return _===void 0?(_={id:d.id,object:d,geometry:m,material:g,groupOrder:y,renderOrder:d.renderOrder,z:b,group:x},i[t]=_):(_.id=d.id,_.object=d,_.geometry=m,_.material=g,_.groupOrder=y,_.renderOrder=d.renderOrder,_.z=b,_.group=x),t++,_}function a(d,m,g,y,b,x){let _=o(d,m,g,y,b,x);g.transmission>0?n.push(_):g.transparent===!0?r.push(_):e.push(_)}function h(d,m,g,y,b,x){let _=o(d,m,g,y,b,x);g.transmission>0?n.unshift(_):g.transparent===!0?r.unshift(_):e.unshift(_)}function l(d,m){e.length>1&&e.sort(d||Bv),n.length>1&&n.sort(m||ap),r.length>1&&r.sort(m||ap)}function f(){for(let d=t,m=i.length;d<m;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:h,finish:f,sort:l}}function Ov(){let i=new WeakMap;function t(n,r){let s=i.get(n),o;return s===void 0?(o=new cp,i.set(n,[o])):r>=s.length?(o=new cp,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function zv(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Wt};break;case"SpotLight":e={position:new D,direction:new D,color:new Wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Wt,groundColor:new Wt};break;case"RectAreaLight":e={color:new Wt,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function Vv(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var kv=0;function Hv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Gv(i){let t=new zv,e=Vv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);let r=new D,s=new kt,o=new kt;function a(l){let f=0,d=0,m=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let g=0,y=0,b=0,x=0,_=0,T=0,p=0,c=0,v=0,u=0,C=0;l.sort(Hv);for(let S=0,M=l.length;S<M;S++){let w=l[S],A=w.color,R=w.intensity,U=w.distance,F=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)f+=A.r*R,d+=A.g*R,m+=A.b*R;else if(w.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(w.sh.coefficients[B],R);C++}else if(w.isDirectionalLight){let B=t.get(w);if(B.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let k=w.shadow,O=e.get(w);O.shadowIntensity=k.intensity,O.shadowBias=k.bias,O.shadowNormalBias=k.normalBias,O.shadowRadius=k.radius,O.shadowMapSize=k.mapSize,n.directionalShadow[g]=O,n.directionalShadowMap[g]=F,n.directionalShadowMatrix[g]=w.shadow.matrix,T++}n.directional[g]=B,g++}else if(w.isSpotLight){let B=t.get(w);B.position.setFromMatrixPosition(w.matrixWorld),B.color.copy(A).multiplyScalar(R),B.distance=U,B.coneCos=Math.cos(w.angle),B.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),B.decay=w.decay,n.spot[b]=B;let k=w.shadow;if(w.map&&(n.spotLightMap[v]=w.map,v++,k.updateMatrices(w),w.castShadow&&u++),n.spotLightMatrix[b]=k.matrix,w.castShadow){let O=e.get(w);O.shadowIntensity=k.intensity,O.shadowBias=k.bias,O.shadowNormalBias=k.normalBias,O.shadowRadius=k.radius,O.shadowMapSize=k.mapSize,n.spotShadow[b]=O,n.spotShadowMap[b]=F,c++}b++}else if(w.isRectAreaLight){let B=t.get(w);B.color.copy(A).multiplyScalar(R),B.halfWidth.set(w.width*.5,0,0),B.halfHeight.set(0,w.height*.5,0),n.rectArea[x]=B,x++}else if(w.isPointLight){let B=t.get(w);if(B.color.copy(w.color).multiplyScalar(w.intensity),B.distance=w.distance,B.decay=w.decay,w.castShadow){let k=w.shadow,O=e.get(w);O.shadowIntensity=k.intensity,O.shadowBias=k.bias,O.shadowNormalBias=k.normalBias,O.shadowRadius=k.radius,O.shadowMapSize=k.mapSize,O.shadowCameraNear=k.camera.near,O.shadowCameraFar=k.camera.far,n.pointShadow[y]=O,n.pointShadowMap[y]=F,n.pointShadowMatrix[y]=w.shadow.matrix,p++}n.point[y]=B,y++}else if(w.isHemisphereLight){let B=t.get(w);B.skyColor.copy(w.color).multiplyScalar(R),B.groundColor.copy(w.groundColor).multiplyScalar(R),n.hemi[_]=B,_++}}x>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=bt.LTC_FLOAT_1,n.rectAreaLTC2=bt.LTC_FLOAT_2):(n.rectAreaLTC1=bt.LTC_HALF_1,n.rectAreaLTC2=bt.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=d,n.ambient[2]=m;let E=n.hash;(E.directionalLength!==g||E.pointLength!==y||E.spotLength!==b||E.rectAreaLength!==x||E.hemiLength!==_||E.numDirectionalShadows!==T||E.numPointShadows!==p||E.numSpotShadows!==c||E.numSpotMaps!==v||E.numLightProbes!==C)&&(n.directional.length=g,n.spot.length=b,n.rectArea.length=x,n.point.length=y,n.hemi.length=_,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=p,n.pointShadowMap.length=p,n.spotShadow.length=c,n.spotShadowMap.length=c,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=p,n.spotLightMatrix.length=c+v-u,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=u,n.numLightProbes=C,E.directionalLength=g,E.pointLength=y,E.spotLength=b,E.rectAreaLength=x,E.hemiLength=_,E.numDirectionalShadows=T,E.numPointShadows=p,E.numSpotShadows=c,E.numSpotMaps=v,E.numLightProbes=C,n.version=kv++)}function h(l,f){let d=0,m=0,g=0,y=0,b=0,x=f.matrixWorldInverse;for(let _=0,T=l.length;_<T;_++){let p=l[_];if(p.isDirectionalLight){let c=n.directional[d];c.direction.setFromMatrixPosition(p.matrixWorld),r.setFromMatrixPosition(p.target.matrixWorld),c.direction.sub(r),c.direction.transformDirection(x),d++}else if(p.isSpotLight){let c=n.spot[g];c.position.setFromMatrixPosition(p.matrixWorld),c.position.applyMatrix4(x),c.direction.setFromMatrixPosition(p.matrixWorld),r.setFromMatrixPosition(p.target.matrixWorld),c.direction.sub(r),c.direction.transformDirection(x),g++}else if(p.isRectAreaLight){let c=n.rectArea[y];c.position.setFromMatrixPosition(p.matrixWorld),c.position.applyMatrix4(x),o.identity(),s.copy(p.matrixWorld),s.premultiply(x),o.extractRotation(s),c.halfWidth.set(p.width*.5,0,0),c.halfHeight.set(0,p.height*.5,0),c.halfWidth.applyMatrix4(o),c.halfHeight.applyMatrix4(o),y++}else if(p.isPointLight){let c=n.point[m];c.position.setFromMatrixPosition(p.matrixWorld),c.position.applyMatrix4(x),m++}else if(p.isHemisphereLight){let c=n.hemi[b];c.direction.setFromMatrixPosition(p.matrixWorld),c.direction.transformDirection(x),b++}}}return{setup:a,setupView:h,state:n}}function lp(i){let t=new Gv(i),e=[],n=[];function r(f){l.camera=f,e.length=0,n.length=0}function s(f){e.push(f)}function o(f){n.push(f)}function a(){t.setup(e)}function h(f){t.setupView(e,f)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:h,pushLight:s,pushShadow:o}}function Wv(i){let t=new WeakMap;function e(r,s=0){let o=t.get(r),a;return o===void 0?(a=new lp(i),t.set(r,[a])):s>=o.length?(a=new lp(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Xv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qv=`uniform sampler2D shadow_pass;
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
}`;function Yv(i,t,e){let n=new Dr,r=new ot,s=new ot,o=new se,a=new Aa({depthPacking:bd}),h=new Ca,l={},f=e.maxTextureSize,d={[sn]:Be,[Be]:sn,[Ye]:Ye},m=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:Xv,fragmentShader:qv}),g=m.clone();g.defines.HORIZONTAL_PASS=1;let y=new Ce;y.setAttribute("position",new pe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new qe(y,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bh;let _=this.type;this.render=function(u,C,E){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||u.length===0)return;let S=i.getRenderTarget(),M=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),A=i.state;A.setBlending(ti),A.buffers.depth.getReversed()===!0?A.buffers.color.setClear(0,0,0,0):A.buffers.color.setClear(1,1,1,1),A.buffers.depth.setTest(!0),A.setScissorTest(!1);let R=_!==zn&&this.type===zn,U=_===zn&&this.type!==zn;for(let F=0,B=u.length;F<B;F++){let k=u[F],O=k.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);let Z=O.getFrameExtents();if(r.multiply(Z),s.copy(O.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/Z.x),r.x=s.x*Z.x,O.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/Z.y),r.y=s.y*Z.y,O.mapSize.y=s.y)),O.map===null||R===!0||U===!0){let it=this.type!==zn?{minFilter:xn,magFilter:xn}:{};O.map!==null&&O.map.dispose(),O.map=new Bn(r.x,r.y,it),O.map.texture.name=k.name+".shadowMap",O.camera.updateProjectionMatrix()}i.setRenderTarget(O.map),i.clear();let at=O.getViewportCount();for(let it=0;it<at;it++){let ut=O.getViewport(it);o.set(s.x*ut.x,s.y*ut.y,s.x*ut.z,s.y*ut.w),A.viewport(o),O.updateMatrices(k,it),n=O.getFrustum(),c(C,E,O.camera,k,this.type)}O.isPointLightShadow!==!0&&this.type===zn&&T(O,E),O.needsUpdate=!1}_=this.type,x.needsUpdate=!1,i.setRenderTarget(S,M,w)};function T(u,C){let E=t.update(b);m.defines.VSM_SAMPLES!==u.blurSamples&&(m.defines.VSM_SAMPLES=u.blurSamples,g.defines.VSM_SAMPLES=u.blurSamples,m.needsUpdate=!0,g.needsUpdate=!0),u.mapPass===null&&(u.mapPass=new Bn(r.x,r.y)),m.uniforms.shadow_pass.value=u.map.texture,m.uniforms.resolution.value=u.mapSize,m.uniforms.radius.value=u.radius,i.setRenderTarget(u.mapPass),i.clear(),i.renderBufferDirect(C,null,E,m,b,null),g.uniforms.shadow_pass.value=u.mapPass.texture,g.uniforms.resolution.value=u.mapSize,g.uniforms.radius.value=u.radius,i.setRenderTarget(u.map),i.clear(),i.renderBufferDirect(C,null,E,g,b,null)}function p(u,C,E,S){let M=null,w=E.isPointLight===!0?u.customDistanceMaterial:u.customDepthMaterial;if(w!==void 0)M=w;else if(M=E.isPointLight===!0?h:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let A=M.uuid,R=C.uuid,U=l[A];U===void 0&&(U={},l[A]=U);let F=U[R];F===void 0&&(F=M.clone(),U[R]=F,C.addEventListener("dispose",v)),M=F}if(M.visible=C.visible,M.wireframe=C.wireframe,S===zn?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:d[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,E.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let A=i.properties.get(M);A.light=E}return M}function c(u,C,E,S,M){if(u.visible===!1)return;if(u.layers.test(C.layers)&&(u.isMesh||u.isLine||u.isPoints)&&(u.castShadow||u.receiveShadow&&M===zn)&&(!u.frustumCulled||n.intersectsObject(u))){u.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,u.matrixWorld);let R=t.update(u),U=u.material;if(Array.isArray(U)){let F=R.groups;for(let B=0,k=F.length;B<k;B++){let O=F[B],Z=U[O.materialIndex];if(Z&&Z.visible){let at=p(u,Z,S,M);u.onBeforeShadow(i,u,C,E,R,at,O),i.renderBufferDirect(E,null,R,at,u,O),u.onAfterShadow(i,u,C,E,R,at,O)}}}else if(U.visible){let F=p(u,U,S,M);u.onBeforeShadow(i,u,C,E,R,F,null),i.renderBufferDirect(E,null,R,F,u,null),u.onAfterShadow(i,u,C,E,R,F,null)}}let A=u.children;for(let R=0,U=A.length;R<U;R++)c(A[R],C,E,S,M)}function v(u){u.target.removeEventListener("dispose",v);for(let E in l){let S=l[E],M=u.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}var Zv={[Ga]:Wa,[Xa]:Za,[qa]:$a,[Oi]:Ya,[Wa]:Ga,[Za]:Xa,[$a]:qa,[Ya]:Oi};function $v(i,t){function e(){let z=!1,gt=new se,vt=null,Dt=new se(0,0,0,0);return{setMask:function(dt){vt!==dt&&!z&&(i.colorMask(dt,dt,dt,dt),vt=dt)},setLocked:function(dt){z=dt},setClear:function(dt,st,Ut,Yt,_e){_e===!0&&(dt*=Yt,st*=Yt,Ut*=Yt),gt.set(dt,st,Ut,Yt),Dt.equals(gt)===!1&&(i.clearColor(dt,st,Ut,Yt),Dt.copy(gt))},reset:function(){z=!1,vt=null,Dt.set(-1,0,0,0)}}}function n(){let z=!1,gt=!1,vt=null,Dt=null,dt=null;return{setReversed:function(st){if(gt!==st){let Ut=t.get("EXT_clip_control");st?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT),gt=st;let Yt=dt;dt=null,this.setClear(Yt)}},getReversed:function(){return gt},setTest:function(st){st?Q(i.DEPTH_TEST):ct(i.DEPTH_TEST)},setMask:function(st){vt!==st&&!z&&(i.depthMask(st),vt=st)},setFunc:function(st){if(gt&&(st=Zv[st]),Dt!==st){switch(st){case Ga:i.depthFunc(i.NEVER);break;case Wa:i.depthFunc(i.ALWAYS);break;case Xa:i.depthFunc(i.LESS);break;case Oi:i.depthFunc(i.LEQUAL);break;case qa:i.depthFunc(i.EQUAL);break;case Ya:i.depthFunc(i.GEQUAL);break;case Za:i.depthFunc(i.GREATER);break;case $a:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Dt=st}},setLocked:function(st){z=st},setClear:function(st){dt!==st&&(gt&&(st=1-st),i.clearDepth(st),dt=st)},reset:function(){z=!1,vt=null,Dt=null,dt=null,gt=!1}}}function r(){let z=!1,gt=null,vt=null,Dt=null,dt=null,st=null,Ut=null,Yt=null,_e=null;return{setTest:function(re){z||(re?Q(i.STENCIL_TEST):ct(i.STENCIL_TEST))},setMask:function(re){gt!==re&&!z&&(i.stencilMask(re),gt=re)},setFunc:function(re,Gn,Un){(vt!==re||Dt!==Gn||dt!==Un)&&(i.stencilFunc(re,Gn,Un),vt=re,Dt=Gn,dt=Un)},setOp:function(re,Gn,Un){(st!==re||Ut!==Gn||Yt!==Un)&&(i.stencilOp(re,Gn,Un),st=re,Ut=Gn,Yt=Un)},setLocked:function(re){z=re},setClear:function(re){_e!==re&&(i.clearStencil(re),_e=re)},reset:function(){z=!1,gt=null,vt=null,Dt=null,dt=null,st=null,Ut=null,Yt=null,_e=null}}}let s=new e,o=new n,a=new r,h=new WeakMap,l=new WeakMap,f={},d={},m=new WeakMap,g=[],y=null,b=!1,x=null,_=null,T=null,p=null,c=null,v=null,u=null,C=new Wt(0,0,0),E=0,S=!1,M=null,w=null,A=null,R=null,U=null,F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,k=0,O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(O)[1]),B=k>=1):O.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),B=k>=2);let Z=null,at={},it=i.getParameter(i.SCISSOR_BOX),ut=i.getParameter(i.VIEWPORT),Mt=new se().fromArray(it),St=new se().fromArray(ut);function yt(z,gt,vt,Dt){let dt=new Uint8Array(4),st=i.createTexture();i.bindTexture(z,st),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ut=0;Ut<vt;Ut++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(gt,0,i.RGBA,1,1,Dt,0,i.RGBA,i.UNSIGNED_BYTE,dt):i.texImage2D(gt+Ut,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,dt);return st}let $={};$[i.TEXTURE_2D]=yt(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=yt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=yt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=yt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Q(i.DEPTH_TEST),o.setFunc(Oi),Y(!1),q(Sh),Q(i.CULL_FACE),tt(ti);function Q(z){f[z]!==!0&&(i.enable(z),f[z]=!0)}function ct(z){f[z]!==!1&&(i.disable(z),f[z]=!1)}function lt(z,gt){return d[z]!==gt?(i.bindFramebuffer(z,gt),d[z]=gt,z===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=gt),z===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=gt),!0):!1}function ht(z,gt){let vt=g,Dt=!1;if(z){vt=m.get(gt),vt===void 0&&(vt=[],m.set(gt,vt));let dt=z.textures;if(vt.length!==dt.length||vt[0]!==i.COLOR_ATTACHMENT0){for(let st=0,Ut=dt.length;st<Ut;st++)vt[st]=i.COLOR_ATTACHMENT0+st;vt.length=dt.length,Dt=!0}}else vt[0]!==i.BACK&&(vt[0]=i.BACK,Dt=!0);Dt&&i.drawBuffers(vt)}function At(z){return y!==z?(i.useProgram(z),y=z,!0):!1}let qt={[gi]:i.FUNC_ADD,[$f]:i.FUNC_SUBTRACT,[Jf]:i.FUNC_REVERSE_SUBTRACT};qt[Kf]=i.MIN,qt[jf]=i.MAX;let N={[Qf]:i.ZERO,[td]:i.ONE,[ed]:i.SRC_COLOR,[Qo]:i.SRC_ALPHA,[ad]:i.SRC_ALPHA_SATURATE,[sd]:i.DST_COLOR,[id]:i.DST_ALPHA,[nd]:i.ONE_MINUS_SRC_COLOR,[ta]:i.ONE_MINUS_SRC_ALPHA,[od]:i.ONE_MINUS_DST_COLOR,[rd]:i.ONE_MINUS_DST_ALPHA,[cd]:i.CONSTANT_COLOR,[ld]:i.ONE_MINUS_CONSTANT_COLOR,[hd]:i.CONSTANT_ALPHA,[ud]:i.ONE_MINUS_CONSTANT_ALPHA};function tt(z,gt,vt,Dt,dt,st,Ut,Yt,_e,re){if(z===ti){b===!0&&(ct(i.BLEND),b=!1);return}if(b===!1&&(Q(i.BLEND),b=!0),z!==Zf){if(z!==x||re!==S){if((_!==gi||c!==gi)&&(i.blendEquation(i.FUNC_ADD),_=gi,c=gi),re)switch(z){case Bi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Th:i.blendFunc(i.ONE,i.ONE);break;case wh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Eh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Bi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Th:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case wh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Eh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}T=null,p=null,v=null,u=null,C.set(0,0,0),E=0,x=z,S=re}return}dt=dt||gt,st=st||vt,Ut=Ut||Dt,(gt!==_||dt!==c)&&(i.blendEquationSeparate(qt[gt],qt[dt]),_=gt,c=dt),(vt!==T||Dt!==p||st!==v||Ut!==u)&&(i.blendFuncSeparate(N[vt],N[Dt],N[st],N[Ut]),T=vt,p=Dt,v=st,u=Ut),(Yt.equals(C)===!1||_e!==E)&&(i.blendColor(Yt.r,Yt.g,Yt.b,_e),C.copy(Yt),E=_e),x=z,S=!1}function J(z,gt){z.side===Ye?ct(i.CULL_FACE):Q(i.CULL_FACE);let vt=z.side===Be;gt&&(vt=!vt),Y(vt),z.blending===Bi&&z.transparent===!1?tt(ti):tt(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),s.setMask(z.colorWrite);let Dt=z.stencilWrite;a.setTest(Dt),Dt&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),nt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function Y(z){M!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),M=z)}function q(z){z!==Xf?(Q(i.CULL_FACE),z!==w&&(z===Sh?i.cullFace(i.BACK):z===qf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ct(i.CULL_FACE),w=z}function mt(z){z!==A&&(B&&i.lineWidth(z),A=z)}function nt(z,gt,vt){z?(Q(i.POLYGON_OFFSET_FILL),(R!==gt||U!==vt)&&(i.polygonOffset(gt,vt),R=gt,U=vt)):ct(i.POLYGON_OFFSET_FILL)}function rt(z){z?Q(i.SCISSOR_TEST):ct(i.SCISSOR_TEST)}function Rt(z){z===void 0&&(z=i.TEXTURE0+F-1),Z!==z&&(i.activeTexture(z),Z=z)}function Ct(z,gt,vt){vt===void 0&&(Z===null?vt=i.TEXTURE0+F-1:vt=Z);let Dt=at[vt];Dt===void 0&&(Dt={type:void 0,texture:void 0},at[vt]=Dt),(Dt.type!==z||Dt.texture!==gt)&&(Z!==vt&&(i.activeTexture(vt),Z=vt),i.bindTexture(z,gt||$[z]),Dt.type=z,Dt.texture=gt)}function L(){let z=at[Z];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function I(){try{i.compressedTexImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function V(){try{i.compressedTexImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function W(){try{i.texSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function et(){try{i.texSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function xt(){try{i.compressedTexSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function _t(){try{i.texStorage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Lt(){try{i.texStorage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Pt(){try{i.texImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ft(){try{i.texImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Et(z){Mt.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),Mt.copy(z))}function Vt(z){St.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),St.copy(z))}function Ft(z,gt){let vt=l.get(gt);vt===void 0&&(vt=new WeakMap,l.set(gt,vt));let Dt=vt.get(z);Dt===void 0&&(Dt=i.getUniformBlockIndex(gt,z.name),vt.set(z,Dt))}function Tt(z,gt){let Dt=l.get(gt).get(z);h.get(gt)!==Dt&&(i.uniformBlockBinding(gt,Dt,z.__bindingPointIndex),h.set(gt,Dt))}function Zt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},Z=null,at={},d={},m=new WeakMap,g=[],y=null,b=!1,x=null,_=null,T=null,p=null,c=null,v=null,u=null,C=new Wt(0,0,0),E=0,S=!1,M=null,w=null,A=null,R=null,U=null,Mt.set(0,0,i.canvas.width,i.canvas.height),St.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:Q,disable:ct,bindFramebuffer:lt,drawBuffers:ht,useProgram:At,setBlending:tt,setMaterial:J,setFlipSided:Y,setCullFace:q,setLineWidth:mt,setPolygonOffset:nt,setScissorTest:rt,activeTexture:Rt,bindTexture:Ct,unbindTexture:L,compressedTexImage2D:I,compressedTexImage3D:V,texImage2D:Pt,texImage3D:ft,updateUBOMapping:Ft,uniformBlockBinding:Tt,texStorage2D:_t,texStorage3D:Lt,texSubImage2D:W,texSubImage3D:et,compressedTexSubImage2D:X,compressedTexSubImage3D:xt,scissor:Et,viewport:Vt,reset:Zt}}function Jv(i,t,e,n,r,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ot,f=new WeakMap,d,m=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(L,I){return g?new OffscreenCanvas(L,I):Is("canvas")}function b(L,I,V){let W=1,et=Ct(L);if((et.width>V||et.height>V)&&(W=V/Math.max(et.width,et.height)),W<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let X=Math.floor(W*et.width),xt=Math.floor(W*et.height);d===void 0&&(d=y(X,xt));let _t=I?y(X,xt):d;return _t.width=X,_t.height=xt,_t.getContext("2d").drawImage(L,0,0,X,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+X+"x"+xt+")."),_t}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),L;return L}function x(L){return L.generateMipmaps}function _(L){i.generateMipmap(L)}function T(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function p(L,I,V,W,et=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let X=I;if(I===i.RED&&(V===i.FLOAT&&(X=i.R32F),V===i.HALF_FLOAT&&(X=i.R16F),V===i.UNSIGNED_BYTE&&(X=i.R8)),I===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(X=i.R8UI),V===i.UNSIGNED_SHORT&&(X=i.R16UI),V===i.UNSIGNED_INT&&(X=i.R32UI),V===i.BYTE&&(X=i.R8I),V===i.SHORT&&(X=i.R16I),V===i.INT&&(X=i.R32I)),I===i.RG&&(V===i.FLOAT&&(X=i.RG32F),V===i.HALF_FLOAT&&(X=i.RG16F),V===i.UNSIGNED_BYTE&&(X=i.RG8)),I===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(X=i.RG8UI),V===i.UNSIGNED_SHORT&&(X=i.RG16UI),V===i.UNSIGNED_INT&&(X=i.RG32UI),V===i.BYTE&&(X=i.RG8I),V===i.SHORT&&(X=i.RG16I),V===i.INT&&(X=i.RG32I)),I===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(X=i.RGB8UI),V===i.UNSIGNED_SHORT&&(X=i.RGB16UI),V===i.UNSIGNED_INT&&(X=i.RGB32UI),V===i.BYTE&&(X=i.RGB8I),V===i.SHORT&&(X=i.RGB16I),V===i.INT&&(X=i.RGB32I)),I===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),V===i.UNSIGNED_INT&&(X=i.RGBA32UI),V===i.BYTE&&(X=i.RGBA8I),V===i.SHORT&&(X=i.RGBA16I),V===i.INT&&(X=i.RGBA32I)),I===i.RGB&&(V===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),V===i.UNSIGNED_INT_10F_11F_11F_REV&&(X=i.R11F_G11F_B10F)),I===i.RGBA){let xt=et?Cs:jt.getTransfer(W);V===i.FLOAT&&(X=i.RGBA32F),V===i.HALF_FLOAT&&(X=i.RGBA16F),V===i.UNSIGNED_BYTE&&(X=xt===ae?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function c(L,I){let V;return L?I===null||I===Si||I===Gr?V=i.DEPTH24_STENCIL8:I===Vn?V=i.DEPTH32F_STENCIL8:I===kr&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):I===null||I===Si||I===Gr?V=i.DEPTH_COMPONENT24:I===Vn?V=i.DEPTH_COMPONENT32F:I===kr&&(V=i.DEPTH_COMPONENT16),V}function v(L,I){return x(L)===!0||L.isFramebufferTexture&&L.minFilter!==xn&&L.minFilter!==An?Math.log2(Math.max(I.width,I.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?I.mipmaps.length:1}function u(L){let I=L.target;I.removeEventListener("dispose",u),E(I),I.isVideoTexture&&f.delete(I)}function C(L){let I=L.target;I.removeEventListener("dispose",C),M(I)}function E(L){let I=n.get(L);if(I.__webglInit===void 0)return;let V=L.source,W=m.get(V);if(W){let et=W[I.__cacheKey];et.usedTimes--,et.usedTimes===0&&S(L),Object.keys(W).length===0&&m.delete(V)}n.remove(L)}function S(L){let I=n.get(L);i.deleteTexture(I.__webglTexture);let V=L.source,W=m.get(V);delete W[I.__cacheKey],o.memory.textures--}function M(L){let I=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(I.__webglFramebuffer[W]))for(let et=0;et<I.__webglFramebuffer[W].length;et++)i.deleteFramebuffer(I.__webglFramebuffer[W][et]);else i.deleteFramebuffer(I.__webglFramebuffer[W]);I.__webglDepthbuffer&&i.deleteRenderbuffer(I.__webglDepthbuffer[W])}else{if(Array.isArray(I.__webglFramebuffer))for(let W=0;W<I.__webglFramebuffer.length;W++)i.deleteFramebuffer(I.__webglFramebuffer[W]);else i.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&i.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&i.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let W=0;W<I.__webglColorRenderbuffer.length;W++)I.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(I.__webglColorRenderbuffer[W]);I.__webglDepthRenderbuffer&&i.deleteRenderbuffer(I.__webglDepthRenderbuffer)}let V=L.textures;for(let W=0,et=V.length;W<et;W++){let X=n.get(V[W]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),o.memory.textures--),n.remove(V[W])}n.remove(L)}let w=0;function A(){w=0}function R(){let L=w;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),w+=1,L}function U(L){let I=[];return I.push(L.wrapS),I.push(L.wrapT),I.push(L.wrapR||0),I.push(L.magFilter),I.push(L.minFilter),I.push(L.anisotropy),I.push(L.internalFormat),I.push(L.format),I.push(L.type),I.push(L.generateMipmaps),I.push(L.premultiplyAlpha),I.push(L.flipY),I.push(L.unpackAlignment),I.push(L.colorSpace),I.join()}function F(L,I){let V=n.get(L);if(L.isVideoTexture&&rt(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&V.__version!==L.version){let W=L.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(V,L,I);return}}else L.isExternalTexture&&(V.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+I)}function B(L,I){let V=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&V.__version!==L.version){$(V,L,I);return}e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+I)}function k(L,I){let V=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&V.__version!==L.version){$(V,L,I);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+I)}function O(L,I){let V=n.get(L);if(L.version>0&&V.__version!==L.version){Q(V,L,I);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+I)}let Z={[ea]:i.REPEAT,[di]:i.CLAMP_TO_EDGE,[na]:i.MIRRORED_REPEAT},at={[xn]:i.NEAREST,[Md]:i.NEAREST_MIPMAP_NEAREST,[Ks]:i.NEAREST_MIPMAP_LINEAR,[An]:i.LINEAR,[Qa]:i.LINEAR_MIPMAP_NEAREST,[Mi]:i.LINEAR_MIPMAP_LINEAR},it={[wd]:i.NEVER,[Pd]:i.ALWAYS,[Ed]:i.LESS,[Fh]:i.LEQUAL,[Ad]:i.EQUAL,[Id]:i.GEQUAL,[Cd]:i.GREATER,[Rd]:i.NOTEQUAL};function ut(L,I){if(I.type===Vn&&t.has("OES_texture_float_linear")===!1&&(I.magFilter===An||I.magFilter===Qa||I.magFilter===Ks||I.magFilter===Mi||I.minFilter===An||I.minFilter===Qa||I.minFilter===Ks||I.minFilter===Mi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,Z[I.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,Z[I.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,Z[I.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,at[I.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,at[I.minFilter]),I.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,it[I.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(I.magFilter===xn||I.minFilter!==Ks&&I.minFilter!==Mi||I.type===Vn&&t.has("OES_texture_float_linear")===!1)return;if(I.anisotropy>1||n.get(I).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(L,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(I.anisotropy,r.getMaxAnisotropy())),n.get(I).__currentAnisotropy=I.anisotropy}}}function Mt(L,I){let V=!1;L.__webglInit===void 0&&(L.__webglInit=!0,I.addEventListener("dispose",u));let W=I.source,et=m.get(W);et===void 0&&(et={},m.set(W,et));let X=U(I);if(X!==L.__cacheKey){et[X]===void 0&&(et[X]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,V=!0),et[X].usedTimes++;let xt=et[L.__cacheKey];xt!==void 0&&(et[L.__cacheKey].usedTimes--,xt.usedTimes===0&&S(I)),L.__cacheKey=X,L.__webglTexture=et[X].texture}return V}function St(L,I,V){return Math.floor(Math.floor(L/V)/I)}function yt(L,I,V,W){let X=L.updateRanges;if(X.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,I.width,I.height,V,W,I.data);else{X.sort((ft,Et)=>ft.start-Et.start);let xt=0;for(let ft=1;ft<X.length;ft++){let Et=X[xt],Vt=X[ft],Ft=Et.start+Et.count,Tt=St(Vt.start,I.width,4),Zt=St(Et.start,I.width,4);Vt.start<=Ft+1&&Tt===Zt&&St(Vt.start+Vt.count-1,I.width,4)===Tt?Et.count=Math.max(Et.count,Vt.start+Vt.count-Et.start):(++xt,X[xt]=Vt)}X.length=xt+1;let _t=i.getParameter(i.UNPACK_ROW_LENGTH),Lt=i.getParameter(i.UNPACK_SKIP_PIXELS),Pt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,I.width);for(let ft=0,Et=X.length;ft<Et;ft++){let Vt=X[ft],Ft=Math.floor(Vt.start/4),Tt=Math.ceil(Vt.count/4),Zt=Ft%I.width,z=Math.floor(Ft/I.width),gt=Tt,vt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Zt),i.pixelStorei(i.UNPACK_SKIP_ROWS,z),e.texSubImage2D(i.TEXTURE_2D,0,Zt,z,gt,vt,V,W,I.data)}L.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,_t),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Lt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Pt)}}function $(L,I,V){let W=i.TEXTURE_2D;(I.isDataArrayTexture||I.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),I.isData3DTexture&&(W=i.TEXTURE_3D);let et=Mt(L,I),X=I.source;e.bindTexture(W,L.__webglTexture,i.TEXTURE0+V);let xt=n.get(X);if(X.version!==xt.__version||et===!0){e.activeTexture(i.TEXTURE0+V);let _t=jt.getPrimaries(jt.workingColorSpace),Lt=I.colorSpace===ni?null:jt.getPrimaries(I.colorSpace),Pt=I.colorSpace===ni||_t===Lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,I.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,I.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);let ft=b(I.image,!1,r.maxTextureSize);ft=Rt(I,ft);let Et=s.convert(I.format,I.colorSpace),Vt=s.convert(I.type),Ft=p(I.internalFormat,Et,Vt,I.colorSpace,I.isVideoTexture);ut(W,I);let Tt,Zt=I.mipmaps,z=I.isVideoTexture!==!0,gt=xt.__version===void 0||et===!0,vt=X.dataReady,Dt=v(I,ft);if(I.isDepthTexture)Ft=c(I.format===Wr,I.type),gt&&(z?e.texStorage2D(i.TEXTURE_2D,1,Ft,ft.width,ft.height):e.texImage2D(i.TEXTURE_2D,0,Ft,ft.width,ft.height,0,Et,Vt,null));else if(I.isDataTexture)if(Zt.length>0){z&&gt&&e.texStorage2D(i.TEXTURE_2D,Dt,Ft,Zt[0].width,Zt[0].height);for(let dt=0,st=Zt.length;dt<st;dt++)Tt=Zt[dt],z?vt&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,Tt.width,Tt.height,Et,Vt,Tt.data):e.texImage2D(i.TEXTURE_2D,dt,Ft,Tt.width,Tt.height,0,Et,Vt,Tt.data);I.generateMipmaps=!1}else z?(gt&&e.texStorage2D(i.TEXTURE_2D,Dt,Ft,ft.width,ft.height),vt&&yt(I,ft,Et,Vt)):e.texImage2D(i.TEXTURE_2D,0,Ft,ft.width,ft.height,0,Et,Vt,ft.data);else if(I.isCompressedTexture)if(I.isCompressedArrayTexture){z&&gt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Dt,Ft,Zt[0].width,Zt[0].height,ft.depth);for(let dt=0,st=Zt.length;dt<st;dt++)if(Tt=Zt[dt],I.format!==yn)if(Et!==null)if(z){if(vt)if(I.layerUpdates.size>0){let Ut=Wh(Tt.width,Tt.height,I.format,I.type);for(let Yt of I.layerUpdates){let _e=Tt.data.subarray(Yt*Ut/Tt.data.BYTES_PER_ELEMENT,(Yt+1)*Ut/Tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,Yt,Tt.width,Tt.height,1,Et,_e)}I.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,0,Tt.width,Tt.height,ft.depth,Et,Tt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,dt,Ft,Tt.width,Tt.height,ft.depth,0,Tt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?vt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,dt,0,0,0,Tt.width,Tt.height,ft.depth,Et,Vt,Tt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,dt,Ft,Tt.width,Tt.height,ft.depth,0,Et,Vt,Tt.data)}else{z&&gt&&e.texStorage2D(i.TEXTURE_2D,Dt,Ft,Zt[0].width,Zt[0].height);for(let dt=0,st=Zt.length;dt<st;dt++)Tt=Zt[dt],I.format!==yn?Et!==null?z?vt&&e.compressedTexSubImage2D(i.TEXTURE_2D,dt,0,0,Tt.width,Tt.height,Et,Tt.data):e.compressedTexImage2D(i.TEXTURE_2D,dt,Ft,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?vt&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,Tt.width,Tt.height,Et,Vt,Tt.data):e.texImage2D(i.TEXTURE_2D,dt,Ft,Tt.width,Tt.height,0,Et,Vt,Tt.data)}else if(I.isDataArrayTexture)if(z){if(gt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Dt,Ft,ft.width,ft.height,ft.depth),vt)if(I.layerUpdates.size>0){let dt=Wh(ft.width,ft.height,I.format,I.type);for(let st of I.layerUpdates){let Ut=ft.data.subarray(st*dt/ft.data.BYTES_PER_ELEMENT,(st+1)*dt/ft.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,st,ft.width,ft.height,1,Et,Vt,Ut)}I.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ft.width,ft.height,ft.depth,Et,Vt,ft.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ft,ft.width,ft.height,ft.depth,0,Et,Vt,ft.data);else if(I.isData3DTexture)z?(gt&&e.texStorage3D(i.TEXTURE_3D,Dt,Ft,ft.width,ft.height,ft.depth),vt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ft.width,ft.height,ft.depth,Et,Vt,ft.data)):e.texImage3D(i.TEXTURE_3D,0,Ft,ft.width,ft.height,ft.depth,0,Et,Vt,ft.data);else if(I.isFramebufferTexture){if(gt)if(z)e.texStorage2D(i.TEXTURE_2D,Dt,Ft,ft.width,ft.height);else{let dt=ft.width,st=ft.height;for(let Ut=0;Ut<Dt;Ut++)e.texImage2D(i.TEXTURE_2D,Ut,Ft,dt,st,0,Et,Vt,null),dt>>=1,st>>=1}}else if(Zt.length>0){if(z&&gt){let dt=Ct(Zt[0]);e.texStorage2D(i.TEXTURE_2D,Dt,Ft,dt.width,dt.height)}for(let dt=0,st=Zt.length;dt<st;dt++)Tt=Zt[dt],z?vt&&e.texSubImage2D(i.TEXTURE_2D,dt,0,0,Et,Vt,Tt):e.texImage2D(i.TEXTURE_2D,dt,Ft,Et,Vt,Tt);I.generateMipmaps=!1}else if(z){if(gt){let dt=Ct(ft);e.texStorage2D(i.TEXTURE_2D,Dt,Ft,dt.width,dt.height)}vt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Et,Vt,ft)}else e.texImage2D(i.TEXTURE_2D,0,Ft,Et,Vt,ft);x(I)&&_(W),xt.__version=X.version,I.onUpdate&&I.onUpdate(I)}L.__version=I.version}function Q(L,I,V){if(I.image.length!==6)return;let W=Mt(L,I),et=I.source;e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+V);let X=n.get(et);if(et.version!==X.__version||W===!0){e.activeTexture(i.TEXTURE0+V);let xt=jt.getPrimaries(jt.workingColorSpace),_t=I.colorSpace===ni?null:jt.getPrimaries(I.colorSpace),Lt=I.colorSpace===ni||xt===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,I.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,I.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);let Pt=I.isCompressedTexture||I.image[0].isCompressedTexture,ft=I.image[0]&&I.image[0].isDataTexture,Et=[];for(let st=0;st<6;st++)!Pt&&!ft?Et[st]=b(I.image[st],!0,r.maxCubemapSize):Et[st]=ft?I.image[st].image:I.image[st],Et[st]=Rt(I,Et[st]);let Vt=Et[0],Ft=s.convert(I.format,I.colorSpace),Tt=s.convert(I.type),Zt=p(I.internalFormat,Ft,Tt,I.colorSpace),z=I.isVideoTexture!==!0,gt=X.__version===void 0||W===!0,vt=et.dataReady,Dt=v(I,Vt);ut(i.TEXTURE_CUBE_MAP,I);let dt;if(Pt){z&&gt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Dt,Zt,Vt.width,Vt.height);for(let st=0;st<6;st++){dt=Et[st].mipmaps;for(let Ut=0;Ut<dt.length;Ut++){let Yt=dt[Ut];I.format!==yn?Ft!==null?z?vt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ut,0,0,Yt.width,Yt.height,Ft,Yt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ut,Zt,Yt.width,Yt.height,0,Yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ut,0,0,Yt.width,Yt.height,Ft,Tt,Yt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ut,Zt,Yt.width,Yt.height,0,Ft,Tt,Yt.data)}}}else{if(dt=I.mipmaps,z&&gt){dt.length>0&&Dt++;let st=Ct(Et[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Dt,Zt,st.width,st.height)}for(let st=0;st<6;st++)if(ft){z?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Et[st].width,Et[st].height,Ft,Tt,Et[st].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Zt,Et[st].width,Et[st].height,0,Ft,Tt,Et[st].data);for(let Ut=0;Ut<dt.length;Ut++){let _e=dt[Ut].image[st].image;z?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ut+1,0,0,_e.width,_e.height,Ft,Tt,_e.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ut+1,Zt,_e.width,_e.height,0,Ft,Tt,_e.data)}}else{z?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Ft,Tt,Et[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Zt,Ft,Tt,Et[st]);for(let Ut=0;Ut<dt.length;Ut++){let Yt=dt[Ut];z?vt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ut+1,0,0,Ft,Tt,Yt.image[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Ut+1,Zt,Ft,Tt,Yt.image[st])}}}x(I)&&_(i.TEXTURE_CUBE_MAP),X.__version=et.version,I.onUpdate&&I.onUpdate(I)}L.__version=I.version}function ct(L,I,V,W,et,X){let xt=s.convert(V.format,V.colorSpace),_t=s.convert(V.type),Lt=p(V.internalFormat,xt,_t,V.colorSpace),Pt=n.get(I),ft=n.get(V);if(ft.__renderTarget=I,!Pt.__hasExternalTextures){let Et=Math.max(1,I.width>>X),Vt=Math.max(1,I.height>>X);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,X,Lt,Et,Vt,I.depth,0,xt,_t,null):e.texImage2D(et,X,Lt,Et,Vt,0,xt,_t,null)}e.bindFramebuffer(i.FRAMEBUFFER,L),nt(I)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,et,ft.__webglTexture,0,mt(I)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,et,ft.__webglTexture,X),e.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(L,I,V){if(i.bindRenderbuffer(i.RENDERBUFFER,L),I.depthBuffer){let W=I.depthTexture,et=W&&W.isDepthTexture?W.type:null,X=c(I.stencilBuffer,et),xt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=mt(I);nt(I)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_t,X,I.width,I.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,_t,X,I.width,I.height):i.renderbufferStorage(i.RENDERBUFFER,X,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xt,i.RENDERBUFFER,L)}else{let W=I.textures;for(let et=0;et<W.length;et++){let X=W[et],xt=s.convert(X.format,X.colorSpace),_t=s.convert(X.type),Lt=p(X.internalFormat,xt,_t,X.colorSpace),Pt=mt(I);V&&nt(I)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Pt,Lt,I.width,I.height):nt(I)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Pt,Lt,I.width,I.height):i.renderbufferStorage(i.RENDERBUFFER,Lt,I.width,I.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ht(L,I){if(I&&I.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,L),!(I.depthTexture&&I.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let W=n.get(I.depthTexture);W.__renderTarget=I,(!W.__webglTexture||I.depthTexture.image.width!==I.width||I.depthTexture.image.height!==I.height)&&(I.depthTexture.image.width=I.width,I.depthTexture.image.height=I.height,I.depthTexture.needsUpdate=!0),F(I.depthTexture,0);let et=W.__webglTexture,X=mt(I);if(I.depthTexture.format===wr)nt(I)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0);else if(I.depthTexture.format===Wr)nt(I)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function At(L){let I=n.get(L),V=L.isWebGLCubeRenderTarget===!0;if(I.__boundDepthTexture!==L.depthTexture){let W=L.depthTexture;if(I.__depthDisposeCallback&&I.__depthDisposeCallback(),W){let et=()=>{delete I.__boundDepthTexture,delete I.__depthDisposeCallback,W.removeEventListener("dispose",et)};W.addEventListener("dispose",et),I.__depthDisposeCallback=et}I.__boundDepthTexture=W}if(L.depthTexture&&!I.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");let W=L.texture.mipmaps;W&&W.length>0?ht(I.__webglFramebuffer[0],L):ht(I.__webglFramebuffer,L)}else if(V){I.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(i.FRAMEBUFFER,I.__webglFramebuffer[W]),I.__webglDepthbuffer[W]===void 0)I.__webglDepthbuffer[W]=i.createRenderbuffer(),lt(I.__webglDepthbuffer[W],L,!1);else{let et=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=I.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,X)}}else{let W=L.texture.mipmaps;if(W&&W.length>0?e.bindFramebuffer(i.FRAMEBUFFER,I.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,I.__webglFramebuffer),I.__webglDepthbuffer===void 0)I.__webglDepthbuffer=i.createRenderbuffer(),lt(I.__webglDepthbuffer,L,!1);else{let et=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=I.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,X)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function qt(L,I,V){let W=n.get(L);I!==void 0&&ct(W.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&At(L)}function N(L){let I=L.texture,V=n.get(L),W=n.get(I);L.addEventListener("dispose",C);let et=L.textures,X=L.isWebGLCubeRenderTarget===!0,xt=et.length>1;if(xt||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=I.version,o.memory.textures++),X){V.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(I.mipmaps&&I.mipmaps.length>0){V.__webglFramebuffer[_t]=[];for(let Lt=0;Lt<I.mipmaps.length;Lt++)V.__webglFramebuffer[_t][Lt]=i.createFramebuffer()}else V.__webglFramebuffer[_t]=i.createFramebuffer()}else{if(I.mipmaps&&I.mipmaps.length>0){V.__webglFramebuffer=[];for(let _t=0;_t<I.mipmaps.length;_t++)V.__webglFramebuffer[_t]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(xt)for(let _t=0,Lt=et.length;_t<Lt;_t++){let Pt=n.get(et[_t]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=i.createTexture(),o.memory.textures++)}if(L.samples>0&&nt(L)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let _t=0;_t<et.length;_t++){let Lt=et[_t];V.__webglColorRenderbuffer[_t]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[_t]);let Pt=s.convert(Lt.format,Lt.colorSpace),ft=s.convert(Lt.type),Et=p(Lt.internalFormat,Pt,ft,Lt.colorSpace,L.isXRRenderTarget===!0),Vt=mt(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt,Et,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,V.__webglColorRenderbuffer[_t])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),lt(V.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),ut(i.TEXTURE_CUBE_MAP,I);for(let _t=0;_t<6;_t++)if(I.mipmaps&&I.mipmaps.length>0)for(let Lt=0;Lt<I.mipmaps.length;Lt++)ct(V.__webglFramebuffer[_t][Lt],L,I,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Lt);else ct(V.__webglFramebuffer[_t],L,I,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);x(I)&&_(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let _t=0,Lt=et.length;_t<Lt;_t++){let Pt=et[_t],ft=n.get(Pt),Et=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Et=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Et,ft.__webglTexture),ut(Et,Pt),ct(V.__webglFramebuffer,L,Pt,i.COLOR_ATTACHMENT0+_t,Et,0),x(Pt)&&_(Et)}e.unbindTexture()}else{let _t=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(_t=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(_t,W.__webglTexture),ut(_t,I),I.mipmaps&&I.mipmaps.length>0)for(let Lt=0;Lt<I.mipmaps.length;Lt++)ct(V.__webglFramebuffer[Lt],L,I,i.COLOR_ATTACHMENT0,_t,Lt);else ct(V.__webglFramebuffer,L,I,i.COLOR_ATTACHMENT0,_t,0);x(I)&&_(_t),e.unbindTexture()}L.depthBuffer&&At(L)}function tt(L){let I=L.textures;for(let V=0,W=I.length;V<W;V++){let et=I[V];if(x(et)){let X=T(L),xt=n.get(et).__webglTexture;e.bindTexture(X,xt),_(X),e.unbindTexture()}}}let J=[],Y=[];function q(L){if(L.samples>0){if(nt(L)===!1){let I=L.textures,V=L.width,W=L.height,et=i.COLOR_BUFFER_BIT,X=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=n.get(L),_t=I.length>1;if(_t)for(let Pt=0;Pt<I.length;Pt++)e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer);let Lt=L.texture.mipmaps;Lt&&Lt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let Pt=0;Pt<I.length;Pt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),_t){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xt.__webglColorRenderbuffer[Pt]);let ft=n.get(I[Pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ft,0)}i.blitFramebuffer(0,0,V,W,0,0,V,W,et,i.NEAREST),h===!0&&(J.length=0,Y.length=0,J.push(i.COLOR_ATTACHMENT0+Pt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(J.push(X),Y.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Y)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,J))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_t)for(let Pt=0;Pt<I.length;Pt++){e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,xt.__webglColorRenderbuffer[Pt]);let ft=n.get(I[Pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,ft,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&h){let I=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[I])}}}function mt(L){return Math.min(r.maxSamples,L.samples)}function nt(L){let I=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&I.__useRenderToTexture!==!1}function rt(L){let I=o.render.frame;f.get(L)!==I&&(f.set(L,I),L.update())}function Rt(L,I){let V=L.colorSpace,W=L.format,et=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||V!==zi&&V!==ni&&(jt.getTransfer(V)===ae?(W!==yn||et!==Rn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),I}function Ct(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(l.width=L.naturalWidth||L.width,l.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(l.width=L.displayWidth,l.height=L.displayHeight):(l.width=L.width,l.height=L.height),l}this.allocateTextureUnit=R,this.resetTextureUnits=A,this.setTexture2D=F,this.setTexture2DArray=B,this.setTexture3D=k,this.setTextureCube=O,this.rebindTextures=qt,this.setupRenderTarget=N,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=q,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=ct,this.useMultisampledRTT=nt}function Kv(i,t){function e(n,r=ni){let s,o=jt.getTransfer(r);if(n===Rn)return i.UNSIGNED_BYTE;if(n===ec)return i.UNSIGNED_SHORT_4_4_4_4;if(n===nc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ih)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ph)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ch)return i.BYTE;if(n===Rh)return i.SHORT;if(n===kr)return i.UNSIGNED_SHORT;if(n===tc)return i.INT;if(n===Si)return i.UNSIGNED_INT;if(n===Vn)return i.FLOAT;if(n===Hr)return i.HALF_FLOAT;if(n===Dh)return i.ALPHA;if(n===Lh)return i.RGB;if(n===yn)return i.RGBA;if(n===wr)return i.DEPTH_COMPONENT;if(n===Wr)return i.DEPTH_STENCIL;if(n===Nh)return i.RED;if(n===ic)return i.RED_INTEGER;if(n===Uh)return i.RG;if(n===rc)return i.RG_INTEGER;if(n===sc)return i.RGBA_INTEGER;if(n===js||n===Qs||n===to||n===eo)if(o===ae)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===js)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Qs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===to)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===eo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===js)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Qs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===to)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===eo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===oc||n===ac||n===cc||n===lc)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===oc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ac)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===cc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===lc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===hc||n===uc||n===fc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===hc||n===uc)return o===ae?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===fc)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===dc||n===pc||n===mc||n===gc||n===_c||n===xc||n===yc||n===vc||n===Mc||n===Sc||n===bc||n===Tc||n===wc||n===Ec)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===dc)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===pc)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===mc)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===gc)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===_c)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===xc)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===yc)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===vc)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Mc)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Sc)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===bc)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Tc)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===wc)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ec)return o===ae?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ac||n===Cc||n===Rc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Ac)return o===ae?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Cc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Rc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ic||n===Pc||n===Dc||n===Lc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ic)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Pc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Dc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Lc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Gr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var jv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qv=`
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

}`,iu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Os(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Cn({vertexShader:jv,fragmentShader:Qv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new qe(new Br(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ru=class extends Fn{constructor(t,e){super();let n=this,r=null,s=1,o=null,a="local-floor",h=1,l=null,f=null,d=null,m=null,g=null,y=null,b=typeof XRWebGLBinding<"u",x=new iu,_={},T=e.getContextAttributes(),p=null,c=null,v=[],u=[],C=new ot,E=null,S=new Xe;S.viewport=new se;let M=new Xe;M.viewport=new se;let w=[S,M],A=new ka,R=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let Q=v[$];return Q===void 0&&(Q=new Pr,v[$]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function($){let Q=v[$];return Q===void 0&&(Q=new Pr,v[$]=Q),Q.getGripSpace()},this.getHand=function($){let Q=v[$];return Q===void 0&&(Q=new Pr,v[$]=Q),Q.getHandSpace()};function F($){let Q=u.indexOf($.inputSource);if(Q===-1)return;let ct=v[Q];ct!==void 0&&(ct.update($.inputSource,$.frame,l||o),ct.dispatchEvent({type:$.type,data:$.inputSource}))}function B(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",k);for(let $=0;$<v.length;$++){let Q=u[$];Q!==null&&(u[$]=null,v[$].disconnect(Q))}R=null,U=null,x.reset();for(let $ in _)delete _[$];t.setRenderTarget(p),g=null,m=null,d=null,r=null,c=null,yt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return m!==null?m:g},this.getBinding=function(){return d===null&&b&&(d=new XRWebGLBinding(r,e)),d},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",B),r.addEventListener("inputsourceschange",k),T.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(C),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let ct=null,lt=null,ht=null;T.depth&&(ht=T.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ct=T.stencil?Wr:wr,lt=T.stencil?Gr:Si);let At={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:s};d=this.getBinding(),m=d.createProjectionLayer(At),r.updateRenderState({layers:[m]}),t.setPixelRatio(1),t.setSize(m.textureWidth,m.textureHeight,!1),c=new Bn(m.textureWidth,m.textureHeight,{format:yn,type:Rn,depthTexture:new Bs(m.textureWidth,m.textureHeight,lt,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{let ct={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,e,ct),r.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),c=new Bn(g.framebufferWidth,g.framebufferHeight,{format:yn,type:Rn,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}c.isXRRenderTarget=!0,this.setFoveation(h),l=null,o=await r.requestReferenceSpace(a),yt.setContext(r),yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function k($){for(let Q=0;Q<$.removed.length;Q++){let ct=$.removed[Q],lt=u.indexOf(ct);lt>=0&&(u[lt]=null,v[lt].disconnect(ct))}for(let Q=0;Q<$.added.length;Q++){let ct=$.added[Q],lt=u.indexOf(ct);if(lt===-1){for(let At=0;At<v.length;At++)if(At>=u.length){u.push(ct),lt=At;break}else if(u[At]===null){u[At]=ct,lt=At;break}if(lt===-1)break}let ht=v[lt];ht&&ht.connect(ct)}}let O=new D,Z=new D;function at($,Q,ct){O.setFromMatrixPosition(Q.matrixWorld),Z.setFromMatrixPosition(ct.matrixWorld);let lt=O.distanceTo(Z),ht=Q.projectionMatrix.elements,At=ct.projectionMatrix.elements,qt=ht[14]/(ht[10]-1),N=ht[14]/(ht[10]+1),tt=(ht[9]+1)/ht[5],J=(ht[9]-1)/ht[5],Y=(ht[8]-1)/ht[0],q=(At[8]+1)/At[0],mt=qt*Y,nt=qt*q,rt=lt/(-Y+q),Rt=rt*-Y;if(Q.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Rt),$.translateZ(rt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),ht[10]===-1)$.projectionMatrix.copy(Q.projectionMatrix),$.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let Ct=qt+rt,L=N+rt,I=mt-Rt,V=nt+(lt-Rt),W=tt*N/L*Ct,et=J*N/L*Ct;$.projectionMatrix.makePerspective(I,V,W,et,Ct,L),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function it($,Q){Q===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(Q.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let Q=$.near,ct=$.far;x.texture!==null&&(x.depthNear>0&&(Q=x.depthNear),x.depthFar>0&&(ct=x.depthFar)),A.near=M.near=S.near=Q,A.far=M.far=S.far=ct,(R!==A.near||U!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),R=A.near,U=A.far),A.layers.mask=$.layers.mask|6,S.layers.mask=A.layers.mask&3,M.layers.mask=A.layers.mask&5;let lt=$.parent,ht=A.cameras;it(A,lt);for(let At=0;At<ht.length;At++)it(ht[At],lt);ht.length===2?at(A,S,M):A.projectionMatrix.copy(S.projectionMatrix),ut($,A,lt)};function ut($,Q,ct){ct===null?$.matrix.copy(Q.matrixWorld):($.matrix.copy(ct.matrixWorld),$.matrix.invert(),$.matrix.multiply(Q.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(Q.projectionMatrix),$.projectionMatrixInverse.copy(Q.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Er*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(m===null&&g===null))return h},this.setFoveation=function($){h=$,m!==null&&(m.fixedFoveation=$),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=$)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(A)},this.getCameraTexture=function($){return _[$]};let Mt=null;function St($,Q){if(f=Q.getViewerPose(l||o),y=Q,f!==null){let ct=f.views;g!==null&&(t.setRenderTargetFramebuffer(c,g.framebuffer),t.setRenderTarget(c));let lt=!1;ct.length!==A.cameras.length&&(A.cameras.length=0,lt=!0);for(let N=0;N<ct.length;N++){let tt=ct[N],J=null;if(g!==null)J=g.getViewport(tt);else{let q=d.getViewSubImage(m,tt);J=q.viewport,N===0&&(t.setRenderTargetTextures(c,q.colorTexture,q.depthStencilTexture),t.setRenderTarget(c))}let Y=w[N];Y===void 0&&(Y=new Xe,Y.layers.enable(N),Y.viewport=new se,w[N]=Y),Y.matrix.fromArray(tt.transform.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.projectionMatrix.fromArray(tt.projectionMatrix),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert(),Y.viewport.set(J.x,J.y,J.width,J.height),N===0&&(A.matrix.copy(Y.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),lt===!0&&A.cameras.push(Y)}let ht=r.enabledFeatures;if(ht&&ht.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&b){d=n.getBinding();let N=d.getDepthInformation(ct[0]);N&&N.isValid&&N.texture&&x.init(N,r.renderState)}if(ht&&ht.includes("camera-access")&&b){t.state.unbindTexture(),d=n.getBinding();for(let N=0;N<ct.length;N++){let tt=ct[N].camera;if(tt){let J=_[tt];J||(J=new Os,_[tt]=J);let Y=d.getCameraImage(tt);J.sourceTexture=Y}}}}for(let ct=0;ct<v.length;ct++){let lt=u[ct],ht=v[ct];lt!==null&&ht!==void 0&&ht.update(lt,Q,l||o)}Mt&&Mt($,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),y=null}let yt=new hp;yt.setAnimationLoop(St),this.setAnimationLoop=function($){Mt=$},this.dispose=function(){}}},Ji=new cn,tM=new kt;function eM(i,t){function e(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}function n(x,_){_.color.getRGB(x.fogColor.value,Vh(i)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function r(x,_,T,p,c){_.isMeshBasicMaterial||_.isMeshLambertMaterial?s(x,_):_.isMeshToonMaterial?(s(x,_),d(x,_)):_.isMeshPhongMaterial?(s(x,_),f(x,_)):_.isMeshStandardMaterial?(s(x,_),m(x,_),_.isMeshPhysicalMaterial&&g(x,_,c)):_.isMeshMatcapMaterial?(s(x,_),y(x,_)):_.isMeshDepthMaterial?s(x,_):_.isMeshDistanceMaterial?(s(x,_),b(x,_)):_.isMeshNormalMaterial?s(x,_):_.isLineBasicMaterial?(o(x,_),_.isLineDashedMaterial&&a(x,_)):_.isPointsMaterial?h(x,_,T,p):_.isSpriteMaterial?l(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function s(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,e(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,e(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,e(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===Be&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,e(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===Be&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,e(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,e(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,e(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);let T=t.get(_),p=T.envMap,c=T.envMapRotation;p&&(x.envMap.value=p,Ji.copy(c),Ji.x*=-1,Ji.y*=-1,Ji.z*=-1,p.isCubeTexture&&p.isRenderTargetTexture===!1&&(Ji.y*=-1,Ji.z*=-1),x.envMapRotation.value.setFromMatrix4(tM.makeRotationFromEuler(Ji)),x.flipEnvMap.value=p.isCubeTexture&&p.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap&&(x.lightMap.value=_.lightMap,x.lightMapIntensity.value=_.lightMapIntensity,e(_.lightMap,x.lightMapTransform)),_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,e(_.aoMap,x.aoMapTransform))}function o(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,e(_.map,x.mapTransform))}function a(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function h(x,_,T,p){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*T,x.scale.value=p*.5,_.map&&(x.map.value=_.map,e(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,e(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function l(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,e(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,e(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function f(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}function d(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}function m(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,e(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,e(_.roughnessMap,x.roughnessMapTransform)),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function g(x,_,T){x.ior.value=_.ior,_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,e(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,e(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,e(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,e(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,e(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Be&&x.clearcoatNormalScale.value.negate())),_.dispersion>0&&(x.dispersion.value=_.dispersion),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,e(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,e(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=T.texture,x.transmissionSamplerSize.value.set(T.width,T.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,e(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,e(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,e(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,e(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,e(_.specularIntensityMap,x.specularIntensityMapTransform))}function y(x,_){_.matcap&&(x.matcap.value=_.matcap)}function b(x,_){let T=t.get(_).light;x.referencePosition.value.setFromMatrixPosition(T.matrixWorld),x.nearDistance.value=T.shadow.camera.near,x.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function nM(i,t,e,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function h(T,p){let c=p.program;n.uniformBlockBinding(T,c)}function l(T,p){let c=r[T.id];c===void 0&&(y(T),c=f(T),r[T.id]=c,T.addEventListener("dispose",x));let v=p.program;n.updateUBOMapping(T,v);let u=t.render.frame;s[T.id]!==u&&(m(T),s[T.id]=u)}function f(T){let p=d();T.__bindingPointIndex=p;let c=i.createBuffer(),v=T.__size,u=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,c),i.bufferData(i.UNIFORM_BUFFER,v,u),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,p,c),c}function d(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(T){let p=r[T.id],c=T.uniforms,v=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,p);for(let u=0,C=c.length;u<C;u++){let E=Array.isArray(c[u])?c[u]:[c[u]];for(let S=0,M=E.length;S<M;S++){let w=E[S];if(g(w,u,S,v)===!0){let A=w.__offset,R=Array.isArray(w.value)?w.value:[w.value],U=0;for(let F=0;F<R.length;F++){let B=R[F],k=b(B);typeof B=="number"||typeof B=="boolean"?(w.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,A+U,w.__data)):B.isMatrix3?(w.__data[0]=B.elements[0],w.__data[1]=B.elements[1],w.__data[2]=B.elements[2],w.__data[3]=0,w.__data[4]=B.elements[3],w.__data[5]=B.elements[4],w.__data[6]=B.elements[5],w.__data[7]=0,w.__data[8]=B.elements[6],w.__data[9]=B.elements[7],w.__data[10]=B.elements[8],w.__data[11]=0):(B.toArray(w.__data,U),U+=k.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,A,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(T,p,c,v){let u=T.value,C=p+"_"+c;if(v[C]===void 0)return typeof u=="number"||typeof u=="boolean"?v[C]=u:v[C]=u.clone(),!0;{let E=v[C];if(typeof u=="number"||typeof u=="boolean"){if(E!==u)return v[C]=u,!0}else if(E.equals(u)===!1)return E.copy(u),!0}return!1}function y(T){let p=T.uniforms,c=0,v=16;for(let C=0,E=p.length;C<E;C++){let S=Array.isArray(p[C])?p[C]:[p[C]];for(let M=0,w=S.length;M<w;M++){let A=S[M],R=Array.isArray(A.value)?A.value:[A.value];for(let U=0,F=R.length;U<F;U++){let B=R[U],k=b(B),O=c%v,Z=O%k.boundary,at=O+Z;c+=Z,at!==0&&v-at<k.storage&&(c+=v-at),A.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=c,c+=k.storage}}}let u=c%v;return u>0&&(c+=v-u),T.__size=c,T.__cache={},this}function b(T){let p={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(p.boundary=4,p.storage=4):T.isVector2?(p.boundary=8,p.storage=8):T.isVector3||T.isColor?(p.boundary=16,p.storage=12):T.isVector4?(p.boundary=16,p.storage=16):T.isMatrix3?(p.boundary=48,p.storage=48):T.isMatrix4?(p.boundary=64,p.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),p}function x(T){let p=T.target;p.removeEventListener("dispose",x);let c=o.indexOf(p.__bindingPointIndex);o.splice(c,1),i.deleteBuffer(r[p.id]),delete r[p.id],delete s[p.id]}function _(){for(let T in r)i.deleteBuffer(r[T]);o=[],r={},s={}}return{bind:h,update:l,dispose:_}}var su=class{constructor(t={}){let{canvas:e=Dd(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:l=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:m=!1}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let y=new Uint32Array(4),b=new Int32Array(4),x=null,_=null,T=[],p=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let c=this,v=!1;this._outputColorSpace=Ve;let u=0,C=0,E=null,S=-1,M=null,w=new se,A=new se,R=null,U=new Wt(0),F=0,B=e.width,k=e.height,O=1,Z=null,at=null,it=new se(0,0,B,k),ut=new se(0,0,B,k),Mt=!1,St=new Dr,yt=!1,$=!1,Q=new kt,ct=new D,lt=new se,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},At=!1;function qt(){return E===null?O:1}let N=n;function tt(P,H){return e.getContext(P,H)}try{let P={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:h,preserveDrawingBuffer:l,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",vt,!1),e.addEventListener("webglcontextrestored",Dt,!1),e.addEventListener("webglcontextcreationerror",dt,!1),N===null){let H="webgl2";if(N=tt(H,P),N===null)throw tt(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let J,Y,q,mt,nt,rt,Rt,Ct,L,I,V,W,et,X,xt,_t,Lt,Pt,ft,Et,Vt,Ft,Tt,Zt;function z(){J=new vy(N),J.init(),Ft=new Kv(N,J),Y=new dy(N,J,t,Ft),q=new $v(N,J),Y.reversedDepthBuffer&&m&&q.buffers.depth.setReversed(!0),mt=new by(N),nt=new Fv,rt=new Jv(N,J,q,nt,Y,Ft,mt),Rt=new my(c),Ct=new yy(c),L=new R_(N),Tt=new uy(N,L),I=new My(N,L,mt,Tt),V=new wy(N,I,L,mt),ft=new Ty(N,Y,rt),_t=new py(nt),W=new Uv(c,Rt,Ct,J,Y,Tt,_t),et=new eM(c,nt),X=new Ov,xt=new Wv(J),Pt=new hy(c,Rt,Ct,q,V,g,h),Lt=new Yv(c,V,Y),Zt=new nM(N,mt,Y,q),Et=new fy(N,J,mt),Vt=new Sy(N,J,mt),mt.programs=W.programs,c.capabilities=Y,c.extensions=J,c.properties=nt,c.renderLists=X,c.shadowMap=Lt,c.state=q,c.info=mt}z();let gt=new ru(c,N);this.xr=gt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let P=J.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=J.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(P){P!==void 0&&(O=P,this.setSize(B,k,!1))},this.getSize=function(P){return P.set(B,k)},this.setSize=function(P,H,K=!0){if(gt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=P,k=H,e.width=Math.floor(P*O),e.height=Math.floor(H*O),K===!0&&(e.style.width=P+"px",e.style.height=H+"px"),this.setViewport(0,0,P,H)},this.getDrawingBufferSize=function(P){return P.set(B*O,k*O).floor()},this.setDrawingBufferSize=function(P,H,K){B=P,k=H,O=K,e.width=Math.floor(P*K),e.height=Math.floor(H*K),this.setViewport(0,0,P,H)},this.getCurrentViewport=function(P){return P.copy(w)},this.getViewport=function(P){return P.copy(it)},this.setViewport=function(P,H,K,j){P.isVector4?it.set(P.x,P.y,P.z,P.w):it.set(P,H,K,j),q.viewport(w.copy(it).multiplyScalar(O).round())},this.getScissor=function(P){return P.copy(ut)},this.setScissor=function(P,H,K,j){P.isVector4?ut.set(P.x,P.y,P.z,P.w):ut.set(P,H,K,j),q.scissor(A.copy(ut).multiplyScalar(O).round())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(P){q.setScissorTest(Mt=P)},this.setOpaqueSort=function(P){Z=P},this.setTransparentSort=function(P){at=P},this.getClearColor=function(P){return P.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor(...arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha(...arguments)},this.clear=function(P=!0,H=!0,K=!0){let j=0;if(P){let G=!1;if(E!==null){let pt=E.texture.format;G=pt===sc||pt===rc||pt===ic}if(G){let pt=E.texture.type,wt=pt===Rn||pt===Si||pt===kr||pt===Gr||pt===ec||pt===nc,Nt=Pt.getClearColor(),It=Pt.getClearAlpha(),zt=Nt.r,Ht=Nt.g,Bt=Nt.b;wt?(y[0]=zt,y[1]=Ht,y[2]=Bt,y[3]=It,N.clearBufferuiv(N.COLOR,0,y)):(b[0]=zt,b[1]=Ht,b[2]=Bt,b[3]=It,N.clearBufferiv(N.COLOR,0,b))}else j|=N.COLOR_BUFFER_BIT}H&&(j|=N.DEPTH_BUFFER_BIT),K&&(j|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",vt,!1),e.removeEventListener("webglcontextrestored",Dt,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),Pt.dispose(),X.dispose(),xt.dispose(),nt.dispose(),Rt.dispose(),Ct.dispose(),V.dispose(),Tt.dispose(),Zt.dispose(),W.dispose(),gt.dispose(),gt.removeEventListener("sessionstart",Un),gt.removeEventListener("sessionend",cf),Ii.stop()};function vt(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function Dt(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;let P=mt.autoReset,H=Lt.enabled,K=Lt.autoUpdate,j=Lt.needsUpdate,G=Lt.type;z(),mt.autoReset=P,Lt.enabled=H,Lt.autoUpdate=K,Lt.needsUpdate=j,Lt.type=G}function dt(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function st(P){let H=P.target;H.removeEventListener("dispose",st),Ut(H)}function Ut(P){Yt(P),nt.remove(P)}function Yt(P){let H=nt.get(P).programs;H!==void 0&&(H.forEach(function(K){W.releaseProgram(K)}),P.isShaderMaterial&&W.releaseShaderCache(P))}this.renderBufferDirect=function(P,H,K,j,G,pt){H===null&&(H=ht);let wt=G.isMesh&&G.matrixWorld.determinant()<0,Nt=Jm(P,H,K,j,G);q.setMaterial(j,wt);let It=K.index,zt=1;if(j.wireframe===!0){if(It=I.getWireframeAttribute(K),It===void 0)return;zt=2}let Ht=K.drawRange,Bt=K.attributes.position,Jt=Ht.start*zt,ce=(Ht.start+Ht.count)*zt;pt!==null&&(Jt=Math.max(Jt,pt.start*zt),ce=Math.min(ce,(pt.start+pt.count)*zt)),It!==null?(Jt=Math.max(Jt,0),ce=Math.min(ce,It.count)):Bt!=null&&(Jt=Math.max(Jt,0),ce=Math.min(ce,Bt.count));let Te=ce-Jt;if(Te<0||Te===1/0)return;Tt.setup(G,j,Nt,K,It);let xe,de=Et;if(It!==null&&(xe=L.get(It),de=Vt,de.setIndex(xe)),G.isMesh)j.wireframe===!0?(q.setLineWidth(j.wireframeLinewidth*qt()),de.setMode(N.LINES)):de.setMode(N.TRIANGLES);else if(G.isLine){let Ot=j.linewidth;Ot===void 0&&(Ot=1),q.setLineWidth(Ot*qt()),G.isLineSegments?de.setMode(N.LINES):G.isLineLoop?de.setMode(N.LINE_LOOP):de.setMode(N.LINE_STRIP)}else G.isPoints?de.setMode(N.POINTS):G.isSprite&&de.setMode(N.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Ar("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),de.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(J.get("WEBGL_multi_draw"))de.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let Ot=G._multiDrawStarts,Me=G._multiDrawCounts,te=G._multiDrawCount,tn=It?L.get(It).bytesPerElement:1,ar=nt.get(j).currentProgram.getUniforms();for(let en=0;en<te;en++)ar.setValue(N,"_gl_DrawID",en),de.render(Ot[en]/tn,Me[en])}else if(G.isInstancedMesh)de.renderInstances(Jt,Te,G.count);else if(K.isInstancedBufferGeometry){let Ot=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Me=Math.min(K.instanceCount,Ot);de.renderInstances(Jt,Te,Me)}else de.render(Jt,Te)};function _e(P,H,K){P.transparent===!0&&P.side===Ye&&P.forceSinglePass===!1?(P.side=Be,P.needsUpdate=!0,To(P,H,K),P.side=sn,P.needsUpdate=!0,To(P,H,K),P.side=Ye):To(P,H,K)}this.compile=function(P,H,K=null){K===null&&(K=P),_=xt.get(K),_.init(H),p.push(_),K.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(_.pushLight(G),G.castShadow&&_.pushShadow(G))}),P!==K&&P.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(_.pushLight(G),G.castShadow&&_.pushShadow(G))}),_.setupLights();let j=new Set;return P.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let pt=G.material;if(pt)if(Array.isArray(pt))for(let wt=0;wt<pt.length;wt++){let Nt=pt[wt];_e(Nt,K,G),j.add(Nt)}else _e(pt,K,G),j.add(pt)}),_=p.pop(),j},this.compileAsync=function(P,H,K=null){let j=this.compile(P,H,K);return new Promise(G=>{function pt(){if(j.forEach(function(wt){nt.get(wt).currentProgram.isReady()&&j.delete(wt)}),j.size===0){G(P);return}setTimeout(pt,10)}J.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let re=null;function Gn(P){re&&re(P)}function Un(){Ii.stop()}function cf(){Ii.start()}let Ii=new hp;Ii.setAnimationLoop(Gn),typeof self<"u"&&Ii.setContext(self),this.setAnimationLoop=function(P){re=P,gt.setAnimationLoop(P),P===null?Ii.stop():Ii.start()},gt.addEventListener("sessionstart",Un),gt.addEventListener("sessionend",cf),this.render=function(P,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),gt.enabled===!0&&gt.isPresenting===!0&&(gt.cameraAutoUpdate===!0&&gt.updateCamera(H),H=gt.getCamera()),P.isScene===!0&&P.onBeforeRender(c,P,H,E),_=xt.get(P,p.length),_.init(H),p.push(_),Q.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),St.setFromProjectionMatrix(Q,En,H.reversedDepth),$=this.localClippingEnabled,yt=_t.init(this.clippingPlanes,$),x=X.get(P,T.length),x.init(),T.push(x),gt.enabled===!0&&gt.isPresenting===!0){let pt=c.xr.getDepthSensingMesh();pt!==null&&Pl(pt,H,-1/0,c.sortObjects)}Pl(P,H,0,c.sortObjects),x.finish(),c.sortObjects===!0&&x.sort(Z,at),At=gt.enabled===!1||gt.isPresenting===!1||gt.hasDepthSensing()===!1,At&&Pt.addToRenderList(x,P),this.info.render.frame++,yt===!0&&_t.beginShadows();let K=_.state.shadowsArray;Lt.render(K,P,H),yt===!0&&_t.endShadows(),this.info.autoReset===!0&&this.info.reset();let j=x.opaque,G=x.transmissive;if(_.setupLights(),H.isArrayCamera){let pt=H.cameras;if(G.length>0)for(let wt=0,Nt=pt.length;wt<Nt;wt++){let It=pt[wt];hf(j,G,P,It)}At&&Pt.render(P);for(let wt=0,Nt=pt.length;wt<Nt;wt++){let It=pt[wt];lf(x,P,It,It.viewport)}}else G.length>0&&hf(j,G,P,H),At&&Pt.render(P),lf(x,P,H);E!==null&&C===0&&(rt.updateMultisampleRenderTarget(E),rt.updateRenderTargetMipmap(E)),P.isScene===!0&&P.onAfterRender(c,P,H),Tt.resetDefaultState(),S=-1,M=null,p.pop(),p.length>0?(_=p[p.length-1],yt===!0&&_t.setGlobalState(c.clippingPlanes,_.state.camera)):_=null,T.pop(),T.length>0?x=T[T.length-1]:x=null};function Pl(P,H,K,j){if(P.visible===!1)return;if(P.layers.test(H.layers)){if(P.isGroup)K=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(H);else if(P.isLight)_.pushLight(P),P.castShadow&&_.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||St.intersectsSprite(P)){j&&lt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Q);let wt=V.update(P),Nt=P.material;Nt.visible&&x.push(P,wt,Nt,K,lt.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||St.intersectsObject(P))){let wt=V.update(P),Nt=P.material;if(j&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),lt.copy(P.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),lt.copy(wt.boundingSphere.center)),lt.applyMatrix4(P.matrixWorld).applyMatrix4(Q)),Array.isArray(Nt)){let It=wt.groups;for(let zt=0,Ht=It.length;zt<Ht;zt++){let Bt=It[zt],Jt=Nt[Bt.materialIndex];Jt&&Jt.visible&&x.push(P,wt,Jt,K,lt.z,Bt)}}else Nt.visible&&x.push(P,wt,Nt,K,lt.z,null)}}let pt=P.children;for(let wt=0,Nt=pt.length;wt<Nt;wt++)Pl(pt[wt],H,K,j)}function lf(P,H,K,j){let G=P.opaque,pt=P.transmissive,wt=P.transparent;_.setupLightsView(K),yt===!0&&_t.setGlobalState(c.clippingPlanes,K),j&&q.viewport(w.copy(j)),G.length>0&&bo(G,H,K),pt.length>0&&bo(pt,H,K),wt.length>0&&bo(wt,H,K),q.buffers.depth.setTest(!0),q.buffers.depth.setMask(!0),q.buffers.color.setMask(!0),q.setPolygonOffset(!1)}function hf(P,H,K,j){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[j.id]===void 0&&(_.state.transmissionRenderTarget[j.id]=new Bn(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")||J.has("EXT_color_buffer_float")?Hr:Rn,minFilter:Mi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace}));let pt=_.state.transmissionRenderTarget[j.id],wt=j.viewport||w;pt.setSize(wt.z*c.transmissionResolutionScale,wt.w*c.transmissionResolutionScale);let Nt=c.getRenderTarget(),It=c.getActiveCubeFace(),zt=c.getActiveMipmapLevel();c.setRenderTarget(pt),c.getClearColor(U),F=c.getClearAlpha(),F<1&&c.setClearColor(16777215,.5),c.clear(),At&&Pt.render(K);let Ht=c.toneMapping;c.toneMapping=ei;let Bt=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),_.setupLightsView(j),yt===!0&&_t.setGlobalState(c.clippingPlanes,j),bo(P,K,j),rt.updateMultisampleRenderTarget(pt),rt.updateRenderTargetMipmap(pt),J.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let ce=0,Te=H.length;ce<Te;ce++){let xe=H[ce],de=xe.object,Ot=xe.geometry,Me=xe.material,te=xe.group;if(Me.side===Ye&&de.layers.test(j.layers)){let tn=Me.side;Me.side=Be,Me.needsUpdate=!0,uf(de,K,j,Ot,Me,te),Me.side=tn,Me.needsUpdate=!0,Jt=!0}}Jt===!0&&(rt.updateMultisampleRenderTarget(pt),rt.updateRenderTargetMipmap(pt))}c.setRenderTarget(Nt,It,zt),c.setClearColor(U,F),Bt!==void 0&&(j.viewport=Bt),c.toneMapping=Ht}function bo(P,H,K){let j=H.isScene===!0?H.overrideMaterial:null;for(let G=0,pt=P.length;G<pt;G++){let wt=P[G],Nt=wt.object,It=wt.geometry,zt=wt.group,Ht=wt.material;Ht.allowOverride===!0&&j!==null&&(Ht=j),Nt.layers.test(K.layers)&&uf(Nt,H,K,It,Ht,zt)}}function uf(P,H,K,j,G,pt){P.onBeforeRender(c,H,K,j,G,pt),P.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),G.onBeforeRender(c,H,K,j,P,pt),G.transparent===!0&&G.side===Ye&&G.forceSinglePass===!1?(G.side=Be,G.needsUpdate=!0,c.renderBufferDirect(K,H,j,G,P,pt),G.side=sn,G.needsUpdate=!0,c.renderBufferDirect(K,H,j,G,P,pt),G.side=Ye):c.renderBufferDirect(K,H,j,G,P,pt),P.onAfterRender(c,H,K,j,G,pt)}function To(P,H,K){H.isScene!==!0&&(H=ht);let j=nt.get(P),G=_.state.lights,pt=_.state.shadowsArray,wt=G.state.version,Nt=W.getParameters(P,G.state,pt,H,K),It=W.getProgramCacheKey(Nt),zt=j.programs;j.environment=P.isMeshStandardMaterial?H.environment:null,j.fog=H.fog,j.envMap=(P.isMeshStandardMaterial?Ct:Rt).get(P.envMap||j.environment),j.envMapRotation=j.environment!==null&&P.envMap===null?H.environmentRotation:P.envMapRotation,zt===void 0&&(P.addEventListener("dispose",st),zt=new Map,j.programs=zt);let Ht=zt.get(It);if(Ht!==void 0){if(j.currentProgram===Ht&&j.lightsStateVersion===wt)return df(P,Nt),Ht}else Nt.uniforms=W.getUniforms(P),P.onBeforeCompile(Nt,c),Ht=W.acquireProgram(Nt,It),zt.set(It,Ht),j.uniforms=Nt.uniforms;let Bt=j.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Bt.clippingPlanes=_t.uniform),df(P,Nt),j.needsLights=jm(P),j.lightsStateVersion=wt,j.needsLights&&(Bt.ambientLightColor.value=G.state.ambient,Bt.lightProbe.value=G.state.probe,Bt.directionalLights.value=G.state.directional,Bt.directionalLightShadows.value=G.state.directionalShadow,Bt.spotLights.value=G.state.spot,Bt.spotLightShadows.value=G.state.spotShadow,Bt.rectAreaLights.value=G.state.rectArea,Bt.ltc_1.value=G.state.rectAreaLTC1,Bt.ltc_2.value=G.state.rectAreaLTC2,Bt.pointLights.value=G.state.point,Bt.pointLightShadows.value=G.state.pointShadow,Bt.hemisphereLights.value=G.state.hemi,Bt.directionalShadowMap.value=G.state.directionalShadowMap,Bt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Bt.spotShadowMap.value=G.state.spotShadowMap,Bt.spotLightMatrix.value=G.state.spotLightMatrix,Bt.spotLightMap.value=G.state.spotLightMap,Bt.pointShadowMap.value=G.state.pointShadowMap,Bt.pointShadowMatrix.value=G.state.pointShadowMatrix),j.currentProgram=Ht,j.uniformsList=null,Ht}function ff(P){if(P.uniformsList===null){let H=P.currentProgram.getUniforms();P.uniformsList=Yr.seqWithValue(H.seq,P.uniforms)}return P.uniformsList}function df(P,H){let K=nt.get(P);K.outputColorSpace=H.outputColorSpace,K.batching=H.batching,K.batchingColor=H.batchingColor,K.instancing=H.instancing,K.instancingColor=H.instancingColor,K.instancingMorph=H.instancingMorph,K.skinning=H.skinning,K.morphTargets=H.morphTargets,K.morphNormals=H.morphNormals,K.morphColors=H.morphColors,K.morphTargetsCount=H.morphTargetsCount,K.numClippingPlanes=H.numClippingPlanes,K.numIntersection=H.numClipIntersection,K.vertexAlphas=H.vertexAlphas,K.vertexTangents=H.vertexTangents,K.toneMapping=H.toneMapping}function Jm(P,H,K,j,G){H.isScene!==!0&&(H=ht),rt.resetTextureUnits();let pt=H.fog,wt=j.isMeshStandardMaterial?H.environment:null,Nt=E===null?c.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:zi,It=(j.isMeshStandardMaterial?Ct:Rt).get(j.envMap||wt),zt=j.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ht=!!K.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Bt=!!K.morphAttributes.position,Jt=!!K.morphAttributes.normal,ce=!!K.morphAttributes.color,Te=ei;j.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Te=c.toneMapping);let xe=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,de=xe!==void 0?xe.length:0,Ot=nt.get(j),Me=_.state.lights;if(yt===!0&&($===!0||P!==M)){let Ge=P===M&&j.id===S;_t.setState(j,P,Ge)}let te=!1;j.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==Me.state.version||Ot.outputColorSpace!==Nt||G.isBatchedMesh&&Ot.batching===!1||!G.isBatchedMesh&&Ot.batching===!0||G.isBatchedMesh&&Ot.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Ot.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Ot.instancing===!1||!G.isInstancedMesh&&Ot.instancing===!0||G.isSkinnedMesh&&Ot.skinning===!1||!G.isSkinnedMesh&&Ot.skinning===!0||G.isInstancedMesh&&Ot.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ot.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ot.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ot.instancingMorph===!1&&G.morphTexture!==null||Ot.envMap!==It||j.fog===!0&&Ot.fog!==pt||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==_t.numPlanes||Ot.numIntersection!==_t.numIntersection)||Ot.vertexAlphas!==zt||Ot.vertexTangents!==Ht||Ot.morphTargets!==Bt||Ot.morphNormals!==Jt||Ot.morphColors!==ce||Ot.toneMapping!==Te||Ot.morphTargetsCount!==de)&&(te=!0):(te=!0,Ot.__version=j.version);let tn=Ot.currentProgram;te===!0&&(tn=To(j,H,G));let ar=!1,en=!1,_s=!1,Se=tn.getUniforms(),mn=Ot.uniforms;if(q.useProgram(tn.program)&&(ar=!0,en=!0,_s=!0),j.id!==S&&(S=j.id,en=!0),ar||M!==P){q.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),Se.setValue(N,"projectionMatrix",P.projectionMatrix),Se.setValue(N,"viewMatrix",P.matrixWorldInverse);let $e=Se.map.cameraPosition;$e!==void 0&&$e.setValue(N,ct.setFromMatrixPosition(P.matrixWorld)),Y.logarithmicDepthBuffer&&Se.setValue(N,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Se.setValue(N,"isOrthographic",P.isOrthographicCamera===!0),M!==P&&(M=P,en=!0,_s=!0)}if(G.isSkinnedMesh){Se.setOptional(N,G,"bindMatrix"),Se.setOptional(N,G,"bindMatrixInverse");let Ge=G.skeleton;Ge&&(Ge.boneTexture===null&&Ge.computeBoneTexture(),Se.setValue(N,"boneTexture",Ge.boneTexture,rt))}G.isBatchedMesh&&(Se.setOptional(N,G,"batchingTexture"),Se.setValue(N,"batchingTexture",G._matricesTexture,rt),Se.setOptional(N,G,"batchingIdTexture"),Se.setValue(N,"batchingIdTexture",G._indirectTexture,rt),Se.setOptional(N,G,"batchingColorTexture"),G._colorsTexture!==null&&Se.setValue(N,"batchingColorTexture",G._colorsTexture,rt));let gn=K.morphAttributes;if((gn.position!==void 0||gn.normal!==void 0||gn.color!==void 0)&&ft.update(G,K,tn),(en||Ot.receiveShadow!==G.receiveShadow)&&(Ot.receiveShadow=G.receiveShadow,Se.setValue(N,"receiveShadow",G.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(mn.envMap.value=It,mn.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&H.environment!==null&&(mn.envMapIntensity.value=H.environmentIntensity),en&&(Se.setValue(N,"toneMappingExposure",c.toneMappingExposure),Ot.needsLights&&Km(mn,_s),pt&&j.fog===!0&&et.refreshFogUniforms(mn,pt),et.refreshMaterialUniforms(mn,j,O,k,_.state.transmissionRenderTarget[P.id]),Yr.upload(N,ff(Ot),mn,rt)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Yr.upload(N,ff(Ot),mn,rt),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Se.setValue(N,"center",G.center),Se.setValue(N,"modelViewMatrix",G.modelViewMatrix),Se.setValue(N,"normalMatrix",G.normalMatrix),Se.setValue(N,"modelMatrix",G.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){let Ge=j.uniformsGroups;for(let $e=0,Dl=Ge.length;$e<Dl;$e++){let Pi=Ge[$e];Zt.update(Pi,tn),Zt.bind(Pi,tn)}}return tn}function Km(P,H){P.ambientLightColor.needsUpdate=H,P.lightProbe.needsUpdate=H,P.directionalLights.needsUpdate=H,P.directionalLightShadows.needsUpdate=H,P.pointLights.needsUpdate=H,P.pointLightShadows.needsUpdate=H,P.spotLights.needsUpdate=H,P.spotLightShadows.needsUpdate=H,P.rectAreaLights.needsUpdate=H,P.hemisphereLights.needsUpdate=H}function jm(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return u},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(P,H,K){let j=nt.get(P);j.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),nt.get(P.texture).__webglTexture=H,nt.get(P.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:K,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,H){let K=nt.get(P);K.__webglFramebuffer=H,K.__useDefaultFramebuffer=H===void 0};let Qm=N.createFramebuffer();this.setRenderTarget=function(P,H=0,K=0){E=P,u=H,C=K;let j=!0,G=null,pt=!1,wt=!1;if(P){let It=nt.get(P);if(It.__useDefaultFramebuffer!==void 0)q.bindFramebuffer(N.FRAMEBUFFER,null),j=!1;else if(It.__webglFramebuffer===void 0)rt.setupRenderTarget(P);else if(It.__hasExternalTextures)rt.rebindTextures(P,nt.get(P.texture).__webglTexture,nt.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let Bt=P.depthTexture;if(It.__boundDepthTexture!==Bt){if(Bt!==null&&nt.has(Bt)&&(P.width!==Bt.image.width||P.height!==Bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");rt.setupDepthRenderbuffer(P)}}let zt=P.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(wt=!0);let Ht=nt.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Ht[H])?G=Ht[H][K]:G=Ht[H],pt=!0):P.samples>0&&rt.useMultisampledRTT(P)===!1?G=nt.get(P).__webglMultisampledFramebuffer:Array.isArray(Ht)?G=Ht[K]:G=Ht,w.copy(P.viewport),A.copy(P.scissor),R=P.scissorTest}else w.copy(it).multiplyScalar(O).floor(),A.copy(ut).multiplyScalar(O).floor(),R=Mt;if(K!==0&&(G=Qm),q.bindFramebuffer(N.FRAMEBUFFER,G)&&j&&q.drawBuffers(P,G),q.viewport(w),q.scissor(A),q.setScissorTest(R),pt){let It=nt.get(P.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+H,It.__webglTexture,K)}else if(wt){let It=H;for(let zt=0;zt<P.textures.length;zt++){let Ht=nt.get(P.textures[zt]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+zt,Ht.__webglTexture,K,It)}}else if(P!==null&&K!==0){let It=nt.get(P.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,It.__webglTexture,K)}S=-1},this.readRenderTargetPixels=function(P,H,K,j,G,pt,wt,Nt=0){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=nt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&wt!==void 0&&(It=It[wt]),It){q.bindFramebuffer(N.FRAMEBUFFER,It);try{let zt=P.textures[Nt],Ht=zt.format,Bt=zt.type;if(!Y.textureFormatReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Y.textureTypeReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=P.width-j&&K>=0&&K<=P.height-G&&(P.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Nt),N.readPixels(H,K,j,G,Ft.convert(Ht),Ft.convert(Bt),pt))}finally{let zt=E!==null?nt.get(E).__webglFramebuffer:null;q.bindFramebuffer(N.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(P,H,K,j,G,pt,wt,Nt=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=nt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&wt!==void 0&&(It=It[wt]),It)if(H>=0&&H<=P.width-j&&K>=0&&K<=P.height-G){q.bindFramebuffer(N.FRAMEBUFFER,It);let zt=P.textures[Nt],Ht=zt.format,Bt=zt.type;if(!Y.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Y.textureTypeReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Jt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Jt),N.bufferData(N.PIXEL_PACK_BUFFER,pt.byteLength,N.STREAM_READ),P.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Nt),N.readPixels(H,K,j,G,Ft.convert(Ht),Ft.convert(Bt),0);let ce=E!==null?nt.get(E).__webglFramebuffer:null;q.bindFramebuffer(N.FRAMEBUFFER,ce);let Te=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Ld(N,Te,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Jt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,pt),N.deleteBuffer(Jt),N.deleteSync(Te),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,H=null,K=0){let j=Math.pow(2,-K),G=Math.floor(P.image.width*j),pt=Math.floor(P.image.height*j),wt=H!==null?H.x:0,Nt=H!==null?H.y:0;rt.setTexture2D(P,0),N.copyTexSubImage2D(N.TEXTURE_2D,K,0,0,wt,Nt,G,pt),q.unbindTexture()};let tg=N.createFramebuffer(),eg=N.createFramebuffer();this.copyTextureToTexture=function(P,H,K=null,j=null,G=0,pt=null){pt===null&&(G!==0?(Ar("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),pt=G,G=0):pt=0);let wt,Nt,It,zt,Ht,Bt,Jt,ce,Te,xe=P.isCompressedTexture?P.mipmaps[pt]:P.image;if(K!==null)wt=K.max.x-K.min.x,Nt=K.max.y-K.min.y,It=K.isBox3?K.max.z-K.min.z:1,zt=K.min.x,Ht=K.min.y,Bt=K.isBox3?K.min.z:0;else{let gn=Math.pow(2,-G);wt=Math.floor(xe.width*gn),Nt=Math.floor(xe.height*gn),P.isDataArrayTexture?It=xe.depth:P.isData3DTexture?It=Math.floor(xe.depth*gn):It=1,zt=0,Ht=0,Bt=0}j!==null?(Jt=j.x,ce=j.y,Te=j.z):(Jt=0,ce=0,Te=0);let de=Ft.convert(H.format),Ot=Ft.convert(H.type),Me;H.isData3DTexture?(rt.setTexture3D(H,0),Me=N.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(rt.setTexture2DArray(H,0),Me=N.TEXTURE_2D_ARRAY):(rt.setTexture2D(H,0),Me=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,H.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,H.unpackAlignment);let te=N.getParameter(N.UNPACK_ROW_LENGTH),tn=N.getParameter(N.UNPACK_IMAGE_HEIGHT),ar=N.getParameter(N.UNPACK_SKIP_PIXELS),en=N.getParameter(N.UNPACK_SKIP_ROWS),_s=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,xe.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,xe.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,zt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ht),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Bt);let Se=P.isDataArrayTexture||P.isData3DTexture,mn=H.isDataArrayTexture||H.isData3DTexture;if(P.isDepthTexture){let gn=nt.get(P),Ge=nt.get(H),$e=nt.get(gn.__renderTarget),Dl=nt.get(Ge.__renderTarget);q.bindFramebuffer(N.READ_FRAMEBUFFER,$e.__webglFramebuffer),q.bindFramebuffer(N.DRAW_FRAMEBUFFER,Dl.__webglFramebuffer);for(let Pi=0;Pi<It;Pi++)Se&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,nt.get(P).__webglTexture,G,Bt+Pi),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,nt.get(H).__webglTexture,pt,Te+Pi)),N.blitFramebuffer(zt,Ht,wt,Nt,Jt,ce,wt,Nt,N.DEPTH_BUFFER_BIT,N.NEAREST);q.bindFramebuffer(N.READ_FRAMEBUFFER,null),q.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(G!==0||P.isRenderTargetTexture||nt.has(P)){let gn=nt.get(P),Ge=nt.get(H);q.bindFramebuffer(N.READ_FRAMEBUFFER,tg),q.bindFramebuffer(N.DRAW_FRAMEBUFFER,eg);for(let $e=0;$e<It;$e++)Se?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,gn.__webglTexture,G,Bt+$e):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,gn.__webglTexture,G),mn?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ge.__webglTexture,pt,Te+$e):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ge.__webglTexture,pt),G!==0?N.blitFramebuffer(zt,Ht,wt,Nt,Jt,ce,wt,Nt,N.COLOR_BUFFER_BIT,N.NEAREST):mn?N.copyTexSubImage3D(Me,pt,Jt,ce,Te+$e,zt,Ht,wt,Nt):N.copyTexSubImage2D(Me,pt,Jt,ce,zt,Ht,wt,Nt);q.bindFramebuffer(N.READ_FRAMEBUFFER,null),q.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else mn?P.isDataTexture||P.isData3DTexture?N.texSubImage3D(Me,pt,Jt,ce,Te,wt,Nt,It,de,Ot,xe.data):H.isCompressedArrayTexture?N.compressedTexSubImage3D(Me,pt,Jt,ce,Te,wt,Nt,It,de,xe.data):N.texSubImage3D(Me,pt,Jt,ce,Te,wt,Nt,It,de,Ot,xe):P.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,pt,Jt,ce,wt,Nt,de,Ot,xe.data):P.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,pt,Jt,ce,xe.width,xe.height,de,xe.data):N.texSubImage2D(N.TEXTURE_2D,pt,Jt,ce,wt,Nt,de,Ot,xe);N.pixelStorei(N.UNPACK_ROW_LENGTH,te),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,tn),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ar),N.pixelStorei(N.UNPACK_SKIP_ROWS,en),N.pixelStorei(N.UNPACK_SKIP_IMAGES,_s),pt===0&&H.generateMipmaps&&N.generateMipmap(Me),q.unbindTexture()},this.initRenderTarget=function(P){nt.get(P).__webglFramebuffer===void 0&&rt.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?rt.setTextureCube(P,0):P.isData3DTexture?rt.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?rt.setTexture2DArray(P,0):rt.setTexture2D(P,0),q.unbindTexture()},this.resetState=function(){u=0,C=0,E=null,q.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return En}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=jt._getUnpackColorSpace()}};var mp={type:"change"},lu={type:"start"},_p={type:"end"},Hc=new Je,gp=new Ae,iM=Math.cos(70*Uc.DEG2RAD),Ne=new D,Ke=2*Math.PI,ue={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},au=1e-6,cu=class extends $s{constructor(t,e=null){super(t,e),this.state=ue.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:yi.ROTATE,MIDDLE:yi.DOLLY,RIGHT:yi.PAN},this.touches={ONE:vi.ROTATE,TWO:vi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new on,this._lastTargetPosition=new D,this._quat=new on().setFromUnitVectors(t.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Vr,this._sphericalDelta=new Vr,this._scale=1,this._panOffset=new D,this._rotateStart=new ot,this._rotateEnd=new ot,this._rotateDelta=new ot,this._panStart=new ot,this._panEnd=new ot,this._panDelta=new ot,this._dollyStart=new ot,this._dollyEnd=new ot,this._dollyDelta=new ot,this._dollyDirection=new D,this._mouse=new ot,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=sM.bind(this),this._onPointerDown=rM.bind(this),this._onPointerUp=oM.bind(this),this._onContextMenu=dM.bind(this),this._onMouseWheel=lM.bind(this),this._onKeyDown=hM.bind(this),this._onTouchStart=uM.bind(this),this._onTouchMove=fM.bind(this),this._onMouseDown=aM.bind(this),this._onMouseMove=cM.bind(this),this._interceptControlDown=pM.bind(this),this._interceptControlUp=mM.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(mp),this.update(),this.state=ue.NONE}update(t=null){let e=this.object.position;Ne.copy(e).sub(this.target),Ne.applyQuaternion(this._quat),this._spherical.setFromVector3(Ne),this.autoRotate&&this.state===ue.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=Ke:n>Math.PI&&(n-=Ke),r<-Math.PI?r+=Ke:r>Math.PI&&(r-=Ke),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Ne.setFromSpherical(this._spherical),Ne.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ne),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Ne.length();o=this._clampDistance(a*this._scale);let h=a-o;this.object.position.addScaledVector(this._dollyDirection,h),this.object.updateMatrixWorld(),s=!!h}else if(this.object.isOrthographicCamera){let a=new D(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=h!==this.object.zoom;let l=new D(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Ne.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Hc.origin.copy(this.object.position),Hc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Hc.direction))<iM?this.object.lookAt(this.target):(gp.setFromNormalAndCoplanarPoint(this.object.up,this.target),Hc.intersectPlane(gp,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>au||8*(1-this._lastQuaternion.dot(this.object.quaternion))>au||this._lastTargetPosition.distanceToSquared(this.target)>au?(this.dispatchEvent(mp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ke/60*this.autoRotateSpeed*t:Ke/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ne.setFromMatrixColumn(e,0),Ne.multiplyScalar(-t),this._panOffset.add(Ne)}_panUp(t,e){this.screenSpacePanning===!0?Ne.setFromMatrixColumn(e,1):(Ne.setFromMatrixColumn(e,0),Ne.crossVectors(this.object.up,Ne)),Ne.multiplyScalar(t),this._panOffset.add(Ne)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;Ne.copy(r).sub(this.target);let s=Ne.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=t-n.left,s=e-n.top,o=n.width,a=n.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Ke*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ke*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Ke*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Ke*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Ke*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Ke*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(n,r)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Ke*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ke*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ot,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function rM(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function sM(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function oM(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(_p),this.state=ue.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function aM(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case yi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ue.DOLLY;break;case yi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ue.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ue.ROTATE}break;case yi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ue.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ue.PAN}break;default:this.state=ue.NONE}this.state!==ue.NONE&&this.dispatchEvent(lu)}function cM(i){switch(this.state){case ue.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ue.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ue.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function lM(i){this.enabled===!1||this.enableZoom===!1||this.state!==ue.NONE||(i.preventDefault(),this.dispatchEvent(lu),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(_p))}function hM(i){this.enabled!==!1&&this._handleKeyDown(i)}function uM(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case vi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ue.TOUCH_ROTATE;break;case vi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ue.TOUCH_PAN;break;default:this.state=ue.NONE}break;case 2:switch(this.touches.TWO){case vi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ue.TOUCH_DOLLY_PAN;break;case vi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ue.TOUCH_DOLLY_ROTATE;break;default:this.state=ue.NONE}break;default:this.state=ue.NONE}this.state!==ue.NONE&&this.dispatchEvent(lu)}function fM(i){switch(this._trackPointer(i),this.state){case ue.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ue.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ue.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ue.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ue.NONE}}function dM(i){this.enabled!==!1&&i.preventDefault()}function pM(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function mM(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var hu=class extends Qn{constructor(t){super(t)}load(t,e,n,r){let s=this,o=new Wi(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){try{e(s.parse(a))}catch(h){r?r(h):console.error(h),s.manager.itemError(t)}},n,r)}parse(t){function e(l){let f=new DataView(l),d=32/8*3+32/8*3*3+16/8,m=f.getUint32(80,!0);if(80+32/8+m*d===f.byteLength)return!0;let y=[115,111,108,105,100];for(let b=0;b<5;b++)if(n(y,f,b))return!1;return!0}function n(l,f,d){for(let m=0,g=l.length;m<g;m++)if(l[m]!==f.getUint8(d+m))return!1;return!0}function r(l){let f=new DataView(l),d=f.getUint32(80,!0),m,g,y,b=!1,x,_,T,p,c;for(let w=0;w<70;w++)f.getUint32(w,!1)==1129270351&&f.getUint8(w+4)==82&&f.getUint8(w+5)==61&&(b=!0,x=new Float32Array(d*3*3),_=f.getUint8(w+6)/255,T=f.getUint8(w+7)/255,p=f.getUint8(w+8)/255,c=f.getUint8(w+9)/255);let v=84,u=50,C=new Ce,E=new Float32Array(d*3*3),S=new Float32Array(d*3*3),M=new Wt;for(let w=0;w<d;w++){let A=v+w*u,R=f.getFloat32(A,!0),U=f.getFloat32(A+4,!0),F=f.getFloat32(A+8,!0);if(b){let B=f.getUint16(A+48,!0);(B&32768)===0?(m=(B&31)/31,g=(B>>5&31)/31,y=(B>>10&31)/31):(m=_,g=T,y=p)}for(let B=1;B<=3;B++){let k=A+B*12,O=w*3*3+(B-1)*3;E[O]=f.getFloat32(k,!0),E[O+1]=f.getFloat32(k+4,!0),E[O+2]=f.getFloat32(k+8,!0),S[O]=R,S[O+1]=U,S[O+2]=F,b&&(M.setRGB(m,g,y,Ve),x[O]=M.r,x[O+1]=M.g,x[O+2]=M.b)}}return C.setAttribute("position",new pe(E,3)),C.setAttribute("normal",new pe(S,3)),b&&(C.setAttribute("color",new pe(x,3)),C.hasColors=!0,C.alpha=c),C}function s(l){let f=new Ce,d=/solid([\s\S]*?)endsolid/g,m=/facet([\s\S]*?)endfacet/g,g=/solid\s(.+)/,y=0,b=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,x=new RegExp("vertex"+b+b+b,"g"),_=new RegExp("normal"+b+b+b,"g"),T=[],p=[],c=[],v=new D,u,C=0,E=0,S=0;for(;(u=d.exec(l))!==null;){E=S;let M=u[0],w=(u=g.exec(M))!==null?u[1]:"";for(c.push(w);(u=m.exec(M))!==null;){let U=0,F=0,B=u[0];for(;(u=_.exec(B))!==null;)v.x=parseFloat(u[1]),v.y=parseFloat(u[2]),v.z=parseFloat(u[3]),F++;for(;(u=x.exec(B))!==null;)T.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3])),p.push(v.x,v.y,v.z),U++,S++;F!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+y),U!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+y),y++}let A=E,R=S-E;f.userData.groupNames=c,f.addGroup(A,R,C),C++}return f.setAttribute("position",new ee(T,3)),f.setAttribute("normal",new ee(p,3)),f}function o(l){return typeof l!="string"?new TextDecoder().decode(l):l}function a(l){if(typeof l=="string"){let f=new Uint8Array(l.length);for(let d=0;d<l.length;d++)f[d]=l.charCodeAt(d)&255;return f.buffer||f}else return l}let h=a(t);return e(h)?r(h):s(o(t))}};var uu=class extends Qn{constructor(t){super(t)}load(t,e,n,r){let s=this,o=new Wi(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){let h=s.parse(JSON.parse(a));e&&e(h)},n,r)}parse(t){return new Gc(t)}},Gc=class{constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,e=100){let n=[],r=gM(t,e,this.data);for(let s=0,o=r.length;s<o;s++)n.push(...r[s].toShapes());return n}};function gM(i,t,e){let n=Array.from(i),r=t/e.resolution,s=(e.boundingBox.yMax-e.boundingBox.yMin+e.underlineThickness)*r,o=[],a=0,h=0;for(let l=0;l<n.length;l++){let f=n[l];if(f===`
`)a=0,h-=s;else{let d=_M(f,r,a,h,e);a+=d.offsetX,o.push(d.path)}}return o}function _M(i,t,e,n,r){let s=r.glyphs[i]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+i+'" does not exists in font family '+r.familyName+".");return}let o=new Zs,a,h,l,f,d,m,g,y;if(s.o){let b=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let x=0,_=b.length;x<_;)switch(b[x++]){case"m":a=b[x++]*t+e,h=b[x++]*t+n,o.moveTo(a,h);break;case"l":a=b[x++]*t+e,h=b[x++]*t+n,o.lineTo(a,h);break;case"q":l=b[x++]*t+e,f=b[x++]*t+n,d=b[x++]*t+e,m=b[x++]*t+n,o.quadraticCurveTo(d,m,l,f);break;case"b":l=b[x++]*t+e,f=b[x++]*t+n,d=b[x++]*t+e,m=b[x++]*t+n,g=b[x++]*t+e,y=b[x++]*t+n,o.bezierCurveTo(d,m,g,y,l,f);break}}return{offsetX:s.ha*t,path:o}}var fu=class extends Fr{constructor(t,e={}){let n=e.font;if(n===void 0)super();else{let r=n.generateShapes(t,e.size);e.depth===void 0&&(e.depth=50),e.bevelThickness===void 0&&(e.bevelThickness=10),e.bevelSize===void 0&&(e.bevelSize=8),e.bevelEnabled===void 0&&(e.bevelEnabled=!1),super(r,e)}this.type="TextGeometry"}};var io=new D;function vn(i,t,e,n,r,s){let o=2*Math.PI*r/4,a=Math.max(s-2*r,0),h=Math.PI/4;io.copy(t),io[n]=0,io.normalize();let l=.5*o/(o+a),f=1-io.angleTo(i)/h;return Math.sign(io[e])===1?f*l:a/(o+a)+l+l*(1-f)}var du=class i extends jn{constructor(t=1,e=1,n=1,r=2,s=.1){let o=r*2+1;if(s=Math.min(t/2,e/2,n/2,s),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:r,radius:s},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let h=new D,l=new D,f=new D(t,e,n).divideScalar(2).subScalar(s),d=this.attributes.position.array,m=this.attributes.normal.array,g=this.attributes.uv.array,y=d.length/6,b=new D,x=.5/o;for(let _=0,T=0;_<d.length;_+=3,T+=2)switch(h.fromArray(d,_),l.copy(h),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),d[_+0]=f.x*Math.sign(h.x)+l.x*s,d[_+1]=f.y*Math.sign(h.y)+l.y*s,d[_+2]=f.z*Math.sign(h.z)+l.z*s,m[_+0]=l.x,m[_+1]=l.y,m[_+2]=l.z,Math.floor(_/y)){case 0:b.set(1,0,0),g[T+0]=vn(b,l,"z","y",s,n),g[T+1]=1-vn(b,l,"y","z",s,e);break;case 1:b.set(-1,0,0),g[T+0]=1-vn(b,l,"z","y",s,n),g[T+1]=1-vn(b,l,"y","z",s,e);break;case 2:b.set(0,1,0),g[T+0]=1-vn(b,l,"x","z",s,t),g[T+1]=vn(b,l,"z","x",s,n);break;case 3:b.set(0,-1,0),g[T+0]=1-vn(b,l,"x","z",s,t),g[T+1]=1-vn(b,l,"z","x",s,n);break;case 4:b.set(0,0,1),g[T+0]=1-vn(b,l,"x","y",s,t),g[T+1]=1-vn(b,l,"y","x",s,e);break;case 5:b.set(0,0,-1),g[T+0]=vn(b,l,"x","y",s,t),g[T+1]=1-vn(b,l,"y","x",s,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};function xM(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},o={},a=i[0].morphTargetsRelative,h=new Ce,l=0;for(let f=0;f<i.length;++f){let d=i[f],m=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let g in d.attributes){if(!n.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+'. All geometries must have compatible attributes; make sure "'+g+'" attribute exists among all geometries, or in none of them.'),null;s[g]===void 0&&(s[g]=[]),s[g].push(d.attributes[g]),m++}if(m!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let g in d.morphAttributes){if(!r.has(g))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+".  .morphAttributes must be consistent throughout all geometries."),null;o[g]===void 0&&(o[g]=[]),o[g].push(d.morphAttributes[g])}if(t){let g;if(e)g=d.index.count;else if(d.attributes.position!==void 0)g=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". The geometry must have either an index or a position attribute"),null;h.addGroup(l,g,f),l+=g}}if(e){let f=0,d=[];for(let m=0;m<i.length;++m){let g=i[m].index;for(let y=0;y<g.count;++y)d.push(g.getX(y)+f);f+=i[m].attributes.position.count}h.setIndex(d)}for(let f in s){let d=xp(s[f]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" attribute."),null;h.setAttribute(f,d)}for(let f in o){let d=o[f][0].length;if(d===0)break;h.morphAttributes=h.morphAttributes||{},h.morphAttributes[f]=[];for(let m=0;m<d;++m){let g=[];for(let b=0;b<o[f].length;++b)g.push(o[f][b][m]);let y=xp(g);if(!y)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" morphAttribute."),null;h.morphAttributes[f].push(y)}}return h}function xp(i){let t,e,n,r=-1,s=0;for(let l=0;l<i.length;++l){let f=i[l];if(t===void 0&&(t=f.array.constructor),t!==f.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=f.itemSize),e!==f.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=f.normalized),n!==f.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=f.gpuType),r!==f.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=f.count*e}let o=new t(s),a=new pe(o,e,n),h=0;for(let l=0;l<i.length;++l){let f=i[l];if(f.isInterleavedBufferAttribute){let d=h/e;for(let m=0,g=f.count;m<g;m++)for(let y=0;y<e;y++){let b=f.getComponent(m,y);a.setComponent(m+d,y,b)}}else o.set(f.array,h);h+=f.count*e}return r!==void 0&&(a.gpuType=r),a}function yM(i,t=1e-4){t=Math.max(t,Number.EPSILON);let e={},n=i.getIndex(),r=i.getAttribute("position"),s=n?n.count:r.count,o=0,a=Object.keys(i.attributes),h={},l={},f=[],d=["getX","getY","getZ","getW"],m=["setX","setY","setZ","setW"];for(let T=0,p=a.length;T<p;T++){let c=a[T],v=i.attributes[c];h[c]=new v.constructor(new v.array.constructor(v.count*v.itemSize),v.itemSize,v.normalized);let u=i.morphAttributes[c];u&&(l[c]||(l[c]=[]),u.forEach((C,E)=>{let S=new C.array.constructor(C.count*C.itemSize);l[c][E]=new C.constructor(S,C.itemSize,C.normalized)}))}let g=t*.5,y=Math.log10(1/t),b=Math.pow(10,y),x=g*b;for(let T=0;T<s;T++){let p=n?n.getX(T):T,c="";for(let v=0,u=a.length;v<u;v++){let C=a[v],E=i.getAttribute(C),S=E.itemSize;for(let M=0;M<S;M++)c+=`${~~(E[d[M]](p)*b+x)},`}if(c in e)f.push(e[c]);else{for(let v=0,u=a.length;v<u;v++){let C=a[v],E=i.getAttribute(C),S=i.morphAttributes[C],M=E.itemSize,w=h[C],A=l[C];for(let R=0;R<M;R++){let U=d[R],F=m[R];if(w[F](o,E[U](p)),S)for(let B=0,k=S.length;B<k;B++)A[B][F](o,S[B][U](p))}}e[c]=o,f.push(o),o++}}let _=i.clone();for(let T in i.attributes){let p=h[T];if(_.setAttribute(T,new p.constructor(p.array.slice(0,o*p.itemSize),p.itemSize,p.normalized)),T in l)for(let c=0;c<l[T].length;c++){let v=l[T][c];_.morphAttributes[T][c]=new v.constructor(v.array.slice(0,o*v.itemSize),v.itemSize,v.normalized)}}return _.setIndex(f),_}var $r=Math.pow(2,-24),ro=Symbol("SKIP_GENERATION"),Wc={strategy:0,maxDepth:40,targetLeafSize:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null,[ro]:!1};function me(i,t,e){return e.min.x=t[i],e.min.y=t[i+1],e.min.z=t[i+2],e.max.x=t[i+3],e.max.y=t[i+4],e.max.z=t[i+5],e}function so(i){let t=-1,e=-1/0;for(let n=0;n<3;n++){let r=i[n+3]-i[n];r>e&&(e=r,t=n)}return t}function pu(i,t){t.set(i)}function mu(i,t,e){let n,r;for(let s=0;s<3;s++){let o=s+3;n=i[s],r=t[s],e[s]=n<r?n:r,n=i[o],r=t[o],e[o]=n>r?n:r}}function oo(i,t,e){for(let n=0;n<3;n++){let r=t[i+2*n],s=t[i+2*n+1],o=r-s,a=r+s;o<e[n]&&(e[n]=o),a>e[n+3]&&(e[n+3]=a)}}function Jr(i){let t=i[3]-i[0],e=i[4]-i[1],n=i[5]-i[2];return 2*(t*e+e*n+n*t)}function Kt(i,t){return t[i+15]===65535}function oe(i,t){return t[i+6]}function fe(i,t){return t[i+14]}function ne(i){return i+8}function ie(i,t){let e=t[i+6];return i+e*8}function Kr(i,t){return t[i+7]}function Xc(i,t,e,n,r){let s=1/0,o=1/0,a=1/0,h=-1/0,l=-1/0,f=-1/0,d=1/0,m=1/0,g=1/0,y=-1/0,b=-1/0,x=-1/0,_=i.offset||0;for(let T=(t-_)*6,p=(t+e-_)*6;T<p;T+=6){let c=i[T+0],v=i[T+1],u=c-v,C=c+v;u<s&&(s=u),C>h&&(h=C),c<d&&(d=c),c>y&&(y=c);let E=i[T+2],S=i[T+3],M=E-S,w=E+S;M<o&&(o=M),w>l&&(l=w),E<m&&(m=E),E>b&&(b=E);let A=i[T+4],R=i[T+5],U=A-R,F=A+R;U<a&&(a=U),F>f&&(f=F),A<g&&(g=A),A>x&&(x=A)}n[0]=s,n[1]=o,n[2]=a,n[3]=h,n[4]=l,n[5]=f,r[0]=d,r[1]=m,r[2]=g,r[3]=y,r[4]=b,r[5]=x}var ii=32,SM=(i,t)=>i.candidate-t.candidate,bi=new Array(ii).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),qc=new Float32Array(6);function vp(i,t,e,n,r,s){let o=-1,a=0;if(s===0)o=so(t),o!==-1&&(a=(t[o]+t[o+3])/2);else if(s===1)o=so(i),o!==-1&&(a=bM(e,n,r,o));else if(s===2){let h=Jr(i),l=1.25*r,f=e.offset||0,d=(n-f)*6,m=(n+r-f)*6;for(let g=0;g<3;g++){let y=t[g],_=(t[g+3]-y)/ii;if(r<ii/4){let T=[...bi];T.length=r;let p=0;for(let v=d;v<m;v+=6,p++){let u=T[p];u.candidate=e[v+2*g],u.count=0;let{bounds:C,leftCacheBounds:E,rightCacheBounds:S}=u;for(let M=0;M<3;M++)S[M]=1/0,S[M+3]=-1/0,E[M]=1/0,E[M+3]=-1/0,C[M]=1/0,C[M+3]=-1/0;oo(v,e,C)}T.sort(SM);let c=r;for(let v=0;v<c;v++){let u=T[v];for(;v+1<c&&T[v+1].candidate===u.candidate;)T.splice(v+1,1),c--}for(let v=d;v<m;v+=6){let u=e[v+2*g];for(let C=0;C<c;C++){let E=T[C];u>=E.candidate?oo(v,e,E.rightCacheBounds):(oo(v,e,E.leftCacheBounds),E.count++)}}for(let v=0;v<c;v++){let u=T[v],C=u.count,E=r-u.count,S=u.leftCacheBounds,M=u.rightCacheBounds,w=0;C!==0&&(w=Jr(S)/h);let A=0;E!==0&&(A=Jr(M)/h);let R=1+1.25*(w*C+A*E);R<l&&(o=g,l=R,a=u.candidate)}}else{for(let c=0;c<ii;c++){let v=bi[c];v.count=0,v.candidate=y+_+c*_;let u=v.bounds;for(let C=0;C<3;C++)u[C]=1/0,u[C+3]=-1/0}for(let c=d;c<m;c+=6){let C=~~((e[c+2*g]-y)/_);C>=ii&&(C=ii-1);let E=bi[C];E.count++,oo(c,e,E.bounds)}let T=bi[ii-1];pu(T.bounds,T.rightCacheBounds);for(let c=ii-2;c>=0;c--){let v=bi[c],u=bi[c+1];mu(v.bounds,u.rightCacheBounds,v.rightCacheBounds)}let p=0;for(let c=0;c<ii-1;c++){let v=bi[c],u=v.count,C=v.bounds,S=bi[c+1].rightCacheBounds;u!==0&&(p===0?pu(C,qc):mu(C,qc,qc)),p+=u;let M=0,w=0;p!==0&&(M=Jr(qc)/h);let A=r-p;A!==0&&(w=Jr(S)/h);let R=1+1.25*(M*p+w*A);R<l&&(o=g,l=R,a=v.candidate)}}}}else console.warn(`BVH: Invalid build strategy value ${s} used.`);return{axis:o,pos:a}}function bM(i,t,e,n){let r=0,s=i.offset;for(let o=t,a=t+e;o<a;o++)r+=i[(o-s)*6+n*2];return r/e}var jr=class{constructor(){this.boundingData=new Float32Array(6)}};function Mp(i,t,e,n,r,s){let o=n,a=n+r-1,h=s.pos,l=s.axis*2,f=e.offset||0;for(;;){for(;o<=a&&e[(o-f)*6+l]<h;)o++;for(;o<=a&&e[(a-f)*6+l]>=h;)a--;if(o<a){for(let d=0;d<t;d++){let m=i[o*t+d];i[o*t+d]=i[a*t+d],i[a*t+d]=m}for(let d=0;d<6;d++){let m=o-f,g=a-f,y=e[m*6+d];e[m*6+d]=e[g*6+d],e[g*6+d]=y}o++,a--}else return o}}var Sp,Yc,gu,bp,TM=Math.pow(2,32);function Zc(i){return"count"in i?1:1+Zc(i.left)+Zc(i.right)}function Tp(i,t,e){return Sp=new Float32Array(e),Yc=new Uint32Array(e),gu=new Uint16Array(e),bp=new Uint8Array(e),_u(i,t)}function _u(i,t){let e=i/4,n=i/2,r="count"in t,s=t.boundingData;for(let o=0;o<6;o++)Sp[e+o]=s[o];if(r)return t.buffer?(bp.set(new Uint8Array(t.buffer),i),i+t.buffer.byteLength):(Yc[e+6]=t.offset,gu[n+14]=t.count,gu[n+15]=65535,i+32);{let{left:o,right:a,splitAxis:h}=t,l=i+32,f=_u(l,o),d=i/32,g=f/32-d;if(g>TM)throw new Error("MeshBVH: Cannot store relative child node offset greater than 32 bits.");return Yc[e+6]=g,Yc[e+7]=h,_u(f,a)}}function wM(i,t,e,n,r,s){let{maxDepth:o,verbose:a,targetLeafSize:h,_strictLeafSize:l=1/0,strategy:f,onProgress:d}=r,m=i.primitiveBuffer,g=i.primitiveBufferStride,y=new Float32Array(6),b=!1,x=new jr;return Xc(t,e,n,x.boundingData,y),T(x,e,n,y),x;function _(p){d&&d((p-s.offset)/s.count)}function T(p,c,v,u=null,C=0){!b&&C>=o&&(b=!0,a&&console.warn(`BVH: Max depth of ${o} reached when generating BVH. Consider increasing maxDepth.`));let E=v>l;if(v<=h&&!E||C>=o)return _(c+v),p.offset=c,p.count=v,p;let S=vp(p.boundingData,u,t,c,v,f),M=S.axis===-1?-1:Mp(m,g,t,c,v,S);if(S.axis===-1||M===c||M===c+v){if(!E)return _(c+v),p.offset=c,p.count=v,p;S.axis=Math.max(0,so(p.boundingData)),M=c+Math.max(1,Math.floor(v/2))}p.splitAxis=S.axis;let w=new jr,A=c,R=M-c;p.left=w,Xc(t,A,R,w.boundingData,y),T(w,A,R,y,C+1);let U=new jr,F=M,B=v-R;return p.right=U,Xc(t,F,B,U.boundingData,y),T(U,F,B,y,C+1),p}}function wp(i,t){let e=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,n=i.getRootRanges(t.range),r=n[0],s=n[n.length-1],o={offset:r.offset,count:s.offset+s.count-r.offset},a=new Float32Array(6*o.count);a.offset=o.offset,i.computePrimitiveBounds(o.offset,o.count,a),i._roots=n.map(h=>{let l=wM(i,a,h.offset,h.count,t,o),f=Zc(l),d=new e(32*f);return Tp(0,l,d),d})}var Ti=class{constructor(t){this._getNewPrimitive=t,this._primitives=[]}getPrimitive(){let t=this._primitives;return t.length===0?this._getNewPrimitive():t.pop()}releasePrimitive(t){this._primitives.push(t)}};var xu=class{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;let t=[],e=null;this.setBuffer=n=>{e&&t.push(e),e=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{e=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,t.length!==0&&this.setBuffer(t.pop())}}},Qt=new xu;var wi,ts,Qr=[],$c=new Ti(()=>new ve);function Ep(i,t,e,n,r,s){wi=$c.getPrimitive(),ts=$c.getPrimitive(),Qr.push(wi,ts),Qt.setBuffer(i._roots[t]);let o=yu(0,i.geometry,e,n,r,s);Qt.clearBuffer(),$c.releasePrimitive(wi),$c.releasePrimitive(ts),Qr.pop(),Qr.pop();let a=Qr.length;return a>0&&(ts=Qr[a-1],wi=Qr[a-2]),o}function yu(i,t,e,n,r=null,s=0,o=0){let{float32Array:a,uint16Array:h,uint32Array:l}=Qt,f=i*2;if(Kt(f,h)){let m=oe(i,l),g=fe(f,h);return me(i,a,wi),n(m,g,!1,o,s+i/8,wi)}else{let M=function(A){let{uint16Array:R,uint32Array:U}=Qt,F=A*2;for(;!Kt(F,R);)A=ne(A),F=A*2;return oe(A,U)},w=function(A){let{uint16Array:R,uint32Array:U}=Qt,F=A*2;for(;!Kt(F,R);)A=ie(A,U),F=A*2;return oe(A,U)+fe(F,R)},m=ne(i),g=ie(i,l),y=m,b=g,x,_,T,p;if(r&&(T=wi,p=ts,me(y,a,T),me(b,a,p),x=r(T),_=r(p),_<x)){y=g,b=m;let A=x;x=_,_=A,T=p}T||(T=wi,me(y,a,T));let c=Kt(y*2,h),v=e(T,c,x,o+1,s+y/8),u;if(v===2){let A=M(y),U=w(y)-A;u=n(A,U,!0,o+1,s+y/8,T)}else u=v&&yu(y,t,e,n,r,s,o+1);if(u)return!0;p=ts,me(b,a,p);let C=Kt(b*2,h),E=e(p,C,_,o+1,s+b/8),S;if(E===2){let A=M(b),U=w(b)-A;S=n(A,U,!0,o+1,s+b/8,p)}else S=E&&yu(b,t,e,n,r,s,o+1);return!!S}}var ao=new Qt.constructor,Jc=new Qt.constructor,Ei=new Ti(()=>new ve),es=new ve,ns=new ve,Mu=new ve,Su=new ve,bu=!1;function Ap(i,t,e,n){if(bu)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");bu=!0;let r=i._roots,s=t._roots,o,a=0,h=0,l=new kt().copy(e).invert();for(let f=0,d=r.length;f<d;f++){ao.setBuffer(r[f]),h=0;let m=Ei.getPrimitive();me(0,ao.float32Array,m),m.applyMatrix4(l);for(let g=0,y=s.length;g<y&&(Jc.setBuffer(s[g]),o=In(0,0,e,l,n,a,h,0,0,m),Jc.clearBuffer(),h+=s[g].byteLength/32,!o);g++);if(Ei.releasePrimitive(m),ao.clearBuffer(),a+=r[f].byteLength/32,o)break}return bu=!1,o}function In(i,t,e,n,r,s=0,o=0,a=0,h=0,l=null,f=!1){let d,m;f?(d=Jc,m=ao):(d=ao,m=Jc);let g=d.float32Array,y=d.uint32Array,b=d.uint16Array,x=m.float32Array,_=m.uint32Array,T=m.uint16Array,p=i*2,c=t*2,v=Kt(p,b),u=Kt(c,T),C=!1;if(u&&v)f?C=r(oe(t,_),fe(t*2,T),oe(i,y),fe(i*2,b),h,o+t/8,a,s+i/8):C=r(oe(i,y),fe(i*2,b),oe(t,_),fe(t*2,T),a,s+i/8,h,o+t/8);else if(u){let E=Ei.getPrimitive();me(t,x,E),E.applyMatrix4(e);let S=ne(i),M=ie(i,y);me(S,g,es),me(M,g,ns);let w=E.intersectsBox(es),A=E.intersectsBox(ns);C=w&&In(t,S,n,e,r,o,s,h,a+1,E,!f)||A&&In(t,M,n,e,r,o,s,h,a+1,E,!f),Ei.releasePrimitive(E)}else{let E=ne(t),S=ie(t,_);me(E,x,Mu),me(S,x,Su);let M=l.intersectsBox(Mu),w=l.intersectsBox(Su);if(M&&w)C=In(i,E,e,n,r,s,o,a,h+1,l,f)||In(i,S,e,n,r,s,o,a,h+1,l,f);else if(M)if(v)C=In(i,E,e,n,r,s,o,a,h+1,l,f);else{let A=Ei.getPrimitive();A.copy(Mu).applyMatrix4(e);let R=ne(i),U=ie(i,y);me(R,g,es),me(U,g,ns);let F=A.intersectsBox(es),B=A.intersectsBox(ns);C=F&&In(E,R,n,e,r,o,s,h,a+1,A,!f)||B&&In(E,U,n,e,r,o,s,h,a+1,A,!f),Ei.releasePrimitive(A)}else if(w)if(v)C=In(i,S,e,n,r,s,o,a,h+1,l,f);else{let A=Ei.getPrimitive();A.copy(Su).applyMatrix4(e);let R=ne(i),U=ie(i,y);me(R,g,es),me(U,g,ns);let F=A.intersectsBox(es),B=A.intersectsBox(ns);C=F&&In(S,R,n,e,r,o,s,h,a+1,A,!f)||B&&In(S,U,n,e,r,o,s,h,a+1,A,!f),Ei.releasePrimitive(A)}}return C}var Kc=new class{constructor(){let i=null,t=null,e=null,n=!1;this.root=null,this.buffer=null,this.uint32Array=null,this.uint16Array=null,this.setBVH=(s,o)=>{if(n)throw new Error("BVHTraversalHelper: cannot call setBVH during an active traversal.");this.root=o,this.buffer=i=s._roots[o],this.uint16Array=e=new Uint16Array(i),this.uint32Array=t=new Uint32Array(i)},this.reset=()=>{this.root=null,this.buffer=i=null,this.uint16Array=e=null,this.uint32Array=t=null},this.getRangeStart=s=>{let o=s*2;for(;!Kt(o,e);)s=ne(s),o=s*2;return oe(s,t)},this.getRangeEnd=s=>{let o=s*2;for(;!Kt(o,e);)s=ie(s,t),o=s*2;return oe(s,t)+fe(o,e)};let r=(s,o,a)=>{let h=o*2,l=Kt(h,e);if(!s(a,l,o)&&!l){let d=ne(o),m=ie(o,t);r(s,d,a+1),r(s,m,a+1)}};this.traverseBuffer=s=>{if(n)throw new Error("BVHTraversalHelper: cannot start a traversal during an active traversal.");n=!0;try{r(s,0,0)}finally{n=!1}},this.traverse=s=>{this.traverseBuffer((o,a,h)=>{if(a){let l=h*2,f=t[h+6],d=e[l+14];return s(o,a,new Float32Array(i,h*4,6),f,d)}else{let l=Kr(h,t);return s(o,a,new Float32Array(i,h*4,6),l)}})}}};var Cp=new ve,is=new Float32Array(6),jc=class{constructor(){this._roots=null,this.primitiveBuffer=null,this.primitiveBufferStride=null}init(t){t={...Wc,...t},"maxLeafSize"in t&&(console.warn('BVH: "maxLeafSize" option has been deprecated. Use "targetLeafSize", instead.'),t={...t,targetLeafSize:t.maxLeafSize}),wp(this,t)}getRootRanges(){throw new Error("BVH: getRootRanges() not implemented")}writePrimitiveBounds(){throw new Error("BVH: writePrimitiveBounds() not implemented")}writePrimitiveRangeBounds(t,e,n,r){let s=1/0,o=1/0,a=1/0,h=-1/0,l=-1/0,f=-1/0;for(let d=t,m=t+e;d<m;d++){this.writePrimitiveBounds(d,is,0);let[g,y,b,x,_,T]=is;g<s&&(s=g),x>h&&(h=x),y<o&&(o=y),_>l&&(l=_),b<a&&(a=b),T>f&&(f=T)}return n[r+0]=s,n[r+1]=o,n[r+2]=a,n[r+3]=h,n[r+4]=l,n[r+5]=f,n}computePrimitiveBounds(t,e,n){let r=n.offset||0;for(let s=t,o=t+e;s<o;s++){this.writePrimitiveBounds(s,is,0);let[a,h,l,f,d,m]=is,g=(a+f)/2,y=(h+d)/2,b=(l+m)/2,x=(f-a)/2,_=(d-h)/2,T=(m-l)/2,p=(s-r)*6;n[p+0]=g,n[p+1]=x+(Math.abs(g)+x)*$r,n[p+2]=y,n[p+3]=_+(Math.abs(y)+_)*$r,n[p+4]=b,n[p+5]=T+(Math.abs(b)+T)*$r}return n}shiftPrimitiveOffsets(t){let e=this._indirectBuffer;if(e)for(let n=0,r=e.length;n<r;n++)e[n]+=t;else{let n=this._roots;for(let r=0;r<n.length;r++){let s=n[r],o=new Uint32Array(s),a=new Uint16Array(s),h=s.byteLength/32;for(let l=0;l<h;l++){let f=8*l,d=2*f;Kt(d,a)&&(o[f+6]+=t)}}}}traverse(t,e=0){Kc.setBVH(this,e),Kc.traverse(t),Kc.reset()}refit(){let t=this._roots;for(let e=0,n=t.length;e<n;e++){let r=t[e],s=new Uint32Array(r),o=new Uint16Array(r),a=new Float32Array(r),h=r.byteLength/32;for(let l=h-1;l>=0;l--){let f=l*8,d=f*2;if(Kt(d,o)){let g=oe(f,s),y=fe(d,o);this.writePrimitiveRangeBounds(g,y,is,0),a.set(is,f)}else{let g=ne(f),y=ie(f,s);for(let b=0;b<3;b++){let x=a[g+b],_=a[g+b+3],T=a[y+b],p=a[y+b+3];a[f+b]=x<T?x:T,a[f+b+3]=_>p?_:p}}}}}getBoundingBox(t){return t.makeEmpty(),this._roots.forEach(n=>{me(0,new Float32Array(n),Cp),t.union(Cp)}),t}shapecast(t){let{boundsTraverseOrder:e,intersectsBounds:n,intersectsRange:r,intersectsPrimitive:s,scratchPrimitive:o,iterate:a}=t;if(r&&s){let d=r;r=(m,g,y,b,x)=>d(m,g,y,b,x)?!0:a(m,g,this,s,y,b,o)}else r||(s?r=(d,m,g,y)=>a(d,m,this,s,g,y,o):r=(d,m,g)=>g);let h=!1,l=0,f=this._roots;for(let d=0,m=f.length;d<m;d++){let g=f[d];if(h=Ep(this,d,n,r,e,l),h)break;l+=g.byteLength/32}return h}bvhcast(t,e,n){let{intersectsRanges:r}=n;return Ap(this,t,e,r)}};function Rp(){return typeof SharedArrayBuffer<"u"}function Tu(i){return i.index?i.index.count:i.attributes.position.count}function Ai(i){return Tu(i)/3}function AM(i,t=ArrayBuffer){return i>65535?new Uint32Array(new t(4*i)):new Uint16Array(new t(2*i))}function Ip(i,t){if(!i.index){let e=i.attributes.position.count,n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,r=AM(e,n);i.setIndex(new pe(r,1));for(let s=0;s<e;s++)r[s]=s}}function CM(i,t,e){let n=Tu(i)/e,r=t||i.drawRange,s=r.start/e,o=(r.start+r.count)/e,a=Math.max(0,s),h=Math.min(n,o)-a;return{offset:Math.floor(a),count:Math.floor(h)}}function RM(i,t){return i.groups.map(e=>({offset:e.start/t,count:e.count/t}))}function wu(i,t,e){let n=CM(i,t,e),r=RM(i,e);if(!r.length)return[n];let s=[],o=n.offset,a=n.offset+n.count,h=Tu(i)/e,l=[];for(let m of r){let{offset:g,count:y}=m,b=g,x=isFinite(y)?y:h-g,_=g+x;b<a&&_>o&&(l.push({pos:Math.max(o,b),isStart:!0}),l.push({pos:Math.min(a,_),isStart:!1}))}l.sort((m,g)=>m.pos!==g.pos?m.pos-g.pos:m.type==="end"?-1:1);let f=0,d=null;for(let m of l){let g=m.pos;f!==0&&g!==d&&s.push({offset:d,count:g-d}),f+=m.isStart?1:-1,d=g}return s}function IM(i,t){let e=i[i.length-1],n=e.offset+e.count>2**16,r=i.reduce((l,f)=>l+f.count,0),s=n?4:2,o=t?new SharedArrayBuffer(r*s):new ArrayBuffer(r*s),a=n?new Uint32Array(o):new Uint16Array(o),h=0;for(let l=0;l<i.length;l++){let{offset:f,count:d}=i[l];for(let m=0;m<d;m++)a[h+m]=f+m;h+=d}return a}var Qc=class extends jc{get indirect(){return!!this._indirectBuffer}get primitiveStride(){return null}get primitiveBufferStride(){return this.indirect?1:this.primitiveStride}set primitiveBufferStride(t){}get primitiveBuffer(){return this.indirect?this._indirectBuffer:this.geometry.index.array}set primitiveBuffer(t){}constructor(t,e={}){if(t.isBufferGeometry){if(t.index&&t.index.isInterleavedBufferAttribute)throw new Error("BVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("BVH: Only BufferGeometries are supported.");if(e.useSharedArrayBuffer&&!Rp())throw new Error("BVH: SharedArrayBuffer is not available.");super(),this.geometry=t,this.resolvePrimitiveIndex=e.indirect?n=>this._indirectBuffer[n]:n=>n,this.primitiveBuffer=null,this.primitiveBufferStride=null,this._indirectBuffer=null,e={...Wc,...e},e[ro]||this.init(e)}init(t){let{geometry:e,primitiveStride:n}=this;if(t.indirect){let r=wu(e,t.range,n),s=IM(r,t.useSharedArrayBuffer);this._indirectBuffer=s}else Ip(e,t);super.init(t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new ve))}getRootRanges(t){return this.indirect?[{offset:0,count:this._indirectBuffer.length}]:wu(this.geometry,t,this.primitiveStride)}raycastObject3D(){throw new Error("BVH: raycastObject3D() not implemented")}};var un=class{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(t,e){let n=1/0,r=-1/0;for(let s=0,o=t.length;s<o;s++){let h=t[s][e];n=h<n?h:n,r=h>r?h:r}this.min=n,this.max=r}setFromPoints(t,e){let n=1/0,r=-1/0;for(let s=0,o=e.length;s<o;s++){let a=e[s],h=t.dot(a);n=h<n?h:n,r=h>r?h:r}this.min=n,this.max=r}isSeparated(t){return this.min>t.max||t.min>this.max}};un.prototype.setFromBox=(function(){let i=new D;return function(e,n){let r=n.min,s=n.max,o=1/0,a=-1/0;for(let h=0;h<=1;h++)for(let l=0;l<=1;l++)for(let f=0;f<=1;f++){i.x=r.x*h+s.x*(1-h),i.y=r.y*l+s.y*(1-l),i.z=r.z*f+s.z*(1-f);let d=e.dot(i);o=Math.min(d,o),a=Math.max(d,a)}this.min=o,this.max=a}})();var PM=(function(){let i=new D,t=new D,e=new D;return function(r,s,o){let a=r.start,h=i,l=s.start,f=t;e.subVectors(a,l),i.subVectors(r.end,r.start),t.subVectors(s.end,s.start);let d=e.dot(f),m=f.dot(h),g=f.dot(f),y=e.dot(h),x=h.dot(h)*g-m*m,_,T;x!==0?_=(d*m-y*g)/x:_=0,T=(d+_*m)/g,o.x=_,o.y=T}})(),co=(function(){let i=new ot,t=new D,e=new D;return function(r,s,o,a){PM(r,s,i);let h=i.x,l=i.y;if(h>=0&&h<=1&&l>=0&&l<=1){r.at(h,o),s.at(l,a);return}else if(h>=0&&h<=1){l<0?s.at(0,a):s.at(1,a),r.closestPointToPoint(a,!0,o);return}else if(l>=0&&l<=1){h<0?r.at(0,o):r.at(1,o),s.closestPointToPoint(o,!0,a);return}else{let f;h<0?f=r.start:f=r.end;let d;l<0?d=s.start:d=s.end;let m=t,g=e;if(r.closestPointToPoint(d,!0,t),s.closestPointToPoint(f,!0,e),m.distanceToSquared(d)<=g.distanceToSquared(f)){o.copy(m),a.copy(d);return}else{o.copy(f),a.copy(g);return}}}})(),Pp=(function(){let i=new D,t=new D,e=new Ae,n=new he;return function(s,o){let{radius:a,center:h}=s,{a:l,b:f,c:d}=o;if(n.start=l,n.end=f,n.closestPointToPoint(h,!0,i).distanceTo(h)<=a||(n.start=l,n.end=d,n.closestPointToPoint(h,!0,i).distanceTo(h)<=a)||(n.start=f,n.end=d,n.closestPointToPoint(h,!0,i).distanceTo(h)<=a))return!0;let b=o.getPlane(e);if(Math.abs(b.distanceToPoint(h))<=a){let _=b.projectPoint(h,t);if(o.containsPoint(_))return!0}return!1}})();var DM=["x","y","z"],ri=1e-15,Dp=ri*ri;function Mn(i){return Math.abs(i)<ri}var we=class extends le{constructor(...t){super(...t),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new D),this.satBounds=new Array(4).fill().map(()=>new un),this.points=[this.a,this.b,this.c],this.plane=new Ae,this.isDegenerateIntoSegment=!1,this.isDegenerateIntoPoint=!1,this.degenerateSegment=new he,this.needsUpdate=!0}intersectsSphere(t){return Pp(t,this)}update(){let t=this.a,e=this.b,n=this.c,r=this.points,s=this.satAxes,o=this.satBounds,a=s[0],h=o[0];this.getNormal(a),h.setFromPoints(a,r);let l=s[1],f=o[1];l.subVectors(t,e),f.setFromPoints(l,r);let d=s[2],m=o[2];d.subVectors(e,n),m.setFromPoints(d,r);let g=s[3],y=o[3];g.subVectors(n,t),y.setFromPoints(g,r);let b=l.length(),x=d.length(),_=g.length();this.isDegenerateIntoPoint=!1,this.isDegenerateIntoSegment=!1,b<ri?x<ri||_<ri?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(t),this.degenerateSegment.end.copy(n)):x<ri?_<ri?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(e),this.degenerateSegment.end.copy(t)):_<ri&&(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(n),this.degenerateSegment.end.copy(e)),this.plane.setFromNormalAndCoplanarPoint(a,t),this.needsUpdate=!1}};we.prototype.closestPointToSegment=(function(){let i=new D,t=new D,e=new he;return function(r,s=null,o=null){let{start:a,end:h}=r,l=this.points,f,d=1/0;for(let m=0;m<3;m++){let g=(m+1)%3;e.start.copy(l[m]),e.end.copy(l[g]),co(e,r,i,t),f=i.distanceToSquared(t),f<d&&(d=f,s&&s.copy(i),o&&o.copy(t))}return this.closestPointToPoint(a,i),f=a.distanceToSquared(i),f<d&&(d=f,s&&s.copy(i),o&&o.copy(a)),this.closestPointToPoint(h,i),f=h.distanceToSquared(i),f<d&&(d=f,s&&s.copy(i),o&&o.copy(h)),Math.sqrt(d)}})();we.prototype.intersectsTriangle=(function(){let i=new we,t=new un,e=new un,n=new D,r=new D,s=new D,o=new D,a=new he,h=new he,l=new D,f=new ot,d=new ot;function m(p,c,v,u){let C=n;!p.isDegenerateIntoPoint&&!p.isDegenerateIntoSegment?C.copy(p.plane.normal):C.copy(c.plane.normal);let E=p.satBounds,S=p.satAxes;for(let A=1;A<4;A++){let R=E[A],U=S[A];if(t.setFromPoints(U,c.points),R.isSeparated(t)||(o.copy(C).cross(U),t.setFromPoints(o,p.points),e.setFromPoints(o,c.points),t.isSeparated(e)))return!1}let M=c.satBounds,w=c.satAxes;for(let A=1;A<4;A++){let R=M[A],U=w[A];if(t.setFromPoints(U,p.points),R.isSeparated(t)||(o.crossVectors(C,U),t.setFromPoints(o,p.points),e.setFromPoints(o,c.points),t.isSeparated(e)))return!1}return v&&(u||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),v.start.set(0,0,0),v.end.set(0,0,0)),!0}function g(p,c,v,u,C,E,S,M,w,A,R){let U=S/(S-M);A.x=u+(C-u)*U,R.start.subVectors(c,p).multiplyScalar(U).add(p),U=S/(S-w),A.y=u+(E-u)*U,R.end.subVectors(v,p).multiplyScalar(U).add(p)}function y(p,c,v,u,C,E,S,M,w,A,R){if(C>0)g(p.c,p.a,p.b,u,c,v,w,S,M,A,R);else if(E>0)g(p.b,p.a,p.c,v,c,u,M,S,w,A,R);else if(M*w>0||S!=0)g(p.a,p.b,p.c,c,v,u,S,M,w,A,R);else if(M!=0)g(p.b,p.a,p.c,v,c,u,M,S,w,A,R);else if(w!=0)g(p.c,p.a,p.b,u,c,v,w,S,M,A,R);else return!0;return!1}function b(p,c,v,u){let C=c.degenerateSegment,E=p.plane.distanceToPoint(C.start),S=p.plane.distanceToPoint(C.end);return Mn(E)?Mn(S)?m(p,c,v,u):(v&&(v.start.copy(C.start),v.end.copy(C.start)),p.containsPoint(C.start)):Mn(S)?(v&&(v.start.copy(C.end),v.end.copy(C.end)),p.containsPoint(C.end)):p.plane.intersectLine(C,n)!=null?(v&&(v.start.copy(n),v.end.copy(n)),p.containsPoint(n)):!1}function x(p,c,v){let u=c.a;return Mn(p.plane.distanceToPoint(u))&&p.containsPoint(u)?(v&&(v.start.copy(u),v.end.copy(u)),!0):!1}function _(p,c,v){let u=p.degenerateSegment,C=c.a;return u.closestPointToPoint(C,!0,n),C.distanceToSquared(n)<Dp?(v&&(v.start.copy(C),v.end.copy(C)),!0):!1}function T(p,c,v,u){if(p.isDegenerateIntoSegment)if(c.isDegenerateIntoSegment){let C=p.degenerateSegment,E=c.degenerateSegment,S=r,M=s;C.delta(S),E.delta(M);let w=n.subVectors(E.start,C.start),A=S.x*M.y-S.y*M.x;if(Mn(A))return!1;let R=(w.x*M.y-w.y*M.x)/A,U=-(S.x*w.y-S.y*w.x)/A;if(R<0||R>1||U<0||U>1)return!1;let F=C.start.z+S.z*R,B=E.start.z+M.z*U;return Mn(F-B)?(v&&(v.start.copy(C.start).addScaledVector(S,R),v.end.copy(C.start).addScaledVector(S,R)),!0):!1}else return c.isDegenerateIntoPoint?_(p,c,v):b(c,p,v,u);else{if(p.isDegenerateIntoPoint)return c.isDegenerateIntoPoint?c.a.distanceToSquared(p.a)<Dp?(v&&(v.start.copy(p.a),v.end.copy(p.a)),!0):!1:c.isDegenerateIntoSegment?_(c,p,v):x(c,p,v);if(c.isDegenerateIntoPoint)return x(p,c,v);if(c.isDegenerateIntoSegment)return b(p,c,v,u)}}return function(c,v=null,u=!1){this.needsUpdate&&this.update(),c.isExtendedTriangle?c.needsUpdate&&c.update():(i.copy(c),i.update(),c=i);let C=T(this,c,v,u);if(C!==void 0)return C;let E=this.plane,S=c.plane,M=S.distanceToPoint(this.a),w=S.distanceToPoint(this.b),A=S.distanceToPoint(this.c);Mn(M)&&(M=0),Mn(w)&&(w=0),Mn(A)&&(A=0);let R=M*w,U=M*A;if(R>0&&U>0)return!1;let F=E.distanceToPoint(c.a),B=E.distanceToPoint(c.b),k=E.distanceToPoint(c.c);Mn(F)&&(F=0),Mn(B)&&(B=0),Mn(k)&&(k=0);let O=F*B,Z=F*k;if(O>0&&Z>0)return!1;r.copy(E.normal),s.copy(S.normal);let at=r.cross(s),it=0,ut=Math.abs(at.x),Mt=Math.abs(at.y);Mt>ut&&(ut=Mt,it=1),Math.abs(at.z)>ut&&(it=2);let yt=DM[it],$=this.a[yt],Q=this.b[yt],ct=this.c[yt],lt=c.a[yt],ht=c.b[yt],At=c.c[yt];if(y(this,$,Q,ct,R,U,M,w,A,f,a))return m(this,c,v,u);if(y(c,lt,ht,At,O,Z,F,B,k,d,h))return m(this,c,v,u);if(f.y<f.x){let qt=f.y;f.y=f.x,f.x=qt,l.copy(a.start),a.start.copy(a.end),a.end.copy(l)}if(d.y<d.x){let qt=d.y;d.y=d.x,d.x=qt,l.copy(h.start),h.start.copy(h.end),h.end.copy(l)}return f.y<d.x||d.y<f.x?!1:(v&&(d.x>f.x?v.start.copy(h.start):v.start.copy(a.start),d.y<f.y?v.end.copy(h.end):v.end.copy(a.end)),!0)}})();we.prototype.distanceToPoint=(function(){let i=new D;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}})();we.prototype.distanceToTriangle=(function(){let i=new D,t=new D,e=["a","b","c"],n=new he,r=new he;return function(o,a=null,h=null){let l=a||h?n:null;if(this.intersectsTriangle(o,l,!0))return(a||h)&&(a&&l.getCenter(a),h&&l.getCenter(h)),0;let f=1/0;for(let d=0;d<3;d++){let m,g=e[d],y=o[g];this.closestPointToPoint(y,i),m=y.distanceToSquared(i),m<f&&(f=m,a&&a.copy(i),h&&h.copy(y));let b=this[g];o.closestPointToPoint(b,i),m=b.distanceToSquared(i),m<f&&(f=m,a&&a.copy(b),h&&h.copy(i))}for(let d=0;d<3;d++){let m=e[d],g=e[(d+1)%3];n.set(this[m],this[g]);for(let y=0;y<3;y++){let b=e[y],x=e[(y+1)%3];r.set(o[b],o[x]),co(n,r,i,t);let _=i.distanceToSquared(t);_<f&&(f=_,a&&a.copy(i),h&&h.copy(t))}}return Math.sqrt(f)}})();var Ee=class{constructor(t,e,n){this.isOrientedBox=!0,this.min=new D,this.max=new D,this.matrix=new kt,this.invMatrix=new kt,this.points=new Array(8).fill().map(()=>new D),this.satAxes=new Array(3).fill().map(()=>new D),this.satBounds=new Array(3).fill().map(()=>new un),this.alignedSatBounds=new Array(3).fill().map(()=>new un),this.needsUpdate=!1,t&&this.min.copy(t),e&&this.max.copy(e),n&&this.matrix.copy(n)}set(t,e,n){this.min.copy(t),this.max.copy(e),this.matrix.copy(n),this.needsUpdate=!0}copy(t){this.min.copy(t.min),this.max.copy(t.max),this.matrix.copy(t.matrix),this.needsUpdate=!0}};Ee.prototype.update=(function(){return function(){let t=this.matrix,e=this.min,n=this.max,r=this.points;for(let l=0;l<=1;l++)for(let f=0;f<=1;f++)for(let d=0;d<=1;d++){let m=1*l|2*f|4*d,g=r[m];g.x=l?n.x:e.x,g.y=f?n.y:e.y,g.z=d?n.z:e.z,g.applyMatrix4(t)}let s=this.satBounds,o=this.satAxes,a=r[0];for(let l=0;l<3;l++){let f=o[l],d=s[l],m=1<<l,g=r[m];f.subVectors(a,g),d.setFromPoints(f,r)}let h=this.alignedSatBounds;h[0].setFromPointsField(r,"x"),h[1].setFromPointsField(r,"y"),h[2].setFromPointsField(r,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}})();Ee.prototype.intersectsBox=(function(){let i=new un;return function(e){this.needsUpdate&&this.update();let n=e.min,r=e.max,s=this.satBounds,o=this.satAxes,a=this.alignedSatBounds;if(i.min=n.x,i.max=r.x,a[0].isSeparated(i)||(i.min=n.y,i.max=r.y,a[1].isSeparated(i))||(i.min=n.z,i.max=r.z,a[2].isSeparated(i)))return!1;for(let h=0;h<3;h++){let l=o[h],f=s[h];if(i.setFromBox(l,e),f.isSeparated(i))return!1}return!0}})();Ee.prototype.intersectsTriangle=(function(){let i=new we,t=new Array(3),e=new un,n=new un,r=new D;return function(o){this.needsUpdate&&this.update(),o.isExtendedTriangle?o.needsUpdate&&o.update():(i.copy(o),i.update(),o=i);let a=this.satBounds,h=this.satAxes;t[0]=o.a,t[1]=o.b,t[2]=o.c;for(let m=0;m<3;m++){let g=a[m],y=h[m];if(e.setFromPoints(y,t),g.isSeparated(e))return!1}let l=o.satBounds,f=o.satAxes,d=this.points;for(let m=0;m<3;m++){let g=l[m],y=f[m];if(e.setFromPoints(y,d),g.isSeparated(e))return!1}for(let m=0;m<3;m++){let g=h[m];for(let y=0;y<4;y++){let b=f[y];if(r.crossVectors(g,b),e.setFromPoints(r,t),n.setFromPoints(r,d),e.isSeparated(n))return!1}}return!0}})();Ee.prototype.closestPointToPoint=(function(){return function(t,e){return this.needsUpdate&&this.update(),e.copy(t).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),e}})();Ee.prototype.distanceToPoint=(function(){let i=new D;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}})();Ee.prototype.distanceToBox=(function(){let i=["x","y","z"],t=new Array(12).fill().map(()=>new he),e=new Array(12).fill().map(()=>new he),n=new D,r=new D;return function(o,a=0,h=null,l=null){if(this.needsUpdate&&this.update(),this.intersectsBox(o))return(h||l)&&(o.getCenter(r),this.closestPointToPoint(r,n),o.closestPointToPoint(n,r),h&&h.copy(n),l&&l.copy(r)),0;let f=a*a,d=o.min,m=o.max,g=this.points,y=1/0;for(let x=0;x<8;x++){let _=g[x];r.copy(_).clamp(d,m);let T=_.distanceToSquared(r);if(T<y&&(y=T,h&&h.copy(_),l&&l.copy(r),T<f))return Math.sqrt(T)}let b=0;for(let x=0;x<3;x++)for(let _=0;_<=1;_++)for(let T=0;T<=1;T++){let p=(x+1)%3,c=(x+2)%3,v=_<<p|T<<c,u=1<<x|_<<p|T<<c,C=g[v],E=g[u];t[b].set(C,E);let M=i[x],w=i[p],A=i[c],R=e[b],U=R.start,F=R.end;U[M]=d[M],U[w]=_?d[w]:m[w],U[A]=T?d[A]:m[w],F[M]=m[M],F[w]=_?d[w]:m[w],F[A]=T?d[A]:m[w],b++}for(let x=0;x<=1;x++)for(let _=0;_<=1;_++)for(let T=0;T<=1;T++){r.x=x?m.x:d.x,r.y=_?m.y:d.y,r.z=T?m.z:d.z,this.closestPointToPoint(r,n);let p=r.distanceToSquared(n);if(p<y&&(y=p,h&&h.copy(n),l&&l.copy(r),p<f))return Math.sqrt(p)}for(let x=0;x<12;x++){let _=t[x];for(let T=0;T<12;T++){let p=e[T];co(_,p,n,r);let c=n.distanceToSquared(r);if(c<y&&(y=c,h&&h.copy(n),l&&l.copy(r),c<f))return Math.sqrt(c)}}return Math.sqrt(y)}})();var Eu=class extends Ti{constructor(){super(()=>new we)}},Ze=new Eu;var lo=new D,Au=new D;function Lp(i,t,e={},n=0,r=1/0){let s=n*n,o=r*r,a=1/0,h=null;if(i.shapecast({boundsTraverseOrder:f=>(lo.copy(t).clamp(f.min,f.max),lo.distanceToSquared(t)),intersectsBounds:(f,d,m)=>m<a&&m<o,intersectsTriangle:(f,d)=>{f.closestPointToPoint(t,lo);let m=t.distanceToSquared(lo);return m<a&&(Au.copy(lo),a=m,h=d),m<s}}),a===1/0)return null;let l=Math.sqrt(a);return e.point?e.point.copy(Au):e.point=Au.clone(),e.distance=l,e.faceIndex=h,e}var tl=parseInt("180")>=169,LM=parseInt("180")<=161,Qi=new D,tr=new D,er=new D,el=new ot,nl=new ot,il=new ot,Np=new D,Up=new D,Fp=new D,ho=new D;function NM(i,t,e,n,r,s,o,a){let h;if(s===Be?h=i.intersectTriangle(n,e,t,!0,r):h=i.intersectTriangle(t,e,n,s!==Ye,r),h===null)return null;let l=i.origin.distanceTo(r);return l<o||l>a?null:{distance:l,point:r.clone()}}function Bp(i,t,e,n,r,s,o,a,h,l,f){Qi.fromBufferAttribute(t,s),tr.fromBufferAttribute(t,o),er.fromBufferAttribute(t,a);let d=NM(i,Qi,tr,er,ho,h,l,f);if(d){if(n){el.fromBufferAttribute(n,s),nl.fromBufferAttribute(n,o),il.fromBufferAttribute(n,a),d.uv=new ot;let g=le.getInterpolation(ho,Qi,tr,er,el,nl,il,d.uv);tl||(d.uv=g)}if(r){el.fromBufferAttribute(r,s),nl.fromBufferAttribute(r,o),il.fromBufferAttribute(r,a),d.uv1=new ot;let g=le.getInterpolation(ho,Qi,tr,er,el,nl,il,d.uv1);tl||(d.uv1=g),LM&&(d.uv2=d.uv1)}if(e){Np.fromBufferAttribute(e,s),Up.fromBufferAttribute(e,o),Fp.fromBufferAttribute(e,a),d.normal=new D;let g=le.getInterpolation(ho,Qi,tr,er,Np,Up,Fp,d.normal);d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1),tl||(d.normal=g)}let m={a:s,b:o,c:a,normal:new D,materialIndex:0};if(le.getNormal(Qi,tr,er,m.normal),d.face=m,d.faceIndex=s,tl){let g=new D;le.getBarycoord(ho,Qi,tr,er,g),d.barycoord=g}}return d}function Op(i){return i&&i.isMaterial?i.side:i}function rs(i,t,e,n,r,s,o){let a=n*3,h=a+0,l=a+1,f=a+2,{index:d,groups:m}=i;i.index&&(h=d.getX(h),l=d.getX(l),f=d.getX(f));let{position:g,normal:y,uv:b,uv1:x}=i.attributes;if(Array.isArray(t)){let _=n*3;for(let T=0,p=m.length;T<p;T++){let{start:c,count:v,materialIndex:u}=m[T];if(_>=c&&_<c+v){let C=Op(t[u]),E=Bp(e,g,y,b,x,h,l,f,C,s,o);if(E)if(E.faceIndex=n,E.face.materialIndex=u,r)r.push(E);else return E}}}else{let _=Op(t),T=Bp(e,g,y,b,x,h,l,f,_,s,o);if(T)if(T.faceIndex=n,T.face.materialIndex=0,r)r.push(T);else return T}return null}function ge(i,t,e,n){let r=i.a,s=i.b,o=i.c,a=t,h=t+1,l=t+2;e&&(a=e.getX(a),h=e.getX(h),l=e.getX(l)),r.x=n.getX(a),r.y=n.getY(a),r.z=n.getZ(a),s.x=n.getX(h),s.y=n.getY(h),s.z=n.getZ(h),o.x=n.getX(l),o.y=n.getY(l),o.z=n.getZ(l)}function zp(i,t,e,n,r,s,o,a){let{geometry:h,_indirectBuffer:l}=i;for(let f=n,d=n+r;f<d;f++)rs(h,t,e,f,s,o,a)}function Vp(i,t,e,n,r,s,o){let{geometry:a,_indirectBuffer:h}=i,l=1/0,f=null;for(let d=n,m=n+r;d<m;d++){let g;g=rs(a,t,e,d,null,s,o),g&&g.distance<l&&(f=g,l=g.distance)}return f}function kp(i,t,e,n,r,s,o){let{geometry:a}=e,{index:h}=a,l=a.attributes.position;for(let f=i,d=t+i;f<d;f++){let m;if(m=f,ge(o,m*3,h,l),o.needsUpdate=!0,n(o,m,r,s))return!0}return!1}function Hp(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));let e=i.geometry,n=e.index?e.index.array:null,r=e.attributes.position,s,o,a,h,l=0,f=i._roots;for(let m=0,g=f.length;m<g;m++)s=f[m],o=new Uint32Array(s),a=new Uint16Array(s),h=new Float32Array(s),d(0,l),l+=s.byteLength;function d(m,g,y=!1){let b=m*2;if(Kt(b,a)){let x=oe(m,o),_=fe(b,a),T=1/0,p=1/0,c=1/0,v=-1/0,u=-1/0,C=-1/0;for(let E=3*x,S=3*(x+_);E<S;E++){let M=n[E],w=r.getX(M),A=r.getY(M),R=r.getZ(M);w<T&&(T=w),w>v&&(v=w),A<p&&(p=A),A>u&&(u=A),R<c&&(c=R),R>C&&(C=R)}return h[m+0]!==T||h[m+1]!==p||h[m+2]!==c||h[m+3]!==v||h[m+4]!==u||h[m+5]!==C?(h[m+0]=T,h[m+1]=p,h[m+2]=c,h[m+3]=v,h[m+4]=u,h[m+5]=C,!0):!1}else{let x=ne(m),_=ie(m,o),T=y,p=!1,c=!1;if(t){if(!T){let M=x/8+g/32,w=_/8+g/32;p=t.has(M),c=t.has(w),T=!p&&!c}}else p=!0,c=!0;let v=T||p,u=T||c,C=!1;v&&(C=d(x,g,T));let E=!1;u&&(E=d(_,g,T));let S=C||E;if(S)for(let M=0;M<3;M++){let w=x+M,A=_+M,R=h[w],U=h[w+3],F=h[A],B=h[A+3];h[m+M]=R<F?R:F,h[m+M+3]=U>B?U:B}return S}}}function Sn(i,t,e,n,r){let s,o,a,h,l,f,d=1/e.direction.x,m=1/e.direction.y,g=1/e.direction.z,y=e.origin.x,b=e.origin.y,x=e.origin.z,_=t[i],T=t[i+3],p=t[i+1],c=t[i+3+1],v=t[i+2],u=t[i+3+2];return d>=0?(s=(_-y)*d,o=(T-y)*d):(s=(T-y)*d,o=(_-y)*d),m>=0?(a=(p-b)*m,h=(c-b)*m):(a=(c-b)*m,h=(p-b)*m),s>h||a>o||((a>s||isNaN(s))&&(s=a),(h<o||isNaN(o))&&(o=h),g>=0?(l=(v-x)*g,f=(u-x)*g):(l=(u-x)*g,f=(v-x)*g),s>f||l>o)?!1:((l>s||s!==s)&&(s=l),(f<o||o!==o)&&(o=f),s<=r&&o>=n)}function Gp(i,t,e,n,r,s,o,a){let{geometry:h,_indirectBuffer:l}=i;for(let f=n,d=n+r;f<d;f++){let m=l?l[f]:f;rs(h,t,e,m,s,o,a)}}function Wp(i,t,e,n,r,s,o){let{geometry:a,_indirectBuffer:h}=i,l=1/0,f=null;for(let d=n,m=n+r;d<m;d++){let g;g=rs(a,t,e,h?h[d]:d,null,s,o),g&&g.distance<l&&(f=g,l=g.distance)}return f}function Xp(i,t,e,n,r,s,o){let{geometry:a}=e,{index:h}=a,l=a.attributes.position;for(let f=i,d=t+i;f<d;f++){let m;if(m=e.resolveTriangleIndex(f),ge(o,m*3,h,l),o.needsUpdate=!0,n(o,m,r,s))return!0}return!1}function qp(i,t,e,n,r,s,o){Qt.setBuffer(i._roots[t]),Cu(0,i,e,n,r,s,o),Qt.clearBuffer()}function Cu(i,t,e,n,r,s,o){let{float32Array:a,uint16Array:h,uint32Array:l}=Qt,f=i*2;if(Kt(f,h)){let m=oe(i,l),g=fe(f,h);zp(t,e,n,m,g,r,s,o)}else{let m=ne(i);Sn(m,a,n,s,o)&&Cu(m,t,e,n,r,s,o);let g=ie(i,l);Sn(g,a,n,s,o)&&Cu(g,t,e,n,r,s,o)}}var UM=["x","y","z"];function Yp(i,t,e,n,r,s){Qt.setBuffer(i._roots[t]);let o=Ru(0,i,e,n,r,s);return Qt.clearBuffer(),o}function Ru(i,t,e,n,r,s){let{float32Array:o,uint16Array:a,uint32Array:h}=Qt,l=i*2;if(Kt(l,a)){let d=oe(i,h),m=fe(l,a);return Vp(t,e,n,d,m,r,s)}else{let d=Kr(i,h),m=UM[d],y=n.direction[m]>=0,b,x;y?(b=ne(i),x=ie(i,h)):(b=ie(i,h),x=ne(i));let T=Sn(b,o,n,r,s)?Ru(b,t,e,n,r,s):null;if(T){let v=T.point[m];if(y?v<=o[x+d]:v>=o[x+d+3])return T}let c=Sn(x,o,n,r,s)?Ru(x,t,e,n,r,s):null;return T&&c?T.distance<=c.distance?T:c:T||c||null}}var rl=new ve,ss=new we,os=new we,uo=new kt,Zp=new Ee,sl=new Ee;function $p(i,t,e,n){Qt.setBuffer(i._roots[t]);let r=Iu(0,i,e,n);return Qt.clearBuffer(),r}function Iu(i,t,e,n,r=null){let{float32Array:s,uint16Array:o,uint32Array:a}=Qt,h=i*2;if(r===null&&(e.boundingBox||e.computeBoundingBox(),Zp.set(e.boundingBox.min,e.boundingBox.max,n),r=Zp),Kt(h,o)){let f=t.geometry,d=f.index,m=f.attributes.position,g=e.index,y=e.attributes.position,b=oe(i,a),x=fe(h,o);if(uo.copy(n).invert(),e.boundsTree)return me(i,s,sl),sl.matrix.copy(uo),sl.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:T=>sl.intersectsBox(T),intersectsTriangle:T=>{T.a.applyMatrix4(n),T.b.applyMatrix4(n),T.c.applyMatrix4(n),T.needsUpdate=!0;for(let p=b*3,c=(x+b)*3;p<c;p+=3)if(ge(os,p,d,m),os.needsUpdate=!0,T.intersectsTriangle(os))return!0;return!1}});{let _=Ai(e);for(let T=b*3,p=(x+b)*3;T<p;T+=3){ge(ss,T,d,m),ss.a.applyMatrix4(uo),ss.b.applyMatrix4(uo),ss.c.applyMatrix4(uo),ss.needsUpdate=!0;for(let c=0,v=_*3;c<v;c+=3)if(ge(os,c,g,y),os.needsUpdate=!0,ss.intersectsTriangle(os))return!0}}}else{let f=ne(i),d=ie(i,a);return me(f,s,rl),!!(r.intersectsBox(rl)&&Iu(f,t,e,n,r)||(me(d,s,rl),r.intersectsBox(rl)&&Iu(d,t,e,n,r)))}}var ol=new kt,Pu=new Ee,fo=new Ee,FM=new D,BM=new D,OM=new D,zM=new D;function Jp(i,t,e,n={},r={},s=0,o=1/0){t.boundingBox||t.computeBoundingBox(),Pu.set(t.boundingBox.min,t.boundingBox.max,e),Pu.needsUpdate=!0;let a=i.geometry,h=a.attributes.position,l=a.index,f=t.attributes.position,d=t.index,m=Ze.getPrimitive(),g=Ze.getPrimitive(),y=FM,b=BM,x=null,_=null;r&&(x=OM,_=zM);let T=1/0,p=null,c=null;return ol.copy(e).invert(),fo.matrix.copy(ol),i.shapecast({boundsTraverseOrder:v=>Pu.distanceToBox(v),intersectsBounds:(v,u,C)=>C<T&&C<o?(u&&(fo.min.copy(v.min),fo.max.copy(v.max),fo.needsUpdate=!0),!0):!1,intersectsRange:(v,u)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:E=>fo.distanceToBox(E),intersectsBounds:(E,S,M)=>M<T&&M<o,intersectsRange:(E,S)=>{for(let M=E,w=E+S;M<w;M++){ge(g,3*M,d,f),g.a.applyMatrix4(e),g.b.applyMatrix4(e),g.c.applyMatrix4(e),g.needsUpdate=!0;for(let A=v,R=v+u;A<R;A++){ge(m,3*A,l,h),m.needsUpdate=!0;let U=m.distanceToTriangle(g,y,x);if(U<T&&(b.copy(y),_&&_.copy(x),T=U,p=A,c=M),U<s)return!0}}}});{let C=Ai(t);for(let E=0,S=C;E<S;E++){ge(g,3*E,d,f),g.a.applyMatrix4(e),g.b.applyMatrix4(e),g.c.applyMatrix4(e),g.needsUpdate=!0;for(let M=v,w=v+u;M<w;M++){ge(m,3*M,l,h),m.needsUpdate=!0;let A=m.distanceToTriangle(g,y,x);if(A<T&&(b.copy(y),_&&_.copy(x),T=A,p=M,c=E),A<s)return!0}}}}}),Ze.releasePrimitive(m),Ze.releasePrimitive(g),T===1/0?null:(n.point?n.point.copy(b):n.point=b.clone(),n.distance=T,n.faceIndex=p,r&&(r.point?r.point.copy(_):r.point=_.clone(),r.point.applyMatrix4(ol),b.applyMatrix4(ol),r.distance=b.sub(r.point).length(),r.faceIndex=c),n)}function Kp(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));let e=i.geometry,n=e.index?e.index.array:null,r=e.attributes.position,s,o,a,h,l=0,f=i._roots;for(let m=0,g=f.length;m<g;m++)s=f[m],o=new Uint32Array(s),a=new Uint16Array(s),h=new Float32Array(s),d(0,l),l+=s.byteLength;function d(m,g,y=!1){let b=m*2;if(Kt(b,a)){let x=oe(m,o),_=fe(b,a),T=1/0,p=1/0,c=1/0,v=-1/0,u=-1/0,C=-1/0;for(let E=x,S=x+_;E<S;E++){let M=3*i.resolveTriangleIndex(E);for(let w=0;w<3;w++){let A=M+w;A=n?n[A]:A;let R=r.getX(A),U=r.getY(A),F=r.getZ(A);R<T&&(T=R),R>v&&(v=R),U<p&&(p=U),U>u&&(u=U),F<c&&(c=F),F>C&&(C=F)}}return h[m+0]!==T||h[m+1]!==p||h[m+2]!==c||h[m+3]!==v||h[m+4]!==u||h[m+5]!==C?(h[m+0]=T,h[m+1]=p,h[m+2]=c,h[m+3]=v,h[m+4]=u,h[m+5]=C,!0):!1}else{let x=ne(m),_=ie(m,o),T=y,p=!1,c=!1;if(t){if(!T){let M=x/8+g/32,w=_/8+g/32;p=t.has(M),c=t.has(w),T=!p&&!c}}else p=!0,c=!0;let v=T||p,u=T||c,C=!1;v&&(C=d(x,g,T));let E=!1;u&&(E=d(_,g,T));let S=C||E;if(S)for(let M=0;M<3;M++){let w=x+M,A=_+M,R=h[w],U=h[w+3],F=h[A],B=h[A+3];h[m+M]=R<F?R:F,h[m+M+3]=U>B?U:B}return S}}}function jp(i,t,e,n,r,s,o){Qt.setBuffer(i._roots[t]),Du(0,i,e,n,r,s,o),Qt.clearBuffer()}function Du(i,t,e,n,r,s,o){let{float32Array:a,uint16Array:h,uint32Array:l}=Qt,f=i*2;if(Kt(f,h)){let m=oe(i,l),g=fe(f,h);Gp(t,e,n,m,g,r,s,o)}else{let m=ne(i);Sn(m,a,n,s,o)&&Du(m,t,e,n,r,s,o);let g=ie(i,l);Sn(g,a,n,s,o)&&Du(g,t,e,n,r,s,o)}}var VM=["x","y","z"];function Qp(i,t,e,n,r,s){Qt.setBuffer(i._roots[t]);let o=Lu(0,i,e,n,r,s);return Qt.clearBuffer(),o}function Lu(i,t,e,n,r,s){let{float32Array:o,uint16Array:a,uint32Array:h}=Qt,l=i*2;if(Kt(l,a)){let d=oe(i,h),m=fe(l,a);return Wp(t,e,n,d,m,r,s)}else{let d=Kr(i,h),m=VM[d],y=n.direction[m]>=0,b,x;y?(b=ne(i),x=ie(i,h)):(b=ie(i,h),x=ne(i));let T=Sn(b,o,n,r,s)?Lu(b,t,e,n,r,s):null;if(T){let v=T.point[m];if(y?v<=o[x+d]:v>=o[x+d+3])return T}let c=Sn(x,o,n,r,s)?Lu(x,t,e,n,r,s):null;return T&&c?T.distance<=c.distance?T:c:T||c||null}}var al=new ve,as=new we,cs=new we,po=new kt,tm=new Ee,cl=new Ee;function em(i,t,e,n){Qt.setBuffer(i._roots[t]);let r=Nu(0,i,e,n);return Qt.clearBuffer(),r}function Nu(i,t,e,n,r=null){let{float32Array:s,uint16Array:o,uint32Array:a}=Qt,h=i*2;if(r===null&&(e.boundingBox||e.computeBoundingBox(),tm.set(e.boundingBox.min,e.boundingBox.max,n),r=tm),Kt(h,o)){let f=t.geometry,d=f.index,m=f.attributes.position,g=e.index,y=e.attributes.position,b=oe(i,a),x=fe(h,o);if(po.copy(n).invert(),e.boundsTree)return me(i,s,cl),cl.matrix.copy(po),cl.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:T=>cl.intersectsBox(T),intersectsTriangle:T=>{T.a.applyMatrix4(n),T.b.applyMatrix4(n),T.c.applyMatrix4(n),T.needsUpdate=!0;for(let p=b,c=x+b;p<c;p++)if(ge(cs,3*t.resolveTriangleIndex(p),d,m),cs.needsUpdate=!0,T.intersectsTriangle(cs))return!0;return!1}});{let _=Ai(e);for(let T=b,p=x+b;T<p;T++){let c=t.resolveTriangleIndex(T);ge(as,3*c,d,m),as.a.applyMatrix4(po),as.b.applyMatrix4(po),as.c.applyMatrix4(po),as.needsUpdate=!0;for(let v=0,u=_*3;v<u;v+=3)if(ge(cs,v,g,y),cs.needsUpdate=!0,as.intersectsTriangle(cs))return!0}}}else{let f=ne(i),d=ie(i,a);return me(f,s,al),!!(r.intersectsBox(al)&&Nu(f,t,e,n,r)||(me(d,s,al),r.intersectsBox(al)&&Nu(d,t,e,n,r)))}}var ll=new kt,Uu=new Ee,mo=new Ee,kM=new D,HM=new D,GM=new D,WM=new D;function nm(i,t,e,n={},r={},s=0,o=1/0){t.boundingBox||t.computeBoundingBox(),Uu.set(t.boundingBox.min,t.boundingBox.max,e),Uu.needsUpdate=!0;let a=i.geometry,h=a.attributes.position,l=a.index,f=t.attributes.position,d=t.index,m=Ze.getPrimitive(),g=Ze.getPrimitive(),y=kM,b=HM,x=null,_=null;r&&(x=GM,_=WM);let T=1/0,p=null,c=null;return ll.copy(e).invert(),mo.matrix.copy(ll),i.shapecast({boundsTraverseOrder:v=>Uu.distanceToBox(v),intersectsBounds:(v,u,C)=>C<T&&C<o?(u&&(mo.min.copy(v.min),mo.max.copy(v.max),mo.needsUpdate=!0),!0):!1,intersectsRange:(v,u)=>{if(t.boundsTree){let C=t.boundsTree;return C.shapecast({boundsTraverseOrder:E=>mo.distanceToBox(E),intersectsBounds:(E,S,M)=>M<T&&M<o,intersectsRange:(E,S)=>{for(let M=E,w=E+S;M<w;M++){let A=C.resolveTriangleIndex(M);ge(g,3*A,d,f),g.a.applyMatrix4(e),g.b.applyMatrix4(e),g.c.applyMatrix4(e),g.needsUpdate=!0;for(let R=v,U=v+u;R<U;R++){let F=i.resolveTriangleIndex(R);ge(m,3*F,l,h),m.needsUpdate=!0;let B=m.distanceToTriangle(g,y,x);if(B<T&&(b.copy(y),_&&_.copy(x),T=B,p=R,c=M),B<s)return!0}}}})}else{let C=Ai(t);for(let E=0,S=C;E<S;E++){ge(g,3*E,d,f),g.a.applyMatrix4(e),g.b.applyMatrix4(e),g.c.applyMatrix4(e),g.needsUpdate=!0;for(let M=v,w=v+u;M<w;M++){let A=i.resolveTriangleIndex(M);ge(m,3*A,l,h),m.needsUpdate=!0;let R=m.distanceToTriangle(g,y,x);if(R<T&&(b.copy(y),_&&_.copy(x),T=R,p=M,c=E),R<s)return!0}}}}}),Ze.releasePrimitive(m),Ze.releasePrimitive(g),T===1/0?null:(n.point?n.point.copy(b):n.point=b.clone(),n.distance=T,n.faceIndex=p,r&&(r.point?r.point.copy(_):r.point=_.clone(),r.point.applyMatrix4(ll),b.applyMatrix4(ll),r.distance=b.sub(r.point).length(),r.faceIndex=c),n)}function Fu(i,t,e){return i===null?null:(i.point.applyMatrix4(t.matrixWorld),i.distance=i.point.distanceTo(e.ray.origin),i.object=t,i)}var hl=new Ee,ul=new Je,im=new D,rm=new kt,sm=new D,Bu=["getX","getY","getZ"],fl=class i extends Qc{static serialize(t,e={}){e={cloneBuffers:!0,...e};let n=t.geometry,r=t._roots,s=t._indirectBuffer,o=n.getIndex(),a={version:1,roots:null,index:null,indirectBuffer:null};return e.cloneBuffers?(a.roots=r.map(h=>h.slice()),a.index=o?o.array.slice():null,a.indirectBuffer=s?s.slice():null):(a.roots=r,a.index=o?o.array:null,a.indirectBuffer=s),a}static deserialize(t,e,n={}){n={setIndex:!0,indirect:!!t.indirectBuffer,...n};let{index:r,roots:s,indirectBuffer:o}=t;t.version||(console.warn("MeshBVH.deserialize: Serialization format has been changed and will be fixed up. It is recommended to regenerate any stored serialized data."),h(s));let a=new i(e,{...n,[ro]:!0});if(a._roots=s,a._indirectBuffer=o||null,n.setIndex){let l=e.getIndex();if(l===null){let f=new pe(t.index,1,!1);e.setIndex(f)}else l.array!==r&&(l.array.set(r),l.needsUpdate=!0)}return a;function h(l){for(let f=0;f<l.length;f++){let d=l[f],m=new Uint32Array(d),g=new Uint16Array(d);for(let y=0,b=d.byteLength/32;y<b;y++){let x=8*y,_=2*x;Kt(_,g)||(m[x+6]=m[x+6]/8-y)}}}}get primitiveStride(){return 3}get resolveTriangleIndex(){return this.resolvePrimitiveIndex}constructor(t,e={}){e.maxLeafTris&&(console.warn('MeshBVH: "maxLeafTris" option has been deprecated. Use "targetLeafSize", instead.'),e={...e,targetLeafSize:e.maxLeafTris}),super(t,e)}shiftTriangleOffsets(t){return super.shiftPrimitiveOffsets(t)}writePrimitiveBounds(t,e,n){let r=this.geometry,s=this._indirectBuffer,o=r.attributes.position,a=r.index?r.index.array:null,l=(s?s[t]:t)*3,f=l+0,d=l+1,m=l+2;a&&(f=a[f],d=a[d],m=a[m]);for(let g=0;g<3;g++){let y=o[Bu[g]](f),b=o[Bu[g]](d),x=o[Bu[g]](m),_=y;b<_&&(_=b),x<_&&(_=x);let T=y;b>T&&(T=b),x>T&&(T=x),e[n+g]=_,e[n+g+3]=T}return e}computePrimitiveBounds(t,e,n){let r=this.geometry,s=this._indirectBuffer,o=r.attributes.position,a=r.index?r.index.array:null,h=o.normalized;if(t<0||e+t-n.offset>n.length/6)throw new Error("MeshBVH: compute triangle bounds range is invalid.");let l=o.array,f=o.offset||0,d=3;o.isInterleavedBufferAttribute&&(d=o.data.stride);let m=["getX","getY","getZ"],g=n.offset;for(let y=t,b=t+e;y<b;y++){let _=(s?s[y]:y)*3,T=(y-g)*6,p=_+0,c=_+1,v=_+2;a&&(p=a[p],c=a[c],v=a[v]),h||(p=p*d+f,c=c*d+f,v=v*d+f);for(let u=0;u<3;u++){let C,E,S;h?(C=o[m[u]](p),E=o[m[u]](c),S=o[m[u]](v)):(C=l[p+u],E=l[c+u],S=l[v+u]);let M=C;E<M&&(M=E),S<M&&(M=S);let w=C;E>w&&(w=E),S>w&&(w=S);let A=(w-M)/2,R=u*2;n[T+R+0]=M+A,n[T+R+1]=A+(Math.abs(M)+A)*$r}}return n}raycastObject3D(t,e,n=[]){let{material:r}=t;if(r===void 0)return;rm.copy(t.matrixWorld).invert(),ul.copy(e.ray).applyMatrix4(rm),sm.setFromMatrixScale(t.matrixWorld),im.copy(ul.direction).multiply(sm);let s=im.length(),o=e.near/s,a=e.far/s;if(e.firstHitOnly===!0){let h=this.raycastFirst(ul,r,o,a);h=Fu(h,t,e),h&&n.push(h)}else{let h=this.raycast(ul,r,o,a);for(let l=0,f=h.length;l<f;l++){let d=Fu(h[l],t,e);d&&n.push(d)}}return n}refit(t=null){return(this.indirect?Kp:Hp)(this,t)}raycast(t,e=sn,n=0,r=1/0){let s=this._roots,o=[],a=this.indirect?jp:qp;for(let h=0,l=s.length;h<l;h++)a(this,h,e,t,o,n,r);return o}raycastFirst(t,e=sn,n=0,r=1/0){let s=this._roots,o=null,a=this.indirect?Qp:Yp;for(let h=0,l=s.length;h<l;h++){let f=a(this,h,e,t,n,r);f!=null&&(o==null||f.distance<o.distance)&&(o=f)}return o}intersectsGeometry(t,e){let n=!1,r=this._roots,s=this.indirect?em:$p;for(let o=0,a=r.length;o<a&&(n=s(this,o,t,e),!n);o++);return n}shapecast(t){let e=Ze.getPrimitive(),n=super.shapecast({...t,intersectsPrimitive:t.intersectsTriangle,scratchPrimitive:e,iterate:this.indirect?Xp:kp});return Ze.releasePrimitive(e),n}bvhcast(t,e,n){let{intersectsRanges:r,intersectsTriangles:s}=n,o=Ze.getPrimitive(),a=this.geometry.index,h=this.geometry.attributes.position,l=this.indirect?y=>{let b=this.resolveTriangleIndex(y);ge(o,b*3,a,h)}:y=>{ge(o,y*3,a,h)},f=Ze.getPrimitive(),d=t.geometry.index,m=t.geometry.attributes.position,g=t.indirect?y=>{let b=t.resolveTriangleIndex(y);ge(f,b*3,d,m)}:y=>{ge(f,y*3,d,m)};if(s){if(!(t instanceof i))throw new Error('MeshBVH: "intersectsTriangles" callback can only be used with another MeshBVH.');let y=(b,x,_,T,p,c,v,u)=>{for(let C=_,E=_+T;C<E;C++){g(C),f.a.applyMatrix4(e),f.b.applyMatrix4(e),f.c.applyMatrix4(e),f.needsUpdate=!0;for(let S=b,M=b+x;S<M;S++)if(l(S),o.needsUpdate=!0,s(o,f,S,C,p,c,v,u))return!0}return!1};if(r){let b=r;r=function(x,_,T,p,c,v,u,C){return b(x,_,T,p,c,v,u,C)?!0:y(x,_,T,p,c,v,u,C)}}else r=y}return super.bvhcast(t,e,{intersectsRanges:r})}intersectsBox(t,e){return hl.set(t.min,t.max,e),hl.needsUpdate=!0,this.shapecast({intersectsBounds:n=>hl.intersectsBox(n),intersectsTriangle:n=>hl.intersectsTriangle(n)})}intersectsSphere(t){return this.shapecast({intersectsBounds:e=>t.intersectsBox(e),intersectsTriangle:e=>e.intersectsSphere(t)})}closestPointToGeometry(t,e,n={},r={},s=0,o=1/0){return(this.indirect?nm:Jp)(this,t,e,n,r,s,o)}closestPointToPoint(t,e={},n=0,r=1/0){return Lp(this,t,e,n,r)}};var om=Math.pow(10,-Math.log10(1e-6)),XM=5e-7*om;function Pn(i){return~~(i*om+XM)}function am(i){return`${Pn(i.x)},${Pn(i.y)}`}function Ou(i){return`${Pn(i.x)},${Pn(i.y)},${Pn(i.z)}`}function cm(i){return`${Pn(i.x)},${Pn(i.y)},${Pn(i.z)},${Pn(i.w)}`}function lm(i,t,e){e.direction.subVectors(t,i).normalize();let n=i.dot(e.direction);return e.origin.copy(i).addScaledVector(e.direction,-n),e}function dl(){return typeof SharedArrayBuffer<"u"}function hm(i){if(i.buffer instanceof SharedArrayBuffer)return i;let t=i.constructor,e=i.buffer,n=new SharedArrayBuffer(e.byteLength),r=new Uint8Array(e);return new Uint8Array(n).set(r,0),new t(n)}function qM(i){return i.index?i.index.count:i.attributes.position.count}function ls(i){return qM(i)/3}var YM=1e-8,ZM=new D;function fm(i){return~~(i/3)}function dm(i){return i%3}function um(i,t){return i.start-t.start}function zu(i,t){return ZM.subVectors(t,i.origin).dot(i.direction)}function pm(i,t,e,n=YM){i.sort(um),t.sort(um);for(let a=0;a<i.length;a++){let h=i[a];for(let l=0;l<t.length;l++){let f=t[l];if(!(f.start>h.end)){if(h.end<f.start||f.end<h.start)continue;if(h.start<=f.start&&h.end>=f.end)s(f.end,h.end)||i.splice(a+1,0,{start:f.end,end:h.end,index:h.index}),h.end=f.start,f.start=0,f.end=0;else if(h.start>=f.start&&h.end<=f.end)s(h.end,f.end)||t.splice(l+1,0,{start:h.end,end:f.end,index:f.index}),f.end=h.start,h.start=0,h.end=0;else if(h.start<=f.start&&h.end<=f.end){let d=h.end;h.end=f.start,f.start=d}else if(h.start>=f.start&&h.end>=f.end){let d=f.end;f.end=h.start,h.start=d}else throw new Error}if(e.has(h.index)||e.set(h.index,[]),e.has(f.index)||e.set(f.index,[]),e.get(h.index).push(f.index),e.get(f.index).push(h.index),o(f)&&(t.splice(l,1),l--),o(h)){i.splice(a,1),a--;break}}}r(i),r(t);function r(a){for(let h=0;h<a.length;h++)o(a[h])&&(a.splice(h,1),h--)}function s(a,h){return Math.abs(h-a)<n}function o(a){return Math.abs(a.end-a.start)<n}}var pl=class{constructor(){this._rays=[]}addRay(t){this._rays.push(t)}findClosestRay(t){let e=this._rays,n=t.clone();n.direction.multiplyScalar(-1);let r=1/0,s=null;for(let h=0,l=e.length;h<l;h++){let f=e[h];if(o(f,t)&&o(f,n))continue;let d=a(f,t),m=a(f,n),g=Math.min(d,m);g<r&&(r=g,s=f)}return s;function o(h,l){let f=h.origin.distanceTo(l.origin)>1e-5;return h.direction.angleTo(l.direction)>1e-4||f}function a(h,l){let f=h.origin.distanceTo(l.origin),d=h.direction.angleTo(l.direction);return f/1e-5+d/1e-4}}};var Vu=new D,ku=new D,ml=new Je;function mm(i,t,e){let n=i.attributes,r=i.index,s=n.position,o=new Map,a=new Map,h=Array.from(t),l=new pl;for(let f=0,d=h.length;f<d;f++){let m=h[f],g=fm(m),y=dm(m),b=3*g+y,x=3*g+(y+1)%3;r&&(b=r.getX(b),x=r.getX(x)),Vu.fromBufferAttribute(s,b),ku.fromBufferAttribute(s,x),lm(Vu,ku,ml);let _,T=l.findClosestRay(ml);T===null&&(T=ml.clone(),l.addRay(T)),a.has(T)||a.set(T,{forward:[],reverse:[],ray:T}),_=a.get(T);let p=zu(T,Vu),c=zu(T,ku);p>c&&([p,c]=[c,p]),ml.direction.dot(T.direction)<0?_.reverse.push({start:p,end:c,index:m}):_.forward.push({start:p,end:c,index:m})}return a.forEach(({forward:f,reverse:d},m)=>{pm(f,d,o,e),f.length===0&&d.length===0&&a.delete(m)}),{disjointConnectivityMap:o,fragmentMap:a}}var $M=new ot,Hu=new D,JM=new se,Gu=["","",""],gl=class{constructor(){this.data=null,this.disjointConnections=null,this.unmatchedDisjointEdges=null,this.unmatchedEdges=-1,this.matchedEdges=-1,this.useDrawRange=!0,this.useAllAttributes=!1,this.matchDisjointEdges=!1,this.degenerateEpsilon=1e-8}getSiblingTriangleIndex(t,e){let n=this.data[t*3+e];return n===-1?-1:~~(n/3)}getSiblingEdgeIndex(t,e){let n=this.data[t*3+e];return n===-1?-1:n%3}getDisjointSiblingTriangleIndices(t,e){let n=t*3+e,r=this.disjointConnections.get(n);return r?r.map(s=>~~(s/3)):[]}getDisjointSiblingEdgeIndices(t,e){let n=t*3+e,r=this.disjointConnections.get(n);return r?r.map(s=>s%3):[]}isFullyConnected(){return this.unmatchedEdges===0}updateFrom(t){let{useAllAttributes:e,useDrawRange:n,matchDisjointEdges:r,degenerateEpsilon:s}=this,o=e?p:T,a=new Map,{attributes:h}=t,l=e?Object.keys(h):null,f=t.index,d=h.position,m=ls(t),g=m,y=0;n&&(y=t.drawRange.start,t.drawRange.count!==1/0&&(m=~~(t.drawRange.count/3)));let b=this.data;(!b||b.length<3*g)&&(b=new Int32Array(3*g)),b.fill(-1);let x=0,_=new Set;for(let c=y,v=m*3+y;c<v;c+=3){let u=c;for(let C=0;C<3;C++){let E=u+C;f&&(E=f.getX(E)),Gu[C]=o(E)}for(let C=0;C<3;C++){let E=(C+1)%3,S=Gu[C],M=Gu[E],w=`${M}_${S}`;if(a.has(w)){let A=u+C,R=a.get(w);b[A]=R,b[R]=A,a.delete(w),x+=2,_.delete(R)}else{let A=`${S}_${M}`,R=u+C;a.set(A,R),_.add(R)}}}if(r){let{fragmentMap:c,disjointConnectivityMap:v}=mm(t,_,s);_.clear(),c.forEach(({forward:u,reverse:C})=>{u.forEach(({index:E})=>_.add(E)),C.forEach(({index:E})=>_.add(E))}),this.unmatchedDisjointEdges=c,this.disjointConnections=v,x=m*3-_.size}this.matchedEdges=x,this.unmatchedEdges=_.size,this.data=b;function T(c){return Hu.fromBufferAttribute(d,c),Ou(Hu)}function p(c){let v="";for(let u=0,C=l.length;u<C;u++){let E=h[l[u]],S;switch(E.itemSize){case 1:S=Pn(E.getX(c));break;case 2:S=am($M.fromBufferAttribute(E,c));break;case 3:S=Ou(Hu.fromBufferAttribute(E,c));break;case 4:S=cm(JM.fromBufferAttribute(E,c));break}v!==""&&(v+="|"),v+=S}return v}}};var hs=class extends qe{constructor(...t){super(...t),this.isBrush=!0,this._previousMatrix=new kt,this._previousMatrix.elements.fill(0),this._halfEdges=null,this._boundsTree=null,this._groupIndices=null,this._hash=null}markUpdated(){this._previousMatrix.copy(this.matrix)}isDirty(){let{matrix:t,_previousMatrix:e}=this,n=t.elements,r=e.elements;for(let s=0;s<16;s++)if(n[s]!==r[s])return!0;return!1}prepareGeometry(){let t=this.geometry,e=t.attributes,n=dl(),r=t.index,s=t.attributes.position,o=r?`${r.uuid}_${r.count}_${r.version}`:"-1_-1_-1",a=`${s.uuid}_${s.count}_${s.version}`,h=`${t.uuid}_${o}_${a}`;if(this._hash===h)return;if(this._hash=h,n)for(let m in e){let g=e[m];if(g.isInterleavedBufferAttribute)throw new Error("Brush: InterleavedBufferAttributes are not supported.");g.array=hm(g.array)}t.boundsTree=new fl(t,{maxLeafSize:3,indirect:!0,useSharedArrayBuffer:n}),t.halfEdges||(t.halfEdges=new gl),t.halfEdges.updateFrom(t);let l=ls(t);(!t.groupIndices||t.groupIndices.length!==l)&&(t.groupIndices=new Uint16Array(l));let f=t.groupIndices,d=t.groups;for(let m=0,g=d.length;m<g;m++){let{start:y,count:b}=d[m];for(let x=y/3,_=(y+b)/3;x<_;x++)f[x]=m}}disposeCacheData(){let{geometry:t}=this;t.halfEdges=null,t.boundsTree=null,t.groupIndices=null}};var KM=Object.getOwnPropertyNames,fn=(i,t)=>function(){return t||(0,i[KM(i)[0]])((t={exports:{}}).exports,t),t.exports},_l=fn({"node_modules/binary-search-bounds/search-bounds.js"(i,t){"use strict";function e(h,l,f,d,m){for(var g=m+1;d<=m;){var y=d+m>>>1,b=h[y],x=f!==void 0?f(b,l):b-l;x>=0?(g=y,m=y-1):d=y+1}return g}function n(h,l,f,d,m){for(var g=m+1;d<=m;){var y=d+m>>>1,b=h[y],x=f!==void 0?f(b,l):b-l;x>0?(g=y,m=y-1):d=y+1}return g}function r(h,l,f,d,m){for(var g=d-1;d<=m;){var y=d+m>>>1,b=h[y],x=f!==void 0?f(b,l):b-l;x<0?(g=y,d=y+1):m=y-1}return g}function s(h,l,f,d,m){for(var g=d-1;d<=m;){var y=d+m>>>1,b=h[y],x=f!==void 0?f(b,l):b-l;x<=0?(g=y,d=y+1):m=y-1}return g}function o(h,l,f,d,m){for(;d<=m;){var g=d+m>>>1,y=h[g],b=f!==void 0?f(y,l):y-l;if(b===0)return g;b<=0?d=g+1:m=g-1}return-1}function a(h,l,f,d,m,g){return typeof f=="function"?g(h,l,f,d===void 0?0:d|0,m===void 0?h.length-1:m|0):g(h,l,void 0,f===void 0?0:f|0,d===void 0?h.length-1:d|0)}t.exports={ge:function(h,l,f,d,m){return a(h,l,f,d,m,e)},gt:function(h,l,f,d,m){return a(h,l,f,d,m,n)},lt:function(h,l,f,d,m){return a(h,l,f,d,m,r)},le:function(h,l,f,d,m){return a(h,l,f,d,m,s)},eq:function(h,l,f,d,m){return a(h,l,f,d,m,o)}}}}),Wu=fn({"node_modules/two-product/two-product.js"(i,t){"use strict";t.exports=n;var e=+(Math.pow(2,27)+1);function n(r,s,o){var a=r*s,h=e*r,l=h-r,f=h-l,d=r-f,m=e*s,g=m-s,y=m-g,b=s-y,x=a-f*y,_=x-d*y,T=_-f*b,p=d*b-T;return o?(o[0]=p,o[1]=a,o):[p,a]}}}),gm=fn({"node_modules/robust-sum/robust-sum.js"(i,t){"use strict";t.exports=n;function e(r,s){var o=r+s,a=o-r,h=o-a,l=s-a,f=r-h,d=f+l;return d?[d,o]:[o]}function n(r,s){var o=r.length|0,a=s.length|0;if(o===1&&a===1)return e(r[0],s[0]);var h=o+a,l=new Array(h),f=0,d=0,m=0,g=Math.abs,y=r[d],b=g(y),x=s[m],_=g(x),T,p;b<_?(p=y,d+=1,d<o&&(y=r[d],b=g(y))):(p=x,m+=1,m<a&&(x=s[m],_=g(x))),d<o&&b<_||m>=a?(T=y,d+=1,d<o&&(y=r[d],b=g(y))):(T=x,m+=1,m<a&&(x=s[m],_=g(x)));for(var c=T+p,v=c-T,u=p-v,C=u,E=c,S,M,w,A,R;d<o&&m<a;)b<_?(T=y,d+=1,d<o&&(y=r[d],b=g(y))):(T=x,m+=1,m<a&&(x=s[m],_=g(x))),p=C,c=T+p,v=c-T,u=p-v,u&&(l[f++]=u),S=E+c,M=S-E,w=S-M,A=c-M,R=E-w,C=R+A,E=S;for(;d<o;)T=y,p=C,c=T+p,v=c-T,u=p-v,u&&(l[f++]=u),S=E+c,M=S-E,w=S-M,A=c-M,R=E-w,C=R+A,E=S,d+=1,d<o&&(y=r[d]);for(;m<a;)T=x,p=C,c=T+p,v=c-T,u=p-v,u&&(l[f++]=u),S=E+c,M=S-E,w=S-M,A=c-M,R=E-w,C=R+A,E=S,m+=1,m<a&&(x=s[m]);return C&&(l[f++]=C),E&&(l[f++]=E),f||(l[f++]=0),l.length=f,l}}}),jM=fn({"node_modules/two-sum/two-sum.js"(i,t){"use strict";t.exports=e;function e(n,r,s){var o=n+r,a=o-n,h=o-a,l=r-a,f=n-h;return s?(s[0]=f+l,s[1]=o,s):[f+l,o]}}}),_m=fn({"node_modules/robust-scale/robust-scale.js"(i,t){"use strict";var e=Wu(),n=jM();t.exports=r;function r(s,o){var a=s.length;if(a===1){var h=e(s[0],o);return h[0]?h:[h[1]]}var l=new Array(2*a),f=[.1,.1],d=[.1,.1],m=0;e(s[0],o,f),f[0]&&(l[m++]=f[0]);for(var g=1;g<a;++g){e(s[g],o,d);var y=f[1];n(y,d[0],f),f[0]&&(l[m++]=f[0]);var b=d[1],x=f[1],_=b+x,T=_-b,p=x-T;f[1]=_,p&&(l[m++]=p)}return f[1]&&(l[m++]=f[1]),m===0&&(l[m++]=0),l.length=m,l}}}),xm=fn({"node_modules/robust-subtract/robust-diff.js"(i,t){"use strict";t.exports=n;function e(r,s){var o=r+s,a=o-r,h=o-a,l=s-a,f=r-h,d=f+l;return d?[d,o]:[o]}function n(r,s){var o=r.length|0,a=s.length|0;if(o===1&&a===1)return e(r[0],-s[0]);var h=o+a,l=new Array(h),f=0,d=0,m=0,g=Math.abs,y=r[d],b=g(y),x=-s[m],_=g(x),T,p;b<_?(p=y,d+=1,d<o&&(y=r[d],b=g(y))):(p=x,m+=1,m<a&&(x=-s[m],_=g(x))),d<o&&b<_||m>=a?(T=y,d+=1,d<o&&(y=r[d],b=g(y))):(T=x,m+=1,m<a&&(x=-s[m],_=g(x)));for(var c=T+p,v=c-T,u=p-v,C=u,E=c,S,M,w,A,R;d<o&&m<a;)b<_?(T=y,d+=1,d<o&&(y=r[d],b=g(y))):(T=x,m+=1,m<a&&(x=-s[m],_=g(x))),p=C,c=T+p,v=c-T,u=p-v,u&&(l[f++]=u),S=E+c,M=S-E,w=S-M,A=c-M,R=E-w,C=R+A,E=S;for(;d<o;)T=y,p=C,c=T+p,v=c-T,u=p-v,u&&(l[f++]=u),S=E+c,M=S-E,w=S-M,A=c-M,R=E-w,C=R+A,E=S,d+=1,d<o&&(y=r[d]);for(;m<a;)T=x,p=C,c=T+p,v=c-T,u=p-v,u&&(l[f++]=u),S=E+c,M=S-E,w=S-M,A=c-M,R=E-w,C=R+A,E=S,m+=1,m<a&&(x=-s[m]);return C&&(l[f++]=C),E&&(l[f++]=E),f||(l[f++]=0),l.length=f,l}}}),QM=fn({"node_modules/robust-orientation/orientation.js"(i,t){"use strict";var e=Wu(),n=gm(),r=_m(),s=xm(),o=5,a=11102230246251565e-32,h=(3+16*a)*a,l=(7+56*a)*a;function f(c,v,u,C){return function(S,M,w){var A=c(c(v(M[1],w[0]),v(-w[1],M[0])),c(v(S[1],M[0]),v(-M[1],S[0]))),R=c(v(S[1],w[0]),v(-w[1],S[0])),U=C(A,R);return U[U.length-1]}}function d(c,v,u,C){return function(S,M,w,A){var R=c(c(u(c(v(w[1],A[0]),v(-A[1],w[0])),M[2]),c(u(c(v(M[1],A[0]),v(-A[1],M[0])),-w[2]),u(c(v(M[1],w[0]),v(-w[1],M[0])),A[2]))),c(u(c(v(M[1],A[0]),v(-A[1],M[0])),S[2]),c(u(c(v(S[1],A[0]),v(-A[1],S[0])),-M[2]),u(c(v(S[1],M[0]),v(-M[1],S[0])),A[2])))),U=c(c(u(c(v(w[1],A[0]),v(-A[1],w[0])),S[2]),c(u(c(v(S[1],A[0]),v(-A[1],S[0])),-w[2]),u(c(v(S[1],w[0]),v(-w[1],S[0])),A[2]))),c(u(c(v(M[1],w[0]),v(-w[1],M[0])),S[2]),c(u(c(v(S[1],w[0]),v(-w[1],S[0])),-M[2]),u(c(v(S[1],M[0]),v(-M[1],S[0])),w[2])))),F=C(R,U);return F[F.length-1]}}function m(c,v,u,C){return function(S,M,w,A,R){var U=c(c(c(u(c(u(c(v(A[1],R[0]),v(-R[1],A[0])),w[2]),c(u(c(v(w[1],R[0]),v(-R[1],w[0])),-A[2]),u(c(v(w[1],A[0]),v(-A[1],w[0])),R[2]))),M[3]),c(u(c(u(c(v(A[1],R[0]),v(-R[1],A[0])),M[2]),c(u(c(v(M[1],R[0]),v(-R[1],M[0])),-A[2]),u(c(v(M[1],A[0]),v(-A[1],M[0])),R[2]))),-w[3]),u(c(u(c(v(w[1],R[0]),v(-R[1],w[0])),M[2]),c(u(c(v(M[1],R[0]),v(-R[1],M[0])),-w[2]),u(c(v(M[1],w[0]),v(-w[1],M[0])),R[2]))),A[3]))),c(u(c(u(c(v(w[1],A[0]),v(-A[1],w[0])),M[2]),c(u(c(v(M[1],A[0]),v(-A[1],M[0])),-w[2]),u(c(v(M[1],w[0]),v(-w[1],M[0])),A[2]))),-R[3]),c(u(c(u(c(v(A[1],R[0]),v(-R[1],A[0])),M[2]),c(u(c(v(M[1],R[0]),v(-R[1],M[0])),-A[2]),u(c(v(M[1],A[0]),v(-A[1],M[0])),R[2]))),S[3]),u(c(u(c(v(A[1],R[0]),v(-R[1],A[0])),S[2]),c(u(c(v(S[1],R[0]),v(-R[1],S[0])),-A[2]),u(c(v(S[1],A[0]),v(-A[1],S[0])),R[2]))),-M[3])))),c(c(u(c(u(c(v(M[1],R[0]),v(-R[1],M[0])),S[2]),c(u(c(v(S[1],R[0]),v(-R[1],S[0])),-M[2]),u(c(v(S[1],M[0]),v(-M[1],S[0])),R[2]))),A[3]),c(u(c(u(c(v(M[1],A[0]),v(-A[1],M[0])),S[2]),c(u(c(v(S[1],A[0]),v(-A[1],S[0])),-M[2]),u(c(v(S[1],M[0]),v(-M[1],S[0])),A[2]))),-R[3]),u(c(u(c(v(w[1],A[0]),v(-A[1],w[0])),M[2]),c(u(c(v(M[1],A[0]),v(-A[1],M[0])),-w[2]),u(c(v(M[1],w[0]),v(-w[1],M[0])),A[2]))),S[3]))),c(u(c(u(c(v(w[1],A[0]),v(-A[1],w[0])),S[2]),c(u(c(v(S[1],A[0]),v(-A[1],S[0])),-w[2]),u(c(v(S[1],w[0]),v(-w[1],S[0])),A[2]))),-M[3]),c(u(c(u(c(v(M[1],A[0]),v(-A[1],M[0])),S[2]),c(u(c(v(S[1],A[0]),v(-A[1],S[0])),-M[2]),u(c(v(S[1],M[0]),v(-M[1],S[0])),A[2]))),w[3]),u(c(u(c(v(M[1],w[0]),v(-w[1],M[0])),S[2]),c(u(c(v(S[1],w[0]),v(-w[1],S[0])),-M[2]),u(c(v(S[1],M[0]),v(-M[1],S[0])),w[2]))),-A[3]))))),F=c(c(c(u(c(u(c(v(A[1],R[0]),v(-R[1],A[0])),w[2]),c(u(c(v(w[1],R[0]),v(-R[1],w[0])),-A[2]),u(c(v(w[1],A[0]),v(-A[1],w[0])),R[2]))),S[3]),u(c(u(c(v(A[1],R[0]),v(-R[1],A[0])),S[2]),c(u(c(v(S[1],R[0]),v(-R[1],S[0])),-A[2]),u(c(v(S[1],A[0]),v(-A[1],S[0])),R[2]))),-w[3])),c(u(c(u(c(v(w[1],R[0]),v(-R[1],w[0])),S[2]),c(u(c(v(S[1],R[0]),v(-R[1],S[0])),-w[2]),u(c(v(S[1],w[0]),v(-w[1],S[0])),R[2]))),A[3]),u(c(u(c(v(w[1],A[0]),v(-A[1],w[0])),S[2]),c(u(c(v(S[1],A[0]),v(-A[1],S[0])),-w[2]),u(c(v(S[1],w[0]),v(-w[1],S[0])),A[2]))),-R[3]))),c(c(u(c(u(c(v(w[1],R[0]),v(-R[1],w[0])),M[2]),c(u(c(v(M[1],R[0]),v(-R[1],M[0])),-w[2]),u(c(v(M[1],w[0]),v(-w[1],M[0])),R[2]))),S[3]),u(c(u(c(v(w[1],R[0]),v(-R[1],w[0])),S[2]),c(u(c(v(S[1],R[0]),v(-R[1],S[0])),-w[2]),u(c(v(S[1],w[0]),v(-w[1],S[0])),R[2]))),-M[3])),c(u(c(u(c(v(M[1],R[0]),v(-R[1],M[0])),S[2]),c(u(c(v(S[1],R[0]),v(-R[1],S[0])),-M[2]),u(c(v(S[1],M[0]),v(-M[1],S[0])),R[2]))),w[3]),u(c(u(c(v(M[1],w[0]),v(-w[1],M[0])),S[2]),c(u(c(v(S[1],w[0]),v(-w[1],S[0])),-M[2]),u(c(v(S[1],M[0]),v(-M[1],S[0])),w[2]))),-R[3])))),B=C(U,F);return B[B.length-1]}}function g(c){var v=c===3?f:c===4?d:m;return v(n,e,r,s)}var y=g(3),b=g(4),x=[function(){return 0},function(){return 0},function(v,u){return u[0]-v[0]},function(v,u,C){var E=(v[1]-C[1])*(u[0]-C[0]),S=(v[0]-C[0])*(u[1]-C[1]),M=E-S,w;if(E>0){if(S<=0)return M;w=E+S}else if(E<0){if(S>=0)return M;w=-(E+S)}else return M;var A=h*w;return M>=A||M<=-A?M:y(v,u,C)},function(v,u,C,E){var S=v[0]-E[0],M=u[0]-E[0],w=C[0]-E[0],A=v[1]-E[1],R=u[1]-E[1],U=C[1]-E[1],F=v[2]-E[2],B=u[2]-E[2],k=C[2]-E[2],O=M*U,Z=w*R,at=w*A,it=S*U,ut=S*R,Mt=M*A,St=F*(O-Z)+B*(at-it)+k*(ut-Mt),yt=(Math.abs(O)+Math.abs(Z))*Math.abs(F)+(Math.abs(at)+Math.abs(it))*Math.abs(B)+(Math.abs(ut)+Math.abs(Mt))*Math.abs(k),$=l*yt;return St>$||-St>$?St:b(v,u,C,E)}];function _(c){var v=x[c.length];return v||(v=x[c.length]=g(c.length)),v.apply(void 0,c)}function T(c,v,u,C,E,S,M){return function(A,R,U,F,B){switch(arguments.length){case 0:case 1:return 0;case 2:return C(A,R);case 3:return E(A,R,U);case 4:return S(A,R,U,F);case 5:return M(A,R,U,F,B)}for(var k=new Array(arguments.length),O=0;O<arguments.length;++O)k[O]=arguments[O];return c(k)}}function p(){for(;x.length<=o;)x.push(g(x.length));t.exports=T.apply(void 0,[_].concat(x));for(var c=0;c<=o;++c)t.exports[c]=x[c]}p()}}),tS=fn({"node_modules/cdt2d/lib/monotone.js"(i,t){"use strict";var e=_l(),n=QM()[3],r=0,s=1,o=2;t.exports=b;function a(x,_,T,p,c){this.a=x,this.b=_,this.idx=T,this.lowerIds=p,this.upperIds=c}function h(x,_,T,p){this.a=x,this.b=_,this.type=T,this.idx=p}function l(x,_){var T=x.a[0]-_.a[0]||x.a[1]-_.a[1]||x.type-_.type;return T||x.type!==r&&(T=n(x.a,x.b,_.b),T)?T:x.idx-_.idx}function f(x,_){return n(x.a,x.b,_)}function d(x,_,T,p,c){for(var v=e.lt(_,p,f),u=e.gt(_,p,f),C=v;C<u;++C){for(var E=_[C],S=E.lowerIds,w=S.length;w>1&&n(T[S[w-2]],T[S[w-1]],p)>0;)x.push([S[w-1],S[w-2],c]),w-=1;S.length=w,S.push(c);for(var M=E.upperIds,w=M.length;w>1&&n(T[M[w-2]],T[M[w-1]],p)<0;)x.push([M[w-2],M[w-1],c]),w-=1;M.length=w,M.push(c)}}function m(x,_){var T;return x.a[0]<_.a[0]?T=n(x.a,x.b,_.a):T=n(_.b,_.a,x.a),T||(_.b[0]<x.b[0]?T=n(x.a,x.b,_.b):T=n(_.b,_.a,x.b),T||x.idx-_.idx)}function g(x,_,T){var p=e.le(x,T,m),c=x[p],v=c.upperIds,u=v[v.length-1];c.upperIds=[u],x.splice(p+1,0,new a(T.a,T.b,T.idx,[u],v))}function y(x,_,T){var p=T.a;T.a=T.b,T.b=p;var c=e.eq(x,T,m),v=x[c],u=x[c-1];u.upperIds=v.upperIds,x.splice(c,1)}function b(x,_){for(var T=x.length,p=_.length,c=[],v=0;v<T;++v)c.push(new h(x[v],null,r,v));for(var v=0;v<p;++v){var u=_[v],C=x[u[0]],E=x[u[1]];C[0]<E[0]?c.push(new h(C,E,o,v),new h(E,C,s,v)):C[0]>E[0]&&c.push(new h(E,C,o,v),new h(C,E,s,v))}c.sort(l);for(var S=c[0].a[0]-(1+Math.abs(c[0].a[0]))*Math.pow(2,-52),M=[new a([S,1],[S,0],-1,[],[],[],[])],w=[],v=0,A=c.length;v<A;++v){var R=c[v],U=R.type;U===r?d(w,M,x,R.a,R.idx):U===o?g(M,x,R):y(M,x,R)}return w}}}),eS=fn({"node_modules/cdt2d/lib/triangulation.js"(i,t){"use strict";var e=_l();t.exports=o;function n(a,h){this.stars=a,this.edges=h}var r=n.prototype;function s(a,h,l){for(var f=1,d=a.length;f<d;f+=2)if(a[f-1]===h&&a[f]===l){a[f-1]=a[d-2],a[f]=a[d-1],a.length=d-2;return}}r.isConstraint=(function(){var a=[0,0];function h(l,f){return l[0]-f[0]||l[1]-f[1]}return function(l,f){return a[0]=Math.min(l,f),a[1]=Math.max(l,f),e.eq(this.edges,a,h)>=0}})(),r.removeTriangle=function(a,h,l){var f=this.stars;s(f[a],h,l),s(f[h],l,a),s(f[l],a,h)},r.addTriangle=function(a,h,l){var f=this.stars;f[a].push(h,l),f[h].push(l,a),f[l].push(a,h)},r.opposite=function(a,h){for(var l=this.stars[h],f=1,d=l.length;f<d;f+=2)if(l[f]===a)return l[f-1];return-1},r.flip=function(a,h){var l=this.opposite(a,h),f=this.opposite(h,a);this.removeTriangle(a,h,l),this.removeTriangle(h,a,f),this.addTriangle(a,f,l),this.addTriangle(h,l,f)},r.edges=function(){for(var a=this.stars,h=[],l=0,f=a.length;l<f;++l)for(var d=a[l],m=0,g=d.length;m<g;m+=2)h.push([d[m],d[m+1]]);return h},r.cells=function(){for(var a=this.stars,h=[],l=0,f=a.length;l<f;++l)for(var d=a[l],m=0,g=d.length;m<g;m+=2){var y=d[m],b=d[m+1];l<Math.min(y,b)&&h.push([l,y,b])}return h};function o(a,h){for(var l=new Array(a),f=0;f<a;++f)l[f]=[];return new n(l,h)}}}),nS=fn({"node_modules/robust-in-sphere/in-sphere.js"(i,t){"use strict";var e=Wu(),n=gm(),r=xm(),s=_m(),o=6;function a(p){var c=p===3?d:p===4?m:p===5?g:y;return c(n,r,e,s)}function h(){return 0}function l(){return 0}function f(){return 0}function d(p,c,v,u){function C(E,S,M){var w=v(E[0],E[0]),A=u(w,S[0]),R=u(w,M[0]),U=v(S[0],S[0]),F=u(U,E[0]),B=u(U,M[0]),k=v(M[0],M[0]),O=u(k,E[0]),Z=u(k,S[0]),at=p(c(Z,B),c(F,A)),it=c(O,R),ut=c(at,it);return ut[ut.length-1]}return C}function m(p,c,v,u){function C(E,S,M,w){var A=p(v(E[0],E[0]),v(E[1],E[1])),R=u(A,S[0]),U=u(A,M[0]),F=u(A,w[0]),B=p(v(S[0],S[0]),v(S[1],S[1])),k=u(B,E[0]),O=u(B,M[0]),Z=u(B,w[0]),at=p(v(M[0],M[0]),v(M[1],M[1])),it=u(at,E[0]),ut=u(at,S[0]),Mt=u(at,w[0]),St=p(v(w[0],w[0]),v(w[1],w[1])),yt=u(St,E[0]),$=u(St,S[0]),Q=u(St,M[0]),ct=p(p(u(c(Q,Mt),S[1]),p(u(c($,Z),-M[1]),u(c(ut,O),w[1]))),p(u(c($,Z),E[1]),p(u(c(yt,F),-S[1]),u(c(k,R),w[1])))),lt=p(p(u(c(Q,Mt),E[1]),p(u(c(yt,F),-M[1]),u(c(it,U),w[1]))),p(u(c(ut,O),E[1]),p(u(c(it,U),-S[1]),u(c(k,R),M[1])))),ht=c(ct,lt);return ht[ht.length-1]}return C}function g(p,c,v,u){function C(E,S,M,w,A){var R=p(v(E[0],E[0]),p(v(E[1],E[1]),v(E[2],E[2]))),U=u(R,S[0]),F=u(R,M[0]),B=u(R,w[0]),k=u(R,A[0]),O=p(v(S[0],S[0]),p(v(S[1],S[1]),v(S[2],S[2]))),Z=u(O,E[0]),at=u(O,M[0]),it=u(O,w[0]),ut=u(O,A[0]),Mt=p(v(M[0],M[0]),p(v(M[1],M[1]),v(M[2],M[2]))),St=u(Mt,E[0]),yt=u(Mt,S[0]),$=u(Mt,w[0]),Q=u(Mt,A[0]),ct=p(v(w[0],w[0]),p(v(w[1],w[1]),v(w[2],w[2]))),lt=u(ct,E[0]),ht=u(ct,S[0]),At=u(ct,M[0]),qt=u(ct,A[0]),N=p(v(A[0],A[0]),p(v(A[1],A[1]),v(A[2],A[2]))),tt=u(N,E[0]),J=u(N,S[0]),Y=u(N,M[0]),q=u(N,w[0]),mt=p(p(p(u(p(u(c(q,qt),M[1]),p(u(c(Y,Q),-w[1]),u(c(At,$),A[1]))),S[2]),p(u(p(u(c(q,qt),S[1]),p(u(c(J,ut),-w[1]),u(c(ht,it),A[1]))),-M[2]),u(p(u(c(Y,Q),S[1]),p(u(c(J,ut),-M[1]),u(c(yt,at),A[1]))),w[2]))),p(u(p(u(c(At,$),S[1]),p(u(c(ht,it),-M[1]),u(c(yt,at),w[1]))),-A[2]),p(u(p(u(c(q,qt),S[1]),p(u(c(J,ut),-w[1]),u(c(ht,it),A[1]))),E[2]),u(p(u(c(q,qt),E[1]),p(u(c(tt,k),-w[1]),u(c(lt,B),A[1]))),-S[2])))),p(p(u(p(u(c(J,ut),E[1]),p(u(c(tt,k),-S[1]),u(c(Z,U),A[1]))),w[2]),p(u(p(u(c(ht,it),E[1]),p(u(c(lt,B),-S[1]),u(c(Z,U),w[1]))),-A[2]),u(p(u(c(At,$),S[1]),p(u(c(ht,it),-M[1]),u(c(yt,at),w[1]))),E[2]))),p(u(p(u(c(At,$),E[1]),p(u(c(lt,B),-M[1]),u(c(St,F),w[1]))),-S[2]),p(u(p(u(c(ht,it),E[1]),p(u(c(lt,B),-S[1]),u(c(Z,U),w[1]))),M[2]),u(p(u(c(yt,at),E[1]),p(u(c(St,F),-S[1]),u(c(Z,U),M[1]))),-w[2]))))),nt=p(p(p(u(p(u(c(q,qt),M[1]),p(u(c(Y,Q),-w[1]),u(c(At,$),A[1]))),E[2]),u(p(u(c(q,qt),E[1]),p(u(c(tt,k),-w[1]),u(c(lt,B),A[1]))),-M[2])),p(u(p(u(c(Y,Q),E[1]),p(u(c(tt,k),-M[1]),u(c(St,F),A[1]))),w[2]),u(p(u(c(At,$),E[1]),p(u(c(lt,B),-M[1]),u(c(St,F),w[1]))),-A[2]))),p(p(u(p(u(c(Y,Q),S[1]),p(u(c(J,ut),-M[1]),u(c(yt,at),A[1]))),E[2]),u(p(u(c(Y,Q),E[1]),p(u(c(tt,k),-M[1]),u(c(St,F),A[1]))),-S[2])),p(u(p(u(c(J,ut),E[1]),p(u(c(tt,k),-S[1]),u(c(Z,U),A[1]))),M[2]),u(p(u(c(yt,at),E[1]),p(u(c(St,F),-S[1]),u(c(Z,U),M[1]))),-A[2])))),rt=c(mt,nt);return rt[rt.length-1]}return C}function y(p,c,v,u){function C(E,S,M,w,A,R){var U=p(p(v(E[0],E[0]),v(E[1],E[1])),p(v(E[2],E[2]),v(E[3],E[3]))),F=u(U,S[0]),B=u(U,M[0]),k=u(U,w[0]),O=u(U,A[0]),Z=u(U,R[0]),at=p(p(v(S[0],S[0]),v(S[1],S[1])),p(v(S[2],S[2]),v(S[3],S[3]))),it=u(at,E[0]),ut=u(at,M[0]),Mt=u(at,w[0]),St=u(at,A[0]),yt=u(at,R[0]),$=p(p(v(M[0],M[0]),v(M[1],M[1])),p(v(M[2],M[2]),v(M[3],M[3]))),Q=u($,E[0]),ct=u($,S[0]),lt=u($,w[0]),ht=u($,A[0]),At=u($,R[0]),qt=p(p(v(w[0],w[0]),v(w[1],w[1])),p(v(w[2],w[2]),v(w[3],w[3]))),N=u(qt,E[0]),tt=u(qt,S[0]),J=u(qt,M[0]),Y=u(qt,A[0]),q=u(qt,R[0]),mt=p(p(v(A[0],A[0]),v(A[1],A[1])),p(v(A[2],A[2]),v(A[3],A[3]))),nt=u(mt,E[0]),rt=u(mt,S[0]),Rt=u(mt,M[0]),Ct=u(mt,w[0]),L=u(mt,R[0]),I=p(p(v(R[0],R[0]),v(R[1],R[1])),p(v(R[2],R[2]),v(R[3],R[3]))),V=u(I,E[0]),W=u(I,S[0]),et=u(I,M[0]),X=u(I,w[0]),xt=u(I,A[0]),_t=p(p(p(u(p(p(u(p(u(c(xt,L),w[1]),p(u(c(X,q),-A[1]),u(c(Ct,Y),R[1]))),M[2]),u(p(u(c(xt,L),M[1]),p(u(c(et,At),-A[1]),u(c(Rt,ht),R[1]))),-w[2])),p(u(p(u(c(X,q),M[1]),p(u(c(et,At),-w[1]),u(c(J,lt),R[1]))),A[2]),u(p(u(c(Ct,Y),M[1]),p(u(c(Rt,ht),-w[1]),u(c(J,lt),A[1]))),-R[2]))),S[3]),p(u(p(p(u(p(u(c(xt,L),w[1]),p(u(c(X,q),-A[1]),u(c(Ct,Y),R[1]))),S[2]),u(p(u(c(xt,L),S[1]),p(u(c(W,yt),-A[1]),u(c(rt,St),R[1]))),-w[2])),p(u(p(u(c(X,q),S[1]),p(u(c(W,yt),-w[1]),u(c(tt,Mt),R[1]))),A[2]),u(p(u(c(Ct,Y),S[1]),p(u(c(rt,St),-w[1]),u(c(tt,Mt),A[1]))),-R[2]))),-M[3]),u(p(p(u(p(u(c(xt,L),M[1]),p(u(c(et,At),-A[1]),u(c(Rt,ht),R[1]))),S[2]),u(p(u(c(xt,L),S[1]),p(u(c(W,yt),-A[1]),u(c(rt,St),R[1]))),-M[2])),p(u(p(u(c(et,At),S[1]),p(u(c(W,yt),-M[1]),u(c(ct,ut),R[1]))),A[2]),u(p(u(c(Rt,ht),S[1]),p(u(c(rt,St),-M[1]),u(c(ct,ut),A[1]))),-R[2]))),w[3]))),p(p(u(p(p(u(p(u(c(X,q),M[1]),p(u(c(et,At),-w[1]),u(c(J,lt),R[1]))),S[2]),u(p(u(c(X,q),S[1]),p(u(c(W,yt),-w[1]),u(c(tt,Mt),R[1]))),-M[2])),p(u(p(u(c(et,At),S[1]),p(u(c(W,yt),-M[1]),u(c(ct,ut),R[1]))),w[2]),u(p(u(c(J,lt),S[1]),p(u(c(tt,Mt),-M[1]),u(c(ct,ut),w[1]))),-R[2]))),-A[3]),u(p(p(u(p(u(c(Ct,Y),M[1]),p(u(c(Rt,ht),-w[1]),u(c(J,lt),A[1]))),S[2]),u(p(u(c(Ct,Y),S[1]),p(u(c(rt,St),-w[1]),u(c(tt,Mt),A[1]))),-M[2])),p(u(p(u(c(Rt,ht),S[1]),p(u(c(rt,St),-M[1]),u(c(ct,ut),A[1]))),w[2]),u(p(u(c(J,lt),S[1]),p(u(c(tt,Mt),-M[1]),u(c(ct,ut),w[1]))),-A[2]))),R[3])),p(u(p(p(u(p(u(c(xt,L),w[1]),p(u(c(X,q),-A[1]),u(c(Ct,Y),R[1]))),S[2]),u(p(u(c(xt,L),S[1]),p(u(c(W,yt),-A[1]),u(c(rt,St),R[1]))),-w[2])),p(u(p(u(c(X,q),S[1]),p(u(c(W,yt),-w[1]),u(c(tt,Mt),R[1]))),A[2]),u(p(u(c(Ct,Y),S[1]),p(u(c(rt,St),-w[1]),u(c(tt,Mt),A[1]))),-R[2]))),E[3]),u(p(p(u(p(u(c(xt,L),w[1]),p(u(c(X,q),-A[1]),u(c(Ct,Y),R[1]))),E[2]),u(p(u(c(xt,L),E[1]),p(u(c(V,Z),-A[1]),u(c(nt,O),R[1]))),-w[2])),p(u(p(u(c(X,q),E[1]),p(u(c(V,Z),-w[1]),u(c(N,k),R[1]))),A[2]),u(p(u(c(Ct,Y),E[1]),p(u(c(nt,O),-w[1]),u(c(N,k),A[1]))),-R[2]))),-S[3])))),p(p(p(u(p(p(u(p(u(c(xt,L),S[1]),p(u(c(W,yt),-A[1]),u(c(rt,St),R[1]))),E[2]),u(p(u(c(xt,L),E[1]),p(u(c(V,Z),-A[1]),u(c(nt,O),R[1]))),-S[2])),p(u(p(u(c(W,yt),E[1]),p(u(c(V,Z),-S[1]),u(c(it,F),R[1]))),A[2]),u(p(u(c(rt,St),E[1]),p(u(c(nt,O),-S[1]),u(c(it,F),A[1]))),-R[2]))),w[3]),u(p(p(u(p(u(c(X,q),S[1]),p(u(c(W,yt),-w[1]),u(c(tt,Mt),R[1]))),E[2]),u(p(u(c(X,q),E[1]),p(u(c(V,Z),-w[1]),u(c(N,k),R[1]))),-S[2])),p(u(p(u(c(W,yt),E[1]),p(u(c(V,Z),-S[1]),u(c(it,F),R[1]))),w[2]),u(p(u(c(tt,Mt),E[1]),p(u(c(N,k),-S[1]),u(c(it,F),w[1]))),-R[2]))),-A[3])),p(u(p(p(u(p(u(c(Ct,Y),S[1]),p(u(c(rt,St),-w[1]),u(c(tt,Mt),A[1]))),E[2]),u(p(u(c(Ct,Y),E[1]),p(u(c(nt,O),-w[1]),u(c(N,k),A[1]))),-S[2])),p(u(p(u(c(rt,St),E[1]),p(u(c(nt,O),-S[1]),u(c(it,F),A[1]))),w[2]),u(p(u(c(tt,Mt),E[1]),p(u(c(N,k),-S[1]),u(c(it,F),w[1]))),-A[2]))),R[3]),u(p(p(u(p(u(c(X,q),M[1]),p(u(c(et,At),-w[1]),u(c(J,lt),R[1]))),S[2]),u(p(u(c(X,q),S[1]),p(u(c(W,yt),-w[1]),u(c(tt,Mt),R[1]))),-M[2])),p(u(p(u(c(et,At),S[1]),p(u(c(W,yt),-M[1]),u(c(ct,ut),R[1]))),w[2]),u(p(u(c(J,lt),S[1]),p(u(c(tt,Mt),-M[1]),u(c(ct,ut),w[1]))),-R[2]))),E[3]))),p(p(u(p(p(u(p(u(c(X,q),M[1]),p(u(c(et,At),-w[1]),u(c(J,lt),R[1]))),E[2]),u(p(u(c(X,q),E[1]),p(u(c(V,Z),-w[1]),u(c(N,k),R[1]))),-M[2])),p(u(p(u(c(et,At),E[1]),p(u(c(V,Z),-M[1]),u(c(Q,B),R[1]))),w[2]),u(p(u(c(J,lt),E[1]),p(u(c(N,k),-M[1]),u(c(Q,B),w[1]))),-R[2]))),-S[3]),u(p(p(u(p(u(c(X,q),S[1]),p(u(c(W,yt),-w[1]),u(c(tt,Mt),R[1]))),E[2]),u(p(u(c(X,q),E[1]),p(u(c(V,Z),-w[1]),u(c(N,k),R[1]))),-S[2])),p(u(p(u(c(W,yt),E[1]),p(u(c(V,Z),-S[1]),u(c(it,F),R[1]))),w[2]),u(p(u(c(tt,Mt),E[1]),p(u(c(N,k),-S[1]),u(c(it,F),w[1]))),-R[2]))),M[3])),p(u(p(p(u(p(u(c(et,At),S[1]),p(u(c(W,yt),-M[1]),u(c(ct,ut),R[1]))),E[2]),u(p(u(c(et,At),E[1]),p(u(c(V,Z),-M[1]),u(c(Q,B),R[1]))),-S[2])),p(u(p(u(c(W,yt),E[1]),p(u(c(V,Z),-S[1]),u(c(it,F),R[1]))),M[2]),u(p(u(c(ct,ut),E[1]),p(u(c(Q,B),-S[1]),u(c(it,F),M[1]))),-R[2]))),-w[3]),u(p(p(u(p(u(c(J,lt),S[1]),p(u(c(tt,Mt),-M[1]),u(c(ct,ut),w[1]))),E[2]),u(p(u(c(J,lt),E[1]),p(u(c(N,k),-M[1]),u(c(Q,B),w[1]))),-S[2])),p(u(p(u(c(tt,Mt),E[1]),p(u(c(N,k),-S[1]),u(c(it,F),w[1]))),M[2]),u(p(u(c(ct,ut),E[1]),p(u(c(Q,B),-S[1]),u(c(it,F),M[1]))),-w[2]))),R[3]))))),Lt=p(p(p(u(p(p(u(p(u(c(xt,L),w[1]),p(u(c(X,q),-A[1]),u(c(Ct,Y),R[1]))),M[2]),u(p(u(c(xt,L),M[1]),p(u(c(et,At),-A[1]),u(c(Rt,ht),R[1]))),-w[2])),p(u(p(u(c(X,q),M[1]),p(u(c(et,At),-w[1]),u(c(J,lt),R[1]))),A[2]),u(p(u(c(Ct,Y),M[1]),p(u(c(Rt,ht),-w[1]),u(c(J,lt),A[1]))),-R[2]))),E[3]),p(u(p(p(u(p(u(c(xt,L),w[1]),p(u(c(X,q),-A[1]),u(c(Ct,Y),R[1]))),E[2]),u(p(u(c(xt,L),E[1]),p(u(c(V,Z),-A[1]),u(c(nt,O),R[1]))),-w[2])),p(u(p(u(c(X,q),E[1]),p(u(c(V,Z),-w[1]),u(c(N,k),R[1]))),A[2]),u(p(u(c(Ct,Y),E[1]),p(u(c(nt,O),-w[1]),u(c(N,k),A[1]))),-R[2]))),-M[3]),u(p(p(u(p(u(c(xt,L),M[1]),p(u(c(et,At),-A[1]),u(c(Rt,ht),R[1]))),E[2]),u(p(u(c(xt,L),E[1]),p(u(c(V,Z),-A[1]),u(c(nt,O),R[1]))),-M[2])),p(u(p(u(c(et,At),E[1]),p(u(c(V,Z),-M[1]),u(c(Q,B),R[1]))),A[2]),u(p(u(c(Rt,ht),E[1]),p(u(c(nt,O),-M[1]),u(c(Q,B),A[1]))),-R[2]))),w[3]))),p(p(u(p(p(u(p(u(c(X,q),M[1]),p(u(c(et,At),-w[1]),u(c(J,lt),R[1]))),E[2]),u(p(u(c(X,q),E[1]),p(u(c(V,Z),-w[1]),u(c(N,k),R[1]))),-M[2])),p(u(p(u(c(et,At),E[1]),p(u(c(V,Z),-M[1]),u(c(Q,B),R[1]))),w[2]),u(p(u(c(J,lt),E[1]),p(u(c(N,k),-M[1]),u(c(Q,B),w[1]))),-R[2]))),-A[3]),u(p(p(u(p(u(c(Ct,Y),M[1]),p(u(c(Rt,ht),-w[1]),u(c(J,lt),A[1]))),E[2]),u(p(u(c(Ct,Y),E[1]),p(u(c(nt,O),-w[1]),u(c(N,k),A[1]))),-M[2])),p(u(p(u(c(Rt,ht),E[1]),p(u(c(nt,O),-M[1]),u(c(Q,B),A[1]))),w[2]),u(p(u(c(J,lt),E[1]),p(u(c(N,k),-M[1]),u(c(Q,B),w[1]))),-A[2]))),R[3])),p(u(p(p(u(p(u(c(xt,L),M[1]),p(u(c(et,At),-A[1]),u(c(Rt,ht),R[1]))),S[2]),u(p(u(c(xt,L),S[1]),p(u(c(W,yt),-A[1]),u(c(rt,St),R[1]))),-M[2])),p(u(p(u(c(et,At),S[1]),p(u(c(W,yt),-M[1]),u(c(ct,ut),R[1]))),A[2]),u(p(u(c(Rt,ht),S[1]),p(u(c(rt,St),-M[1]),u(c(ct,ut),A[1]))),-R[2]))),E[3]),u(p(p(u(p(u(c(xt,L),M[1]),p(u(c(et,At),-A[1]),u(c(Rt,ht),R[1]))),E[2]),u(p(u(c(xt,L),E[1]),p(u(c(V,Z),-A[1]),u(c(nt,O),R[1]))),-M[2])),p(u(p(u(c(et,At),E[1]),p(u(c(V,Z),-M[1]),u(c(Q,B),R[1]))),A[2]),u(p(u(c(Rt,ht),E[1]),p(u(c(nt,O),-M[1]),u(c(Q,B),A[1]))),-R[2]))),-S[3])))),p(p(p(u(p(p(u(p(u(c(xt,L),S[1]),p(u(c(W,yt),-A[1]),u(c(rt,St),R[1]))),E[2]),u(p(u(c(xt,L),E[1]),p(u(c(V,Z),-A[1]),u(c(nt,O),R[1]))),-S[2])),p(u(p(u(c(W,yt),E[1]),p(u(c(V,Z),-S[1]),u(c(it,F),R[1]))),A[2]),u(p(u(c(rt,St),E[1]),p(u(c(nt,O),-S[1]),u(c(it,F),A[1]))),-R[2]))),M[3]),u(p(p(u(p(u(c(et,At),S[1]),p(u(c(W,yt),-M[1]),u(c(ct,ut),R[1]))),E[2]),u(p(u(c(et,At),E[1]),p(u(c(V,Z),-M[1]),u(c(Q,B),R[1]))),-S[2])),p(u(p(u(c(W,yt),E[1]),p(u(c(V,Z),-S[1]),u(c(it,F),R[1]))),M[2]),u(p(u(c(ct,ut),E[1]),p(u(c(Q,B),-S[1]),u(c(it,F),M[1]))),-R[2]))),-A[3])),p(u(p(p(u(p(u(c(Rt,ht),S[1]),p(u(c(rt,St),-M[1]),u(c(ct,ut),A[1]))),E[2]),u(p(u(c(Rt,ht),E[1]),p(u(c(nt,O),-M[1]),u(c(Q,B),A[1]))),-S[2])),p(u(p(u(c(rt,St),E[1]),p(u(c(nt,O),-S[1]),u(c(it,F),A[1]))),M[2]),u(p(u(c(ct,ut),E[1]),p(u(c(Q,B),-S[1]),u(c(it,F),M[1]))),-A[2]))),R[3]),u(p(p(u(p(u(c(Ct,Y),M[1]),p(u(c(Rt,ht),-w[1]),u(c(J,lt),A[1]))),S[2]),u(p(u(c(Ct,Y),S[1]),p(u(c(rt,St),-w[1]),u(c(tt,Mt),A[1]))),-M[2])),p(u(p(u(c(Rt,ht),S[1]),p(u(c(rt,St),-M[1]),u(c(ct,ut),A[1]))),w[2]),u(p(u(c(J,lt),S[1]),p(u(c(tt,Mt),-M[1]),u(c(ct,ut),w[1]))),-A[2]))),E[3]))),p(p(u(p(p(u(p(u(c(Ct,Y),M[1]),p(u(c(Rt,ht),-w[1]),u(c(J,lt),A[1]))),E[2]),u(p(u(c(Ct,Y),E[1]),p(u(c(nt,O),-w[1]),u(c(N,k),A[1]))),-M[2])),p(u(p(u(c(Rt,ht),E[1]),p(u(c(nt,O),-M[1]),u(c(Q,B),A[1]))),w[2]),u(p(u(c(J,lt),E[1]),p(u(c(N,k),-M[1]),u(c(Q,B),w[1]))),-A[2]))),-S[3]),u(p(p(u(p(u(c(Ct,Y),S[1]),p(u(c(rt,St),-w[1]),u(c(tt,Mt),A[1]))),E[2]),u(p(u(c(Ct,Y),E[1]),p(u(c(nt,O),-w[1]),u(c(N,k),A[1]))),-S[2])),p(u(p(u(c(rt,St),E[1]),p(u(c(nt,O),-S[1]),u(c(it,F),A[1]))),w[2]),u(p(u(c(tt,Mt),E[1]),p(u(c(N,k),-S[1]),u(c(it,F),w[1]))),-A[2]))),M[3])),p(u(p(p(u(p(u(c(Rt,ht),S[1]),p(u(c(rt,St),-M[1]),u(c(ct,ut),A[1]))),E[2]),u(p(u(c(Rt,ht),E[1]),p(u(c(nt,O),-M[1]),u(c(Q,B),A[1]))),-S[2])),p(u(p(u(c(rt,St),E[1]),p(u(c(nt,O),-S[1]),u(c(it,F),A[1]))),M[2]),u(p(u(c(ct,ut),E[1]),p(u(c(Q,B),-S[1]),u(c(it,F),M[1]))),-A[2]))),-w[3]),u(p(p(u(p(u(c(J,lt),S[1]),p(u(c(tt,Mt),-M[1]),u(c(ct,ut),w[1]))),E[2]),u(p(u(c(J,lt),E[1]),p(u(c(N,k),-M[1]),u(c(Q,B),w[1]))),-S[2])),p(u(p(u(c(tt,Mt),E[1]),p(u(c(N,k),-S[1]),u(c(it,F),w[1]))),M[2]),u(p(u(c(ct,ut),E[1]),p(u(c(Q,B),-S[1]),u(c(it,F),M[1]))),-w[2]))),A[3]))))),Pt=c(_t,Lt);return Pt[Pt.length-1]}return C}var b=[h,l,f];function x(p){var c=b[p.length];return c||(c=b[p.length]=a(p.length)),c.apply(void 0,p)}function _(p,c,v,u,C,E,S,M){function w(A,R,U,F,B,k){switch(arguments.length){case 0:case 1:return 0;case 2:return u(A,R);case 3:return C(A,R,U);case 4:return E(A,R,U,F);case 5:return S(A,R,U,F,B);case 6:return M(A,R,U,F,B,k)}for(var O=new Array(arguments.length),Z=0;Z<arguments.length;++Z)O[Z]=arguments[Z];return p(O)}return w}function T(){for(;b.length<=o;)b.push(a(b.length));t.exports=_.apply(void 0,[x].concat(b));for(var p=0;p<=o;++p)t.exports[p]=b[p]}T()}}),iS=fn({"node_modules/cdt2d/lib/delaunay.js"(i,t){"use strict";var e=nS()[4],n=_l();t.exports=s;function r(o,a,h,l,f,d){var m=a.opposite(l,f);if(!(m<0)){if(f<l){var g=l;l=f,f=g,g=d,d=m,m=g}a.isConstraint(l,f)||e(o[l],o[f],o[d],o[m])<0&&h.push(l,f)}}function s(o,a){for(var h=[],l=o.length,f=a.stars,d=0;d<l;++d)for(var m=f[d],g=1;g<m.length;g+=2){var y=m[g];if(!(y<d)&&!a.isConstraint(d,y)){for(var b=m[g-1],x=-1,_=1;_<m.length;_+=2)if(m[_-1]===y){x=m[_];break}x<0||e(o[d],o[y],o[b],o[x])<0&&h.push(d,y)}}for(;h.length>0;){for(var y=h.pop(),d=h.pop(),b=-1,x=-1,m=f[d],T=1;T<m.length;T+=2){var p=m[T-1],c=m[T];p===y?x=c:c===y&&(b=p)}b<0||x<0||e(o[d],o[y],o[b],o[x])>=0||(a.flip(d,y),r(o,a,h,b,d,x),r(o,a,h,d,x,b),r(o,a,h,x,y,b),r(o,a,h,y,b,x))}}}}),rS=fn({"node_modules/cdt2d/lib/filter.js"(i,t){"use strict";var e=_l();t.exports=h;function n(l,f,d,m,g,y,b){this.cells=l,this.neighbor=f,this.flags=m,this.constraint=d,this.active=g,this.next=y,this.boundary=b}var r=n.prototype;function s(l,f){return l[0]-f[0]||l[1]-f[1]||l[2]-f[2]}r.locate=(function(){var l=[0,0,0];return function(f,d,m){var g=f,y=d,b=m;return d<m?d<f&&(g=d,y=m,b=f):m<f&&(g=m,y=f,b=d),g<0?-1:(l[0]=g,l[1]=y,l[2]=b,e.eq(this.cells,l,s))}})();function o(l,f){for(var d=l.cells(),m=d.length,g=0;g<m;++g){var y=d[g],b=y[0],x=y[1],_=y[2];x<_?x<b&&(y[0]=x,y[1]=_,y[2]=b):_<b&&(y[0]=_,y[1]=b,y[2]=x)}d.sort(s);for(var T=new Array(m),g=0;g<T.length;++g)T[g]=0;var p=[],c=[],v=new Array(3*m),u=new Array(3*m),C=null;f&&(C=[]);for(var E=new n(d,v,u,T,p,c,C),g=0;g<m;++g)for(var y=d[g],S=0;S<3;++S){var b=y[S],x=y[(S+1)%3],M=v[3*g+S]=E.locate(x,b,l.opposite(x,b)),w=u[3*g+S]=l.isConstraint(b,x);M<0&&(w?c.push(g):(p.push(g),T[g]=1),f&&C.push([x,b,-1]))}return E}function a(l,f,d){for(var m=0,g=0;g<l.length;++g)f[g]===d&&(l[m++]=l[g]);return l.length=m,l}function h(l,f,d){var m=o(l,d);if(f===0)return d?m.cells.concat(m.boundary):m.cells;for(var g=1,y=m.active,b=m.next,x=m.flags,_=m.cells,T=m.constraint,p=m.neighbor;y.length>0||b.length>0;){for(;y.length>0;){var c=y.pop();if(x[c]!==-g){x[c]=g;for(var v=_[c],u=0;u<3;++u){var C=p[3*c+u];C>=0&&x[C]===0&&(T[3*c+u]?b.push(C):(y.push(C),x[C]=g))}}}var E=b;b=y,y=E,b.length=0,g=-g}var S=a(_,x,f);return d?S.concat(m.boundary):S}}}),sS=fn({"node_modules/cdt2d/cdt2d.js"(i,t){var e=tS(),n=eS(),r=iS(),s=rS();t.exports=f;function o(d){return[Math.min(d[0],d[1]),Math.max(d[0],d[1])]}function a(d,m){return d[0]-m[0]||d[1]-m[1]}function h(d){return d.map(o).sort(a)}function l(d,m,g){return m in d?d[m]:g}function f(d,m,g){Array.isArray(m)?(g=g||{},m=m||[]):(g=m||{},m=[]);var y=!!l(g,"delaunay",!0),b=!!l(g,"interior",!0),x=!!l(g,"exterior",!0),_=!!l(g,"infinity",!1);if(!b&&!x||d.length===0)return[];var T=e(d,m);if(y||b!==x||_){for(var p=n(d.length,h(m)),c=0;c<T.length;++c){var v=T[c];p.addTriangle(v[0],v[1],v[2])}return y&&r(d,p),x?b?_?s(p,0,_):p.cells():s(p,1,_):s(p,-1)}else return T}}}),ym=sS();var dn=class{constructor(t){this.createFn=t,this._pool=[],this._index=0}getInstance(){return this._index>=this._pool.length&&this._pool.push(this.createFn()),this._pool[this._index++]}clear(){this._index=0}reset(){this._pool.length=0,this._index=0}};var vm=1e-16,oS=1e-16,nr=new D,Mm=new D,Sm=new dn(()=>({param:0,index:0})),aS=new dn(()=>new D);function cS(i,t,e,n){Sm.clear(),t.length=0,e.length=0;for(let l=0,f=i.length;l<f;l++){let d=i[l];h(d.start),h(d.end)}for(let l=0,f=i.length;l<f;l++){let d=i[l];for(let m=l+1;m<f;m++){let g=i[m];d.distanceSqToLine3(g,nr,Mm)<vm*n&&h(Mm)}}let r=[];for(let l=0,f=i.length;l<f;l++){r.length=0;let d=i[l];for(let m=0,g=t.length;m<g;m++){let y=t[m],b=d.closestPointToPointParameter(y,!0);if(d.at(b,nr),y.distanceToSquared(nr)<vm*n){let x=Sm.getInstance();x.param=b,x.index=m,r.push(x)}}r.sort(a);for(let m=0,g=r.length-1;m<g;m++){let y=r[m].index,b=r[m+1].index;y!==b&&e.push([y,b])}}let s=new Set,o=0;for(let l=0,f=e.length;l<f;l++){let d=e[l],m=Math.min(d[0],d[1]),g=Math.max(d[0],d[1]),y=m+","+g;s.has(y)||(s.add(y),e[o++]=d)}e.length=o;function a(l,f){return l.param-f.param}function h(l){for(let f=0;f<t.length;f++){let d=t[f];if(l===d||l.distanceToSquared(d)<oS*n)return f}return t.push(aS.getInstance().copy(l)),t.length-1}}var go=class{constructor(){this.trianglePool=new dn(()=>new we),this.linePool=new dn(()=>new he),this.triangles=[],this.triangleIndices=[],this.constrainedEdges=[],this.triangleConnectivity=[],this.normal=new D,this.projOrigin=new D,this.projU=new D,this.projV=new D,this.baseTri=new we,this.baseIndices=new Array(3)}initialize(t,e=null,n=null,r=null){this.reset();let{normal:s,baseTri:o,projU:a,projV:h,projOrigin:l,constrainedEdges:f,linePool:d,baseIndices:m}=this;t.getNormal(s),o.copy(t),o.update(),m[0]=e,m[1]=n,m[2]=r,f.length=0;let g=d.getInstance();g.start.copy(o.a),g.end.copy(o.b);let y=d.getInstance();y.start.copy(o.b),y.end.copy(o.c);let b=d.getInstance();b.start.copy(o.c),b.end.copy(o.a),f.push(g,y,b),l.copy(o.a),a.subVectors(o.b,o.a).normalize(),h.crossVectors(s,a).normalize()}addConstraintEdge(t){let{constrainedEdges:e,linePool:n}=this,r=n.getInstance().copy(t);e.push(r)}_to2D(t,e){let{projOrigin:n,projU:r,projV:s}=this;return nr.subVectors(t,n),e.set(nr.dot(r),nr.dot(s),0)}_from2D(t,e,n){let{projOrigin:r,projU:s,projV:o}=this;return n.copy(r).addScaledVector(s,t).addScaledVector(o,e),n}triangulate(){let{triangles:t,trianglePool:e,triangleConnectivity:n,triangleIndices:r,linePool:s,baseTri:o,constrainedEdges:a,baseIndices:h}=this;t.length=0,e.clear();let l=[];for(let _=0,T=a.length;_<T;_++){let p=a[_],c=s.getInstance();this._to2D(p.start,c.start),this._to2D(p.end,c.end),l.push(c)}let f=0;for(let _=0;_<3;_++){let T=this._to2D(o.points[_],nr);f=Math.max(f,Math.abs(T.x),Math.abs(T.y))}let d=[],m=[];cS(l,d,m,f);let g=[];for(let _=0,T=d.length;_<T;_++){let p=d[_];g.push([p.x,p.y])}let y=ym(g,m,{exterior:!1}),b=new Map;for(let _=0,T=m.length;_<T;_++){let p=m[_];b.set(`${p[0]}_${p[1]}`,-1),b.set(`${p[1]}_${p[0]}`,-1)}let x=`${h[0]}_${h[1]}_${h[2]}_`;for(let _=0,T=y.length;_<T;_++){let p=y[_],[c,v,u]=p,C=e.getInstance();this._from2D(g[c][0],g[c][1],C.a),this._from2D(g[v][0],g[v][1],C.b),this._from2D(g[u][0],g[u][1],C.c),t.push(C);let E=[];n.push(E);let S=[];r.push(S);for(let M=0;M<3;M++){let w=p[M];S.push(w<3?h[w]:x+w);let A=p[(M+1)%3],R=`${w}_${A}`;if(b.has(R)){let U=b.get(R);U!==-1&&(E.push(U),n[U].push(_))}else{let U=`${A}_${w}`;b.set(U,_)}}}}reset(){this.trianglePool.clear(),this.linePool.clear(),this.triangles.length=0,this.triangleIndices.length=0,this.triangleConnectivity.length=0,this.constrainedEdges.length=0}};var lS=1e-14,Xu=new D,bm=new D,Tm=new D;function Dn(i,t=lS){Xu.subVectors(i.b,i.a),bm.subVectors(i.c,i.a),Tm.subVectors(i.b,i.c);let e=Xu.angleTo(bm),n=Xu.angleTo(Tm),r=Math.PI-e-n;return Math.abs(e)<t||Math.abs(n)<t||Math.abs(r)<t||i.a.distanceToSquared(i.b)<t||i.a.distanceToSquared(i.c)<t||i.b.distanceToSquared(i.c)<t}var qu=1e-10,_o=1e-10,si=new he,Re=new he,oi=new D,wm=new D,Em=new D,xl=new Ae,Yu=new we,xo=class{constructor(){this.trianglePool=new dn(()=>new le),this.triangles=[],this.normal=new D}initialize(t){this.reset();let{triangles:e,trianglePool:n,normal:r}=this;if(Array.isArray(t))for(let s=0,o=t.length;s<o;s++){let a=t[s];if(s===0)a.getNormal(r);else if(Math.abs(1-a.getNormal(oi).dot(r))>qu)throw new Error("Triangle Splitter: Cannot initialize with triangles that have different normals.");let h=n.getInstance();h.copy(a),e.push(h)}else{t.getNormal(r);let s=n.getInstance();s.copy(t),e.push(s)}}splitByTriangle(t,e){let{triangles:n}=this;if(e){for(let s=0,o=n.length;s<o;s++){let a=n[s];a.coplanarCount=0}let r=[t.a,t.b,t.c];for(let s=0;s<3;s++){let o=(s+1)%3,a=r[s],h=r[o];t.getNormal(wm).normalize(),oi.subVectors(h,a).normalize(),Em.crossVectors(wm,oi),xl.setFromNormalAndCoplanarPoint(Em,a),this.splitByPlane(xl,t)}}else t.getPlane(xl),this.splitByPlane(xl,t)}splitByPlane(t,e){let{triangles:n,trianglePool:r}=this;Yu.copy(e),Yu.needsUpdate=!0;for(let s=0,o=n.length;s<o;s++){let a=n[s];if(!Yu.intersectsTriangle(a,si,!0))continue;let{a:h,b:l,c:f}=a,d=0,m=-1,g=!1,y=[],b=[],x=[h,l,f];for(let _=0;_<3;_++){let T=(_+1)%3;si.start.copy(x[_]),si.end.copy(x[T]);let p=t.distanceToPoint(si.start),c=t.distanceToPoint(si.end);if(Math.abs(p)<_o&&Math.abs(c)<_o){g=!0;break}if(p>0?y.push(_):b.push(_),Math.abs(p)<_o)continue;let v=!!t.intersectLine(si,oi);!v&&Math.abs(c)<_o&&(oi.copy(si.end),v=!0),v&&!(oi.distanceTo(si.start)<qu)&&(oi.distanceTo(si.end)<qu&&(m=_),d===0?Re.start.copy(oi):Re.end.copy(oi),d++)}if(!g&&d===2&&Re.distance()>_o)if(m!==-1){m=(m+1)%3;let _=0;_===m&&(_=(_+1)%3);let T=_+1;T===m&&(T=(T+1)%3);let p=r.getInstance();p.a.copy(x[T]),p.b.copy(Re.end),p.c.copy(Re.start),Dn(p)||n.push(p),a.a.copy(x[_]),a.b.copy(Re.start),a.c.copy(Re.end),Dn(a)&&(n.splice(s,1),s--,o--)}else{let _=y.length>=2?b[0]:y[0];if(_===0){let u=Re.start;Re.start=Re.end,Re.end=u}let T=(_+1)%3,p=(_+2)%3,c=r.getInstance(),v=r.getInstance();x[T].distanceToSquared(Re.start)<x[p].distanceToSquared(Re.end)?(c.a.copy(x[T]),c.b.copy(Re.start),c.c.copy(Re.end),v.a.copy(x[T]),v.b.copy(x[p]),v.c.copy(Re.start)):(c.a.copy(x[p]),c.b.copy(Re.start),c.c.copy(Re.end),v.a.copy(x[T]),v.b.copy(x[p]),v.c.copy(Re.end)),a.a.copy(x[_]),a.b.copy(Re.end),a.c.copy(Re.start),Dn(c)||n.push(c),Dn(v)||n.push(v),Dn(a)&&(n.splice(s,1),s--,o--)}else d===3&&console.warn("TriangleClipper: Coplanar clip not handled")}}reset(){this.triangles.length=0,this.trianglePool.clear()}};var yo=class{constructor(){this.coplanarSet=new Map,this.intersectionSet=new Map,this.edgeSet=new Map,this.ids=[]}add(t,e,n=!1){let{intersectionSet:r,coplanarSet:s,ids:o}=this;r.has(t)||(r.set(t,[]),o.push(t)),r.get(t).push(e),n&&(s.has(t)||s.set(t,new Set),s.get(t).add(e))}addIntersectionEdge(t,e){let{edgeSet:n}=this;n.has(t)||n.set(t,new Set),n.get(t).add(e)}getIntersectionEdges(t){return this.edgeSet.get(t)||null}};var Am=0,Cm=1;var Rm=3;var Zu=1e-10,hS=1e-15,uS=1e-10,fS=1e-10,Im=new he,us=new he,Pm=new D,Dm=new D,Lm=new D,$u=new Ae,fs=new D,yl=new D;function Um(i,t){i.getNormal(fs),t.getNormal(yl);let e=fs.dot(yl);if(Math.abs(1-Math.abs(e))>=uS)return!1;let n=fs.dot(i.a),r=fs.dot(t.a);return Math.abs(n-r)<fS}function Nm(i,t,e,n){let r=0,s=1;i.delta(Pm);let o=[t.a,t.b,t.c];for(let a=0;a<3;a++){let h=o[a],l=o[(a+1)%3];Dm.subVectors(l,h),Lm.crossVectors(e,Dm),$u.setFromNormalAndCoplanarPoint(Lm,h);let f=$u.distanceToPoint(i.start),d=$u.normal.dot(Pm);if(Math.abs(d)<hS){if(f<-Zu)return null;continue}let m=-f/d;if(d>0?r=Math.max(r,m):s=Math.min(s,m),r>s+Zu)return null}return s-r<Zu?null:(i.at(r,n.start),i.at(s,n.end),n)}function Ju(i,t,e){let n=0;i.getNormal(fs),t.getNormal(yl);let r=[t.a,t.b,t.c];for(let o=0;o<3;o++){us.start.copy(r[o]),us.end.copy(r[(o+1)%3]);let a=Nm(us,i,fs,Im);a!==null&&(n>=e.length&&e.push(new he),e[n].copy(a),n++)}let s=[i.a,i.b,i.c];for(let o=0;o<3;o++){us.start.copy(s[o]),us.end.copy(s[(o+1)%3]);let a=Nm(us,t,yl,Im);a!==null&&(n>=e.length&&e.push(new he),e[n].copy(a),n++)}return n}var ds=new Je,Fm=new kt,vl=new he,Ku=[],Ml=new dn(()=>new he),ps=-1,ms=1,vo=-2,Mo=2,gs=0,ir=1,bl=2,Sl=null;function ju(i){Sl=i}function Qu(i,t,e=null){i.getMidpoint(ds.origin),i.getNormal(ds.direction),e&&(ds.origin.applyMatrix4(e),ds.direction.transformDirection(e));let n=t.raycastFirst(ds,Ye);return!!(n&&ds.direction.dot(n.face.normal)>0)?ps:ms}function Bm(i,t){let e=new yo,n=new yo;return Ml.clear(),Fm.copy(i.matrixWorld).invert().multiply(t.matrixWorld),i.geometry.boundsTree.bvhcast(t.geometry.boundsTree,Fm,{intersectsTriangles(r,s,o,a){if(!Dn(r)&&!Dn(s)){let l=(Um(r,s)?Ju(r,s,Ku):0)>2;if(l||r.intersectsTriangle(s,vl,!0)){let d=i.geometry.boundsTree.resolveTriangleIndex(o),m=t.geometry.boundsTree.resolveTriangleIndex(a);if(e.add(d,m,l),n.add(m,d,l),l){let g=Ju(r,s,Ku);for(let y=0;y<g;y++){let b=Ml.getInstance().copy(Ku[y]);e.addIntersectionEdge(d,b),n.addIntersectionEdge(m,b)}}else{let g=Ml.getInstance().copy(vl),y=Ml.getInstance().copy(vl);e.addIntersectionEdge(d,g),n.addIntersectionEdge(m,y)}Sl&&(Sl.addEdge(vl),Sl.addIntersectingTriangles(o,r,a,s))}}return!1}}),{aIntersections:e,bIntersections:n}}function tf(i,t,e=!1){switch(i){case 0:if(t===ms||t===Mo&&!e)return ir;break;case 1:if(e){if(t===ps)return gs}else if(t===ms||t===vo)return ir;break;case 2:if(e){if(t===ms||t===vo)return ir}else if(t===ps)return gs;break;case 4:if(t===ps)return gs;if(t===ms)return ir;break;case 3:if(t===ps||t===Mo&&!e)return ir;break;case 5:if(!e&&(t===ms||t===vo))return ir;break;case 6:if(!e&&(t===ps||t===Mo))return ir;break;default:throw new Error(`Unrecognized CSG operation enum "${i}".`)}return bl}var ef=class{constructor(t){this.triangle=new le().copy(t),this.intersects={}}addTriangle(t,e){this.intersects[t]=new le().copy(e)}getIntersectArray(){let t=[],{intersects:e}=this;for(let n in e)t.push(e[n]);return t}},Tl=class{constructor(){this.data={}}addTriangleIntersection(t,e,n,r){let{data:s}=this;s[t]||(s[t]=new ef(e)),s[t].addTriangle(n,r)}getTrianglesAsArray(t=null){let{data:e}=this,n=[];if(t!==null)t in e&&n.push(e[t].triangle);else for(let r in e)n.push(e[r].triangle);return n}getTriangleIndices(){return Object.keys(this.data).map(t=>parseInt(t))}getIntersectionIndices(t){let{data:e}=this;return e[t]?Object.keys(e[t].intersects).map(n=>parseInt(n)):[]}getIntersectionsAsArray(t=null,e=null){let{data:n}=this,r=new Set,s=[],o=a=>{if(n[a])if(e!==null)n[a].intersects[e]&&s.push(n[a].intersects[e]);else{let h=n[a].intersects;for(let l in h)r.has(l)||(r.add(l),s.push(h[l]))}};if(t!==null)o(t);else for(let a in n)o(a);return s}reset(){this.data={}}},wl=class{constructor(){this.enabled=!1,this.triangleIntersectsA=new Tl,this.triangleIntersectsB=new Tl,this.intersectionEdges=[]}addIntersectingTriangles(t,e,n,r){let{triangleIntersectsA:s,triangleIntersectsB:o}=this;s.addTriangleIntersection(t,e,n,r),o.addTriangleIntersection(n,r,t,e)}addEdge(t){this.intersectionEdges.push(t.clone())}reset(){this.triangleIntersectsA.reset(),this.triangleIntersectsB.reset(),this.intersectionEdges=[]}init(){this.enabled&&(this.reset(),ju(this))}complete(){this.enabled&&ju(null)}};var pn=new kt,rr=new kt,je=new kt,Ri=new Xt,Ln=new le,sr=new le,Nn=new le,Ci=new le,or=[],Hn=[],El=new Set,Om=new D,zm=new D,Vm=new dn(()=>new le),km=new D,Al=[];function Wm(i,t,e,n,r,s={}){let{useGroups:o=!0}=s,{aIntersections:a,bIntersections:h}=Bm(i,t),l=[],f=null,d;return d=o?0:-1,Gm(i,t,a,e,!1,r,d),Hm(i,t,a,e,!1,n,r,d),e.findIndex(g=>g!==6&&g!==5)!==-1&&(r.forEach(g=>g.clearIndexMap()),d=o?i.geometry.groups.length||1:-1,Gm(t,i,h,e,!0,r,d),Hm(t,i,h,e,!0,n,r,d)),r.forEach(g=>g.clearIndexMap()),or.length=0,{groups:l,materials:f}}function Hm(i,t,e,n,r,s,o,a=0){pn.copy(t.matrixWorld).invert().multiply(i.matrixWorld),rr.copy(pn).invert(),r?je.copy(pn):je.identity();let h=je.determinant()<0;Ri.getNormalMatrix(je).multiplyScalar(h?-1:1);let l=i.geometry.groupIndices,f=i.geometry.index,d=i.geometry.attributes.position,m=t.geometry.boundsTree,g=t.geometry.index,y=t.geometry.attributes.position,b=e.ids;for(let x=0,_=b.length;x<_;x++){let T=b[x],p=a===-1?0:l[T]+a,c=3*T,v=c+0,u=c+1,C=c+2;f&&(v=f.getX(v),u=f.getX(u),C=f.getX(C)),Ln.a.fromBufferAttribute(d,v),Ln.b.fromBufferAttribute(d,u),Ln.c.fromBufferAttribute(d,C),r&&(Ln.a.applyMatrix4(pn),Ln.b.applyMatrix4(pn),Ln.c.applyMatrix4(pn)),s.reset(),s.initialize(Ln,v,u,C),Al.length=0,Vm.clear(),Ln.getNormal(zm);let E=e.coplanarSet.get(T);if(E)for(let A of E){let R=3*A,U=R+0,F=R+1,B=R+2;g&&(U=g.getX(U),F=g.getX(F),B=g.getX(B));let k=Vm.getInstance();k.a.fromBufferAttribute(y,U),k.b.fromBufferAttribute(y,F),k.c.fromBufferAttribute(y,B),r||(k.a.applyMatrix4(rr),k.b.applyMatrix4(rr),k.c.applyMatrix4(rr)),Al.push(k)}if(s.addConstraintEdge){let A=e.getIntersectionEdges(T);if(A)for(let R of A)s.addConstraintEdge(R);s.triangulate()}else{let R=e.intersectionSet.get(T);for(let U=0,F=R.length;U<F;U++){let B=R[U],k=E&&E.has(B),O=3*B,Z=O+0,at=O+1,it=O+2;g&&(Z=g.getX(Z),at=g.getX(at),it=g.getX(it)),sr.a.fromBufferAttribute(y,Z),sr.b.fromBufferAttribute(y,at),sr.c.fromBufferAttribute(y,it),r||(sr.a.applyMatrix4(rr),sr.b.applyMatrix4(rr),sr.c.applyMatrix4(rr)),s.splitByTriangle(sr,k)}}let{triangles:S,triangleIndices:M=[],triangleConnectivity:w=[]}=s;for(let A=0,R=o.length;A<R;A++)o[A].initInterpolatedAttributeData(i.geometry,je,Ri,v,u,C);El.clear();for(let A=0,R=S.length;A<R;A++){if(El.has(A))continue;let U=S[A],F=r?null:pn,B=null;U.getMidpoint(Om);for(let k=0,O=Al.length;k<O;k++){let Z=Al[k];if(Z.containsPoint(Om)){Z.getNormal(km),B=zm.dot(km)>0?Mo:vo;break}}B===null&&(B=Qu(U,m,F)),or.length=0,Hn.length=0;for(let k=0,O=n.length;k<O;k++){let Z=tf(n[k],B,r);Z!==bl&&(or.push(Z),Hn.push(o[k]))}if(Hn.length!==0){let k=[A];for(;k.length>0;){let O=k.pop();if(El.has(O))continue;El.add(O);let Z=M[O],at=null,it=null,ut=null;Z&&(at=Z[0],it=Z[1],ut=Z[2]);let Mt=S[O];Ln.getBarycoord(Mt.a,Ci.a),Ln.getBarycoord(Mt.b,Ci.b),Ln.getBarycoord(Mt.c,Ci.c);for(let St=0,yt=Hn.length;St<yt;St++){let $=Hn[St],ct=or[St]===gs,lt=h!==ct;$.appendInterpolatedAttributeData(p,Ci.a,at,lt),lt?($.appendInterpolatedAttributeData(p,Ci.c,ut,lt),$.appendInterpolatedAttributeData(p,Ci.b,it,lt)):($.appendInterpolatedAttributeData(p,Ci.b,it,lt),$.appendInterpolatedAttributeData(p,Ci.c,ut,lt))}}}}}return b.length}function Gm(i,t,e,n,r,s,o=0){pn.copy(t.matrixWorld).invert().multiply(i.matrixWorld),r?je.copy(pn):je.identity();let a=je.determinant()<0;Ri.getNormalMatrix(je).multiplyScalar(a?-1:1);let h=t.geometry.boundsTree,l=i.geometry.groupIndices,f=i.geometry.index,m=i.geometry.attributes.position,g=[],y=i.geometry.halfEdges,b=new Set(e.ids),x=ls(i.geometry);for(let _=0;_<x&&b.size!==x;_++){if(b.has(_))continue;b.add(_),g.push(_);let T=3*_,p=T+0,c=T+1,v=T+2;f&&(p=f.getX(p),c=f.getX(c),v=f.getX(v)),Nn.a.fromBufferAttribute(m,p),Nn.b.fromBufferAttribute(m,c),Nn.c.fromBufferAttribute(m,v),r&&(Nn.a.applyMatrix4(pn),Nn.b.applyMatrix4(pn),Nn.c.applyMatrix4(pn));let u=Qu(Nn,h,r?null:pn);or.length=0,Hn.length=0;for(let C=0,E=n.length;C<E;C++){let S=tf(n[C],u,r);S!==bl&&(or.push(S),Hn.push(s[C]))}for(;g.length>0;){let C=g.pop();for(let E=0;E<3;E++){let S=y.getSiblingTriangleIndex(C,E);S!==-1&&!b.has(S)&&(g.push(S),b.add(S))}if(Hn.length!==0){let E=3*C,S=E+0,M=E+1,w=E+2;f&&(S=f.getX(S),M=f.getX(M),w=f.getX(w));let A=o===-1?0:l[C]+o;if(Nn.a.fromBufferAttribute(m,S),Nn.b.fromBufferAttribute(m,M),Nn.c.fromBufferAttribute(m,w),!Dn(Nn))for(let R=0,U=Hn.length;R<U;R++){let F=Hn[R],O=or[R]===gs!==a;F.appendIndexFromGeometry(i.geometry,je,Ri,A,S,O),O?(F.appendIndexFromGeometry(i.geometry,je,Ri,A,w,O),F.appendIndexFromGeometry(i.geometry,je,Ri,A,M,O)):(F.appendIndexFromGeometry(i.geometry,je,Ri,A,M,O),F.appendIndexFromGeometry(i.geometry,je,Ri,A,w,O))}}}}}function mS(i){return i=~~i,i+4-i%4}var Cl=class{constructor(t,e=500){this.expansionFactor=1.5,this.type=t,this.length=0,this.array=null,this.setSize(e)}setType(t){if(t===this.type)return;if(this.length!==0)throw new Error("TypeBackedArray: Cannot change the type while there is used data in the buffer.");let e=this.array.buffer;this.array=new t(e),this.type=t}setSize(t){if(this.array&&t===this.array.length)return;let e=this.type,n=dl()?SharedArrayBuffer:ArrayBuffer,r=new e(new n(mS(t*e.BYTES_PER_ELEMENT)));this.array&&r.set(this.array,0),this.array=r}expand(){let{array:t,expansionFactor:e}=this;this.setSize(t.length*e)}push(...t){let{array:e,length:n}=this;n+t.length>e.length&&(this.expand(),e=this.array);for(let r=0,s=t.length;r<s;r++)e[n+r]=t[r];this.length+=t.length}clear(){this.length=0}};var Qe=new D,nf=new D,rf=new D,sf=new D,Rl=new se,gS=new se,_S=new se,xS=new se;function yS(i,t,e,n,r,s=!1,o=!1){return r.set(0,0,0,0).addScaledVector(i,n.x).addScaledVector(t,n.y).addScaledVector(e,n.z),s&&r.normalize(),o&&r.multiplyScalar(-1),r}function Xm(i,t,e){switch(t){case 1:e.push(i.x);break;case 2:e.push(i.x,i.y);break;case 3:e.push(i.x,i.y,i.z);break;case 4:e.push(i.x,i.y,i.z,i.w);break}}var So=class extends Cl{get count(){return this.length/this.itemSize}constructor(...t){super(...t),this.itemSize=1,this.normalized=!1}},Il=class{constructor(){this.attributeData={},this.groupIndices=[],this.forwardIndexMap=new Map,this.invertedIndexMap=new Map,this.interpolatedFields={}}initFromGeometry(t,e){this.clear();let{attributeData:n}=this,r=t.attributes;for(let s=0,o=e.length;s<o;s++){let a=e[s],h=r[a],l=h.array.constructor;n[a]||(n[a]=new So(l)),n[a].setType(l),n[a].itemSize=h.itemSize,n[a].normalized=h.normalized}for(let s in n.attributes)e.includes(s)||n.delete(s)}initInterpolatedAttributeData(t,e,n,r,s,o){let{attributeData:a,interpolatedFields:h}=this,{attributes:l}=t;for(let f in a){let d=l[f];if(!d)throw new Error(`CSG Operations: Attribute ${f} not available on geometry.`);let m,g,y;if(f==="position"?(m=nf.fromBufferAttribute(d,r).applyMatrix4(e),g=rf.fromBufferAttribute(d,s).applyMatrix4(e),y=sf.fromBufferAttribute(d,o).applyMatrix4(e)):f==="normal"?(m=nf.fromBufferAttribute(d,r).applyNormalMatrix(n),g=rf.fromBufferAttribute(d,s).applyNormalMatrix(n),y=sf.fromBufferAttribute(d,o).applyNormalMatrix(n)):f==="tangent"?(m=nf.fromBufferAttribute(d,r).transformDirection(e),g=rf.fromBufferAttribute(d,s).transformDirection(e),y=sf.fromBufferAttribute(d,o).transformDirection(e)):(m=gS.fromBufferAttribute(d,r),g=_S.fromBufferAttribute(d,s),y=xS.fromBufferAttribute(d,o)),!h[f])h[f]=[m.clone(),g.clone(),y.clone()];else{let b=h[f];b[0].copy(m),b[1].copy(g),b[2].copy(y)}}}appendInterpolatedAttributeData(t,e,n=null,r=!1){let{groupIndices:s,attributeData:o,interpolatedFields:a,forwardIndexMap:h,invertedIndexMap:l}=this;for(;s.length<=t;)s.push(new So(Uint32Array));let f=r?l:h,d=s[t];if(n!==null&&f.has(n))d.push(f.get(n));else{f.set(n,o.position.count),d.push(o.position.count);for(let m in a){let g=o[m],y=m==="normal"||m==="tangent",b=r&&y,x=g.itemSize,[_,T,p]=a[m];yS(_,T,p,e,Rl,y,b),Xm(Rl,x,g)}}}appendIndexFromGeometry(t,e,n,r,s,o=!1){let{groupIndices:a,attributeData:h,forwardIndexMap:l,invertedIndexMap:f}=this;for(;a.length<=r;)a.push(new So(Uint32Array));let d=o?f:l,m=a[r];if(s!==null&&d.has(s))m.push(d.get(s));else{d.set(s,h.position.count),m.push(h.position.count);let{attributes:g}=t;for(let y in h){let b=h[y],x=g[y];if(!x)throw new Error(`CSG Operations: Attribute ${y} not available on geometry.`);let _=x.itemSize;y==="position"?(Qe.fromBufferAttribute(x,s).applyMatrix4(e),b.push(Qe.x,Qe.y,Qe.z)):y==="normal"?(Qe.fromBufferAttribute(x,s).applyNormalMatrix(n),o&&Qe.multiplyScalar(-1),b.push(Qe.x,Qe.y,Qe.z)):y==="tangent"?(Qe.fromBufferAttribute(x,s).transformDirection(e),o&&Qe.multiplyScalar(-1),b.push(Qe.x,Qe.y,Qe.z)):(Rl.fromBufferAttribute(x,s),Xm(Rl,_,b))}}}buildGeometry(t,e){let n=!1,{groupIndices:r,attributeData:s}=this,{attributes:o,index:a}=t;for(let f in s){let d=s[f],{type:m,itemSize:g,normalized:y,length:b,count:x}=d,_=d.array.buffer,T=o[f];(!T||T.count<x||T.array.type!==m)&&(T=new pe(new m(b),g,y),t.setAttribute(f,T),n=!0),T.array.set(new m(_,0,b),0),T.needsUpdate=!0}let h=r.reduce((f,d)=>d.count+f,0);(!t.index||a.count<h||a.array.type!==Uint32Array)&&(t.setIndex(new pe(new Uint32Array(h),1)),n=!0),t.clearGroups();let l=0;for(let f=0,d=Math.min(e.length,r.length);f<d;f++){let{index:m,materialIndex:g}=e[f],{count:y}=r[m],b=r[m].array.buffer;y!==0&&(t.index.array.set(new Uint32Array(b,0,y),l),t.addGroup(l,y,g),l+=y)}t.setDrawRange(0,l),t.boundsTree=null,t.boundingBox=null,t.boundingSphere=null,n&&t.dispose()}clearIndexMap(){this.forwardIndexMap.clear(),this.invertedIndexMap.clear()}clear(){let{groupIndices:t,attributeData:e}=this;this.interpolatedFields={};for(let n in e)e[n].clear();t.forEach(n=>{n.clear()}),this.clearIndexMap()}};function qm(i,t){for(let e in i.attributes)t.includes(e)||(i.deleteAttribute(e),i.dispose());return i}function Ym(i,t){let e=[];for(let n=0,r=i.length;n<r;n++){let s=i[n],o=t[s.materialIndex];e.push({...s,materialIndex:t.indexOf(o)})}return e}function Zm(i,t){let e=[],n=new Map;for(let r=0,s=i.length;r<s;r++){let o=i[r];n.has(o.materialIndex)||(n.set(o.materialIndex,e.length),e.push(t[o.materialIndex])),o.materialIndex=n.get(o.materialIndex)}return e}function $m(i){for(let t=0;t<i.length-1;t++){let e=i[t],n=i[t+1];if(e.materialIndex===n.materialIndex){let r=e.start,s=n.start+n.count;n.start=r,n.count=s-r,i.splice(t,1),t--}}}function of(i,t){let e=t;return Array.isArray(t)||(e=[],i.forEach(n=>{e[n.materialIndex]=t})),e}var af=class{get useCDTClipping(){return this.triangleSplitter instanceof go}set useCDTClipping(t){t!==this.useCDTClipping&&(this.triangleSplitter=t?new go:new xo)}constructor(){this.triangleSplitter=new xo,this.geometryBuilders=[],this.attributes=["position","uv","normal"],this.useGroups=!0,this.consolidateGroups=!0,this.removeUnusedMaterials=!0,this.debug=new wl}getGroupRanges(t){return!this.useGroups||t.groups.length===0?[{start:0,count:1/0,materialIndex:0}]:t.groups.map(n=>({...n}))}evaluate(t,e,n,r=new hs){let s=!0;if(Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r],s=!1),r.length!==n.length)throw new Error("Evaluator: operations and target array passed as different sizes.");t.prepareGeometry(),e.prepareGeometry();let{triangleSplitter:o,geometryBuilders:a,attributes:h,useGroups:l,consolidateGroups:f,removeUnusedMaterials:d,debug:m}=this;for(;a.length<r.length;)a.push(new Il);r.forEach((p,c)=>{a[c].initFromGeometry(t.geometry,h),qm(p.geometry,h)}),m.init(),Wm(t,e,n,o,a,{useGroups:l}),m.complete();let g=this.getGroupRanges(t.geometry),y=of(g,t.material),b=this.getGroupRanges(e.geometry),x=of(b,e.material);b.forEach(p=>p.materialIndex+=y.length);let _=[...y,...x],T=[...g,...b].map((p,c)=>({...p,index:c}));return l?l&&f&&(T=Ym(T,_),T.sort((p,c)=>p.materialIndex-c.materialIndex)):T=[{start:0,count:1/0,index:0,materialIndex:0}],r.forEach((p,c)=>{let v=p.geometry;a[c].buildGeometry(v,T),t.matrixWorld.decompose(p.position,p.quaternion,p.scale),p.updateMatrix(),p.matrixWorld.copy(t.matrixWorld),l?(p.material=_,f&&$m(v.groups),d&&(p.material=Zm(v.groups,_))):p.material=_[0]}),s?r:r[0]}evaluateHierarchy(t,e=new hs){t.updateMatrixWorld(!0);let n=(s,o)=>{let a=s.children;for(let h=0,l=a.length;h<l;h++){let f=a[h];f.isOperationGroup?n(f,o):o(f)}},r=s=>{let o=s.children,a=!1;for(let l=0,f=o.length;l<f;l++){let d=o[l];a=r(d)||a}let h=s.isDirty();if(h&&s.markUpdated(),a&&!s.isOperationGroup){let l;return n(s,f=>{l?l=this.evaluate(l,f,f.operation):l=this.evaluate(s,f,f.operation)}),s._cachedGeometry=l.geometry,s._cachedMaterials=l.material,!0}else return a||h};return r(t),e.geometry=t._cachedGeometry,e.material=t._cachedMaterials,e}reset(){this.triangleSplitter.reset()}};export{Am as ADDITION,Va as AmbientLight,ve as Box3,jn as BoxGeometry,hs as Brush,pe as BufferAttribute,Ce as BufferGeometry,Wt as Color,pa as ConeGeometry,zs as CylinderGeometry,za as DirectionalLight,Ye as DoubleSide,ma as EdgesGeometry,cn as Euler,af as Evaluator,Fr as ExtrudeGeometry,ee as Float32BufferAttribute,la as Fog,Gc as Font,uu as FontLoader,sn as FrontSide,pi as Group,Oa as HemisphereLight,Rm as INTERSECTION,Sa as LatheGeometry,Fs as Line,Lr as LineBasicMaterial,Ra as LineDashedMaterial,da as LineSegments,Uc as MathUtils,kt as Matrix4,qe as Mesh,Ir as MeshBasicMaterial,Ea as MeshPhongMaterial,wa as MeshStandardMaterial,Fe as Object3D,cu as OrbitControls,zr as OrthographicCamera,ki as Path,Xe as PerspectiveCamera,Ae as Plane,Br as PlaneGeometry,on as Quaternion,Ha as Raycaster,du as RoundedBoxGeometry,Ve as SRGBColorSpace,hu as STLLoader,Cm as SUBTRACTION,ha as Scene,mi as Shape,Jn as ShapeUtils,ba as SphereGeometry,fu as TextGeometry,Ta as TorusGeometry,ot as Vector2,D as Vector3,su as WebGLRenderer,xM as mergeGeometries,yM as mergeVertices};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
