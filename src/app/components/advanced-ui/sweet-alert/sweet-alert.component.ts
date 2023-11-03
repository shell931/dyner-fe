import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sweet-alert',
  templateUrl: './sweet-alert.component.html',
  styleUrls: ['./sweet-alert.component.scss']
})
export class SweetAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public SimpleMessage = 'Message';
  public SimpleTitle = 'Title';

  simpleAlert() {
    Swal.fire({
      text: this.SimpleMessage,
      showConfirmButton: true,
      confirmButtonColor: '#705ec8',
    });
  }
  titleAlert1() {
    Swal.fire({
      title: this.SimpleTitle,
      showConfirmButton: true,
      confirmButtonColor: '#705ec8',
    });
  }

  imageAlert1() {
    Swal.fire({
      title: this.SimpleTitle,
      text: this.SimpleMessage,
      imageUrl: './assets/img/brand/logo.png',
      imageAlt: 'Custom image',
      confirmButtonColor: '#705ec8',
    });
  }

  timerAlert1() {
    Swal.fire({
      title: this.SimpleTitle,
      html: 'New Notification From admitro (Close after 2 Seconds)',
      timer: 2000,
      timerProgressBar: true,
      showConfirmButton: false,
    });
  }

  basicAlert() {
     Swal.fire({
       title: 'Welcome to Your Admin Page',
       confirmButtonColor: '#f92d2d !important'
     })
  }

  titleAlert() {
    Swal.fire({
      title: 'Here is a title!',
      text: 'All are available in the template',
      confirmButtonColor: '#f92d2d !important'
    })
  }

  successAlert(){
    Swal.fire({
      icon: 'success',
      title: 'Well Done!',
      text: 'You clicked the button!',
      confirmButtonColor: '#f92d2d !important'
    })
  }

  warningAlert() {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure ?',
      text: 'Your will not be able to recover this imaginary file!',
      showCancelButton: true,
      confirmButtonColor: '#f92d2d !important',
      cancelButtonColor: '#f92d2d !important',
      confirmButtonText: 'Yes, delete it!',
      reverseButtons: true

    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Deleted!',
          text: 'Your imaginary file has been deleted.',
          icon: 'success',
          confirmButtonColor: '#f92d2d !important'
        })
      }
    })
  }

  parameterAlert(){
    Swal.fire({
      icon: "warning",
      title: 'Are you sure?',
      text: "You will not be able to recover this imaginary file!",
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      confirmButtonColor: '#f92d2d !important',
      cancelButtonText: 'No, cancel it!',
      cancelButtonColor: '#f92d2d !important',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Deleted!',
          text: 'Your imaginary file has been deleted.',
          icon: 'success',
          confirmButtonColor: '#f92d2d !important'
        })
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: 'Cancelled!',
          text: 'Your imaginary file is safe :)',
          icon: 'error',
          confirmButtonColor: '#f92d2d !important'
        })
      }
    })
  }

  imageAlert(){
    Swal.fire({
      title: 'Lovely',
      text: 'Your image is uploaded.',
      imageUrl: './assets/img/brand/logo.png',
      confirmButtonColor: '#f92d2d !important'
    })
  }

  timerAlert() {
    Swal.fire({
      title: 'Auto close alert!',
      text: 'I will close in 2 seconds.',
      confirmButtonColor: '#f92d2d !important',
      timer: 2000,
      timerProgressBar: true,
    })
  }

  animationAlert() {
    Swal.fire({
      title: 'Custom animation with Animate.css',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      },
      confirmButtonColor: '#f92d2d !important',
    })
  }

}
