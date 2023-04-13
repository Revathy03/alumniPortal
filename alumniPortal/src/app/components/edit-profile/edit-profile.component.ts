import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlumniServicesService } from 'src/app/services/alumni-services.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {

  id:number=0;
  constructor(private _service:AlumniServicesService , private router:Router){}

  ngOnInit(){
    this.id=this._service.uid;
  }

  public update(data:any){
    this._service.editUser(data,this.id).subscribe(
      (res: any)=>{
        this.router.navigate(['/profile'],)
      }
     )     

  }

  public dashboard(){ 
        this.router.navigate(['/dashboard'],)   
  }


}
