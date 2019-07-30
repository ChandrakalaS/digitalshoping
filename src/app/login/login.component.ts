import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../register/User';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User;
  invalidUser:boolean=false;
  constructor( private _router:Router) {
    this.user=new User();
   }
  navigateToRegister=()=>
  {
    this._router.navigate(['register'])
  }
  clearUser=()=>
  {
    this.invalidUser=true
    this.user=new User();
  }
  login=()=>
  {
    console.log(this.user.email)
    console.log(this.user.password)

    //compare login credentials
   let userObj=JSON.parse(localStorage.getItem(this.user.email))
   if(userObj!=null)
   {
   if(this.user.email==userObj.email && this.user.password==userObj.password)
   {
   console.log("valid user")
   this._router.navigate(["/home"])
   sessionStorage.setItem("key",userObj.name)
    }
   else{
    console.log("invalid Credentials")
    this.invalidUser=true
    this.clearUser()
   }
  }
   else{
    this.invalidUser=true
    this.clearUser()
  }
}
  ngOnInit() {
    //check whether the session exist and navigate
    //if(sessionStorage.getItem("key"))
   // this._router.navigate(["home"])
  }

}
