import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

interface TokenObj {
    access_token: string;
}

@Component({
    selector: 'app-authentication',
    templateUrl: './authentication.component.html',
    styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

    loginForm!: UntypedFormGroup

    constructor(
        private formBuilder: UntypedFormBuilder,
        public router: Router,
        private AuthenticationServiceT: AuthenticationService,
    ) { }

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            email: ['valex@demo.com', Validators.required],
            password: ['valex', Validators.required]
        })
    }

    get form() {
        return this.loginForm.controls;
    }

    Submit() {
        if (this.loginForm.controls['email'].value === 'valex@demo.com' && this.loginForm.controls['password'].value === 'valex') {
            this.router.navigate(['/dashboard']);
        }
    }

    login_front() {
        if (this.loginForm.valid) {
            this.AuthenticationServiceT.loginUser(this.loginForm.value).subscribe(
                (result) => {
                    let myJSONAuth = JSON.stringify(result);
                    let objAuth = JSON.parse(myJSONAuth);
                    let AuthResult = objAuth.data;
                    let access_token = AuthResult.access_token;
                    if (access_token) {
                        localStorage.setItem('access_token', access_token);
                        this.router.navigate(['/dashboard']);
                    }
                },
                error => {
                    console.log("failll aquiii");
                    console.log(error)
                }
            );

        }
    }

}
