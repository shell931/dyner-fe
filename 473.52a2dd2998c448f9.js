"use strict";(self.webpackChunkvalex=self.webpackChunkvalex||[]).push([[473],{1473:(P,u,e)=>{e.r(u),e.d(u,{LinkDetailSubModule:()=>_});var c=e(6895),l=e(3022),g=e(2340),t=e(4650),m=e(9925),p=e(1311);function v(n,a){1&n&&(t.TgZ(0,"div",44)(1,"label",45),t._uU(2," \xa1El link de suscripci\xf3n fue copiado! "),t.qZA()())}function f(n,a){1&n&&(t.TgZ(0,"div",44)(1,"label",45),t._uU(2," \xa1El bot\xf3n fue copiado! "),t.qZA()())}const b=function(n){return["/link-sub-edit",n]},h=function(){return["/link-sub"]};let Z=(()=>{class n{constructor(i,o,s){this.route=i,this.LinksSubsService=o,this.baseService=s,this.gatewayUrl=g.N.api.gatewayUrl+"tokenizationlink/",this.labelPosition="after",this.validate_copy=!1,this.validate_copy_button=!1,this.firstGroup=0}ngOnInit(){this.route.params.subscribe(i=>{this.id_suscripcion=i.id}),this.LinksSubsService.GetLinkSubsById(this.id_suscripcion).subscribe(i=>{this.GetLinkByIdSubF(i)},i=>{this.baseService.GetErrorAuthSesion(i)})}GetLinkByIdSubF(i){console.log(i),this.description=i.data.description,this.price=i.data.total,this.reference=i.data.product_code,this.payment_day=i.data.payment_day,this.url_link=this.gatewayUrl+i.data.link_url}copyInputMessage(i){this.validate_copy=!1,i.select(),document.execCommand("copy"),i.setSelectionRange(0,0),this.validate_copy=!0}copyInputMessageButton(i){this.validate_copy_button=!1,i.select(),document.execCommand("copy"),i.setSelectionRange(0,0),this.validate_copy_button=!0}onFirstGroupChange(){}}return n.\u0275fac=function(i){return new(i||n)(t.Y36(l.gz),t.Y36(m.o),t.Y36(p.b))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-payment-link-detail"]],decls:101,vars:18,consts:[[1,"container-fluid"],[1,"breadcrumb-header","justify-content-between"],[1,"left-content"],[1,"main-content-title","tx-21","mg-b-1","mg-b-lg-1"],[1,"main-dashboard-header-right"],[1,"flex-container"],[1,"flex-item","margin-items-button-head"],[1,"btn","btn-info","btn-block",3,"routerLink"],["src","./assets/img/icons_link_detail/Edit.svg","alt","logo",1,"icon-buttons"],[2,"margin-left","10px"],[1,"btn","btn-oscuros-dyner","btn-block",3,"routerLink"],[1,"fas","fa-chevron-left"],[1,"row"],[1,"col-12","col-sm-7","col-lg-7","col-xl-7"],[1,"card"],[1,"card-header","pb-0"],[1,"main-content-title","tx-14","mg-b-1","mg-b-lg-1","mb-2","mt-2"],[1,"card-body"],[1,"mg-b-0","tx-14","mb-3"],[1,"flex-item"],["src","./assets/img/links_icons/facebook.svg","alt","logo",1,"icon-social-media"],["src","./assets/img/links_icons/instagram.svg","alt","logo",1,"icon-social-media","margin-icon-social-media"],["src","./assets/img/links_icons/messenger.svg","alt","logo",1,"icon-social-media","margin-icon-social-media"],["src","./assets/img/links_icons/twitter.svg","alt","logo",1,"icon-social-media","margin-icon-social-media"],["src","./assets/img/links_icons/whatsapp.svg","alt","logo",1,"icon-social-media","margin-icon-social-media"],["src","./assets/img/links_icons/mail.svg","alt","logo",1,"icon-social-media","margin-icon-social-media"],[1,"card-body",2,"padding-left","30px"],[1,"col-md-9"],["type","text","readonly","",1,"form-control",3,"value"],["userinput",""],["class","mt-2",4,"ngIf"],[1,"col-md-3"],[1,"btn","btn-oscuros-dyner","btn-block",3,"click"],["userinputBut",""],[1,"col-12","col-sm-5","col-lg-5","col-xl-5"],[1,"flex-container-info","mb-1"],[1,"flex-item-info"],[1,"main-content-title","tx-14","mg-b-1","mg-b-lg-1"],[1,"mg-b-0","tx-14"],[1,"flex-container-info","mb-1","mt-2"],["align","center",1,"card-header","pb-0"],["align","center",1,"card-body"],[1,"col-md-4"],["target","_blank","mat-menu-item","",1,"btn","btn-oscuros-dyner","btn-block",3,"href"],[1,"mt-2"],[2,"color","blue"]],template:function(i,o){if(1&i){const s=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div")(4,"h2",3),t._uU(5,"Compartir Suscripci\xf3n"),t.qZA()()(),t.TgZ(6,"div",4)(7,"div",5)(8,"div",6)(9,"button",7),t._uU(10,"Editar "),t._UZ(11,"img",8),t.qZA()(),t.TgZ(12,"div",9)(13,"button",10),t._UZ(14,"i",11),t._uU(15," Volver "),t.qZA()()()()(),t.TgZ(16,"div",12)(17,"div",13)(18,"div",14)(19,"div",15)(20,"h2",16),t._uU(21,"COMPARTE TU SUSCRPCION EN LAS REDES SOCIALES"),t.qZA()(),t.TgZ(22,"div",17)(23,"p",18),t._uU(24,"Haz click en el \xedcono de la red sociales en la que deseas compartir tu link:"),t.qZA(),t.TgZ(25,"div",5)(26,"div",19),t._UZ(27,"img",20),t.qZA(),t.TgZ(28,"div",19),t._UZ(29,"img",21),t.qZA(),t.TgZ(30,"div",19),t._UZ(31,"img",22),t.qZA(),t.TgZ(32,"div",19),t._UZ(33,"img",23),t.qZA(),t.TgZ(34,"div",19),t._UZ(35,"img",24),t.qZA(),t.TgZ(36,"div",19),t._UZ(37,"img",25),t.qZA()()()(),t.TgZ(38,"div",14)(39,"div",15)(40,"h2",16),t._uU(41,"COPIA EL LINK DE SUSCRIPCIONES"),t.qZA()(),t.TgZ(42,"div",26)(43,"div",12)(44,"div",27),t._UZ(45,"input",28,29),t.YNc(47,v,3,0,"div",30),t.qZA(),t.TgZ(48,"div",31)(49,"button",32),t.NdJ("click",function(){t.CHM(s);const d=t.MAs(46);return t.KtG(o.copyInputMessage(d))}),t._uU(50,"Copiar link "),t.qZA()()()()(),t.TgZ(51,"div",14)(52,"div",15)(53,"h2",16),t._uU(54,"INCORPORA EL BOT\xd3N DE PAGO EN TU P\xc1GINA"),t.qZA()(),t.TgZ(55,"div",26)(56,"div",12)(57,"div",27),t._UZ(58,"input",28,33),t.YNc(60,f,3,0,"div",30),t.qZA(),t.TgZ(61,"div",31)(62,"button",32),t.NdJ("click",function(){t.CHM(s);const d=t.MAs(59);return t.KtG(o.copyInputMessageButton(d))}),t._uU(63,"Copiar bot\xf3n "),t.qZA()()()()()(),t.TgZ(64,"div",34)(65,"div",14)(66,"div",15)(67,"h2",16),t._uU(68,"RESUMEN DEL LINK DE PAGO"),t.qZA()(),t.TgZ(69,"div",17)(70,"div",35)(71,"div",36)(72,"h2",37),t._uU(73,"Descripci\xf3n"),t.qZA()(),t.TgZ(74,"div",36)(75,"p",38),t._uU(76),t.qZA()()(),t._UZ(77,"hr"),t.TgZ(78,"div",39)(79,"div",36)(80,"h2",37),t._uU(81,"C\xf3digo de producto"),t.qZA()(),t.TgZ(82,"div",36)(83,"p",38),t._uU(84),t.qZA()()(),t._UZ(85,"hr"),t.TgZ(86,"div",39)(87,"div",36)(88,"h2",37),t._uU(89,"Total"),t.qZA()(),t.TgZ(90,"div",36),t._uU(91),t.ALo(92,"currency"),t.qZA()()()(),t.TgZ(93,"div",14)(94,"div",40)(95,"h2",16),t._uU(96,"PREVISUALIZA EL LINK"),t.qZA()(),t.TgZ(97,"div",41)(98,"div",42)(99,"a",43),t._uU(100,"Ir"),t.qZA()()()()()()()}2&i&&(t.xp6(9),t.Q6J("routerLink",t.VKq(15,b,o.id_suscripcion)),t.xp6(4),t.Q6J("routerLink",t.DdM(17,h)),t.xp6(32),t.s9C("value",o.url_link),t.xp6(2),t.Q6J("ngIf",o.validate_copy),t.xp6(11),t.s9C("value",o.url_link),t.xp6(2),t.Q6J("ngIf",o.validate_copy_button),t.xp6(16),t.Oqu(o.description),t.xp6(8),t.Oqu(o.reference),t.xp6(7),t.hij(" ",t.gM2(92,10,o.price,"USD","symbol","1.0-0")," "),t.xp6(8),t.s9C("href",o.url_link,t.LSH))},dependencies:[c.O5,l.rH,c.H9],styles:[".flex-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:flex-start;align-content:space-between;align-items:flex-start}.flex-item[_ngcontent-%COMP%]:nth-child(1){order:0;flex:0 0 auto;align-self:auto}.flex-item[_ngcontent-%COMP%]:nth-child(2){order:0;flex:0 0 auto;align-self:auto}.flex-container-info[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;align-content:space-between;align-items:flex-start}.flex-item-info[_ngcontent-%COMP%]:nth-child(1){order:0;flex:0 0 auto;align-self:auto}.flex-item-info[_ngcontent-%COMP%]:nth-child(2){order:0;flex:0 0 auto;align-self:auto}.margin-items-button-head[_ngcontent-%COMP%]{margin-left:10px}.icon-social-media[_ngcontent-%COMP%]{width:60px;height:60px}.margin-icon-social-media[_ngcontent-%COMP%]{margin-left:10px}hr[_ngcontent-%COMP%]{margin-top:0;margin-bottom:0}.icon-buttons[_ngcontent-%COMP%]{margin-left:5px}"]}),n})();var y=e(529),r=e(4006);const x=[{path:"",children:[{path:"",title:"Dyner - Subscription detail",component:Z}]}];let A=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[l.Bz.forChild(x),y.JF,r.u5,l.Bz]}),n})();var C=e(6205),U=e(3333),T=e(2834),k=e(3626),S=e(1066),L=e(9549),M=e(1844),D=e(1894),O=e(769),I=e(5158);let _=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[c.ez,A,C.X,U.IJ,T.z,r.u5,k.p0,S.x,r.UX,L.lN,M.Ti,O.zh,D.bB,I.zz]}),n})()}}]);