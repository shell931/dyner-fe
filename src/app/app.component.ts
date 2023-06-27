import { Component } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  public isSpinner = true;

  ngOnInit() {
    // this.isSpinner = false
    fromEvent(window, 'load').subscribe(() => {document.querySelector('#glb-loader')?.classList.remove('loaderShow'); console.log('completed')});
  }
}
