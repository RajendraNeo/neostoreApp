import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
 
  forgetForm:any;
  constructor(private _authService: AuthService, private _router: Router) { }

  ngOnInit(): void {
    this.forgetForm = new FormGroup({
      email : new FormControl()
    })
  }

  submitForget(){
    this._authService.forgetPassword(this.forgetForm.value).subscribe((res:any) =>{
      console.log(res);
      this.forgetForm.reset();
      this._router.navigate(['auth/verify-password']);
    })
  }
}
