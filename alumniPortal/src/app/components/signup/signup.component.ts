import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlumniServicesService } from 'src/app/services/alumni-services.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  registrationForm!: FormGroup;
  showNotification = false;
  formattedData:any;
  
  constructor(private _service:AlumniServicesService , private router:Router, private fb: FormBuilder){}

  ngOnInit() {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      contact:['',Validators.required,],
      //image:[],                               // image not get uploaded to the database
      yop:['',Validators.required],
      course:['',Validators.required],
      department:['', Validators.required],
      company:[''],
      designation:[''],
      address:['', Validators.required],
    });
  }


  public eventspage(){                              //to navigate between pages from nav bar
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
  public onSubmit(data:any){
    console.log(data);
    data = { "data": data };
    console.log(data);
    this._service.addMemberReq(data).subscribe(
      (res: any)=>{
        console.log(res);

        //this.router.navigate(['/home'],)//should change
      }
     )
     
     
     this.showNotification = true;

  }

 public  hideNotification(){
  this.showNotification = false;
  this.router.navigate(['/home'],)
 }

}
