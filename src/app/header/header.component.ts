import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  host: {
    '(window:scroll)': 'updateHeader($event)'
  }
})
export class HeaderComponent implements OnInit {
  showMenu: boolean;
  menuItems: Array<{}>;
  isScrolled = false;
  currPos: any = 0;
  changePos: Number = 100;
  lastScrollTop: number = 0;
  direction: string = "";

  constructor(lc: NgZone) {
    this.showMenu = false;
    window.onscroll = () => {
      let st = window.pageYOffset;
      let dir = '';
      if (st > this.lastScrollTop) {
        dir = "down";
      } else {
        dir = "up";
      }
      this.lastScrollTop = st;
      lc.run(() => {
        this.direction = dir;
      });
    };
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  updateHeader(evt) {
    this.currPos = (window.pageYOffset || evt.target.scrollTop) - (evt.target.clientTop || 0);
    if (this.currPos >= 100 && this.direction === 'down') {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }

  ngOnInit() {
    this.menuItems = [
      {
        id: 1,
        link: '/my-work',
        name: 'My Work',
        className: 'my-work'
      },
      {
        id: 2,
        link: '/about-me',
        name: 'This is Me',
        className: 'about-me'
      },
      {
        id: 3,
        link: '/reach-out',
        name: 'Reach Out',
        className: 'reach-out'
      }
    ]
  }

}
