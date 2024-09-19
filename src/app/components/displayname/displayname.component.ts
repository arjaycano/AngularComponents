import { Component } from '@angular/core';

@Component({
  selector: 'app-displayname',
  templateUrl: './displayname.component.html',
  styleUrl: './displayname.component.css'
})
export class DisplaynameComponent {

  displayName: string = "";
  resultName: string = "";

  show(): void {
    console.log(this.resultName = this.displayName);
    console.log(this.displayName);
  }
}
