!function(e){function t(r){for(var l,c,f=r[0],p=r[1],d=r[2],m=0,v=[];m<f.length;m++)c=f[m],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&v.push(a[c][0]),a[c]=0;for(l in p)Object.prototype.hasOwnProperty.call(p,l)&&(e[l]=p[l]);for(s&&s(r);v.length;)v.shift()();return i.push.apply(i,d||[]),n()}function n(){for(var e,r=0;r<i.length;r++){for(var l=i[r],c=!0,f=1;f<l.length;f++){var s=l[f];0!==a[s]&&(c=!1)}c&&(i.splice(r--,1),e=u(u.s=l[0]))}return e}var r={},a={main:0},i=[];function u(a){if(r[a])return r[a].exports;var i=r[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,u),i.l=!0,i.exports}u.e=function(e){var r=[],i=a[e];if(0!==i)if(i)r.push(i[2]);else{var l=new Promise((function(r,l){i=a[e]=[r,l]}));r.push(i[2]=l);var c,f=document.createElement("script");f.charset="utf-8",f.timeout=120,u.nc&&f.setAttribute("nonce",u.nc),f.src=function o(e){return u.p+"build/"+({compiler:"compiler"}[e]||e)+"."+{compiler:"d8f683ef"}[e]+".js"}(e);var s=new Error;c=function(r){f.onerror=f.onload=null,clearTimeout(p);var i=a[e];if(0!==i){if(i){var l=r&&("load"===r.type?"missing":r.type),c=r&&r.target&&r.target.src;s.message="Loading chunk "+e+" failed.\n("+l+": "+c+")",s.name="ChunkLoadError",s.type=l,s.request=c,i[1](s)}a[e]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:f})}),12e4);f.onerror=f.onload=c,document.head.appendChild(f)}return Promise.all(r)},u.m=e,u.c=r,u.d=function(e,r,a){u.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:a})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,r){if(1&r&&(e=u(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(u.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var i in e)u.d(a,i,function(r){return e[r]}.bind(null,i));return a},u.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(r,"a",r),r},u.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},u.p="",u.oe=function(e){throw console.error(e),e};var l=window.webpackJsonp=window.webpackJsonp||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var s=c;i.push([0,"chunk-vendors"]),n()}({0:function(e,r,a){e.exports=a("0c47")},"16f9":function(e,r,a){e.exports={displayName:"StaticMap",exportName:"default",description:"",tags:{},props:[{name:"address",type:{name:"string"},defaultValue:{func:!1,value:'"University of Connecticut, Storrs Mansfield, CT"'}},{name:"alt",type:{name:"string"},defaultValue:{func:!1,value:'"The University of Connecticut"'}},{name:"env_var",description:"Name of the environment variable that contains your API Key",type:{name:"string"},defaultValue:{func:!1,value:"'VUE_APP_GOOGLE_MAPS_API_KEY'"}},{name:"format",type:{name:"string"},defaultValue:{func:!1,value:"'png'"}},{name:"pitch",type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"size",type:{name:"string"},defaultValue:{func:!1,value:'"600x300"'}},{name:"type",type:{name:"string"},defaultValue:{func:!1,value:"'roadmap'"}},{name:"zoom",type:{name:"number"},defaultValue:{func:!1,value:"12"}}],events:void 0,methods:void 0,slots:void 0,examples:null}},"4bff":function(e,r,a){},"9ac7":function(e,r,a){"use strict";var i=a("4bff");a.n(i).a},f323:function(e,r,a){"use strict";a.r(r);var i=(a("c975"),a("a9e3"),a("b383")),l=a.n(i),c={name:"StaticMap",data:function(){return{base:"https://maps.googleapis.com/maps/api/staticmap?"}},props:{env_var:{type:String,default:"VUE_APP_GOOGLE_MAPS_API_KEY"},zoom:{type:Number,default:12},size:{type:String,default:"600x300",validator:function(e){return e}},type:{type:String,default:"roadmap",validator:function(e){return-1!==["roadmap","satellite","hybrid","terrain"].indexOf(e)}},pitch:{type:Number,default:0},format:{type:String,default:"png",validator:function(e){return-1!==["png","png8","gif","jpg","jpg-baseline"].indexOf(e)}},alt:{type:String,default:"The University of Connecticut"},address:{type:String,default:"University of Connecticut, Storrs Mansfield, CT"}},computed:{imgSrc:function(){var e={key:Object({NODE_ENV:"production",VUE_APP_GOOGLE_MAPS_API_KEY:"AIzaSyD7lXGivWGaINefZAWc_iCFG6YANhBVh2I",BASE_URL:"/"})[this.env_var],zoom:this.zoom,size:this.size,type:this.type,pitch:this.pitch,format:this.format,center:this.address};return this.base+l.a.stringify(e)},getAlt:function(){return Object.prototype.hasOwnProperty.call(Object({NODE_ENV:"production",VUE_APP_GOOGLE_MAPS_API_KEY:"AIzaSyD7lXGivWGaINefZAWc_iCFG6YANhBVh2I",BASE_URL:"/"}),this.env_var)?this.alt:"You must specify an API key in your ENV file."}}},f=(a("9ac7"),a("2877")),s=Object(f.a)(c,(function(){var e=this,r=e.$createElement;return(e._self._c||r)("img",{attrs:{src:e.imgSrc,alt:e.getAlt}})}),[],!1,null,"1b57a712",null);r.default=s.exports}});