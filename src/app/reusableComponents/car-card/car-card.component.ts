// import { Component, Input } from '@angular/core';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.css']
})
export class CarCardComponent implements OnChanges {
@Input() carData :any;

ngOnChanges(changes: SimpleChanges): void {
  console.log('carData changes', changes);
}

errorHandler(event : any) {
  event.target.src = 'assets/images/zoomlogo.png'; // Path to your fallback image
}

}
