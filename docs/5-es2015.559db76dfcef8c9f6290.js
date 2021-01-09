(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{CZp0:function(e,t,n){"use strict";n.r(t),n.d(t,"DevelopmentModule",function(){return oe});var r=n("/1cH"),o=n("kmnG"),i=n("qFsG"),s=n("tyNb"),c=n("fXoL"),a=n("ofXK"),l=n("aOew"),d=n("FKr1");const b=["testItem"];function h(e,t){1&e&&(c.Qb(0,"h3",37),c.pc(1,"Your Browser supports custom scrollbars!"),c.Pb())}function p(e,t){1&e&&(c.Qb(0,"h3",38),c.pc(1,"Your Browser doesn't support custom scrollbars, fallback to native scrollbars!"),c.Pb())}function u(e,t){if(1&e&&(c.Qb(0,"div",39),c.pc(1),c.Pb()),2&e){const e=t.$implicit;c.zb(1),c.rc("Item: ",e,"")}}function m(e,t){if(1&e&&(c.Qb(0,"div",39),c.pc(1),c.Pb()),2&e){const e=t.$implicit;c.zb(1),c.rc("Item: ",e,"")}}let g=(()=>{class e{constructor(e,t){this._platform=e,this.cd=t,this.isCustomScrollbarSupported=!1,this.dynamicItems=[0,1],this.dynamicItemsTwo=[0,1],this.parentResizeExampleScrollbarSize=300,this.resizeExampleScrollbarSize=300}get changeDetectionTriggered(){return console.log("Change detection triggered"),!0}ngAfterViewInit(){Object(a.s)(this._platform)&&(this.isCustomScrollbarSupported=this.testItem.nativeElement.offsetWidth>this.testItem.nativeElement.clientWidth,this.cd.detectChanges())}addDynamicItem(e){e.push(e.length)}removeDynamicItem(e){return e.slice(0,e.length-1)}}return e.\u0275fac=function(t){return new(t||e)(c.Kb(c.B),c.Kb(c.h))},e.\u0275cmp=c.Eb({type:e,selectors:[["app-development"]],viewQuery:function(e,t){if(1&e&&c.mc(b,!0),2&e){let e;c.gc(e=c.Zb())&&(t.testItem=e.first)}},decls:151,vars:12,consts:[[1,"hint"],[1,"excuse"],["class","support-info",4,"ngIf"],["class","support-info not-supported",4,"ngIf"],[1,"test-item"],["testItem",""],[1,"example","default-theme"],[1,"dummy-content","d-1"],[1,"example"],["overflowX","scroll","overflowY","native-scroll"],[1,"dummy-content","d-2"],["marginsX","10 20","marginsY","10 20 40 40"],[1,"dummy-content","d-3"],["xPosition","top","yPosition","left","marginsX","8 20","marginsY","20 8"],[1,"dummy-content","d-4"],["marginsX","0 40 10 10","marginsY","20",1,"custom-size"],[1,"dummy-content","d-5"],["marginsX","0 40 10 10","marginsY","20",1,"custom-default"],[1,"dummy-content","d-6"],[1,"example","flex-example"],[1,"dummy-content","d-7"],["overflowX","scroll","overflowY","scroll",1,"custom-scroll"],[1,"dynamic-content"],["class","dynamic-item",4,"ngFor","ngForOf"],["type","button",3,"click"],["type","button",3,"disabled","click"],["overflowX","hidden",1,"dynamic-scrollbar-size"],[1,"d-8"],["overflowX","hidden"],[1,"dummy-content-fixed"],[3,"click"],["overflowX","hidden",2,"height","100%","width","100%"],[1,"example",2,"height","40vh"],[1,"example",2,"margin-top","100px"],["type","text","matInput","",3,"matAutocomplete"],["auto",""],[2,"height","0","width","0","overflow","hidden"],[1,"support-info"],[1,"support-info","not-supported"],[1,"dynamic-item"]],template:function(e,t){if(1&e&&(c.Qb(0,"h1"),c.pc(1,"pri-ng-scrollbar"),c.Pb(),c.Qb(2,"p",0),c.pc(3,"This is a testing page, because many test cases can only be tested manually"),c.Pb(),c.Qb(4,"p",1),c.pc(5,"Hope nobody feels offended by such an unstyled ugly page... if there is time left i'll add some styles i promise <<."),c.Pb(),c.oc(6,h,2,0,"h3",2),c.oc(7,p,2,0,"h3",3),c.Qb(8,"div",4,5),c.Lb(10,"div"),c.Pb(),c.Qb(11,"div",6),c.Qb(12,"h2"),c.pc(13,"Default:"),c.Pb(),c.Qb(14,"code"),c.pc(15,"Styled with SCSS Theme"),c.Pb(),c.Qb(16,"pri-scrollbar"),c.Qb(17,"div",7),c.pc(18," overflowX: auto "),c.Lb(19,"br"),c.pc(20," overflowY: auto "),c.Pb(),c.Pb(),c.Pb(),c.Qb(21,"div",8),c.Qb(22,"h2"),c.pc(23,"Mix: native and custom scrollbar"),c.Pb(),c.Qb(24,"pri-scrollbar",9),c.Qb(25,"div",10),c.pc(26," overflowX: scroll "),c.Lb(27,"br"),c.pc(28," overflowY: native-scroll "),c.Pb(),c.Pb(),c.Pb(),c.Qb(29,"div",8),c.Qb(30,"h2"),c.pc(31,"Custom margins"),c.Pb(),c.Qb(32,"pri-scrollbar",11),c.Qb(33,"div",12),c.pc(34," marginX => horizontal scrollbar => \"10 20\" => like in css: top/bottom left/right [top margin only if xPosition = 'top'] "),c.Lb(35,"br"),c.pc(36,' marginY: vertical scrollbar => "10 20 40 40" => - " - : top right left bottom [left margin only if yPosition = \'left\'] '),c.Lb(37,"br"),c.Pb(),c.Pb(),c.Pb(),c.Qb(38,"div",8),c.Qb(39,"h2"),c.pc(40,"Custom positions"),c.Pb(),c.Qb(41,"pri-scrollbar",13),c.Qb(42,"div",14),c.pc(43," xPosition: top => horizontal scrollbar "),c.Lb(44,"br"),c.pc(45," yPosition: left => vertical scrollbar "),c.Pb(),c.Pb(),c.Pb(),c.Qb(46,"div",8),c.Qb(47,"h2"),c.pc(48,"Custom size and color"),c.Pb(),c.Qb(49,"pri-scrollbar",15),c.Qb(50,"div",16),c.pc(51," custom size and color "),c.Pb(),c.Pb(),c.Pb(),c.Qb(52,"div",8),c.Qb(53,"h2"),c.pc(54,"Custom size and color"),c.Pb(),c.Qb(55,"pri-scrollbar",17),c.Qb(56,"div",18),c.pc(57," custom size and color "),c.Pb(),c.Pb(),c.Pb(),c.Qb(58,"div",19),c.Qb(59,"h2"),c.pc(60,"Flex Container"),c.Pb(),c.Qb(61,"pri-scrollbar"),c.Qb(62,"div",20),c.pc(63," Flex container "),c.Pb(),c.Pb(),c.Pb(),c.Qb(64,"div",8),c.Qb(65,"h2"),c.pc(66,"Custom Scrollbars overflow = 'scroll'"),c.Pb(),c.Qb(67,"pri-scrollbar",21),c.Qb(68,"div"),c.pc(69,"Content size is smaller than its container"),c.Pb(),c.Pb(),c.Pb(),c.Qb(70,"div",8),c.Qb(71,"h2"),c.pc(72,"Dynamic Content"),c.Pb(),c.Qb(73,"pri-scrollbar",22),c.oc(74,u,2,1,"div",23),c.Pb(),c.Qb(75,"button",24),c.Yb("click",function(){return t.addDynamicItem(t.dynamicItems)}),c.pc(76,"Add Item"),c.Pb(),c.Qb(77,"button",25),c.Yb("click",function(){return t.dynamicItems=t.removeDynamicItem(t.dynamicItems)}),c.pc(78,"Remove Item"),c.Pb(),c.Pb(),c.Qb(79,"div",8),c.Qb(80,"h2"),c.pc(81,"Dynamic pri-scrollbar height, based on its content height (max-height: 400px)"),c.Pb(),c.Qb(82,"code"),c.pc(83," This only works when: overflowX='hidden' "),c.Pb(),c.Qb(84,"pri-scrollbar",26),c.Qb(85,"div",27),c.oc(86,m,2,1,"div",23),c.Qb(87,"button",24),c.Yb("click",function(){return t.addDynamicItem(t.dynamicItemsTwo)}),c.pc(88,"Add Item"),c.Pb(),c.Qb(89,"button",25),c.Yb("click",function(){return t.dynamicItemsTwo=t.removeDynamicItem(t.dynamicItemsTwo)}),c.pc(90,"Remove Item"),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Qb(91,"div",8),c.Qb(92,"h2"),c.pc(93,"Scrollbar itself resize"),c.Pb(),c.Qb(94,"code"),c.pc(95,"the scrollbar thumb should change when clicking + / -"),c.Pb(),c.Qb(96,"pri-scrollbar",28),c.Qb(97,"div",29),c.pc(98," change scrollbar size by 100px "),c.Qb(99,"button",30),c.Yb("click",function(){return t.resizeExampleScrollbarSize=t.resizeExampleScrollbarSize+100}),c.pc(100,"+"),c.Pb(),c.Qb(101,"button",30),c.Yb("click",function(){return t.resizeExampleScrollbarSize=t.resizeExampleScrollbarSize-100}),c.pc(102,"-"),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Qb(103,"div",19),c.Qb(104,"h2"),c.pc(105,"Scrollbar parent resized"),c.Pb(),c.Qb(106,"code"),c.pc(107,"the scrollbar thumb should change when clicking + / -"),c.Pb(),c.Qb(108,"pri-scrollbar",31),c.Qb(109,"div",29),c.pc(110," change scrollbar parent by 100px "),c.Qb(111,"button",30),c.Yb("click",function(){return t.parentResizeExampleScrollbarSize=t.parentResizeExampleScrollbarSize+100}),c.pc(112,"+"),c.Pb(),c.Qb(113,"button",30),c.Yb("click",function(){return t.parentResizeExampleScrollbarSize=t.parentResizeExampleScrollbarSize-100}),c.pc(114,"-"),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Qb(115,"div",32),c.Qb(116,"h2"),c.pc(117,"Window Resize"),c.Pb(),c.Qb(118,"code"),c.pc(119,"the scrollbar thumb should change when window is resized"),c.Pb(),c.Qb(120,"pri-scrollbar",31),c.Lb(121,"div",29),c.Pb(),c.Pb(),c.Qb(122,"div",33),c.Qb(123,"h2"),c.pc(124,"mat-autocomplete"),c.Pb(),c.Qb(125,"code"),c.pc(126,"mat-autocomplete-panel overflow is set to visible, and pri-scrollbar height is set to 100%"),c.Pb(),c.Lb(127,"br"),c.Qb(128,"mat-form-field"),c.Lb(129,"input",34),c.Pb(),c.Qb(130,"mat-autocomplete",null,35),c.Qb(132,"pri-scrollbar"),c.Qb(133,"mat-option"),c.pc(134,"1"),c.Pb(),c.Qb(135,"mat-option"),c.pc(136,"2"),c.Pb(),c.Qb(137,"mat-option"),c.pc(138,"3"),c.Pb(),c.Qb(139,"mat-option"),c.pc(140,"4"),c.Pb(),c.Qb(141,"mat-option"),c.pc(142,"5"),c.Pb(),c.Qb(143,"mat-option"),c.pc(144,"6"),c.Pb(),c.Qb(145,"mat-option"),c.pc(146,"7"),c.Pb(),c.Qb(147,"mat-option"),c.pc(148,"8"),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Qb(149,"p",36),c.pc(150),c.Pb()),2&e){const e=c.hc(131);c.zb(6),c.fc("ngIf",t.isCustomScrollbarSupported),c.zb(1),c.fc("ngIf",!t.isCustomScrollbarSupported),c.zb(67),c.fc("ngForOf",t.dynamicItems),c.zb(3),c.fc("disabled",(null==t.dynamicItems?null:t.dynamicItems.length)<=0),c.zb(9),c.fc("ngForOf",t.dynamicItemsTwo),c.zb(3),c.fc("disabled",(null==t.dynamicItemsTwo?null:t.dynamicItemsTwo.length)<=0),c.zb(7),c.nc("height",t.resizeExampleScrollbarSize,"px"),c.zb(7),c.nc("height",t.parentResizeExampleScrollbarSize,"px"),c.zb(26),c.fc("matAutocomplete",e),c.zb(21),c.rc("ChangeDetection Fired Binding ",t.changeDetectionTriggered,"")}},directives:[a.k,l.d,a.j,o.b,i.a,r.c,r.a,d.e],styles:["h1[_ngcontent-%COMP%]{padding:20px;margin:0 0 20px}.support-info[_ngcontent-%COMP%], h1[_ngcontent-%COMP%]{text-align:center}.support-info[_ngcontent-%COMP%]{color:#228b22}.support-info.not-supported[_ngcontent-%COMP%]{color:#d00}.hint[_ngcontent-%COMP%]{width:40%;margin:auto}.excuse[_ngcontent-%COMP%], .hint[_ngcontent-%COMP%]{text-align:center}.excuse[_ngcontent-%COMP%]{color:#454545;font-size:12px}.example[_ngcontent-%COMP%]{margin:40px auto;width:50%}.flex-example[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:400px}.flex-example[_ngcontent-%COMP%]   pri-scrollbar[_ngcontent-%COMP%]{height:unset;flex:1 1 0%}.custom-scroll[_ngcontent-%COMP%]{background-color:#ff8c00}pri-scrollbar[_ngcontent-%COMP%]{border:1px solid #000;height:300px}.dummy-content[_ngcontent-%COMP%]{min-width:150vw;min-height:150vh;padding:20px 10px}.dummy-content.d-1[_ngcontent-%COMP%]{background-color:azure}.dummy-content.d-2[_ngcontent-%COMP%]{background-color:#ff0}.dummy-content.d-3[_ngcontent-%COMP%]{background-color:#ffb6c1}.dummy-content.d-4[_ngcontent-%COMP%]{background-color:rgba(165,42,42,.1)}.dummy-content.d-5[_ngcontent-%COMP%]{background-color:#fff}.dummy-content.d-6[_ngcontent-%COMP%]{background-color:#343434;color:#fff}.dummy-content-fixed[_ngcontent-%COMP%]{height:2000px;width:2000px}.dynamic-content[_ngcontent-%COMP%]{background-color:#e6e6fa}.dynamic-item[_ngcontent-%COMP%]{display:block;padding:40px;box-sizing:border-box;border-bottom:1px solid grey}.dynamic-scrollbar-size[_ngcontent-%COMP%]{max-height:400px;height:auto}  pri-scrollbar.custom-size .pri-scrollbar-vertical{width:20px!important}  pri-scrollbar.custom-size .pri-scrollbar-horizontal{height:40px!important}  pri-scrollbar.custom-size .pri-vertical-thumb{background-color:rgba(128,0,128,.5)!important;border-radius:10px!important}  pri-scrollbar.custom-size .pri-horizontal-thumb{background-color:rgba(0,255,0,.5)!important;border-radius:20px!important}  pri-scrollbar.custom-size .pri-horizontal-thumb:hover,   pri-scrollbar.custom-size .pri-scrollbar-container.x-scrolling .pri-horizontal-thumb{background-color:rgba(0,255,0,.7)!important}  pri-scrollbar.custom-size .pri-scrollbar-container.y-scrolling .pri-vertical-thumb,   pri-scrollbar.custom-size .pri-vertical-thumb:hover{background-color:rgba(128,0,128,.7)!important}  pri-scrollbar.custom-default .pri-scrollbar-vertical{width:20px!important}  pri-scrollbar.custom-default .pri-scrollbar-horizontal{height:20px!important}  pri-scrollbar.custom-default .pri-scrollbar-thumb{background-color:hsla(0,0%,100%,.5)!important;border-radius:10px!important}  pri-scrollbar.custom-default .pri-scrollbar-container.x-scrolling .pri-scrollbar-thumb,   pri-scrollbar.custom-default .pri-scrollbar-container.y-scrolling .pri-scrollbar-thumb,   pri-scrollbar.custom-default .pri-scrollbar-thumb:hover{background-color:hsla(0,0%,100%,.7)!important}  .mat-autocomplete-panel{overflow:visible!important;height:200px!important}  .mat-autocomplete-panel pri-scrollbar{height:100%}"],changeDetection:0}),e})(),f=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Eb({type:e,selectors:[["app-development-second"]],decls:6,vars:0,consts:[[1,"info-text"],[1,"content"],["overflowX","auto"],[1,"scrollbar-content"]],template:function(e,t){1&e&&(c.Qb(0,"p",0),c.pc(1," Horizontal scroll development test\n"),c.Pb(),c.Qb(2,"div",1),c.Qb(3,"pri-scrollbar",2),c.Qb(4,"div",3),c.pc(5,"Scrollbar-Content"),c.Pb(),c.Pb(),c.Pb())},directives:[l.d],styles:["*[_nghost-%COMP%]{display:grid;grid-template-rows:auto 300px 1fr;grid-template-columns:500px 1fr 500px;height:100%}.info-text[_ngcontent-%COMP%]{grid-row:1;grid-column:2}.content[_ngcontent-%COMP%]{grid-row:2;grid-column:2;border:1px solid #dfdfdf;background-color:#faebd7;overflow:hidden}pri-scrollbar[_ngcontent-%COMP%]{height:100%}.scrollbar-content[_ngcontent-%COMP%]{width:400px;height:500px;background-color:#8fbc8f;border:5px solid #006400}"],changeDetection:0}),e})();var _=n("0EQZ"),v=n("7+OI"),x=n("XNiG"),y=n("2Vo4"),P=n("LRne"),w=n("IzEk"),C=n("pLZG"),Q=n("1G5W"),O=n("8LU1");n("cH1L");class k extends class{constructor(){this.expansionModel=new _.c(!0)}toggle(e){this.expansionModel.toggle(this._trackByValue(e))}expand(e){this.expansionModel.select(this._trackByValue(e))}collapse(e){this.expansionModel.deselect(this._trackByValue(e))}isExpanded(e){return this.expansionModel.isSelected(this._trackByValue(e))}toggleDescendants(e){this.expansionModel.isSelected(this._trackByValue(e))?this.collapseDescendants(e):this.expandDescendants(e)}collapseAll(){this.expansionModel.clear()}expandDescendants(e){let t=[e];t.push(...this.getDescendants(e)),this.expansionModel.select(...t.map(e=>this._trackByValue(e)))}collapseDescendants(e){let t=[e];t.push(...this.getDescendants(e)),this.expansionModel.deselect(...t.map(e=>this._trackByValue(e)))}_trackByValue(e){return this.trackBy?this.trackBy(e):e}}{constructor(e,t){super(),this.getChildren=e,this.options=t,this.options&&(this.trackBy=this.options.trackBy)}expandAll(){this.expansionModel.clear();const e=this.dataNodes.reduce((e,t)=>[...e,...this.getDescendants(t),t],[]);this.expansionModel.select(...e.map(e=>this._trackByValue(e)))}getDescendants(e){const t=[];return this._getDescendants(t,e),t.splice(1)}_getDescendants(e,t){e.push(t);const n=this.getChildren(t);Array.isArray(n)?n.forEach(t=>this._getDescendants(e,t)):Object(v.a)(n)&&n.pipe(Object(w.a)(1),Object(C.a)(Boolean)).subscribe(t=>{for(const n of t)this._getDescendants(e,n)})}}const D=new c.q("CDK_TREE_NODE_OUTLET_NODE");let S=(()=>{class e{constructor(e,t){this.viewContainer=e,this._node=t}}return e.\u0275fac=function(t){return new(t||e)(c.Kb(c.P),c.Kb(D,8))},e.\u0275dir=c.Fb({type:e,selectors:[["","cdkTreeNodeOutlet",""]]}),e})();class z{constructor(e){this.$implicit=e}}let I=(()=>{class e{constructor(e){this.template=e}}return e.\u0275fac=function(t){return new(t||e)(c.Kb(c.L))},e.\u0275dir=c.Fb({type:e,selectors:[["","cdkTreeNodeDef",""]],inputs:{when:["cdkTreeNodeDefWhen","when"]}}),e})(),N=(()=>{class e{constructor(e,t){this._differs=e,this._changeDetectorRef=t,this._onDestroy=new x.a,this._levels=new Map,this.viewChange=new y.a({start:0,end:Number.MAX_VALUE})}get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&this._switchDataSource(e)}ngOnInit(){this._dataDiffer=this._differs.find([]).create(this.trackBy)}ngOnDestroy(){this._nodeOutlet.viewContainer.clear(),this.viewChange.complete(),this._onDestroy.next(),this._onDestroy.complete(),this._dataSource&&"function"==typeof this._dataSource.disconnect&&this.dataSource.disconnect(this),this._dataSubscription&&(this._dataSubscription.unsubscribe(),this._dataSubscription=null)}ngAfterContentChecked(){const e=this._nodeDefs.filter(e=>!e.when);this._defaultNodeDef=e[0],this.dataSource&&this._nodeDefs&&!this._dataSubscription&&this._observeRenderChanges()}_switchDataSource(e){this._dataSource&&"function"==typeof this._dataSource.disconnect&&this.dataSource.disconnect(this),this._dataSubscription&&(this._dataSubscription.unsubscribe(),this._dataSubscription=null),e||this._nodeOutlet.viewContainer.clear(),this._dataSource=e,this._nodeDefs&&this._observeRenderChanges()}_observeRenderChanges(){let e;Object(_.f)(this._dataSource)?e=this._dataSource.connect(this):Object(v.a)(this._dataSource)?e=this._dataSource:Array.isArray(this._dataSource)&&(e=Object(P.a)(this._dataSource)),e&&(this._dataSubscription=e.pipe(Object(Q.a)(this._onDestroy)).subscribe(e=>this.renderNodeChanges(e)))}renderNodeChanges(e,t=this._dataDiffer,n=this._nodeOutlet.viewContainer,r){const o=t.diff(e);o&&(o.forEachOperation((t,o,i)=>{if(null==t.previousIndex)this.insertNode(e[i],i,n,r);else if(null==i)n.remove(o),this._levels.delete(t.item);else{const e=n.get(o);n.move(e,i)}}),this._changeDetectorRef.detectChanges())}_getNodeDef(e,t){return 1===this._nodeDefs.length?this._nodeDefs.first:this._nodeDefs.find(n=>n.when&&n.when(t,e))||this._defaultNodeDef}insertNode(e,t,n,r){const o=this._getNodeDef(e,t),i=new z(e);i.level=this.treeControl.getLevel?this.treeControl.getLevel(e):void 0!==r&&this._levels.has(r)?this._levels.get(r)+1:0,this._levels.set(e,i.level),(n||this._nodeOutlet.viewContainer).createEmbeddedView(o.template,i,t),T.mostRecentTreeNode&&(T.mostRecentTreeNode.data=e)}}return e.\u0275fac=function(t){return new(t||e)(c.Kb(c.s),c.Kb(c.h))},e.\u0275cmp=c.Eb({type:e,selectors:[["cdk-tree"]],contentQueries:function(e,t,n){if(1&e&&c.Db(n,I,!0),2&e){let e;c.gc(e=c.Zb())&&(t._nodeDefs=e)}},viewQuery:function(e,t){if(1&e&&c.mc(S,!0),2&e){let e;c.gc(e=c.Zb())&&(t._nodeOutlet=e.first)}},hostAttrs:["role","tree",1,"cdk-tree"],inputs:{dataSource:"dataSource",treeControl:"treeControl",trackBy:"trackBy"},exportAs:["cdkTree"],decls:1,vars:0,consts:[["cdkTreeNodeOutlet",""]],template:function(e,t){1&e&&c.Mb(0,0)},directives:[S],encapsulation:2}),e})(),T=(()=>{class e{constructor(t,n){this._elementRef=t,this._tree=n,this._destroyed=new x.a,this._dataChanges=new x.a,e.mostRecentTreeNode=this,this._elementRef.nativeElement.classList.add("cdk-tree-node"),this.role="treeitem"}get role(){return"treeitem"}set role(e){this._elementRef.nativeElement.setAttribute("role",e)}get data(){return this._data}set data(e){e!==this._data&&(this._data=e,this._setRoleFromData(),this._dataChanges.next())}get isExpanded(){return this._tree.treeControl.isExpanded(this._data)}_setExpanded(e){this._isAriaExpanded=e,this._elementRef.nativeElement.setAttribute("aria-expanded",""+e)}get level(){return this._tree.treeControl.getLevel?this._tree.treeControl.getLevel(this._data):this._parentNodeAriaLevel}ngOnInit(){this._parentNodeAriaLevel=function(e){let t=e.parentElement;for(;t&&!E(t);)t=t.parentElement;return t?t.classList.contains("cdk-nested-tree-node")?Object(O.e)(t.getAttribute("aria-level")):0:-1}(this._elementRef.nativeElement),this._elementRef.nativeElement.setAttribute("aria-level",""+(this.level+1))}ngDoCheck(){this.isExpanded!=this._isAriaExpanded&&this._setExpanded(this.isExpanded)}ngOnDestroy(){e.mostRecentTreeNode===this&&(e.mostRecentTreeNode=null),this._dataChanges.complete(),this._destroyed.next(),this._destroyed.complete()}focus(){this._elementRef.nativeElement.focus()}_setRoleFromData(){this.role="treeitem"}}return e.\u0275fac=function(t){return new(t||e)(c.Kb(c.l),c.Kb(N))},e.\u0275dir=c.Fb({type:e,selectors:[["cdk-tree-node"]],inputs:{role:"role"},exportAs:["cdkTreeNode"]}),e.mostRecentTreeNode=null,e})();function E(e){const t=e.classList;return!(!(null==t?void 0:t.contains("cdk-nested-tree-node"))&&!(null==t?void 0:t.contains("cdk-tree")))}let M=(()=>{class e extends T{constructor(e,t,n){super(e,t),this._elementRef=e,this._tree=t,this._differs=n,this._elementRef.nativeElement.classList.add("cdk-nested-tree-node")}ngAfterContentInit(){this._dataDiffer=this._differs.find([]).create(this._tree.trackBy);const e=this._tree.treeControl.getChildren(this.data);Array.isArray(e)?this.updateChildrenNodes(e):Object(v.a)(e)&&e.pipe(Object(Q.a)(this._destroyed)).subscribe(e=>this.updateChildrenNodes(e)),this.nodeOutlet.changes.pipe(Object(Q.a)(this._destroyed)).subscribe(()=>this.updateChildrenNodes())}ngOnInit(){super.ngOnInit()}ngDoCheck(){super.ngDoCheck()}ngOnDestroy(){this._clear(),super.ngOnDestroy()}updateChildrenNodes(e){const t=this._getNodeOutlet();e&&(this._children=e),t&&this._children?this._tree.renderNodeChanges(this._children,this._dataDiffer,t.viewContainer,this._data):this._dataDiffer.diff([])}_clear(){const e=this._getNodeOutlet();e&&(e.viewContainer.clear(),this._dataDiffer.diff([]))}_getNodeOutlet(){const e=this.nodeOutlet;return e&&e.find(e=>!e._node||e._node===this)}}return e.\u0275fac=function(t){return new(t||e)(c.Kb(c.l),c.Kb(N),c.Kb(c.s))},e.\u0275dir=c.Fb({type:e,selectors:[["cdk-nested-tree-node"]],contentQueries:function(e,t,n){if(1&e&&c.Db(n,S,!0),2&e){let e;c.gc(e=c.Zb())&&(t.nodeOutlet=e)}},inputs:{role:"role",disabled:"disabled",tabIndex:"tabIndex"},exportAs:["cdkNestedTreeNode"],features:[c.yb([{provide:T,useExisting:e},{provide:D,useExisting:e}]),c.wb]}),e})(),R=(()=>{class e{constructor(e,t){this._tree=e,this._treeNode=t,this._recursive=!1}get recursive(){return this._recursive}set recursive(e){this._recursive=Object(O.b)(e)}_toggle(e){this.recursive?this._tree.treeControl.toggleDescendants(this._treeNode.data):this._tree.treeControl.toggle(this._treeNode.data),e.stopPropagation()}}return e.\u0275fac=function(t){return new(t||e)(c.Kb(N),c.Kb(T))},e.\u0275dir=c.Fb({type:e,selectors:[["","cdkTreeNodeToggle",""]],hostBindings:function(e,t){1&e&&c.Yb("click",function(e){return t._toggle(e)})},inputs:{recursive:["cdkTreeNodeToggleRecursive","recursive"]}}),e})(),A=(()=>{class e{}return e.\u0275mod=c.Ib({type:e}),e.\u0275inj=c.Hb({factory:function(t){return new(t||e)}}),e})();var L=n("VRyK"),K=n("lJxs");const j=Object(d.p)(Object(d.n)(T));let B=(()=>{class e extends j{constructor(e,t,n){super(e,t),this._elementRef=e,this._tree=t,this.tabIndex=Number(n)||0,this._elementRef.nativeElement.classList.add("mat-tree-node")}ngOnInit(){super.ngOnInit()}ngDoCheck(){super.ngDoCheck()}ngOnDestroy(){super.ngOnDestroy()}}return e.\u0275fac=function(t){return new(t||e)(c.Kb(c.l),c.Kb(N),c.Vb("tabindex"))},e.\u0275dir=c.Fb({type:e,selectors:[["mat-tree-node"]],inputs:{role:"role",disabled:"disabled",tabIndex:"tabIndex"},exportAs:["matTreeNode"],features:[c.yb([{provide:T,useExisting:e}]),c.wb]}),e})(),F=(()=>{class e extends I{}return e.\u0275fac=function(t){return Y(t||e)},e.\u0275dir=c.Fb({type:e,selectors:[["","matTreeNodeDef",""]],inputs:{when:["matTreeNodeDefWhen","when"],data:["matTreeNode","data"]},features:[c.yb([{provide:I,useExisting:e}]),c.wb]}),e})();const Y=c.Sb(F);let X=(()=>{class e extends M{constructor(e,t,n,r){super(e,t,n),this._elementRef=e,this._tree=t,this._differs=n,this._disabled=!1,this.tabIndex=Number(r)||0,this._elementRef.nativeElement.classList.add("mat-nested-tree-node")}get disabled(){return this._disabled}set disabled(e){this._disabled=Object(O.b)(e)}get tabIndex(){return this.disabled?-1:this._tabIndex}set tabIndex(e){this._tabIndex=null!=e?e:0}ngOnInit(){super.ngOnInit()}ngDoCheck(){super.ngDoCheck()}ngAfterContentInit(){super.ngAfterContentInit()}ngOnDestroy(){super.ngOnDestroy()}}return e.\u0275fac=function(t){return new(t||e)(c.Kb(c.l),c.Kb(N),c.Kb(c.s),c.Vb("tabindex"))},e.\u0275dir=c.Fb({type:e,selectors:[["mat-nested-tree-node"]],inputs:{role:"role",disabled:"disabled",tabIndex:"tabIndex",node:["matNestedTreeNode","node"]},exportAs:["matNestedTreeNode"],features:[c.yb([{provide:M,useExisting:e},{provide:T,useExisting:e},{provide:D,useExisting:e}]),c.wb]}),e})(),V=(()=>{class e{constructor(e,t){this.viewContainer=e,this._node=t}}return e.\u0275fac=function(t){return new(t||e)(c.Kb(c.P),c.Kb(D,8))},e.\u0275dir=c.Fb({type:e,selectors:[["","matTreeNodeOutlet",""]],features:[c.yb([{provide:S,useExisting:e}])]}),e})(),H=(()=>{class e extends N{}return e.\u0275fac=function(t){return W(t||e)},e.\u0275cmp=c.Eb({type:e,selectors:[["mat-tree"]],viewQuery:function(e,t){if(1&e&&c.mc(V,!0),2&e){let e;c.gc(e=c.Zb())&&(t._nodeOutlet=e.first)}},hostAttrs:["role","tree",1,"mat-tree","cdk-tree"],exportAs:["matTree"],features:[c.yb([{provide:N,useExisting:e}]),c.wb],decls:1,vars:0,consts:[["matTreeNodeOutlet",""]],template:function(e,t){1&e&&c.Mb(0,0)},directives:[V],styles:[".mat-tree{display:block}.mat-tree-node{display:flex;align-items:center;flex:1;word-wrap:break-word}.mat-nested-tree-node{border-bottom-width:0}\n"],encapsulation:2}),e})();const W=c.Sb(H);let Z=(()=>{class e extends R{get recursive(){return this._recursive}set recursive(e){this._recursive=Object(O.b)(e)}}return e.\u0275fac=function(t){return $(t||e)},e.\u0275dir=c.Fb({type:e,selectors:[["","matTreeNodeToggle",""]],inputs:{recursive:["matTreeNodeToggleRecursive","recursive"]},features:[c.yb([{provide:R,useExisting:e}]),c.wb]}),e})();const $=c.Sb(Z);let G=(()=>{class e{}return e.\u0275mod=c.Ib({type:e}),e.\u0275inj=c.Hb({factory:function(t){return new(t||e)},imports:[[A,d.d],d.d]}),e})();class U extends _.b{constructor(){super(...arguments),this._data=new y.a([])}get data(){return this._data.value}set data(e){this._data.next(e)}connect(e){return Object(L.a)(e.viewChange,this._data).pipe(Object(K.a)(()=>this.data))}disconnect(){}}var q=n("bTqV"),J=n("NFeN");function ee(e,t){if(1&e&&(c.Qb(0,"mat-tree-node",6),c.Qb(1,"li",7),c.Lb(2,"button",8),c.pc(3),c.Pb(),c.Pb()),2&e){const e=t.$implicit;c.zb(3),c.rc(" ",e.name," ")}}function te(e,t){if(1&e&&(c.Qb(0,"mat-nested-tree-node"),c.Qb(1,"li",7),c.Qb(2,"div",7),c.Qb(3,"button",9),c.Qb(4,"mat-icon",10),c.pc(5),c.Pb(),c.Pb(),c.pc(6),c.Pb(),c.Pb(),c.Qb(7,"ul"),c.Mb(8,11),c.Pb(),c.Pb()),2&e){const e=t.$implicit,n=c.ac();c.zb(3),c.Ab("aria-label","toggle "+e.name),c.zb(2),c.rc(" ",n.treeControl.isExpanded(e)?"expand_more":"chevron_right"," "),c.zb(1),c.rc(" ",e.name," "),c.zb(1),c.Cb("children-invisible",!n.treeControl.isExpanded(e))}}const ne=[{path:"",pathMatch:"full",component:g},{path:"second",pathMatch:"full",component:f},{path:"third",pathMatch:"full",component:(()=>{class e{constructor(){this.treeControl=new k(e=>e.children),this.hasChild=(e,t)=>!!t.children&&t.children.length>0,this.treeSource=new U,this.dataSource$=new y.a([]),this.dataSource$.subscribe(e=>{this.treeSource.data=null,this.treeSource.data=e})}ngOnInit(){this.dataSource$.next([this._createTreeItem("Parent 1",this._createTreeItem("Child 1.1"),this._createTreeItem("Child 1.2",this._createTreeItem("Sub child 1.1.1",this._createTreeItem("Ultra long text for this sub child to test vertical scrolling"))),this._createTreeItem("Child 1.3")),this._createTreeItem("Parent 2")])}_createTreeItem(e,...t){return{name:e,children:t}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Eb({type:e,selectors:[["app-development-third"]],decls:7,vars:3,consts:[[1,"info-text"],[1,"content"],["overflowX","auto",1,"scrollbar"],[3,"dataSource","treeControl"],["matTreeNodeToggle","",4,"matTreeNodeDef"],[4,"matTreeNodeDef","matTreeNodeDefWhen"],["matTreeNodeToggle",""],[1,"mat-tree-node"],["mat-icon-button","","disabled",""],["mat-icon-button","","matTreeNodeToggle",""],[1,"mat-icon-rtl-mirror"],["matTreeNodeOutlet",""]],template:function(e,t){1&e&&(c.Qb(0,"p",0),c.pc(1," Horizontal / Vertical scroll test when content size changes by material tree\n"),c.Pb(),c.Qb(2,"div",1),c.Qb(3,"pri-scrollbar",2),c.Qb(4,"mat-tree",3),c.oc(5,ee,4,1,"mat-tree-node",4),c.oc(6,te,9,5,"mat-nested-tree-node",5),c.Pb(),c.Pb(),c.Pb()),2&e&&(c.zb(4),c.fc("dataSource",t.treeSource)("treeControl",t.treeControl),c.zb(2),c.fc("matTreeNodeDefWhen",t.hasChild))},directives:[l.d,H,F,B,Z,q.b,X,J.a,V],styles:["*[_nghost-%COMP%]{display:grid;grid-template-rows:auto 300px 1fr;grid-template-columns:500px 200px 1fr;height:100%}.info-text[_ngcontent-%COMP%]{grid-row:1;grid-column:2}.content[_ngcontent-%COMP%]{grid-row:2;grid-column:2;border:1px solid #dfdfdf;background-color:#faebd7;overflow:hidden}.scrollbar[_ngcontent-%COMP%]{height:100%}.scrollbar-content[_ngcontent-%COMP%]{min-height:100px;min-width:100px;background-color:#8fbc8f;border:5px solid #006400}mat-tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], mat-tree[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin-top:0;margin-bottom:0;list-style-type:none}.children-invisible[_ngcontent-%COMP%]{display:none}"],changeDetection:0}),e})()}];let re=(()=>{class e{}return e.\u0275mod=c.Ib({type:e}),e.\u0275inj=c.Hb({factory:function(t){return new(t||e)},imports:[[s.b.forChild(ne)],s.b]}),e})(),oe=(()=>{class e{}return e.\u0275mod=c.Ib({type:e}),e.\u0275inj=c.Hb({factory:function(t){return new(t||e)},imports:[[a.c,re,r.b,o.d,i.b,l.a,G,J.b,q.c]]}),e})()}}]);