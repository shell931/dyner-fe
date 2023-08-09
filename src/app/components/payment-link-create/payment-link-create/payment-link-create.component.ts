import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { NgSelectConfig } from '@ng-select/ng-select';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
import { PaymentLinksService } from 'src/app/services/payment-links.service';
import { Router } from '@angular/router';
import { CurrencyPipe } from '@angular/common';


@Component({
    selector: 'app-payment-link-create',
    templateUrl: './payment-link-create.component.html',
    styleUrls: ['./payment-link-create.component.scss'],

})
export class PaymentLinkCreateComponent implements OnInit {

    linkForm!: FormGroup;
    filesComplement: File[] = [];
    public validate_img: boolean = false;
    widthMin: Number = 700;
    heightMin: Number = 700;
    currencyPipe: CurrencyPipe = new CurrencyPipe('es-CO');
    files: File[] = [];
    MultiseletDropDown: any[] = [];
    MultiseletDropDown1: any[] = [];
    SingleSearchItem = [];
    SingleSearchSettings = {};
    DisableItem = [];
    DisableSettings = {};
    groupDropdown: any[] = [];
    SingleItems = [];
    SingleSettings = {};
    multipleItems = [];
    multipleSettings = {};
    groupItems = [];
    groupSettings = {};
    file: any;
    new_file: any;
    inputValue = new FormControl('');
    total_price : any;

    public taxTypes = [
        { id: 1, description: '19%' },
        { id: 2, description: '0%' }
    ];

    constructor(
        private formGroup: FormBuilder,
        private PaymentLinksService: PaymentLinksService,
        private router: Router,
    ) { }

    ngOnInit(): void {

        this.linkForm = this.formGroup.group({
            // name: ['', [Validators.required]],
            price: ['', [Validators.required]],
            reference: ['', [Validators.required]],
            link_expiration: ['', [Validators.required]],
            description: ['', [Validators.required]],
            tax_type: ['', [Validators.required]],
            total: ['', []],
        });

    }


    get name() { return this.linkForm.get('name'); }

    //START SET EVENT FROM DROPZONE COMPLEMENT
    selectFileComplement(event) {
        if (this.filesComplement.length == 0) {
            this.filesComplement.push(...event.addedFiles);
        }
    }

    onRemoveComplement(event) {
        this.filesComplement.splice(this.filesComplement.indexOf(event), 1);
    }

    onValidatePixels(file: File) {
        return new Promise((resolve, reject) => {
            const Img = new Image();
            Img.src = URL.createObjectURL(file);
            Img.onload = (e: any) => {
                console.log(e);
                const height = e.path[0].height;
                const width = e.path[0].width;
                if (height >= this.heightMin || width >= this.widthMin) {
                    resolve(true);
                }
                resolve(false);
            };
        });

    }

    onSelect(event: any) {
        console.log('ev', event)
        this.files.push(...event.addedFiles);
    }

    onRemove(event: any) {
        this.files.splice(this.files.indexOf(event), 1);
    }
    formatInput(event: Event) {
        const inputElement = event.target as HTMLInputElement;
        let numericValue = parseFloat(inputElement.value.replace(/\D/g, '')); // Elimina los caracteres no numéricos
        // Verifica si el valor numérico es válido
        if (isNaN(numericValue)) {
            numericValue = 0;
        }
        // Calculo con tax
        let valu_link_form = this.linkForm.value;
        if(valu_link_form.tax_type == ''){
            this.total_price = 0;
        }else{
            if(valu_link_form.tax_type == "1"){
                this.total_price = (numericValue * 19)/100;
                this.total_price = numericValue + this.total_price;
                this.total_price = this.formatInputTotal(this.total_price);
            }else{
                this.total_price = (numericValue * 0)/100;
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
        this.linkForm.get('price')?.setValue(formattedValue, { emitEvent: false });
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

    CalcTax(event: Event) {
        const inputElement = event.target as HTMLInputElement;
        let price = this.linkForm.get('price')?.value.replace(/\D/g, "");
        let tax = inputElement.value;
        if(tax == "1"){
            this.total_price = (parseInt(price) * 19)/100;
            this.total_price = parseInt(price) + this.total_price;
            this.total_price = this.formatInputTotal(this.total_price);
        }else{
            this.total_price = (parseInt(price) * 0)/100;
            this.total_price = parseInt(price) + this.total_price;
            this.total_price = this.formatInputTotal(this.total_price);
        }
    }

    submitbutton() {

        const numericValue = this.linkForm.get('price')?.value.replace(/\D/g, "");
        this.linkForm.get('price')?.setValue(numericValue, { emitEvent: false });


        if (this.linkForm.valid) {
            let values_link_form = this.linkForm.value;
            let count_images_to_upload = this.filesComplement.length;
            const numericValueTotal = this.total_price.replace(/\D/g, "");
            var today = new Date();
            for (var i = 0; i < this.filesComplement.length; i++) {
                // get metadata file
                this.file = this.filesComplement[i];
                let type = this.file.type;
                let type_sp = type.split("/");
                let get_type_img = type_sp[1];
                // get millis date now
                var datef = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
                var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                var dateTime = datef + ' ' + time;
                var dates_as_int = [dateTime];
                const dates = dates_as_int.map(datef => new Date(datef).getTime());
                const namefile = 'link-image' + '-' + dates + i + '.' + get_type_img;
                this.new_file = this.renameFile(this.file, namefile);
            }

            const formDataDocIde = new FormData();
            formDataDocIde.append('codeproduct', values_link_form.reference);
            formDataDocIde.append('description', values_link_form.description);
            formDataDocIde.append('subtotal', values_link_form.price);
            formDataDocIde.append('taxid', values_link_form.tax_type);
            formDataDocIde.append('total', numericValueTotal);
            formDataDocIde.append('enddate', values_link_form.link_expiration);
            if (count_images_to_upload > 0) {
                formDataDocIde.append('image', this.new_file);
            }



            this.PaymentLinksService.CreateLink(formDataDocIde).subscribe(
                result => {
                    this.router.navigate(['payment-link']).then(() => {
                        // this.show_spinner = false;
                        // window.location.reload();
                    });

                },
                error => console.log(error)
            );

        } else {
            for (let i in this.linkForm.controls) {
                this.linkForm.controls[i].markAsTouched();
            }
        }

    }


    renameFile(originalFile, newName) {
        return new File([originalFile], newName, {
            type: originalFile.type,
            lastModified: originalFile.lastModified,
        });
    }


}
