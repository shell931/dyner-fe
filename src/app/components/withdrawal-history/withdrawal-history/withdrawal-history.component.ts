import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { BaseService } from "src/app/services/base-service.service";
import { WithdrawalService } from "src/app/services/withdrawal.service";


@Component({
    selector: 'app-withdrawal-history',
    templateUrl: './withdrawal-history.component.html',
    styleUrls: ['./withdrawal-history.component.scss']
})
export class WithdrawalHistoryComponent implements OnInit {

    displayedColumns: string[] = ['referencia', 'num_cuenta', 'val_solicitado', 'val_transferido', 'created_at', 'status'];
    withdrawal_list: any[] = [];
    dataSource = new MatTableDataSource<any>(this.withdrawal_list);

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

    constructor(
        private withdrawalService: WithdrawalService,
        private baseService: BaseService,
        private changeDetectorRef: ChangeDetectorRef,
    ) { }
z
    ngOnInit(): void {
        this.withdrawalService.GetWithdrawalList().subscribe(
            (Alldata) => {
                this.GetWithdrawalListF(Alldata)
            },
            error => {
                this.baseService.GetErrorAuthSesion(error)
            }
        );
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    GetWithdrawalListF(WithdrawalListdata) {
        console.log(WithdrawalListdata);
        
        this.withdrawal_list = WithdrawalListdata.data.data;
        this.dataSource = new MatTableDataSource<any>(this.withdrawal_list);
        this.changeDetectorRef.detectChanges();
        this.dataSource.paginator = this.paginator;
        setTimeout(() => {
        	this.dataSource.paginator = this.paginator;
        }, 0)
    }

}
