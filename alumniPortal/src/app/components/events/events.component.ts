import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlumniServicesService } from 'src/app/services/alumni-services.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  

  constructor(private _service:AlumniServicesService , private router:Router){
   
  }

  public eventspage(){                                //to navigate between pages from nav bar
    this.router.navigate(['/events'],)
  }                                                   //static event page
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
}
