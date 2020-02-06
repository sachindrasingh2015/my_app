import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Productservice implements OnInit {
allDetails:any;
Product:any[]=[];
cartItem:any[]=[];
  constructor() {
  }
  ngOnInit() {
    console.log(this.Product);
  }
}
