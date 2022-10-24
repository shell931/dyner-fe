import { Component, OnInit } from '@angular/core';
import { NgSelectConfig } from '@ng-select/ng-select';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  page = 4;

  getPageSymbol(current: number) {
    return ['1', '2', '3', '4', '5'][current - 1];
  }

  constructor( private config: NgSelectConfig) { }

  ngOnInit(): void {
  }
}
