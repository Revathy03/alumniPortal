import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlumniServicesService } from 'src/app/services/alumni-services.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent {

  public users:any;

  constructor(private _service:AlumniServicesService , private router:Router){}

  ngonInit(){
    this._service.fetchReqs().subscribe(
      (res: any)=>{
        this.users=res;
      }
     )     
  }

  public reject(id:number){
    this._service.deletereq(id).subscribe(
      (res: any)=>{
        this.router.navigate(['/requests'],)
      }
     )     

  }

  public accept(data:any){
    this._service.deletereq(data.id).subscribe(
      (res: any)=>{
        this._service.register(data).subscribe(
          (res: any)=>{
            this.router.navigate(['/requests'],)
          }
         )   
      }
     )     

     

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
 