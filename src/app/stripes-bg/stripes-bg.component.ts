import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'stripes-bg',
  templateUrl: './stripes-bg.component.html',
  styleUrls: ['./stripes-bg.component.scss']
})
export class StripesBgComponent implements OnInit {
  @Input() page: string;

  constructor() { }

  ngOnInit() {
  }

}
