import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Tashkilot } from 'src/app/shared/model/tashkilot';
import { FileService } from 'src/app/shared/service/file.service';
import { ArizaService } from '../ariza/ariza.service';
import { TashkilotService } from '../tashkilot/tashkilot.service';
@Component({
  selector: 'app-tashkilot-ariza',
  templateUrl: './tashkilot-ariza.component.html',
  styleUrls: ['./tashkilot-ariza.component.scss']
})
export class TashkilotArizaComponent implements OnInit {
  tashkilotlar!: Tashkilot[];
  @ViewChild("inputFile") inputFile!: ElementRef<any>;

  pageSize = 10;
  tahrirRejim = false;
  sort = 'id';
  sortType = 'asc'
  sorovBajarilmoqda = false;
  tashkilot!: Tashkilot;
  createForm: any;

  csvInputChange(fileInputEvent: any) {
    console.log(fileInputEvent.target.files[0]);
  }

  constructor(public tashkilotService: TashkilotService,
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private arizaService: ArizaService,
    private fileService: FileService
  ) { }


  ngOnInit(): void {
    this.createForm = this.formBuilder.group({

      title: [null, Validators.required],
      text: [null, Validators.required],
      tashkilot: [null],
      // aktiv: [null],

    });

    this.tashkilotService.getAll().subscribe(
      (data: any) => {
        this.tashkilotlar = data;
        console.log(data);

      }

    )
  }
  save(): void {
    const Ariza = this.createForm.getRawValue();
    console.log("keldi post");
    let file = this.inputFile.nativeElement.files[0];
    console.log(file);


    this.sorovBajarilmoqda = true;


    this.arizaService.create(Ariza).subscribe(
      (success) => {
        if (file)
          this.fileService.singleFileUpload(success.id, file).subscribe(data => {
            console.log(data);

          })
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
