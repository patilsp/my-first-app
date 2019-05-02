import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  allowNewCar = false;
  carAvailableStatus = ' No car is availble ';
  constructor() {
    setTimeout(() => {
      this.allowNewCar = true;
    }, 2000);

   }

  ngOnInit() {
  }

  onCreateCar()
{
this.carAvailableStatus = 'New Car is Added';
}
}
