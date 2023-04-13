import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlumniServicesService } from 'src/app/services/alumni-services.service';

@Component({
  selector: 'app-alumni-alumni-list',
  templateUrl: './alumni-alumni-list.component.html',
  styleUrls: ['./alumni-alumni-list.component.css']
})
export class AlumniAlumniListComponent {

  public users:any;

  constructor(private _service:AlumniServicesService , private router:Router){}

  ngonInit(){
    this._service.fetchAlumnis().subscribe(
      (res: any)=>{
        this.users=res;
      }
     )     
  }

  public dashboard(){    
    this.router.navigate(['/dashboard'],)    
}

}
