import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlumniDataService } from 'src/app/services/alumni-data.service';
import { AlumniServicesService } from 'src/app/services/alumni-services.service';

@Component({
  selector: 'app-alumni-alumni-list',
  templateUrl: './alumni-alumni-list.component.html',
  styleUrls: ['./alumni-alumni-list.component.css']
})
export class AlumniAlumniListComponent {

  public alumnis:any;
  id :number|undefined;
  user:any;
  members:any;

  constructor(private _service:AlumniServicesService , private router:Router ,private data:AlumniDataService){}

  ngOnInit(){
    if (!this._service.uid) {
      this.router.navigate(['/home']);
    }
    this.id = this._service.uid;
    this._service.fetchAlumni(this.id).subscribe(
      (res: any) => {
        this.user = res;
        this.user.name=this.user.name.toUpperCase()
      }
    );
//Actual call to the backend to fetch all the alumni details
    // this._service.fetchAlumnis().subscribe(     
    //   (res: any)=>{
    //     this.alumnis=res;
    //   }
    //  )     

    this.alumnis=this.data.members;

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
  