import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SignupComponent } from './components/signup/signup.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { EventsComponent } from './components/events/events.component';
import { ContactComponent } from './components/contact/contact.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
