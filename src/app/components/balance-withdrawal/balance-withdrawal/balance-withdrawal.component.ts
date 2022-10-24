import { Component, OnInit } from '@angular/core';
import { AccountStateService } from 'src/app/services/account-state.service';
import { BaseService } from "src/app/services/base-service.service";
import { WithdrawalService } from "src/app/services/withdrawal.service";
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
    selector: 'app-balance-withdrawal',
    templateUrl: './balance-withdrawal.component.html',
    styleUrls: ['./balance-withdrawal.component.scss']
})
export class BalanceWithdrawalComponent implements OnInit {

    selectedItemsList: any;
    checkboxesDataList: any = [];
    totalTransfer: number = 0;
    discount: number = 0;
    cuatropormil: number = 0;
    account: any[] = [];
    bankImage = environment.api.bankImage;
    public validate_account_select: boolean = false;

    list: any[] = [];

    constructor(
        private AccountStateService: AccountStateService,
        private baseService: BaseService,
        private withdrawalService: WithdrawalService,
        private router: Router,
    ) { }

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
        // this.selectedIndex = 0;
        this.totalTransfer = Alldata.data.totalTransfer;
        this.discount = Alldata.data.discount;
        this.cuatropormil = Alldata.data.cuatropormil;
        this.account = Alldata.data.bankAccounts;
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
        console.log(this.selectedItemsList);
        console.log(this.event);
        this.validate_account_select = false;
        if (this.event == false) {
            this.validate_account_select = true;
        } else {
            let myObjWithdrawal = {
                "accountId": this.selectedItemsList,
                "availableBalance": this.totalTransfer,
                "totalTransfer": this.totalTransfer,
                "cuatropormil": this.cuatropormil,
                "preventionFund": 0,
                "commissionTransfer": this.discount
            };
            
            this.withdrawalService.CreateWithdrawal(myObjWithdrawal).subscribe(
                result => {
                    // console.log(result);
                    this.router.navigate(['balance-withdrawal-response']).then(() => {
                        // this.show_spinner = false;
                        // window.location.reload();
                    });
                    
                }
            );

        }

    }
}
