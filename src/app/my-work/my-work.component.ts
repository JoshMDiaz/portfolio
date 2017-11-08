import { Component, OnInit } from '@angular/core';
import { MyWorkService } from './my-work.service';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit {
  concepts: Array<{}>;

  constructor(private myWorkService: MyWorkService) { }

  getConcepts() {
    this.concepts = this.myWorkService.getConcepts();
  }

  ngOnInit() {
    this.getConcepts();
  }

}
