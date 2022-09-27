import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  constructor(private param:ActivatedRoute,private service:ProductService) { }
  getMenuId:any;
  menuData:any;

  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    console.log(this.getMenuId,'getmenu');
    if(this.getMenuId)
    {
      this.menuData =  this.service.productItemList.filter((value)=>{
          return value.id == this.getMenuId;
        });
        console.log(this.menuData,'menudata>>');
        
    }
    
  }
}
