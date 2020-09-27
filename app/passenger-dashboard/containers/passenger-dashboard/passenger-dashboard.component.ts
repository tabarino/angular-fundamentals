import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Passenger } from '../../models/passenger.model';
import { PassengerDashboardService } from '../../services/passenger-dashboard.service';

@Component({
    selector: 'passenger-dashboard',
    templateUrl: './passenger-dashboard.component.html',
    styleUrls: ['./passenger-dashboard.component.scss']
})
export class PassengerDashboardComponent implements OnInit {
    passengers: Passenger[];

    constructor(
        private router: Router,
        private passengerService: PassengerDashboardService
    ) { }

    ngOnInit() {
        this.passengerService.getPassengers()
            .subscribe((data: Passenger[]) => this.passengers = data);
    }

    handleView(event: Passenger) {
        this.router.navigate(['/passengers', event.id]);
    }

    handleEdit(event: Passenger) {
        this.passengerService.updatePassenger(event)
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
        this.passengerService.removePassenger(event)
            .subscribe((data: Passenger) => {
                this.passengers = this.passengers.filter((passenger: Passenger) => {
                    return passenger.id !== event.id
                });
            });
    }
}
