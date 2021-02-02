import { stringify } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from './models/Task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public mode = 'list';
  public title = 'Minhas Tarefas';
  public todos: Task[] = [];
  public form!: FormGroup;

  constructor(private fb: FormBuilder) {   
    this.form = this.fb.group({
      title: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(50),
        Validators.required
      ])]
    });
    this.carregar();
  }

  incluir() {
    var taskName = this.form.controls['title'].value;
    if (this.todos.length < 1)    {
      this.todos.push(new Task(1, taskName, false));
      this.salvar();
      this.clear();
    }     
    else
    {
      const index = Math.max.apply(null, this.todos.map(x => x.id)) + 1;
      this.todos.push(new Task(index, taskName, false));
      this.salvar();
      this.clear();
    }
  }

  clear() {
    this.form.reset();
  }

  remover(task: Task) {
    const index = this.todos.indexOf(task);
    if (index !== -1)
      this.todos.splice(index, 1);
    this.salvar();
  }

  marcarComoConcluido(task: Task) {
    task.done = true;
    this.salvar();
  }

  marcarComoNaoConcluido(task: Task) {
    task.done = false;
    this.salvar();
  }

  salvar() {
    const dado = JSON.stringify(this.todos);
    localStorage.setItem('todos', dado);
    this.mode = 'list';
  }

  carregar(){
    const dado = localStorage.getItem('todos');
    if (dado)
      this.todos = JSON.parse(dado)
  }

  changeMode(mode: string){
    this.mode = mode;
  }
}
