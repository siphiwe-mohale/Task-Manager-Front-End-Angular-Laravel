import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../../../Task';
import { TaskService } from '../../../../Services/task.service';
import { MessageService } from '../../../../Services/message.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input()task:Task;
  
  constructor(private taskservice : TaskService, private msg:MessageService) { }

  ngOnInit() {
    
  }

  Delete(){
    this.taskservice.deleteTask(this.task.id).subscribe((data) => {
        console.log('task deleted : ',data.id);
        this.msg.setMessage("something happen");
    });
  }

}
