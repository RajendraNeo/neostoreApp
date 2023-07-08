import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { 
    path: 'home', component: HomeComponent 
  },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) }, 
  { path: 'pages', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
  { path: 'product',
  // canActivate: [AuthGuard],
  loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
  { path: 'user-profile', 
  canActivate: [AuthGuard],
  loadChildren: () => import('./user-profile/user-profile.module').then(m => m.UserProfileModule) },
  {
    path:'**', component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
