import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
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
  // https://nameless-savannah-21991.herokuapp.com/register
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

  forgetPassword(data: any) {
    let dataUrl:string=`${this.baseUrl}/forgotPassword`;
    return this._http.post<any>(dataUrl,data,{
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  verifyPassword(data: any) {
    let dataUrl:string=`${this.baseUrl}/recoverPassword`;
    return this._http.post<any>(dataUrl,data,{
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  isLoggedIn():boolean{
    // return localStorage.getItem("token")!=null;
    const access_token = localStorage.getItem('token');
    if(access_token!=null){
      return true;
    }
    return false
  }

  getToken(){
    return localStorage.getItem("token")||"";
  }
}
