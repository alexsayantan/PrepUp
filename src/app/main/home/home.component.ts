import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotToastModule, HotToastService } from '@ngneat/hot-toast';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  public isLoggedIn = false;
  public user:any = null;

  constructor(private login: LoginService, private toast: HotToastService, private router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn = this.login.isLoggedIn();
    this.user = this.login.getUser();
  }

  public logout() {
    this.login.logout();
    this.toast.success('Logged out', {duration: 2000});
    this.router.navigate(['login']);
  }

}
