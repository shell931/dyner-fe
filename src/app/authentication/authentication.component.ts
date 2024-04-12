import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { AnimationOptions, LottieTransferState } from 'ngx-lottie';
import { ViewChildren, QueryList, ElementRef } from '@angular/core';

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
    public validate_user: boolean = false;
    @ViewChildren('pinInput') pinInputs!: QueryList<ElementRef>;

    constructor(
        private formBuilder: UntypedFormBuilder,
        public router: Router,
        private AuthenticationServiceT: AuthenticationService,
    ) { }

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            email: ['', Validators.required],
            // password: ['', Validators.required]
            // password: ['', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.maxLength(4)]],

            password1: ['', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.maxLength(1)]],
            password2: ['', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.maxLength(1)]],
            password3: ['', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.maxLength(1)]],
            password4: ['', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.maxLength(1)]]

        })
    }

    // onKeydown(event: KeyboardEvent) {
    //     if (!((event.keyCode > 95 && event.keyCode < 106) || (event.keyCode > 47 && event.keyCode < 58) || event.keyCode == 8)) {
    //         event.preventDefault();
    //     }
    // }

    onKeydown(event: KeyboardEvent, index: number) {
        const maxLength = 1;

        if (event.key.length === 1) {
            const input = event.target as HTMLInputElement;
            if (input.value.length >= maxLength) {
                const nextIndex = index + 1;
                if (nextIndex < this.pinInputs.length) {
                    this.pinInputs.toArray()[nextIndex].nativeElement.focus();
                }
            }
        } else if (event.key === "Backspace") { // Si la tecla presionada es la tecla de retroceso
            const input = event.target as HTMLInputElement;
            if (input.value.length === 0) { // Si el input está vacío
                const prevIndex = index - 1;
                if (prevIndex >= 0) { // Verifica si hay un input anterior
                    this.pinInputs.toArray()[prevIndex].nativeElement.focus(); // Selecciona el input anterior
                }
            }
        }

        if (!((event.keyCode > 95 && event.keyCode < 106) || (event.keyCode > 47 && event.keyCode < 58) || event.keyCode == 8)) {
            event.preventDefault();
        }
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
        this.validate_user = false;
        if (this.loginForm.valid) {
            console.log(this.loginForm.value);

            let jsonAcces = {
                "email": this.loginForm.value.email,
                "password": this.loginForm.value.password1 + this.loginForm.value.password2 + this.loginForm.value.password3 + this.loginForm.value.password4
            };
            this.AuthenticationServiceT.loginUser(jsonAcces).subscribe(
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
                    this.validate_user = true;
                    console.log("failll aquiii");
                    console.log(error)
                }
            );

        }
    }

    options: AnimationOptions = {
        path: "./assets/img/lotties/login-lottie.json"
    };


}
