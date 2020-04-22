import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router : Router, private authService: AuthService) { }

  ngOnInit() {
  }

  login(e){
    e.preventDefault();
    const target = e.target;
    const name = target.querySelector('#name').value;
    const password = target.querySelector('#password').value;
  
    const response = this.authService.login(name, password);
    console.log(response);

    alert(response.message);
    if (response.status === 200) {
      this.router.navigateByUrl('task');
      return;
    }
  }

}
