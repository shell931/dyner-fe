"use strict";(self.webpackChunkvalex=self.webpackChunkvalex||[]).push([[957],{5957:(x,d,a)=>{a.r(d),a.d(d,{TransactionDetailModule:()=>b});var r=a(6895),c=a(3022),o=a(4650),s=a(4666),p=a(1311);function l(t,n){if(1&t&&(o.TgZ(0,"div",22)(1,"div",18)(2,"div",19)(3,"p",23),o._uU(4),o.qZA()(),o.TgZ(5,"div",21)(6,"p",23),o._uU(7),o.ALo(8,"currency"),o.qZA()(),o.TgZ(9,"div",19)(10,"p",23),o._uU(11),o.ALo(12,"currency"),o.qZA()(),o.TgZ(13,"div",21)(14,"p",23),o._uU(15),o.ALo(16,"currency"),o.qZA()(),o.TgZ(17,"div",19)(18,"p",23),o._uU(19),o.ALo(20,"currency"),o.qZA()()(),o._UZ(21,"hr"),o.qZA()),2&t){const i=o.oxw();o.xp6(4),o.hij("",i.comision_ps," %"),o.xp6(3),o.hij(" ",o.gM2(8,5,i.val_rete_ica,"USD","symbol","1.0-0")," "),o.xp6(4),o.hij(" ",o.gM2(12,10,i.val_rete_fuente,"USD","symbol","1.0-0")," "),o.xp6(4),o.hij(" ",o.gM2(16,15,i.val_impuesto_comision,"USD","symbol","1.0-0")," "),o.xp6(4),o.hij(" ",o.gM2(20,20,i.val_comision_adi_ps,"USD","symbol","1.0-0")," ")}}function u(t,n){1&t&&(o.TgZ(0,"div",19)(1,"p",20),o._uU(2,"Franquicia"),o.qZA()())}function m(t,n){1&t&&(o.TgZ(0,"div",21)(1,"p",20),o._uU(2,"N\xfamero de tarjeta"),o.qZA()())}function g(t,n){1&t&&(o.TgZ(0,"div",19)(1,"p",20),o._uU(2,"Cuotas"),o.qZA()())}function v(t,n){if(1&t&&(o.TgZ(0,"div",19)(1,"p",23),o._uU(2),o.qZA()()),2&t){const i=o.oxw();o.xp6(2),o.Oqu(i.franquicia)}}function Z(t,n){if(1&t&&(o.TgZ(0,"div",21)(1,"p",23),o._uU(2),o.qZA()()),2&t){const i=o.oxw();o.xp6(2),o.Oqu(i.num_tarjeta)}}function h(t,n){if(1&t&&(o.TgZ(0,"div",19)(1,"p",23),o._uU(2),o.qZA()()),2&t){const i=o.oxw();o.xp6(2),o.Oqu(i.cuotas)}}const _=[{path:"",children:[{path:"",title:"Dyner - Transaccion",component:(()=>{class t{constructor(i,e,U){this.route=i,this.transactionService=e,this.baseService=U}ngOnInit(){this.route.params.subscribe(i=>{this.id_transaction=i.id,this.servicio=i.service}),this.transactionService.GetTransactionById(this.id_transaction,this.servicio).subscribe(i=>{this.GetTransactionByIdF(i)},i=>{this.baseService.GetErrorAuthSesion(i)})}GetTransactionByIdF(i){console.log(i),this.referenciatx=i.data.transaction.referenciatx,this.num_autorizacion=i.data.transactiond.num_autorizacion,this.descripcion=i.data.transaction.descripcion,this.nombre_comprador=i.data.transactiond.nombre_comprador,this.correo=i.data.transaction.correo,this.cuotas=i.data.transaction.cuotas,this.cod_respuesta=i.data.transaction.cod_respuesta,this.resp_banco=i.data.transaction.resp_banco,this.created_at=i.data.transaction.created_at,this.total=i.data.transaction.total,this.id_estado=i.data.transaction.id_estado,this.descripcion_estado=i.data.transactiond.descripcion_estado,this.id_cliente=i.data.transaction.id_cliente,this.servicio=i.data.transaction.servicio,this.num_tarjeta=i.data.transaction.num_tarjeta,this.franquicia=i.data.transaction.franquicia,this.comision_ps=i.data.transaction.comision_ps,this.val_comision_ps=i.data.transaction.val_comision_ps,this.val_rete_ica=i.data.transaction.val_rete_ica,this.val_comision_adi_ps=i.data.transaction.val_comision_adi_ps,this.val_rete_fuente=i.data.transaction.val_rete_fuente,this.val_impuesto_comision=i.data.transactiond.val_impuesto_comision,this.total_descuento=i.data.transaction.total_descuento,this.total_abono=i.data.transaction.total_abono,this.metodopago=i.data.transactiond.payment_metod,this.celular=i.data.transaction.celular}}return t.\u0275fac=function(i){return new(i||t)(o.Y36(c.gz),o.Y36(s.p),o.Y36(p.b))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-transaction-detail"]],decls:141,vars:32,consts:[[1,"container-fluid",2,"background-color","#fff","padding","5px"],[1,"main-dashboard-header-right"],[1,"search-container"],["type","text","placeholder","Buscar movimiento"],["src","../../../../assets/img/Vector.png","alt","lupa",1,"icon-lupa"],[1,"breadcrumb-header","justify-content-between"],[1,"left-content","m-lg-2"],[1,"main-content-title","tx-14","mg-b-1","mg-b-lg-1",2,"color","#000"],[1,"tx-10"],[1,"card","p-4","br-2","mt-4",2,"background-color","#F5F5F5"],[1,"row"],[1,"col-12","col-md-6","col-sm-7","col-lg-7","col-xl-7"],[1,"card-shadow"],[1,"card-header","pb-0"],[1,"main-content-title","tx-14","mg-b-1","mg-b-lg-1","mb-2","mt-2"],[2,"background-color","#000","width","50%"],[1,"card-body"],[1,"col-md-6"],[1,"flex-container-internal"],[1,"flex-item-internal","mb-3","bg-light"],[1,"tx-14","title-field"],[1,"flex-item-internal","mb-3"],[1,"col-md-6","text-end"],[1,"mg-b-0","tx-14","text"],[1,"card-body",2,"padding-left","30px"],[1,"flex-item","mb-3"],["class","col-md-6 text-end",4,"ngIf"],[1,"col-12","col-md-6","col-sm-5","col-lg-5","col-xl-5","h-100"],["class","flex-item-internal mb-3 bg-light",4,"ngIf"],["class","flex-item-internal mb-3",4,"ngIf"],[2,"text-align","center"],["src","../../../../assets/img/heart_Icon.png","alt","logo",1,"img-cards-icons-button",2,"display","block","margin","0 auto"],[2,"font-size","10px","padding","1px 20px","color","#838383"]],template:function(i,e){1&i&&(o.TgZ(0,"div",0)(1,"div",1)(2,"div",2),o._UZ(3,"input",3)(4,"img",4),o.qZA()(),o.TgZ(5,"div",5)(6,"div",6)(7,"div")(8,"p",7),o._uU(9," Consulta a continuaci\xf3n todos los detalles de esta transacci\xf3n "),o.qZA(),o.TgZ(10,"p",8),o._uU(11,"Si tienes dudas adicionales comun\xedcate con nuestros asesores. "),o.qZA()()()(),o.TgZ(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"div",13)(17,"h2",14),o._uU(18," Datos del comprador "),o.qZA(),o._UZ(19,"hr",15),o.qZA(),o.TgZ(20,"div",16)(21,"div",10)(22,"div",17)(23,"div",18)(24,"div",19)(25,"p",20),o._uU(26,"Cliente"),o.qZA()(),o.TgZ(27,"div",21)(28,"p",20),o._uU(29,"Correo Electr\xf3nico"),o.qZA()(),o.TgZ(30,"div",19)(31,"p",20),o._uU(32,"Celular"),o.qZA()()()(),o.TgZ(33,"div",22)(34,"div",18)(35,"div",19)(36,"p",23),o._uU(37),o.qZA()(),o.TgZ(38,"div",21)(39,"p",23),o._uU(40),o.qZA()(),o.TgZ(41,"div",19)(42,"p",23),o._uU(43),o.qZA()()(),o._UZ(44,"hr"),o.qZA(),o._UZ(45,"hr"),o.qZA()()(),o.TgZ(46,"div",12)(47,"div",13)(48,"h2",14),o._uU(49," Detalles de descuento "),o.qZA(),o._UZ(50,"hr",15),o.qZA(),o.TgZ(51,"div",24)(52,"div",10)(53,"div",17)(54,"div",18)(55,"div",19)(56,"p",20),o._uU(57," Tarifa Dyner24 2.9%"),o.qZA()(),o.TgZ(58,"div",21)(59,"p",20),o._uU(60,"Rete ica 0.414%"),o.qZA()(),o.TgZ(61,"div",19)(62,"p",20),o._uU(63,"Rete Fuente 1.5%"),o.qZA()(),o.TgZ(64,"div",25)(65,"p",20),o._uU(66,"IVA Comisi\xf3n"),o.qZA()(),o.TgZ(67,"div",19)(68,"p",20),o._uU(69,"Costo fijo Transacci\xf3n"),o.qZA()()(),o._UZ(70,"hr"),o.qZA(),o.YNc(71,l,22,25,"div",26),o.qZA()()()(),o.TgZ(72,"div",27)(73,"div",12)(74,"div",13)(75,"h2",14),o._uU(76," Detalles de la transacci\xf3n "),o.qZA(),o._UZ(77,"hr",15),o.qZA(),o.TgZ(78,"div",16)(79,"div",10)(80,"div",17)(81,"div",18)(82,"div",19)(83,"p",20),o._uU(84,"Estado"),o.qZA()(),o.TgZ(85,"div",21)(86,"p",20),o._uU(87,"Fecha de transaccion"),o.qZA()(),o.TgZ(88,"div",19)(89,"p",20),o._uU(90,"Autorizaci\xf3n"),o.qZA()(),o.TgZ(91,"div",21)(92,"p",20),o._uU(93,"Medio de Pago"),o.qZA()(),o.YNc(94,u,3,0,"div",28),o.YNc(95,m,3,0,"div",29),o.YNc(96,g,3,0,"div",28),o.TgZ(97,"div",21)(98,"p",20),o._uU(99,"Total bruto"),o.qZA()(),o.TgZ(100,"div",19)(101,"p",20),o._uU(102,"Descuento"),o.qZA()(),o.TgZ(103,"div",21)(104,"p",20),o._uU(105,"Total Neto"),o.qZA()()(),o._UZ(106,"hr"),o.qZA(),o.TgZ(107,"div",22)(108,"div",18)(109,"div",19)(110,"p",23),o._uU(111),o.qZA()(),o.TgZ(112,"div",21)(113,"p",23),o._uU(114),o.qZA()(),o.TgZ(115,"div",19)(116,"p",23),o._uU(117),o.qZA()(),o.TgZ(118,"div",21)(119,"p",23),o._uU(120),o.qZA()(),o.YNc(121,v,3,1,"div",28),o.YNc(122,Z,3,1,"div",29),o.YNc(123,h,3,1,"div",28),o.TgZ(124,"div",21)(125,"p",23),o._uU(126),o.ALo(127,"currency"),o.qZA()(),o.TgZ(128,"div",19)(129,"p",23),o._uU(130),o.ALo(131,"currency"),o.qZA()(),o.TgZ(132,"div",21)(133,"p",23),o._uU(134),o.ALo(135,"currency"),o.qZA()()(),o._UZ(136,"hr"),o.qZA()()(),o.TgZ(137,"div",30),o._UZ(138,"img",31),o.TgZ(139,"p",32),o._uU(140,"Puedes compartirlo por redes sociales o correo electr\xf3nico; asimismo, si lo prefieres, puedes imprimirlo y realizar el cobro de manera presencial"),o.qZA()()()()()()()),2&i&&(o.xp6(37),o.Oqu(e.nombre_comprador),o.xp6(3),o.Oqu(e.correo),o.xp6(3),o.Oqu(e.celular),o.xp6(28),o.Q6J("ngIf","Nequi"!=e.metodopago&&"Ach"!=e.metodopago&&"Bancolombia"!=e.metodopago),o.xp6(23),o.Q6J("ngIf","Nequi"!=e.metodopago&&"Ach"!=e.metodopago&&"Bancolombia"!=e.metodopago),o.xp6(1),o.Q6J("ngIf","Nequi"!=e.metodopago&&"Ach"!=e.metodopago&&"Bancolombia"!=e.metodopago),o.xp6(1),o.Q6J("ngIf","Nequi"!=e.metodopago&&"Ach"!=e.metodopago&&"Bancolombia"!=e.metodopago),o.xp6(15),o.Oqu(e.descripcion_estado),o.xp6(3),o.Oqu(e.created_at),o.xp6(3),o.hij("",e.num_autorizacion,"0"),o.xp6(3),o.hij(" ",e.metodopago," "),o.xp6(1),o.Q6J("ngIf","Nequi"!=e.metodopago&&"Ach"!=e.metodopago&&"Bancolombia"!=e.metodopago),o.xp6(1),o.Q6J("ngIf","Nequi"!=e.metodopago&&"Ach"!=e.metodopago&&"Bancolombia"!=e.metodopago),o.xp6(1),o.Q6J("ngIf","Nequi"!=e.metodopago&&"Ach"!=e.metodopago&&"Bancolombia"!=e.metodopago),o.xp6(3),o.hij(" ",o.gM2(127,17,e.total,"USD","symbol","1.0-0")," "),o.xp6(4),o.hij(" ",o.gM2(131,22,e.total_descuento,"USD","symbol","1.0-0")," "),o.xp6(4),o.hij(" ",o.gM2(135,27,e.total,"USD","symbol","1.0-0")," "))},dependencies:[r.O5,r.H9],styles:[".margin-items-button-head[_ngcontent-%COMP%]{margin-left:10px}.title-field[_ngcontent-%COMP%]{font-weight:700;color:#22252f}hr[_ngcontent-%COMP%]{margin-top:0;margin-bottom:10px}p[_ngcontent-%COMP%]{margin-top:0!important;margin-bottom:0rem!important}.main-dashboard-header-right[_ngcontent-%COMP%]{display:flex;align-items:center;margin-top:30px}.icon-container[_ngcontent-%COMP%]{margin-right:10px}.search-container[_ngcontent-%COMP%]{position:relative}input[type=text][_ngcontent-%COMP%]{border-radius:10px;padding:7px;width:350px;text-indent:20px}.icon-lupa[_ngcontent-%COMP%]{position:absolute;top:50%;right:20px;transform:translateY(-50%);width:20px;height:20px;cursor:pointer}.text[_ngcontent-%COMP%]{color:#3a82f7}.card-shadow[_ngcontent-%COMP%]{box-shadow:0 0 12px #0000004d;border-radius:8px;margin-bottom:24px}"]}),t})()}]}];let T=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[c.Bz.forChild(_),c.Bz]}),t})();var A=a(6205),f=a(3333),q=a(2834);let b=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[r.ez,T,A.X,f.IJ,q.z]}),t})()}}]);