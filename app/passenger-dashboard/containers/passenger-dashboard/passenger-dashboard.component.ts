import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../models/passenger.model';
import { PassengerDashboardService } from '../../services/passenger-dashboard.service';

@Component({
    selector: 'passenger-dashboard',
    templateUrl: './passenger-dashboard.component.html',
    styleUrls: ['./passenger-dashboard.component.scss']
})
export class PassengerDashboardComponent implements OnInit {
    passengers: Passenger[];

    constructor(private passengerService: PassengerDashboardService) { }

    ngOnInit() {
        this.passengerService.getPassengers()
            .subscribe((data: Passenger[]) => this.passengers = data);
    }

    handleEdit(event: Passenger) {
        this.passengerService.updatePassengers(event)
            .subscribe((data: Passenger) => {
                this.passengers = this.passengers.map((passenger: Passenger) => {
                    if (passenger.id === event.id) {
                        passenger = Object.assign({}, passenger, event);
                    }
        
                    return passenger;
                });
            });
    }

    handleRemove(event: Passenger) {
        this.passengerService.removePassengers(event)
            .subscribe((data: Passenger) => {
                this.passengers = this.passengers.filter((passenger: Passenger) => {
                    return passenger.id !== event.id
                });
            });
    }
}
