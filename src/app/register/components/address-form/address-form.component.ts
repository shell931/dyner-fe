import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent implements OnInit {

  public formTitle = 'Dirección';
  public addressForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.addressForm = this.fb.group({
      department: ['', Validators.required],
      city: ['', Validators.required],
      neighborhood: ['', Validators.required],
      address: ['', Validators.required],
      complement: ['', Validators.required],
      postalCode: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.addressForm.value);
  }

}
