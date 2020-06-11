import { Component, OnInit } from '@angular/core';
import { Task } from '../../../Task';
import { TaskService } from '../../../Services/task.service';
import { MessageService } from '../../../Services/message.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks : Task[] = [];

  constructor(private taskservice : TaskService,private msg : MessageService) { }

  ngOnInit() {
    this.getAllTask();
    this.msg.getMessage().subscribe((data) => {
      this.getAllTask();
    });
  }

  getAllTask(){
    this.taskservice.getTask().subscribe((all) => {
      this.tasks = all;
    });
  }

}
