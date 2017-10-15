import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  templateUrl: 'app.component.html'
})
export class AppComponent {
  title: string;
  name: string;
  constructor() {
    this.title = 'Ultimate Angular!'
    this.name = ''
  }
  handleChange(value: string) {
    this.name = value
  }
}
