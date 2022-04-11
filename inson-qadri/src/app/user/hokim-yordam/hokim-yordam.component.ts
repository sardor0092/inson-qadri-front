import { Component, OnInit } from '@angular/core';
import { ArizaService } from '../ariza/ariza.service';

@Component({
  selector: 'app-hokim-yordam',
  templateUrl: './hokim-yordam.component.html',
  styleUrls: ['./hokim-yordam.component.scss']
})
export class HokimYordamComponent implements OnInit {

  csvInputChange(fileInputEvent: any) {
    console.log(fileInputEvent.target.files[0]);
  }

  constructor(public arizaService:ArizaService
    ) { }

  ngOnInit(): void {
  }



}
