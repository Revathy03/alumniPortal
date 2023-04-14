import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlumniServicesService } from 'src/app/services/alumni-services.service';

@Component({
  selector: 'app-alumni-dashboard',
  templateUrl: './alumni-dashboard.component.html',
  styleUrls: ['./alumni-dashboard.component.css']
})
export class AlumniDashboardComponent {

  public news:any;

  constructor(private _service:AlumniServicesService , private router:Router){}

  id:number=0;
  user:any;
  nonews=false;

  ngOnInit(){
    this._service.getNews().subscribe(
      (res: any)=>{
        this.news=res.data;           /* 
        attributes
        : 
        {title: 'alumni meet', content: 'blah blah blah', dateofpost: '2023-03-29', createdAt: '2023-04-13T05:32:48.324Z', updatedAt: '2023-04-13T05:32:48.324Z', …}
        id
        : 
        1
        [[Prototype]]
        : 
        Object
        1
        : 
        attributes
        : 
        {title: 'yd', content: 'ydydyd', dateofpost: '2023-04-05', createdAt: '2023-04-14T05:53:25.346Z', updatedAt: '2023-04-14T05:54:07.264Z', …}
        id
        : 
        2
        [[Prototype]]
        : 
        Object*/ 
        console.log(this.news);
        if (res.length === 0) {
          this.nonews=true;
        }
      }
     )   
     this.id=this._service.uid;
    this._service.fetchAlumni(this.id).subscribe(
      (res: any)=>{
        this.user=res;
        this.user.name = this.user.name.toUpperCase();
        console.log(this.user);
      }
     )    
  }

  toTitleCase(str: string) {
    return str.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
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
