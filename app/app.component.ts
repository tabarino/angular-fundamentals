import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    styleUrls: ['app.component.scss'],
    template: `
        <div class="app">
            <h1 [innerHTML]="title"></h1>
            <input type="text" [value]="name">
        </div>
    `
})
export class AppComponent {
    title: string;
    name = 'Ivan';

    constructor() {
        this.title = 'Angular Fundamentals';
    }
}
