import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlumniServicesService } from 'src/app/services/alumni-services.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {

  public news:any;
  public feedbacks:any;
  id:number=0;
  user:any;

  constructor(private _service:AlumniServicesService , private router:Router){}

  ngOnInit(){
    this.id = this._service.uid;
    this.id=5;
    this._service.fetchAlumni(this.id).subscribe(
      (res: any) => {
        this.user = res;
        this.user.name=this.user.name.toUpperCase()
      }
    );
    this._service.getNews().subscribe(
      (res: any)=>{
        this.news=res.data;
      }
     )   
     this._service.getFeedback().subscribe(
      (res: any)=>{
        this.feedbacks=res.data;
      }
     )

  }

  public postNews(news:any){
    this._service.postNews(news).subscribe(
      (res: any)=>{
        this.router.navigate(['/adm-dashboard'],)
      }
     )     

  }
  public editprof(){
    this.router.navigate(['/profile'],)
  }

  public dashboard(){
    this.router.navigate(['/adm-dashboard'],)
  }

  public alumniList(){
    this.router.navigate(['/list'],)
  }

  public reqList(){
    this.router.navigate(['/requests'],)
  }

  public logout(){
    this.router.navigate(['/home'],)
  }


}
