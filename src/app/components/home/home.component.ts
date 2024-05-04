import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  popularCars: any [] = [];
  locations: any [] = [];
  fromLocation: string = '';
  toLocation : string = '';
  constructor(private service:CarService,private router:Router){

  }
  ngOnInit(): void {
    this.getAllCars();
    this.getAllLocations();
  }

  getAllCars(){
    this.service.GetAllCars().subscribe((res:any)=>{
      this.popularCars = res.data;
    })
  }
  getAllLocations(){
    this.service.GetAllLocations().subscribe((res:any)=>{
      this.locations = res.data;
    })
  }

  navigateToSearchPage(){
    this.router.navigate(['/search',this.fromLocation])
  }

}
