import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showList:boolean = true;
  parentProjects:Object[] = [];

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onClickAdd(){
    this.router.navigate(['edit']);
  }

}
