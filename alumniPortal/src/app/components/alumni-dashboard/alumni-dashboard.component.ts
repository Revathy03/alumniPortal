import { Component } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
import { AlumniServicesService } from 'src/app/services/alumni-services.service';

@Component({
  selector: 'app-alumni-dashboard',
  templateUrl: './alumni-dashboard.component.html',
  styleUrls: ['./alumni-dashboard.component.css']
})
export class AlumniDashboardComponent {

  public news:any;

  constructor(private _service:AlumniServicesService , private router:Router, private route: ActivatedRoute){}

  id:number|undefined;
  user:any;
  nonews=false;

  ngOnInit(){
     

  // if user is not authorized, navigate to login page
  // if (!this._service.uid) {
  //   this.router.navigate(['/home']);
  // }
    this._service.getNews().subscribe(
      (res: any)=>{
        this.news=res.data;              
        console.log(this.news);
        if (res.length === 0) {
          this.nonews=true;
        }
      }
     )   
     this.id=this._service.uid;
   //  this.id=6;
    this._service.fetchAlumni(this.id).subscribe(
      (res: any)=>{
        this.user=res;
        this.user.name = this.user.name.toUpperCase();
        console.log(this.user);
      }
     )    
  }

  toTitleCase(str: string) {
    return str.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
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
