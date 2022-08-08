// @ts-nocheck

import React from 'react';
import { createRoot } from 'react-dom/client';

import { AfterContentInit, Component, ElementRef } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';

@Component({
  standalone: true,
  selector: 'app-react-wrapper',
  template: '',
})
export class ReactWrapperComponent implements AfterContentInit {

  constructor(
    private readonly hostRef: ElementRef,
  ) { }

  async ngAfterContentInit() {
    const component = await loadRemoteModule({
      remoteEntry: 'http://localhost:4203/remoteEntry.js',
      remoteName: 'pgd',
      exposedModule: './App'
    });

    const ReactMFE = component['default'];

    const ReactEl = React.createElement(ReactMFE);

    const root = createRoot(this.hostRef.nativeElement);
    root.render(ReactEl);
  }
}
