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
        value: 90
      },
      {
        name: 'HTML',
        description: 'I am awesome at it',
        value: 90
      },
      {
        name: 'CSS',
        description: 'I am awesome at it',
        value: 90
      },
      {
        name: 'Javascript',
        description: 'I am awesome at it',
        value: 90
      },
      {
        name: 'Angular',
        description: 'I am awesome at it',
        value: 90
      },
    ];
  }

}
