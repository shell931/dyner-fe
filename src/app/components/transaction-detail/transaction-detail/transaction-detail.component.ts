import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TransactionService } from 'src/app/services/transaction.service';
import { BaseService } from "src/app/services/base-service.service";

@Component({
    selector: 'app-transaction-detail',
    templateUrl: './transaction-detail.component.html',
    styleUrls: ['./transaction-detail.component.scss']
})
export class TransactionDetailComponent implements OnInit {

    id_transaction: any;
    service_type: any;
    referenciatx: any;
    num_autorizacion: any;
    descripcion: any;
    nombre_comprador: any;
    correo: any;
    cuotas: any;
    cod_respuesta: any;
    resp_banco: any;
    created_at: any;
    total: any;
    id_estado: any;
    descripcion_estado: any;
    id_cliente: any;
    servicio: any;
    num_tarjeta: any;
    franquicia: any;
    comision_ps: any;
    val_comision_ps: any;
    val_rete_ica: any;
    val_comision_adi_ps: any;
    val_rete_fuente: any;
    val_impuesto_comision: any;
    total_descuento: any;
    total_abono: any;
    metodopago: any;
    celular:any;


    constructor(
        private route: ActivatedRoute,
        private transactionService: TransactionService,
        private baseService: BaseService,
    ) { }

    ngOnInit(): void {


        this.route.params.subscribe(res => {
            this.id_transaction = res['id'];
            this.servicio = res['service'];
        })

        this.transactionService.GetTransactionById(this.id_transaction,this.servicio).subscribe(

            (transaction_data) => {
                this.GetTransactionByIdF(transaction_data)
            },
            error => {
                this.baseService.GetErrorAuthSesion(error)
            }
        );
    }

    GetTransactionByIdF(transaction_data){
        console.log(transaction_data);

        this.referenciatx = transaction_data.data.transaction.referenciatx;
        this.num_autorizacion = transaction_data.data.transactiond.num_autorizacion;
        this.descripcion = transaction_data.data.transaction.descripcion;
        this.nombre_comprador = transaction_data.data.transactiond.nombre_comprador;
        this.correo = transaction_data.data.transaction.correo;
        this.cuotas = transaction_data.data.transaction.cuotas;
        this.cod_respuesta = transaction_data.data.transaction.cod_respuesta;
        this.resp_banco = transaction_data.data.transaction.resp_banco;
        this.created_at = transaction_data.data.transaction.created_at;
        this.total = transaction_data.data.transaction.total;
        this.id_estado = transaction_data.data.transaction.id_estado;
        this.descripcion_estado = transaction_data.data.transactiond.descripcion_estado;
        this.id_cliente = transaction_data.data.transaction.id_cliente;
        this.servicio = transaction_data.data.transaction.servicio;
        this.num_tarjeta = transaction_data.data.transaction.num_tarjeta;
        this.franquicia = transaction_data.data.transaction.franquicia;
        this.comision_ps = transaction_data.data.transaction.comision_ps;
        this.val_comision_ps = transaction_data.data.transaction.val_comision_ps;
        this.val_rete_ica = transaction_data.data.transaction.val_rete_ica;
        this.val_comision_adi_ps = transaction_data.data.transaction.val_comision_adi_ps;
        this.val_rete_fuente = transaction_data.data.transaction.val_rete_fuente;
        this.val_impuesto_comision = transaction_data.data.transactiond.val_impuesto_comision;
        this.total_descuento = transaction_data.data.transaction.total_descuento;
        this.total_abono = transaction_data.data.transaction.total_abono;
        this.metodopago= transaction_data.data.transactiond.payment_metod;
        this.celular= transaction_data.data.transaction.celular;
    }

}
