import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { importProvidersFrom } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router';

//import {APP_ROUTES} from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule, MatToolbarModule, HttpClient),
    provideAnimations(),
    //provideHttpClient(withInterceptorsFromDi()),
    provideHttpClient(),
    //provideRouter(APP_ROUTES, withPreloading(PreloadAllModules))
  ]
})
  .catch((err) => console.error(err));
