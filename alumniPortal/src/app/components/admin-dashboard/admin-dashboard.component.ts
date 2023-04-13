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

  constructor(private _service:AlumniServicesService , private router:Router){}

  ngOnInit(){
    this._service.getNews().subscribe(
      (res: any)=>{
        this.news=res.data[0];
      }
     )   
     this._service.getFeedback().subscribe(
      (res: any)=>{
        this.feedbacks=res.data[0];
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
