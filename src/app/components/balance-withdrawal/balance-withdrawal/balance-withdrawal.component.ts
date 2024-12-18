import { Component, OnInit } from '@angular/core';
import { AccountStateService } from 'src/app/services/account-state.service';
import { BaseService } from 'src/app/services/base-service.service';
import { WithdrawalService } from 'src/app/services/withdrawal.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
    selector: 'app-balance-withdrawal',
    templateUrl: './balance-withdrawal.component.html',
    styleUrls: ['./balance-withdrawal.component.scss'],
})
export class BalanceWithdrawalComponent implements OnInit {
    selectedItemsList: any;
    checkboxesDataList: any = [];
    totalTransfer: number = 0;
    discount: number = 0;
    cuatropormil: number = 0;
    commissionTransfer: number = 0;
    account: any[] = [];
    bankImage = environment.api.bankImage;
    public validate_account_select: boolean = false;
    public validate_account_grater: boolean = false;
    public validate_last_transfer: boolean = false;
    list: any[] = [];
    clicked = false;

    constructor(
        private AccountStateService: AccountStateService,
        private baseService: BaseService,
        private withdrawalService: WithdrawalService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.AccountStateService.GetAllTransferBalance().subscribe(
            (Alldata) => {
                this.GetAllTransferBalanceF(Alldata);
            },
            (error) => {
                this.baseService.GetErrorAuthSesion(error);
            }
        );
    }

    GetAllTransferBalanceF(Alldata) {
        console.log(Alldata);

        // this.selectedIndex = 0;
        this.totalTransfer = Alldata.data.totalTransfer;
        this.discount = Alldata.data.discount;
        this.cuatropormil = Alldata.data.cuatropormil;
        this.account = Alldata.data.bankAccounts;
        this.commissionTransfer = Alldata.data.commissionTransfer;
        for (var i = 0; i < Alldata.data.bankAccounts.length; i++) {
            this.checkboxesDataList.push({
                id_cuenta: Alldata.data.bankAccounts[i].id_cuenta,
                num_cuenta: Alldata.data.bankAccounts[i].num_cuenta,
                isChecked: false,
                bank: Alldata.data.bankAccounts[i].bank,
            });
        }

    }

    selectedIndex: number = 1000000;
    event: boolean = false;
    changeSelectiontwo(event, index, id_cuenta) {
        this.selectedIndex = event.target.checked ? index : undefined;
        this.selectedItemsList = id_cuenta;
        this.event = event.target.checked;
    }

    submitbutton() {
        this.clicked = true;
        this.validate_account_grater = false;
        if (this.totalTransfer < 1) {
            this.validate_account_grater = true;
            this.clicked = false;
        } else {
            this.validate_account_select = false;
            if (this.event == false) {
                this.validate_account_select = true;
                this.clicked = false;
            } else {
                this.validate_last_transfer = false;
                // this.withdrawalService.GetLastTransfersTime().subscribe((result) => {
                //     if (result['data'].valid == false) {
                //         this.validate_last_transfer = true;
                //         this.clicked = false;
                //     } else {
                this.clicked = true;
                let myObjWithdrawal = {
                    accountId: this.selectedItemsList,
                    availableBalance: this.totalTransfer,
                    totalTransfer: this.totalTransfer,
                    cuatropormil: this.cuatropormil,
                    preventionFund: 0,
                    // commissionTransfer: this.discount,
                    commissionTransfer: this.commissionTransfer,
                };



                this.withdrawalService
                    .CreateWithdrawal(myObjWithdrawal)
                    .subscribe((result: any) => {
                        console.log('result', result);
                        this.router
                            .navigate(['balance-withdrawal-response'], { queryParams: { reference: result?.data?.referencia } })
                            .then(() => {
                                // this.show_spinner = false;
                                // window.location.reload();
                            });
                    });
                //     }
                // });
            }
        }
    }
}
