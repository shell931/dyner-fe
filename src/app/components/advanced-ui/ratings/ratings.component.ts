import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.scss']
})
export class RatingsComponent implements OnInit {
  currentRate = 5;
  customCurrentRate = 5;
  customCurrentRateInput = 5;
  selected = 0;
  hovered = 0;
  readonly = false;
  heartRate = 3.45;
  ctrl : UntypedFormControl;
  constructor() { 
    this.ctrl = new UntypedFormControl(null, Validators.required);
  }
  

  ngOnInit(): void {
  }

  toggle=()=> {
    if (this.ctrl.disabled) {
      this.ctrl.enable();
    } else {
      this.ctrl.disable();
    }
  }

}
