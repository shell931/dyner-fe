"use strict";(self.webpackChunkvalex=self.webpackChunkvalex||[]).push([[7904],{7904:(q,f,l)=>{l.r(f),l.d(f,{LinkSubEditModule:()=>P});var p=l(6895),s=l(3022),a=l(4006),t=l(4650),h=l(9925),b=l(1311),g=l(9549);function v(o,m){1&o&&(t.TgZ(0,"mat-error"),t._uU(1," Este campo es obligatorio. "),t.qZA())}function k(o,m){1&o&&(t.TgZ(0,"mat-error"),t._uU(1," Este campo es obligatorio. "),t.qZA())}function _(o,m){1&o&&(t.TgZ(0,"mat-error"),t._uU(1," Este campo es obligatorio. "),t.qZA())}function S(o,m){if(1&o&&(t.TgZ(0,"option",27),t._uU(1),t.qZA()),2&o){const e=m.$implicit;t.Q6J("value",e.id),t.xp6(1),t.hij("",e.description," ")}}function x(o,m){1&o&&(t.TgZ(0,"mat-error"),t._uU(1," Este campo es obligatorio. "),t.qZA())}function y(o,m){1&o&&(t.TgZ(0,"mat-error"),t._uU(1," Este campo es obligatorio. "),t.qZA())}const F=function(){return["/link-sub"]};let T=(()=>{class o{constructor(e,i,r,n,u){this.formGroup=e,this.LinksSubsService=i,this.baseService=r,this.route=n,this.router=u,this.diasPago=[],this.filesComplement=[],this.validate_img=!1,this.widthMin=700,this.heightMin=700,this.dateF="23-10-2022",this.get_pr=[],this.inputValue=new a.NI(""),this.taxTypes=[{id:1,description:"19%"},{id:2,description:"0%"}]}ngOnInit(){this.diasPago=Array.from({length:25},(e,i)=>i+1),this.route.params.subscribe(e=>{this.id_linksub=e.id}),this.linkSubForm=this.formGroup.group({price:["",[a.kI.required]],reference:["",[a.kI.required]],description:["",[a.kI.required]],tax_type:["",[a.kI.required]],total:["",[]]}),this.LinksSubsService.GetLinkSubsById(this.id_linksub).subscribe(e=>{this.GetLinkSubByIdF(e)},e=>{this.baseService.GetErrorAuthSesion(e)})}GetLinkSubByIdF(e){this.linkSubForm.get("description")?.setValue(e.data.description);let i=this.formatInputTotal(e.data.subtotal);this.linkSubForm.get("price")?.setValue(i);let r=this.formatInputTotal(e.data.total);this.linkSubForm.get("total")?.setValue(r),this.total_price=this.formatInputTotal(e.data.total),this.linkSubForm.get("tax_type")?.setValue(e.data.tax_id),this.linkSubForm.get("reference")?.setValue(e.data.product_code)}formatInput(e){let r=parseFloat(e.target.value.replace(/\D/g,""));isNaN(r)&&(r=0);let n=this.linkSubForm.value;""==n.tax_type?this.total_price=0:"1"==n.tax_type?(this.total_price=19*r/100,this.total_price=r+this.total_price,this.total_price=this.formatInputTotal(this.total_price)):(this.total_price=0*r/100,this.total_price=r+this.total_price,this.total_price=this.formatInputTotal(this.total_price));const u=r.toLocaleString("es-CO",{style:"currency",currency:"COP",minimumFractionDigits:0,maximumFractionDigits:0});this.linkSubForm.get("price")?.setValue(u,{emitEvent:!1})}CalcTax(e){const i=e.target;let r=this.linkSubForm.get("price")?.value.replace(/\D/g,"");"1"==i.value?(this.total_price=19*parseInt(r)/100,this.total_price=parseInt(r)+this.total_price,this.total_price=this.formatInputTotal(this.total_price)):(this.total_price=0*parseInt(r)/100,this.total_price=parseInt(r)+this.total_price,this.total_price=this.formatInputTotal(this.total_price))}formatInputTotal(e){let i=parseFloat(e);return isNaN(i)&&(i=0),i.toLocaleString("es-CO",{style:"currency",currency:"COP",minimumFractionDigits:0,maximumFractionDigits:0})}submitbutton(){const e=this.linkSubForm.get("price")?.value.replace(/\D/g,"");if(this.linkSubForm.get("price")?.setValue(e,{emitEvent:!1}),this.linkSubForm.valid){const i=this.total_price.replace(/\D/g,"");let r=this.linkSubForm.value;const n=new FormData;n.append("codeproduct",r.reference),n.append("description",r.description),n.append("subtotal",r.price),n.append("taxid",r.tax_type),n.append("total",i),n.append("_method","PUT"),this.LinksSubsService.UpdateSubsLink(n,this.id_linksub).subscribe(u=>{this.router.navigate(["link-sub"]).then(()=>{})},u=>console.log(u))}else for(let i in this.linkSubForm.controls)this.linkSubForm.controls[i].markAsTouched()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(a.qu),t.Y36(h.o),t.Y36(b.b),t.Y36(s.gz),t.Y36(s.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-link-sub-edit"]],decls:47,vars:10,consts:[[1,"container-fluid"],[1,"breadcrumb-header","justify-content-between"],[1,"left-content"],[1,"main-content-title","mg-b-1","mg-b-lg-1"],[1,"main-dashboard-header-right"],[1,"btn","btn-oscuros-dyner","btn-block",3,"routerLink"],[1,"fas","fa-chevron-left"],[1,"row","row-sm"],[1,"col-xl-12"],[1,"card"],[1,"card-body"],[3,"formGroup"],[1,"row"],[1,"col-md-6"],[1,"mg-b-0","tx-14"],["placeholder","Escribe una descripci\xf3n","formControlName","description","maxlength","200","required","",1,"form-control"],[4,"ngIf"],[1,"col-md-6","mt-2"],["placeholder","Escribe el n\xfamero de referencia","formControlName","reference","maxlength","150","required","","maxlength","15",1,"form-control"],[1,"col-md-4"],["type","text","placeholder","Digita el valor de tu producto o servicio","formControlName","price","maxlength","150","required","","maxlength","13",1,"form-control",3,"input"],["id","tax_type","formControlName","tax_type","placeholder","Impuesto","required","",1,"form-control",3,"change"],[3,"value",4,"ngFor","ngForOf"],["type","text","placeholder","Total","formControlName","total","maxlength","150","maxlength","13","readonly","",1,"form-control",3,"value"],["align","center",1,"col-12","col-sm-12","col-lg-12","col-xl-12","mt-4"],[1,"col-md-2"],[1,"btn","btn-oscuros-dyner","btn-block",3,"click"],[3,"value"]],template:function(e,i){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div")(4,"h1",3),t._uU(5," Editar link de Suscripci\xf3n "),t.qZA()()(),t.TgZ(6,"div",4)(7,"div")(8,"button",5),t._UZ(9,"i",6),t._uU(10," Volver "),t.qZA()()()(),t.TgZ(11,"div",7)(12,"div",8)(13,"div",9)(14,"div",10)(15,"form",11)(16,"div",12)(17,"div",13)(18,"p",14),t._uU(19,"Descripci\xf3n"),t.qZA(),t._UZ(20,"input",15),t.YNc(21,v,2,0,"mat-error",16),t.qZA(),t.TgZ(22,"div",17)(23,"p",14),t._uU(24,"Referencia"),t.qZA(),t._UZ(25,"input",18),t.YNc(26,k,2,0,"mat-error",16),t.qZA(),t.TgZ(27,"div",19)(28,"p",14),t._uU(29,"Subtotal ($) COP"),t.qZA(),t.TgZ(30,"input",20),t.NdJ("input",function(n){return i.formatInput(n)}),t.qZA(),t.YNc(31,_,2,0,"mat-error",16),t.qZA(),t.TgZ(32,"div",19)(33,"p",14),t._uU(34,"Iva"),t.qZA(),t.TgZ(35,"select",21),t.NdJ("change",function(n){return i.CalcTax(n)}),t.YNc(36,S,2,2,"option",22),t.qZA(),t.YNc(37,x,2,0,"mat-error",16),t.qZA(),t.TgZ(38,"div",19)(39,"p",14),t._uU(40,"Total ($) COP"),t.qZA(),t._UZ(41,"input",23),t.YNc(42,y,2,0,"mat-error",16),t.qZA()()(),t.TgZ(43,"div",24)(44,"div",25)(45,"button",26),t.NdJ("click",function(){return i.submitbutton()}),t._uU(46," Editar link de pago "),t.qZA()()()()()()()()),2&e){let r,n,u,c,d;t.xp6(8),t.Q6J("routerLink",t.DdM(9,F)),t.xp6(7),t.Q6J("formGroup",i.linkSubForm),t.xp6(6),t.Q6J("ngIf",(null==(r=i.linkSubForm.get("description"))?null:r.hasError("required"))&&(null==(r=i.linkSubForm.get("description"))?null:r.touched)),t.xp6(5),t.Q6J("ngIf",(null==(n=i.linkSubForm.get("reference"))?null:n.hasError("required"))&&(null==(n=i.linkSubForm.get("reference"))?null:n.touched)),t.xp6(5),t.Q6J("ngIf",(null==(u=i.linkSubForm.get("price"))?null:u.hasError("required"))&&(null==(u=i.linkSubForm.get("price"))?null:u.touched)),t.xp6(5),t.Q6J("ngForOf",i.taxTypes),t.xp6(1),t.Q6J("ngIf",(null==(c=i.linkSubForm.get("tax_type"))?null:c.hasError("required"))&&(null==(c=i.linkSubForm.get("tax_type"))?null:c.touched)),t.xp6(4),t.Q6J("value",i.total_price),t.xp6(1),t.Q6J("ngIf",(null==(d=i.linkSubForm.get("total"))?null:d.hasError("required"))&&(null==(d=i.linkSubForm.get("total"))?null:d.touched))}},dependencies:[p.sg,p.O5,s.rH,a._Y,a.YN,a.Kr,a.Fj,a.EJ,a.JJ,a.JL,a.Q7,a.nD,g.TO,a.sg,a.u],styles:[".form-control[_ngcontent-%COMP%]{background-color:#dde2ef;opacity:1;display:block;width:100%;height:inherit;padding:.375rem .75rem;font-size:.875rem;font-weight:400;line-height:1.5;color:#4d5875;background-color:#fff;background-clip:padding-box;border:1px solid #e1e5ef;border-radius:3px;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}.mat-error[_ngcontent-%COMP%]{color:#f44336}.mat-form-field[_ngcontent-%COMP%]{display:block;position:relative;text-align:left}  .mat-form-field-wrapper{padding-bottom:0}  .mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-datepicker-toggle-default-icon, .mat-form-field[_ngcontent-%COMP%]:not(.mat-form-field-appearance-legacy)   .mat-form-field-suffix[_ngcontent-%COMP%]   .mat-datepicker-toggle-default-icon[_ngcontent-%COMP%]{display:inherit;width:1.5em;height:1.5em}  .mat-form-field-appearance-fill .mat-form-field-flex{border-radius:4px 4px 0 0;padding:0!important}  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-flex{background-color:#fff}  .mat-form-field-appearance-fill .mat-form-field-infix{padding:0}  .mat-form-field-infix{border-top-width:0px!important}  .mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-datepicker-toggle-default-icon{width:1.5em;height:1.5em}  .mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button, .mat-form-field[_ngcontent-%COMP%]:not(.mat-form-field-appearance-legacy)   .mat-form-field-suffix[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%]{display:inline-flex;font-size:inherit;width:2.5em;height:2.5em}  .mat-form-field-appearance-fill .mat-form-field-flex{background-color:#fff}  .mat-form-field-appearance-fill{color:#fff!important}  .mat-input-underline{display:none}  .mat-form-field-appearance-legacy .mat-form-field-underline{height:0!important}  .mat-form-field-appearance-legacy .mat-form-field-wrapper{padding-bottom:0}  .mat-form-field-appearance-legacy .mat-form-field-infix{padding:0}  .mat-form-field.mat-warn .mat-input-element, .mat-form-field-invalid[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%]{caret-color:#fff!important}  .mat-form-field-underline{display:none}.img_size[_ngcontent-%COMP%]{border-radius:8%}"]}),o})();var C=l(529);const E=[{path:"",children:[{path:"",title:"Dyner - Link de Sucripciones",component:T}]}];let Z=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[s.Bz.forChild(E),C.JF,a.u5,s.Bz]}),o})();var I=l(6205),L=l(3333),A=l(2834),O=l(3626),N=l(1066),M=l(1844),U=l(1894),J=l(769);let P=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[p.ez,Z,I.X,L.IJ,A.z,a.u5,O.p0,N.x,a.UX,g.lN,M.Ti,U.bB,J.zh]}),o})()}}]);