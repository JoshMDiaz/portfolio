import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tiles: Array<{}>;

  constructor() {
    this.tiles = [
      {
        text: 'My Work',
        cols: 3,
        rows: 2,
        color: 'lightblue',
        img: 'url(\'../assets/mac.jpg\')',
        overlayClass: 'work',
        link: '/my-work'
      },
      {
        text: 'Me',
        cols: 1,
        rows: 4,
        color: '#fff',
        img: 'url(\'../assets/me.jpg\')',
        overlayClass: 'me',
        link: '/about-me'
      },
      {
        text: 'Reach Out',
        cols: 2,
        rows: 2,
        color: '#DDBDF1',
        img: 'url(\'../assets/phone.jpg\')',
        overlayClass: 'reach-out',
        link: '/reach-out'
      },
    ];
  }

  ngOnInit() {
  }

}
