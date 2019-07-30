import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from'@angular/router'
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { SecurityGuard } from '../security.guard';
import { ProductComponent } from '../home/product/product.component';
import { CartComponent } from '../home/cart/cart.component';
import { PaymentComponent } from '../home/payment/payment.component';

const routes:Routes=[
  {
    path:'home' ,component:HomeComponent,
    canActivate:[SecurityGuard],
    children:[{
      path:'product',component:ProductComponent
    },
    {
      path:'cart',component:CartComponent
    },
    {
      path:'payment',component:PaymentComponent
    }
  ]
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'register',component:RegisterComponent
  },
  
  {
    path:'**',redirectTo:'login'
  }
  
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
})
export class DigiRoutingModule { }
