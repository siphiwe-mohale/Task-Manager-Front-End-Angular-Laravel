import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../../service/task.service';
import { MessageService } from '../../../service/message.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  title:string = '';
  formSubmitted : boolean = false;

  constructor(private ts:TaskService, private msg : MessageService) { }

  ngOnInit() {
  }

  Add(e){
    this.formSubmitted = true;

    e.preventDefault();
    this.ts.addTask(this.title).subscribe((data) => {
      console.log("task added");
      this.title = '';
      this.formSubmitted = false;
      this.msg.setMessage("sometihng happen");
    });
  }

}
