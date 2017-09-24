import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-work-detail',
  templateUrl: './my-work-detail.component.html',
  styleUrls: ['./my-work-detail.component.scss']
})
export class MyWorkDetailComponent implements OnInit {
  projectsArr: Array<{
    id: number,
    title: string,
    logo: string,
    link: string
  }>;
  projectId: number;
  currentProject: {};

  constructor(private route:ActivatedRoute) { }

  findCurrentProject(projectId) {
    for (let i = 0; i < this.projectsArr.length; i++) {
      if (projectId == this.projectsArr[i].id) {
        this.currentProject = this.projectsArr[i];
      }
    }
  }

  ngOnInit() {
    this.projectsArr = [
      {
        id: 1,
        title: 'Taylored Ties',
        logo: '../../assets/taylored-ties.png',
        link: 'http://tayloredties.com'
      },
      {
        id: 2,
        title: 'Shyanne Diaz',
        logo: '../../assets/shyanne-diaz.png',
        link: 'http://shyannediaz.com'
      },
      {
        id: 3,
        title: 'Ronin Dragon Karate',
        logo: '../../assets/rdk.png',
        link: 'http://rdkutah.com'
      }
    ];
    this.projectId = this.route.snapshot.params.id;
    this.findCurrentProject(this.projectId);
  }

}
