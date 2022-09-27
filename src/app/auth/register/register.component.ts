import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  handleUpdateResponse: any;
  handleError: any;

  constructor(private _register:AuthService, private _router:Router) { }

  ngOnInit(): void {
  }

  registerForm = new FormGroup({
    firstName: new FormControl("", [Validators.required, Validators.minLength(3), Validators.pattern("[a-zA-Z].*")]),
    secondName: new FormControl("", [Validators.required, Validators.minLength(3), Validators.pattern("[a-zA-Z].*")]),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
    contactNo: new FormControl("8459621234"),
    gender: new FormControl("male")
    // iAgree: new FormControl(true, Validators.requiredTrue)
  });

  onSubmit() {
   this._register.newUserRegister(this.registerForm.value).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err.message);
      },
   });
  //  this._router.navigate(['/auth/login'])
    console.log(this.registerForm.value);
    // this.registerForm.reset();
  }

  get firstName():FormControl{
    return this.registerForm.get("firstName") as FormControl;
  }

  get secondName():FormControl{
    return this.registerForm.get("secondName") as FormControl;
  }

  get email():FormControl{
    return this.registerForm.get("email") as FormControl;
  }

  get password():FormControl{
    return this.registerForm.get("password") as FormControl;
  }

  // get terms():FormControl{
  //   return this.registerForm.get("terms") as FormControl;
  // }
}
