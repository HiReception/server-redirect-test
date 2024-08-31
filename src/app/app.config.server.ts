import { mergeApplicationConfig, ApplicationConfig, APP_BOOTSTRAP_LISTENER } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { NavigationEnd, Router } from '@angular/router';
import { REQUEST, RESPONSE } from './express.tokens';
import { Request, Response } from 'express';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    {
      provide: APP_BOOTSTRAP_LISTENER, multi: true, deps: [Router, /*RESPONSE*/], useFactory: (router: Router, /*response: Response*/) => {
        return () => {
          router.events.subscribe(event => {
            console.log(event);
            //only when redirectTo was used, we redirect via response.redirect(url)
            if (event instanceof NavigationEnd) {

              console.log("event.url = " + event.url);
              console.log("event.urlAfterRedirects = " + event.urlAfterRedirects);

            }
            if (event instanceof NavigationEnd && event.url !== event.urlAfterRedirects) {
              console.log("redirect detected");
              // response.redirect(301, event.urlAfterRedirects);
              // response.end();
            }
          });
        }
      }
    }
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
