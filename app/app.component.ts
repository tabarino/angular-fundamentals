import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    styleUrls: ['app.component.scss'],
    template: `
        <div class="app">
            <h1>{{ title }}</h1>
            <input type="text" 
                [value]="name"
                (input)="handleInput($event)"
                (blur)="handleBlur($event)"
            >
            <div>{{ name }}</div>
            <button (click)="handleClick()">Change Name</button>
        </div>
    `
})
export class AppComponent {
    title: string;
    name = 'Ivan';

    constructor() {
        this.title = 'Angular Fundamentals';
    }

    handleInput(event: any) {
        this.name = event.target.value;
    }

    handleBlur(event: any) {
        this.name = event.target.value;
    }

    handleClick() {
        this.name = 'Tabarino';
    }
}
