"use strict";(self.webpackChunkvalex=self.webpackChunkvalex||[]).push([[771],{7771:(y,g,i)=>{i.r(g),i.d(g,{BalanceWithdrawalModule:()=>M});var c=i(6895),s=i(3022),m=i(2340),t=i(4650),u=i(9856),p=i(1311),f=i(578),d=i(4006);function v(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"div",37)(1,"div",11)(2,"div",12)(3,"input",38),t.NdJ("change",function(r){const l=t.CHM(e),P=l.index,h=l.$implicit,A=t.oxw();return t.KtG(A.changeSelectiontwo(r,P,null==h?null:h.id_cuenta))}),t.qZA(),t._UZ(4,"img",39),t.qZA(),t.TgZ(5,"div",12)(6,"p",40),t._uU(7," N\xfamero de cuenta de ahorros "),t.qZA(),t.TgZ(8,"p"),t._uU(9),t.qZA(),t.TgZ(10,"p",41),t._uU(11,"Costo de la transacci\xf3n $0 COP"),t.qZA()()()()}if(2&n){const e=o.$implicit,a=o.index,r=t.oxw();t.xp6(3),t.Q6J("ngModel",r.selectedIndex===a),t.xp6(1),t.hYB("src","",r.bankImage,"/",null==e||null==e.bank?null:e.bank.icon_image,"",t.LSH),t.xp6(5),t.Oqu(null==e?null:e.num_cuenta)}}function b(n,o){1&n&&(t.TgZ(0,"div",37)(1,"li",42)(2,"label",42),t._uU(3," Debes seleccionar una cuenta bancar\xeda "),t.qZA()()())}function _(n,o){1&n&&(t.TgZ(0,"div",37)(1,"li",42)(2,"label",42),t._uU(3," Valor no autorizado para retiros "),t.qZA()()())}function x(n,o){1&n&&(t.TgZ(0,"div",37)(1,"li",42)(2,"label",42),t._uU(3," Debe esperar por lo menos 72 horas para poder realizar una nueva solicitud de retiro "),t.qZA()()())}const C=[{path:"",children:[{path:"",title:"Dyner - Retiros",component:(()=>{class n{constructor(e,a,r,l){this.AccountStateService=e,this.baseService=a,this.withdrawalService=r,this.router=l,this.checkboxesDataList=[],this.totalTransfer=0,this.discount=0,this.cuatropormil=0,this.commissionTransfer=0,this.account=[],this.bankImage=m.N.api.bankImage,this.validate_account_select=!1,this.validate_account_grater=!1,this.validate_last_transfer=!1,this.list=[],this.clicked=!1,this.selectedIndex=1e6,this.event=!1}ngOnInit(){this.AccountStateService.GetAllTransferBalance().subscribe(e=>{this.GetAllTransferBalanceF(e)},e=>{this.baseService.GetErrorAuthSesion(e)})}GetAllTransferBalanceF(e){console.log(e),this.totalTransfer=e.data.totalTransfer,this.discount=e.data.discount,this.cuatropormil=e.data.cuatropormil,this.account=e.data.bankAccounts,this.commissionTransfer=e.data.commissionTransfer;for(var a=0;a<e.data.bankAccounts.length;a++)this.checkboxesDataList.push({id_cuenta:e.data.bankAccounts[a].id_cuenta,num_cuenta:e.data.bankAccounts[a].num_cuenta,isChecked:!1,bank:e.data.bankAccounts[a].bank})}changeSelectiontwo(e,a,r){this.selectedIndex=e.target.checked?a:void 0,this.selectedItemsList=r,this.event=e.target.checked}submitbutton(){this.clicked=!0,this.validate_account_grater=!1,this.totalTransfer<1?(this.validate_account_grater=!0,this.clicked=!1):(this.validate_account_select=!1,0==this.event?(this.validate_account_select=!0,this.clicked=!1):(this.validate_last_transfer=!1,this.clicked=!0,this.withdrawalService.CreateWithdrawal({accountId:this.selectedItemsList,availableBalance:this.totalTransfer,totalTransfer:this.totalTransfer,cuatropormil:this.cuatropormil,preventionFund:0,commissionTransfer:this.commissionTransfer}).subscribe(a=>{console.log("result",a),this.router.navigate(["balance-withdrawal-response"],{queryParams:{reference:a?.data?.referencia}}).then(()=>{})})))}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(u.B),t.Y36(p.b),t.Y36(f.t),t.Y36(s.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-balance-withdrawal"]],decls:78,vars:25,consts:[[1,"container-fluid"],[1,"breadcrumb-header","justify-content-between"],[1,"left-content"],[1,"main-content-title","mg-b-1","mg-b-lg-1"],[1,"mg-b-0"],[1,"row"],[1,"col-12","col-lg-6"],[1,"card"],[1,"card-header","pb-0"],[1,"mg-b-0","tx-14","color-title-card"],[1,"card-body"],[1,"flex-container"],[1,"flex-item"],[1,"main-content-title","tx-34","mg-b-1","mg-b-lg-1","sin-negrita-font-weight-300"],["src","./assets/img/svgicons/retiro.svg","alt","logo",1,"img-cards-dashboard",2,"max-width","80%"],[1,"card-footer"],[1,"card-header",2,"padding-top","0.25rem","padding-bottom","0rem !important","text-align","center"],["src","./assets/img/svgicons/check.svg","alt","alert",1,"pt-2","pb-3",2,"max-width","10%"],[1,"card-body",2,"padding","1rem","padding-top","0.5rem","text-align","center"],[1,"pb-2"],[2,"color","black"],["href","mailto:certificaciones@d24.com.co",2,"color","black"],[1,"main-content-title","tx-14","mg-b-1","mg-b-lg-1","mb-2","mt-2"],[1,"mg-b-0","tx-14"],[1,"row","row-sm"],[1,"col-lg-12","mg-t-10","mg-lg-t-0"],["readonly","","type","text",1,"form-control",3,"value"],[1,"col-lg-6","mg-t-10","mg-lg-t-0","mt-2"],["disabled","","type","text",1,"form-control",3,"value"],[1,"col-lg-12","mg-t-10","mg-lg-t-0","mt-2"],[1,"card","card-style"],[1,"card-body",2,"padding-left","40px","padding-right","40px"],["class","mt-2",4,"ngFor","ngForOf"],["align","center",1,"col-12","mt-4"],[1,"col-md-4"],[1,"btn","btn-oscuros-dyner","btn-block",3,"disabled","click"],["class","mt-2",4,"ngIf"],[1,"mt-2"],["type","checkbox","checked","false",1,"form-check-input",3,"ngModel","change"],["alt","logo",1,"img-bank-account",3,"src"],[1,"tx-14","num-cuenta"],[1,"tx-12","title-anex"],[2,"color","red"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div")(4,"h1",3),t._uU(5,"Retiro de saldo"),t.qZA(),t.TgZ(6,"p",4),t._uU(7,"Solicitar retiro"),t.qZA()()()(),t.TgZ(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8)(12,"p",9),t._uU(13,"SALDO DISPONIBLE PARA RETIROS"),t.qZA()(),t.TgZ(14,"div",10)(15,"div",11)(16,"div",12)(17,"h1",13),t._uU(18),t.ALo(19,"currency"),t.qZA()(),t.TgZ(20,"div",12),t._UZ(21,"img",14),t.qZA()()(),t.TgZ(22,"div",15)(23,"p",9),t._uU(24,"Ver detalle"),t.qZA()()()(),t.TgZ(25,"div",6)(26,"div",7)(27,"div",16),t._UZ(28,"img",17),t.qZA(),t.TgZ(29,"div",18)(30,"h5",19),t._uU(31,"\xa1RECUERDA!"),t.qZA(),t.TgZ(32,"p",20),t._uU(33," Para retirar tu dinero, debes enviarnos tu certificado bancario al correo: "),t.TgZ(34,"a",21),t._uU(35,"certificaciones@d24.com.co"),t.qZA(),t._uU(36," y seguir las instrucciones de tu asesor. "),t.qZA()()()(),t.TgZ(37,"div",6)(38,"div",7)(39,"div",8)(40,"h2",22),t._uU(41," DETALLE DE RETIRO "),t.qZA(),t.TgZ(42,"p",23),t._uU(43,"Consulta el saldo a retirar"),t.qZA()(),t.TgZ(44,"div",10)(45,"div",24)(46,"div",25)(47,"p",23),t._uU(48,"Valor a retirar"),t.qZA(),t._UZ(49,"input",26),t.ALo(50,"currency"),t.qZA(),t.TgZ(51,"div",27)(52,"p",23),t._uU(53,"Impuesto 4x1000"),t.qZA(),t._UZ(54,"input",28),t.qZA(),t.TgZ(55,"div",27)(56,"p",23),t._uU(57,"Costo de la comisi\xf3n"),t.qZA(),t._UZ(58,"input",28),t.qZA(),t.TgZ(59,"div",29)(60,"p",23),t._uU(61,"Total a retirar"),t.qZA(),t._UZ(62,"input",28),t.ALo(63,"currency"),t.qZA()()()()(),t.TgZ(64,"div",6)(65,"div",30)(66,"div",8)(67,"h2",22),t._uU(68," SELECCIONA LA CUENTA DESTINO "),t.qZA()(),t.TgZ(69,"div",31),t.YNc(70,v,12,4,"div",32),t.qZA()()(),t.TgZ(71,"div",33)(72,"div",34)(73,"button",35),t.NdJ("click",function(){return a.submitbutton()}),t._uU(74," Solicitar retiro "),t.qZA()(),t.YNc(75,b,4,0,"div",36),t.YNc(76,_,4,0,"div",36),t.YNc(77,x,4,0,"div",36),t.qZA()()()),2&e&&(t.xp6(18),t.hij(" ",t.gM2(19,10,a.totalTransfer,"USD","symbol","1.0-0")," COP "),t.xp6(31),t.s9C("value",t.gM2(50,15,a.totalTransfer,"USD","symbol","1.0-0")),t.xp6(5),t.s9C("value",a.cuatropormil),t.xp6(4),t.s9C("value",a.commissionTransfer),t.xp6(4),t.s9C("value",t.gM2(63,20,a.totalTransfer,"USD","symbol","1.0-0")),t.xp6(8),t.Q6J("ngForOf",a.checkboxesDataList),t.xp6(3),t.Q6J("disabled",a.clicked),t.xp6(2),t.Q6J("ngIf",a.validate_account_select),t.xp6(1),t.Q6J("ngIf",a.validate_account_grater),t.xp6(1),t.Q6J("ngIf",a.validate_last_transfer))},dependencies:[c.sg,c.O5,d.Wl,d.JJ,d.On,c.H9],styles:['@charset "UTF-8";.table-style-global[_ngcontent-%COMP%]{line-height:4}.table-style-global[_ngcontent-%COMP%]{white-space:nowrap}.table-style-global[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table-style-global[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding-left:20px!important;padding-right:20px!important}.mat-row[_ngcontent-%COMP%]{padding:0!important}.mat-cell[_ngcontent-%COMP%]{font-size:14px;padding:0!important}.mat-header-cell[_ngcontent-%COMP%]{padding:0;font-size:14px;font-weight:500;color:#000}.mat-header-cell[_ngcontent-%COMP%]   .mat-header-cell-content[_ngcontent-%COMP%]{padding:0}tr.mat-header-row[_ngcontent-%COMP%]{height:0px!important}tr.mat-row[_ngcontent-%COMP%], tr.mat-footer-row[_ngcontent-%COMP%]{height:28px!important}table[_ngcontent-%COMP%]{width:100%}tr.mat-row[_ngcontent-%COMP%], tr.mat-footer-row[_ngcontent-%COMP%]{height:37px}.mat-cell[_ngcontent-%COMP%], .mat-footer-cell[_ngcontent-%COMP%]{font-size:14px}.btn-icon[_ngcontent-%COMP%]{width:25px;height:25px;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:.9rem}.margin-button-action[_ngcontent-%COMP%]{margin-left:5px}table[_ngcontent-%COMP%]{display:table;border-collapse:separate;box-sizing:none!important;text-indent:initial;unicode-bidi:-webkit-isolate;unicode-bidi:isolate;border-spacing:2px;border-color:none!important}.dropdown-toggle[_ngcontent-%COMP%]:after{display:none!important}.dropdown-menu.dropdown-menu-right[_ngcontent-%COMP%]{left:initial!important;right:0}  rect{stroke:none!important}  fusioncharts g path{fill:#409cff!important}  fusioncharts g path:hover{fill:#094b92!important}  .apexcharts-gridlines-horizontal line,   .apexcharts-gridlines-vertical line{stroke:#fff3!important}  .dark-theme .apexcharts-tooltip.apexcharts-theme-light .apexcharts-tooltip-title{background-color:#242f48;color:#fff}  .card-dashboard-map-one .vmap-wrapper svg{width:100%;height:inherit}  .rtl .apexcharts-datalabels-group{transform:translate(26px)}.table[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:last-child) > [_ngcontent-%COMP%]:last-child > *[_ngcontent-%COMP%]{border-bottom-color:#e2e8f51a!important}#chart[_ngcontent-%COMP%]{margin-bottom:4rem}.card-dashboard-map-one[_ngcontent-%COMP%]{padding:12px!important}.customers[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]{padding:.75rem 1.25rem}.card-body-style[_ngcontent-%COMP%]{height:415px}.color-title-card[_ngcontent-%COMP%]{color:#7987a1;font-weight:300}.btn-icon[_ngcontent-%COMP%]{width:25px;height:25px;display:flex;align-items:center;justify-content:center;flex-shrink:0}.btn-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{line-height:0;font-size:.9rem}.img-cards-dashboard[_ngcontent-%COMP%]{height:50px}.img-cards-icons-button[_ngcontent-%COMP%]{height:15px}.img-bank-account[_ngcontent-%COMP%]{max-width:85%!important}.flex-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:flex-start;align-content:space-between;align-items:flex-start}.flex-item[_ngcontent-%COMP%]:nth-child(1){order:0;flex:3 1 auto;align-self:auto}.flex-item[_ngcontent-%COMP%]:nth-child(2){order:0;flex:0 0 auto;align-self:flex-start}a[_ngcontent-%COMP%]{color:#15c;text-decoration:none;background-color:transparent}']}),n})()}]}];let Z=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[s.Bz.forChild(C),s.Bz]}),n})();var O=i(6205),T=i(3333),w=i(2834);let M=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[c.ez,Z,O.X,T.IJ,w.z]}),n})()}}]);