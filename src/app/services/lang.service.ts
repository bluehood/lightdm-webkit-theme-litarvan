import { Injectable } from "@angular/core";

const LANGS = ['en_US', 'fr_FR'];

const DEFAULT_LANG = {
    date: 'weekd day month year',
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],

    splash: "Press 'Space' or 'Enter' to login"
};

@Injectable()
export class LangService
{
    current;

    async load()
    {
        // TODO: Lang loading
        this.current = DEFAULT_LANG;
    }

    trans(key: string)
    {
        return this.current[key];
    }
}