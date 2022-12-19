import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-describe-business-form',
  templateUrl: './describe-business-form.component.html',
  styleUrls: ['./describe-business-form.component.scss']
})
export class DescribeBusinessFormComponent implements OnInit {

  public formTitle = 'Describe tu negocio';
  public describeBusinessForm: FormGroup;
  @Input() currentStep;
  @Input() totalSteps;

  constructor(private fb: FormBuilder) {
    this.describeBusinessForm = this.fb.group({
      monthlyTransactions: ['', Validators.required],
      averageTicket: ['', Validators.required],
      amountTransacted: ['', Validators.required],
      maximumTransAmount: ['', Validators.required],
      describeBusiness: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.describeBusinessForm.value);
  }

}
