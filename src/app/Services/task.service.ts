// ng g s service/task creates this file

import { Injectable } from '@angular/core';
import {Headers, RequestOptions} from '@angular/http';
import { Task } from '../Task';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  server:string = 'http://127.0.0.1:8000/api/';
  headers:Headers = new Headers();
  options:any;

  constructor(private http:HttpClient) { 
    this.headers.append('enctype','multipart/form-data');
    this.headers.append('Content-Type','application/json');
    this.headers.append('X-Requested-With','XMLHttpRequest');

    this.options = new RequestOptions({headers:this.headers});
  }

  addTask(title):Observable<Task>{
    const newTask = new Task(title);
    return this.http.post<Task>(this.server+"add", newTask);
  }

  getTask():Observable<Task[]>{
    return this.http.get<Task[]>(this.server+'get');
  }

  deleteTask(no):Observable<Task>{

    const newTask = {
      id : no,
      title :'not set',
      status : false,
      date : new Date()
    };

    return this.http.post<Task>(this.server+'delete',newTask);
  }

  getOne(no):Observable<Task>{

    const newTask = {
      id : no,
      title :'not set',
      status : false,
      date : new Date()
    };

    return this.http.post<Task>(this.server+'getone',newTask);
  }
}
