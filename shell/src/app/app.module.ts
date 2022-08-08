import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app-routes';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WebComponentsPlaceholderComponent } from './web-components-placeholder/web-components-placeholder.component';
import { ReactWrapperComponent } from './react-wrapper/react-wrapper.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    WebComponentsPlaceholderComponent,
    ReactWrapperComponent,
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
