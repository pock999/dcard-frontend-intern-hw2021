(this["webpackJsonpdcard-frontend-hw2021"]=this["webpackJsonpdcard-frontend-hw2021"]||[]).push([[0],{116:function(e,t,n){"use strict";(function(e){n(138),n(139),n(140);var c=n(117),a=n.n(c),r=n(129),i=n(14);e._=a.a,t.a=function(){return Object(i.jsx)(r.a,{})}}).call(this,n(55))},129:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var c=n(0),a=n.n(c),r=n(179),i=n(50),o=n(56),u=n(183),s=n(70),l=n(184),p=n(182),d=n(14),h=[{value:"",name:"\u5168\u90e8"},{value:"Taipei",name:"\u81fa\u5317\u5e02"},{value:"NewTaipei",name:"\u65b0\u5317\u5e02"},{value:"Taoyuan",name:"\u6843\u5712\u5e02"},{value:"Taichung",name:"\u81fa\u4e2d\u5e02"},{value:"Tainan",name:"\u81fa\u5357\u5e02"},{value:"Kaohsiung",name:"\u9ad8\u96c4\u5e02"},{value:"Keelung",name:"\u57fa\u9686\u5e02"},{value:"Hsinchu",name:"\u65b0\u7af9\u5e02"},{value:"HsinchuCounty",name:"\u65b0\u7af9\u7e23"},{value:"MiaoliCounty",name:"\u82d7\u6817\u7e23"},{value:"ChanghuaCounty",name:"\u5f70\u5316\u7e23"},{value:"NantouCounty",name:"\u5357\u6295\u7e23"},{value:"YunlinCounty",name:"\u96f2\u6797\u7e23"},{value:"ChiayiCounty",name:"\u5609\u7fa9\u7e23"},{value:"Chiayi",name:"\u5609\u7fa9\u5e02"},{value:"PingtungCounty",name:"\u5c4f\u6771\u7e23"},{value:"YilanCounty",name:"\u5b9c\u862d\u7e23"},{value:"HualienCounty",name:"\u82b1\u84ee\u7e23"},{value:"TaitungCounty",name:"\u81fa\u6771\u7e23"},{value:"KinmenCounty",name:"\u91d1\u9580\u7e23"},{value:"PenghuCounty",name:"\u6f8e\u6e56\u7e23"},{value:"LienchiangCounty",name:"\u9023\u6c5f\u7e23"}],b=function(e){if(!e)return"\u5168\u90e8";try{return h.find((function(t){return t.value===e})).name}catch(t){return"\u5168\u90e8"}},v=function(e){var t=e.data,n=e.historyPush,c=Object(r.d)().City;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(u.a,{className:"site-page-header",title:b(c),subTitle:"This is a subtitle",extra:[Object(d.jsx)(s.a,{style:{width:120},defaultValue:b(c),onChange:function(e){n(""===e?"/scenicSpot":"/scenicSpot/".concat(e))},children:h.map((function(e){return Object(d.jsx)(s.a.Option,{value:e.value,children:e.name},e.value)}))})]}),Object(d.jsx)(l.b,{grid:{gutter:16,column:3},itemLayout:"vertical",dataSource:t,renderItem:function(e){return Object(d.jsx)(l.b.Item,{children:Object(d.jsx)(p.a,{style:{flex:1},hoverable:!0,children:Object(d.jsx)(p.a.Meta,{title:e.Name,description:e.Description})})})}})]})},f=n(51),j=[{path:"/",component:function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("h1",{children:"Home"})})}},{path:"/scenicSpot",component:function(e){var t=Object(i.b)(),n=Object(i.c)((function(e){return e.ScenicSpotStore.scenicSpots})),c=a.a.useRef(0),r=function(){var e=window.innerHeight,n=document.documentElement.scrollTop,a=document.documentElement.scrollHeight;0!==c.current&&e+n+10>=a?(t(f.b.FetchScenicSpotListAction({skip:30*c.current,city:""})),c.current++):console.log(e+n+10-a)};return a.a.useEffect((function(){return t(f.b.InitScenicSpotListAction({skip:0,city:""})),c.current++,window.addEventListener("scroll",r),function(){window.removeEventListener("scroll",r)}}),[]),Object(d.jsxs)("div",{children:[Object(d.jsx)(v,{data:n,historyPush:function(e){return o.a.push(e)}}),Object(d.jsx)("div",{style:{height:50},children:"\u8f09\u5165\u4e2d..."})]})}},{path:"/scenicSpot/:City",component:function(e){var t=Object(i.b)(),n=Object(i.c)((function(e){return e.ScenicSpotStore.scenicSpots})),c=(Object(r.d)().City,a.a.useRef(1)),u=function(){var e=window.innerHeight,n=document.documentElement.scrollTop,a=document.documentElement.scrollHeight;e+n+10>=a?(t(f.b.FetchScenicSpotListAction({skip:30*c.current,city:""})),c.current++):console.log(e+n+10-a)};return a.a.useEffect((function(){t(f.b.InitScenicSpotListAction({skip:0,city:""})),window.addEventListener("scroll",u)}),[]),Object(d.jsxs)("div",{children:[Object(d.jsx)(v,{data:n,historyPush:function(e){o.a.push(e)}}),Object(d.jsx)("div",{style:{height:50},children:"\u8f09\u5165\u4e2d..."})]})}}],m=function(){return Object(d.jsx)(r.c,{children:j.map((function(e,t){return Object(d.jsx)(r.a,{exact:!0,component:e.component,path:e.path},e.path)}))})}},137:function(e,t,n){},138:function(e,t,n){"use strict";n.p},139:function(e,t,n){},176:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(27),i=n.n(r),o=(n(137),n(116)),u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,185)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))},s=n(51),l=n(179),p=n(50),d=n(56),h=n(14);i.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(p.a,{store:s.a,children:Object(h.jsx)(l.b,{history:d.a,basename:"/dcard-frontend-intern-hw2021",children:Object(h.jsx)(o.a,{})})})}),document.getElementById("root")),u()},51:function(e,t,n){"use strict";n.d(t,"b",(function(){return E}));var c=n(102),a=n(36),r=n.n(a),i=n(65),o=n(130),u=n(87),s=n(28),l=n(42),p=n(100),d=(n(66),n(101)),h=n.n(d),b=r.a.mark(x),v=r.a.mark(g),f="https://ptx.transportdata.tw/MOTC",j=Object(u.b)({name:"ScenicSpotStore",initialState:{scenicSpots:[]},reducers:{setscenicSpotList:function(e,t){e.scenicSpots=[].concat(Object(i.a)(e.scenicSpots),Object(i.a)(t.payload))},clearscenicSpotList:function(e,t){e.scenicSpots=[]}}}),m=j.actions,S=m.setscenicSpotList,O=m.clearscenicSpotList,y="SCENIC_SPOT_SAGA/FETCH_SCENIC_SPOTS_LIST";function x(e){var t,n,c;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return console.log("=== FetchScenicSpotList ==="),t=e.payload,console.log("payload => ",t),n=function(){var e=Object(p.a)(r.a.mark((function e(){var n,c,a,i,o,u;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c=t.city,a=void 0===c?"":c,i=t.skip,u="?$top=30&",0!==(o=void 0===i?0:i)&&(u+="$skip=".concat(o,"&")),""!==a&&(u="/".concat(a).concat(u,"&")),e.next=7,h.a.get("".concat(f,"/v2/Tourism/ScenicSpot").concat(u));case 7:n=(n=e.sent).data,e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),n=e.t0;case 14:return e.abrupt("return",n);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),a.prev=4,a.next=7,Object(l.b)(n);case 7:c=a.sent,a.next=13;break;case 10:a.prev=10,a.t0=a.catch(4),c=[];case 13:return a.next=15,Object(l.c)(S(c));case 15:case"end":return a.stop()}}),b,null,[[4,10]])}function g(e){var t,n,c;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return console.log("=== InitScenicSpotList ==="),t=e.payload,n=function(){var e=Object(p.a)(r.a.mark((function e(){var n,c,a,i,o,u;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c=t.city,a=void 0===c?"":c,i=t.skip,u="?$top=30&",0!==(o=void 0===i?0:i)&&(u+="$skip=".concat(o)),""!==a&&(u="/".concat(a)+u),e.next=7,h.a.get("".concat(f,"/v2/Tourism/ScenicSpot").concat(u));case 7:n=(n=e.sent).data,e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),n=e.t0;case 14:return e.abrupt("return",n);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),a.prev=3,a.next=6,Object(l.b)(n);case 6:c=a.sent,a.next=12;break;case 9:a.prev=9,a.t0=a.catch(3),c=[];case 12:return a.next=14,Object(l.c)(O());case 14:return a.next=16,Object(l.c)(S(c));case 16:case"end":return a.stop()}}),v,null,[[3,9]])}var C={reducer:j.reducer,reducerActions:{setscenicSpotList:S,clearscenicSpotList:O},sagas:[Object(l.d)(y,x),Object(l.d)("SCENIC_SPOT_SAGA/INIT_SCENIC_SPOTS_LIST",g)],sagaActions:{FetchScenicSpotListAction:function(e){return{type:y,payload:e}},InitScenicSpotListAction:function(e){return{type:y,payload:e}}},selectors:{}},w=r.a.mark(T),L=Object(s.c)({ScenicSpotStore:C.reducer});function T(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.a)(Object(i.a)(C.sagas));case 2:case"end":return e.stop()}}),w)}var k=Object(o.a)(),I=Object(u.a)({reducer:L,middleware:function(e){return[].concat(Object(i.a)(e({thunk:!1,serializableCheck:!1})),[k])}});k.run(T);Object(c.a)({},C.reducerActions);var E=Object(c.a)({},C.sagaActions);t.a=I},56:function(e,t,n){"use strict";var c=n(40);t.a=c.a()}},[[176,1,2]]]);
//# sourceMappingURL=main.6f4234b7.chunk.js.map