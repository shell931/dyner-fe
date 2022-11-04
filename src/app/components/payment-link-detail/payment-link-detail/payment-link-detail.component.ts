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
    labelPosition: 'before' | 'after' = 'after';

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

        console.log(this.id_link);


    }

    GetLinkByIdF(Linktdata) {
        console.log(Linktdata);

        this.description = Linktdata.data.descripcion;
        this.price = Linktdata.data.total;
        this.reference = Linktdata.data.cod_producto;
        this.link_expiration = Linktdata.data.end_date;
        this.Image = Linktdata.data.image;
        this.url_link = Linktdata.data.url_link;

        if (this.Image == null || this.Image == "") {
            this.validate_image = false;
        }
    }

    copyInputMessage(inputElement) {
        inputElement.select();
        document.execCommand('copy');
        inputElement.setSelectionRange(0, 0);
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
