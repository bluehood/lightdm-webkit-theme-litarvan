import { Injectable } from "@angular/core";

@Injectable()
export class LoadingService
{
    apply(): Promise<any>
    {
        return new Promise((accept, _) => {
            setTimeout(() => {
                document.querySelector("#loading").classList.add("hidden");

                setTimeout(() => {
                    accept();
                }, 500);
            }, 2000);
        });
    }
}