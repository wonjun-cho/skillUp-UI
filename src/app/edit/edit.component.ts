import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Input } from '@angular/core';
import { ListService } from '../service/list.service';

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

  @Input() parents:string[];

  constructor(private listService:ListService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.taskForm);
  }
}
