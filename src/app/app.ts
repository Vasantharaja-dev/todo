import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoInput } from './components/todo-input/todo-input';
import { TodoList } from './components/todo-list/todo-list';

@Component({
  selector: 'app-root',
  imports: [TodoInput, TodoList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'todo';
}
