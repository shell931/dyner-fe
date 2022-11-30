import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PaymentLinksService } from 'src/app/services/payment-links.service';
import { BaseService } from "src/app/services/base-service.service";
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-payment-link-detail',
    templateUrl: './payment-link-detail.component.html',
    styleUrls: ['./payment-link-detail.component.scss']
})
export class PaymentLinkDetailComponent implements OnInit {


    id_link: any;
    description: any;
    price: any;
    reference: any;
    link_expiration: any;
    Image: any;
    url_link: any;
    validate_image: boolean = true;
    linkImage = environment.api.linkImage;
    gatewayUrl = environment.api.gatewayUrl+'linkpay/';
    labelPosition: 'before' | 'after' = 'after';
    public validate_copy: boolean = false;
    public validate_copy_button: boolean = false;

    constructor(
        private route: ActivatedRoute,
        private PaymentLinksService: PaymentLinksService,
        private baseService: BaseService,
    ) { }

    ngOnInit(): void {

        this.route.params.subscribe(res => {
            this.id_link = res['id'];
        })

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
        console.log(Linktdata);

        this.description = Linktdata.data.descripcion;
        this.price = Linktdata.data.total;
        this.reference = Linktdata.data.cod_producto;
        this.link_expiration = Linktdata.data.end_date;
        this.Image = Linktdata.data.image;
        this.url_link = this.gatewayUrl+Linktdata.data.url_link;

        if (this.Image == null || this.Image == "") {
            this.validate_image = false;
        }
    }

    copyInputMessage(inputElement) {
        this.validate_copy = false;
        inputElement.select();
        document.execCommand('copy');
        inputElement.setSelectionRange(0, 0);
        this.validate_copy = true;
    }

    copyInputMessageButton(inputElement) {
        this.validate_copy_button = false;
        inputElement.select();
        document.execCommand('copy');
        inputElement.setSelectionRange(0, 0);
        this.validate_copy_button = true;
    }

    

    firstGroup = 0;
    onFirstGroupChange() {
        // if (this.firstGroup === 1 && this.secondGroup === 1) {
        //     this.bvariable = this.firstGroup + this.secondGroup;
        // } else {
        //     this.bvariable = 0;
        // }
    }

}
