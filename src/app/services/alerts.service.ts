import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {
  constructor(){}
  public infoAlert(data) {
    Swal.fire({
      title: 'Alerta Informativa',
      text: 'Texto alerta informativa',
      confirmButtonText: 'Entendido',
      confirmButtonColor: '#F7435C',
      background: '#282828',
      customClass: {
        popup: 'text-white',
      },
      ...data
    });
  }
}