import {NgModule} from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule,
    MatIconModule
  ],
  exports: [ MatIconModule ]
})
export class IconModule {
  /**constructor*/
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.registerIcons();
  }

  /**register icons*/
  private registerIcons() {
    this.matIconRegistry.addSvgIcon(
      'brand',
      this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/brand.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'npm',
      this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/npm.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'github',
      this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/github.svg')
    );
  }
}
