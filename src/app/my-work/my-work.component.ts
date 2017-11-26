import { Component, OnInit } from '@angular/core';
import { MyWorkService } from './my-work.service';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit {
  concepts: Array<{}>;
  tiles: Array<{}>;

  constructor(private myWorkService: MyWorkService) { }

  getConcepts() {
    this.concepts = this.myWorkService.getConcepts();
  }

  ngOnInit() {
    this.getConcepts();
    this.tiles = [
      {
        id: 1,
        title: "Taylored Ties",
        logo: "../assets/taylored-ties.png"
      },
      {
        id: 2,
        title: "Shyanne Diaz",
        logo: "../assets/shyanne-diaz.png"
      },
      {
        id: 3,
        title: "Ronin Dragon Karate",
        logo: "../assets/rdk.png"
      }
    ];
  }

}
