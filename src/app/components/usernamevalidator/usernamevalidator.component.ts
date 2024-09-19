import { Component } from '@angular/core';

@Component({
  selector: 'app-usernamevalidator',
  templateUrl: './usernamevalidator.component.html',
  styleUrl: './usernamevalidator.component.css'
})
export class UsernamevalidatorComponent {
  username: string = "";
  validationMessage: string = "";

  readonly minLength: number = 6;
  readonly maxLength: number = 20;
  readonly allowedCharacters: RegExp = /^[a-zA-Z0-9_]*$/;

  show() {
    if (this.username.length < this.minLength) {
      this.validationMessage = `Username must be at least ${this.minLength} characters long.`;
    } else if (this.username.length > this.maxLength) {
      this.validationMessage = `Username must be no more than ${this.maxLength} characters long.`;
    } else if (!this.allowedCharacters.test(this.username)) {
      this.validationMessage = 'Username can only contain letters, numbers, and underscores.';
    } else {
      this.validationMessage = 'Username is valid.';
    }
  }
}
