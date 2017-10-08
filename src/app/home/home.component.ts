import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tiles: Array<{}>;
  testimonials: Array<{}>;
  testimonialsCarousel: NgxCarousel;

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
    this.testimonials = [
      {
        id: 1,
        quote: 'I needed a redesign done for my website. I spoke to Josh, worked out what we needed done, and decided on a fair price. We love our new website! Definitely a good choice for us.',
        author: 'Taylor',
        image: 'http://placehold.it/100x100'
        // image: '../assets/taylor.png'
      },
      {
        id: 2,
        quote: 'I decided to start my own blog, but didn\'t have the skills to create a nice looking site on my own. Josh was able to turn my vision for my blog into a reality!',
        author: 'Shyanne',
        image: 'http://placehold.it/100x100'
        // image: '../assets/shyanne.png'
      },
      {
        id: 3,
        quote: 'Every business needs a website, even small businesses like mine. I was very happy with the work that Josh was able to do for me. He captured exactly what I was wanting!',
        author: 'Jordan',
        image: 'http://placehold.it/100x100'
        // image: '../assets/jordan.png'
      }
    ];
  }

  ngOnInit() {
    this.testimonialsCarousel = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      speed: 400,
      interval: 7000,
      point: true,
      load: 2,
      touch: true,
      loop: true
    }
  }

}
