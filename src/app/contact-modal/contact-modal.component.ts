import { Component, OnInit, Inject } from '@angular/core';
import {MD_DIALOG_DATA} from '@angular/material';
import {FormControl, Validators} from '@angular/forms';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-contact-modal',
  templateUrl: './contact-modal.component.html',
  styleUrls: ['./contact-modal.component.scss']
})
export class ContactModalComponent implements OnInit {
  contact: {} = {
    jobType: 'New Website'
  };

  constructor(@Inject(MD_DIALOG_DATA) public data: any) { }


  nameFormControl = new FormControl('', [
    Validators.required
  ]);

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(EMAIL_REGEX)
  ]);

  jobTypes = [
    {
      id: 1,
      value: 'New Website',
      name: 'Create a new website',
      selected: true
    },
    {
      id: 2,
      value: 'Update Website',
      name: 'Update an existing website',
      selected: false
    },
    {
      id: 3,
      value: 'New App',
      name: 'Create a new app',
      selected: false
    }
  ];

  send(contact) {
    console.log(contact);
  }

  ngOnInit() {
  }

}
