import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {PriScrollbarWebComponentModule} from './pri.scrollbar.web.component.module';


enableProdMode();

platformBrowserDynamic().bootstrapModule(PriScrollbarWebComponentModule).catch(err => console.log(err));
