import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-varify-password',
  templateUrl: './varify-password.component.html',
  styleUrls: ['./varify-password.component.scss']
})
export class VarifyPasswordComponent implements OnInit {

  verifyForm:any;
  constructor(private _authService:AuthService, private _router:Router) { }

  ngOnInit(): void {
    this.verifyForm = new FormGroup({
      verificationCode: new FormControl(),
      password: new FormControl()
    })
  }

  submitVerify(){
    this._authService.verifyPassword(this.verifyForm.value).subscribe((res:any) => {
      console.log(res);
      this._router.navigate(['/auth/login'])
    })
  }

}
