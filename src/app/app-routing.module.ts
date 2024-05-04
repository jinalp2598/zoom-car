import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { BookingComponent } from './components/booking/booking.component';
import { CarsComponent } from './components/cars/cars.component';
import { CarCardComponent } from './reusableComponents/car-card/car-card.component';

const routes: Routes = [
  // {
  //   path:'',
  //   redirectTo:'home',
  //   pathMatch:'full'
  // },
  {path:'',component:HomeComponent},
  {
    path:'Home',
    component:HomeComponent
  },
  {path:'search/:locationId',component:SearchComponent},
  {path:'booking/:locationId/:carId',component:BookingComponent},
  {path:'cars',component:CarsComponent},
  // {path:'booking',component:BookingComponent},
  {
    path:'carcard',component:CarCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
