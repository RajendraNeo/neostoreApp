import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  grid = true;
  public product: any = [];
  constructor(private _product:ProductService) { 
    // this.product= productItemList;
  }

  ngOnInit(): void {
    this.product=this._product.productItemList
  }
  
  selectCard(productItem:any){
    alert(JSON.stringify(productItem));
  }

 public viewGridList(){
  this.grid=!this.grid;
 }

}


