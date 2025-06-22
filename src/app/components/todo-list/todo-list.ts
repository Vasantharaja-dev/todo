import { Component } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  imports: [FormsModule],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss'
})
export class TodoList {
  todos: Todo[] = [];

  newTodo: Todo = {
    title: '',
    description: '',
    status: false
  };

  addTodo() {
    if (this.newTodo.title.trim()) {
      this.todos.push({ ...this.newTodo });
      this.newTodo = { title: '', description: '', status: false };
    }
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }

  toggleStatus(index: number) {
    this.todos[index].status = !this.todos[index].status;
  }
}

