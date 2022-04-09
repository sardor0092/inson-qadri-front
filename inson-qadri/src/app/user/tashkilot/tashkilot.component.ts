import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tashkilot',
  templateUrl: './tashkilot.component.html',
  styleUrls: ['./tashkilot.component.scss']
})
export class TashkilotComponent implements OnInit {

  /**
   * for testing
   */
  tashilotlar: any = [
    {
      name: "Adliya",
      image: "https://rasm.uz/adliya.jpg"
    },
    {
      name: "Adliya",
      image: "https://rasm.uz/adliya.jpg"
    },
    {
      name: "Adliya",
      image: "https://rasm.uz/adliya.jpg"
    },
    {
      name: "Adliya",
      image: "https://rasm.uz/adliya.jpg"
    },
    {
      name: "Adliya",
      image: "https://rasm.uz/adliya.jpg"
    },


  ]
  constructor() { }

  ngOnInit(): void {
  }

}
