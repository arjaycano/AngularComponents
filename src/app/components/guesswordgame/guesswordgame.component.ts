import { Component } from '@angular/core';

@Component({
  selector: 'app-guesswordgame',
  templateUrl: './guesswordgame.component.html',
  styleUrl: './guesswordgame.component.css'
})
export class GuesswordgameComponent {
  secretWord: string = "angular";
  userGuess: string = "";
  feedback: string = "";
  attempts: number = 0;

  show() {
    this.attempts++;

    if (this.userGuess.toLowerCase() === this.secretWord.toLowerCase()) {
      this.feedback = `Congratulations! You guessed the word "${this.secretWord}" in ${this.attempts} attempts.`;
    } else {
      this.feedback = 'Incorrect guess! Try again.';
    }

    this.userGuess = '';
  }
}
