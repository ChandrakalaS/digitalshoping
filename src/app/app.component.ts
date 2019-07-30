import { Component} from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  constructor( private _router:Router)
  {

  }
  title = 'DigitalShop';
  ngOnInit() {
    //check whether the session exist and navigate to home page directly
    if(sessionStorage.getItem("key"))
   this._router.navigate(["home"])
  }
}

