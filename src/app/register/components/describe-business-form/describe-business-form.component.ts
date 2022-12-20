import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../../shared-service';

@Component({
  selector: 'app-describe-business-form',
  templateUrl: './describe-business-form.component.html',
  styleUrls: ['./describe-business-form.component.scss']
})
export class DescribeBusinessFormComponent implements OnInit {

  public formTitle = 'Describe tu negocio';
  public describeBusinessForm: FormGroup;
  public formSent = false;
  @Input() currentData: any = {};
  @Output() onSubmitFormDataEmit = new EventEmitter<any>();

  constructor(private fb: FormBuilder, sharedService: SharedService) {
    sharedService.$emitter.subscribe(() => {
      this.formSent = true;
      this.submitFormData();
    });
    this.describeBusinessForm = this.fb.group({
      monthlyTransactions: ['', Validators.required],
      averageTicket: ['', Validators.required],
      amountTransacted: ['', Validators.required],
      maximumTransAmount: ['', Validators.required],
      describeBusiness: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.describeBusinessForm.patchValue(this.currentData);
  }

  submitFormData() {
    this.onSubmitFormDataEmit.emit(this.describeBusinessForm);
  }

}
