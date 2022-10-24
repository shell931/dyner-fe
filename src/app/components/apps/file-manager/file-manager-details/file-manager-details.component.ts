import { Component, OnInit } from '@angular/core';
import { Gallery, GalleryItem, ImageItem } from 'ng-gallery';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { fromEvent } from 'rxjs';



@Component({
  selector: 'app-file-manager-details',
  templateUrl: './file-manager-details.component.html',
  styleUrls: ['./file-manager-details.component.scss']
})
export class FileManagerDetailsComponent implements OnInit {

  items!: GalleryItem[];

  imageData = data;



  constructor( public gallery: Gallery) { }

  ngOnInit(): void {

    let ltr = document.querySelectorAll('#myonoffswitch54');
    let rtl = document.querySelectorAll('#myonoffswitch55');
    fromEvent(ltr, 'click').subscribe(() => {
      this.customOptions = { ...this.customOptions, rtl: false }; // this will make the carousel refresh
    });
    fromEvent(rtl, 'click').subscribe(() => {
      this.customOptions = { ...this.customOptions, rtl: true }; // this will make the carousel refresh
    });
    if(document.body.classList.contains("rtl")){
      this.customOptions = { ...this.customOptions, rtl: true }; // this will make the carousel refresh
    }

    // Creat gallery items
    this.items = this.imageData.map(
      (item) =>{
        return new ImageItem({ src: item.srcUrl, thumb: item.previewUrl })
      } 
    );
  }

  customOptions: OwlOptions = {
    loop: true,
    rtl: false,
    navText: [
      '<i class="fa fa-chevron-left"></i>',
      '<i class="fa fa-chevron-right"></i>',
    ],
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };
  slidesStore = [
    {
      id: '1',
      src: './assets/img/photos/fileimage1.jpg',
      alt: 'img',
      size: '120kb',
      title: 'fileImage1.jpg',
    },
    {
      id: '2',
      src: './assets/img/photos/fileimage2.jpg',
      alt: 'img',
      size: '256kb',
      title: 'fileImage2.jpg',
    },
    {
      id: '3',
      src: './assets/img/photos/fileimage3.jpg',
      alt: 'img',
      size: '500kb',
      title: 'fileImage3.jpg',
    },
    {
      id: '4',
      src: './assets/img/photos/fileimage4.jpg',
      alt: 'img',
      size: '1.2mb',
      title: 'fileImage4.jpg',
    }
  ];

}

const data = [
  {
    srcUrl: "./assets/img/media/1.jpg",
    previewUrl: "./assets/img/media/1.jpg"
  },
  {
    srcUrl: "./assets/img/media/2.jpg",
    previewUrl: "./assets/img/media/2.jpg",
  },
  {
    srcUrl: "./assets/img/media/3.jpg",
    previewUrl: "./assets/img/media/3.jpg",
  },
  {
    srcUrl: "./assets/img/media/4.jpg",
    previewUrl: "./assets/img/media/4.jpg",
  },
  {
    srcUrl: "./assets/img/media/5.jpg",
    previewUrl: "./assets/img/media/5.jpg",
  },
  {
    srcUrl: "./assets/img/media/6.jpg",
    previewUrl: "./assets/img/media/6.jpg",
  },
  {
    srcUrl: "./assets/img/media/7.jpg",
    previewUrl: "./assets/img/media/7.jpg",
  },
  {
    srcUrl: "./assets/img/media/8.jpg",
    previewUrl: "./assets/img/media/8.jpg",
  }
];