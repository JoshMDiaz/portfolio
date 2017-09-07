import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  year: number;
  constructor() { }

  getYear() {
    let d = new Date();
    let n = d.getFullYear();
    this.year = n;
  }

  ngOnInit() {
    this.getYear();
  }

}
