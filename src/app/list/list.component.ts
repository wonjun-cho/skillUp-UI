import { Component, OnInit } from '@angular/core';

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
  projects:boolean = false;

  constructor() { }

  ngOnInit(): void {
    if(this.projects){
      this.listName = "Projects";
    }
  }

  checkProject(isChecked:boolean){
    if(isChecked){
      this.listName = "Projects";
      this.projects = true;
    }else{
      this.listName = "Tasks";
      this.projects = false;
    }
  }

}
