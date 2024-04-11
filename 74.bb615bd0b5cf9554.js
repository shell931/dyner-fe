"use strict";(self.webpackChunkvalex=self.webpackChunkvalex||[]).push([[74],{4074:(X,L,c)=>{c.d(L,{g6:()=>V,fi:()=>K});var T=c(5861),e=c(4650);const M={toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"],["link","image","video"]]},x=new e.OlP("config",{providedIn:"root",factory:()=>({modules:M})});var p=c(6895),y=c(1481),Y=c(9770),I=c(5191),R=c(3905),F=c(727),O=c(4968),H=c(4782),Q=c(5577),z=c(8372),S=c(4006);function D(i,a){1&i&&e._UZ(0,"div",2)}function N(i,a){1&i&&e._UZ(0,"pre",2)}function j(i,a){if(1&i&&(e.ynx(0),e.YNc(1,D,1,0,"div",1),e.YNc(2,N,1,0,"pre",1),e.BQk()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",!t.preserve),e.xp6(1),e.Q6J("ngIf",t.preserve)}}function k(i,a){1&i&&e._UZ(0,"div",2)}function P(i,a){1&i&&e._UZ(0,"pre",2)}function J(i,a){if(1&i&&(e.ynx(0),e.YNc(1,k,1,0,"div",1),e.YNc(2,P,1,0,"pre",1),e.BQk()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",!t.preserve),e.xp6(1),e.Q6J("ngIf",t.preserve)}}const G=[[["","quill-editor-toolbar",""]]],B=["[quill-editor-toolbar]"];function A(i,a){1&i&&e._UZ(0,"div",1)}function Z(i,a){1&i&&e._UZ(0,"pre",1)}const E=(i,a)=>i||a||"html";let q=(()=>{class i{constructor(t,n){var s=this;this.config=n,this.quill$=(0,Y.P)((0,T.Z)(function*(){if(!s.Quill){const o=s.document.addEventListener;s.document.addEventListener=s.document.__zone_symbol__addEventListener||s.document.addEventListener;const r=yield c.e(971).then(c.t.bind(c,9971,19));s.document.addEventListener=o,s.Quill=r.default?r.default:r}return s.config.customOptions?.forEach(o=>{const r=s.Quill.import(o.import);r.whitelist=o.whitelist,s.Quill.register(r,!0,s.config.suppressGlobalRegisterWarning)}),yield s.registerCustomModules(s.Quill,s.config.customModules,s.config.suppressGlobalRegisterWarning)})).pipe((0,H.d)({bufferSize:1,refCount:!0})),this.document=t.get(p.K0),this.config||(this.config={modules:M})}getQuill(){return this.quill$}registerCustomModules(t,n,s){return(0,T.Z)(function*(){if(Array.isArray(n))for(let{implementation:o,path:r}of n)(0,I.b)(o)&&(o=yield(0,R.z)(o)),t.register(r,o,s);return t})()}}return i.\u0275fac=function(t){return new(t||i)(e.LFG(e.zs3),e.LFG(x,8))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})(),U=(()=>{class i{constructor(t,n,s,o,r,f,m,g){this.elementRef=n,this.cd=s,this.domSanitizer=o,this.platformId=r,this.renderer=f,this.zone=m,this.service=g,this.required=!1,this.customToolbarPosition="top",this.styles=null,this.strict=!0,this.customOptions=[],this.customModules=[],this.preserveWhitespace=!1,this.trimOnValidation=!1,this.compareValues=!1,this.filterNull=!1,this.defaultEmptyValue=null,this.onEditorCreated=new e.vpe,this.onEditorChanged=new e.vpe,this.onContentChanged=new e.vpe,this.onSelectionChanged=new e.vpe,this.onFocus=new e.vpe,this.onBlur=new e.vpe,this.disabled=!1,this.preserve=!1,this.toolbarPosition="top",this.subscription=null,this.quillSubscription=null,this.valueGetter=(u,l)=>{let d=l.querySelector(".ql-editor").innerHTML;("<p><br></p>"===d||"<div><br></div>"===d)&&(d=this.defaultEmptyValue);let h=d;const v=E(this.format,this.service.config.format);if("text"===v)h=u.getText();else if("object"===v)h=u.getContents();else if("json"===v)try{h=JSON.stringify(u.getContents())}catch{h=u.getText()}return h},this.valueSetter=(u,l)=>{const d=E(this.format,this.service.config.format);if("html"===d)return([!0,!1].includes(this.sanitize)?this.sanitize:this.service.config.sanitize||!1)&&(l=this.domSanitizer.sanitize(e.q3G.HTML,l)),u.clipboard.convert(l);if("json"===d)try{return JSON.parse(l)}catch{return[{insert:l}]}return l},this.selectionChangeHandler=(u,l,d)=>{const h=!u&&!!this.onModelTouched;!this.onBlur.observed&&!this.onFocus.observed&&!this.onSelectionChanged.observed&&!h||this.zone.run(()=>{null===u?this.onBlur.emit({editor:this.quillEditor,source:d}):null===l&&this.onFocus.emit({editor:this.quillEditor,source:d}),this.onSelectionChanged.emit({editor:this.quillEditor,oldRange:l,range:u,source:d}),h&&this.onModelTouched(),this.cd.markForCheck()})},this.textChangeHandler=(u,l,d)=>{const h=this.quillEditor.getText(),v=this.quillEditor.getContents();let b=this.editorElem.querySelector(".ql-editor").innerHTML;("<p><br></p>"===b||"<div><br></div>"===b)&&(b=this.defaultEmptyValue);const C=this.trackChanges||this.service.config.trackChanges,w=("user"===d||C&&"all"===C)&&!!this.onModelChange;!this.onContentChanged.observed&&!w||this.zone.run(()=>{w&&this.onModelChange(this.valueGetter(this.quillEditor,this.editorElem)),this.onContentChanged.emit({content:v,delta:u,editor:this.quillEditor,html:b,oldDelta:l,source:d,text:h}),this.cd.markForCheck()})},this.editorChangeHandler=(u,l,d,h)=>{if(this.onEditorChanged.observed)if("text-change"===u){const v=this.quillEditor.getText(),b=this.quillEditor.getContents();let C=this.editorElem.querySelector(".ql-editor").innerHTML;("<p><br></p>"===C||"<div><br></div>"===C)&&(C=this.defaultEmptyValue),this.zone.run(()=>{this.onEditorChanged.emit({content:b,delta:l,editor:this.quillEditor,event:u,html:C,oldDelta:d,source:h,text:v}),this.cd.markForCheck()})}else this.zone.run(()=>{this.onEditorChanged.emit({editor:this.quillEditor,event:u,oldRange:d,range:l,source:h}),this.cd.markForCheck()})},this.document=t.get(p.K0)}static normalizeClassNames(t){return t.trim().split(" ").reduce((s,o)=>{const r=o.trim();return r&&s.push(r),s},[])}ngOnInit(){this.preserve=this.preserveWhitespace,this.toolbarPosition=this.customToolbarPosition}ngAfterViewInit(){(0,p.PM)(this.platformId)||(this.quillSubscription=this.service.getQuill().pipe((0,Q.z)(t=>{const n=[this.service.registerCustomModules(t,this.customModules)],s=this.beforeRender??this.service.config.beforeRender;return s&&n.push(s()),Promise.all(n).then(()=>t)})).subscribe(t=>{this.editorElem=this.elementRef.nativeElement.querySelector("[quill-editor-element]");const n=this.elementRef.nativeElement.querySelector("[quill-editor-toolbar]"),s=Object.assign({},this.modules||this.service.config.modules);n?s.toolbar=n:void 0===s.toolbar&&(s.toolbar=M.toolbar);let o=void 0!==this.placeholder?this.placeholder:this.service.config.placeholder;void 0===o&&(o="Insert text here ..."),this.styles&&Object.keys(this.styles).forEach(d=>{this.renderer.setStyle(this.editorElem,d,this.styles[d])}),this.classes&&this.addClasses(this.classes),this.customOptions.forEach(d=>{const h=t.import(d.import);h.whitelist=d.whitelist,t.register(h,!0)});let r=this.bounds&&"self"===this.bounds?this.editorElem:this.bounds;r||(r=this.service.config.bounds?this.service.config.bounds:this.document.body);let f=this.debug;!f&&!1!==f&&this.service.config.debug&&(f=this.service.config.debug);let m=this.readOnly;!m&&!1!==this.readOnly&&(m=void 0!==this.service.config.readOnly&&this.service.config.readOnly);let g=this.defaultEmptyValue;this.service.config.hasOwnProperty("defaultEmptyValue")&&(g=this.service.config.defaultEmptyValue);let u=this.scrollingContainer;!u&&null!==this.scrollingContainer&&(u=null===this.service.config.scrollingContainer||this.service.config.scrollingContainer?this.service.config.scrollingContainer:null);let l=this.formats;if(!l&&void 0===l&&(l=this.service.config.formats?[...this.service.config.formats]:null===this.service.config.formats?null:void 0),this.zone.runOutsideAngular(()=>{if(this.quillEditor=new t(this.editorElem,{bounds:r,debug:f,formats:l,modules:s,placeholder:o,readOnly:m,defaultEmptyValue:g,scrollingContainer:u,strict:this.strict,theme:this.theme||(this.service.config.theme?this.service.config.theme:"snow")}),this.linkPlaceholder){const h=this.quillEditor?.theme?.tooltip?.root?.querySelector("input[data-link]");h?.dataset&&(h.dataset.link=this.linkPlaceholder)}}),this.content){if("text"===E(this.format,this.service.config.format))this.quillEditor.setText(this.content,"silent");else{const h=this.valueSetter(this.quillEditor,this.content);this.quillEditor.setContents(h,"silent")}this.quillEditor.getModule("history").clear()}this.setDisabledState(),this.addQuillEventListeners(),(this.onEditorCreated.observed||this.onValidatorChanged)&&requestAnimationFrame(()=>{this.onValidatorChanged&&this.onValidatorChanged(),this.onEditorCreated.emit(this.quillEditor)})}))}ngOnDestroy(){this.dispose(),this.quillSubscription?.unsubscribe(),this.quillSubscription=null}ngOnChanges(t){if(this.quillEditor){if(t.readOnly&&this.quillEditor.enable(!t.readOnly.currentValue),t.placeholder&&(this.quillEditor.root.dataset.placeholder=t.placeholder.currentValue),t.defaultEmptyValue&&(this.quillEditor.root.dataset.defaultEmptyValue=t.defaultEmptyValue.currentValue),t.styles){const n=t.styles.currentValue,s=t.styles.previousValue;s&&Object.keys(s).forEach(o=>{this.renderer.removeStyle(this.editorElem,o)}),n&&Object.keys(n).forEach(o=>{this.renderer.setStyle(this.editorElem,o,this.styles[o])})}if(t.classes){const n=t.classes.currentValue,s=t.classes.previousValue;s&&this.removeClasses(s),n&&this.addClasses(n)}t.debounceTime&&this.addQuillEventListeners()}}addClasses(t){i.normalizeClassNames(t).forEach(n=>{this.renderer.addClass(this.editorElem,n)})}removeClasses(t){i.normalizeClassNames(t).forEach(n=>{this.renderer.removeClass(this.editorElem,n)})}writeValue(t){if(this.filterNull&&null===t||(this.content=t,!this.quillEditor))return;const n=E(this.format,this.service.config.format),s=this.valueSetter(this.quillEditor,t);if(this.compareValues){const o=this.quillEditor.getContents();if(JSON.stringify(o)===JSON.stringify(s))return}t?"text"===n?this.quillEditor.setText(t):this.quillEditor.setContents(s):this.quillEditor.setText("")}setDisabledState(t=this.disabled){this.disabled=t,this.quillEditor&&(t?(this.quillEditor.disable(),this.renderer.setAttribute(this.elementRef.nativeElement,"disabled","disabled")):(this.readOnly||this.quillEditor.enable(),this.renderer.removeAttribute(this.elementRef.nativeElement,"disabled")))}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}registerOnValidatorChange(t){this.onValidatorChanged=t}validate(){if(!this.quillEditor)return null;const t={};let n=!0;const s=this.quillEditor.getText(),o=this.trimOnValidation?s.trim().length:1===s.length&&0===s.trim().length?0:s.length-1,r=this.quillEditor.getContents().ops,f=r&&1===r.length&&["\n",""].includes(r[0].insert);return this.minLength&&o&&o<this.minLength&&(t.minLengthError={given:o,minLength:this.minLength},n=!1),this.maxLength&&o>this.maxLength&&(t.maxLengthError={given:o,maxLength:this.maxLength},n=!1),this.required&&!o&&f&&(t.requiredError={empty:!0},n=!1),n?null:t}addQuillEventListeners(){this.dispose(),this.zone.runOutsideAngular(()=>{this.subscription=new F.w0,this.subscription.add((0,O.R)(this.quillEditor,"selection-change").subscribe(([s,o,r])=>{this.selectionChangeHandler(s,o,r)}));let t=(0,O.R)(this.quillEditor,"text-change"),n=(0,O.R)(this.quillEditor,"editor-change");"number"==typeof this.debounceTime&&(t=t.pipe((0,z.b)(this.debounceTime)),n=n.pipe((0,z.b)(this.debounceTime))),this.subscription.add(t.subscribe(([s,o,r])=>{this.textChangeHandler(s,o,r)})),this.subscription.add(n.subscribe(([s,o,r,f])=>{this.editorChangeHandler(s,o,r,f)}))})}dispose(){null!==this.subscription&&(this.subscription.unsubscribe(),this.subscription=null)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(e.zs3),e.Y36(e.SBq),e.Y36(e.sBO),e.Y36(y.H7),e.Y36(e.Lbi),e.Y36(e.Qsj),e.Y36(e.R0b),e.Y36(q))},i.\u0275dir=e.lG2({type:i,inputs:{format:"format",theme:"theme",modules:"modules",debug:"debug",readOnly:"readOnly",placeholder:"placeholder",maxLength:"maxLength",minLength:"minLength",required:"required",formats:"formats",customToolbarPosition:"customToolbarPosition",sanitize:"sanitize",beforeRender:"beforeRender",styles:"styles",strict:"strict",scrollingContainer:"scrollingContainer",bounds:"bounds",customOptions:"customOptions",customModules:"customModules",trackChanges:"trackChanges",preserveWhitespace:"preserveWhitespace",classes:"classes",trimOnValidation:"trimOnValidation",linkPlaceholder:"linkPlaceholder",compareValues:"compareValues",filterNull:"filterNull",debounceTime:"debounceTime",defaultEmptyValue:"defaultEmptyValue",valueGetter:"valueGetter",valueSetter:"valueSetter"},outputs:{onEditorCreated:"onEditorCreated",onEditorChanged:"onEditorChanged",onContentChanged:"onContentChanged",onSelectionChanged:"onSelectionChanged",onFocus:"onFocus",onBlur:"onBlur"},features:[e.TTD]}),i})(),V=(()=>{class i extends U{constructor(t,n,s,o,r,f,m,g){super(t,n,s,o,r,f,m,g)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(e.zs3),e.Y36(e.SBq),e.Y36(e.sBO),e.Y36(y.H7),e.Y36(e.Lbi),e.Y36(e.Qsj),e.Y36(e.R0b),e.Y36(q))},i.\u0275cmp=e.Xpm({type:i,selectors:[["quill-editor"]],standalone:!0,features:[e._Bn([{multi:!0,provide:S.JU,useExisting:(0,e.Gpc)(()=>i)},{multi:!0,provide:S.Cf,useExisting:(0,e.Gpc)(()=>i)}]),e.qOj,e.jDz],ngContentSelectors:B,decls:3,vars:2,consts:[[4,"ngIf"],["quill-editor-element","",4,"ngIf"],["quill-editor-element",""]],template:function(t,n){1&t&&(e.F$t(G),e.YNc(0,j,3,2,"ng-container",0),e.Hsn(1),e.YNc(2,J,3,2,"ng-container",0)),2&t&&(e.Q6J("ngIf","top"!==n.toolbarPosition),e.xp6(2),e.Q6J("ngIf","top"===n.toolbarPosition))},dependencies:[p.ez,p.O5],styles:[":host{display:inline-block}\n"],encapsulation:2}),i})(),W=(()=>{class i{constructor(t,n){this.sanitizer=t,this.service=n,this.content="",this.innerHTML="",this.themeClass="ql-snow"}ngOnChanges(t){if(t.theme?this.themeClass=`ql-${t.theme.currentValue||(this.service.config.theme?this.service.config.theme:"snow")} ngx-quill-view-html`:this.theme||(this.themeClass=`ql-${this.service.config.theme?this.service.config.theme:"snow"} ngx-quill-view-html`),t.content){const n=t.content.currentValue,s=[!0,!1].includes(this.sanitize)?this.sanitize:this.service.config.sanitize||!1;this.innerHTML=s?n:this.sanitizer.bypassSecurityTrustHtml(n)}}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(y.H7),e.Y36(q))},i.\u0275cmp=e.Xpm({type:i,selectors:[["quill-view-html"]],inputs:{content:"content",theme:"theme",sanitize:"sanitize"},standalone:!0,features:[e.TTD,e.jDz],decls:2,vars:2,consts:[[1,"ql-container",3,"ngClass"],[1,"ql-editor",3,"innerHTML"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"div",1),e.qZA()),2&t&&(e.Q6J("ngClass",n.themeClass),e.xp6(1),e.Q6J("innerHTML",n.innerHTML,e.oJD))},dependencies:[p.ez,p.mk],styles:[".ql-container.ngx-quill-view-html{border:0}\n"],encapsulation:2}),i})(),$=(()=>{class i{constructor(t,n,s,o,r,f){this.elementRef=t,this.renderer=n,this.zone=s,this.service=o,this.domSanitizer=r,this.platformId=f,this.strict=!0,this.customModules=[],this.customOptions=[],this.preserveWhitespace=!1,this.onEditorCreated=new e.vpe,this.preserve=!1,this.quillSubscription=null,this.valueSetter=(m,g)=>{const u=E(this.format,this.service.config.format);let l=g;if("text"===u)m.setText(l);else{if("html"===u)([!0,!1].includes(this.sanitize)?this.sanitize:this.service.config.sanitize||!1)&&(g=this.domSanitizer.sanitize(e.q3G.HTML,g)),l=m.clipboard.convert(g);else if("json"===u)try{l=JSON.parse(g)}catch{l=[{insert:g}]}m.setContents(l)}}}ngOnInit(){this.preserve=this.preserveWhitespace}ngOnChanges(t){!this.quillEditor||t.content&&this.valueSetter(this.quillEditor,t.content.currentValue)}ngAfterViewInit(){(0,p.PM)(this.platformId)||(this.quillSubscription=this.service.getQuill().pipe((0,Q.z)(t=>{const n=[this.service.registerCustomModules(t,this.customModules)],s=this.beforeRender??this.service.config.beforeRender;return s&&n.push(s()),Promise.all(n).then(()=>t)})).subscribe(t=>{const n=Object.assign({},this.modules||this.service.config.modules);n.toolbar=!1,this.customOptions.forEach(f=>{const m=t.import(f.import);m.whitelist=f.whitelist,t.register(m,!0)});let s=this.debug;!s&&!1!==s&&this.service.config.debug&&(s=this.service.config.debug);let o=this.formats;!o&&void 0===o&&(o=this.service.config.formats?Object.assign({},this.service.config.formats):null===this.service.config.formats?null:void 0);const r=this.theme||(this.service.config.theme?this.service.config.theme:"snow");this.editorElem=this.elementRef.nativeElement.querySelector("[quill-view-element]"),this.zone.runOutsideAngular(()=>{this.quillEditor=new t(this.editorElem,{debug:s,formats:o,modules:n,readOnly:!0,strict:this.strict,theme:r})}),this.renderer.addClass(this.editorElem,"ngx-quill-view"),this.content&&this.valueSetter(this.quillEditor,this.content),this.onEditorCreated.observers.length&&requestAnimationFrame(()=>{this.onEditorCreated.emit(this.quillEditor)})}))}ngOnDestroy(){this.quillSubscription?.unsubscribe(),this.quillSubscription=null}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(e.SBq),e.Y36(e.Qsj),e.Y36(e.R0b),e.Y36(q),e.Y36(y.H7),e.Y36(e.Lbi))},i.\u0275cmp=e.Xpm({type:i,selectors:[["quill-view"]],inputs:{format:"format",theme:"theme",modules:"modules",debug:"debug",formats:"formats",sanitize:"sanitize",beforeRender:"beforeRender",strict:"strict",content:"content",customModules:"customModules",customOptions:"customOptions",preserveWhitespace:"preserveWhitespace"},outputs:{onEditorCreated:"onEditorCreated"},standalone:!0,features:[e.TTD,e.jDz],decls:2,vars:2,consts:[["quill-view-element","",4,"ngIf"],["quill-view-element",""]],template:function(t,n){1&t&&(e.YNc(0,A,1,0,"div",0),e.YNc(1,Z,1,0,"pre",0)),2&t&&(e.Q6J("ngIf",!n.preserve),e.xp6(1),e.Q6J("ngIf",n.preserve))},dependencies:[p.ez,p.O5],styles:[".ql-container.ngx-quill-view{border:0}\n"],encapsulation:2}),i})(),K=(()=>{class i{static forRoot(t){return{ngModule:i,providers:[{provide:x,useValue:t}]}}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[V,$,W]}),i})()}}]);