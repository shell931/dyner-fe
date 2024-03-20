import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../../shared-service';
import { MustMatch } from 'src/app/shared/validations/passwordValidator';

@Component({
  selector: 'app-user-access-form',
  templateUrl: './user-access-form.component.html',
  styleUrls: ['./user-access-form.component.scss']
})
export class UserAccessFormComponent implements OnInit {

  public formTitle = 'Contraseña para tu cuenta';
  public userAccessForm: FormGroup;
  public formSent = false;
  public letterNumberRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  public fieldTextType: boolean = false;


  @Input() currentData: any = {};
  @Output() onSubmitFormDataEmit = new EventEmitter<any>();

  constructor(private fb: FormBuilder, sharedService: SharedService) {
    sharedService.$emitter.subscribe(() => {
      this.formSent = true;
      this.submitFormData();
    });
    this.userAccessForm = this.fb.group(
      {
        password: ['', [
          Validators.required,
          // Validators.pattern(this.letterNumberRegex)
        ]
        ],
        passwordConfirm: ['', [
          Validators.required,
          // Validators.pattern(this.letterNumberRegex)
        ]
        ],
      },
      {
        validator: MustMatch('password', 'passwordConfirm')
      }
    );
  }

  ngOnInit(): void {
    this.userAccessForm.patchValue(this.currentData);
  }

  submitFormData() {
    this.onSubmitFormDataEmit.emit(this.userAccessForm);
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  onKeydown(event: KeyboardEvent) {
    if (!((event.keyCode > 95 && event.keyCode < 106) || (event.keyCode > 47 && event.keyCode < 58) || event.keyCode == 8)) {
      event.preventDefault();
    }
  }

}
