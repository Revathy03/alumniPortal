import { Component } from '@angular/core';
import { AlumniServicesService } from './services/alumni-services.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'alumniPortal';
  public members:any;

  constructor(private _service:AlumniServicesService, private router:Router){}

  ngOnInit(){

    // this.router.navigate(['/home'])
  }

  /*public fetch(){
    this._service.fetchMembers().subscribe(
      (res: any)=>{
        this.members=res.data;
        console.log(this.members);
      }
     )
  }*/
}
