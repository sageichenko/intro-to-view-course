(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{162:function(t,n,e){var content=e(189);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(38).default)("b0ab36d2",content,!0,{sourceMap:!1})},188:function(t,n,e){"use strict";var o=e(162);e.n(o).a},189:function(t,n,e){(t.exports=e(37)(!1)).push([t.i,".section[data-v-1751f36d]{width:100%;height:100%;padding:15vmin;transition:background-color .2s ease}.coordinates[data-v-1751f36d],.counter__button[data-v-1751f36d],.counter__text[data-v-1751f36d]{font-size:3rem}",""])},195:function(t,n,e){"use strict";e.r(n);var o={data:function(){return{counter:0,x:"",y:""}},methods:{increment:function(){this.counter++},decrement:function(){this.counter--},xyCoordinate:function(t){this.x=t.clientX,this.y=t.clientY}}},c=(e(188),e(12)),component=Object(c.a)(o,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"app"},[t._m(0),t._v(" "),e("div",{staticClass:"section",style:{backgroundColor:"hsl("+t.x+", 80%, 50%)"},on:{mousemove:t.xyCoordinate}},[e("p",{staticClass:"counter"},[e("button",{staticClass:"counter__button",attrs:{disabled:t.counter<=0},on:{click:t.decrement}},[t._v("-")]),t._v(" "),e("span",{staticClass:"counter__text"},[t._v(t._s(t.counter))]),t._v(" "),e("button",{staticClass:"counter__button",on:{click:t.increment}},[t._v("+")])]),t._v(" "),e("p",{staticClass:"coordinates"},[t._v("\n            x-coordinate "+t._s(t.x)+"\n            y-coordinate "+t._s(t.y)+"\n        ")])])])},[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"description"},[this._v("\n        Знакомство с обработкой событий, здесь отслеживаются события движения мыши и клики по контролам + и -\n        "),n("br"),this._v(" "),n("a",{staticClass:"description__link",attrs:{href:"https://codepen.io/sageichenko/pen/bXLMXa",target:"_blank"}},[this._v("Код на codeopen")])])}],!1,null,"1751f36d",null);n.default=component.exports}}]);