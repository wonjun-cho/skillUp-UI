import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Input } from '@angular/core';
import { ListService } from '../service/list.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../task.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  taskForm = new FormGroup({
    title:new FormControl(),
    done:new FormControl(),
    isproject:new FormControl(),
    parent:new FormControl(),
    when:new FormControl(),
    deadline:new FormControl(),
    details:new FormControl()
  });

  parents :Task[];

  id:number;
  disableParent:boolean = false;

  constructor(private listService:ListService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = Number.parseInt(params.get('id'));
      this.listService.getItem(this.id).pipe().subscribe(task => {
        if(!task.isproject){
          this.listService.getLists().subscribe(data => {
            this.parents = data.filter(project => {
              return project.isproject;
            });
          });
        }else{
          this.parents = [];
        }
        this.taskForm.patchValue(task);
      })
    });

  }

  onSubmit(){
    let task = this.taskForm.value;
    task.id = this.id;

    this.listService.updateItems(task).subscribe(d => {
      alert("Successfully updated");
      this.router.navigate(['home']);
    });
  }

  onCancel(){
    this.router.navigate(['home']);
  }

  checkProject(){
    if(this.disableParent){
      this.parents = [];
    }else{
      this.listService.getLists().subscribe(data => {
        this.parents = data.filter(project => {
          return project.isproject;
        })
      })
    }
  }
}
