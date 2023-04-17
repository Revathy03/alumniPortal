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
  public id:number|undefined;
  public  alumnis:any
  constructor(private _service:AlumniServicesService , private router:Router){}

  ngOnInit(){
    // if (!this._service.uid) {
    //   this.router.navigate(['/home']);
    // }
    this.id = this._service.uid;
    this._service.fetchAlumni(this.id).subscribe(
      (res: any) => {
        this.user = res;
        this.user.name=this.user.name.toUpperCase()
      }
    );
    
     this._service.fetchAlumnis().subscribe(
      (res: any)=>{
        this.alumnis=res;
      }
     ) 
    }

  public remove(id:number){
    this._service.deleteUser(id).subscribe(
      (res: any)=>{
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/list']);
        });
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
