(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{328:function(t,a,e){},407:function(t,a,e){"use strict";e(328)},454:function(t,a,e){"use strict";e.r(a);e(22);var n=e(345),s=e(346),l=e(347),o=e(348),f=e(349),b=e(237),c=e(225),d={components:{LfTabs:n.a,LfTabsBody:s.a,LfTabsHead:l.a,LfTabsItem:o.a,LfTabsPane:f.a,LfButton:b.a,LfCollaspe:c.default},data:function(){return{selected:"1",content:'\n        data:{\n          selected: \'1\'\n        }\n\n        <lf-tabs :selected="selected">\n          <lf-tabs-head>\n            <lf-tabs-item name="1">1</lf-tabs-item>\n            <lf-tabs-item name="2">2</lf-tabs-item>\n          </lf-tabs-head>\n          <lf-tabs-body>\n            <lf-tabs-pane name="1">content 1</lf-tabs-pane>\n            <lf-tabs-pane name="2">content 2</lf-tabs-pane>\n          </lf-tabs-body>\n        </lf-tabs>\n    '.replace(/^ {8}/gm,"").trim()}}},v=(e(407),e(1)),i=Object(v.a)(d,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticStyle:{"padding-top":"16px"}},[e("h2",[t._v("简单用法")]),t._v(" "),e("div",{staticClass:"demo-box"},[e("div",{staticClass:"top"},[e("lf-tabs",{attrs:{selected:t.selected}},[e("lf-tabs-head",[e("lf-tabs-item",{attrs:{name:"1"}},[t._v("1")]),t._v(" "),e("lf-tabs-item",{attrs:{name:"2"}},[t._v("2")])],1),t._v(" "),e("lf-tabs-body",[e("lf-tabs-pane",{attrs:{name:"1"}},[t._v("content 1")]),t._v(" "),e("lf-tabs-pane",{attrs:{name:"2"}},[t._v("content 2")])],1)],1)],1),t._v(" "),e("lf-collaspe",[e("p",{attrs:{slot:"one"},slot:"one"},[t._v("\n        tabs组件使用的时候必须在"),e("code",[t._v("lf-tabs-item")]),t._v("和"),e("code",[t._v("lf-tabs-pane")]),t._v("中都传入一个name属性，并且要一一对应，通过给"),e("code",[t._v("lf-tabs")]),t._v("添加一个"),e("code",[t._v("selected")]),t._v("可以实现默认选中。\n      ")]),t._v(" "),e("code",{attrs:{slot:"two"},slot:"two"},[t._v(t._s(t.content))])])],1)])}),[],!1,null,"b7785060",null);a.default=i.exports}}]);