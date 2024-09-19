import { Component } from '@angular/core';

@Component({
  selector: 'app-todomanager',
  templateUrl: './todomanager.component.html',
  styleUrl: './todomanager.component.css'
})
export class TodomanagerComponent {
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
