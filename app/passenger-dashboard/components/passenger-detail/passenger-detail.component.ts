import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

import { Passenger } from '../../models/passenger.model';

@Component({
    selector: 'passenger-detail',
    templateUrl: './passenger-detail.component.html',
    styleUrls: ['./passenger-detail.component.scss']
})
export class PassengerDetailComponent implements OnInit, OnChanges {
    @Input() detail: Passenger;
    @Output() edit: EventEmitter<any> = new EventEmitter();
    @Output() remove: EventEmitter<any> = new EventEmitter();
    editing: boolean = false;

    constructor() { }

    ngOnInit() { }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.detail) {
            this.detail = Object.assign({}, changes.detail.currentValue);
        }
    }

    onNameChange(value: string) {
        this.detail.fullname = value;
    }

    toggleEdit() {
        if (this.editing) {
            this.edit.emit(this.detail);
        }

        this.editing = !this.editing;
    }

    onRemove() {
        this.remove.emit(this.detail);
    }
}