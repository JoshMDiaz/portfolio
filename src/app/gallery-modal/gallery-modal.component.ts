import { Component, OnInit, Inject } from '@angular/core';
import {MD_DIALOG_DATA} from '@angular/material';
import { MyWorkService } from '../my-work/my-work.service';
import { NgxCarousel } from 'ngx-carousel';

@Component({
  selector: 'app-gallery-modal',
  templateUrl: './gallery-modal.component.html',
  styleUrls: ['./gallery-modal.component.scss']
})
export class GalleryModalComponent implements OnInit {
  concepts: Array<{id: number}>;
  galleryCarousel: NgxCarousel;

  constructor(@Inject(MD_DIALOG_DATA) public data: any, private myWorkService: MyWorkService) { }

  getConcepts() {
    this.concepts = this.myWorkService.getConcepts();
    this.findConcept(this.data);
  }

  findConcept(data) {
    for (let i = 0; i < this.concepts.length; i++) {
      if (this.concepts[i].id === data.id) {
        console.log(this.concepts[i]);
      }
    }
  }

  ngOnInit() {
    this.galleryCarousel = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      speed: 400,
      point: true,
      load: 2,
      touch: true,
      loop: true
    }
    this.getConcepts();
  }

}
