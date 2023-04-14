import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlumniServicesService } from 'src/app/services/alumni-services.service';

@Component({
  selector: 'app-alumni-list',
  templateUrl: './alumni-list.component.html',
  styleUrls: ['./alumni-list.component.css']
})
export class AlumniListComponent {

  public user:any;
  public id:number=0;
  public  alumnis:any
    //this.id=this._service.uid;
  constructor(private _service:AlumniServicesService , private router:Router){}

  ngOnInit(){
    this.id=6;
    this._service.fetchAlumni(this.id).subscribe(
      (res: any)=>{
        this.user=res;
        this.user.name = this.user.name.toUpperCase();
        console.log(this.user);
      }
     )   ;
    }
   /*  this._service.fetchAlumnis().subscribe(
      (res: any)=>{
        this.alumnis=res;
        console.log(this.alumnis);
      }
     ) */ 
  

  public remove(id:number){
    this._service.deleteUser(id).subscribe(
      (res: any)=>{
        this.router.navigate(['/list'],)
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
