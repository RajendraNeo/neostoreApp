import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  responseData:any;
  constructor(private _login:AuthService, private _router:Router) { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(15)])
  });

  onSubmit(){
    this._login.userLogin(this.loginForm.value).subscribe(res=>{
      alert("Login success");
      console.log(res);
      if(res !=null){
        this.responseData=res;
        localStorage.setItem("token", this.responseData.token);
        this.loginForm.reset();
        this._router.navigate(['/pages/home']);
      }
    },
    err=>{
      console.log(err);
      alert("something wrong");
    })
    console.log(this.loginForm.value);
  }

  get email():FormControl{
    return this.loginForm.get("email") as FormControl;
  }

  get password():FormControl{
    return this.loginForm.get("password") as FormControl;
  }
}
