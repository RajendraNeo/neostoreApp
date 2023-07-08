import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent implements OnInit {
  id:any;
  profileData:any;
  updateProfileForm = new FormGroup({
    firstName: new FormControl(),
    secondName: new FormControl(),
    gender: new FormControl(),
    mobile: new FormControl(),
  });
  constructor(private _profileService:ProfileService) { }

  ngOnInit(): void {
    this._profileService.getProfile().subscribe((res)=>{
     this.profileData=res;
      this.updateProfileForm.controls["firstName"].setValue(this.profileData.userData.firstName);
      this.updateProfileForm.controls["secondName"].setValue(this.profileData.userData.secondName);
      this.updateProfileForm.controls["gender"].setValue(this.profileData.userData.gender);
      this.updateProfileForm.controls["mobile"].setValue(this.profileData.userData.mobile);
    })
  }

  submitUpdateProfile(){
    console.log(this.updateProfileForm.value);
    this._profileService.updateProfile(this.updateProfileForm.value).subscribe((res:any) =>{
      console.log(res);
    })
  }
}
