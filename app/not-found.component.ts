import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    template: `
        <div>
            Not Found, go <a routerLink="/">Home</a>?
        </div>
    `
})

export class NotFoundComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
