import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { NgSelectConfig } from '@ng-select/ng-select';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
import { PaymentLinksService } from 'src/app/services/payment-links.service';
import { Router } from '@angular/router';


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
        });

    }


    get name() { return this.linkForm.get('name'); }

    //START SET EVENT FROM DROPZONE COMPLEMENT
    selectFileComplement(event) {
        if(this.filesComplement.length == 0){
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
        console.log('ev',event)
        this.files.push(...event.addedFiles);
    }

    onRemove(event: any) {
        this.files.splice(this.files.indexOf(event), 1);
    }


    submitbutton() {
        if (this.linkForm.valid) {
            let values_link_form = this.linkForm.value;
            let count_images_to_upload = this.filesComplement.length;
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
            formDataDocIde.append('taxid', '2');
            formDataDocIde.append('total', values_link_form.price);
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
