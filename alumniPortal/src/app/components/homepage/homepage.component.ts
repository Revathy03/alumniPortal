import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlumniServicesService } from 'src/app/services/alumni-services.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {


  constructor(private _service:AlumniServicesService , private router:Router){}

  ngOnInit(){
    this._service.token=null;
    
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
