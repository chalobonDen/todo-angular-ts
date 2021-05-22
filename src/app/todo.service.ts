import { Injectable } from '@angular/core';
import { Todo } from '../app/todo';
import { Todos } from '../app/listData';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}

  getTodo(): Observable<Todo[]> {
    return of(Todos);
  }

  // getTodo(): todointerface[] {
  //   return TODO;
  // }
}
