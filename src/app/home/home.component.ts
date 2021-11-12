import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showList:boolean = true;
  parentProjects:Object[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onClickAdd(){
    this.showList = false;
  }

}
