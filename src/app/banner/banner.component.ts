import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  @Input() page: string;
  @Input('main-banner-text') mainBannerText: string;
  @Input('secondary-banner-text') secondaryBannerText: string;

  constructor() { }

  ngOnInit() {
  }

}
