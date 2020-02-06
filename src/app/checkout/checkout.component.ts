import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Productservice } from '../product.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  animal: string;
  name: string;
  submitted = false;
  // nameControl = new FormControl();
  form : FormGroup;
  constructor( public dialog: MatDialog, private _route: Router,private _product:Productservice,public dialogRef: MatDialogRef<CheckoutComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.form = new FormGroup({
      nameControl: new FormControl(''),
      address: new FormControl('')
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CheckoutComponent,{
      width: '250px',
      data:{name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  onSubmit() { 
    this.submitted = true; 
    console.log(this.data)
    let data={
      userDetails:this.form.value,
      productDetails:this.data,
      price:this.data.price
    }
    this._product.cartItem = [this.form.value];
    this.dialogRef.close(data);
    // alert('submit successfully');
  }
  

}
