import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.components';
import { NotFoundComponent } from './not-found.component';

const routes: Routes = [
    { path: '', redirectTo: 'passengers', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NotFoundComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        RouterModule.forRoot(routes),
        PassengerDashboardModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
