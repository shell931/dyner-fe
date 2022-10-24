import { Component, OnInit } from '@angular/core';
import counterUp from 'counterup2';
import { CdTimerComponent, TimeInterface } from 'angular-cd-timer';



@Component({
  selector: 'app-counters',
  templateUrl: './counters.component.html',
  styleUrls: ['./counters.component.scss']
})
export class CountersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const el1 = document.querySelector('.counter1')
    const el2 = document.querySelector('.counter2')
    const el3 = document.querySelector('.counter3')
    const el4 = document.querySelector('.counter4')

    // Start counting, do this on DOM ready or with Waypoints.
    counterUp(el1, {
      duration: 1000,
      delay: 16,
    })
    counterUp(el2, {
      duration: 1000,
      delay: 16,
    })
    counterUp(el3, {
      duration: 1000,
      delay: 16,
    })
    counterUp(el4, {
      duration: 1000,
      delay: 16,
    })


  }

}
