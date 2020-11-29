import { Component } from '@angular/core';
import { UIRouter } from '@uirouter/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing-app';


  constructor(public uiRouter: UIRouter) {
  }

}
