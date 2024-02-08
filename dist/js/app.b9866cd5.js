(function(){"use strict";var e={3894:function(e,a,t){var r=t(5102),n=t(9269),o=t.p+"img/logo.4b784af5.png";const s={key:0,class:"w-[10vh] absolute top-[4vh] right-[4vh] opacity-[80%]",src:o};function l(e,a,t,o,l,u){const i=(0,n.up)("MainHud"),d=(0,n.up)("CarHud");return(0,n.wg)(),(0,n.iD)(n.HY,null,[e.showHud?((0,n.wg)(),(0,n.iD)("img",s)):(0,n.kq)("",!0),e.showHud?((0,n.wg)(),(0,n.j4)(i,{key:1,hudInfo:e.hudInfo},null,8,["hudInfo"])):(0,n.kq)("",!0),(0,n.Wm)(r.uT,{name:"slide-fade"},{default:(0,n.w5)((()=>[e.showHud&&e.hudInfo.isCar&&e.carInfo&&e.carInfo.bars?((0,n.wg)(),(0,n.j4)(d,{key:0,carInfo:e.carInfo},null,8,["carInfo"])):(0,n.kq)("",!0)])),_:1})],64)}var u=t(3201);const i=e=>((0,n.dD)("data-v-1cc438aa"),e=e(),(0,n.Cn)(),e),d={key:0,class:"duration-200 relative overflow-hidden border-[.2vh] rounded border-[rgba(0,0,0,.7)] bg-[rgba(71,71,71,.5)] w-[3.5vh] h-[3.5vh] m-[.5vh] rotate-[180deg]"},c=i((()=>(0,n._)("i",{class:"absolute fas fa-heart text-[1.5vh] left-[50%] top-[50%] text-[white] translate-x-[-50%] translate-y-[-50%] rotate-[180deg]"},null,-1))),f={key:0,class:"duration-200 relative overflow-hidden border-[.2vh] rounded border-[rgba(0,0,0,.7)] bg-[rgba(71,71,71,.5)] w-[3.5vh] h-[3.5vh] m-[.5vh] rotate-[180deg]"},v=i((()=>(0,n._)("i",{class:"absolute fas fa-shield-alt text-[1.5vh] left-[50%] top-[50%] text-[white] translate-x-[-50%] translate-y-[-50%] rotate-[180deg]"},null,-1))),h={key:0,class:"duration-200 relative overflow-hidden border-[.2vh] rounded border-[rgba(0,0,0,.7)] bg-[rgba(71,71,71,.5)] w-[3.5vh] h-[3.5vh] m-[.5vh] rotate-[180deg]"},b=i((()=>(0,n._)("i",{class:"absolute fas fa-pizza-slice text-[1.5vh] left-[50%] top-[50%] text-[white] translate-x-[-50%] translate-y-[-50%] rotate-[180deg]"},null,-1))),g={key:0,class:"duration-200 relative overflow-hidden border-[.2vh] rounded border-[rgba(0,0,0,.7)] bg-[rgba(71,71,71,.5)] w-[3.5vh] h-[3.5vh] m-[.5vh] rotate-[180deg]"},w=i((()=>(0,n._)("i",{class:"fas fa-tint absolute text-[1.5vh] left-[50%] top-[50%] text-[white] translate-x-[-50%] translate-y-[-50%] rotate-[180deg]"},null,-1))),m={key:0,class:"duration-200 relative overflow-hidden border-[.2vh] rounded border-[rgba(0,0,0,.7)] bg-[rgba(71,71,71,.5)] w-[3.5vh] h-[3.5vh] m-[.5vh] rotate-[180deg]"},p=i((()=>(0,n._)("i",{class:"absolute fas fa-frown text-[1.5vh] left-[50%] top-[50%] text-[white] translate-x-[-50%] translate-y-[-50%] rotate-[180deg]"},null,-1))),_={key:0,class:"duration-200 relative overflow-hidden border-[.2vh] rounded border-[rgba(0,0,0,.7)] bg-[rgba(71,71,71,.5)] w-[3.5vh] h-[3.5vh] m-[.5vh] rotate-[180deg]"},x=i((()=>(0,n._)("i",{class:"absolute fas fa-running text-[1.7vh] left-[50%] top-[50%] text-[white] translate-x-[-50%] translate-y-[-50%] rotate-[180deg]"},null,-1))),k=i((()=>(0,n._)("i",{class:"absolute fas fa-microphone-alt text-[1.5vh] left-[50%] top-[50%] text-[white] translate-x-[-50%] translate-y-[-50%] rotate-[180deg]"},null,-1))),y=i((()=>(0,n._)("i",{class:"absolute fas fa-walkie-talkie text-[1.5vh] left-[50%] top-[50%] text-[white] translate-x-[-50%] translate-y-[-50%] rotate-[180deg]"},null,-1)));function I(e,a,t,o,s,l){return e.bars&&e.bars!={}?((0,n.wg)(),(0,n.iD)("div",{key:0,id:"hud-cont",class:(0,u.C_)(["absolute items-center justify-center",{["car left-["+e.hud.left+"px]"]:e.isCar,nocar:!e.isCar}])},[(0,n.Wm)(r.uT,{name:"fade"},{default:(0,n.w5)((()=>[e.bars.health<=50?((0,n.wg)(),(0,n.iD)("div",d,[(0,n._)("div",{class:(0,u.C_)(["duration-200 bg-[rgba(0,0,0,.7)] w-[101%]","h-["+(e.bars.health+1)+"%]"])},null,2),c])):(0,n.kq)("",!0)])),_:1}),(0,n.Wm)(r.uT,{name:"fade"},{default:(0,n.w5)((()=>[e.bars.armor>=20?((0,n.wg)(),(0,n.iD)("div",f,[(0,n._)("div",{class:(0,u.C_)(["duration-200 bg-[rgba(0,0,0,.7)] w-[101%]","h-["+(e.bars.armor+1)+"%]"])},null,2),v])):(0,n.kq)("",!0)])),_:1}),(0,n.Wm)(r.uT,{name:"fade"},{default:(0,n.w5)((()=>[e.bars.hunger<=50?((0,n.wg)(),(0,n.iD)("div",h,[(0,n._)("div",{class:(0,u.C_)(["duration-200 bg-[rgba(0,0,0,.7)] w-[101%]","h-["+(e.bars.hunger+1)+"%]"])},null,2),b])):(0,n.kq)("",!0)])),_:1}),(0,n.Wm)(r.uT,{name:"fade"},{default:(0,n.w5)((()=>[e.bars.thrist<=50?((0,n.wg)(),(0,n.iD)("div",g,[(0,n._)("div",{class:(0,u.C_)(["duration-200 bg-[rgba(0,0,0,.7)] w-[101%]","h-["+(e.bars.thrist+1)+"%]"])},null,2),w])):(0,n.kq)("",!0)])),_:1}),(0,n.Wm)(r.uT,{name:"fade"},{default:(0,n.w5)((()=>[e.bars.stress>=50?((0,n.wg)(),(0,n.iD)("div",m,[(0,n._)("div",{class:(0,u.C_)(["duration-200 bg-[rgba(0,0,0,.7)] w-[101%]","h-["+(e.bars.stress+1)+"%]"])},null,2),p])):(0,n.kq)("",!0)])),_:1}),(0,n.Wm)(r.uT,{name:"fade"},{default:(0,n.w5)((()=>[e.bars.stamina<=50?((0,n.wg)(),(0,n.iD)("div",_,[(0,n._)("div",{class:(0,u.C_)(["duration-200 bg-[rgba(0,0,0,.7)] w-[101%]","h-["+(e.bars.stamina+1)+"%]"])},null,2),x])):(0,n.kq)("",!0)])),_:1}),(0,n.Wm)(r.uT,{name:"fade"},{default:(0,n.w5)((()=>[(0,n._)("div",{class:(0,u.C_)(["duration-200 relative overflow-hidden border-[.2vh] rounded border-[rgba(0,0,0,.7)] bg-[rgba(71,71,71,.5)] w-[3.5vh] h-[3.5vh] m-[.5vh] rotate-[180deg]",{"border-green-500":e.hud.isTalking}])},[(0,n._)("div",{class:(0,u.C_)(["duration-200 bg-[rgba(0,0,0,.7)] w-[101%]","h-["+(e.bars.voice+1)+"%]"])},null,2),k],2)])),_:1}),(0,n.Wm)(r.uT,{name:"fade"},{default:(0,n.w5)((()=>[e.bars.radio>0?((0,n.wg)(),(0,n.iD)("div",{key:0,class:(0,u.C_)(["duration-200 relative overflow-hidden border-[.2vh] rounded border-[rgba(0,0,0,.7)] bg-[rgba(71,71,71,.5)] w-[3.5vh] h-[3.5vh] m-[.5vh] rotate-[180deg]",{"border-green-500":e.hud.radioTalking}])},[(0,n._)("div",{class:(0,u.C_)(["duration-200 bg-[rgba(0,0,0,.7)] w-[101%]","h-["+(e.bars.radio+1)+"%]"])},null,2),y],2)):(0,n.kq)("",!0)])),_:1})],2)):(0,n.kq)("",!0)}var H=t(6237),C={name:"MainHud",props:{hudInfo:Object},setup:e=>{const a=(0,H.iH)({}),t=(0,H.iH)(e.hudInfo.isCar),r=(0,H.iH)({});return window.addEventListener("message",(e=>{e.data.hudInfo&&(a.value=e.data.hudInfo.bars,r.value=e.data.hudInfo,t.value=e.data.hudInfo.isCar)})),{bars:a,isCar:t,hud:r}}},q=t(7617);const D=(0,q.Z)(C,[["render",I],["__scopeId","data-v-1cc438aa"]]);var T=D;const W=e=>((0,n.dD)("data-v-bf26abba"),e=e(),(0,n.Cn)(),e),O={class:"absolute top-[1vh] left-[50%] -translate-x-[50%] text-[2vh] font-medium font-[Quicksand] drop-shadow-[1px_1px_0_black]"},j={class:"absolute bottom-[0%] left-[50%] translate-x-[-50%] font-[digital]"},z={class:"relative"},E={class:"absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-60%] text-[2.5vh] flex flex-col items-center"},M={class:"absolute bottom-[5%] right-[-20%]"},Z=W((()=>(0,n._)("i",{class:"fas fa-gas-pump absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"},null,-1))),L={class:"absolute text-[1.8vh] bottom-[11%] left-[50%] font-medium translate-x-[-50%] drop-shadow-[1px_1px_0_black]"},P={key:0,class:"absolute bottom-[14%] right-[-36%] w-[2.5vh] belt",src:"https://cdn.discordapp.com/attachments/826477720707792929/1030071188015304754/Sin_titulo-1.png"},Q={key:1,class:"fas fa-tachometer-alt-fast absolute top-[-5%] left-[50%] -translate-x-[50%]"},F=W((()=>(0,n._)("audio",{id:"cinturon",autoplay:""},null,-1)));function S(e,a,t,r,o,s){const l=(0,n.up)("q-circular-progress");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",O,(0,u.zw)(e.street),1),(0,n._)("div",j,[(0,n._)("div",z,[(0,n.Wm)(l,{rounded:"",value:55,size:"10vh",thickness:.06,color:"[rgba(113,113,113,0.6)]","track-color":"transparent",class:"q-ma-md r rotate-[-130deg] absolute top-[0%] left-[0%] translate-x-[0%] translate-y-[0%]"},null,8,["thickness"]),(0,n.Wm)(l,{rounded:"",value:e.rpm.value,size:"10vh",thickness:.06,color:e.rpm.color,"track-color":"transparent",class:"q-ma-md r rotate-[-130deg]"},null,8,["value","thickness","color"]),(0,n._)("div",E,[(0,n._)("div",{class:(0,u.C_)([{emergency:e.emergency},"drop-shadow-[1px_1px_0_black]"])},(0,u.zw)(e.speed),3),(0,n._)("div",{class:(0,u.C_)(["text-[1.2vh] font-normal font-[Quicksand]",{emergency:e.emergency}])},"KMH",2)])]),(0,n._)("div",M,[(0,n.Wm)(l,{rounded:"",value:60,size:"5vh",thickness:.1,color:"[rgba(113,113,113,0.6)]","track-color":"transparent",class:"q-ma-md r rotate-[-120deg] absolute top-[0%] left-[0%] translate-x-[0%] translate-y-[0%]"},null,8,["thickness"]),(0,n.Wm)(l,{rounded:"",value:e.fuel,size:"5vh",thickness:.1,color:"white","track-color":"transparent",class:"q-ma-md r rotate-[-120deg]"},null,8,["value","thickness"]),Z]),(0,n._)("i",{class:(0,u.C_)(["fas fa-engine-warning absolute text-[1.8vh] bottom-[15%] left-[-15%]",{"text-white":e.engine>560,"text-yellow-500":e.engine<=560&&e.engine>200,"text-red-500":e.engine<=200}])},null,2),(0,n._)("div",L,(0,u.zw)(e.gear),1),e.belt?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("img",P)),e.cruise?((0,n.wg)(),(0,n.iD)("i",Q)):(0,n.kq)("",!0)]),F],64)}var Y={name:"CarHud",components:{},setup:()=>{const e=(0,H.iH)(0),a=(0,H.iH)(0),t=(0,H.iH)({color:"[white]",value:0}),r=(0,H.iH)(100),n=(0,H.iH)(!1),o=(0,H.iH)(!1),s=(0,H.iH)(!1),l=(0,H.iH)(""),u=(0,H.iH)("");return window.addEventListener("message",(({data:i})=>{if(i.carInfo&&i.carInfo.bars&&(s.value=i.carInfo.belt||i.carInfo.moto,e.value=i.carInfo.speed,a.value=i.carInfo.bars.fuel,r.value=i.carInfo.bars.engine,n.value=i.carInfo.emer,o.value=i.carInfo.cruiser,l.value=i.carInfo.gear,i.carInfo.street&&(u.value=i.carInfo.street)),i.carInfo&&i.carInfo.bars&&i.carInfo.bars.rpm&&(t.value.value=55*i.carInfo.bars.rpm,t.value.value>40&&t.value.value<50?t.value.color="[yellow]":t.value.value>=50?t.value.color="[red]":t.value.color="[white]"),"playSound"==i.transactionType){let e=document.getElementById("cinturon");e.src="./sounds/"+event.data.transactionFile+".ogg",e.play()}})),{speed:e,fuel:a,engine:r,emergency:n,cruise:o,belt:s,rpm:t,gear:l,street:u}}},A=t(419),B=t(1410),K=t.n(B);const G=(0,q.Z)(Y,[["render",S],["__scopeId","data-v-bf26abba"]]);var J=G;K()(Y,"components",{QCircularProgress:A.Z});var N={name:"App",components:{MainHud:T,CarHud:J},setup:()=>{const e=(0,H.iH)({}),a=(0,H.iH)({}),t=(0,H.iH)(!0);return window.addEventListener("message",(r=>{r.data.carInfo&&(e.value=r.data.carInfo),r.data.hudInfo&&(a.value=r.data.hudInfo),t.value=!0===r.data.showHud||!1===r.data.showHud?r.data.showHud:t.value})),{carInfo:e,hudInfo:a,showHud:t}}};const R=(0,q.Z)(N,[["render",l]]);var U=R,V=t(8286),X={config:{},plugins:{}};(0,r.ri)(U).use(V.Z,X).mount("#app")}},a={};function t(r){var n=a[r];if(void 0!==n)return n.exports;var o=a[r]={exports:{}};return e[r](o,o.exports,t),o.exports}t.m=e,function(){var e=[];t.O=function(a,r,n,o){if(!r){var s=1/0;for(d=0;d<e.length;d++){r=e[d][0],n=e[d][1],o=e[d][2];for(var l=!0,u=0;u<r.length;u++)(!1&o||s>=o)&&Object.keys(t.O).every((function(e){return t.O[e](r[u])}))?r.splice(u--,1):(l=!1,o<s&&(s=o));if(l){e.splice(d--,1);var i=n();void 0!==i&&(a=i)}}return a}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[r,n,o]}}(),function(){t.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(a,{a:a}),a}}(),function(){t.d=function(e,a){for(var r in a)t.o(a,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:a[r]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){t.p="../dist/"}(),function(){var e={143:0};t.O.j=function(a){return 0===e[a]};var a=function(a,r){var n,o,s=r[0],l=r[1],u=r[2],i=0;if(s.some((function(a){return 0!==e[a]}))){for(n in l)t.o(l,n)&&(t.m[n]=l[n]);if(u)var d=u(t)}for(a&&a(r);i<s.length;i++)o=s[i],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(d)},r=self["webpackChunkvue"]=self["webpackChunkvue"]||[];r.forEach(a.bind(null,0)),r.push=a.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(3894)}));r=t.O(r)})();
//# sourceMappingURL=app.b9866cd5.js.map