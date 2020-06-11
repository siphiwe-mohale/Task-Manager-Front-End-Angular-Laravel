import { Component, OnInit } from '@angular/core';
import { ConnetorService } from 'src/app/Services/connetor.service';
import { TokenService } from 'src/app/Services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public form = {
    email:null,
    name:null,
    password: null,
    password_confirmation:null
  };

  public error = [];

  constructor(
    private Connetor: ConnetorService,
    private Token: TokenService,
    private router: Router
    ) { }

  onSubmit() {
    this.Connetor.signup(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data){
    this.Token.handle(data.access_token);
    this.router.navigateByUrl('/task');
  }

  handleError(error) {
    this.error = error.error.errors;
  }

  ngOnInit() {
  }

}
