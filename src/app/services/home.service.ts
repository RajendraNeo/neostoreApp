import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private _http:HttpClient) { }

  trending = [
    {
      image: 'assets/images/png/chairs.png',
      desc: 'White Wooden Chair',
      price: '1200',
    },
    {
      image: 'assets/images/png/sofa.png',
      desc: 'Modern Sofa Couch',
      price: '1200',
    },
    {
      image: 'assets/images/png/support-chair.png',
      desc: 'Armen Living Jaguar Chair',
      price: '1200',
    },
    {
      image: 'assets/images/png/watch.png',
      desc: 'Armen Living Jaguar Chair',
      price: '1200',
    },
    {
      image: 'assets/images/png/lamb.png',
      desc: 'Globe Desk Lamp',
      price: '1200',
    },
  ];
  
  discount=[
    {
      image: 'assets/images/png/bedding-sets.png',
      heading: 'Bedding Sets',
      desc: 'Floral Tales Collection',
      discount: '20%',
    },
    {
      image: 'assets/images/png/chairs-sets.png',
      heading: 'Soleil Dining Chair',
      desc: 'lightweight chair',
      discount: '20%',
    },
    {
      image: 'assets/images/png/living-sets.png',
      heading: 'Living Sets',
      desc: 'Easy-to-match shade of beige.',
      discount: '20%',
    },
    {
      image: 'assets/images/png/outdoor-sets.png',
      heading: 'Outdoor Sets',
      desc: 'Simplest design solutions.',
      discount: '20%',
    },
  ];

  budget = [
    {
      image: 'assets/images/png/sofas-under-1.png',
      heading: 'Sofas under',
      price: '1200',
    },
    {
      image: 'assets/images/png/sofas-under-2.png',
      heading: 'Sofas under',
      price: '1200',
    },
    {
      image: 'assets/images/png/sofas-under-3.png',
      heading: 'Sofas under',
      price: '1200',
    },
  ];

  bestSeller = [
    {
      image: 'assets/images/png/best-seller-1.png',
      heading: 'White Wooden Chair',
      oldPrice: '8000',
      newPrice: '6000',
      star:4.2
    },
    {
      image: 'assets/images/png/best-seller-2.png',
      heading: 'White Wooden Chair',
      oldPrice: '8000',
      newPrice: '6000',
      star:3.8
    },
    {
      image: 'assets/images/png/best-seller-3.png',
      heading: 'White Wooden Chair',
      oldPrice: '8000',
      newPrice: '6000',
      star:4.6
    },
    {
      image: 'assets/images/png/best-seller-4.png',
      heading: 'White Wooden Chair',
      oldPrice: '8000',
      newPrice: '6000',
      star:3.5
    },
    {
      image: 'assets/images/png/best-seller-5.png',
      heading: 'White Wooden Chair',
      oldPrice: '8000',
      newPrice: '6000',
      star:4.5
    },
    {
      image: 'assets/images/png/best-seller-6.png',
      heading: 'White Wooden Chair',
      oldPrice: '8000',
      newPrice: '6000',
      star:3.2
    },
  ];

  blog = [
    {
      image: 'assets/images/png/our-blog-1.png',
      subHeading: 'Bedroom CHAIR',
      heading: 'Perfect Bedroom Corner Chair',
      desc: 'An accent chair is a great focal point, adds contrast, and complements the room’s decor.',
    },
    {
      image: 'assets/images/png/our-blog-2.png',
      subHeading: 'FURNITURE',
      heading: 'A Beautiful Sunday Morning',
      desc: 'An accent chair is a great focal point, adds contrast, and complements the room’s decor.',
    },
    {
      image: 'assets/images/png/our-blog-3.png',
      subHeading: 'DINING CHAIR',
      heading: 'Maximalism Design Style',
      desc: 'A maximalist space is interesting to look at. Contrast and color are everything.',
    },
  ];

  topRatedProducts(){
   return this._http.get("https://nameless-savannah-21991.herokuapp.com/getDashboard");
  }
  
}
