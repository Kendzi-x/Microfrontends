import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  weather = {
    icon: '',
    country: 'Germany',
    temperature: 28,
  };
}
