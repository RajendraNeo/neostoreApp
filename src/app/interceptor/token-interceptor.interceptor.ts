import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class TokenInterceptorInterceptor implements HttpInterceptor {
  // token=localStorage.getItem('token')
  constructor(private inject:Injector,private toastr: ToastrService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // let jwtToken=request.clone({
    //   setHeaders:{
    //     "content-type": "application/json",
    //     authorization: `Bearer ${this.token}`
    //   }
    // })
    // return next.handle(jwtToken);
    let authService=this.inject.get(AuthService);
    let jwtToken=request.clone({
      setHeaders:{
          "content-type": "application/json",
          authorization: 'Bearer ' +authService.getToken()
        }
    });
    return next.handle(jwtToken).pipe(catchError((error: HttpErrorResponse) => {
      if (error.status === 501) {
        console.log('server error');
        // display an error message to the user that the server is down
      } else {
        // handle other error scenarios here
      }
      return throwError(error);
    }));
  }

  // error Solved
// handleError(error:HttpErrorResponse){
//   let errorMessage:string="";
//   if(error.error instanceof ErrorEvent){
//     //client side Error
//     errorMessage=`Error  : ${error.error.message}`
//   }else{
//     //Server side error
//     errorMessage=`Status : ${error.status} \n Message: ${error.message}`
//   }
//   return throwError(errorMessage);
// }
}
