function _get(e,t,r){return(_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=_superPropBase(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(r):o.value}})(e,t,r||e)}function _superPropBase(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_getPrototypeOf(e)););return e}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{CZp0:function(e,t,r){"use strict";r.r(t);var n=r("/1cH"),o=r("kmnG"),i=r("qFsG"),s=r("tyNb"),a=r("fXoL"),c=r("ofXK"),l=r("aOew"),d=r("FKr1"),u=["testItem"];function b(e,t){1&e&&(a.Sb(0,"h3",37),a.rc(1,"Your Browser supports custom scrollbars!"),a.Rb())}function h(e,t){1&e&&(a.Sb(0,"h3",38),a.rc(1,"Your Browser doesn't support custom scrollbars, fallback to native scrollbars!"),a.Rb())}function p(e,t){if(1&e&&(a.Sb(0,"div",39),a.rc(1),a.Rb()),2&e){var r=t.$implicit;a.Bb(1),a.tc("Item: ",r,"")}}function f(e,t){if(1&e&&(a.Sb(0,"div",39),a.rc(1),a.Rb()),2&e){var r=t.$implicit;a.Bb(1),a.tc("Item: ",r,"")}}var m,g,_=((g=function(){function e(t,r){_classCallCheck(this,e),this._platform=t,this.cd=r,this.isCustomScrollbarSupported=!1,this.dynamicItems=[0,1],this.dynamicItemsTwo=[0,1],this.parentResizeExampleScrollbarSize=300,this.resizeExampleScrollbarSize=300}return _createClass(e,[{key:"ngAfterViewInit",value:function(){Object(c.s)(this._platform)&&(this.isCustomScrollbarSupported=this.testItem.nativeElement.offsetWidth>this.testItem.nativeElement.clientWidth,this.cd.detectChanges())}},{key:"addDynamicItem",value:function(e){e.push(e.length)}},{key:"removeDynamicItem",value:function(e){return e.slice(0,e.length-1)}},{key:"changeDetectionTriggered",get:function(){return console.log("Change detection triggered"),!0}}]),e}()).\u0275fac=function(e){return new(e||g)(a.Mb(a.B),a.Mb(a.h))},g.\u0275cmp=a.Gb({type:g,selectors:[["app-development"]],viewQuery:function(e,t){var r;1&e&&a.oc(u,!0),2&e&&a.ic(r=a.bc())&&(t.testItem=r.first)},decls:151,vars:12,consts:[[1,"hint"],[1,"excuse"],["class","support-info",4,"ngIf"],["class","support-info not-supported",4,"ngIf"],[1,"test-item"],["testItem",""],[1,"example","default-theme"],[1,"dummy-content","d-1"],[1,"example"],["overflowX","scroll","overflowY","native-scroll"],[1,"dummy-content","d-2"],["marginsX","10 20","marginsY","10 20 40 40"],[1,"dummy-content","d-3"],["xPosition","top","yPosition","left","marginsX","8 20","marginsY","20 8"],[1,"dummy-content","d-4"],["marginsX","0 40 10 10","marginsY","20",1,"custom-size"],[1,"dummy-content","d-5"],["marginsX","0 40 10 10","marginsY","20",1,"custom-default"],[1,"dummy-content","d-6"],[1,"example","flex-example"],[1,"dummy-content","d-7"],["overflowX","scroll","overflowY","scroll",1,"custom-scroll"],[1,"dynamic-content"],["class","dynamic-item",4,"ngFor","ngForOf"],["type","button",3,"click"],["type","button",3,"disabled","click"],["overflowX","hidden",1,"dynamic-scrollbar-size"],[1,"d-8"],["overflowX","hidden"],[1,"dummy-content-fixed"],[3,"click"],["overflowX","hidden",2,"height","100%","width","100%"],[1,"example",2,"height","40vh"],[1,"example",2,"margin-top","100px"],["type","text","matInput","",3,"matAutocomplete"],["auto",""],[2,"height","0","width","0","overflow","hidden"],[1,"support-info"],[1,"support-info","not-supported"],[1,"dynamic-item"]],template:function(e,t){if(1&e&&(a.Sb(0,"h1"),a.rc(1,"pri-ng-scrollbar"),a.Rb(),a.Sb(2,"p",0),a.rc(3,"This is a testing page, because many test cases can only be tested manually"),a.Rb(),a.Sb(4,"p",1),a.rc(5,"Hope nobody feels offended by such an unstyled ugly page... if there is time left i'll add some styles i promise <<."),a.Rb(),a.qc(6,b,2,0,"h3",2),a.qc(7,h,2,0,"h3",3),a.Sb(8,"div",4,5),a.Nb(10,"div"),a.Rb(),a.Sb(11,"div",6),a.Sb(12,"h2"),a.rc(13,"Default:"),a.Rb(),a.Sb(14,"code"),a.rc(15,"Styled with SCSS Theme"),a.Rb(),a.Sb(16,"pri-scrollbar"),a.Sb(17,"div",7),a.rc(18," overflowX: auto "),a.Nb(19,"br"),a.rc(20," overflowY: auto "),a.Rb(),a.Rb(),a.Rb(),a.Sb(21,"div",8),a.Sb(22,"h2"),a.rc(23,"Mix: native and custom scrollbar"),a.Rb(),a.Sb(24,"pri-scrollbar",9),a.Sb(25,"div",10),a.rc(26," overflowX: scroll "),a.Nb(27,"br"),a.rc(28," overflowY: native-scroll "),a.Rb(),a.Rb(),a.Rb(),a.Sb(29,"div",8),a.Sb(30,"h2"),a.rc(31,"Custom margins"),a.Rb(),a.Sb(32,"pri-scrollbar",11),a.Sb(33,"div",12),a.rc(34," marginX => horizontal scrollbar => \"10 20\" => like in css: top/bottom left/right [top margin only if xPosition = 'top'] "),a.Nb(35,"br"),a.rc(36,' marginY: vertical scrollbar => "10 20 40 40" => - " - : top right left bottom [left margin only if yPosition = \'left\'] '),a.Nb(37,"br"),a.Rb(),a.Rb(),a.Rb(),a.Sb(38,"div",8),a.Sb(39,"h2"),a.rc(40,"Custom positions"),a.Rb(),a.Sb(41,"pri-scrollbar",13),a.Sb(42,"div",14),a.rc(43," xPosition: top => horizontal scrollbar "),a.Nb(44,"br"),a.rc(45," yPosition: left => vertical scrollbar "),a.Rb(),a.Rb(),a.Rb(),a.Sb(46,"div",8),a.Sb(47,"h2"),a.rc(48,"Custom size and color"),a.Rb(),a.Sb(49,"pri-scrollbar",15),a.Sb(50,"div",16),a.rc(51," custom size and color "),a.Rb(),a.Rb(),a.Rb(),a.Sb(52,"div",8),a.Sb(53,"h2"),a.rc(54,"Custom size and color"),a.Rb(),a.Sb(55,"pri-scrollbar",17),a.Sb(56,"div",18),a.rc(57," custom size and color "),a.Rb(),a.Rb(),a.Rb(),a.Sb(58,"div",19),a.Sb(59,"h2"),a.rc(60,"Flex Container"),a.Rb(),a.Sb(61,"pri-scrollbar"),a.Sb(62,"div",20),a.rc(63," Flex container "),a.Rb(),a.Rb(),a.Rb(),a.Sb(64,"div",8),a.Sb(65,"h2"),a.rc(66,"Custom Scrollbars overflow = 'scroll'"),a.Rb(),a.Sb(67,"pri-scrollbar",21),a.Sb(68,"div"),a.rc(69,"Content size is smaller than its container"),a.Rb(),a.Rb(),a.Rb(),a.Sb(70,"div",8),a.Sb(71,"h2"),a.rc(72,"Dynamic Content"),a.Rb(),a.Sb(73,"pri-scrollbar",22),a.qc(74,p,2,1,"div",23),a.Rb(),a.Sb(75,"button",24),a.ac("click",(function(e){return t.addDynamicItem(t.dynamicItems)})),a.rc(76,"Add Item"),a.Rb(),a.Sb(77,"button",25),a.ac("click",(function(e){return t.dynamicItems=t.removeDynamicItem(t.dynamicItems)})),a.rc(78,"Remove Item"),a.Rb(),a.Rb(),a.Sb(79,"div",8),a.Sb(80,"h2"),a.rc(81,"Dynamic pri-scrollbar height, based on its content height (max-height: 400px)"),a.Rb(),a.Sb(82,"code"),a.rc(83," This only works when: overflowX='hidden' "),a.Rb(),a.Sb(84,"pri-scrollbar",26),a.Sb(85,"div",27),a.qc(86,f,2,1,"div",23),a.Sb(87,"button",24),a.ac("click",(function(e){return t.addDynamicItem(t.dynamicItemsTwo)})),a.rc(88,"Add Item"),a.Rb(),a.Sb(89,"button",25),a.ac("click",(function(e){return t.dynamicItemsTwo=t.removeDynamicItem(t.dynamicItemsTwo)})),a.rc(90,"Remove Item"),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Sb(91,"div",8),a.Sb(92,"h2"),a.rc(93,"Scrollbar itself resize"),a.Rb(),a.Sb(94,"code"),a.rc(95,"the scrollbar thumb should change when clicking + / -"),a.Rb(),a.Sb(96,"pri-scrollbar",28),a.Sb(97,"div",29),a.rc(98," change scrollbar size by 100px "),a.Sb(99,"button",30),a.ac("click",(function(e){return t.resizeExampleScrollbarSize=t.resizeExampleScrollbarSize+100})),a.rc(100,"+"),a.Rb(),a.Sb(101,"button",30),a.ac("click",(function(e){return t.resizeExampleScrollbarSize=t.resizeExampleScrollbarSize-100})),a.rc(102,"-"),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Sb(103,"div",19),a.Sb(104,"h2"),a.rc(105,"Scrollbar parent resized"),a.Rb(),a.Sb(106,"code"),a.rc(107,"the scrollbar thumb should change when clicking + / -"),a.Rb(),a.Sb(108,"pri-scrollbar",31),a.Sb(109,"div",29),a.rc(110," change scrollbar parent by 100px "),a.Sb(111,"button",30),a.ac("click",(function(e){return t.parentResizeExampleScrollbarSize=t.parentResizeExampleScrollbarSize+100})),a.rc(112,"+"),a.Rb(),a.Sb(113,"button",30),a.ac("click",(function(e){return t.parentResizeExampleScrollbarSize=t.parentResizeExampleScrollbarSize-100})),a.rc(114,"-"),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Sb(115,"div",32),a.Sb(116,"h2"),a.rc(117,"Window Resize"),a.Rb(),a.Sb(118,"code"),a.rc(119,"the scrollbar thumb should change when window is resized"),a.Rb(),a.Sb(120,"pri-scrollbar",31),a.Nb(121,"div",29),a.Rb(),a.Rb(),a.Sb(122,"div",33),a.Sb(123,"h2"),a.rc(124,"mat-autocomplete"),a.Rb(),a.Sb(125,"code"),a.rc(126,"mat-autocomplete-panel overflow is set to visible, and pri-scrollbar height is set to 100%"),a.Rb(),a.Nb(127,"br"),a.Sb(128,"mat-form-field"),a.Nb(129,"input",34),a.Rb(),a.Sb(130,"mat-autocomplete",null,35),a.Sb(132,"pri-scrollbar"),a.Sb(133,"mat-option"),a.rc(134,"1"),a.Rb(),a.Sb(135,"mat-option"),a.rc(136,"2"),a.Rb(),a.Sb(137,"mat-option"),a.rc(138,"3"),a.Rb(),a.Sb(139,"mat-option"),a.rc(140,"4"),a.Rb(),a.Sb(141,"mat-option"),a.rc(142,"5"),a.Rb(),a.Sb(143,"mat-option"),a.rc(144,"6"),a.Rb(),a.Sb(145,"mat-option"),a.rc(146,"7"),a.Rb(),a.Sb(147,"mat-option"),a.rc(148,"8"),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Sb(149,"p",36),a.rc(150),a.Rb()),2&e){var r=a.jc(131);a.Bb(6),a.hc("ngIf",t.isCustomScrollbarSupported),a.Bb(1),a.hc("ngIf",!t.isCustomScrollbarSupported),a.Bb(67),a.hc("ngForOf",t.dynamicItems),a.Bb(3),a.hc("disabled",(null==t.dynamicItems?null:t.dynamicItems.length)<=0),a.Bb(9),a.hc("ngForOf",t.dynamicItemsTwo),a.Bb(3),a.hc("disabled",(null==t.dynamicItemsTwo?null:t.dynamicItemsTwo.length)<=0),a.Bb(7),a.pc("height",t.resizeExampleScrollbarSize,"px"),a.Bb(7),a.pc("height",t.parentResizeExampleScrollbarSize,"px"),a.Bb(26),a.hc("matAutocomplete",r),a.Bb(21),a.tc("ChangeDetection Fired Binding ",t.changeDetectionTriggered,"")}},directives:[c.k,l.d,c.j,o.a,i.a,n.c,n.a,d.f],styles:["h1[_ngcontent-%COMP%]{padding:20px;margin:0 0 20px}.support-info[_ngcontent-%COMP%], h1[_ngcontent-%COMP%]{text-align:center}.support-info[_ngcontent-%COMP%]{color:#228b22}.support-info.not-supported[_ngcontent-%COMP%]{color:#d00}.hint[_ngcontent-%COMP%]{width:40%;margin:auto}.excuse[_ngcontent-%COMP%], .hint[_ngcontent-%COMP%]{text-align:center}.excuse[_ngcontent-%COMP%]{color:#454545;font-size:12px}.example[_ngcontent-%COMP%]{margin:40px auto;width:50%}.flex-example[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;height:400px}.flex-example[_ngcontent-%COMP%]   pri-scrollbar[_ngcontent-%COMP%]{height:unset;-webkit-box-flex:1;flex:1 1 0%}.custom-scroll[_ngcontent-%COMP%]{background-color:#ff8c00}pri-scrollbar[_ngcontent-%COMP%]{border:1px solid #000;height:300px}.dummy-content[_ngcontent-%COMP%]{min-width:150vw;min-height:150vh;padding:20px 10px}.dummy-content.d-1[_ngcontent-%COMP%]{background-color:azure}.dummy-content.d-2[_ngcontent-%COMP%]{background-color:#ff0}.dummy-content.d-3[_ngcontent-%COMP%]{background-color:#ffb6c1}.dummy-content.d-4[_ngcontent-%COMP%]{background-color:rgba(165,42,42,.1)}.dummy-content.d-5[_ngcontent-%COMP%]{background-color:#fff}.dummy-content.d-6[_ngcontent-%COMP%]{background-color:#343434;color:#fff}.dummy-content-fixed[_ngcontent-%COMP%]{height:2000px;width:2000px}.dynamic-content[_ngcontent-%COMP%]{background-color:#e6e6fa}.dynamic-item[_ngcontent-%COMP%]{display:block;padding:40px;box-sizing:border-box;border-bottom:1px solid grey}.dynamic-scrollbar-size[_ngcontent-%COMP%]{max-height:400px;height:auto}  pri-scrollbar.custom-size .pri-scrollbar-vertical{width:20px!important}  pri-scrollbar.custom-size .pri-scrollbar-horizontal{height:40px!important}  pri-scrollbar.custom-size .pri-vertical-thumb{background-color:rgba(128,0,128,.5)!important;border-radius:10px!important}  pri-scrollbar.custom-size .pri-horizontal-thumb{background-color:rgba(0,255,0,.5)!important;border-radius:20px!important}  pri-scrollbar.custom-size .pri-horizontal-thumb:hover,   pri-scrollbar.custom-size .pri-scrollbar-container.x-scrolling .pri-horizontal-thumb{background-color:rgba(0,255,0,.7)!important}  pri-scrollbar.custom-size .pri-scrollbar-container.y-scrolling .pri-vertical-thumb,   pri-scrollbar.custom-size .pri-vertical-thumb:hover{background-color:rgba(128,0,128,.7)!important}  pri-scrollbar.custom-default .pri-scrollbar-vertical{width:20px!important}  pri-scrollbar.custom-default .pri-scrollbar-horizontal{height:20px!important}  pri-scrollbar.custom-default .pri-scrollbar-thumb{background-color:hsla(0,0%,100%,.5)!important;border-radius:10px!important}  pri-scrollbar.custom-default .pri-scrollbar-container.x-scrolling .pri-scrollbar-thumb,   pri-scrollbar.custom-default .pri-scrollbar-container.y-scrolling .pri-scrollbar-thumb,   pri-scrollbar.custom-default .pri-scrollbar-thumb:hover{background-color:hsla(0,0%,100%,.7)!important}  .mat-autocomplete-panel{overflow:visible!important;height:200px!important}  .mat-autocomplete-panel pri-scrollbar{height:100%}"],changeDetection:0}),g),v=((m=function e(){_classCallCheck(this,e)}).\u0275fac=function(e){return new(e||m)},m.\u0275cmp=a.Gb({type:m,selectors:[["app-development-second"]],decls:6,vars:0,consts:[[1,"info-text"],[1,"content"],["overflowX","auto"],[1,"scrollbar-content"]],template:function(e,t){1&e&&(a.Sb(0,"p",0),a.rc(1," Horizontal scroll development test\n"),a.Rb(),a.Sb(2,"div",1),a.Sb(3,"pri-scrollbar",2),a.Sb(4,"div",3),a.rc(5,"Scrollbar-Content"),a.Rb(),a.Rb(),a.Rb())},directives:[l.d],styles:["*[_nghost-%COMP%]{display:grid;grid-template-rows:auto 300px 1fr;grid-template-columns:500px 1fr 500px;height:100%}.info-text[_ngcontent-%COMP%]{grid-row:1;grid-column:2}.content[_ngcontent-%COMP%]{grid-row:2;grid-column:2;border:1px solid #dfdfdf;background-color:#faebd7;overflow:hidden}pri-scrollbar[_ngcontent-%COMP%]{height:100%}.scrollbar-content[_ngcontent-%COMP%]{width:400px;height:500px;background-color:#8fbc8f;border:5px solid #006400}"],changeDetection:0}),m),y=r("0EQZ"),C=r("HDdC"),S=r("XNiG"),x=r("2Vo4"),R=r("LRne"),w=r("IzEk"),k=r("pLZG"),O=r("1G5W"),M=r("8LU1"),P=r("u47x");r("cH1L");var D,N,T=function(e){function t(e){var r;return _classCallCheck(this,t),(r=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this))).getChildren=e,r}return _inherits(t,e),_createClass(t,[{key:"expandAll",value:function(){var e,t=this;this.expansionModel.clear();var r=this.dataNodes.reduce((function(e,r){return[].concat(_toConsumableArray(e),_toConsumableArray(t.getDescendants(r)),[r])}),[]);(e=this.expansionModel).select.apply(e,_toConsumableArray(r))}},{key:"getDescendants",value:function(e){var t=[];return this._getDescendants(t,e),t.splice(1)}},{key:"_getDescendants",value:function(e,t){var r=this;e.push(t);var n=this.getChildren(t);Array.isArray(n)?n.forEach((function(t){return r._getDescendants(e,t)})):n instanceof C.a&&n.pipe(Object(w.a)(1),Object(k.a)(Boolean)).subscribe((function(t){var n=!0,o=!1,i=void 0;try{for(var s,a=t[Symbol.iterator]();!(n=(s=a.next()).done);n=!0){var c=s.value;r._getDescendants(e,c)}}catch(l){o=!0,i=l}finally{try{n||null==a.return||a.return()}finally{if(o)throw i}}}))}}]),t}(function(){function e(){_classCallCheck(this,e),this.expansionModel=new y.c(!0)}return _createClass(e,[{key:"toggle",value:function(e){this.expansionModel.toggle(e)}},{key:"expand",value:function(e){this.expansionModel.select(e)}},{key:"collapse",value:function(e){this.expansionModel.deselect(e)}},{key:"isExpanded",value:function(e){return this.expansionModel.isSelected(e)}},{key:"toggleDescendants",value:function(e){this.expansionModel.isSelected(e)?this.collapseDescendants(e):this.expandDescendants(e)}},{key:"collapseAll",value:function(){this.expansionModel.clear()}},{key:"expandDescendants",value:function(e){var t,r=[e];r.push.apply(r,_toConsumableArray(this.getDescendants(e))),(t=this.expansionModel).select.apply(t,r)}},{key:"collapseDescendants",value:function(e){var t,r=[e];r.push.apply(r,_toConsumableArray(this.getDescendants(e))),(t=this.expansionModel).deselect.apply(t,r)}}]),e}()),I=new a.q("CDK_TREE_NODE_OUTLET_NODE"),z=((D=function e(t,r){_classCallCheck(this,e),this.viewContainer=t,this._node=r}).\u0275fac=function(e){return new(e||D)(a.Mb(a.O),a.Mb(I,8))},D.\u0275dir=a.Hb({type:D,selectors:[["","cdkTreeNodeOutlet",""]]}),D),E=function e(t){_classCallCheck(this,e),this.$implicit=t},A=((N=function e(t){_classCallCheck(this,e),this.template=t}).\u0275fac=function(e){return new(e||N)(a.Mb(a.L))},N.\u0275dir=a.Hb({type:N,selectors:[["","cdkTreeNodeDef",""]],inputs:{when:["cdkTreeNodeDefWhen","when"]}}),N);function B(){return Error("Could not find functions for nested/flat tree in tree control.")}var j,X,H,F,L,V,Y,q,G,W,K,$,J=((L=function(){function e(t,r){_classCallCheck(this,e),this._differs=t,this._changeDetectorRef=r,this._onDestroy=new S.a,this._levels=new Map,this.viewChange=new x.a({start:0,end:Number.MAX_VALUE})}return _createClass(e,[{key:"ngOnInit",value:function(){if(this._dataDiffer=this._differs.find([]).create(this.trackBy),!this.treeControl)throw Error("Could not find a tree control for the tree.")}},{key:"ngOnDestroy",value:function(){this._nodeOutlet.viewContainer.clear(),this._onDestroy.next(),this._onDestroy.complete(),this._dataSource&&"function"==typeof this._dataSource.disconnect&&this.dataSource.disconnect(this),this._dataSubscription&&(this._dataSubscription.unsubscribe(),this._dataSubscription=null)}},{key:"ngAfterContentChecked",value:function(){var e=this._nodeDefs.filter((function(e){return!e.when}));if(e.length>1)throw Error("There can only be one default row without a when predicate function.");this._defaultNodeDef=e[0],this.dataSource&&this._nodeDefs&&!this._dataSubscription&&this._observeRenderChanges()}},{key:"_switchDataSource",value:function(e){this._dataSource&&"function"==typeof this._dataSource.disconnect&&this.dataSource.disconnect(this),this._dataSubscription&&(this._dataSubscription.unsubscribe(),this._dataSubscription=null),e||this._nodeOutlet.viewContainer.clear(),this._dataSource=e,this._nodeDefs&&this._observeRenderChanges()}},{key:"_observeRenderChanges",value:function(){var e,t=this;if(Object(y.d)(this._dataSource)?e=this._dataSource.connect(this):this._dataSource instanceof C.a?e=this._dataSource:Array.isArray(this._dataSource)&&(e=Object(R.a)(this._dataSource)),!e)throw Error("A valid data source must be provided.");this._dataSubscription=e.pipe(Object(O.a)(this._onDestroy)).subscribe((function(e){return t.renderNodeChanges(e)}))}},{key:"renderNodeChanges",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this._dataDiffer,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this._nodeOutlet.viewContainer,o=arguments.length>3?arguments[3]:void 0,i=r.diff(e);i&&(i.forEachOperation((function(r,i,s){if(null==r.previousIndex)t.insertNode(e[s],s,n,o);else if(null==s)n.remove(i),t._levels.delete(r.item);else{var a=n.get(i);n.move(a,s)}})),this._changeDetectorRef.detectChanges())}},{key:"_getNodeDef",value:function(e,t){if(1===this._nodeDefs.length)return this._nodeDefs.first;var r=this._nodeDefs.find((function(r){return r.when&&r.when(t,e)}))||this._defaultNodeDef;if(!r)throw Error("Could not find a matching node definition for the provided node data.");return r}},{key:"insertNode",value:function(e,t,r,n){var o=this._getNodeDef(e,t),i=new E(e);i.level=this.treeControl.getLevel?this.treeControl.getLevel(e):void 0!==n&&this._levels.has(n)?this._levels.get(n)+1:0,this._levels.set(e,i.level),(r||this._nodeOutlet.viewContainer).createEmbeddedView(o.template,i,t),U.mostRecentTreeNode&&(U.mostRecentTreeNode.data=e)}},{key:"dataSource",get:function(){return this._dataSource},set:function(e){this._dataSource!==e&&this._switchDataSource(e)}}]),e}()).\u0275fac=function(e){return new(e||L)(a.Mb(a.s),a.Mb(a.h))},L.\u0275cmp=a.Gb({type:L,selectors:[["cdk-tree"]],contentQueries:function(e,t,r){var n;1&e&&a.Fb(r,A,!0),2&e&&a.ic(n=a.bc())&&(t._nodeDefs=n)},viewQuery:function(e,t){var r;1&e&&a.oc(z,!0),2&e&&a.ic(r=a.bc())&&(t._nodeOutlet=r.first)},hostAttrs:["role","tree",1,"cdk-tree"],inputs:{dataSource:"dataSource",treeControl:"treeControl",trackBy:"trackBy"},exportAs:["cdkTree"],decls:1,vars:0,consts:[["cdkTreeNodeOutlet",""]],template:function(e,t){1&e&&a.Ob(0,0)},directives:[z],encapsulation:2}),L),U=((F=function(){function e(t,r){_classCallCheck(this,e),this._elementRef=t,this._tree=r,this._destroyed=new S.a,this._dataChanges=new S.a,this.role="treeitem",e.mostRecentTreeNode=this}return _createClass(e,[{key:"ngOnDestroy",value:function(){e.mostRecentTreeNode===this&&(e.mostRecentTreeNode=null),this._dataChanges.complete(),this._destroyed.next(),this._destroyed.complete()}},{key:"focus",value:function(){this._elementRef.nativeElement.focus()}},{key:"_setRoleFromData",value:function(){var e=this;if(this._tree.treeControl.isExpandable)this.role=this._tree.treeControl.isExpandable(this._data)?"group":"treeitem";else{if(!this._tree.treeControl.getChildren)throw B();var t=this._tree.treeControl.getChildren(this._data);Array.isArray(t)?this._setRoleFromChildren(t):t instanceof C.a&&t.pipe(Object(O.a)(this._destroyed)).subscribe((function(t){return e._setRoleFromChildren(t)}))}}},{key:"_setRoleFromChildren",value:function(e){this.role=e&&e.length?"group":"treeitem"}},{key:"data",get:function(){return this._data},set:function(e){e!==this._data&&(this._data=e,this._setRoleFromData(),this._dataChanges.next())}},{key:"isExpanded",get:function(){return this._tree.treeControl.isExpanded(this._data)}},{key:"level",get:function(){return this._tree.treeControl.getLevel?this._tree.treeControl.getLevel(this._data):0}}]),e}()).\u0275fac=function(e){return new(e||F)(a.Mb(a.l),a.Mb(J))},F.\u0275dir=a.Hb({type:F,selectors:[["cdk-tree-node"]],hostAttrs:[1,"cdk-tree-node"],hostVars:3,hostBindings:function(e,t){2&e&&a.Cb("aria-expanded",t.isExpanded)("aria-level","treeitem"===t.role?t.level:null)("role",t.role)},inputs:{role:"role"},exportAs:["cdkTreeNode"]}),F.mostRecentTreeNode=null,F),Q=((H=function(e){function t(e,r,n){var o;return _classCallCheck(this,t),(o=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this,e,r)))._elementRef=e,o._tree=r,o._differs=n,o}return _inherits(t,e),_createClass(t,[{key:"ngAfterContentInit",value:function(){var e=this;if(this._dataDiffer=this._differs.find([]).create(this._tree.trackBy),!this._tree.treeControl.getChildren)throw B();var t=this._tree.treeControl.getChildren(this.data);Array.isArray(t)?this.updateChildrenNodes(t):t instanceof C.a&&t.pipe(Object(O.a)(this._destroyed)).subscribe((function(t){return e.updateChildrenNodes(t)})),this.nodeOutlet.changes.pipe(Object(O.a)(this._destroyed)).subscribe((function(){return e.updateChildrenNodes()}))}},{key:"ngOnDestroy",value:function(){this._clear(),_get(_getPrototypeOf(t.prototype),"ngOnDestroy",this).call(this)}},{key:"updateChildrenNodes",value:function(e){var t=this._getNodeOutlet();e&&(this._children=e),t&&this._children?this._tree.renderNodeChanges(this._children,this._dataDiffer,t.viewContainer,this._data):this._dataDiffer.diff([])}},{key:"_clear",value:function(){var e=this._getNodeOutlet();e&&(e.viewContainer.clear(),this._dataDiffer.diff([]))}},{key:"_getNodeOutlet",value:function(){var e=this,t=this.nodeOutlet;return t&&t.find((function(t){return!t._node||t._node===e}))}}]),t}(U)).\u0275fac=function(e){return new(e||H)(a.Mb(a.l),a.Mb(J),a.Mb(a.s))},H.\u0275dir=a.Hb({type:H,selectors:[["cdk-nested-tree-node"]],contentQueries:function(e,t,r){var n;1&e&&a.Fb(r,z,!0),2&e&&a.ic(n=a.bc())&&(t.nodeOutlet=n)},hostAttrs:[1,"cdk-tree-node","cdk-nested-tree-node"],hostVars:2,hostBindings:function(e,t){2&e&&a.Cb("aria-expanded",t.isExpanded)("role",t.role)},exportAs:["cdkNestedTreeNode"],features:[a.Ab([{provide:U,useExisting:H},{provide:I,useExisting:H}]),a.yb]}),H),Z=((X=function(){function e(t,r){_classCallCheck(this,e),this._tree=t,this._treeNode=r,this._recursive=!1}return _createClass(e,[{key:"_toggle",value:function(e){this.recursive?this._tree.treeControl.toggleDescendants(this._treeNode.data):this._tree.treeControl.toggle(this._treeNode.data),e.stopPropagation()}},{key:"recursive",get:function(){return this._recursive},set:function(e){this._recursive=Object(M.b)(e)}}]),e}()).\u0275fac=function(e){return new(e||X)(a.Mb(J),a.Mb(U))},X.\u0275dir=a.Hb({type:X,selectors:[["","cdkTreeNodeToggle",""]],hostBindings:function(e,t){1&e&&a.ac("click",(function(e){return t._toggle(e)}))},inputs:{recursive:["cdkTreeNodeToggleRecursive","recursive"]}}),X),ee=((j=function e(){_classCallCheck(this,e)}).\u0275mod=a.Kb({type:j}),j.\u0275inj=a.Jb({factory:function(e){return new(e||j)},providers:[P.b,A],imports:[[c.c]]}),j),te=r("VRyK"),re=r("lJxs"),ne=Object(d.q)(Object(d.o)(U)),oe=((Y=function(e){function t(e,r,n){var o;return _classCallCheck(this,t),(o=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this,e,r)))._elementRef=e,o._tree=r,o.role="treeitem",o.tabIndex=Number(n)||0,o}return _inherits(t,e),t}(ne)).\u0275fac=function(e){return new(e||Y)(a.Mb(a.l),a.Mb(J),a.Xb("tabindex"))},Y.\u0275dir=a.Hb({type:Y,selectors:[["mat-tree-node"]],hostAttrs:[1,"mat-tree-node"],hostVars:3,hostBindings:function(e,t){2&e&&a.Cb("aria-expanded",t.isExpanded)("aria-level","treeitem"===t.role?t.level:null)("role",t.role)},inputs:{disabled:"disabled",tabIndex:"tabIndex",role:"role"},exportAs:["matTreeNode"],features:[a.Ab([{provide:U,useExisting:Y}]),a.yb]}),Y),ie=((V=function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,_getPrototypeOf(t).apply(this,arguments))}return _inherits(t,e),t}(A)).\u0275fac=function(e){return se(e||V)},V.\u0275dir=a.Hb({type:V,selectors:[["","matTreeNodeDef",""]],inputs:{when:["matTreeNodeDefWhen","when"],data:["matTreeNode","data"]},features:[a.Ab([{provide:A,useExisting:V}]),a.yb]}),V),se=a.Ub(ie),ae=((W=function(e){function t(e,r,n,o){var i;return _classCallCheck(this,t),(i=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this,e,r,n)))._elementRef=e,i._tree=r,i._differs=n,i._disabled=!1,i.tabIndex=Number(o)||0,i}return _inherits(t,e),_createClass(t,[{key:"ngAfterContentInit",value:function(){_get(_getPrototypeOf(t.prototype),"ngAfterContentInit",this).call(this)}},{key:"ngOnDestroy",value:function(){_get(_getPrototypeOf(t.prototype),"ngOnDestroy",this).call(this)}},{key:"disabled",get:function(){return this._disabled},set:function(e){this._disabled=Object(M.b)(e)}},{key:"tabIndex",get:function(){return this.disabled?-1:this._tabIndex},set:function(e){this._tabIndex=null!=e?e:0}}]),t}(Q)).\u0275fac=function(e){return new(e||W)(a.Mb(a.l),a.Mb(J),a.Mb(a.s),a.Xb("tabindex"))},W.\u0275dir=a.Hb({type:W,selectors:[["mat-nested-tree-node"]],hostAttrs:[1,"mat-nested-tree-node"],hostVars:2,hostBindings:function(e,t){2&e&&a.Cb("aria-expanded",t.isExpanded)("role",t.role)},inputs:{tabIndex:"tabIndex",disabled:"disabled",node:["matNestedTreeNode","node"]},exportAs:["matNestedTreeNode"],features:[a.Ab([{provide:Q,useExisting:W},{provide:U,useExisting:W},{provide:I,useExisting:W}]),a.yb]}),W),ce=((G=function e(t,r){_classCallCheck(this,e),this.viewContainer=t,this._node=r}).\u0275fac=function(e){return new(e||G)(a.Mb(a.O),a.Mb(I,8))},G.\u0275dir=a.Hb({type:G,selectors:[["","matTreeNodeOutlet",""]],features:[a.Ab([{provide:z,useExisting:G}])]}),G),le=((q=function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,_getPrototypeOf(t).apply(this,arguments))}return _inherits(t,e),t}(J)).\u0275fac=function(e){return de(e||q)},q.\u0275cmp=a.Gb({type:q,selectors:[["mat-tree"]],viewQuery:function(e,t){var r;1&e&&a.oc(ce,!0),2&e&&a.ic(r=a.bc())&&(t._nodeOutlet=r.first)},hostAttrs:["role","tree",1,"mat-tree"],exportAs:["matTree"],features:[a.Ab([{provide:J,useExisting:q}]),a.yb],decls:1,vars:0,consts:[["matTreeNodeOutlet",""]],template:function(e,t){1&e&&a.Ob(0,0)},directives:[ce],styles:[".mat-tree{display:block}.mat-tree-node{display:flex;align-items:center;min-height:48px;flex:1;overflow:hidden;word-wrap:break-word}.mat-nested-tree-node{border-bottom-width:0}\n"],encapsulation:2}),q),de=a.Ub(le),ue=((K=function(e){function t(){var e;return _classCallCheck(this,t),(e=_possibleConstructorReturn(this,_getPrototypeOf(t).apply(this,arguments))).recursive=!1,e}return _inherits(t,e),t}(Z)).\u0275fac=function(e){return be(e||K)},K.\u0275dir=a.Hb({type:K,selectors:[["","matTreeNodeToggle",""]],inputs:{recursive:["matTreeNodeToggleRecursive","recursive"]},features:[a.Ab([{provide:Z,useExisting:K}]),a.yb]}),K),be=a.Ub(ue),he=(($=function e(){_classCallCheck(this,e)}).\u0275mod=a.Kb({type:$}),$.\u0275inj=a.Jb({factory:function(e){return new(e||$)},imports:[[ee,c.c,d.d]]}),$),pe=function(e){function t(){var e;return _classCallCheck(this,t),(e=_possibleConstructorReturn(this,_getPrototypeOf(t).apply(this,arguments)))._data=new x.a([]),e}return _inherits(t,e),_createClass(t,[{key:"connect",value:function(e){var t=this;return Object(te.a)(e.viewChange,this._data).pipe(Object(re.a)((function(){return t.data})))}},{key:"disconnect",value:function(){}},{key:"data",get:function(){return this._data.value},set:function(e){this._data.next(e)}}]),t}(y.b),fe=r("bTqV"),me=r("NFeN");function ge(e,t){if(1&e&&(a.Sb(0,"mat-tree-node",6),a.Sb(1,"li",7),a.Nb(2,"button",8),a.rc(3),a.Rb(),a.Rb()),2&e){var r=t.$implicit;a.Bb(3),a.tc(" ",r.name," ")}}function _e(e,t){if(1&e&&(a.Sb(0,"mat-nested-tree-node"),a.Sb(1,"li",7),a.Sb(2,"div",7),a.Sb(3,"button",9),a.Sb(4,"mat-icon",10),a.rc(5),a.Rb(),a.Rb(),a.rc(6),a.Rb(),a.Rb(),a.Sb(7,"ul"),a.Ob(8,11),a.Rb(),a.Rb()),2&e){var r=t.$implicit,n=a.cc();a.Bb(3),a.Cb("aria-label","toggle "+r.name),a.Bb(2),a.tc(" ",n.treeControl.isExpanded(r)?"expand_more":"chevron_right"," "),a.Bb(1),a.tc(" ",r.name," "),a.Bb(1),a.Eb("children-invisible",!n.treeControl.isExpanded(r))}}var ve,ye,Ce=[{path:"",pathMatch:"full",component:_},{path:"second",pathMatch:"full",component:v},{path:"third",pathMatch:"full",component:(ve=function(){function e(){var t=this;_classCallCheck(this,e),this.treeControl=new T((function(e){return e.children})),this.hasChild=function(e,t){return!!t.children&&t.children.length>0},this.treeSource=new pe,this.dataSource$=new x.a([]),this.dataSource$.subscribe((function(e){t.treeSource.data=null,t.treeSource.data=e}))}return _createClass(e,[{key:"ngOnInit",value:function(){this.dataSource$.next([this._createTreeItem("Parent 1",this._createTreeItem("Child 1.1"),this._createTreeItem("Child 1.2",this._createTreeItem("Sub child 1.1.1",this._createTreeItem("Ultra long text for this sub child to test vertical scrolling"))),this._createTreeItem("Child 1.3")),this._createTreeItem("Parent 2")])}},{key:"_createTreeItem",value:function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return{name:e,children:r}}}]),e}(),ve.\u0275fac=function(e){return new(e||ve)},ve.\u0275cmp=a.Gb({type:ve,selectors:[["app-development-third"]],decls:7,vars:3,consts:[[1,"info-text"],[1,"content"],["overflowX","auto",1,"scrollbar"],[3,"dataSource","treeControl"],["matTreeNodeToggle","",4,"matTreeNodeDef"],[4,"matTreeNodeDef","matTreeNodeDefWhen"],["matTreeNodeToggle",""],[1,"mat-tree-node"],["mat-icon-button","","disabled",""],["mat-icon-button","","matTreeNodeToggle",""],[1,"mat-icon-rtl-mirror"],["matTreeNodeOutlet",""]],template:function(e,t){1&e&&(a.Sb(0,"p",0),a.rc(1," Horizontal / Vertical scroll test when content size changes by material tree\n"),a.Rb(),a.Sb(2,"div",1),a.Sb(3,"pri-scrollbar",2),a.Sb(4,"mat-tree",3),a.qc(5,ge,4,1,"mat-tree-node",4),a.qc(6,_e,9,5,"mat-nested-tree-node",5),a.Rb(),a.Rb(),a.Rb()),2&e&&(a.Bb(4),a.hc("dataSource",t.treeSource)("treeControl",t.treeControl),a.Bb(2),a.hc("matTreeNodeDefWhen",t.hasChild))},directives:[l.d,le,ie,oe,ue,fe.b,ae,me.a,ce],styles:["*[_nghost-%COMP%]{display:grid;grid-template-rows:auto 300px 1fr;grid-template-columns:500px 200px 1fr;height:100%}.info-text[_ngcontent-%COMP%]{grid-row:1;grid-column:2}.content[_ngcontent-%COMP%]{grid-row:2;grid-column:2;border:1px solid #dfdfdf;background-color:#faebd7;overflow:hidden}.scrollbar[_ngcontent-%COMP%]{height:100%}.scrollbar-content[_ngcontent-%COMP%]{min-height:100px;min-width:100px;background-color:#8fbc8f;border:5px solid #006400}mat-tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], mat-tree[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin-top:0;margin-bottom:0;list-style-type:none}.children-invisible[_ngcontent-%COMP%]{display:none}"],changeDetection:0}),ve)}],Se=((ye=function e(){_classCallCheck(this,e)}).\u0275mod=a.Kb({type:ye}),ye.\u0275inj=a.Jb({factory:function(e){return new(e||ye)},imports:[[s.b.forChild(Ce)],s.b]}),ye);r.d(t,"DevelopmentModule",(function(){return Re}));var xe,Re=((xe=function e(){_classCallCheck(this,e)}).\u0275mod=a.Kb({type:xe}),xe.\u0275inj=a.Jb({factory:function(e){return new(e||xe)},imports:[[c.c,Se,n.b,o.c,i.b,l.a,he,me.b,fe.c]]}),xe)}}]);