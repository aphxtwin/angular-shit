import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CaseFormComponent } from './components/case-form/case-form.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CaseFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-shit';
}
