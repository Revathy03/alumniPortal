import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlumniServicesService } from 'src/app/services/alumni-services.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  name:string|undefined;
  email:string|undefined;
  msg:string|undefined;
  comments:any;
  public errorMessage:string|undefined;
  showNotification = false;

  constructor(private _service:AlumniServicesService , private router:Router,private location: Location){}

  public eventspage(){
    this.router.navigate(['/events'],)                          //to navigate between pages from nav bar
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

  public feedback(){
    if(this.name && this.email && this.msg){
    console.log("feedback fnn");
    console.log(this.name);
    console.log(this.email);
    console.log(this.msg);
    
  /*  this._service.postFeedback(this.comments).subscribe(
      (res: any)=>{
      }
     )*/
     this.errorMessage="";
     this.showNotification = true;
    }
    else{
      this.errorMessage="Please enter all the fields!"    
    }
  }

  public  hideNotification(){
    this.showNotification = false;
    this.router.navigate(['/home'],)
    /*this.router.navigate(['/contact'],).then(() => {
      this.location.go('/contact');
      window.location.reload();
    });*/
   }
}
 