import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


interface ToDo {
  id: number;
  title: string;
  completed: boolean;
}


@Component({
  selector: 'app-root',
  imports: [FormsModule, RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})



export class App {
  protected readonly title = signal('todoApp');

  newTodoText: string = '';
  todos: ToDo[] = [];
  nextId: number = 1;
  
  addTodo(): void {
    if (this.newTodoText.trim()) {
      this.todos.push({
        id: this.nextId++,
        title: this.newTodoText,
        completed: false
      });
      this.newTodoText = '';
    }
  }
  toggleTodoCompletion(todo: ToDo): void {
    todo.completed = !todo.completed;
  }
  removeTodo(todo: ToDo): void {
    this.todos = this.todos.filter(t => t !== todo);
  }

   // EDIT METHOD
  startEdit(todo: ToDo): void {
    this.editingTodoId = todo.id;
    this.editText = todo.title;
  }
  
  // SAVE EDIT
  saveEdit(todo: ToDo): void {
    if (this.editText.trim()) {
      todo.title = this.editText.trim();
    }
    this.cancelEdit();
  }
  
  // CANCEL EDIT
  cancelEdit(): void {
    this.editingTodoId = null;
    this.editText = '';
  }
  
  // CHECK IF EDITING
  isEditing(todo: ToDo): boolean {
    return this.editingTodoId === todo.id;
  }

}

//  
