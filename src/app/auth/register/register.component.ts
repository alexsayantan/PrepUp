import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AnimationOptions } from 'ngx-lottie';
import { LoginService } from 'src/app/services/login.service';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public passLen: string = '';

  public user = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.minLength(6), Validators.required]),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl(''),
    email: new FormControl('', [Validators.email, Validators.required]),
    phone: new FormControl('', [Validators.minLength(10)])
  })


  constructor(
    private registerService: RegisterService,
    private toast: HotToastService,
    private router: Router) { }

  ngOnInit(): void {
  }

  options: AnimationOptions = {
    path: 'assets/registerLogo.json',
    loop: false,
  }

  get username() {
    return this.user.get('username');
  }


  formSubmit() {


    if (this.user.value.username === '' || this.user.value.username === null) {
      this.toast.error('Username is required');
      return;
    }
    else if (this.user.value.password === '' || this.user.value.password === null) {
      this.toast.error('Password is required');
      return;
    }
    else if (this.passLen.length < 6) {
      this.toast.error('Password must be of at least 6 characters!');
      return;
    }
    else if (this.user.value.firstName === '' || this.user.value.firstName === null) {
      this.toast.error("First name can't be empty!");
      return;
    }
    else if (this.user.value.email === '' || this.user.value.email === null) {
      this.toast.error("Email can't be empty!");
      return;
    } 

    this.registerService.addUser(this.user.value)
      .pipe(
        this.toast.observe({
          loading: 'Signing Up...',
          success: 'Registered successfully!',
          error: 'Oops! Registration failed',
        })
      )
      .subscribe();
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 2000)
      

  }
}
