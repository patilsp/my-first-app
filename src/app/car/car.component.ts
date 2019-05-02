import { Component } from '@angular/core';

@Component({
    selector: 'app-car',
    templateUrl: './car.component.html'
})
export class CarComponent {

    carId: number = 10 ;
    carStatus:  string = 'Sports Car';


}