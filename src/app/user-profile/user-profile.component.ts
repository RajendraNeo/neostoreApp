import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  firstName!:string;
  secondName!:string;
  email!:string;
  mobile!:any;
  gender!:string;
  constructor(private _profileService:ProfileService) { }

  ngOnInit(): void {
    this._profileService.getProfile().subscribe((res:any)=>{
      console.log(res)
      if(res){
        this.firstName=res.userData.firstName;
        this.secondName=res.userData.secondName;
        this.email=res.userData.email;
        this.mobile=res.userData.mobile;
        this.gender=res.userData.gender;
      }
    });
  }


  
}
