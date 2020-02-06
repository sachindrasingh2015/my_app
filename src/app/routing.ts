
import { Routes, RouterModule } from "@angular/router";
import { CheckoutComponent } from './checkout/checkout.component';
const arr: Routes = [
    { path: 'checkout', component:CheckoutComponent},
    
  ];
 
  export const routingArr = RouterModule.forRoot(arr);