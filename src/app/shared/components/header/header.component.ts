import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/product.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userName!:string;
  isLoggedIn:boolean=false;
  cart=0;
  myCart:any=0;
  constructor(private router:Router,private _productService:ProductService, private _profileService:ProfileService, private _authService:AuthService) { }

  ngOnInit(): void {
    this._profileService.getProfile().subscribe((res:any)=>{
     this.userName=res.userData.firstName;
    })
    // this._profileService.userName.subscribe((res:any)=>{
    //   this.userName=res;
    // })
   this.isLoggedIn=this._authService.isLoggedIn();

   this._productService.getData().subscribe((res:any)=>{
   this.myCart=res.length;
   });

   if(this.myCart==0){
    if(localStorage.getItem('mycart')!=undefined){
      let data:any=localStorage.getItem('mycart');
      let arr=JSON.parse(data)
      this.myCart=arr.length;
     }
   }
  }

  goToLogin(){
   this.router.navigate(['/auth/login'])
  }

  navigateToHome(){
    this.router.navigate(['/home'])
  }

  goToProduct(){
    this.router.navigate(['product/product-list'])
  }

  gotoProfile(){
    this.router.navigate(['/user-profile']);
  }

  updateProfile(){
    this.router.navigate(['user-profile/update-profile'])
  }

  addCustomerAddress(){
    this.router.navigate(['user-profile/add-Address']);
  }

  logout(){
    localStorage.removeItem("token");
    this.router.navigate(['/home'])
  }

  updateCustomerAddress(){
    this.router.navigate(['user-profile/update-Address']);
  }
}
