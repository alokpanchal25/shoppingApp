import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RoutingModule } from './routingModule/routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserdetailsComponent } from './user/userdetails/userdetails.component';
import { ProductComponent } from './product/product.component';
import { CustomerComponent } from './customer/customer.component';
import { OrderComponent } from './order/order.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './service/login/login.service';
import { ProductlistComponent } from './product/productlist/productlist.component';
import { ProductdetailsComponent } from './product/productdetails/productdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserdetailsComponent,
    ProductComponent,
    CustomerComponent,
    OrderComponent,
    PagenotfoundComponent,
    LoginComponent,
    ProductlistComponent,
    ProductdetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RoutingModule

  ],
  providers: [ LoginService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
