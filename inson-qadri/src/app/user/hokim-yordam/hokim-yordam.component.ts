import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Tashkilot } from 'src/app/shared/model/tashkilot';
import { FileService } from 'src/app/shared/service/file.service';
import { ArizaService } from '../ariza/ariza.service';
import { TashkilotService } from '../tashkilot/tashkilot.service';

@Component({
  selector: 'app-hokim-yordam',
  templateUrl: './hokim-yordam.component.html',
  styleUrls: ['./hokim-yordam.component.scss']
})
export class HokimYordamComponent implements OnInit {

  csvInputChange(fileInputEvent: any) {
    console.log(fileInputEvent.target.files[0]);
  }
  tashkilotlar!: Tashkilot[];
  @ViewChild("inputFile") inputFile!: ElementRef<any>;

  pageSize = 10;
  tahrirRejim = false;
  sort = 'id';
  sortType = 'asc'
  sorovBajarilmoqda = false;
  tashkilot!: Tashkilot;
  createForm: any;

  // csvInputChange(fileInputEvent: any) {
  //   console.log(fileInputEvent.target.files[0]);
  // }

  constructor(public tashkilotService: TashkilotService,
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private arizaService: ArizaService,
    private fileService: FileService,
    private router: Router
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
    const ariza = this.createForm.getRawValue();
    console.log("keldi post");
    let file = this.inputFile.nativeElement.files[0];
    console.log(file);
    ariza.type = "CREDIT"
    console.log(ariza);



    this.sorovBajarilmoqda = true;


    this.arizaService.create(ariza).subscribe(
      (success) => {
        if (file)
          this.fileService.singleFileUpload(success.id, file).subscribe(data => {

            this.createForm.reset();
            this._snackBar.open("Sizning arizangiz qabul qilindi!", "Ok", {
              duration: 1000,
              verticalPosition: 'bottom',
              panelClass: 'notif-success'

            });
            this.sorovBajarilmoqda = false;
            this.router.navigate(['/user/ariza']);

          });
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
