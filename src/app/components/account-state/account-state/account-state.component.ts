import { Component, OnInit } from '@angular/core';
import { AccountStateService } from 'src/app/services/account-state.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BaseService } from "src/app/services/base-service.service";
import * as dashboardData from '../../../shared/data/dashboard/dashboard'


@Component({
    selector: 'app-account-state',
    templateUrl: './account-state.component.html',
    styleUrls: ['./account-state.component.scss']
})
export class AccountStateComponent implements OnInit {

    total_transfer: number = 0;
    links_total_transfer: number = 0;
    payment_buttons_total_transfer: number = 0;
    checkout_buttons_total_transfer: number = 0;
    

    constructor(
        private AccountStateService: AccountStateService,
        private router: Router,
        private baseService : BaseService
    ) { }

    dataSource = dashboardData.data;

    public statusData:any = dashboardData.StatusData;
    public orderData:any = dashboardData.OrderData;
    public recentCustomersData: any = dashboardData.RecentCustomersData;
    public recentCustomersData1: any = dashboardData.RecentCustomersData1;
    public recentCustomersData2: any = dashboardData.RecentCustomersData2;
    public recentCustomersData3: any = dashboardData.RecentCustomersData3;
    public recentCustomersData4: any = dashboardData.RecentCustomersData4;
    public recentCustomersData5: any = dashboardData.RecentCustomersData5;

    public apexSparkline: any = dashboardData.apexSparkline;
    public apexSparkline1: any = dashboardData.apexSparkline1;
    public apexSparkline2: any = dashboardData.apexSparkline2;
    public apexSparkline3: any = dashboardData.apexSparkline3;
    public apexSparkline4: any = dashboardData.apexSparkline4;

    ngOnInit(): void {
        this.AccountStateService.GetAllTransferBalance().subscribe(
            (Alldata) => {
                this.GetAllTransferBalanceF(Alldata)
            },
            error => {
                this.baseService.GetErrorAuthSesion(error)
            }
        );      
    }

    GetAllTransferBalanceF(Alldata) {        
        console.log(Alldata.data.links_total_transfer);
        this.total_transfer = Alldata.data.totalTransfer; 
        this.links_total_transfer = Alldata.data.links_total_transfer; 
        this.payment_buttons_total_transfer = Alldata.data.payment_buttons_total_transfer; 
        this.checkout_buttons_total_transfer = Alldata.data.checkout_buttons_total_transfer; 
        
        
    }


}
