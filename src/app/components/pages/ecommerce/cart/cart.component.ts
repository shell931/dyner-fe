import { Component, OnInit } from '@angular/core';


let Data = [ {
  id : "1",
  size : "XXL",
  color : "Green and Black color",
  name : "FLOWER POT",
  subtotal  : "$79.90",
  image:"./assets/img/ecommerce/01.jpg"
 },{
  id : "2",
  size : "XL",
  color : "Black color",
  name : "COLLEGE BAG",
  subtotal  : "$79.90",
  image:"./assets/img/ecommerce/02.jpg"
 },{
  id : "3",
  size : "XL",
  color : "SMART WATCH",
  name : "FLOWER POT",
  subtotal  : "$79.90",
  image:"./assets/img/ecommerce/03.jpg"
 },{
  id : "4",
  size : "11-12 inches",
  color : " LightGray color",
  name : "CHAIR",
  subtotal  : "$79.90",
  image:"./assets/img/ecommerce/04.jpg"
 }] 

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor() { }
  data= Data


  ngOnInit(): void {
  }

  Remove(id:any){
    var Outputdata = this.data.filter(x =>{
      return x.id != id
    })
    this.data = Outputdata
  }

  // Clear = ()=>{
  //   // this.data = [{
  //   //   id : "",
  //   //   size : "",
  //   //   color : "",
  //   //   name : "",
  //   //   subtotal  : "",
  //   //   image:""
  //   //  }]
  // }

  Clear = ()=>{
    this.data = []
  }

}
