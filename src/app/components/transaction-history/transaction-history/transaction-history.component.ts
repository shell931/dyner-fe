import { AfterViewInit, Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { AccountStateService } from 'src/app/services/account-state.service';
import { TransactionService } from 'src/app/services/transaction.service';
import { BaseService } from "src/app/services/base-service.service";

@Component({
    selector: 'app-transaction-history',
    templateUrl: './transaction-history.component.html',
    styleUrls: ['./transaction-history.component.scss']
})
export class TransactionHistoryComponent implements OnInit {

    displayedColumns: string[] = ['servicio', 'referenciatx', 'num_autorizacion', 'created_at', 'descripcion', 'nombre_comprador', 'total', 'descripcion_estado', 'action'];
    transaction_list: any[] = [];
    dataSource = new MatTableDataSource<any>(this.transaction_list);

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;


    constructor(
        private transactionService: TransactionService,
        private baseService: BaseService,
        private changeDetectorRef: ChangeDetectorRef,

    ) { }

    ngOnInit(): void {
        this.transactionService.GetTransactionList().subscribe(
            (Alldata) => {
                this.GetTransactionListF(Alldata)
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

    GetTransactionListF(TransactionListdata) {
        console.log(TransactionListdata);
        
        this.transaction_list = TransactionListdata.data;
        this.dataSource = new MatTableDataSource<any>(this.transaction_list);
        this.changeDetectorRef.detectChanges();
        this.dataSource.paginator = this.paginator;
        setTimeout(() => {
        	this.dataSource.paginator = this.paginator;
        }, 0)

    }

}
