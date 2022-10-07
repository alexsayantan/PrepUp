import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  //Current Usser who is logged in
  public getCurrentUser(){
    return this.http.get(`${baseUrl}/current-user`);
  }

  //generate token

  public generateToken(loginData: any)  {
    return this.http.post(`${baseUrl}/generate-token`, loginData);
  }

  //login user: set token to loalstorage

  public loginUser(token: string){
    localStorage.setItem('token', token);
    return true;
  }

  //isLogin: user is logged in or not

  public isLoggedIn(): boolean {
    let tokenStr = localStorage.getItem("token");
    if(tokenStr == undefined || tokenStr == null || tokenStr == ''){
      return false;
    }
    else {
      return true;
    }
  }

  //Logout: remove token from loalstorage

  public logout() {
    localStorage.removeItem("token");
    //localStorage.removeItem("user");
    return true;
  }

  //getToken: get token from loalstorage

  public getToken() {
    return localStorage.getItem("token");
  }

  //setUserDetails: set user details from loalstorage

  public setUser(user: any){
    localStorage.setItem("user", JSON.stringify(user));
  }

  //GET user details from loalstorage

  public getUser(){
    let userStr = localStorage.getItem("user");
    if(userStr != null){
      return JSON.parse(userStr);
    } else {
      this.logout();
      return null;
    }
  }

  // get user role

  public getUserRole(){
    let user = this.getUser();
    return user.authorities[0].authority;
  }

}
