import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.components';
import { NotFoundComponent } from './not-found.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NotFoundComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        AppRoutingModule,
        PassengerDashboardModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
