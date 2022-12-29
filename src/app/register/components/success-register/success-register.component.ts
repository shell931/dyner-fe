import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-success-register',
  templateUrl: './success-register.component.html',
  styleUrls: ['./success-register.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SuccessRegisterComponent implements OnInit {

  public userName = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        // console.log('params', params); // { order: "popular" }
        this.userName = params['name'];
      });
  }

}
