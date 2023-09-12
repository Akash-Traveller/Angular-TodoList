import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { TodoItemComponent } from './demo/todo-item/todo-item.component';
import { TodoAddComponent } from './demo/todo-add/todo-add.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './demo/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    TodoItemComponent,
    TodoAddComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
