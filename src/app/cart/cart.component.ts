import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Productservice } from '../product.service';
import { AppRoutingModule } from '../app-routing.module';
import { MatDialog } from '@angular/material';
import { CheckoutComponent } from '../checkout/checkout.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

cartArray: any[] = [];
totalPrice = 0;
checBoxValue=0;
  // tslint:disable-next-line: variable-name
  constructor(private _productService: Productservice, private _route:Router,public dialog: MatDialog) { }

  ngOnInit() {
    for (let i = 0; i < this._productService.Product.length; i++) {
      this.cartArray[i] = this._productService.Product[i];
      this.totalPrice = this.totalPrice + (this._productService.Product[i].cart * this._productService.Product[i].price);
    }

    console.log(this.cartArray);
  }

  onClickRemoveProduct(item) {
    // tslint:disable-next-line: max-line-length
    this.totalPrice = this.totalPrice - (this.cartArray[this.cartArray.indexOf(item)].cart * this.cartArray[this.cartArray.indexOf(item)].price);
    this.cartArray.splice(this.cartArray.indexOf(item), 1);
  }
  onClickDiscount(){
    console.log(this.checBoxValue);
    if(this.checBoxValue == 0){
      this.checBoxValue = 1;
      this.totalPrice = (this.totalPrice * 50) / 100;
    }else{
      this.checBoxValue = 0;
      this.totalPrice = (this.totalPrice * 100) / 50;
    }

  }
  submit(){
    const dialogRef = this.dialog.open(CheckoutComponent, {
      width: '250px',
      data: {products: this.cartArray,price:this.totalPrice}
    });

    dialogRef.afterClosed().subscribe(result => {
      this._productService.allDetails=result;
      console.log(result);
      this._route.navigate(['/view']);
      // setTimeout({this._route.navigate(['/view']);},1000)
    });
    


  }

}
