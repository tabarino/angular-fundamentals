import { Component, Input, OnInit } from '@angular/core';

import { Passenger } from '../../models/passenger.model';

@Component({
    selector: 'passenger-detail',
    templateUrl: './passenger-detail.component.html',
    styleUrls: ['./passenger-detail.component.scss']
})
export class PassengerDetailComponent implements OnInit {
    @Input() detail: Passenger;

    constructor() { }

    ngOnInit() { }
}