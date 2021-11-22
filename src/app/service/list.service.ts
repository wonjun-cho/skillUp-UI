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
  id:number;
  constructor(private http:HttpClient) { }

  getLists():Observable<Task[]>{
    return this.http.get<Task[]>(this.url +"/task");
  }

  createItems(task:Task){
    return this.http.post(this.url + "/task", task);
  }

  updateItems(task:Task){
    return this.http.put(this.url + `/task/${task.id}`, task);
  }

  delItem(id:number){
    return this.http.delete(this.url + `/task/${id}`);
  }

  getItem(id:number){
    return this.http.get<Task>(this.url + `/task/${id}`)
  }
}
