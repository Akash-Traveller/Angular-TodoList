import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo'; 

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  todos: Todo[];
  localItem: string | null;
  constructor() { 
    this.localItem = localStorage.getItem("todos");
    if(this.localItem == null) {
      this.todos = [];
    } else {
      this.todos = JSON.parse(this.localItem);
    }
    this.todos = [
      {
      sno: 1,
      title: "this is description",
      desc: "description",
      active: true
    },
    {
      sno: 2,
      title: "this is description2",
      desc: "description2",
      active: true
    },
    {
      sno: 3,
      title: "this is description3",
      desc: "description3",
      active: true
    }
  ]
   }

  ngOnInit(): void {
  }

  deleteTodo(todo: Todo) {
    const index = this.todos?.indexOf(todo);
    this.todos?.splice(index, 1);
    localStorage.setItem("todos",JSON.stringify(this.todos));
    console.log(todo);
  }

  addTodo(todo: Todo) {
    this.todos?.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos));
    console.log(todo);
  }

  toggleTodo(todo: Todo){ 
    const index = this.todos.indexOf(todo);
    console.log(index)
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos", JSON.stringify(this.todos));
    console.log(todo)
  }
}
