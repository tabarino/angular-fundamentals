import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    styleUrls: ['app.component.scss'],
    template: `
        <div class="app">
            <h1>{{ title }}</h1>
            
            <input type="text" [value]="name" (input)="handleChange($event.target.value)">

            <div *ngIf="name.length > 3">
                Searching for... {{ name }}
            </div>
        </div>
    `
})
export class AppComponent {
    title: string;
    name = '';

    constructor() {
        this.title = 'Angular Fundamentals';
    }

    handleChange(value: string) {
        this.name = value;
    }
}
