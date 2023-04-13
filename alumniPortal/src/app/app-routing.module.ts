import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SignupComponent } from './components/signup/signup.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { EventsComponent } from './components/events/events.component';
import { ContactComponent } from './components/contact/contact.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AlumniDashboardComponent } from './components/alumni-dashboard/alumni-dashboard.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { AlumniListComponent } from './components/alumni-list/alumni-list.component';
import { AlumniAlumniListComponent } from './components/alumni-alumni-list/alumni-alumni-list.component';

const routes: Routes = [
  {
    path:'',redirectTo:'',
    pathMatch:"full" 
},
{
  path:'home', 
  component:HomepageComponent
},
{
  path:'signup', 
  component:SignupComponent
},
{
  path:'signin', 
  component:LogInComponent
},
{
  path:'events', 
  component:EventsComponent
},
{
  path:'contact', 
  component:ContactComponent
},
{
  path:'adm-dashboard', 
  component:AdminDashboardComponent
},
{
  path:'dashboard', 
  component:AlumniDashboardComponent
},
{
  path:'profile', 
  component:EditProfileComponent
},
{
  path:'list',                             //alumni list for admin dashboard 
  component:AlumniListComponent
},
{
  path:'alumnilist', 
  component:AlumniAlumniListComponent      //alumni list for alumni dashboard 
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
