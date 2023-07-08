import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private myCart=new Subject<any>();
  constructor() { }

  productItemList=[
    {
      id:1,
      imgPath:"/assets/images/png/sofas-under-1.png",
      productTitle:"Ultricies condimentum imperdiet",
      pdActualPrice:26.00,
      pdDiscountPrice:42.00,
    },
    {
      id:2,
      imgPath:"/assets/images/png/sofas-under-2.png",
      productTitle:"Vitae suspendisse sed",
      pdActualPrice:26.00,
      pdDiscountPrice:42.00,
    },
    {
      id:3,
      imgPath:"/assets/images/png/sofas-under-1.png",
      productTitle:"Sed at fermentum",
      pdActualPrice:26.00,
      pdDiscountPrice:42.00,
    },
    {
      id:4,
      imgPath:"/assets/images/png/sofas-under-1.png",
      productTitle:"Ultricies condimentum imperdiet",
      pdActualPrice:26.00,
      pdDiscountPrice:42.00,
    },
    {
      id:5,
      imgPath:"/assets/images/png/sofas-under-2.png",
      productTitle:"Vitae suspendisse sed",
      pdActualPrice:26.00,
      pdDiscountPrice:42.00,
    },
    {
      id:6,
      imgPath:"/assets/images/png/sofas-under-1.png",
      productTitle:"Sed at fermentum",
      pdActualPrice:26.00,
      pdDiscountPrice:42.00,
    },
    {
      id:7,
      imgPath:"/assets/images/png/sofas-under-1.png",
      productTitle:"Ultricies condimentum imperdiet",
      pdActualPrice:26.00,
      pdDiscountPrice:42.00,
    },
    {
      id:8,
      imgPath:"/assets/images/png/sofas-under-2.png",
      productTitle:"Vitae suspendisse sed",
      pdActualPrice:26.00,
      pdDiscountPrice:42.00,
    },
    {
      id:9,
      imgPath:"/assets/images/png/sofas-under-1.png",
      productTitle:"Sed at fermentum",
      pdActualPrice:26.00,
      pdDiscountPrice:42.00,
    },
  ]

  addToCart(data:any){
    this.myCart.next(data);
  }

  getData(){
    return this.myCart;
  }
}
