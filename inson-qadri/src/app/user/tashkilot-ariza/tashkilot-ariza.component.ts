import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Tashkilot } from 'src/app/shared/model/tashkilot';
import { ArizaService } from '../ariza/ariza.service';
import { TashkilotService } from '../tashkilot/tashkilot.service';
@Component({
  selector: 'app-tashkilot-ariza',
  templateUrl: './tashkilot-ariza.component.html',
  styleUrls: ['./tashkilot-ariza.component.scss']
})
export class TashkilotArizaComponent implements OnInit {
  tashkilotlar!: Tashkilot[];

  pageSize = 10;
  tahrirRejim = false;
  sort = 'id';
  sortType = 'asc'
  sorovBajarilmoqda = false;

  createForm: any;

  csvInputChange(fileInputEvent: any) {
    console.log(fileInputEvent.target.files[0]);
  }

  constructor(public tashkilotService: TashkilotService,
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private arizaService:ArizaService
    ) { }


  ngOnInit(): void {
    this.createForm = this.formBuilder.group({
      id: [{ value: '', disabled: true }],
      title: [null, Validators.required],
      text: [null, Validators.required],
      tashkilot: [null],
      // aktiv: [null],

    });

    this.tashkilotService.getAll().subscribe(
      (data: any) => {
        this.tashkilotlar = data.content;
        console.log(data);

      }

    )
  }
  save(): void {
    const Ariza = this.createForm.getRawValue();
console.log("keldi post");

    this.sorovBajarilmoqda = true;

    if (this.tahrirRejim) {
      this.arizaService.update(Ariza).subscribe(
        (success:any) => {
         
          this.createForm.reset();
          this.tahrirRejim = false;
          this.sorovBajarilmoqda = false;

        },
        (error) => {


          let message = "Xatoli ro'y berdi";
          console.log(error);

          if (error.error?.message) {
            message = error.error.message;
          }
          this._snackBar.open(message, 'X', {
            duration: 4000,
            verticalPosition: 'bottom',

          });
          this.sorovBajarilmoqda = false;
        },

      );
    } else {

      this.arizaService.create(Ariza).subscribe(
        (success) => {
          this.createForm.reset();
          this._snackBar.open("User muvaffaqiyatli qo'shildi!", "", {
            duration: 1000,
            verticalPosition: 'top',
            panelClass: 'notif-success'

          });
          this.sorovBajarilmoqda = false;
        },
        (error) => {
          let message = "Xatoli ro'y berdi";
          console.log(error);

          if (error.error?.message) {
            message = error.error.message;
          }
          this._snackBar.open(message, 'X', {
            duration: 4000,
            verticalPosition: 'bottom',


          });
          this.sorovBajarilmoqda = false;
        }

      );
    }

  }

}
