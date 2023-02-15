import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-document-status',
  templateUrl: './document-status.component.html',
  styleUrls: ['./document-status.component.scss']
})
export class DocumentStatusComponent implements OnInit {

  @Input() status!: number; 
  constructor() { }

  ngOnInit(): void {
  }

}
