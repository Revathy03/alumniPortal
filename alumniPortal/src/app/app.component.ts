import { Component, HostListener, ViewChild } from '@angular/core';
import { AlumniServicesService } from './services/alumni-services.service';
import { Router } from '@angular/router';
import { EventsComponent } from './components/events/events.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  // @ViewChild(EventsComponent)
  // eventsComponent!: EventsComponent;

  // @HostListener('window:beforeunload', ['$event'])
  // handleBeforeUnload(event: BeforeUnloadEvent) {
  //   this.eventsComponent.ngOnDestroy();
  // }

  title = 'alumniPortal';
  public members:any;
 

  constructor(private _service:AlumniServicesService, private router:Router){}

  ngOnInit(){

    this.router.navigate(['/home'])
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
