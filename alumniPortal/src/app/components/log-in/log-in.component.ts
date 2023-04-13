import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlumniServicesService } from 'src/app/services/alumni-services.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {

  public user:any;
  public token:any;
  public errorMessage: string|undefined;

  constructor(private _service:AlumniServicesService , private router:Router){}

  public eventspage(){                                        //to navigate between pages from nav bar
    this.router.navigate(['/events'],)
  }
  public contactpage(){
    this.router.navigate(['/contact'],)

  }
  public homepage(){
    this.router.navigate(['/home'],)

  }
  public signup(){
    this.router.navigate(['/signup'],)

  }
  public signin(){
    this.router.navigate(['/signin'],)

  }

  public logIn(credentials:any){
    this._service.authenticate(credentials).subscribe(
      (res: any)=>{
        this.user=res;
        this._service.token=res?.jwt;
        
        if(this._service.token)
        this.router.navigate(['/dashboard'],)
        else{
          this.errorMessage="Inavlid credentials!"                                               //invalid creddentials
        }
      }
     )
    }
}
