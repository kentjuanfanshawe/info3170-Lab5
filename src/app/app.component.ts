import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'unittest';

  constructor() {}

  toggle: boolean = false;
  colorMode: string = 'darkmode';

  changeColor() {
    this.toggle = !this.toggle;

    this.colorMode = this.toggle ? 'lightmode' : 'darkmode';
  }

  get message() {
    return `The color mode is ${
      this.colorMode === 'lightmode' ? 'light' : 'dark'
    }`;
  }
}
