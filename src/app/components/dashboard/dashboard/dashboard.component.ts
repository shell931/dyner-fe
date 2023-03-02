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
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

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
    'servicio',
    'referenciatx',
    'num_autorizacion',
    'created_at',
    'descripcion',
    'nombre_comprador',
    'total',
    'descripcion_estado',
    'action',
  ];

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

  transaction_list: any[] = [];
  dataSource = new MatTableDataSource<any>(this.transaction_list);

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

    private PaymentLinksService: PaymentLinksService,
    private transactionService: TransactionService,
    private changeDetectorRef: ChangeDetectorRef,
    private modalService: NgbModal
  ) {}

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
          .GetTransactionList()
          .subscribe((TransactionListdata) => {
            this.GetTransactionListF(TransactionListdata);
          });
      },
      (error) => {
        this.baseService.GetErrorAuthSesion(error);
      }
    );
  }

  GetTotalSumTransactionsF(Alldata) {
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

    this.transaction_list = TransactionListdata.data;
    this.dataSource = new MatTableDataSource<any>(this.transaction_list);
    this.changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    setTimeout(() => {
      this.dataSource.paginator = this.paginator;
    }, 0);
  }

  gridOpen(gridModal: any, modalTitle: string, datailObject: string) {
    this.modalService.open(gridModal, { size: 'lg' });
    this.detailTitle = modalTitle;
    this.detailObject = datailObject;
  }
}
