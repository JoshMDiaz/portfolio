import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tiles: Array<{}>;
  bullets: Array<{}>;

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
    this.bullets = [
      // {
      //   icon: 'attach_money',
      //   title: 'Affordable',
      //   description: 'I keep the project a reasonable price range without the price range.'
      // },
      {
        icon: 'phone_iphone',
        title: 'Mobile Friendly',
        description: 'Your website will look great on more than just your computer screen.'
      },
      {
        icon: 'lightbulb_outline',
        title: 'Modern Design',
        description: 'This isn\'t the 90\'s. You need a website that is as modern as your business.'
      },
      // {
      //   icon: 'work',
      //   title: 'Experience',
      //   description: 'I bring real world experience to each project and it shows in my work.'
      // },
      {
        icon: 'motorcycle',
        title: 'Driven',
        description: 'I am passionate about improving my skills and driven to be my best self.'
      },
      {
        icon: 'screen_share',
        title: 'Organized',
        description: 'Keeping notes and understanding each client\'s needs is a priority.'
      },
      {
        icon: 'thumb_up',
        title: 'Easygoing',
        description: 'My easygoing personality makes my communication with all my clients easy and painless.'
      },
      {
        icon: 'timer',
        title: 'Prompt',
        description: 'Deadlines are important to you and they are important to me. Keeping deadlines is top priority.'
      }
    ];
  }

  ngOnInit() {

  }

}
