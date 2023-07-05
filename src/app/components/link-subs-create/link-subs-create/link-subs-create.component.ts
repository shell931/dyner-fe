import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { NgSelectConfig } from '@ng-select/ng-select';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
import { LinksSubsService } from 'src/app/services/links-subs.service';
import { Router } from '@angular/router';


@Component({
    selector: 'link-subs-create',
    templateUrl: './link-subs-create.component.html',
    styleUrls: ['./link-subs-create.component.scss'],

})
export class LinkSubsCreateComponent implements OnInit {

    linkSubForm!: FormGroup;
    diasPago: number[] = [];
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
    inputValue = new FormControl('');

    constructor(
        private formGroup: FormBuilder,
        private LinksSubsService: LinksSubsService,
        private router: Router,
    ) { }

    ngOnInit(): void {
      this.diasPago = Array.from({ length: 25 }, (_, i) => i + 1);
      this.linkSubForm = this.formGroup.group({
          price: ['', [Validators.required]],
          reference: ['', [Validators.required]],
          description: ['', [Validators.required,Validators.maxLength(200)]],
          payment_day: ['', Validators.required]
      });
  }

  get f() {
    return this.linkSubForm.controls;
  }
  get name() { return this.linkSubForm.get('name'); }




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

    // Realiza la conversión a pesos colombianos y actualiza el valor del input
    const formattedValue = numericValue.toLocaleString('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });

    this.linkSubForm.get('price')?.setValue(formattedValue, { emitEvent: false });
  }
  submitbutton() {
    const numericValue = this.linkSubForm.get('price')?.value.replace(/\D/g, "");
    this.linkSubForm.get('price')?.setValue(numericValue, { emitEvent: false });
      if (this.linkSubForm.valid) {
          let values_sub_link_form = this.linkSubForm.value;
          var today = new Date();
              // get metadata file
              // get millis date now
              var datef = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
              var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
              var dateTime = datef + ' ' + time;
              var dates_as_int = [dateTime];
              const dates = dates_as_int.map(datef => new Date(datef).getTime());

          const formDataDocIde = new FormData();
          formDataDocIde.append('codeproduct', values_sub_link_form.reference);
          formDataDocIde.append('description', values_sub_link_form.description);
          formDataDocIde.append('subtotal', values_sub_link_form.price);
          formDataDocIde.append('taxid', '2');
          formDataDocIde.append('total', values_sub_link_form.price);
          formDataDocIde.append('payment_day', values_sub_link_form.payment_day);
          this.LinksSubsService.CreateSubsLink(formDataDocIde).subscribe(
              result => {
                  this.router.navigate(['link-sub']).then(() => {
                      // this.show_spinner = false;
                      // window.location.reload();
                  });

              },
              error => console.log(error)
          );

      } else {
          for (let i in this.linkSubForm.controls) {
              this.linkSubForm.controls[i].markAsTouched();
          }
      }

  }


}
