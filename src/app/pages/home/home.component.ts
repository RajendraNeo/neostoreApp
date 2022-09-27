import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public trend:any=[];
  public discount:any=[];
  public budget:any=[];
  public bestSeller:any=[];
  public ourBlog:any=[];
  constructor(private _homeService:HomeService) { }

  ngOnInit(): void {
    this.trend=this._homeService.trending;
    this.discount=this._homeService.discount;
    this.budget=this._homeService.budget;
    this.bestSeller=this._homeService.bestSeller;
    this.ourBlog=this._homeService.blog;
  }

  //carousel start
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    nav: true,
    navText: ['<img src="/assets/images/svg-icon/left-arrow.svg"/>', '<img src="/assets/images/svg-icon/right-arrow.svg"/>'],
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
  customOptions2: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    nav: false,
    autoplay: true,
    slideTransition: 'linear',
    autoplayTimeout: 0,
    autoplaySpeed: 3000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
  }
  //carousel end


}
