import { Component, Input, OnInit } from '@angular/core';

import { Passenger } from '../../models/passenger.model';

@Component({
    selector: 'passenger-count',
    templateUrl: './passenger-count.component.html',
    styleUrls: ['./passenger-count.component.scss']
})
export class PassengerCountComponent implements OnInit {
    @Input() items: Passenger[];

    constructor() { }

    ngOnInit() { }

    checkedInCount(): number {
        if (!this.items) {
            return;
        }

        return this.items.filter((passenger: Passenger) => passenger.checkedIn).length;
    }
}