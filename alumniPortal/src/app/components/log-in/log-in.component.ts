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
  public identifier:string|undefined;
  public password:string|undefined;
  public errorMessage: string|undefined;
  public credentials:any;

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

  public memberlist(){
    this.router.navigate(['/alumnilist'],)

  }

  public logIn(){

    if(this.identifier && this.password){

      this.credentials={
        identifier:this.identifier,
        password:this.password
      }
    this._service.authenticate(this.credentials).subscribe(
      (res: any)=>{

        this._service.token=res?.jwt;
        this._service.uid=res.user.id;
        const adm=res.user.admin
        if(adm){
        this.router.navigate(['/adm-dashboard'],)}
        else{
          this.router.navigate(['/dashboard'],)}       
      },
      (error:any)=>{       
          this.errorMessage="Inavlid credentials!"                                               //invalid creddentials
        
      }
     )
    }
    }
}
