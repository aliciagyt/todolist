import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-input',
  template: `
    <input [value]='title' (keyup.enter)="changeTitle($event.target.value)" #inputElement>
    <button class="btn" (click)="changeTitle(inputElement.value)">Save !</button>
    <p>This title is {{ title }}</p>
  `,
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  title: string = '';
  @Output() submit: EventEmitter<string> = new EventEmitter(); 

  constructor() {
  }

  ngOnInit() {
  }

  changeTitle(newTitle: string): void {
    this.submit.emit(newTitle);
  }

}
