import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = []; // สร้าง array ว่าง
  constructor() {}

  addTodo(messages: string) {
    this.messages.push(messages); // ทำการรับข้อความและเก็บใน array
  }
}
