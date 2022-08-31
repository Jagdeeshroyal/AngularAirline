import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightComponent } from './flight/flight.component';
import { HomeComponent } from './home/home.component';
import { PassengerComponent } from './passenger/passenger.component';

const routes: Routes = [
  {path : '',redirectTo :'flights',pathMatch: 'full'},
  {path : 'home', component: HomeComponent},
  {path : 'flights', component: FlightComponent},
  {path : 'passengers', component: PassengerComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
