import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularcwh';

  constructor() {
    setTimeout(() => {
      this.title = 'Change it'
    }, 2000); 
  }
}
