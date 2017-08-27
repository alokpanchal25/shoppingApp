import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { UserComponent } from '../user/user.component';
import { UserdetailsComponent } from '../user/userdetails/userdetails.component';
import { ProductComponent } from '../product/product.component';
import { CustomerComponent } from '../customer/customer.component';
import { OrderComponent } from '../order/order.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([ // forRoot is used because it is a single ton object
      { path: 'login', component: LoginComponent },
      { path: 'user', component: UserComponent },
      { path: 'customer', component: CustomerComponent },
      { path: 'order', component: OrderComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: '', redirectTo: 'user', pathMatch: 'full' },
      { path: '**', component: PagenotfoundComponent }
    ])
  ],
  declarations: [],
  exports: [RouterModule]
})
export class RoutingModule { }
