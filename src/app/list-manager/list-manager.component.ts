import { TodoListService } from './../todo-list.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'todo-list-manager',
  template: `
    <div class="todo-app">
      <h1>
        {{ title }}
      </h1>
      <todo-input (submit)="addItem($event)" class="todo-add"></todo-input>
      <ul>
        <li *ngFor="let item of todolist">
          <todo-item [todoItem]="item" (remove)="removeItem($event)"></todo-item>
        </li>
      </ul>
    </div>
  `,
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {
  title = 'To-do List !';
  todolist: any;

  ngOnInit() {
    this.todolist = this.todoListService.getToDoList();
  }

  constructor(private todoListService: TodoListService) {}

  addItem(title: string): void {
    this.todolist = this.todoListService.addItem({ title });
  }

  removeItem(item): void {
    this.todolist = this.todoListService.removeItem(item);
  }

}
