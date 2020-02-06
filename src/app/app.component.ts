import { Component, OnInit } from '@angular/core';
import { Productservice } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'TAsk';
  constructor(private service:Productservice){}

  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }


  onclick(){
this.service.Product.length = 0;
  }
}
