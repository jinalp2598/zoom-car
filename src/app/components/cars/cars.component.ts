import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  loggedobj: any;
  carList: any[] = [];
  locations: any[] = [];
  carAccesoriesObj: any ={
    
      "accessoriesId": 0,
      "accessoriesTitle": "",
      "showOnWebsite": true,
      "carId": 0
    
  }
  carObj: any = {
    
      "carId": 0,
      "brand": "",
      "name": "",
      "pricingDescription": "",
      "pricing": 0,
      "locationId": 0,
      "registeredOn": "2024-02-25T07:20:10.205Z",
      "imageUrl": "",
      "vehicleNo": "",
      "ownerUserId": 0,
      "ZoomCarAccessoriess": [
        
      ]
    
  }
  isModalVisible: boolean = false;
  constructor(private service: CarService) {
    const local = localStorage.getItem('zoomUser');
    if (local != null) {
      this.loggedobj = JSON.parse(local);
      console.log('Logged object:', this.loggedobj);
      console.log('User ID:', this.loggedobj.userId);
    }
    else {
      console.log('No logged user found in localStorage.');
    }

  }

  ngOnInit(): void {
    this.getCars();
    console.log(this.carList);
    this.GetAllLocations();
  }

  GetAllLocations(){
    this.service.GetAllLocations().subscribe((res:any)=>{
      this.locations = res.data
    })
  }

  getCars() {
    // if (this.loggedobj && this.loggedobj.userId !== undefined) {
    //   this.service.GetAllCarsByOwnerId(this.loggedobj.userId).subscribe((res: any) => {
    //     this.carList = res.data;
    //   }, error => {
    //     // It's a good practice to handle potential errors from your API calls
    //     console.error('Failed to load cars:', error);
    //   });
    // if(this.loggedobj && this.loggedobj.userId !== undefined){
    // this.service.GetAllCarsByOwnerId(this.loggedobj.userId).subscribe((res:any)=>{
    //   console.log(res);
    //   this.carList = res.data;
    // })
    if (this.loggedobj && this.loggedobj.userId !== undefined) {
      this.service.GetAllCarsByOwnerId(this.loggedobj.userId).subscribe( // Assuming 1 is a valid userId
        (res: any) => {
          console.log('API response:', res);
          this.carList = res.data;
        }, error => {
          console.error('Failed to load cars:', error);
        }

      );

    }

  }

Add(){
  const obj = JSON.stringify(this.carAccesoriesObj);
  this.carObj.ZoomCarAccessoriess.push(JSON.parse(obj));
  this.carAccesoriesObj = {
    "accessoriesId": 0,
    "accessoriesTitle": "",
    "showOnWebsite": false,
    "carId": 0
  
  }
}

saveCar()
{
  this.carObj.ownerUserId = this.loggedobj.userId;
  debugger;
  this.service.addNewCar(this.carObj).subscribe((res:any)=>{
    if(res.result){
      alert('car created');
      console.log(res);
      this.closeModal();
      this.carObj= {
    
        "carId": 0,
        "brand": "",
        "name": "",
        "pricingDescription": "",
        "pricing": 0,
        "locationId": 0,
        "registeredOn": "2024-02-25T07:20:10.205Z",
        "imageUrl": "",
        "vehicleNo": "",
        "ownerUserId": 0,
        "ZoomCarAccessoriess": [
          
        ],
    
    },
    this.ngOnInit(); 
    // 
    }else{
      alert(res.message);
    }
  })
}
openModal(){
  this.isModalVisible = true;
}
  closeModal() {
    this.isModalVisible = false;
  }



}


