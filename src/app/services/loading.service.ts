import { Injectable } from "@angular/core";
import { LangService } from "./lang.service";

@Injectable()
export class LoadingService
{
    constructor(private lang: LangService)
    {
    }

    apply(): Promise<any>
    {
        return new Promise((accept, _) => {
            this.lang.load().then(() => {
                setTimeout(() => {
                    document.querySelector("#loading").classList.add("hidden");

                    setTimeout(() => {
                        accept();
                    }, 500);
                }, 2000);
            });
        });
    }
}