import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { Productservice } from '../product.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {
  productArray: any[] = [];
  indexArray: number[] = [];
  multipleProductFlag: boolean = false;
  constructor(private _snackBar: MatSnackBar, private _router: Router, private _productService: Productservice) { }

  ngOnInit() {
    this.productArray = [
      { pName: 'Mobile', price: 10000, pQuantity: 10, cart: 0, Link: 'Buy' },
      { pName: 'Tablet', price: 9000, pQuantity: 106, cart: 0, Link: 'Buy' },
      { pName: 'Shampo', price: 10, pQuantity: 98, cart: 0, Link: 'Buy' },
      { pName: 'Conditioner', price: 56, pQuantity: 180, cart: 0, Link: 'Buy' },
      { pName: 'Grocery', price: 100, pQuantity: 1000, cart: 0, Link: 'Buy' },
      { pName: 'Laptop', price: 50000, pQuantity: 100, cart: 0, Link: 'Buy' },
      { pName: 'Home Theater', price: 16000, pQuantity: 7, cart: 0, Link: 'Buy' }
    ];
  }

  onClickAddQuantity(index) {
    if (this.productArray[index].cart < this.productArray[index].pQuantity) {
      ++this.productArray[index].cart;
    } else {
      this._snackBar.open(this.productArray[index].pName + ' is already selected maximum quantity', 'Warning', {
        duration: 2000
      });
    }
  }
  onClickremoveQuantity(index) {
    if (this.productArray[index].cart > 0) {
      --this.productArray[index].cart;
    }
  }
  onClickBuy(item) {
    this._productService.Product = [item];
    this._router.navigate(['/cart']);
  }
  onClickMultipleProductCart(multipleProduct) {
    // console.log(multipleProduct.length);
    let index = 0;
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < multipleProduct.length; i++) {
    if (multipleProduct[i].cart > 0) {
      console.log(multipleProduct[i]);
      this._productService.Product[index] = multipleProduct[i];
      ++index;
    }
  }
  if(this._productService.Product.length != 0){
    this._router.navigate(['/cart']);
  }else{
    this._snackBar.open('Select at least one product','Warning',{
      duration:2000
    });
  }

  }
}
