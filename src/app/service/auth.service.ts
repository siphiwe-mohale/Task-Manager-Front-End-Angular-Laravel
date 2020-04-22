import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(name: string, password: string){
    if(name === password){
      this.setSession(name);
      return {
        status: 200, message: 'Login Success'
      };
    }else{
      return {
        status: 202, message: 'Username or password is incorrect'
      };
    }
  }

  setSession(name: string) {
    const user = {name: name};
    localStorage.setItem("user", JSON.stringify(user));
  }

  logout() {
    localStorage.removeItem("user");
  }

  isUserLoggedIn(){
    const user = JSON.parse(localStorage.getItem("user"));
    return user !== null;
  }
}
