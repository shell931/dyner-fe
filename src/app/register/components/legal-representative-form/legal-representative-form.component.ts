import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-legal-representative-form',
  templateUrl: './legal-representative-form.component.html',
  styleUrls: ['./legal-representative-form.component.scss']
})
export class LegalRepresentativeFormComponent implements OnInit {

  public formTitle = 'Representante legal';
  public legalRepresentativeForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.legalRepresentativeForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      document: ['', Validators.required],
      documentExpedition: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.legalRepresentativeForm.value);
  }

}
