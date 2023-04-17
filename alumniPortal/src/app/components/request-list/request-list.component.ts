import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlumniServicesService } from 'src/app/services/alumni-services.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent {

  public reqs:any;
  public user:any;
  public id:number|undefined;
  public data1:any;

  constructor(private _service:AlumniServicesService , private router:Router){}

  ngOnInit(){
    // if (!this._service.uid) {
    //   this.router.navigate(['/home']);
    // }
    this.id = this._service.uid;
   this.id=6;
    this._service.fetchAlumni(this.id).subscribe(
      (res: any) => {
        this.user = res;
        this.user.name=this.user.name.toUpperCase()
      }
    );

    this._service.fetchReqs().subscribe(
      (res: any)=>{
        this.reqs=res.data;
      }
     )     
  }

  public reject(id:number){
    this._service.deletereq(id).subscribe(
      (res: any)=>{
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/requests']);
        });      }
     )     

  }

  public accept(data:any){
    console.log("accepted")
    const id=data.id;
    data=data.attributes
    console.log(data);
    if(data.image){
    this.data1={
      email:data.email,
      username:data.email,
      password:data.password,
      name:data.name,
      contact:data.contact,
      image:data.image,
      yop:data.yop,
      course:data.course,
      department:data.department,
      designation:data.designation,
      company:data.company,
      address:data.address
    }
  }
  else{
    this.data1={
      email:data.email,
      username:data.email,
      password:data.password,
      name:data.name,
      contact:data.contact,
      yop:data.yop,
      course:data.course,
      department:data.department,
      designation:data.designation,
      company:data.company,
      address:data.address
    }
  }
    this._service.deletereq(id).subscribe(
      (res: any)=>{
        this._service.register(this.data1).subscribe(
          (res: any)=>{
            this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
              this.router.navigate(['/requests']);
            });
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
 