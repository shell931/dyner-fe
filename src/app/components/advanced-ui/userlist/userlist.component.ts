import { Component, OnInit } from '@angular/core';


const DATA = [{
  image:"./assets/img/faces/1.jpg",
  id: Math.random(),
  name:"Megan Peters",
  create:"08/06/2021",
  status:"inactive",
  email:"mila@kunis.com",
},
{
  image:"./assets/img/faces/2.jpg",
  id: Math.random(),
  name:"George Clooney",
  create:"12/06/2021",
  status:"active",
  email:"marlon@brando.com",
},{
  image:"./assets/img/faces/3.jpg",
  id: Math.random(),
  name:"Ryan Gossling",
  create:"14/06/2021",
  status:"banned",
  email:"jack@nicholson",
},{
  image:"./assets/img/faces/4.jpg",
  id: Math.random(),
  name:"Emma Watson",
  create:"16/06/2021",
  status:"pending",
  email:"jack@nicholsonm",
},{
  image:"./assets/img/faces/5.jpg",
  id: Math.random(),
  name:"Mila Kunis",
  create:"18/06/2021",
  status:"inactive",
  email:"mila@kunis.com",
},{
  image:"./assets/img/faces/6.jpg",
  id: Math.random(),
  name:"Phil Watson",
  create:"23/06/2021",
  status:"active",
  email:"phil@watson.com",
},{
  image:"./assets/img/faces/7.jpg",
  id: Math.random(),
  name:"Sonia Robertson",
  create:"25/06/2021",
  status:"active",
  email:"robertson@sonia.com",
},{
  image:"./assets/img/faces/8.jpg",
  id: Math.random(),
  name:"Adam Hamilton",
  create:"31/06/2021",
  status:"banned",
  email:"mila@kunis.com",
},{
  image:"./assets/img/faces/9.jpg",
  id: Math.random(),
  name:"Leah Morgan",
  create:"02/07/2021",
  status:"pending",
  email:"morganleah@.com",
},{
  image:"./assets/img/faces/10.jpg",
  id: Math.random(),
  name:"Amelia McDonald",
  create:"08/07/2021",
  status:"active",
  email:"amelia23@kunis.com",
},{
  image:"./assets/img/faces/11.jpg",
  id: Math.random(),
  name:"Paul Molive",
  create:"12/07/2021",
  status:"active",
  email:"paul45@kunis.com",
},
];

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  data= DATA;

  delete = (id:any)=>{
    var Outputdata = this.data.filter(x =>{
      return x.id != id
    })
    this.data = Outputdata
  }


}
