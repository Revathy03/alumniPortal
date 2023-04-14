import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlumniServicesService } from 'src/app/services/alumni-services.service';

@Component({
  selector: 'app-alumni-alumni-list',
  templateUrl: './alumni-alumni-list.component.html',
  styleUrls: ['./alumni-alumni-list.component.css']
})
export class AlumniAlumniListComponent {

  public alumnis:any;
  id :number=0;
  user:any;

  constructor(private _service:AlumniServicesService , private router:Router){}

  ngOnInit(){

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
