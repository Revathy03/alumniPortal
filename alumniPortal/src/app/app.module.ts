import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumniServicesService } from './services/alumni-services.service';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SignupComponent } from './components/signup/signup.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { EventsComponent } from './components/events/events.component';
import { ContactComponent } from './components/contact/contact.component';
import { AlumniDashboardComponent } from './components/alumni-dashboard/alumni-dashboard.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AlumniListComponent } from './components/alumni-list/alumni-list.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { AlumniAlumniListComponent } from './components/alumni-alumni-list/alumni-alumni-list.component';
import { RequestListComponent } from './components/request-list/request-list.component';
import { MemberDisplayComponent } from './components/member-display/member-display.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SignupComponent,
    LogInComponent,
    EventsComponent,
    ContactComponent,
    
    AlumniDashboardComponent,
    AdminDashboardComponent,
    AlumniListComponent,
    EditProfileComponent,
    
    AlumniAlumniListComponent,
         RequestListComponent,
         MemberDisplayComponent,
         
        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AlumniServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
