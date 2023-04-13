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

  
}
