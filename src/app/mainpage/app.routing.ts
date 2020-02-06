import { MainpageComponent } from './mainpage.component';
import { CartComponent } from '../cart/cart.component';
import { Routes } from '@angular/router';
import { CheckoutComponent } from '../checkout/checkout.component';
import { ViewComponent } from '../view/view.component';

export const AppRoutes: Routes = [

  {path: 'product',component:MainpageComponent },
  {path: 'cart', component:CartComponent },
  {path: 'checkout', component:CheckoutComponent},
  {path: 'view', component:ViewComponent}

];
