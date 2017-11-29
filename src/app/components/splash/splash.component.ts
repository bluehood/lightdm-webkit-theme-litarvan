import { Component, OnInit } from "@angular/core";
import { LangService } from "../../services/lang.service";

@Component({
    selector: 'litarvan-splash',
    templateUrl: './splash.component.html',
    styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit
{
    trigger = '';

    constructor(private lang: LangService)
    {
    }

    ngOnInit()
    {
        this.trigger = this.lang.trans('splash');
    }
}
