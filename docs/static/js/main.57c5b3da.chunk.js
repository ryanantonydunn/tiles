(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{115:function(n,e,t){},118:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(40),c=t.n(o),i=t(18),l=t(43),u=t(7),s=t(9),f=t(6),p=function(n){if(!n)return!0;var e=!0;return n.forEach(function(t,a){t.forEach(function(t,r){!function(t,a,r){var o=function(t,a){n[t]&&n[t][a]&&n[t][a].value===r&&(e=!1)};o(t+1,a),o(t-1,a),o(t,a+1),o(t,a-1)}(a,r,t.value)})}),e},d=t(31)(),m=function(n){for(var e=n<4?2:n>5?4:3,t=[],a=0;a<n;a++){t[a]=[];for(var r=0;r<n;r++)t[a].push({yOffset:n-r-1,value:d.integer(1,e)})}return t},v=function(n){for(var e,t=0;p(e)&&t<100;)t++,e=m(n);return e},b=function(n){var e,t=localStorage.getItem("board-"+n);return e=t?(t=JSON.parse(t)).map(function(e){return e.map(function(e,t){return{yOffset:n-t-1,value:e}})}):v(n),{topScore:localStorage.getItem("topScore-"+n)||0,score:localStorage.getItem("score-"+n)||0,board:e}},g=localStorage.getItem("size")||4,h=b(g),x=Object(f.a)({size:g,won:!1,active:!1},h),O=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"START_GAME":return Object(f.a)({},n,{active:!0});case"NEW_GAME":return Object(f.a)({},n,{board:e.board,score:0,active:!0});case"CARRY_ON":return Object(f.a)({},n,{won:!1});case"OPEN_SETTINGS":return Object(f.a)({},n,{active:!1});case"SET_BOARD":return Object(f.a)({},n,{board:Object(s.a)(e.board)});case"TOUCH_ACTION":return Object(f.a)({},n,{board:Object(s.a)(e.board),score:e.score,topScore:e.topScore,won:e.won});case"SET_SIZE":return Object(f.a)({},n,{active:!1,board:Object(s.a)(e.board),score:e.score,topScore:e.topScore,size:e.size});default:return n}},E=Object(u.c)({main:O}),S=t(44),y=t(45),z=t(51),j=t(46),w=t(52),k=t(3),B=t(4),N=t(49),G=t.n(N);function I(){var n=Object(k.a)(["\n  position: absolute;\n  width: 100%;\n  top: 40px;\n  left: 0;\n  font-size: 20px;\n"]);return I=function(){return n},n}function C(){var n=Object(k.a)(["\n  position: relative;\n  z-index: 20;\n  padding: 24px 38px 20px;\n  margin-top: 20px;\n  color: #000;\n  cursor: pointer;\n  .small {\n    font-size: 14px;\n    line-height: 26px;\n  }\n  .large {\n    font-size: 20px;\n    line-height: 26px;\n  }\n"]);return C=function(){return n},n}function A(){var n=Object(k.a)(['\n  width: 60px;\n  height: 60px;\n  position: absolute;\n  top: calc(50% - 30px);\n  cursor: pointer;\n  &:before,\n  &:after {\n    content: "";\n    position: absolute;\n    left: 15px;\n    top: 15px;\n    width: 30px;\n    height: 8px;\n    background: #ddd;\n  }\n  &:after {\n    width: 8px;\n    height: 30px;\n  }\n  &.left {\n    left: 0;\n    transform: rotate(-45deg);\n  }\n  &.right {\n    right: 0;\n    transform: rotate(135deg);\n  }\n']);return A=function(){return n},n}function T(){var n=Object(k.a)(["\n  position: absolute;\n  z-index: 5;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  display: grid;\n  place-content: center;\n  font-size: 18px;\n  & > span {\n    color: #888;\n    font-size: 12px;\n  }\n  &.fade {\n    opacity: 0;\n    animation: "," 0.7s ease-in "," forwards;\n  }\n"]);return T=function(){return n},n}function J(){var n=Object(k.a)(["\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n"]);return J=function(){return n},n}function M(){var n=Object(k.a)(["\n  position: absolute;\n  cursor: pointer;\n  display: grid;\n  place-content: center;\n  height: var(--size);\n  left: 0;\n  right: 0;\n  font-size: 1em;\n  @media (max-width: 340px) {\n    font-size: 0.7em;\n  }\n  color: #000;\n"]);return M=function(){return n},n}function _(){var n=Object(k.a)(["\n  position: absolute;\n  width: var(--size);\n  left: ",";\n  top: 0;\n  bottom: 0;\n"]);return _=function(){return n},n}function R(){var n=Object(k.a)(["\n  --size: ","\n  position: absolute;\n  top: 12px;\n  left: 12px;\n  right: 12px;\n  bottom: 12px;\n  font-size: ",";\n"]);return R=function(){return n},n}function W(){var n=Object(k.a)(["\n  position: relative;\n  width: 85%;\n  margin: 0 auto 8px;\n  height: 0;\n  padding-top: 85%;\n  overflow: hidden;\n"]);return W=function(){return n},n}function D(){var n=Object(k.a)(["\n  display: flex;\n  justify-content: center;\n  padding-bottom: 16px;\n  & > div {\n    position: relative;\n    padding: 16px 16px 13px 16px;\n    margin: 0 4px;\n    font-size: 12px;\n    cursor: pointer;\n    width: 130px;\n  }\n"]);return D=function(){return n},n}function P(){var n=Object(k.a)(["\n  display: flex;\n  margin: 0 -4px 8px;\n  & > div {\n    position: relative;\n    width: 50%;\n    padding: 8px;\n    margin: 0 4px;\n  }\n  span {\n    display: block;\n    padding-bottom: 10px;\n    font-size: 10px;\n    color: #777;\n  }\n"]);return P=function(){return n},n}function Y(){var n=Object(k.a)(["\n  font-family: Arial, sans-serif;\n  font-size: 15px;\n  padding: 0 0 11px;\n  line-height: 1.2;\n  text-transform: none;\n  color: #999;\n"]);return Y=function(){return n},n}function H(){var n=Object(k.a)(["\n  font-size: 14px;\n  padding: 20px 0 10px;\n  color: #fff;\n  text-shadow: 0 3px 0 #000;\n"]);return H=function(){return n},n}function L(){var n=Object(k.a)(["\n  --col: ",";\n  position: absolute;\n  opacity: ",";\n  z-index: -1;\n  top: ",";\n  left: ",";\n  right: ",";\n  bottom: ",";\n  background-image: linear-gradient(var(--col), var(--col)),\n    linear-gradient(var(--col), var(--col));\n  background-repeat: no-repeat;\n  background-size: calc(100% - var(--block) * 2) 100%,\n    100% calc(100% - var(--block) * 2);\n  background-position: var(--block) 0, 0 var(--block);\n"]);return L=function(){return n},n}function U(){var n=Object(k.a)(["\n  --block: 4px;\n  position: relative;\n  max-width: 450px;\n  padding: 0 10px;\n  margin: 0 auto;\n  text-transform: uppercase;\n"]);return U=function(){return n},n}var Z,$=B.a.div(U()),q=B.a.div(L(),function(n){return n.col},function(n){return n.opacity||1},function(n){return n.offset||0},function(n){return n.offset||0},function(n){return n.offset||0},function(n){return n.offset||0}),F=B.a.div(H()),K=B.a.div(Y()),Q=B.a.div(P()),V=B.a.div(D()),X=["#44ee00","#ffff00","#ff4444","#00ffff","#ff00ff","#6666ff","#ff9900","#00ffaa","#9900ff","#ccddcc","#666666","#999999","#BBBBBB","#EEEEEE"],nn=B.a.div(W()),en=B.a.div(R(),function(n){return n.size},function(n){return n.fontSize}),tn=B.a.div(_(),function(n){return n.left}),an=B.a.div(M()),rn=Object(B.b)(J()),on=B.a.div(T(),rn,function(n){return n.delay||"1s"}),cn=B.a.div(A()),ln=B.a.div(C()),un=B.a.div(I()),sn=function(n){function e(){var n,t;Object(S.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(z.a)(this,(n=Object(j.a)(e)).call.apply(n,[this].concat(r)))).sizeBigger=function(){var n=t.props,e=n.size;(0,n.changeSize)(e<=3?6:e-1)},t.sizeSmaller=function(){var n=t.props,e=n.size;(0,n.changeSize)(e>=6?3:e+1)},t}return Object(w.a)(e,n),Object(y.a)(e,[{key:"componentDidMount",value:function(){var n=this;clearInterval(Z),Z=setInterval(function(){var e=n.props,t=e.setBoard,a=e.size;t(e.board.map(function(n){return n.map(function(n,e){return Object(f.a)({},n,{yOffset:Math.max(a-e-1,n.yOffset-.2)})})}))},1e3/30)}},{key:"render",value:function(){var n=this.props,e=n.size,t=n.board,a=n.score,o=n.topScore,c=n.active,i=n.won,l=n.carryOn,u=n.gameOver,s=n.touchBoard,f=n.startGame,p=n.startNewGame,d=n.openSettings;return r.a.createElement($,null,r.a.createElement(F,null,"Get to ten"),r.a.createElement(K,null,"Tap adjecent tiles with the same number to get a bigger number"),r.a.createElement(nn,null,r.a.createElement(q,{col:"#000"}),r.a.createElement(en,{size:100/e+"%",fontSize:e<4?"22px":e<6?"18px":"14px"},t.map(function(n,i){return r.a.createElement(tn,{key:"col"+i,left:"calc(((100% / "+e+")) * "+i+")"},n.map(function(n,l){return r.a.createElement(an,{key:i+"-"+l,style:{bottom:"calc(((100% / "+e+")) * "+n.yOffset+")"},onClick:function(){c&&!u&&s(i,l,t,e,a,o)}},r.a.createElement(q,{offset:e>5?"calc(var(--block) / 2)":"var(--block)",col:X[Math.min(n.value,X.length-1)]}),n.value)}))})),i?r.a.createElement(on,{className:"fade",delay:"0s"},r.a.createElement(q,{col:"#000",opacity:"0.8"}),r.a.createElement("div",null,"You Win!",r.a.createElement(ln,{onClick:l},r.a.createElement(q,{col:"#eee"}),"Carry On"))):null,c&&!u||i?null:r.a.createElement(G.a,{onSwipeLeft:this.sizeSmaller,onSwipeRight:this.sizeBigger},r.a.createElement(on,{className:u&&c?"fade":""},r.a.createElement(q,{col:"#000",opacity:"0.8"}),r.a.createElement(cn,{className:"left",onClick:this.sizeBigger}),r.a.createElement(cn,{className:"right",onClick:this.sizeSmaller}),r.a.createElement("div",null,u?r.a.createElement(un,null,"Game Over"):null,e," ",r.a.createElement("span",null,"x")," ",e,r.a.createElement(ln,{onClick:function(){u?p(e):f()}},r.a.createElement(q,{col:"#eee"}),u?r.a.createElement("span",{className:"small"},"Try Again"):r.a.createElement("span",{className:"large"},"Play")))))),r.a.createElement(Q,null,r.a.createElement("div",null,r.a.createElement(q,{col:"#262626"}),r.a.createElement("span",null,"Best"),o),r.a.createElement("div",null,r.a.createElement(q,{col:"#262626"}),r.a.createElement("span",null,"Score"),a)),r.a.createElement(V,null,r.a.createElement("div",{onClick:d},r.a.createElement(q,{col:"#444"}),"Options"),r.a.createElement("div",{onClick:function(){p(e)}},r.a.createElement(q,{col:"#444"}),"New Game")))}}]),e}(a.Component),fn=t(50),pn=Object(fn.createActions)({startGame:[],carryOn:[],newGame:["board"],openSettings:[],setBoard:["board"],touchAction:["board","score","topScore","won"],setSize:["board","score","topScore","size"]}),dn=pn.Creators,mn=(pn.Types,t(17)),vn=t(31)(),bn=dn.touchAction,gn=function(n,e,t,a,r,o){return function(c){var i=a<4?2:a>5?4:3,l=t[n][e].value,u=Object(mn.a)({},n+"-"+e,!0),f={},d=!1,m=2;if(function n(e,a){var r=[],o=function(n,e){var a=n+"-"+e;u[a]||(u[a]=!0,t[n]&&t[n][e]&&t[n][e].value===l&&(r.push({x:n,y:e}),f[a]=!0,d=!0,m++))};o(e+1,a),o(e-1,a),o(e,a+1),o(e,a-1),r.forEach(function(e){n(e.x,e.y)})}(n,e),d){var v=JSON.parse(JSON.stringify(t));v[n][e].value+=1;var b=10===v[n][e].value,g=!1;v.forEach(function(t,r){for(var o=Object(s.a)(t),c=0,l=t.length-1;l>=0;l--)!(r===n&&l===e)&&v[r][l].value>=10&&(g=!0),f[r+"-"+l]&&(o.splice(l,1),c++);for(var u=0;u<c;u++){var p=o[0]?o[0].yOffset+1:0;p=Math.max(p,a),o.unshift({value:vn.integer(1,i),yOffset:p})}v[r]=o});var h=p(v),x=b&&!g,O=parseInt(r)+m*v[n][e].value,E=Math.max(O,o);localStorage.setItem("score-"+a,h?0:O),localStorage.setItem("topScore-"+a,E);var S=v.map(function(n){return n.map(function(n){return n.value})});localStorage.setItem("board-"+a,JSON.stringify(S)),c(bn(v,O,E,x))}}},hn=dn.setSize,xn=dn.newGame,On={setBoard:dn.setBoard,touchBoard:gn,changeSize:function(n){return function(e){var t=b(n);e(hn(t.board,t.score,t.topScore,n))}},startNewGame:function(n){return function(e){var t=v(n),a=t.map(function(n){return n.map(function(n){return n.value})});localStorage.setItem("board-"+n,JSON.stringify(a)),localStorage.setItem("score-"+n,0),e(xn(t))}},startGame:dn.startGame,openSettings:dn.openSettings,carryOn:dn.carryOn},En=Object(i.b)(function(n){var e=p(n.main.board);return Object(f.a)({},n.main,{gameOver:e})},function(n){return{carryOn:function(){n(On.carryOn())},setBoard:function(e){n(On.setBoard(e))},touchBoard:function(e,t,a,r,o,c){n(On.touchBoard(e,t,a,r,o,c))},changeSize:function(e){n(On.changeSize(e))},startGame:function(){n(On.startGame())},startNewGame:function(e){n(On.startNewGame(e))},openSettings:function(){n(On.openSettings())}}})(sn);t(115),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Sn=Object(u.a)(l.a),yn=Object(u.d)(E,Sn);c.a.render(r.a.createElement(i.a,{store:yn},r.a.createElement(En,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})},53:function(n,e,t){n.exports=t(118)}},[[53,2,1]]]);
//# sourceMappingURL=main.57c5b3da.chunk.js.map