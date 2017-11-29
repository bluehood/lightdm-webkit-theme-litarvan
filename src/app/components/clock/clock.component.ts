import { Component, OnInit } from "@angular/core";
import { LangService } from "../../services/lang.service";

@Component({
    selector: 'litarvan-clock',
    templateUrl: './clock.component.html',
    styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit
{
    hours = '00';
    minutes = '00';

    date = '';

    constructor(private lang: LangService)
    {
    }

    ngOnInit()
    {
        setInterval(() => {
            let date = new Date();

            this.hours = this.padLeft(date.getHours().toString(), 2);
            this.minutes = this.padLeft(date.getMinutes().toString(), 2);

            this.date = this.lang.trans('date')
                .replace('day', date.getDate().toString())
                .replace('weekd', this.lang.trans('days')[date.getDay() - 1])
                .replace('month', this.lang.trans('months')[date.getMonth() - 1])
                .replace('year', date.getFullYear().toString());
        }, 1000);
    }

    padLeft(nr, n)
    {
        return Array(n-String(nr).length+1).join('0')+nr;
    }
}