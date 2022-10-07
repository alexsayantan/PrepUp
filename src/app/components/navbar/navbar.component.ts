import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public isLoggedIn = false;
  public user:any = null;

  constructor(
    public login: LoginService,
    private router: Router,
    private toast: HotToastService
  ) { }

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
