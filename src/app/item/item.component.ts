import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'todo-item',
  template: `
    <span class="todo-title">{{ todoItem.title }}</span>
  `,
  styleUrls: ['./item.component.css']
})

export class ItemComponent implements OnInit {
  @Input() todoItem: any;

  constructor() { }

  ngOnInit() {
  }

}
