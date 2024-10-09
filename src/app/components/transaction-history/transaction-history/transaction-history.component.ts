import { AfterViewInit, Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { AccountStateService } from 'src/app/services/account-state.service';
import { TransactionService } from 'src/app/services/transaction.service';
import { MessagesTxService } from 'src/app/services/messagestx';
import { BaseService } from "src/app/services/base-service.service";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { number } from 'echarts';
import * as XLSX from 'xlsx';



@Component({
    selector: 'app-transaction-history',
    templateUrl: './transaction-history.component.html',
    styleUrls: ['./transaction-history.component.scss']
})
export class TransactionHistoryComponent implements OnInit {

    displayedColumns: string[] = ['referenciatx', 'created_at', 'servicio', 'mediopago', 'num_autorizacion', 'nombre_comprador', 'total', 'descripcion_estado', 'action'];
    displayedColumnstx: string[] = ['mensaje', 'fecha'];
    transaction_list: any[] = [];
    messagetx_list: any[] = [];
    dataSource = new MatTableDataSource<any>(this.transaction_list);
    dataSourcemtx = new MatTableDataSource<any>(this.messagetx_list);
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

    isLoading = false;
    totalRows: number = 0;
    per_page = 0;
    currentPage = 0;
    pageSizeOptions: number[] = [5, 10, 25, 100];
    detailTitle = '';
    detailObject = '';

    startDate: string = "";
    endDate: string = "";

    isExporting = false;

    constructor(
        private transactionService: TransactionService,
        private messageservices: MessagesTxService,
        private baseService: BaseService,
        private changeDetectorRef: ChangeDetectorRef,
        private modalService: NgbModal

    ) { }

    ngOnInit(): void {
        this.transactionService.GetTransactionList(this.currentPage, 'null').subscribe(
            (Alldata) => {
                this.GetTransactionListF(Alldata)
            },
            error => {
                this.baseService.GetErrorAuthSesion(error)
            }
        );
    }

    exportToExcel(): void {
        this.isExporting = true;

        if (this.startDate && this.endDate) {
            this.transactionService.GetExportReportTransaction(this.startDate, this.endDate).subscribe(data => {
                const formattedData = data.map(item => ({
                    REFERENCIA: item.referenciatx,
                    BIN: item.bin,
                    NUM_TARJETA: item.num_tarjeta,
                    COMERCIO: item.nombre,
                    FECHA: item.created_at,
                    NOMBRE: item.nombreth,
                    NUM_IDENTIFICACION: item.num_identificacion,
                    CELULAR: item.celular,
                    CORREO: item.correo,
                    IP: item.ip,
                    TRESDS: item.threeds,
                    ESTADO: item.estadotx,
                    FRANQUICIA: item.franquicia,
                    ENTIDAD_PAGO: item.provtransaccional,
                    TOTAL: item.total,
                    DESCUENTO: item.total_descuento,
                    ABONO: item.total_abono,
                    COD_RESPUESTA: item.cod_respuesta,
                    RESP_MENSAJE: item.resp_banco,
                    NUM_AUTORIZACION: item.num_autoriza_cadena,
                    SERVICIO: item.servicio,
                    CU: item.codigounico
                }));

                const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(formattedData);
                const workbook: XLSX.WorkBook = XLSX.utils.book_new();
                XLSX.utils.book_append_sheet(workbook, worksheet, 'DataSheet');
                XLSX.writeFile(workbook, 'DataExport.xlsx');
                this.isExporting = false;
            });
        } else {
            alert('Por favor, selecciona un rango de fechas.');
        }
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    loadData() {
        this.transactionService
            .GetTransactionList(this.currentPage, 'null')
            .subscribe((TransactionListdata) => {
                this.GetTransactionListF(TransactionListdata);
            });
    }

    pageChanged(event: PageEvent) {
        this.per_page = event.pageSize;
        this.currentPage = event.pageIndex;
        this.loadData();
    }

    GetTransactionListF(TransactionListdata) {
        this.transaction_list = TransactionListdata.data.data;
        this.totalRows = TransactionListdata.data.total;
        this.per_page = TransactionListdata.data.per_page;
        this.dataSource = new MatTableDataSource<any>(this.transaction_list);
        this.changeDetectorRef.detectChanges();
        this.dataSource.sort = this.sort;

    }

    GetMessagetxListF(TransactionMessageData) {
        console.log(TransactionMessageData);
        this.messagetx_list = TransactionMessageData.mensajes;
        this.dataSourcemtx = new MatTableDataSource<any>(this.messagetx_list);
    }


    public openMessageTx(modal: any, id: number,) {
        this.messageservices
            .GetMessagesTxList(id)
            .subscribe((Alldata) => {
                this.GetMessagetxListF(Alldata)
            },
                error => {
                    this.baseService.GetErrorAuthSesion(error)
                });
        this.modalService.open(modal, {
            centered: true,
            windowClass: 'animate__animated animate__zoomIn',
        });
    }

    gridOpen(gridModal: any, modalTitle: string, datailObject: string) {
        this.modalService.open(gridModal, { size: 'sm' });
        this.detailTitle = modalTitle;
        this.detailObject = datailObject;
    }





}
