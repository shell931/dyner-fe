import { Component, OnInit } from '@angular/core';
import { Gallery, GalleryItem, ImageItem } from 'ng-gallery';


@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {
  items!: GalleryItem[];

  imageData = data;

  constructor(public gallery: Gallery) {}

  ngOnInit() {

    // Creat gallery items
    this.items = this.imageData.map(
      (item) =>{
        return new ImageItem({ src: item.srcUrl, thumb: item.previewUrl })
      } 
    );
  }

}

const data = [
  {
    srcUrl: './assets/img/photos/1.jpg',
    previewUrl: './assets/img/photos/1.jpg'
  },
  {
    srcUrl: './assets/img/photos/2.jpg',
    previewUrl: './assets/img/photos/2.jpg',
  },
  {
    srcUrl: './assets/img/photos/3.jpg',
    previewUrl: './assets/img/photos/3.jpg',
  },
  {
    srcUrl: './assets/img/photos/2.jpg',
    previewUrl: './assets/img/photos/2.jpg',
  },
  {
    srcUrl: './assets/img/photos/4.jpg',
    previewUrl: './assets/img/photos/4.jpg',
  },
  {
    srcUrl: './assets/img/photos/5.jpg',
    previewUrl: './assets/img/photos/5.jpg',
  },
  {
    srcUrl: './assets/img/photos/6.jpg',
    previewUrl: './assets/img/photos/6.jpg',
  },
  {
    srcUrl: './assets/img/photos/7.jpg',
    previewUrl: './assets/img/photos/7.jpg',
  },
  {
    srcUrl: './assets/img/photos/8.jpg',
    previewUrl: './assets/img/photos/8.jpg',
  },
];
