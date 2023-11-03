import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor() { }

  public openInfoAlert(data) {
    return Swal.fire({
      title: 'Alerta Informativa',
      text: 'Texto alerta informativa',
      confirmButtonText: 'Entendido',
      confirmButtonColor: '#f92d2d',
      background: '#282828',
      customClass: {
        popup: 'text-white',
      },
      ...data
    });
  }

  public openLoadingAlert(data) {
    return Swal.fire({
      title: 'Cargando...',
      text: 'Espera unos segundos por favor.',
      background: '#282828',
      showConfirmButton: false,
      customClass: {
        popup: 'text-white',
      },
      didOpen: () => {
        Swal.showLoading()
      },
      ...data
    });
  }

  public closeAlert() {
    return Swal.close();
  }
}