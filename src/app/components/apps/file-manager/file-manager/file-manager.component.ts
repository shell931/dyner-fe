import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.scss']
})
export class FileManagerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  page =1;

}