import { Component, OnInit } from '@angular/core';
import {dragula} from 'ng2-dragula';

@Component({
  selector: 'app-darggablecards',
  templateUrl: './darggablecards.component.html',
  styleUrls: ['./darggablecards.component.scss']
})
export class DarggablecardsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    dragula(
      [
        document.querySelector('#left-defaults'), 
        document.querySelector('#right-defaults'),
        document.querySelector('#left-events')
      ]
    )
  }

}
