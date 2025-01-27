import { Component } from '@angular/core';
import { FormComponent } from "./form/form.component";
import { ResultsComponent } from "./results/results.component";

@Component({
  selector: 'app-root',
  imports: [FormComponent, ResultsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Mortgage Repayment Calculator';
}
