import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-success-register',
  templateUrl: './success-register.component.html',
  styleUrls: ['./success-register.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SuccessRegisterComponent
  implements OnInit, AfterViewInit, OnDestroy {
  public userName = '';

  constructor(private route: ActivatedRoute, private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.userName = params['name'];
    });
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor =
      '#232323';
  }

  ngOnDestroy(): void {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor =
      '#e1e1e1';
  }
}
