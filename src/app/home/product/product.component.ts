import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products=[];
  selectedItems=[];
  count=0;
  searchText;
  constructor(private _service:ProductService,private _cartService:CartService) 
  { }

  ngOnInit() {
    this.count=this._cartService.cartCount;
    //this.products=this._service.getProductFromAPI()
      this._service.getProductFromAPI()
                   .subscribe((data)=>this.products.push(data))
  }
  searchProduct=()=>this.products=this.products.filter(prod=>prod.name.toLocaleLowerCase().split(" ").join("").includes(this.searchText.toLocaleLowerCase().split(" ").join("")))
    
  

  addToCart=(prod)=>
  {
  //add a condition
    let index=this._cartService.selectedItems.findIndex((data)=>data.name==prod.name);
    if(index!=-1)
    {
      this._cartService.selectedItems[index].quantity++
    }
    else
    {
    this._cartService.selectedItems.push(prod)
    this.count=this._cartService.selectedItems.length;
    this._cartService.cartCount=this.count;
    }
    console.log(this.selectedItems)
    //window.alert("Items added successfully")
}

}
