import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators, ValidatorFn, AbstractControl } from '@angular/forms';


@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

    linkForm: FormGroup;

    constructor(
        private formGroup: FormBuilder,
    ) { }

    ngOnInit(): void {
        this.linkForm = this.formGroup.group({
            email: ['', [Validators.required]],
        });

    }


    submitbutton() {
        console.log("hola");

    }

}
