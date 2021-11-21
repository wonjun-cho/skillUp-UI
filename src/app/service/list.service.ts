import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../task.model';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  url:string="http://localhost:3000";
  tasks:Observable<Task[]>;
  constructor(private http:HttpClient) { }

  getLists():Observable<Task[]>{
    console.log("HELLO")
    return this.http.get<Task[]>(this.url +"/task");
  }

  createItems(){
    
  }

  updateItems(){

  }
}
