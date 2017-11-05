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
        url: this.imageUrlBase + 'photo-1',
        alt: 'Concept of how to crop a photo'
      },
      {
        id: 2,
        url: this.imageUrlBase + 'photo-2',
        alt: 'Concept of profile images'
      },
      {
        id: 3,
        url: this.imageUrlBase + '2FA-2',
        alt: 'Concept of multi-factor verification choices'
      },
      {
        id: 4,
        url: this.imageUrlBase + 'LDSA-mobile-menu',
        alt: 'Concept of mobile menu design'
      },
      {
        id: 5,
        url: this.imageUrlBase + 'PD-1',
        alt: 'Concept of list'
      },
      {
        id: 6,
        url: this.imageUrlBase + 'PD-2',
        alt: 'Concept of form'
      },
      {
        id: 7,
        url: this.imageUrlBase + 'PD-3',
        alt: 'Concept of list of items'
      },
      {
        id: 8,
        url: this.imageUrlBase + 'PD-4',
        alt: 'Concept of data graph'
      }
    ];
  }

}
