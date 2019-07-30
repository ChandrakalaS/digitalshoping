import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems=[];
  amount=0;

  constructor(private _router:Router,private _cartService:CartService) {   }
  
  increaseQuantity=(prod)=>
  {
    prod.quantity++;
    this.calculateTotal();
  }
  decreaseQuantity=(prod)=>
  {
    if(prod.quantity<=1)
    {
      this.remove(prod);
    }
    else{
    prod.quantity--;
    this.calculateTotal();
    }
  }
  pay=()=>
  {
    this._router.navigate(["/home/payment"])
  }

  remove=(prod)=>
  {
    this.amount=0;
    let index=this.cartItems.lastIndexOf(prod)
    this.cartItems.splice(index,1)
    this._cartService.cartCount--;
    this.calculateTotal();
  }
  //to calculate the total amount
  calculateTotal=()=>{
    this._cartService.selectedItems.forEach((item)=>this.amount+=item.quantity*item.price)
}

  ngOnInit() {
    this.cartItems=this._cartService.selectedItems
    this.calculateTotal();

  }

}
