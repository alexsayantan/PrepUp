import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { AnimationOptions } from 'ngx-lottie';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })

  constructor(
    private hotToast: HotToastService,
    private loginService: LoginService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  options: AnimationOptions = {
    path: 'assets/loginLogo.json',
  }

  formSubmit(){
    if(this.user.value.username?.trim() == '' || this.user.value.username?.trim() == null) {
      this.hotToast.error('Username is required!', {
        duration: 3000,
      });
      return;
    }
    if(this.user.value.password?.trim() == '' || this.user.value.password?.trim() == null) {
      this.hotToast.error('Password is required!', {
        duration: 3000,
      });
      return;
    }

    //request to server to generate token
    this.loginService.generateToken(this.user.value).subscribe(
      (data: any) => {
        console.log(data);

        //Login 
        this.loginService.loginUser(data.token);

        //Current User
        this.loginService.getCurrentUser().subscribe(
          (user:any) => {
            this.loginService.setUser(user);
            console.log(user);

            //Redirect ...Admin: Admin Dashboard
            if(this.loginService.getUserRole() == 'admin'){
              this.router.navigate(['/admin']);
            } 

            //Redirect ...Normal: Normal Dashboard
            else if(this.loginService.getUserRole() == 'normal') {
              this.router.navigate(['/user/0']);
            } else {
              //Logout 
              this.loginService.logout();
            }


          }
        );
      },
      (err: any) => {
        this.hotToast.error("Check Username/Password");
      }
    )

  }
}
