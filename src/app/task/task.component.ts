import { Component, OnInit } from '@angular/core';
import { ListService } from '../service/list.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks:Task[] = [];
  constructor(private listService:ListService) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(){
    this.listService.getLists().subscribe(result => {
      result.forEach(task => {
        if(!task.isproject){
          this.tasks.push(task);
        }
      })
    })
  }

  getTask(id){
    console.log(id);
  }
}
