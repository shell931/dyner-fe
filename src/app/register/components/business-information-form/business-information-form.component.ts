import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-business-information-form',
  templateUrl: './business-information-form.component.html',
  styleUrls: ['./business-information-form.component.scss']
})
export class BusinessInformationFormComponent implements OnInit, OnChanges {

  public formTitle = 'Información del Negocio';
  public commerceTypes = [
    { id: 1, description: 'Persona Natural' },
    { id: 2, description: 'Persona Juridica' }
  ];
  public businessInformationForm: FormGroup;
  @Input() currentStep = 1;
  @Input() totalSteps = 4;
  @Input() identificationTypes: any[] = [];
  @Input() economityActivities: any[] = [];

  constructor(private fb: FormBuilder) {
    this.businessInformationForm = this.fb.group({
      commerceName: ['', Validators.required],
      documentType: ['', [Validators.required]],
      documentNumber: ['', [Validators.required]],
      economicActivity: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {}


  ngOnChanges(changes: SimpleChanges) {
    if (changes['identificationTypes']) {
      this.identificationTypes = changes['identificationTypes'].currentValue;
    }
    if (changes['economityActivities']) {
      this.economityActivities = changes['economityActivities'].currentValue;
    }
  }

  get businessInformationFormControl() {
    return this.businessInformationForm.controls;
  }

  onSubmit() {
    console.log(this.businessInformationForm.value);
  }

}
