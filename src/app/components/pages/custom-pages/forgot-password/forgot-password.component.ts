import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, ValidatorFn, AbstractControl } from '@angular/forms';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from "src/app/services/authentication.service";
import { Router } from '@angular/router';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

    // loginForm: FormGroup;
    loginForm!: UntypedFormGroup
    emailPattern: string = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$";
    isExporting = false;

    constructor(
        private formGroup: FormBuilder,
        private authenticationService: AuthenticationService,
        private router: Router,
    ) { }

    ngOnInit(): void {
        this.loginForm = this.formGroup.group({
            email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
        })
    }


    submitbutton() {
        if (this.loginForm.valid) {
            this.isExporting = true;
            let myObjRecoverPass = {
                "email": this.loginForm.value.email,
            };

            this.authenticationService.RecoverPassword(myObjRecoverPass).subscribe(
                result => {
                    console.log(result);
                    this.router.navigate(['custompages/forgot-password-response']).then(() => {
                        // this.show_spinner = false;
                        // window.location.reload();
                    });

                }
            );

        }
    }

}
