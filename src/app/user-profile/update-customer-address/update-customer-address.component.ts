import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-update-customer-address',
  templateUrl: './update-customer-address.component.html',
  styleUrls: ['./update-customer-address.component.scss']
})
export class UpdateCustomerAddressComponent implements OnInit {
  id:any;
  addressData:any;
  addressId:any;
  updateAddressForm = new FormGroup({
    address: new FormControl(),
    pincode: new FormControl(),
    city: new FormControl(),
    state: new FormControl(),
    country: new FormControl()
  });

  constructor(private _profileService:ProfileService) { }

  ngOnInit(): void {

    this._profileService.getCustAddress().subscribe((res:any) =>{
      this.addressData = res;
      this.addressId = this.addressData.Addresses[0]._id;
      console.log(res, this.addressId);
      this.updateAddressForm.controls["address"].setValue(this.addressData.Addresses[0].address);
      this.updateAddressForm.controls["pincode"].setValue(this.addressData.Addresses[0].pincode);
      this.updateAddressForm.controls["city"].setValue(this.addressData.Addresses[0].city);
      this.updateAddressForm.controls["state"].setValue(this.addressData.Addresses[0].state);
      this.updateAddressForm.controls["country"].setValue(this.addressData.Addresses[0].country);

    })
  }

  submitUpdateAddress(){

    this._profileService.updateCustomerAddress(this.updateAddressForm.value).subscribe({
      next: (res) =>{
        console.log(res);
      },
      error: (err) => {
        console.log(err.message);
        }
    })

  }

}
