// import { TODO } from '../../listData'; // mock ของข้อมูล ใช้ service แทน
import { Component, OnInit } from '@angular/core';
import { Todo } from '../../todo'; // interface
import { TodoService } from '../../todo.service';

import nanoid from 'nanoid';
import { Todos } from 'src/app/listData';
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent implements OnInit {
  selectedTodo: Todo;
  todos: Todo[]; // ใช้แทนตัวdatamock => todoes = TODO; สร้างตัวแปรมาเก็บข้อมูลจาก Data
  doneTodos: Todo[];
  todo: string;
  todoTitle = '';
  beforeEditCache: string;
  onSelect(todo: Todo): void {
    this.selectedTodo = todo;
  }

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.getTodo();
  }

  // getTodo(): void {
  //   // ใช้ดึงข้อมูลจาก service คืนค่าเป็น TODO[]
  //   this.todoes = this.todoService.getTodo();
  // }

  getTodo(): void {
    this.todoService.getTodo().subscribe((todoes) => (this.todos = todoes));
  }

  deleteTodo(todo) {
    this.todos = this.todos.filter((t) => t.id !== todo.id);
  }

  addTodo(text): void {
    // if (this.todoTitle.trim().length === 0) {
    //   return;
    // }

    let todo = {
      id: nanoid(),
      text: text,
      isDone: false,
      editing: false,
      createdAt: new Date().toISOString(),
    };
    this.todos.push(todo);

    this.todoTitle = '';
  }

  addTodoDone() {
    let doneTodo = {
      id: this.selectedTodo.id,
      text: this.selectedTodo.text,
      isDone: true,
      editing: true,
      createdAt: this.selectedTodo.createdAt,
    };
    this.doneTodos.push(doneTodo);
    console.log(doneTodo);
  }

  done(todo) {
    // return todo
    //   .split('')
    //   .map((char) => char + '\u0336')
    //   .join('');
    console.log(todo);
  }

  editTodo(todo: Todo): void {
    // this.beforeEditCache = todo.text;
    todo.editing = true;
    // todo.editing = false;
  }

  doneEdit(todo: Todo): void {
    todo.editing = false;
  }
}
