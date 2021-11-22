export class Task {
    id:number;
    title:string = "";
    details:string = "";
    when:Date = new Date();
    deadline:Date;
    isproject:boolean = true;
    parent:number = -1;
    done:boolean = false;
}
