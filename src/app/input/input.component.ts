import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-input',
  template: `
    <div>
      <input class="todo-input" [value]='title' 
            (keyup.enter)="changeTitle($event.target.value)" #inputElement
            placeholder="Que dois-tu faire aujourd'hui ?">
      <button class="btn" (click)="changeTitle(inputElement.value)">Je dois faire ça !</button>
    </div>
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
