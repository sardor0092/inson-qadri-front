import { Component, OnInit } from '@angular/core';
import { Tashkilot } from 'src/app/shared/model/tashkilot';
import { TashkilotService } from './tashkilot.service';

@Component({
  selector: 'app-tashkilot',
  templateUrl: './tashkilot.component.html',
  styleUrls: ['./tashkilot.component.scss']
})
export class TashkilotComponent implements OnInit {

  constructor(public tashkilotService:TashkilotService) { }
  tashkilotlar!: Tashkilot[];
    ngOnInit(): void {
      this.tashkilotService.getAll().subscribe
      (
      (data:any)=>{
        this.tashkilotlar=data.content;
        console.log(data);
      } 
      )
    }
    title = 'Tashkilotlar';
  
    gridColumns = 3;
  
    toggleGridColumns() {
      this.gridColumns = this.gridColumns === 3 ? 4 : 3;
    }
}
