import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Task} from '../../../Task';
import { TaskService } from '../../../service/task.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  task:Task;

  constructor(private route:ActivatedRoute, private taskservice:TaskService) { }

  ngOnInit() {
    this.route.params.subscribe((data) =>{
      this.taskservice.getOne(data.id).subscribe((data_value) =>{
        this.task = data_value;
        console.log(this.task.title);
      });
    });
  }

}
