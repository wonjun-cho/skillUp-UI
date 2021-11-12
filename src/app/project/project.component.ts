import { Component, OnInit } from '@angular/core';
import { ListService } from '../service/list.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projects:Task[] = [];

  constructor(private listService:ListService) { }

  ngOnInit(): void {
    this.getProjects();
    
  }

  getProjects(){
    this.listService.getLists().subscribe(result => {
      result.forEach(project =>{
        if(project.isproject){
          this.projects.push(project);
        }
      });
    });
    
  }
}
