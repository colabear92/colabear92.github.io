(function(){"use strict";var t={2121:function(t,n,e){var o=e(9242),a=e(3396),i=e.p+"img/free-icon-apple-logo-94225.872de99f.png";const l={class:"testApp"},u=(0,a._)("img",{src:i,style:{width:"100px"}},null,-1),r=(0,a._)("h2",null,"앱등이테스트",-1),s=(0,a._)("hr",{style:{"margin-left":"50px","margin-right":"50px","margin-bottom":"20px"}},null,-1);function p(t,n,e,o,i,p){const d=(0,a.up)("MainCompoent"),c=(0,a.up)("TestComponent"),g=(0,a.up)("ResultComponent");return(0,a.wg)(),(0,a.iD)("div",l,[u,r,s,0==i.page?((0,a.wg)(),(0,a.j4)(d,{key:0,page:i.page,onChangePage:n[0]||(n[0]=t=>i.page=1)},null,8,["page"])):(0,a.kq)("",!0),1==i.page?((0,a.wg)(),(0,a.j4)(c,{key:1,page:i.page,questionList:i.questionList,onChangePage:n[1]||(n[1]=t=>i.page=2),onQuestionAdd:p.questionAdd},null,8,["page","questionList","onQuestionAdd"])):(0,a.kq)("",!0),2==i.page?((0,a.wg)(),(0,a.j4)(g,{key:2,page:i.page,total:i.total,onChangePage:n[2]||(n[2]=t=>{i.page=0,i.question=[],i.total=0})},null,8,["page","total"])):(0,a.kq)("",!0)])}e(7658);const d={id:"capture",ref:"target"},c=(0,a._)("br",null,null,-1),g=(0,a._)("input",{type:"text",id:"text",value:"https://colabear92.github.io/",style:{display:"none"}},null,-1);function m(t,n,e,o,i,l){return(0,a.wg)(),(0,a.iD)("div",d,[(0,a._)("button",{onClick:n[0]||(n[0]=n=>t.$emit("changePage",1)),class:"main-button"},"테스트 시작하기"),c,(0,a._)("button",{class:"kakao-share",onClick:n[1]||(n[1]=(...t)=>l.kakaoShare&&l.kakaoShare(...t))},"카카오공유"),(0,a.Uk)("  "),g,(0,a._)("button",{class:"main-button",onClick:n[2]||(n[2]=(...t)=>l.urlCopy&&l.urlCopy(...t))},"🔗링크 복사")],512)}var b={name:"MainComponent",props:{page:Number},methods:{kakaoShare(){window.Kakao.Share.sendCustom({templateId:93225,installTalk:!0})},urlCopy(){var t=document.getElementById("text");t.style.display="block",t.select(),document.execCommand("copy"),t.style.display="none",alert("url이 복사 되었습니다.")}}},k=e(89);const h=(0,k.Z)(b,[["render",m]]);var f=h,y=e(7139);const v={key:0},w={key:0};function _(t,n,e,o,i,l){return(0,a.wg)(),(0,a.iD)("div",null,[i.questionPage<11?((0,a.wg)(),(0,a.iD)("div",v,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.questionList,(e=>((0,a.wg)(),(0,a.iD)("div",{key:e},[i.questionPage===e.id+1?((0,a.wg)(),(0,a.iD)("div",w,[(0,a._)("h2",null,(0,y.zw)(i.questionPage)+"/10",1),(0,a._)("div",{class:"qbox",onClick:n[0]||(n[0]=n=>{t.$emit("questionAdd",1),l.nextQuestion()})},(0,y.zw)(e.a),1),(0,a._)("div",{class:"qbox",onClick:n[1]||(n[1]=n=>{t.$emit("questionAdd",0),l.nextQuestion()})},(0,y.zw)(e.b),1)])):(0,a.kq)("",!0)])))),128))])):(0,a.kq)("",!0),11==i.questionPage?((0,a.wg)(),(0,a.iD)("button",{key:1,class:"main-button",onClick:n[2]||(n[2]=n=>t.$emit("changePage",2))},"테스트 결과 보러가기")):(0,a.kq)("",!0)])}var C={name:"TestComponent",props:{page:Number,question:Array,questionList:Object},data(){return{questionPage:1}},methods:{nextQuestion(){this.questionPage<11&&(this.questionPage+=1)}}};const q=(0,k.Z)(C,[["render",_]]);var x=q,P=e.p+"img/10.b90da648.png",D=e.p+"img/89.7586290b.png",O=e.p+"img/67.ccbfb312.png",j=e.p+"img/45.5377b81d.png",S=e.p+"img/03.1bab57bb.png";const A={ref:"target"},T={key:0},L=(0,a._)("h4",null,"[잡스가 당신을 찬양합니다]",-1),Q=(0,a._)("img",{src:P,style:{width:"200px"}},null,-1),I=(0,a._)("p",null,'"무결점의 앱등이 바로 당신입니다."',-1),K=[L,Q,I],$={key:1},M=(0,a._)("h4",null,"[팀쿡의 돈줄]",-1),N=(0,a._)("img",{src:D,style:{width:"200px"}},null,-1),Z=(0,a._)("p",null,'"팀쿡의 눈엔 당신이 돈으로 보입니다."',-1),z=[M,N,Z],E={key:2},R=(0,a._)("h4",null,"[팀쿡의 엄지척]",-1),B=(0,a._)("img",{src:O,style:{width:"200px"}},null,-1),H=(0,a._)("p",null,'"당신은 앞으로 성장할 앱등이 입니다."',-1),U=[R,B,H],Y={key:3},F=(0,a._)("h4",null,"[아무생각 없는 팀쿡]",-1),G=(0,a._)("img",{src:j,style:{width:"200px"}},null,-1),J=(0,a._)("p",null,'"흔하디 흔한 애플 유저"',-1),V=[F,G,J],W={key:4},X=(0,a._)("h4",null,"[재드래곤의 웃음]",-1),tt=(0,a._)("img",{src:S,style:{width:"200px"}},null,-1),nt=(0,a._)("p",null,'"삼성을 한번 써보는건 어떠실까요?"',-1),et=[X,tt,nt],ot=(0,a._)("br",null,null,-1),at={ref:"result"},it=(0,a._)("br",null,null,-1),lt=(0,a._)("br",null,null,-1),ut=(0,a._)("input",{type:"text",id:"text",value:"https://colabear92.github.io/",style:{display:"none"}},null,-1);function rt(t,n,e,o,i,l){return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("div",A,[10==e.total?((0,a.wg)(),(0,a.iD)("div",T,K)):(0,a.kq)("",!0),8==e.total||9==e.total?((0,a.wg)(),(0,a.iD)("div",$,z)):(0,a.kq)("",!0),6==e.total||7==e.total?((0,a.wg)(),(0,a.iD)("div",E,U)):(0,a.kq)("",!0),4==e.total||5==e.total?((0,a.wg)(),(0,a.iD)("div",Y,V)):(0,a.kq)("",!0),e.total<4?((0,a.wg)(),(0,a.iD)("div",W,et)):(0,a.kq)("",!0)],512),ot,(0,a._)("div",at,null,512),it,(0,a._)("button",{class:"main-button",onClick:n[0]||(n[0]=n=>t.$emit("changePage",0))},"테스트 다시 하기"),lt,(0,a._)("button",{class:"kakao-share",onClick:n[1]||(n[1]=(...t)=>l.kakaoShare&&l.kakaoShare(...t))},"카카오 공유"),(0,a.Uk)("  "),ut,(0,a._)("button",{class:"main-button",onClick:n[2]||(n[2]=(...t)=>l.urlCopy&&l.urlCopy(...t))},"🔗링크 복사")])}var st={data(){return{capture:!0,testurl:"dd"}},name:"ResultComponent",props:{page:Number,total:Number},methods:{kakaoShare(){window.Kakao.Share.sendCustom({templateId:93225,installTalk:!0})},urlCopy(){var t=document.getElementById("text");t.style.display="block",t.select(),document.execCommand("copy"),t.style.display="none",alert("url이 복사 되었습니다.")}}};const pt=(0,k.Z)(st,[["render",rt]]);var dt=pt,ct=[{a:"다음폰도 아이폰 살거다",b:"다시는 안살거다",id:0},{a:"8핀 케이블은 나름 귀엽다",b:"c타입으로 바꿔야한다",id:1},{a:"애플워치는 필수다",b:"시계랑 뭐가 다름?",id:2},{a:"아이패드는 인생 필수템이다",b:"커다란 아이폰 아님?",id:3},{a:"맥북이야 말로 최고의 laptop이다",b:"그램, 갤북 미만 잡",id:4},{a:"에어팟의 가격은 합리적이다",b:"응 QCY 3만원",id:5},{a:"맥미니가 뭔지 알고 있다.",b:"먼 미니?",id:6},{a:"가성비의 맥북 에어",b:"응 레노버, HP는 반값",id:7},{a:"애플티비 써봤다.",b:"애플에서 티비도 만듬?",id:8},{a:"매직마우스는 쓰레기다.",b:"이름이 뭐 저따위임",id:9}],gt={name:"App",components:{MainCompoent:f,TestComponent:x,ResultComponent:dt},data(){return{page:0,question:[],questionList:ct,total:0}},methods:{questionAdd(t){this.question.push(t),this.total+=t},kakaoShare(){window.Kakao.Share.sendCustom({templateId:93225,installTalk:!0})}}};const mt=(0,k.Z)(gt,[["render",p]]);var bt=mt;const kt="3b02b75f115e3a004b1b3a4e2eaae4ed";window.Kakao.init(kt),(0,o.ri)(bt).mount("#app")}},n={};function e(o){var a=n[o];if(void 0!==a)return a.exports;var i=n[o]={exports:{}};return t[o](i,i.exports,e),i.exports}e.m=t,function(){var t=[];e.O=function(n,o,a,i){if(!o){var l=1/0;for(p=0;p<t.length;p++){o=t[p][0],a=t[p][1],i=t[p][2];for(var u=!0,r=0;r<o.length;r++)(!1&i||l>=i)&&Object.keys(e.O).every((function(t){return e.O[t](o[r])}))?o.splice(r--,1):(u=!1,i<l&&(l=i));if(u){t.splice(p--,1);var s=a();void 0!==s&&(n=s)}}return n}i=i||0;for(var p=t.length;p>0&&t[p-1][2]>i;p--)t[p]=t[p-1];t[p]=[o,a,i]}}(),function(){e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,{a:n}),n}}(),function(){e.d=function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){e.p="/"}(),function(){var t={143:0};e.O.j=function(n){return 0===t[n]};var n=function(n,o){var a,i,l=o[0],u=o[1],r=o[2],s=0;if(l.some((function(n){return 0!==t[n]}))){for(a in u)e.o(u,a)&&(e.m[a]=u[a]);if(r)var p=r(e)}for(n&&n(o);s<l.length;s++)i=l[s],e.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return e.O(p)},o=self["webpackChunktest"]=self["webpackChunktest"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=e.O(void 0,[998],(function(){return e(2121)}));o=e.O(o)})();
//# sourceMappingURL=app.66d8b9ae.js.map