import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectConfig } from '@ng-select/ng-select';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.scss']
})
export class FormValidationComponent implements OnInit  {

  public customForm! : FormGroup;
  


  constructor(private formBuilder : FormBuilder) { }


  ngOnInit(): void {
    this.customForm = this.formBuilder.group({
      firstname : ['',[Validators.required]],
      lastname : ['',[Validators.required]],
      city : ['',[Validators.required]],
      selectState : ['',[Validators.required]],
      zip : ['', Validators.required]
    });
  }


 Submit(){
  if (this.customForm.controls['firstname'].value !== "" && 
    this.customForm.controls['lastname'].value !== ""  &&
    this.customForm.controls['city'].value !== ""  &&
    this.customForm.controls['selectState'].value !== ""  &&
    this.customForm.controls['zip'].value !== ""
  )
  {
    console.log('success')
  }
  else{
    let tag = document.querySelector('.needs-validation')
    tag?.classList.add('was-validated')
  }
}

places = [
        { value: '1', label: 'New york' },
        { value: '2', label: 'New york' },
        { value: '3', label: 'New york' },
        { value: '4', label: 'New york' },
        { value: '5', label: 'New york' },
        { value: '6', label: 'Accessories' },
]

out(){
  console.log(this.places)
}

}
