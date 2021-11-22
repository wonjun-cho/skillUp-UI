import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../task.model';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  url:string="http://localhost:8080";
  tasks:Observable<Task[]>;
  id:number;
  constructor(private http:HttpClient) { }

  getLists():Observable<Task[]>{
    return this.http.get<Task[]>(this.url +"/tasks");
  }

  createItems(task:Task){
    return this.http.post(this.url + "/tasks", task);
  }

  updateItems(task:Task){
    return this.http.put(this.url + `/tasks/${task.id}`, task);
  }

  delItem(id:number){
    return this.http.delete(this.url + `/tasks/${id}`);
  }

  getItem(id:number){
    return this.http.get<Task>(this.url + `/tasks/${id}`)
  }
}
