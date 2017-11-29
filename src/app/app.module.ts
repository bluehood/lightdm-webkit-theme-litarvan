import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { LoadingService } from "./services/loading.service";
import { ThemeService } from "./services/theme.service";
import { SplashComponent } from "./components/splash/splash.component";
import { ClockComponent } from "./components/clock/clock.component";
import { LangService } from "./services/lang.service";

export function loadingServiceFactory(loading: LoadingService): Function
{
    return () => loading.apply();
}

@NgModule({
    declarations: [
        AppComponent,
        SplashComponent,
        ClockComponent
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
        LangService,
        ThemeService
    ],
    bootstrap: [AppComponent]
})
export class AppModule
{
}
