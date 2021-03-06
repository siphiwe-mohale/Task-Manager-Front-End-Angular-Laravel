import { Component, OnInit } from '@angular/core';
import { ConnetorService } from 'src/app/Services/connetor.service';
import { TokenService } from 'src/app/Services/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form = {
    email:null,
    password:null
  };

  public error = null;
  

  constructor(
    private Connetor: ConnetorService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService
    ) { }

  onSubmit(){
    this.Connetor.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data){
    this.Token.handle(data.access_token);
    this.Auth.changeAuthStatus(true);
    this.router.navigateByUrl('/task');
  }

  handleError(error) {
    this.error = error.error.error;
  }

  ngOnInit() {
  }

}
