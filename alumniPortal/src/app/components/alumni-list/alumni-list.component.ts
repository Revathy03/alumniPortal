import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlumniServicesService } from 'src/app/services/alumni-services.service';

@Component({
  selector: 'app-alumni-list',
  templateUrl: './alumni-list.component.html',
  styleUrls: ['./alumni-list.component.css']
})
export class AlumniListComponent {

  public users:any;

  constructor(private _service:AlumniServicesService , private router:Router){}

  ngonInit(){
    this._service.fetchAlumnis().subscribe(
      (res: any)=>{
        this.users=res;
      }
     )     
  }

  public remove(id:number){
    this._service.deleteUser(id).subscribe(
      (res: any)=>{
        this.router.navigate(['/list'],)
      }
     )     

  }

  public dashboard(){    
    this.router.navigate(['/adm-dashboard'],)    
}


}
