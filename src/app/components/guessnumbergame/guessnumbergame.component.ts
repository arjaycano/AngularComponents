import { Component } from '@angular/core';

@Component({
  selector: 'app-guessnumbergame',
  templateUrl: './guessnumbergame.component.html',
  styleUrl: './guessnumbergame.component.css'
})
export class GuessnumbergameComponent {
  correctNumber: number = 19;
  userGuess: number | null = null;
  feedback: string = "";

  show() {
    if (this.userGuess === null) {
      this.feedback = "Enter a number first.";
      return;
    }

    if (this.userGuess < this.correctNumber) {
      this.feedback = "Too low! Try again.";
    } else if (this.userGuess > this.correctNumber) {
      this.feedback = "Too high! Try again.";
    } else {
      this.feedback = "Congratulations! You guessed the number!";
    }
  }
}
