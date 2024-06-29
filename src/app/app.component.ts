import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'hinv-root',
  // standalone: true,
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  // template:"<h1>hello world from inline</h1>",
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-app';
}
