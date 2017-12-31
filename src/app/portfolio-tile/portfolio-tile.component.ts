import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'portfolio-tile',
  templateUrl: './portfolio-tile.component.html',
  styleUrls: ['./portfolio-tile.component.scss']
})
export class PortfolioTileComponent implements OnInit {
  @Input() id: number;
  @Input() title: string;
  @Input() link: string;
  @Input() logo?: string;

  constructor() { }

  ngOnInit() {
  }

}
