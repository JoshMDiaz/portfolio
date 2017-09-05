import { Component, ViewChild } from '@angular/core';
import {MdDialog, MD_DIALOG_DATA} from '@angular/material';
import { ContactModalComponent } from './contact-modal/contact-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tiles: any;

  constructor(public dialog: MdDialog) {

    this.tiles = [
      {text: 'My Work', cols: 3, rows: 2, color: 'lightblue'},
      {text: 'Me', cols: 1, rows: 4, color: '#fff'},
      {text: 'Three', cols: 1, rows: 2, color: 'lightpink'},
      {text: 'Reach Out', cols: 2, rows: 2, color: '#DDBDF1'},
    ];
  }

  openContactModal() {
    this.dialog.open(ContactModalComponent, {
      data: {
        test: 'this is a test'
      }
    });
  }
}
