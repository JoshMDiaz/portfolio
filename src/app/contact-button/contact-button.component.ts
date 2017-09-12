import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { MdDialog, MD_DIALOG_DATA } from '@angular/material';
import { ContactModalComponent } from '../contact-modal/contact-modal.component';

@Component({
  selector: 'contact-button',
  templateUrl: './contact-button.component.html',
  styleUrls: ['./contact-button.component.scss']
})
export class ContactButtonComponent implements OnInit {
  @Input() page: string;
  
  constructor(public dialog: MdDialog) { }

  openContactModal() {
    this.dialog.open(ContactModalComponent, {
      data: {
        test: 'this is a test'
      }
    });
  }

  ngOnInit() {
  }

}
