import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Todo } from "../models/todo.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class TodoService {
    beUrl: string = 'https://todobetree.vercel.app/api/todos';

    http = inject(HttpClient)

    getTodos(): Observable<Todo[]> {
        return this.http.get<Todo[]>(this.beUrl)
    }

    createTodo(todo: Todo) {
        return this.http.post(this.beUrl, todo)
    }

    updateTodo(id: any, todo: Todo) {
        return this.http.put(this.beUrl + '/' + id, todo)
    }

    delete(id: string) {
        return this.http.delete(this.beUrl  + '/' + id)
    }
}