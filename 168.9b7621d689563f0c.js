"use strict";(self.webpackChunkvalex=self.webpackChunkvalex||[]).push([[168],{1168:(A,c,a)=>{a.r(c),a.d(c,{DatafonoDigitalModule:()=>T});var d=a(6895),r=a(3022),s=a(8246),u=a(2340),t=a(4650),m=a(1311),f=a(9181),g=a(5938);function v(e,n){1&e&&(t.TgZ(0,"div",21)(1,"label",19),t._uU(2," \xa1El URL fue copiado! "),t.qZA()())}let h=(()=>{class e{constructor(o,i,l,p){this.baseService=o,this.profileService=i,this.dialog=l,this.router=p,this.elementType=s.TT.URL,this.correctionLevel=s.Jk.HIGH,this.value="",this.gatewayUrl=u.N.api.gatewayUrl+"pay/",this.validate_copy=!1,this.validate_active=!0,this.options={path:"./assets/img/lotties/6006-qr-code-scan.json"}}ngOnInit(){this.profileService.GetProfileData().subscribe(o=>{this.GetProfileDataF(o)},o=>{this.baseService.GetErrorAuthSesion(o)})}GetProfileDataF(o){this.url_data_web=this.gatewayUrl+o.data.user.client.url_data_web,this.validate_active=o.data.user.client.active,console.log(this.validate_active),0==this.validate_active&&this.openDialog()}copyInputMessage(o){this.validate_copy=!1,o.select(),document.execCommand("copy"),o.setSelectionRange(0,0),this.validate_copy=!0}openDialog(){this.dialog.open(x)}redirect_account(){this.router.navigate(["/profile"]),this.dialog.closeAll()}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(m.b),t.Y36(f.H),t.Y36(g.uw),t.Y36(r.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-datafono-digital"]],decls:32,vars:7,consts:[[1,"container-fluid"],[1,"card",2,"width","50%","margin","0 auto","margin-bottom","100px","margin-top","100px"],[1,"card-body"],[1,"row"],[1,"card-shadow"],[1,"col-md-12"],["align","center"],["cssClass","bshadow",3,"elementType","errorCorrectionLevel","value","width","height"],[1,"card-form"],[1,"form-group"],["for","url"],["type","text","readonly","",1,"form-control","text",2,"width","300px","border","none","background-color","#fff","margin-left","-10px",3,"value"],["userinput",""],["for","respuesta"],["type","text","id","respuesta",1,"text",2,"width","300px"],[1,"btn","btn-oscuros-dyner",3,"click"],["class","mt-2","align","center",4,"ngIf"],[2,"text-align","center","margin-top","20px"],["src","https://imagesd24.s3.us-east-2.amazonaws.com/img_gateway/Tapbar_Icon.svg","alt","logo",1,"img-cards-icons-button",2,"display","block","margin","0 auto"],[2,"color","blue"],[2,"font-size","10px","padding","1px 20px","color","#838383"],["align","center",1,"mt-2"]],template:function(o,i){if(1&o){const l=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6),t._UZ(7,"ngx-qrcode",7),t.qZA()()(),t.TgZ(8,"div",8)(9,"div",5)(10,"div",9)(11,"label",10),t._uU(12,"URL:"),t.qZA(),t._UZ(13,"input",11,12),t.qZA(),t.TgZ(15,"div",9)(16,"label",13),t._uU(17,"Descripci\xf3n:"),t.qZA(),t.TgZ(18,"p",14),t._uU(19,"Monto abiero"),t.qZA()()()(),t.TgZ(20,"div")(21,"div",5)(22,"div",6)(23,"button",15),t.NdJ("click",function(){t.CHM(l);const w=t.MAs(14);return t.KtG(i.copyInputMessage(w))}),t._uU(24,"Copiar link"),t.qZA()(),t.YNc(25,v,3,0,"div",16),t.qZA()(),t.TgZ(26,"div",17),t._UZ(27,"img",18),t.TgZ(28,"label",19),t._uU(29," Comp\xe1rtelo "),t.qZA(),t.TgZ(30,"p",20),t._uU(31,"Puedes compartirlo por redes sociales o correo electr\xf3nico; asimismo, si lo prefieres, puedes imprimirlo y realizar el cobro de manera presencial"),t.qZA()()()()()()}2&o&&(t.xp6(7),t.Q6J("elementType",i.elementType)("errorCorrectionLevel",i.correctionLevel)("value",i.url_data_web)("width",200)("height",200),t.xp6(6),t.s9C("value",i.url_data_web),t.xp6(12),t.Q6J("ngIf",i.validate_copy))},dependencies:[d.O5,s.zF],styles:[".card-height[_ngcontent-%COMP%]{height:320px}.img-cards-no-valid[_ngcontent-%COMP%]{vertical-align:middle;border-style:none;max-width:30%}.button[_ngcontent-%COMP%]{background-color:#0c0c0c;color:#fff;border-radius:5px;width:220px}.text[_ngcontent-%COMP%]{color:#3a82f7}.card-shadow[_ngcontent-%COMP%]{box-shadow:0 0 12px #0000004d;border-radius:15px;width:50%;display:flex;margin:30px auto}.card-form[_ngcontent-%COMP%]{width:80%;display:flex;margin-left:auto;margin-right:auto;border-radius:15px;margin-bottom:15px;border:1px solid rgba(0,0,0,.1)}"]}),e})(),x=(()=>{class e{constructor(o,i){this.dialog=o,this.router=i}close(){this.dialog.closeAll()}redirect_account(){this.router.navigate(["/profile"]),this.dialog.closeAll()}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(g.uw),t.Y36(r.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["dialog-elements-example-dialog"]],decls:14,vars:0,consts:[["mat-dialog-content","","align","center"],["src","./assets/img/svgicons/meta.svg","alt","logo",1,"img-cards-dashboard","mb-3"],[1,"main-content-title","tx-14","mg-b-1","mg-b-lg-1","mt-3"],[1,"mg-b-0","tx-14","mb-3"],["mat-dialog-actions","","align","center"],[1,"flex-container","flex-container-style","fixed-height"],[1,"flex-item"],[1,"btn","btn-purple","btn-block",3,"click"],[1,"btn","btn-grey","btn-block",3,"click"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0),t._UZ(1,"img",1),t.TgZ(2,"h2",2),t._uU(3,"Completa tu proceso de afiliaci\xf3n."),t.qZA(),t.TgZ(4,"p",3),t._uU(5,"Falta poco, completa tu proceso de afiliaci\xf3n y accede sin l\xedmite a tus herramientas. "),t.qZA()(),t.TgZ(6,"div",4)(7,"div",5)(8,"div",6)(9,"button",7),t.NdJ("click",function(){return i.redirect_account()}),t._uU(10,"Completar proceso"),t.qZA()(),t.TgZ(11,"div",6)(12,"button",8),t.NdJ("click",function(){return i.close()}),t._uU(13,"Lo har\xe9 luego"),t.qZA()()()())},styles:[".flex-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-content:space-between;align-items:flex-start}.flex-item[_ngcontent-%COMP%]:nth-child(1){order:0;flex:0 0 auto;align-self:auto}.flex-item[_ngcontent-%COMP%]:nth-child(2){order:0;flex:0 0 auto;align-self:flex-start}"]}),e})();const b=[{path:"",children:[{path:"",title:"Dyner - Datafono Digital",component:h}]}];let D=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[r.Bz.forChild(b),r.Bz]}),e})();var y=a(6205),Z=a(3333),C=a(2834);let T=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[d.ez,D,y.X,Z.IJ,C.z]}),e})()}}]);