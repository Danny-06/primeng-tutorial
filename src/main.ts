import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


// Always remove text selection when the user clicks on any part of the document
// This is to avoid those annoying times when you want to remove the selection but you can't
window.addEventListener('mousedown', event => {
  if (event.button === 0) window.getSelection()?.empty()
})
