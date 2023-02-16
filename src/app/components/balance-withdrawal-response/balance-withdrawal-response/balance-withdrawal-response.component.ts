import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-balance-withdrawal-response',
  templateUrl: './balance-withdrawal-response.component.html',
  styleUrls: ['./balance-withdrawal-response.component.scss'],
})
export class BalanceWithdrawalResponseComponent implements OnInit {

  public reference!: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      console.log('params', params)
      this.reference = params['reference'];
      console.log(this.reference);
    });
  }
}
