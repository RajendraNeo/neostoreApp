import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';

// const routes: Routes = [
//   { path: '', component: ProductComponent },
//   { path: 'product/:id', component: ProductDetailsComponent}
// ];

const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
    children: [
      {
        path: 'product-list/:id',
        component: ProductDetailsComponent,
      },
      {
        path: 'product-list',
        component: ProductListComponent,
      },
      {
        path: '',
        redirectTo: 'product-list',
        pathMatch: 'full',
      }, 
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
