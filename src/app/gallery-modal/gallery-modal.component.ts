import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gallery-modal',
  templateUrl: './gallery-modal.component.html',
  styleUrls: ['./gallery-modal.component.scss']
})
export class GalleryModalComponent implements OnInit {
  @Input() image: {
    url: string,
    alt: string
  };

  constructor() {
  }

  ngOnChanges() {
    console.log(this.image);

  }

  ngOnInit() {
  }

}
