!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=31)}([function(t,e,n){var i=n(6);i(i.S+i.F*!n(2),"Object",{defineProperty:n(7).f})},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){t.exports=!n(8)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){var n=t.exports={version:"2.6.3"};"number"==typeof __e&&(__e=n)},function(t,e,n){var i=n(7),r=n(17);t.exports=n(2)?function(t,e,n){return i.f(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var i=n(1),r=n(3),o=n(4),s=n(18),a=n(20),u=function(t,e,n){var c,f,l,h,d=t&u.F,p=t&u.G,v=t&u.S,y=t&u.P,b=t&u.B,g=p?i:v?i[e]||(i[e]={}):(i[e]||{}).prototype,w=p?r:r[e]||(r[e]={}),x=w.prototype||(w.prototype={});for(c in p&&(n=e),n)l=((f=!d&&g&&void 0!==g[c])?g:n)[c],h=b&&f?a(l,i):y&&"function"==typeof l?a(Function.call,l):l,g&&s(g,c,l,t&u.U),w[c]!=l&&o(w,c,h),y&&x[c]!=l&&(x[c]=l)};i.core=r,u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},function(t,e,n){var i=n(13),r=n(14),o=n(16),s=Object.defineProperty;e.f=n(2)?Object.defineProperty:function(t,e,n){if(i(t),e=o(e,!0),i(n),r)try{return s(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){var n=0,i=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+i).toString(36))}},function(t,e,n){var i=n(6);i(i.P,"Array",{fill:n(22)}),n(27)("fill")},function(t,e){var n=Math.ceil,i=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?i:n)(t)}},function(t,e,n){},function(t,e,n){var i=n(5);t.exports=function(t){if(!i(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){t.exports=!n(2)&&!n(8)(function(){return 7!=Object.defineProperty(n(15)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var i=n(5),r=n(1).document,o=i(r)&&i(r.createElement);t.exports=function(t){return o?r.createElement(t):{}}},function(t,e,n){var i=n(5);t.exports=function(t,e){if(!i(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!i(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var i=n(1),r=n(4),o=n(19),s=n(9)("src"),a=Function.toString,u=(""+a).split("toString");n(3).inspectSource=function(t){return a.call(t)},(t.exports=function(t,e,n,a){var c="function"==typeof n;c&&(o(n,"name")||r(n,"name",e)),t[e]!==n&&(c&&(o(n,s)||r(n,s,t[e]?""+t[e]:u.join(String(e)))),t===i?t[e]=n:a?t[e]?t[e]=n:r(t,e,n):(delete t[e],r(t,e,n)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[s]||a.call(this)})},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var i=n(21);t.exports=function(t,e,n){if(i(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,i){return t.call(e,n,i)};case 3:return function(n,i,r){return t.call(e,n,i,r)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){"use strict";var i=n(23),r=n(25),o=n(26);t.exports=function(t){for(var e=i(this),n=o(e.length),s=arguments.length,a=r(s>1?arguments[1]:void 0,n),u=s>2?arguments[2]:void 0,c=void 0===u?n:r(u,n);c>a;)e[a++]=t;return e}},function(t,e,n){var i=n(24);t.exports=function(t){return Object(i(t))}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var i=n(11),r=Math.max,o=Math.min;t.exports=function(t,e){return(t=i(t))<0?r(t+e,0):o(t,e)}},function(t,e,n){var i=n(11),r=Math.min;t.exports=function(t){return t>0?r(i(t),9007199254740991):0}},function(t,e,n){var i=n(28)("unscopables"),r=Array.prototype;null==r[i]&&n(4)(r,i,{}),t.exports=function(t){r[i][t]=!0}},function(t,e,n){var i=n(29)("wks"),r=n(9),o=n(1).Symbol,s="function"==typeof o;(t.exports=function(t){return i[t]||(i[t]=s&&o[t]||(s?o:r)("Symbol."+t))}).store=i},function(t,e,n){var i=n(3),r=n(1),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:i.version,mode:n(30)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,e){t.exports=!1},function(t,e,n){"use strict";n.r(e);n(12),n(0),n(10);function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var r=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=e,this.y=n}var e,n,r;return e=t,(n=[{key:"add",value:function(t){this.x+=t.x,this.y+=t.y}},{key:"limit",value:function(t){this.x>t&&(this.x=t),this.y>t&&(this.y=t)}},{key:"copy",value:function(){return new t(this.x,this.y)}}])&&i(e.prototype,n),r&&i(e,r),t}();function o(t){return new r(Math.cos(t),Math.sin(t),0)}function s(t,e,n,i){return Math.sqrt(a(n-t)+a(i-e))}function a(t){return t*t}function u(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var c=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.step=0,this.size=e,this.directions=[],this.randomize()}var e,n,i;return e=t,(n=[{key:"randomize",value:function(){for(var t=0;t<this.size;t++)this.directions[t]=o(Math.random()*(2*Math.PI))}},{key:"mutate",value:function(){for(var t=0;t<this.directions.length;t++){1*Math.random()<.01&&(this.directions[t]=o(Math.random()*(2*Math.PI)))}}},{key:"clone",value:function(){for(var e=new t(this.directions.length),n=0;n<this.directions.length;n++)e.directions[n]=this.directions[n].copy();return e}}])&&u(e.prototype,n),i&&u(e,i),t}();function f(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var l=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.displaySize=e,this.goalPos=n,this.pos=new r(e/2,e-10*window.devicePixelRatio),this.vel=new r(0,0),this.acc=new r(0,0),this.dead=!1,this.reachedGoal=!1,this.isBest=!1,this.brain=new c(400),this.fitness=0}var e,n,i;return e=t,(n=[{key:"draw",value:function(t){t.beginPath(),t.arc(this.pos.x,this.pos.y,4,0,2*Math.PI),t.stroke(),t.fill()}},{key:"update",value:function(){if(!this.dead&&!this.reachedGoal){this.move(),this.pos.x<5||this.pos.x>this.displaySize-5||this.pos.y<5||this.pos.y>this.displaySize-5?this.dead=!0:s(this.pos.x,this.pos.y,this.goalPos.x,this.goalPos.y)<5&&(this.reachedGoal=!0)}}},{key:"move",value:function(){this.brain.directions.length>this.brain.step&&(this.acc=this.brain.directions[this.brain.step],this.brain.step++),this.vel.add(this.acc),this.vel.limit(5),this.pos.add(this.vel)}},{key:"calculateFitness",value:function(){if(this.reachedGoal)this.fitness=1/16+1e4/(this.brain.step*this.brain.step);else{var t=s(this.pos.x,this.pos.y,this.goalPos.x,this.goalPos.y);this.fitness=1/(t*t)}}},{key:"getBaby",value:function(){var e=new t(this.displaySize,this.goalPos);return e.brain=this.brain.clone(),e}}])&&f(e.prototype,n),i&&f(e,i),t}();function h(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var d=function(){function t(e,n,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.dots=[],this.fitnessSum=0,this.bestDot=0,this.gen=1;for(var r=0;r<i;r++)this.dots[r]=new l(e,n)}var e,n,i;return e=t,(n=[{key:"update",value:function(){for(var t=this.dots.length,e=0;e<t;e++)this.dots[e].update()}},{key:"draw",value:function(t){var e=this.dots.length;t.fillStyle="#000000",t.strokeStyle="#000000";for(var n=0;n<e;n++)this.dots[n].draw(t)}},{key:"calculateFitness",value:function(){for(var t=this.dots.length,e=0;e<t;e++)this.dots[e].calculateFitness(),this.fitnessSum=this.dots[e].fitness}},{key:"allDotsDead",value:function(){for(var t=this.dots.length,e=0;e<t;e++)if(!this.dots[e].dead&&!this.dots[e].reachedGoal)return!1;return!0}},{key:"naturalSelection",value:function(){var t=[];this.setBestDot(),t[0]=this.dots[this.bestDot].getBaby(),t[0].isBest=!0;for(var e=1;e<this.dots.length;e++){var n=this.selectParent();t[e]=n.getBaby()}t.reverse(),this.dots=t,this.gen++}},{key:"mutate",value:function(){for(var t=1;t<this.dots.length;t++)this.dots[t].brain.mutate()}},{key:"setBestDot",value:function(){for(var t=0,e=0,n=0;n<this.dots.length;n++)this.dots[n].fitness>t&&(e=n,t=this.dots[n].fitness);this.bestDot=e}},{key:"selectParent",value:function(){for(var t=Math.random()*this.fitnessSum,e=0,n=0;n<this.dots.length;n++)if((e+=this.dots[n].fitness)>t)return this.dots[n];return this.dots[this.dots.length-1]}}])&&h(e.prototype,n),i&&h(e,i),t}();function p(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var v,y,b,g,w=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.pos=new r(e,n)}var e,n,i;return e=t,(n=[{key:"draw",value:function(t){t.fillStyle="#ff0000",t.strokeStyle="#ff0000",t.beginPath(),t.arc(this.pos.x,this.pos.y,4,0,2*Math.PI),t.stroke(),t.fill()}}])&&p(e.prototype,n),i&&p(e,i),t}();if(v=document.getElementById("canvas"),y=v.getContext("2d"),window.devicePixelRatio){canvas.setAttribute("width",Math.round(800*window.devicePixelRatio)),canvas.setAttribute("height",Math.round(800*window.devicePixelRatio)),canvas.style.width="800px",canvas.style.height="800px",y.scaleX=y.scaleY=window.devicePixelRatio}g=new w(400,20),b=new d(800,g.pos,400),function t(){y.clearRect(0,0,canvas.width,canvas.height);g.draw(y);b.allDotsDead()?(b.calculateFitness(),b.naturalSelection(),b.mutate()):b.update();b.draw(y);setTimeout(t,.1)}()}]);
//# sourceMappingURL=app.bf87ff4e.js.map