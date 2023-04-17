import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlumniServicesService } from 'src/app/services/alumni-services.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {
  user:any;
  id:number|undefined;
  registrationForm!: FormGroup;

  constructor(private _service:AlumniServicesService , private router:Router,private fb: FormBuilder){}
  
  ngOnInit(){
    // if (!this._service.uid) {
    //   this.router.navigate(['/home']);
    // }
    this.id=this._service.uid;
    this.id=6;
    this._service.fetchAlumni(this.id).subscribe(
      (res: any)=>{
        this.user=res;
        this.user.name=this.user.name.toUpperCase();
        this.registrationForm = this.fb.group({
          name: [this.user.name],         
          contact:[this.user.contact],
          //image:[this.user.image],                               // image not get uploaded to the database
          yop:[this.user.yop],
          course:[this.user.course],
          department:[this.user.department],
          company:[this.user.company],
          designation:[this.user.designation],
          address:[this.user.address],
        });
      }
     )    

  }

  public update(data:any){
    this._service.editUser(data,this.id).subscribe(
      (res: any)=>{
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/profile']);
        });         }
     )     

  }

  public dashboard(){ 
        this.router.navigate(['/dashboard'],)   
  }
  public editprof(){
    this.router.navigate(['/profile'],)
  }
  
  public logout(){
    this.router.navigate(['/home'],)
  }

  public alumniList(){
    this.router.navigate(['/alumnilist'],)
  }



}
