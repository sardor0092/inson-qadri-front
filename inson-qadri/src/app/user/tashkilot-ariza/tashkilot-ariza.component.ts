import { Component, OnInit } from '@angular/core';
import { Tashkilot } from 'src/app/shared/model/tashkilot';
import { TashkilotService } from '../tashkilot/tashkilot.service';

@Component({
  selector: 'app-tashkilot-ariza',
  templateUrl: './tashkilot-ariza.component.html',
  styleUrls: ['./tashkilot-ariza.component.scss']
})
export class TashkilotArizaComponent implements OnInit {
tashkilotlar!:Tashkilot[];

  csvInputChange(fileInputEvent: any) {
    console.log(fileInputEvent.target.files[0]);
  }

  constructor(public tashkilotService: TashkilotService) { }


  ngOnInit(): void {
    this.tashkilotService.getAll().subscribe(
      (data:any)=>{
        this.tashkilotlar=data.content;
        console.log(data);
        
      }

    )
  }

}
