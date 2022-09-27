import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl:string="https://nameless-savannah-21991.herokuapp.com";
  constructor(private _http:HttpClient) { }

  // newUserRegister(registerData:any){
  //   let dataUrl:string=`${this.baseUrl}/register`
  //   return this._http.post<any>(dataUrl,registerData, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  // }
  newUserRegister(data: any) {
    let dataUrl:string=`${this.baseUrl}/register`
    return this._http.post(dataUrl, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
  }

  userLogin(loginData:any){
    let dataUrl:string=`${this.baseUrl}/login`;
    return this._http.post<any>(dataUrl, loginData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
}
