import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../models/passenger.model';

@Component({
    selector: 'passenger-dashboard',
    templateUrl: './passenger-dashboard.component.html',
    styleUrls: ['./passenger-dashboard.component.scss']
})
export class PassengerDashboardComponent implements OnInit {
    passengers: Passenger[];
    
    constructor() { }

    ngOnInit() {
        this.passengers = [{
            id: 1,
            fullname: 'Stephen Doe',
            checkedIn: true,
            checkInDate: 1490742000000,
            children: null
        }, {
            id: 2,
            fullname: 'Rose Ball',
            checkedIn: false,
            checkInDate: null,
            children: [{ name: 'Ted', age: 12 }, { name: 'Chloe', age: 7 }]
        }, {
            id: 3,
            fullname: 'James Forde',
            checkedIn: true,
            checkInDate: 1491606000000,
            children: null
        }, {
            id: 4,
            fullname: 'Louise Who',
            checkedIn: true,
            checkInDate: 1488412800000,
            children: [{ name: 'Jessica', age: 1 }]
        }, {
            id: 5,
            fullname: 'Tina Tunner',
            checkedIn: false,
            checkInDate: null,
            children: null
        }];
    }
}
