import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor( ) { }

  captcha;
  captchaVal:string
  errorMsg:string
  
  generateCaptcha=()=>
  {
  let alphabetes=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
   let a =Math.floor(Math.random()*10)
   let b =Math.floor(Math.random()*10)
   let c =Math.floor(Math.random()*10)
   let d =Math.floor(Math.random()*10)
   let e =Math.floor(Math.random()*10)
 this.captcha=a+""+alphabetes[a]+b+""+alphabetes[c]+""+c+""+d
  }
  pay=()=>
  {
    if(this.captchaVal==this.captcha)
    {
      this.errorMsg="successful Payment"
    }
    else
    {
      this.errorMsg="unsuccessful payment"
      this.generateCaptcha();
    }
    }

  
  refresh=()=>
  {
    this.generateCaptcha();
  }

  ngOnInit() {
    this.generateCaptcha();
  }

}
