import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {

  carId: string = '';
  locationId: string = '';
  carDetails: any;
  locations: any [] = [];
  bookingobj: any ={
    "bookingId": 0,
    "customerId": 0,
    "fromLocationId": 0,
    "toLocationId": 0,
    "travelDate": "2024-02-29T09:37:10.694Z",
    "startTime": "string",
    "carId":0,
    "pickupAddress": "string",
    "alternateContactNo": "string",
    "invoiceNo": "string",
    "isComplete": true
  }
  loggedobj : any;
constructor(private activateRoute:ActivatedRoute,private service:CarService){
  this.getAllLocations()
  this.activateRoute.params.subscribe((res:any)=>{
    this.carId = res.carId;
    this.locationId = res.locationId;
    this.getCarDetails();
    this.bookingobj.carId = this.carId;
  })
  const local = localStorage.getItem('zoomUser');
    if(local != null){
      this.loggedobj = JSON.parse(local);
      this.bookingobj.customerId = this.loggedobj.userId;

    }
}

getCarDetails(){
  this.service.GetCarById(this.carId).subscribe((res:any)=>{
    this.carDetails = res.data;
  })
}

getAllLocations(){
  this.service.GetAllLocations().subscribe((res:any)=>{
    this.locations = res.data;
  })
}

createBooking(){
  this.service.createBooking(this.bookingobj).subscribe((res:any)=>{
    if(res.result){
      alert("booking success")
    }else{
      alert(res.message)
    }
  })
}
}
