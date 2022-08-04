import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleFederationToolsModule, WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';

@Component({
  standalone: true,
  selector: 'web-components-placeholder',
  imports: [
    CommonModule,
    ModuleFederationToolsModule,
  ],
  templateUrl: './web-components-placeholder.component.html',
  styleUrls: ['./web-components-placeholder.component.scss']
})
export class WebComponentsPlaceholderComponent {

  item: WebComponentWrapperOptions = {
    type: 'module',
    remoteEntry: 'http://localhost:4202/remoteEntry.js',
    exposedModule: './web-components',
    elementName: 'angular-element'
  };

  /* Somehow type: 'manifest' doesn't work with 'mft-wc-wrapper'. */
  // item: WebComponentWrapperOptions = {
  //   type: 'manifest',
  //   remoteName: 'webAng',
  //   exposedModule: './web-components',
  //   elementName: 'angular-element'
  // };


  constructor() {}
}
