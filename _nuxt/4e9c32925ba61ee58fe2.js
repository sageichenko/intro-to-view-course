(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{158:function(t,e,n){var content=n(181);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("8914b2fc",content,!0,{sourceMap:!1})},159:function(t,e,n){var content=n(183);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("e095defe",content,!0,{sourceMap:!1})},180:function(t,e,n){"use strict";var o=n(158);n.n(o).a},181:function(t,e,n){(t.exports=n(37)(!1)).push([t.i,".height-counter{display:inline-block}",""])},182:function(t,e,n){"use strict";var o=n(159);n.n(o).a},183:function(t,e,n){(t.exports=n(37)(!1)).push([t.i,".ball-app{background:#222}.bounce{width:100vw;height:80vh}.button-group{width:80rem;margin:0 auto;text-align:center}.button-group button{font-family:Montserrat,sans-serif;min-width:8rem;border:none;padding:.8rem 1.6rem;background:#444;font-size:1.5rem;color:#fff;border-radius:.3rem;outline:0;cursor:pointer}",""])},192:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{count:0}},methods:{bottomIncrease:function(){this.$emit("bottomincrease")},bottomDecrease:function(){this.$emit("bottomdecrease")},topIncrease:function(){this.$emit("topincrease")},topDecrease:function(){this.$emit("topdecrease")}}},r=(n(180),n(12)),c={components:{HeightCounter:Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"height-counter"},[n("button",{staticClass:"height-counter__button",on:{click:t.topIncrease}},[t._v("Increase top")]),t._v(" "),n("button",{staticClass:"height-counter__button",on:{click:t.topDecrease}},[t._v("Decrease top")]),t._v(" "),n("button",{staticClass:"height-counter__button",on:{click:t.bottomIncrease}},[t._v("Increase bottom")]),t._v(" "),n("button",{staticClass:"height-counter__button",on:{click:t.bottomDecrease}},[t._v("Decrease bottom")])])},[],!1,null,null,null).exports},data:function(){return{top:200,bottom:400,radius:15,x1:15,y1:300,g:.1,vx:2,vy:0,req:null,running:!1}},methods:{incrementBottom:function(){this.bottom+=100},decrementBottom:function(){this.bottom-=100},incrementTop:function(){this.top-=100},decrementTop:function(){this.top+=100},bounceBall:function(){this.vy+=this.g,this.x1+=this.vx,this.y1+=this.vy,this.y1>this.bottom-this.radius?(this.y1=this.bottom-this.radius,this.vy*=-.8):this.y1<this.top+this.radius&&(this.y1=this.top+this.radius,this.vy*=-1)},animateBall:function(){var t,e=this;this.running=!0,this.req=window.requestAnimationFrame(function n(o){t||(t=o),o-t<13e3?(e.bounceBall(),e.req=window.requestAnimationFrame(n)):(e.x1=this.radius,e.y1=this.radius,e.running=!1)})},cancelAnimate:function(){cancelAnimationFrame(this.req),this.running=!1,this.radius=15,this.top=200,this.bottom=400,this.x1=this.radius,this.y1=this.top+this.radius,this.g=.1,this.vx=2,this.vy=0}}},h=(n(182),Object(r.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app"},[t._m(0),t._v(" "),n("div",{staticClass:"ball-app"},[n("div",{staticClass:"button-group"},[t.running?n("button",{on:{click:t.cancelAnimate}},[t._v("Reset")]):n("button",{on:{click:t.animateBall}},[t._v("Start")]),t._v(" "),n("height-counter",{on:{bottomincrease:t.incrementBottom,bottomdecrease:t.decrementBottom,topincrease:t.incrementTop,topdecrease:t.decrementTop}})],1),t._v(" "),n("svg",{staticClass:"bounce",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 600"}},[n("line",{attrs:{x1:"400",x2:"400",y1:t.top+t.radius,y2:t.bottom-t.radius,stroke:"#555","stroke-width":"4","stroke-dasharray":"5, 5"}}),t._v(" "),n("line",{attrs:{x1:"390",x2:"410",y1:t.top+t.radius,y2:t.top+t.radius,stroke:"#555","stroke-width":"4"}}),t._v(" "),n("line",{attrs:{x1:"390",x2:"410",y1:t.bottom-t.radius,y2:t.bottom-t.radius,stroke:"#555","stroke-width":"4"}}),t._v(" "),n("circle",{style:{transform:"translate3d("+t.x1+"px, "+t.y1+"px, 0)"},attrs:{r:t.radius,cx:"0",cy:"0",fill:"teal"}})])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"description"},[this._v("\n        В этом упражнении показано взаимодействие дочерних элементов с родительским, а именно передача информации о изменениях и событих от дочернего элемента к родительскому. Кнопки управления высотой являются отдельным компонентом, и при нажатии они сообщают родителю, что что-то изменилось, а родитель обрабатывает это изменение. Когда мяяик прыгает он должен упираться в заданные границы.\n        "),e("br"),this._v(" "),e("a",{staticClass:"description__link",attrs:{href:"https://codepen.io/sageichenko/pen/aejOMr",target:"_blank"}},[this._v("Код на codeopen")])])}],!1,null,null,null));e.default=h.exports}}]);