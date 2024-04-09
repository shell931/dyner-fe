import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../../shared-service';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent implements OnInit {

  public formTitle = 'Dirección';
  public addressForm: FormGroup;
  public formSent = false;
  @Input() departments: any[] = [];
  @Input() cities: any[] = [];
  @Input() currentData: any = {};
  @Output() changeDepartmentEmit = new EventEmitter<number>();
  @Output() onSubmitFormDataEmit = new EventEmitter<any>();

  constructor(private fb: FormBuilder, sharedService: SharedService) {
    sharedService.$emitter.subscribe(() => {
      this.formSent = true;
      this.submitFormData();
    });
    this.addressForm = this.fb.group({
      country: [1, Validators.required],
      departament: ['', Validators.required],
      city: ['', Validators.required],
      neighborhood: ['', Validators.required],
      businessAddress: ['', Validators.required],
      complement: ['', Validators.required],
      postalCode: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.addressForm?.get("departament")?.valueChanges.subscribe(id => {
      this.changeDepartmentEmit.emit(id);
    })
    this.addressForm.patchValue(this.currentData);
  }

  submitFormData() {
    this.onSubmitFormDataEmit.emit(this.addressForm);
  }

  onKeydown(event: KeyboardEvent) {
    if (!((event.keyCode > 95 && event.keyCode < 106) || (event.keyCode > 47 && event.keyCode < 58) || event.keyCode == 8)) {
      event.preventDefault();
    }
  }

}
