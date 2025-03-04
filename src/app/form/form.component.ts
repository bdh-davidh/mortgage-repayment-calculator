import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  amount: number = 0;
  term: number = 0;
  rate: number = 0;
  type: string = 'repayment';

  handleResultsFormSubmit() {
    console.log(this.amount, this.term, this.rate, this.type);
  }

  calculateRepayment(): number {
    return (
      (this.amount * (this.rate / 12) * Math.pow(1 + this.rate / 12, this.term * 12)) /
       Math.pow(1 + this.rate / 12, this.term * 12) - 1
    );
  }

  calcualteInterest(): number {
    return this.amount * (this.rate / 12);
  }
}
