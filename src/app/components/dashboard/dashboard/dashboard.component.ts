import {
    AfterViewInit,
    Component,
    OnInit,
    ViewChild,
    ChangeDetectorRef,
} from '@angular/core';
import * as dashboardData from '../../../shared/data/dashboard/dashboard';
import { AccountStateService } from 'src/app/services/account-state.service';
import { BaseService } from 'src/app/services/base-service.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MessagesTxService } from 'src/app/services/messagestx';
import { MatTableDataSource } from '@angular/material/table';
import { PaymentLinksService } from 'src/app/services/payment-links.service';


import { TransactionService } from 'src/app/services/transaction.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})




export class DashboardComponent implements OnInit {
    displayedColumns: string[] = [
        'referenciatx',
        'created_at',
        'servicio',
        'mediopago',
        'num_autorizacion',
        'nombre_comprador',
        'total',
        'descripcion_estado',
        'action',
        //'descripcion',
    ];
    displayedColumnstx: string[] = ['mensaje', 'fecha'];
    width = '100%';
    height = 400;
    type = 'usa';
    name_client: any = '';
    dataFormat = 'json';
    // dataSource = dashboardData.data;
    total_transfer: number = 0;
    links_total_transfer: number = 0;
    payment_buttons_total_transfer: number = 0;
    checkout_buttons_total_transfer: number = 0;

    capital_total_sum_service: number = 0;
    dispo_total_sum_service: number = 0;
    en_transfe_total_sum_service: number = 0;

    total_detail: Array<any> = [];

    messagetx_list: any[] = [];
    transaction_list: any[] = [];
    dataSourcemtx = new MatTableDataSource<any>(this.messagetx_list);
    dataSource = new MatTableDataSource<any>(this.transaction_list);

    isLoading = false;
    totalRows: number = 0;
    per_page = 0;
    currentPage = 0;
    pageSizeOptions: number[] = [5, 10, 25, 100];


    detailTitle = '';
    detailObject = '';
    // dataSource: MatTableDataSource<UserData>;

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

    constructor(
        private AccountStateService: AccountStateService,
        private router: Router,
        private baseService: BaseService,
        private profileService: ProfileService,
        private messageservices: MessagesTxService,

        private PaymentLinksService: PaymentLinksService,
        private transactionService: TransactionService,
        private changeDetectorRef: ChangeDetectorRef,
        private modalService: NgbModal
    ) { }


    public statusData: any = dashboardData.StatusData;
    public orderData: any = dashboardData.OrderData;
    public recentCustomersData: any = dashboardData.RecentCustomersData;
    public recentCustomersData1: any = dashboardData.RecentCustomersData1;
    public recentCustomersData2: any = dashboardData.RecentCustomersData2;
    public recentCustomersData3: any = dashboardData.RecentCustomersData3;
    public recentCustomersData4: any = dashboardData.RecentCustomersData4;
    public recentCustomersData5: any = dashboardData.RecentCustomersData5;

    //Sparkline using ApexCharts
    public apexSparkline: any = dashboardData.apexSparkline;
    public apexSparkline1: any = dashboardData.apexSparkline1;
    public apexSparkline2: any = dashboardData.apexSparkline2;
    public apexSparkline3: any = dashboardData.apexSparkline3;
    public apexSparkline4: any = dashboardData.apexSparkline4;

    ngOnInit(): void {
        this.AccountStateService.GetTotalSumTransactions().subscribe(
            (Alldata: any) => {
                this.GetTotalSumTransactionsF(Alldata);
                this.total_detail = Alldata?.data;
                this.profileService
                    .GetProfileData()
                    .subscribe((res) => this.GetProfileDataF(res));
                this.transactionService
                    .GetTransactionList(this.currentPage)
                    .subscribe((TransactionListdata) => {
                        this.GetTransactionListF(TransactionListdata);
                    });
            },
            (error) => {
                this.baseService.GetErrorAuthSesion(error);
            }
        );
    }


    loadData() {
        this.transactionService
            .GetTransactionList(this.currentPage)
            .subscribe((TransactionListdata) => {
                this.GetTransactionListF(TransactionListdata);
            });
    }

    pageChanged(event: PageEvent) {
        this.per_page = event.pageSize;
        this.currentPage = event.pageIndex;
        this.loadData();
    }

    GetTotalSumTransactionsF(Alldata) {
        //console.log(Alldata);
        //console.log('data: ', JSON.stringify(Alldata));


        this.capital_total_sum_service = Alldata.data.capital_total_sum_service;
        this.dispo_total_sum_service = Alldata.data.dispo_total_sum_service;
        this.en_transfe_total_sum_service =
            Alldata.data.en_transfe_total_sum_service;
    }

    GetProfileDataF(ProfileData) {
        // console.log(ProfileData.data.user.client.nombre);
        this.name_client = ProfileData.data.user.client.nombre;
    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    GetTransactionListF(TransactionListdata) {
        console.log(TransactionListdata);

        /* if (TransactionListdata && TransactionListdata.data && TransactionListdata.data.data) {
            TransactionListdata.data.data.forEach(transaccion => {
                console.log('Estado de la transacción:', JSON.stringify(transaccion.descripcion_estado));
            });
        } else {
            console.log('No se encontraron datos de transacciones.');
        } */
        this.transaction_list = TransactionListdata.data.data;
        this.totalRows = TransactionListdata.data.total;
        this.per_page = TransactionListdata.data.per_page;
        this.dataSource = new MatTableDataSource<any>(this.transaction_list);
        this.changeDetectorRef.detectChanges();
        this.dataSource.sort = this.sort;
    }

    gridOpen(gridModal: any, modalTitle: string, datailObject: string) {
        this.modalService.open(gridModal, { size: 'lg' });
        this.detailTitle = modalTitle;
        this.detailObject = datailObject;
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
}
