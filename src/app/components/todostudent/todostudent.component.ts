import { Component } from '@angular/core';

@Component({
  selector: 'app-todostudent',
  templateUrl: './todostudent.component.html',
  styleUrl: './todostudent.component.css'
})
export class TodostudentComponent {
  tasks: string[] = [];
  currentTask: string = "";

  show() {
    if (this.currentTask.trim()) {
      this.tasks.push(this.currentTask.trim());
      this.currentTask = "";
    }
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
