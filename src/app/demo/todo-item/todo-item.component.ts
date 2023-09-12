import { Component, Input, Output, OnInit ,EventEmitter } from '@angular/core'; 
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo:Todo;
  @Input() i:number;
  @Output() todoDelete : EventEmitter<Todo> = new EventEmitter;
  @Output() todoCheckBox : EventEmitter<Todo> = new EventEmitter;
  constructor() { }

  ngOnInit(): void {
  }

  onClick(todo: Todo) {
    this.todoDelete.emit(todo);
    console.log("demo");
  }

  onClickCheck(todo: Todo) {
    this.todoCheckBox.emit(todo);
  }
}

