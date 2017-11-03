import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit {
  concepts: Array<{}>;
  imageUrlBase: string = '../../assets/concepts/';

  constructor() { }

  ngOnInit() {
    this.concepts = [
      {
        id: 1,
        title: '',
        description: '',
        images: [
          {
            url: this.imageUrlBase + '',
            alt: ''
          }
        ]
      }
    ];
  }

}
