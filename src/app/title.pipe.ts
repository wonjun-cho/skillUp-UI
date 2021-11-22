import { Pipe, PipeTransform } from '@angular/core';
import { Task } from './task.model';

@Pipe({
  name: 'title'
})
export class TitlePipe implements PipeTransform {

  transform(value: Task[], title:string, isFilter:boolean): Task[] {
    console.log(title);
    if(isFilter){
      let task = value.filter(data => data.title.includes(title));
      return task;
    }else{
      return value;
    }
  }

}
