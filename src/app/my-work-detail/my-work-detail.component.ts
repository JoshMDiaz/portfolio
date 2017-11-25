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
    bannerSecondaryText: string,
    logo: string,
    link: string,
    description: string
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
        bannerSecondaryText: 'Website.&nbsp;&nbsp;eCommerce.&nbsp;&nbsp;Small Business.',
        logo: '../../assets/taylored-ties.png',
        link: 'http://tayloredties.com',
        description: 'Taylored Ties is slick new way of getting that tie on right the first time. The look of the ties are modern, the prices of the ties are affordable, and the simplicity of the ties are fantastic. This project was fun to be able to showcase these awesome ties.'
      },
      {
        id: 2,
        title: 'Shyanne Diaz',
        bannerSecondaryText: 'Website.&nbsp;&nbsp;Blog.&nbsp;&nbsp;Small Business.',
        logo: '../../assets/shyanne-diaz-no_bg.png',
        link: 'http://shyannediaz.com',
        description: 'I helped Shyanne bring her blog design vision to life. She knew what she wanted for the content, but did not know how to display it all. This blog was what she needed to help her start her small business.'
      },
      {
        id: 3,
        title: 'Ronin Dragon Karate',
        bannerSecondaryText: 'Website.&nbsp;&nbsp;Karate.&nbsp;&nbsp;Small Business.',
        logo: '../../assets/rdk-no_bg.png',
        link: 'http://rdkutah.com',
        description: 'This karate dojo is small and relatively unknown. By adding a website, Jordan has been able to reach more people and get more students than previously possible. He has also been able to include content that has enriched the experience that his students get outside of the dojo.'
      }
    ];
    this.projectId = this.route.snapshot.params.id;
    this.findCurrentProject(this.projectId);
  }

}
