import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../../shared-service';

@Component({
  selector: 'app-user-access-form',
  templateUrl: './user-access-form.component.html',
  styleUrls: ['./user-access-form.component.scss']
})
export class UserAccessFormComponent implements OnInit {

  public formTitle = 'Contraseña para tu cuenta';
  public userAccessForm: FormGroup;
  public formSent = false;
  @Input() currentData: any = {};
  @Output() onSubmitFormDataEmit = new EventEmitter<any>();

  constructor(private fb: FormBuilder, sharedService: SharedService) {
    sharedService.$emitter.subscribe(() => {
      this.formSent = true;
      this.submitFormData();
    });
    this.userAccessForm = this.fb.group({
      password: ['', Validators.required],
      passwordConfirm: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.userAccessForm.patchValue(this.currentData);
  }

  submitFormData() {
    this.onSubmitFormDataEmit.emit(this.userAccessForm);
  }

}
