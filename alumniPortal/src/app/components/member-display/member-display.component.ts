import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlumniDataService } from 'src/app/services/alumni-data.service';
import { AlumniServicesService } from 'src/app/services/alumni-services.service';

@Component({
  selector: 'app-member-display',
  templateUrl: './member-display.component.html',
  styleUrls: ['./member-display.component.css']
})
export class MemberDisplayComponent {
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

  public eventspage(){                                 //to navigate between pages from nav bar
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

  public memberlist(){
    this.router.navigate(['/members'],)

  }



}
