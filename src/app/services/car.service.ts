import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiEndPoint: string = 'https://freeapi.gerasim.in/api/ZoomCar/';
  constructor( private http:HttpClient) { }

  registerUser(obj:any){
    debugger;
    return this.http.post(this.apiEndPoint + 'AddNewUser',obj);
  }

  loginUser(obj:any){
    debugger;
    return this.http.post(this.apiEndPoint + 'Login',obj);
  }

  addNewCar(obj:any){
    debugger;
    return this.http.post(this.apiEndPoint + 'addNewCar',obj);
  }
  // https://freeapi.gerasim.in/api/ZoomCar/GetAllCarsByOwnerId?id=3

  GetAllLocations(){
    return this.http.get(this.apiEndPoint + "GetAllLocations?id=")
  }

  GetAllCarsByOwnerId(userId:number){
    return this.http.get(this.apiEndPoint + "GetAllCarsByOwnerId?id=" + userId)
    // return this.http.get(`${this.apiEndPoint}GetAllCarsByOwnerId?id=${userId}`);
  }

//   GetAllCarsByOwnerId(userId: number) {
//     return this.http.get(`${this.apiEndPoint}GetAllCarsByOwnerId?id=${userId}`);
// }

GetAllCars(){
 return this.http.get(this.apiEndPoint + 'GetAllCars')
}

GetAllCarsByLocation(locationId:any){
  return this.http.get(this.apiEndPoint + 'GetAllCarsByLocation?id=' +locationId )
}

GetCarById(carId:any){
  return this.http.get(this.apiEndPoint + 'GetCarById?id=' +carId )
}

createBooking(obj:any){
  
  return this.http.post(this.apiEndPoint + 'createNewBooking',obj);
}
}
