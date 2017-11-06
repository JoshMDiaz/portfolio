import { Component, OnInit, Input } from '@angular/core';
import { MdDialog, MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'gallery-list-item',
  templateUrl: './gallery-list-item.component.html',
  styleUrls: ['./gallery-list-item.component.scss']
})
export class GalleryListItemComponent implements OnInit {
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
