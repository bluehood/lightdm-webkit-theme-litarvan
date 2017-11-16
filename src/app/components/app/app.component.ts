import { Component, OnInit } from '@angular/core';
import { ThemeService } from "../../services/theme.service";

@Component({
    selector: 'litarvan-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
    initialized = false;

    constructor(public theme: ThemeService)
    {
    }

    ngOnInit(): void
    {
        setTimeout(() => {
            this.initialized = true;
        }, 500);
    }
}
