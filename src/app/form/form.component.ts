import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  amount!: number;
  term!: number;
  rate!: number;
  type!: string;

  handleResultsFormSubmit() {
    console.log(this.amount, this.term, this.rate, this.type);
  }
}
