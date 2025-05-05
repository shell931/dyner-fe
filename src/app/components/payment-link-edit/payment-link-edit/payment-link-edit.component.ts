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
import { PaymentLinksService } from 'src/app/services/payment-links.service';
import { BaseService } from 'src/app/services/base-service.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CurrencyPipe } from '@angular/common';


@Component({
    selector: 'app-payment-link-edit',
    templateUrl: './payment-link-edit.component.html',
    styleUrls: ['./payment-link-edit.component.scss'],
})
export class PaymentLinkEditComponent implements OnInit {
    linkForm!: FormGroup;
    filesComplement: File[] = [];
    public validate_img: boolean = false;
    widthMin: number = 700;
    heightMin: number = 700;
    id_link: any;
    dateF = '23-10-2022';
    get_id_image: any[] = [];
    get_pr: any[] = [];
    linkImage = environment.api.linkImage;
    Image: any;
    file: any;
    new_file: any;
    validate_image: boolean = true;
    inputValue = new FormControl('');
    total_price: any;

    public taxTypes = [
        { id: 1, description: '19%' },
        { id: 2, description: '0%' }
    ];

    constructor(
        private formGroup: FormBuilder,
        private PaymentLinksService: PaymentLinksService,
        private baseService: BaseService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.route.params.subscribe((res) => {
            this.id_link = res['id'];
        });

        this.linkForm = this.formGroup.group({
            // name: ['', [Validators.required]],
            price: ['', [Validators.required]],
            reference: ['', [Validators.required]],
            link_expiration: ['', [Validators.required]],
            description: ['', [Validators.required]],
            tax_type: ['', [Validators.required]],
            total: ['', []],
        });

        this.PaymentLinksService.GetLinkById(this.id_link).subscribe(
            (Linktdata) => {
                this.GetLinkByIdF(Linktdata);
            },
            (error) => {
                this.baseService.GetErrorAuthSesion(error);
            }
        );
    }

    GetLinkByIdF(Linktdata) {
        this.linkForm.get('description')?.setValue(Linktdata.data.descripcion);
        // this.linkForm.get('price')?.setValue(Math.trunc(Linktdata.data.subtotal));
        let sub_total = this.formatInputTotal(Linktdata.data.subtotal);
        this.linkForm.get('price')?.setValue(sub_total);
        this.linkForm.get('tax_type')?.setValue(Linktdata.data.tax.id);
        // this.linkForm.get('total')?.setValue(Math.trunc(Linktdata.data.total));
        let total = this.formatInputTotal(Linktdata.data.total);
        this.linkForm.get('total')?.setValue(total);
        this.total_price = this.formatInputTotal(Linktdata.data.total);
        this.linkForm.get('reference')?.setValue(Linktdata.data.cod_producto);
        this.linkForm
            .get('link_expiration')
            ?.patchValue(this.formatDate(Linktdata.data.end_date));
        this.Image = Linktdata.data.image;
        if (this.Image == null || this.Image == '') {
            this.validate_image = false;
        }
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

    submitbutton() {

        const numericValue = this.linkForm.get('price')?.value.replace(/\D/g, "");
        this.linkForm.get('price')?.setValue(numericValue, { emitEvent: false });

        // const numericValueTotal = this.linkForm.get('total')?.value.replace(/\D/g, "");
        // this.linkForm.get('total')?.setValue(numericValue, { emitEvent: false });

        if (this.linkForm.valid) {
            let values_link_form = this.linkForm.value;
            let count_images_to_upload = this.filesComplement.length;
            const numericValueTotal = this.total_price.replace(/\D/g, "");
            for (var i = 0; i < this.filesComplement.length; i++) {
                this.file = this.filesComplement[i];
                this.new_file = this.renameFile(this.file, this.Image);
            }

            const formDataDocIde = new FormData();
            formDataDocIde.append('codeproduct', values_link_form.reference);
            formDataDocIde.append('description', values_link_form.description);
            formDataDocIde.append('subtotal', values_link_form.price);
            formDataDocIde.append('taxid', values_link_form.tax_type);
            formDataDocIde.append('total', numericValueTotal);
            if (count_images_to_upload > 0) {
                formDataDocIde.append('image', this.new_file);
            }
            formDataDocIde.append('_method', 'PUT');
            formDataDocIde.append('enddate', values_link_form.link_expiration);

            this.PaymentLinksService.UpdateLink(
                formDataDocIde,
                this.id_link
            ).subscribe(
                (result) => {
                    this.router.navigate(['payment-link']).then(() => {
                        // this.show_spinner = false;
                        // window.location.reload();
                    });
                },
                (error) => console.log(error)
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

    private formatDate(date) {
        const d = new Date(date);
        let month = '' + (d.getMonth() + 1);
        let day = '' + d.getDate();
        const year = d.getFullYear();
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;
        return [year, month, day].join('-');
    }

    selectFileComplement(event) {
        this.validate_img = false;
        event.addedFiles.map((item) => {
            this.filesComplement.push(item);
            /* this.onValidatePixels(item).then((value) => {
              if (value) {
                this.filesComplement.push(item);
              } else {
                this.validate_img = true;
              }
            }); */
        });
    }

    onRemoveComplement(event) {
        this.filesComplement.splice(this.filesComplement.indexOf(event), 1);
    }

    onValidatePixels(file: File) {
        return new Promise((resolve, reject) => {
            let reader = new FileReader();
            if (file) {
                const img = new Image();
                img.src = window.URL.createObjectURL(file);
                reader.readAsDataURL(file);
                reader.onload = () => {
                    const width = img.naturalWidth;
                    const height = img.naturalHeight;
                    window.URL.revokeObjectURL(img.src);
                    if (width <= this.widthMin && height <= this.heightMin) {
                        resolve(true);
                    }
                    resolve(false);
                };
            }
        });
    }

    deleteProduct(i) {
        this.get_id_image.push(i.id_image);
        let galery = this.get_pr;
        this.get_pr = [];
        for (var a = 0; a < galery.length; a++) {
            if (galery[a].id_image != i.id_image) {
                this.get_pr.push({
                    id_image: galery[a].id_image,
                    image: galery[a].image,
                });
            }
        }
    }
}
