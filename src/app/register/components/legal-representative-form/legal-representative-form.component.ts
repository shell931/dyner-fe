import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../../shared-service';
import { createMask } from '@ngneat/input-mask';

@Component({
  selector: 'app-legal-representative-form',
  templateUrl: './legal-representative-form.component.html',
  styleUrls: ['./legal-representative-form.component.scss']
})
export class LegalRepresentativeFormComponent implements OnInit {

  public formTitle = 'Representante legal';
  public legalRepresentativeForm: FormGroup;
  public formSent = false;
  @Input() currentData: any = {};
  @Output() onSubmitFormDataEmit = new EventEmitter<any>();
  currencyInputMask = createMask({
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
    this.legalRepresentativeForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required], 
      document: ['', Validators.required],
      documentExpedition: ['', Validators.required],
      businessPhone: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.legalRepresentativeForm.patchValue(this.currentData);
  }

  submitFormData() {
    this.onSubmitFormDataEmit.emit(this.legalRepresentativeForm);
  }

}
