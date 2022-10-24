import { Component, OnInit } from '@angular/core';


let Data= [ {
  id : "1",
  rating : "23",
  productName : "Wodden Flower Vase",
  Price1 : "$2999",
  Price2  : "$1967",
  image:"./assets/img/ecommerce/01.jpg"
 },{
  id : "2",
  rating : "64",
  productName : "simple Black Chair",
  Price1 : "$2498",
  Price2  : "$1999",
  image:"./assets/img/ecommerce/02.jpg"
 },{
  id : "3",
  rating : "41",
  productName : "Mens Formal Red Shoes",
  Price1 : "$1499",
  Price2  : "$999",
  image:"./assets/img/ecommerce/03.jpg"
 },{
  id : "4",
  rating : "232",
  productName : "Black Classic Headphones",
  Price1 : "$4998",
  Price2  : "$2925",
  image:"./assets/img/ecommerce/04.jpg"
 },{
  id : "5",
  rating : "143",
  productName : "Lence Camera Lens",
  Price1 : "$2998",
  Price2  : "$1998",
  image:"./assets/img/ecommerce/05.jpg"
 },{
  id : "6",
  rating : "29",
  productName : "Energy School Bag",
  Price1 : "$2999",
  Price2  : "$2499",
  image:"./assets/img/ecommerce/06.jpg"
 },{
  id : "7",
  rating : "14",
  productName : "lence Laptop",
  Price1 : "$1499",
  Price2  : "$1299",
  image:"./assets/img/ecommerce/07.jpg"
 },{
  id : "8",
  rating : "283",
  productName : "Mens Digital Watch",
  Price1 : "$2498",
  Price2  : "$1967",
  image:"./assets/img/ecommerce/08.jpg"
 },{
  id : "9",
  rating : "20",
  productName : "Lence Camera",
  Price1 : "$3498",
  Price2  : "$2999",
  image:"./assets/img/ecommerce/09.jpg"
 },{
  id : "10",
  rating : "143",
  productName : "womens Party Wear Hand Bag",
  Price1 : "$2998",
  Price2  : "$1998",
  image:"./assets/img/ecommerce/11.jpg"
 },{
  id : "11",
  rating : "29",
  productName : "simple white Stool",
  Price1 : "$2999",
  Price2  : "$2499",
  image:"./assets/img/ecommerce/5.jpg"
 },{
  id : "12     ",
  rating : "20",
  productName : "White Ear buds",
  Price1 : "$3998",
  Price2  : "$2999",
  image:"./assets/img/ecommerce/2.jpg"
 },] 

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {

  constructor() { }
  data= Data

  ngOnInit(): void {
  }
  page = 1

  Remove(id:any){
    var Outputdata = this.data.filter(x =>{
      return x.id != id
    })
    this.data = Outputdata
  }

}
