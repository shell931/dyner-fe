import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit {

  constructor(private toaster: ToastrService) { }

  ngOnInit(): void {
  }
  public finish() {
    this.toaster.success('Successfully Done!')
  }
}
