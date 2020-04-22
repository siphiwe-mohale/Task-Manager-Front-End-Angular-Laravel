export class Task {
    id:string;
    title:string;
    status:boolean;
    date:Date;

    constructor(title){
        this.id = "not set";
        this.title = title;
        this.status = false;
        this.date = new Date();
    }
}