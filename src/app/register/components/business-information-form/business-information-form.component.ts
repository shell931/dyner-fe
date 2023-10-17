import { Component, OnInit, Input, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../../shared-service';
import { createMask } from '@ngneat/input-mask';

@Component({
  selector: 'app-business-information-form',
  templateUrl: './business-information-form.component.html',
  styleUrls: ['./business-information-form.component.scss']
})
export class BusinessInformationFormComponent implements OnInit, OnChanges {

  @Input() identificationTypes: any[] = [];
  @Input() economityActivities: any[] = [];
  @Input() currentData: any = {};
  @Output() onSubmitFormDataEmit = new EventEmitter<any>();
  public formTitle = 'Información del Negocio';
  public bussinesTypes = [
    { id: 'Persona Natural', description: 'Persona Natural' },
    { id: 'Persona Juridica', description: 'Persona Juridica' }
  ];
  public businessInformationForm: FormGroup;
  public formSent = false;
  public currencyInputMask = createMask({
    alias: 'numeric',
    groupSeparator: '.',
    digits: 0,
    digitsOptional: false,
    placeholder: '0',
  });

  constructor(private fb: FormBuilder, sharedService: SharedService) {
    sharedService.$emitter.subscribe(() => {
      this.formSent = true;
      this.submitFormData();
    });
    this.businessInformationForm = this.fb.group({
      businessName: ['', Validators.required],
      bussinesType: ['', Validators.required],
      typeIdentification: ['', [Validators.required]],
      businessDocument: ['', [Validators.required]],
      economicActivity: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {
    this.businessInformationForm.patchValue(this.currentData);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['identificationTypes']) {
      this.identificationTypes = changes['identificationTypes'].currentValue;
    }
    if (changes['economityActivities']) {
      this.economityActivities = changes['economityActivities'].currentValue;
    }
  }

  submitFormData() {
    this.onSubmitFormDataEmit.emit(this.businessInformationForm);
  }

}
