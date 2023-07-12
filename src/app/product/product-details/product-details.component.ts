import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  constructor(private param:ActivatedRoute,private _productService:ProductService, private _homeService:HomeService) { }
  getMenuId:any;
  menuData:any;
  public trend:any=[];
  ngOnInit(): void {
    this.trend=this._homeService.trending;
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    console.log(this.getMenuId,'getmenu');
    if(this.getMenuId)
    {
      this.menuData =  this._productService.productItemList.filter((value)=>{
          return value.id == this.getMenuId;
        });
        console.log(this.menuData,'menudata>>');
        
    }
    
  }

  addCart(id:any){
    if(localStorage.getItem('mycart')!=undefined){
      let data:any=localStorage.getItem('mycart');
      let arr=JSON.parse(data);
      if(arr.includes(id)){
        alert('Id already in a cart');
      }else{
        arr.push(id);
        localStorage.setItem('mycart', JSON.stringify(arr));
        this._productService.addToCart(arr);
        alert('Add to Cart Successfully')
      }
    }else{
      let arr=[];
      arr.push(id);
      localStorage.setItem('mycart', JSON.stringify(arr));
      this._productService.addToCart(arr);
      alert('Add to cart succesffully')
    }
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    nav: true,
    navText: ['<img src="assets/images/svg-icon/left-arrow.svg"/>', '<img src="assets/images/svg-icon/right-arrow.svg"/>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
  }
}
