import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Baggage } from '../../models/baggage.model';
import { Passenger } from '../../models/passenger.model';

@Component({
    selector: 'passenger-form',
    templateUrl: './passenger-form.component.html',
    styleUrls: ['./passenger-form.component.scss']
})
export class PassengerFormComponent implements OnInit {
    @Input() detail: Passenger;
    @Output() update: EventEmitter<Passenger> = new EventEmitter<Passenger>();

    baggage: Baggage[] = [{
        key: 'none',
        value: 'No Baggage'
    }, {
        key: 'hand-only',
        value: 'Hand Baggage'
    }, {
        key: 'hold-only',
        value: 'Hold Baggage'
    }, {
        key: 'hand-hold',
        value: 'Hand and Hold Baggage'
    }];

    constructor() { }

    ngOnInit() { }

    toggleCheckIn(checkedIn: boolean) {
        if (checkedIn) {
            this.detail.checkInDate = +new Date(); // same as Date.now()
        }
    }

    handleSubmit(passenger: Passenger, isValid: boolean) {
        if (!isValid) return;
        this.update.emit(passenger);
    }
}
