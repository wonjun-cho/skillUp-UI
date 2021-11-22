import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListService } from '../service/list.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  listName:string="Tasks";
  filterValue:string ="";
  filter:boolean = false;
  done:boolean = false;
  hideProject:boolean = false;
  projects:Task[] = [];
  tasks:Task[] = [];
  hasId:boolean = false;
  itemTitle:string = "";
  lastId:number;
  selectedId:number;
  elem;

  constructor(private listService:ListService, private router:Router) { }

  ngOnInit(): void {
    this.getProjects();
    this.getTasks();
    if(this.projects){
      this.listName = "Projects";
    }
  }

  checkProject(isChecked:boolean){
    if(isChecked){
      this.listName = "Projects";
      this.hideProject = true;
    }else{
      this.listName = "Tasks";
      this.hideProject = false;
    }
  }

  getProjects(){
    this.projects = [];
    this.listService.getLists().subscribe(result => {
      result.forEach(project =>{
        if(project.isproject){
          this.projects.push(project);
        }
      });
    });
  }

  getTaskFromProject(projectId:number){
    let tasks:Task[] = [];
    this.tasks.filter(task => {
      if(task.parent == projectId){
        tasks.push(task);
      }
    });

    return tasks;
  }

  getTasks(){
    this.tasks = [];
    this.listService.getLists().subscribe(result => {
      result.forEach(task => {
        if(!task.isproject){
          this.tasks.push(task);
        }
      })
    })
  }

  onClickAdd(title:string){
    if(title == "" || title == null){
      alert("Need to have valid title");
      return;
    }
    let lastProject = this.projects[this.projects.length - 1];
    let lastTask = this.tasks[this.tasks.length - 1];
    let id = lastProject.id > lastTask.id? lastProject.id + 1 : lastTask.id + 1;

    let task = new Task();
    
    task.id = id;
    task.title = title;
    task.parent = -1;
    task.isproject = true;
    
    this.listService.createItems(task).subscribe(data => {
      this.getProjects();
      this.getTasks();
    });

  }

  onClickEdit(){
    this.router.navigate(['edit', this.selectedId]);
  }

  onClickRemove(){
    if(confirm("Do you really want to remove the selected item?")){
      this.listService.delItem(this.selectedId).subscribe(data => {
        alert("Successfully deleted!");
        this.getProjects();
        this.getTasks();
      });
    }
  }

  getItem(id:number, from:string, $event){
    this.elem = document.getElementById(from+id.toString());
    if(this.elem.style.fontWeight == "bold"){
      this.elem.style.fontWeight = "";
      this.selectedId = -1;
      this.hasId = false;
    }else{
      this.elem.style.fontWeight = "bold";
      this.selectedId = id;
      this.hasId = true;
    }
    $event.stopPropagation();
  }
}
