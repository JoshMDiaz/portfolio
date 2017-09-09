import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showMenu: boolean;
  menuItems: Array<{}>;

  constructor() {
    this.showMenu = false;
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  ngOnInit() {
    this.menuItems = [
      {
        id: 1,
        link: '/my-work',
        name: 'My Work'
      },
      {
        id: 2,
        link: '/about-me',
        name: 'This is Me'
      },
      {
        id: 3,
        link: '/reach-out',
        name: 'Reach Out'
      }
    ]
  }

}
