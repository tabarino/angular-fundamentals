import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    styleUrls: ['app.component.scss'],
    template: `
        <div class="app">
            <h1>{{ title }}</h1>
            
            <!-- Two-way Data Binding in Detail -->
            <input type="text" 
                [ngModel]="name"
                (ngModelChange)="handleChange($event)"
            >
            <div>{{ name }}</div>

            <!-- Two-way Data Binding Simplified -->
            <input type="text" [(ngModel)]="name2">
            <div>{{ name2 }}</div>

            <button (click)="handleClick()">Change Name</button>
        </div>
    `
})
export class AppComponent {
    title: string;
    name = 'Ivan';
    name2 = 'Tabarino';

    constructor() {
        this.title = 'Angular Fundamentals';
    }

    handleChange(value: string) {
        this.name = value;
    }

    handleClick() {
        this.name = 'Tabarino';
    }
}
