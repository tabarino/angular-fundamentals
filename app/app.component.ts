import { Component } from '@angular/core';

interface Passenger {
    id: number;
    fullname: string;
    checkedIn: boolean;
    checkInDate?: number;
}

@Component({
    selector: 'app-root',
    styleUrls: ['app.component.scss'],
    template: `
        <div class="app">
            <h3>Airline Passengers</h3>
            <ul>
                <li *ngFor="let passenger of passengers; let i = index;">
                    <span 
                        class="status"
                        [class.checked-in]="passenger.checkedIn"
                    ></span>
                    {{ i }}: {{ passenger.fullname }}
                    <p>{{ passenger | json }}</p>
                    <div class="date">
                        Check in Date: 
                        {{ passenger.checkInDate ? (passenger.checkInDate | date: 'dd/MM/yyyy') : 'Not checked in' }}
                    </div>
                </li>
            </ul>
        </div>
    `
})
export class AppComponent {
    passengers: Passenger[] = [{
        id: 1,
        fullname: 'Stephen Doe',
        checkedIn: true,
        checkInDate: 1490742000000
    }, {
        id: 2,
        fullname: 'Rose Ball',
        checkedIn: false,
        checkInDate: null
    }, {
        id: 3,
        fullname: 'James Forde',
        checkedIn: true,
        checkInDate: 1491606000000
    }, {
        id: 4,
        fullname: 'Louise Who',
        checkedIn: true,
        checkInDate: 1488412800000
    }, {
        id: 5,
        fullname: 'Tina Tunner',
        checkedIn: false,
        checkInDate: null
    }];

    constructor() { }
}
