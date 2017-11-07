import { Component, OnInit, Input } from '@angular/core';
import { MdDialog, MD_DIALOG_DATA } from '@angular/material';
import { GalleryModalComponent } from '../gallery-modal/gallery-modal.component';

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

  constructor(public dialog: MdDialog) {
  }

  openGalleryModal() {
    this.dialog.open(GalleryModalComponent, {
      data: this.image
    });
  }

  ngOnChanges() {

  }

  ngOnInit() {
  }

}
