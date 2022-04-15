import { Component, NgModule, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
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
id?:any;
  surovBajarilmoqda = false;
  registerForm: any;
  minDate: Date;
  maxDate: Date;
  viloyalatlar!: Viloyat[]
  tumanlar!: Tuman[];
  mahallalar!: Mahalla[];

  selectedViloyatId!: number | undefined;
  selectedTumanId!: number | undefined;
  selectedMahallaId!: number | undefined;

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
      viloyat: ['', Validators.required],
      tuman: ['', Validators.required],
      mahalla: ['', Validators.required],

    });
    this.viloyatYuklash();




  }
  viloyatYuklash() {
    this.registerForm.get('tuman').disable();
    this.registerForm.get('mahalla').disable();
    this.viloyatService.getAll().subscribe(
      (success: any) => {
        this.viloyalatlar = success;
        console.log(success);
        this.id = success[0].id;
      },
      (error: any) => {
        setTimeout(this.viloyatYuklash, 2000);
      })
  }
  tumanYuklash(){
    
    console.log(this.registerForm.get('viloyat'));
    
    this.selectedViloyatId = this.registerForm.get('viloyat')?.value;
    console.log(this.selectedViloyatId);
    
    this.tumanlar = [];
    this.mahallalar = [];
    this.selectedMahallaId = undefined;
    if(this.selectedViloyatId){
      this.viloyatService.getAllTuman(this.selectedViloyatId).subscribe((t: Tuman[])=>{
        this.tumanlar = t;
        this.registerForm.get('tuman').enable();
      },
      (error: any)=>{
        setTimeout(this.tumanYuklash, 2000);
      })
    }
    
  }
  mahallaYuklash(){
    this.selectedTumanId = this.registerForm.get('tuman')?.value;
    this.mahallalar = [];
    this.selectedMahallaId = undefined;
    if(this.selectedTumanId){
      this.viloyatService.getAllSektor(this.selectedTumanId).subscribe((m: Mahalla[])=>{
        this.mahallalar = m;
        this.registerForm.get('mahalla').enable();
      },
      (error: any)=>{
        setTimeout(this.mahallaYuklash, 2000);
      })
    }
    

    
  }
  ngAfterViewInit(): void {


    // this.tumanService.getAll().subscribe(
    //   (success: any) => {
    //     this.tumanlar= success;
    //     console.log(success);

    //   }
    // )
    // this.mahallaService.getAll().subscribe(
    //   (success: any) => {
    //     this.mahallalar = success;
    //     console.log(success);

    //   }
    // )

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
    register.territoryId= register.viloyat;
    // register.tuman = {
    //   id: register.tuman
    // }
    // register.mahalla = {
    //   id: register.mahalla
    // }
    console.log(register);
    
    this.surovBajarilmoqda = true;
    this.loginService.register(register).subscribe(
      (success) => {
        this.router.navigate(['/login'])
        //  this.dialogref.close("save")
      },
      (error) => {
        let message = "bunday foydalanuvchi mavjud!";

        if (error.error && error.error.message) {
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
