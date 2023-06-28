import { Component, OnInit,  ViewChild, } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { LinksSubsService } from 'src/app/services/links-subs.service';
import { BaseService } from "src/app/services/base-service.service";
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-payment-link-detail',
    templateUrl: './link-sub-detail.component.html',
    styleUrls: ['./link-sub-detail.component.scss']
})
export class LinkDetailSubComponent implements OnInit {

    id_suscripcion: any;
    description: any;
    price: any;
    reference: any;
    payment_day: any;
    url_link: any;
    gatewayUrl = environment.api.gatewayUrl+'tokenizationlink/';
    labelPosition: 'before' | 'after' = 'after';
    public validate_copy: boolean = false;
    public validate_copy_button: boolean = false;

    constructor(
        private route: ActivatedRoute,
        private LinksSubsService: LinksSubsService,
        private baseService: BaseService,
    ) { }

    ngOnInit(): void {

        this.route.params.subscribe(res => {
            this.id_suscripcion= res['id'];
        })

        this.LinksSubsService.GetLinkSubsById(this.id_suscripcion).subscribe(
            (LinkSubdata) => {
                this.GetLinkByIdSubF(LinkSubdata)
            },
            error => {
                this.baseService.GetErrorAuthSesion(error)
            }
        );
    }

    GetLinkByIdSubF(LinkSubdata) {
        console.log(LinkSubdata);

        this.description = LinkSubdata.data.description;
        this.price = LinkSubdata.data.total;
        this.reference = LinkSubdata.data.product_code;
        this.payment_day = LinkSubdata.data.payment_day;
        this.url_link = this.gatewayUrl+LinkSubdata.data.link_url;


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
