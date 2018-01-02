import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';

@Component({
  selector: 'testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  testimonials: Array<{}>;
  testimonialsCarousel: NgxCarousel;

  constructor() { }

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
    this.testimonials = [
      // {
      //   id: 1,
      //   quote: 'I needed a redesign done for my website. I spoke to Josh, worked out what we needed done, and decided on a fair price. We love our new website! Definitely a good choice for us.',
      //   author: 'Taylor'
      // },
      {
        id: 2,
        quote: 'I decided to start my own blog, but didn\'t have the skills to create a nice looking site on my own. Josh was able to turn my vision for my blog into a reality!',
        author: 'Shyanne'
      },
      {
        id: 3,
        quote: 'Every business needs a website, even small businesses like mine. I was very happy with the work that Josh was able to do for me. He captured exactly what I was wanting!',
        author: 'Jordan'
      }
    ];
  }

}
