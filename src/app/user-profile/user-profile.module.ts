import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { UserProfileComponent } from './user-profile.component';
import { SharedModule } from '../shared/shared.module';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { AddCustomerAddressComponent } from './add-customer-address/add-customer-address.component';
import { UpdateCustomerAddressComponent } from './update-customer-address/update-customer-address.component';


@NgModule({
  declarations: [
    UserProfileComponent,
    UpdateProfileComponent,
    AddCustomerAddressComponent,
    UpdateCustomerAddressComponent
  ],
  imports: [
    CommonModule,
    UserProfileRoutingModule,
    SharedModule
  ]
})
export class UserProfileModule { }
