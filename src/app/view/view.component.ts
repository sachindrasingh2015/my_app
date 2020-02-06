import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Productservice } from '../product.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  pName:number;
  pQuantity: number;
  cartArray:any[]=this.pro.allDetails;
  products:any;
  userDetails:any;
  totalPrice:any;
  constructor(private route:ActivatedRoute, private pro:Productservice) { }

  ngOnInit() {
    
 this.products=this.pro.allDetails.productDetails.products;
  this.userDetails=this.pro.allDetails.userDetails;
  this.totalPrice=this.pro.allDetails.price
    console.log(this.userDetails);
    
  }

  getAlldetails( ){
    
  }
}
