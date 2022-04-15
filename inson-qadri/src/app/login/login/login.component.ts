import { Component, OnInit } from '@angular/core';
import { FormBuilder,  Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import {  Router } from '@angular/router';
import { JwtUtil } from 'src/app/core/jwt.util';
import { LoginService } from './login.service';
import { StatsStoreService } from './stats-store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: any;
  surovBajarilmoqda = false;

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private _snackBar: MatSnackBar,
    private jwtUtil: JwtUtil,
    private stateStorageService: StatsStoreService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: [null, [Validators.required, Validators.minLength(6)]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      rememberMe: [null],
    });

  }
  onLogin() {
    this.jwtUtil.clear();
    const loginParol = this.loginForm.getRawValue();
    this.surovBajarilmoqda = true;
    console.log(loginParol);
    this.loginService.login(loginParol).subscribe(
      () => {
        this.surovBajarilmoqda = false;

        let roles = this.jwtUtil.getRoles();

        const prevUrl = this.stateStorageService.getUrl();
        if (prevUrl) {
          // TODO oxirgi kirgan manzil bo'yicha yunaltirish
          this.router.navigate(["/user/menyu"]);
        } else {
          this.router.navigate(['/user/menyu']);
        }
      },
      (error) => {
        let message = "Login yoki parol xato!";
        if (error.error.message) {
          if (error.error.message != "INVALID_CREDENTIALS") {
            message = error.error.message;
          }
        }
        this._snackBar.open(message, 'X', {
          duration: 4000,
          verticalPosition: 'bottom',

        });
        this.surovBajarilmoqda = false;
      }
    )

  }
}
