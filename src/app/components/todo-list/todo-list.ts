import { Component, inject, OnInit } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../../services/todo';

@Component({
  selector: 'app-todo-list',
  imports: [FormsModule],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss'
})
export class TodoList implements OnInit {
  ngOnInit(): void {
    this.getTodos();
  }
  todos: Todo[] = [];

  todoService = inject(TodoService);

  newTodo: Todo = {
    title: '',
    description: '',
    status: false
  };

  addTodo() {
    if (this.newTodo.title.trim()) {
      this.todoService.createTodo(this.newTodo).subscribe(() => this.getTodos());
      this.newTodo = { title: '', description: '', status: false };
    }
  }

  deleteTodo(index: any) {
    this.todoService.delete(index).subscribe(() => this.getTodos());
  }

  toggleStatus(index: number) {
    this.todos[index].status = !this.todos[index].status;
    this.todoService.updateTodo(this.todos[index]._id, this.todos[index]).subscribe(() => this.getTodos());
  }

  getTodos(){
    this.todoService.getTodos().subscribe(todos => this.todos = todos)
  }
}

