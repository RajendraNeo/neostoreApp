import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RatingModule } from 'ng-starrating';
import { CarouselModule } from 'ngx-owl-carousel-o';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RatingModule,
    CarouselModule,
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    FormsModule,
    ReactiveFormsModule,
    RatingModule,
    CarouselModule,
  ]
})
export class SharedModule { }
