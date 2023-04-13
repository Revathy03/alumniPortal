import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlumniServicesService } from 'src/app/services/alumni-services.service';

@Component({
  selector: 'app-alumni-dashboard',
  templateUrl: './alumni-dashboard.component.html',
  styleUrls: ['./alumni-dashboard.component.css']
})
export class AlumniDashboardComponent {

  public news:any;

  constructor(private _service:AlumniServicesService , private router:Router){}

  id:number=0;
  user:any;

  ngOnInit(){
    this._service.getNews().subscribe(
      (res: any)=>{
        this.news=res.data[0];
      }
     )   
     this.id=this._service.uid;
    this._service.fetchAlumni(this.id).subscribe(
      (res: any)=>{
        this.user=res;
      }
     )    
  }

  public editprof(){
    this.router.navigate(['/profile'],)
  }
  
  public logout(){
    this.router.navigate(['/home'],)
  }

}
