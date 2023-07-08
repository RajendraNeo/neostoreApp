import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-add-customer-address',
  templateUrl: './add-customer-address.component.html',
  styleUrls: ['./add-customer-address.component.scss']
})
export class AddCustomerAddressComponent implements OnInit {
  customerAddress:any;
  customerAddressForm = new FormGroup({
    address: new FormControl(),
    pincode: new FormControl(),
    city: new FormControl(),
    state: new FormControl(),
    country: new FormControl()
  })
  constructor(private _profileService:ProfileService) { }

  ngOnInit(): void {
    
  }

  submitCustomerAddress(){
    console.log(this.customerAddressForm.value);
    this._profileService.addCustomerAddress(this.customerAddressForm.value).subscribe((res:any)=>{
      this.customerAddress=res;
      this.customerAddressForm.reset();
    })
  }
}
