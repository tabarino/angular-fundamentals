import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    styleUrls: ['app.component.scss'],
    template: `
        <div class="app">
            {{ title + '!!!' }}
            <div>
                {{ numberOne + numberTwo }}
            </div>
            <div>
                {{ isHappy ? ':)' : ':(' }}
            </div>
        </div>
    `
})
export class AppComponent {
    title: string;
    numberOne = 1;
    numberTwo = 2;
    isHappy = true;

    constructor() {
        this.title = 'Angular Fundamentals';
    }
}
