import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerAddressComponent } from './add-customer-address/add-customer-address.component';
import { UpdateCustomerAddressComponent } from './update-customer-address/update-customer-address.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { UserProfileComponent } from './user-profile.component';

const routes: Routes = [
  { path: '', component: UserProfileComponent,
    // children: [
    //   { path: 'update-profile', component: UpdateProfileComponent },  
    // ],
 },
 {
  path:'update-profile', component:UpdateProfileComponent
 },
 {
  path:'add-Address', component:AddCustomerAddressComponent
 },
 {
  path:'update-Address', component:UpdateCustomerAddressComponent
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProfileRoutingModule { }
