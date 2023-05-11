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
  isValidEmail=true;

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
    const emailRegex = /\S+@\S+\.\S+/;
    this. isValidEmail = emailRegex.test(this.email);
    if(this.isValidEmail){
    this.comments={
      data:{
        name:this.name,
        email:this.email,
        message:this.msg
      }
    }
    this._service.postFeedback(this.comments).subscribe(
      (res: any)=>{
        
      }
     )
     this.errorMessage="";
     this.showNotification = true;
    }
    else{
      this.errorMessage="Please enter valid email!"
    }
    }
    else{
      this.errorMessage="Please enter all the fields!"    
    }
  }

  public  hideNotification(){
    this.showNotification = false;
  
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/contact']);
    });

   }
   public memberlist(){
    this.router.navigate(['/alumnilist'],)

  }
}
 