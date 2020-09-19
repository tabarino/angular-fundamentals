import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    styleUrls: ['app.component.scss'],
    template: `
        <div class="app">
            <h1>{{ title }}</h1>
            
            <input type="text" #username>
            <div>{{ name }}</div>

            <button (click)="handleClick(username.value)">Get Value</button>
        </div>
    `
})
export class AppComponent {
    title: string;
    name = 'Ivan';

    constructor() {
        this.title = 'Angular Fundamentals';
    }

    handleClick(value: string) {
        this.name = value;
    }
}
