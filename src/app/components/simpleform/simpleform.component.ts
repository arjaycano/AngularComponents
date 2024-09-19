import { Component } from '@angular/core';

@Component({
  selector: 'app-simpleform',
  templateUrl: './simpleform.component.html',
  styleUrl: './simpleform.component.css'
})
export class SimpleformComponent {

  name: string = "";
  age: number = 0;
  inputData: { name: string; age: number } | null = null;

  onSubmit() {

    console.log(this.inputData = {name: this.name, age: this.age});
  }
}
