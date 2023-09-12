import { Component, EventEmitter, OnInit , Output } from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {
  title: string;
  desc: string;
  @Output() todoAdd : EventEmitter<Todo> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    const todo = {
      sno: 8,
      desc: this.desc,
      title: this.title,
      active: true
    }
    this.todoAdd.emit(todo);
  }
}
