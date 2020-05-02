import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

//app module is a root module help to bootstrap the angular module
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
