import { Component, OnInit } from '@angular/core';
import {
    FormControl,
    FormGroup,
    FormBuilder,
    FormArray,
    Validators,
    ValidatorFn,
    AbstractControl,
} from '@angular/forms';
import { LinksSubsService } from 'src/app/services/links-subs.service';
import { BaseService } from 'src/app/services/base-service.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-link-sub-edit',
    templateUrl: './link-sub-edit.component.html',
    styleUrls: ['./link-sub-edit.component.scss'],
})

export class LinkSubEditComponent implements OnInit {
    diasPago: number[] = [];
    linkSubForm!: FormGroup;
    filesComplement: File[] = [];
    public validate_img: boolean = false;
    widthMin: number = 700;
    heightMin: number = 700;
    id_linksub: any;
    dateF = '23-10-2022';
    get_pr: any[] = [];
    inputValue = new FormControl('');
    total_price: any;
    public taxTypes = [
        { id: 1, description: '19%' },
        { id: 2, description: '0%' }
    ];

    constructor(
        private formGroup: FormBuilder,
        private LinksSubsService: LinksSubsService,
        private baseService: BaseService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.diasPago = Array.from({ length: 25 }, (_, i) => i + 1);
        this.route.params.subscribe((res) => {
            this.id_linksub = res['id'];
        });

        this.linkSubForm = this.formGroup.group({
            // name: ['', [Validators.required]],
            price: ['', [Validators.required]],
            reference: ['', [Validators.required]],
            // payment_day : ['', [Validators.required]],
            description: ['', [Validators.required]],
            tax_type: ['', [Validators.required]],
            total: ['', []],
        });

        this.LinksSubsService.GetLinkSubsById(this.id_linksub).subscribe(
            (LinkSubtdata) => {
                this.GetLinkSubByIdF(LinkSubtdata);
            },
            (error) => {
                this.baseService.GetErrorAuthSesion(error);
            }
        );
    }

    GetLinkSubByIdF(LinkSubtdata) {
        this.linkSubForm.get('description')?.setValue(LinkSubtdata.data.description);
        let sub_total = this.formatInputTotal(LinkSubtdata.data.subtotal);
        this.linkSubForm.get('price')?.setValue(sub_total);
        let total = this.formatInputTotal(LinkSubtdata.data.total);
        this.linkSubForm.get('total')?.setValue(total);
        this.total_price = this.formatInputTotal(LinkSubtdata.data.total);
        this.linkSubForm.get('tax_type')?.setValue(LinkSubtdata.data.tax_id);
        this.linkSubForm.get('reference')?.setValue(LinkSubtdata.data.product_code);
        // this.linkSubForm.get('payment_day')?.setValue(LinkSubtdata.data.payment_day);
    }


    formatInput(event: Event) {
        const inputElement = event.target as HTMLInputElement;
        let numericValue = parseFloat(inputElement.value.replace(/\D/g, '')); // Elimina los caracteres no numéricos

        // Verifica si el valor numérico es válido
        if (isNaN(numericValue)) {
            numericValue = 0;
        }

        // Calculo con tax
        let valu_link_form = this.linkSubForm.value;
        if (valu_link_form.tax_type == '') {
            this.total_price = 0;
        } else {
            if (valu_link_form.tax_type == "1") {
                this.total_price = (numericValue * 19) / 100;
                this.total_price = numericValue + this.total_price;
                this.total_price = this.formatInputTotal(this.total_price);
            } else {
                this.total_price = (numericValue * 0) / 100;
                this.total_price = numericValue + this.total_price;
                this.total_price = this.formatInputTotal(this.total_price);
            }
        }

        // Realiza la conversión a pesos colombianos y actualiza el valor del input
        const formattedValue = numericValue.toLocaleString('es-CO', {
            style: 'currency',
            currency: 'COP',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        });

        this.linkSubForm.get('price')?.setValue(formattedValue, { emitEvent: false });
    }


    CalcTax(event: Event) {
        const inputElement = event.target as HTMLInputElement;
        let price = this.linkSubForm.get('price')?.value.replace(/\D/g, "");
        let tax = inputElement.value;
        if (tax == "1") {
            this.total_price = (parseInt(price) * 19) / 100;
            this.total_price = parseInt(price) + this.total_price;
            this.total_price = this.formatInputTotal(this.total_price);
        } else {
            this.total_price = (parseInt(price) * 0) / 100;
            this.total_price = parseInt(price) + this.total_price;
            this.total_price = this.formatInputTotal(this.total_price);
        }
    }

    formatInputTotal(number) {

        let numericValue = parseFloat(number); // Elimina los caracteres no numéricos

        // Verifica si el valor numérico es válido
        if (isNaN(numericValue)) {
            numericValue = 0;
        }

        // Realiza la conversión a pesos colombianos y actualiza el valor del input
        const formattedValue = numericValue.toLocaleString('es-CO', {
            style: 'currency',
            currency: 'COP',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        });
        return formattedValue;
    }


    submitbutton() {

        const numericValue = this.linkSubForm.get('price')?.value.replace(/\D/g, "");
        this.linkSubForm.get('price')?.setValue(numericValue, { emitEvent: false });

        if (this.linkSubForm.valid) {
            const numericValueTotal = this.total_price.replace(/\D/g, "");
            let values_sub_link_form = this.linkSubForm.value;
            const formDataDocIde = new FormData();
            formDataDocIde.append('codeproduct', values_sub_link_form.reference);
            formDataDocIde.append('description', values_sub_link_form.description);
            formDataDocIde.append('subtotal', values_sub_link_form.price);
            formDataDocIde.append('taxid', values_sub_link_form.tax_type);
            formDataDocIde.append('total', numericValueTotal);
            formDataDocIde.append('_method', 'PUT');
            // formDataDocIde.append('payment_day', values_sub_link_form.payment_day);

            this.LinksSubsService.UpdateSubsLink(formDataDocIde, this.id_linksub).subscribe(
                (result) => {
                    this.router.navigate(['link-sub']).then(() => {
                        // this.show_spinner = false;
                        // window.location.reload();
                    });
                },
                (error) => console.log(error)
            );
        } else {
            for (let i in this.linkSubForm.controls) {
                this.linkSubForm.controls[i].markAsTouched();
            }
        }
    }


}
