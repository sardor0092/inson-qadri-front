import { Component, OnInit } from '@angular/core';
import { Ariza } from 'src/app/shared/model/ariza';
import { ArizaService } from './ariza.service';

@Component({
  selector: 'app-ariza',
  templateUrl: './ariza.component.html',
  styleUrls: ['./ariza.component.scss']
})
export class ArizaComponent implements OnInit {
  arizalar: Ariza[] = []
  constructor(private arizaService: ArizaService) { }

  ngOnInit(): void {
    this.arizaService.getAll().subscribe(data=>{
        this.arizalar = data;
    })
  }

}
