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
  linkSubForm!: FormGroup;
  filesComplement: File[] = [];
  public validate_img: boolean = false;
  widthMin: number = 700;
  heightMin: number = 700;
  id_linksub: any;
  dateF = '23-10-2022';
  get_pr: any[] = [];


  constructor(
    private formGroup: FormBuilder,
    private LinksSubsService: LinksSubsService,
    private baseService: BaseService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((res) => {
      this.id_linksub = res['id'];
    });

    this.linkSubForm = this.formGroup.group({
      // name: ['', [Validators.required]],
      price: ['', [Validators.required]],
      reference: ['', [Validators.required]],
      payment_day : ['', [Validators.required]],
      description: ['', [Validators.required]],
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
    this.linkSubForm.get('description')?.setValue(LinkSubtdata.data.descripcion);
    this.linkSubForm.get('price')?.setValue(Math.trunc(LinkSubtdata.data.total));
    this.linkSubForm.get('reference')?.setValue(LinkSubtdata.data.product_code);
  }

  submitbutton() {
    if (this.linkSubForm.valid) {
      let values_sub_link_form = this.linkSubForm.value;
      const formDataDocIde = new FormData();
      formDataDocIde.append('codeproduct', values_sub_link_form.reference);
      formDataDocIde.append('description', values_sub_link_form.description);
      formDataDocIde.append('subtotal', values_sub_link_form.price);
      formDataDocIde.append('taxid', '2');
      formDataDocIde.append('total',  values_sub_link_form.price);
      formDataDocIde.append('_method', 'PUT');
      formDataDocIde.append('payment_day', values_sub_link_form.payment_day);

      this.LinksSubsService.UpdateSubsLink(formDataDocIde,this.id_linksub ).subscribe(
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
