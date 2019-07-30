import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map,filter, flatMap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http:HttpClient) { }



  getProductFromAPI=()=>
  {
   return  this._http.get('/assets/products.json')
                     .pipe(map( (data)=>data['product']),
                     flatMap((data2)=>
                     (data2)),
                    filter(data3=>data3['rating']>4))
                    
    //make an API call to the server
    // let product1={
    //   name:"IPhone 7",
    //   brand:'Iphone',
    //   category:"mobile",
    //   description:"",
    //   price:30000,
    //   rating:4.9,
    //   quantity:1
    // }
    // let product2={
    //   name:"Bravia",
    //   brand:"sony",
    //   category:"TV",
    //   description:"",
    //   price:80000,
    //   rating:4.5,
    //   quantity:1
    // }
    // let product3={
    //   name:"Redmi note pro 7",
    //   brand:"Redmi",
    //   category:"mobile",
    //   description:"",
    //   price:20000,
    //   rating:4.9,
    //   quantity:1
    // }
    // return [product1,product2,product3]
    
  }
 

}
