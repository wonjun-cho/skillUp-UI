import { Pipe, PipeTransform } from '@angular/core';
import { Task } from './task.model';

@Pipe({
  name: 'done'
})
export class DonePipe implements PipeTransform {

  transform(value: Task[], isDone:boolean): Task[] {
    if(isDone){
      let task = value.filter(data => data.done == true);
      return task;
    }else{
      return value;
    }
  }

}
