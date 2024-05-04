import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  locationId: string = '';
  locations:any[] = [];
  
  fromLocation : string = '';
  toLocation: string = '';
  availableCars : any[] = [];
  toavailableCars : any[] = [];
constructor(private activateRoute:ActivatedRoute , private service:CarService , private router:Router){
  this.activateRoute.params.subscribe(res=>{
    debugger;
    this.locationId = res['locationId'];
    // this.toLocation = this.locationId;
    this.fromLocation = this.locationId;
    // 
    this.getCarsFromLocation();
  })
}

ngOnInit(): void {
  this.getAllLocations();
}
getAllLocations(){
  this.service.GetAllLocations().subscribe((res:any)=>{
    this.locations = res.data;
  })
}

getCarsFromLocation(){
  this.service.GetAllCarsByLocation(this.locationId).subscribe((res:any)=>{
    this.availableCars = res.data;
  })
}

onLocationChange(){
  this.service.GetAllCarsByLocation(this.fromLocation).subscribe((res:any)=>{
    this.availableCars = res.data;
})
}
// toLocationChange(){
//   // this.service.GetAllCarsByLocation(this.toLocation).subscribe((res:any)=>{
//   //   this.toavailableCars = res.data;
//   console.log('toLocationChange called with:', this.toLocation);
//   this.service.GetAllCarsByLocation(this.toLocation).subscribe((res:any)=>{
//     console.log('Cars fetched for toLocation:', res.data);
//     this.toavailableCars = res.data;
//   })
// }

makeBooking(carId:number){
  this.router.navigate(['/booking',this.fromLocation,this.toLocation ,carId])
}
}
