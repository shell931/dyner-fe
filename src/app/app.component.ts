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
    fromEvent(window, 'load').subscribe(() => {
      // Aquí establecemos un tiempo de espera después de que se dispare el evento load
      setTimeout(() => {
        this.isSpinner = false;
        console.log('Load event completed and loader hidden after delay');
      }, 3000); // El retardo está en milisegundos, 3000 ms son 3 segundos
    });
  }

  // ngOnInit() {
  //   // this.isSpinner = false
  //   fromEvent(window, 'load').subscribe(() => {document.querySelector('#glb-loader')?.classList.remove('loaderShow'); console.log('completed')});
  // }
}
