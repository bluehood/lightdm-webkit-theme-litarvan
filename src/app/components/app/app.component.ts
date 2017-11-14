import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'litarvan-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
    initialized = false;

    ngOnInit(): void
    {
        setTimeout(() => {
            this.initialized = true;
        }, 500);
    }
}
