import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog/dialog-ref';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Mahalla } from 'src/app/shared/model/mahalla';
import { Tuman } from 'src/app/shared/model/tuman';
import { Viloyat } from 'src/app/shared/model/viloyat';
import { MahallaService } from 'src/app/shared/service/mahalla.service';
import { TumanService } from 'src/app/shared/service/tuman.service';
import { ViloyatService } from 'src/app/shared/service/viloyat.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  surovBajarilmoqda = false;
  registerForm: any;
  minDate: Date;
  maxDate: Date;
  mahallalar!:Mahalla;
  viloyalatlar!:Viloyat;
  tumanlar!:Tuman;

  constructor(
    
    private router: Router,
    private mahallaService: MahallaService,
    private tumanService: TumanService,
    private viloyatService: ViloyatService,

    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private _snackBar: MatSnackBar) {
    // Set the minimum to January 1st 20 years in the past and December 31st a year in the future.
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 60, 0, 0);
    this.maxDate = new Date(currentYear + 0, 0, 0);
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      id: [{ value: '', disabled: true }],
      firstname: [null, Validators.required],
      lastname: [null, Validators.required],
      fatherName: [null],
      username: [null],
      password: [null, [Validators.required, Validators.minLength(6)]],
      confirmPassword: [null, [Validators.required, Validators.minLength(6)]],
      viloyat: [null],
      tuman: [null],
      mahalla: [null],
    });
    
   
  }
  
  ngAfterViewInit(): void {
    this.mahallaService.getAll().subscribe(
      (success: any) => {
        this.mahallaService = success;
        console.log(success);
        
      }
    )
    this.viloyatService.getAll().subscribe(
      (success: any) => {
        this.viloyatService= success;
        console.log(success);
        
      }
    )
    this.tumanService.getAll().subscribe(
      (success: any) => {
        this.tumanService = success;
        console.log(success);
        
      }
    )
    
  }

  checkIfMatchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
    return (group: FormGroup) => {
      let passwordInput = this.registerForm.controls[passwordKey],
        passwordConfirmationInput = this.registerForm.controls[passwordConfirmationKey];
      if (passwordInput.value !== passwordConfirmationInput.value) {
        return passwordConfirmationInput.setErrors({ notEquivalent: true })
      }
      else {
        return passwordConfirmationInput.setErrors(null);
      }
    }
  }
  
  onRegister() {
    const register = this.registerForm.getRawValue();
    this.surovBajarilmoqda = true;
    this.loginService.register(register).subscribe(
      (success) => {
        this.router.navigate(['/login'])
          //  this.dialogref.close("save")
      },
      (error) => {
        let message = "bunday foydalanuvchi mavjud!";

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

  checkPasswords: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
    if (this.registerForm) {
      let pass = this.registerForm.get('password')!.value;
      let confirmPass = this.registerForm.get('re_password')!.value
      return pass === confirmPass ? null : { notSame: true }
    } else {
      return { notSame: true };
    }
  }
  // passwordMatch(){

  //   return this.registerForm.get('password').value == this.registerForm.get('re_password').value

  // }


}
