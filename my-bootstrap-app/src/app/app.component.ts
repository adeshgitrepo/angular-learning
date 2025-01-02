import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  template: '<button type=”button” class=”btn btn-primary”>Test Button</button>',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-bootstrap-app';
}
