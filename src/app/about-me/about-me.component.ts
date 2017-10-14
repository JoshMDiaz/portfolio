import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  skills: Array<{
    name: string,
    description: string,
    value: number
  }>;

  constructor() { }

  ngOnInit() {
    this.skills = [
      {
        name: 'HTML',
        description: 'I am awesome at it',
        value: 97
      },
      {
        name: 'CSS',
        description: 'I am awesome at it',
        value: 97
      },
      {
        name: 'SCSS',
        description: 'I am awesome at it',
        value: 93
      },
      {
        name: 'Javascript',
        description: 'I am awesome at it',
        value: 95
      },
      {
        name: 'Angular',
        description: 'I am awesome at it',
        value: 94
      },
      {
        name: 'React',
        description: 'I am awesome at it',
        value: 75
      },
      {
        name: 'Ionic',
        description: 'I am awesome at it',
        value: 93
      },
      {
        name: 'jQuery',
        description: 'I am awesome at it',
        value: 75
      },
      {
        name: 'WordPress',
        description: 'I am awesome at it',
        value: 88
      },
      {
        name: 'Ruby',
        description: 'I am awesome at it',
        value: 70
      },
      {
        name: 'Git',
        description: 'I am awesome at it',
        value: 90
      },
      {
        name: 'Gulp',
        description: 'I am awesome at it',
        value: 85
      },
      {
        name: 'Protractor',
        description: 'I am awesome at it',
        value: 89
      },
      {
        name: 'Karma',
        description: 'I am awesome at it',
        value: 84
      },
      {
        name: 'Adobe Creative Suite',
        description: 'I am awesome at it',
        value: 90
      },
      {
        name: 'Sketch',
        description: 'I am awesome at it',
        value: 92
      },
    ];
  }

}
