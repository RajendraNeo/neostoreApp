import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { EllipsisPipe } from '../pipe/ellipsis.pipe';


@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    EllipsisPipe,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    CarouselModule
  ]
})
export class PagesModule { }
