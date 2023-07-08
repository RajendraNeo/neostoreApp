import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private baseUrl:string="https://nameless-savannah-21991.herokuapp.com";
  public userName=new BehaviorSubject<any>("")
  constructor(private _http:HttpClient) { }

  getProfile(){
    let dataUrl=`${this.baseUrl}/profile`
    return this._http.get(dataUrl);
  }

  updateProfile(profileDetails:any) {
    let profileUrl=`${this.baseUrl}/updateprofile`
    return this._http.post(profileUrl, JSON.stringify({profileDetails}));
    // return this._http.post(this.baseUrl + 'updateprofile', JSON.stringify({profileDetails}), {
    //   headers: new HttpHeaders({
    //     "content-type": "application/json",
    //     authorization: `Bearer ${token}`
    //    }),
    // });
  }

  addCustomerAddress(address:any){
    let addAddressUrl=`${this.baseUrl}/addCustAddress`
    return this._http.post(addAddressUrl,JSON.stringify({address}), {
    });
  }

  getUserName(data:any){
   this.userName.next(data);
  }

  getCustAddress(){
    let dataUrl=`${this.baseUrl}/getCustAddress`;
    return this._http.get(dataUrl);
  }

  updateCustomerAddress(updatedAddress:any){
    let updateAddressUrl=`${this.baseUrl}/updateAddress`
    return this._http.post(updateAddressUrl, JSON.stringify({updatedAddress}));
  }
}
