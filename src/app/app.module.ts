import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { LoadingService } from "./services/loading.service";
import { ThemeService } from "./services/theme.service";

export function loadingServiceFactory(loading: LoadingService): Function
{
    return () => loading.apply();
}

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: loadingServiceFactory,
            deps: [LoadingService],
            multi: true
        },
        LoadingService,
        ThemeService
    ],
    bootstrap: [AppComponent]
})
export class AppModule
{
}
