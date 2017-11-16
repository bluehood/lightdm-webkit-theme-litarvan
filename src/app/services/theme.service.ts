import { Injectable } from "@angular/core";

@Injectable()
export class ThemeService
{
    private defaults = {
        "background": "assets/images/background.default.jpg"
    };

    get background(): string
    {
        return this.get("background");
    }

    get(key: string): string
    {
        return localStorage.getItem(key) || this.defaults[key];
    }
}