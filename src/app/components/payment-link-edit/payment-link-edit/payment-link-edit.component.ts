import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { PaymentLinksService } from 'src/app/services/payment-links.service';
import { BaseService } from "src/app/services/base-service.service";
import { Router, ActivatedRoute, Params } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-payment-link-edit',
    templateUrl: './payment-link-edit.component.html',
    styleUrls: ['./payment-link-edit.component.scss']
})
export class PaymentLinkEditComponent implements OnInit {

    linkForm: FormGroup;
    filesComplement: File[] = [];
    public validate_img: boolean = false;
    widthMin: Number = 700;
    heightMin: Number = 700;
    id_link: any;
    dateF = "23-10-2022";
    get_id_image: any[] = [];
    get_pr: any[] = [];
    linkImage = environment.api.linkImage;
    Image: any;
    file: any;
    new_file: any;
    validate_image: boolean = true;

    constructor(
        private formGroup: FormBuilder,
        private PaymentLinksService: PaymentLinksService,
        private baseService: BaseService,
        private route: ActivatedRoute,
        private router: Router,
    ) { }

    ngOnInit(): void {

        this.route.params.subscribe(res => {
            this.id_link = res['id'];
        })

        this.linkForm = this.formGroup.group({
            // name: ['', [Validators.required]],
            price: ['', [Validators.required]],
            reference: ['', [Validators.required]],
            link_expiration: ['', [Validators.required]],
            description: ['', [Validators.required]],
        });

        this.PaymentLinksService.GetLinkById(this.id_link).subscribe(
            (Linktdata) => {
                this.GetLinkByIdF(Linktdata)
            },
            error => {
                this.baseService.GetErrorAuthSesion(error)
            }
        );
    }


    GetLinkByIdF(Linktdata) {
        this.linkForm.get('description')?.setValue(Linktdata.data.descripcion)
        this.linkForm.get('price')?.setValue(Math.trunc(Linktdata.data.total))
        this.linkForm.get('reference')?.setValue(Linktdata.data.cod_producto)
        this.linkForm.get('link_expiration')?.patchValue(this.formatDate(Linktdata.data.end_date));
        this.Image = Linktdata.data.image;
        if (this.Image == null || this.Image == "") {
            this.validate_image = false;
        }
    }

    submitbutton() {
        if (this.linkForm.valid) {
            let values_link_form = this.linkForm.value;
            let count_images_to_upload = this.filesComplement.length;

            for (var i = 0; i < this.filesComplement.length; i++) {
                this.file = this.filesComplement[i];
                this.new_file = this.renameFile(this.file, this.Image);
            }

            const formDataDocIde = new FormData();
            formDataDocIde.append('codeproduct', values_link_form.reference);
            formDataDocIde.append('description', values_link_form.description);
            formDataDocIde.append('subtotal', values_link_form.price);
            formDataDocIde.append('taxid', '2');
            formDataDocIde.append('total', values_link_form.price);
            if (count_images_to_upload > 0) {
                formDataDocIde.append('image', this.new_file);
            }
            formDataDocIde.append('_method', 'PUT');
            formDataDocIde.append('enddate', values_link_form.link_expiration);

            this.PaymentLinksService.UpdateLink(formDataDocIde, this.id_link).subscribe(
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
        let index = this.filesComplement.length != event.addedFiles ? 0 : this.filesComplement.length;
        event.addedFiles.map((item) => {
            this.onValidatePixels(item)
                .then((value) => {
                    if (value) {
                        this.filesComplement.push(item);
                    } else {
                        this.validate_img = true;
                    }
                });
        });
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
