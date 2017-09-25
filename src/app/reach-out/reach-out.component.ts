import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-reach-out',
  templateUrl: './reach-out.component.html',
  styleUrls: ['./reach-out.component.scss']
})
export class ReachOutComponent implements OnInit {
  contact: {} = {
    jobType: 'New Website'
  };

  constructor() { }

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
