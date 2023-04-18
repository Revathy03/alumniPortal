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
  id:number|undefined;
  user:any;
  title:string|undefined;
  content:string|undefined;
  image:File | undefined;
  post:any;

  constructor(private _service:AlumniServicesService , private router:Router){}

  ngOnInit(){
    if (!this._service.uid) {
      this.router.navigate(['/home']);
    }
    this.id = this._service.uid;
    //this.id=5;
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

  public postNews(){
    if(this.image){
    this.post={data:{
      title:this.title,
      content:this.content,
      image:this.image
    }}
    

    }
    else{
      
        this.post={data:{
          title:this.title,
          content:this.content,
        }}
       
    }
    console.log(this.post);
    
    this._service.postNews(this.post).subscribe(
      (res: any)=>{
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/adm-dashboard']);
        });
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
