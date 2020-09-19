import { Component } from '@angular/core';

interface Passenger {
    id: number;
    fullname: string;
    checkedIn: boolean;
}

@Component({
    selector: 'app-root',
    styleUrls: ['app.component.scss'],
    template: `
        <div class="app">
            <h3>Airline Passengers</h3>
            <ul>
                <li *ngFor="let passenger of passengers; let i = index;">
                    {{ i }}: {{ passenger.fullname }}
                </li>
            </ul>
        </div>
    `
})
export class AppComponent {
    passengers: Passenger[] = [{
        id: 1,
        fullname: 'Stephen Doe',
        checkedIn: true
    }, {
        id: 2,
        fullname: 'Rose Ball',
        checkedIn: false
    }, {
        id: 3,
        fullname: 'James Forde',
        checkedIn: true
    }, {
        id: 4,
        fullname: 'Louise Who',
        checkedIn: true
    }, {
        id: 5,
        fullname: 'Tina Tunner',
        checkedIn: false
    }];

    constructor() { }
}
