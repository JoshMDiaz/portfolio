import { Injectable } from '@angular/core';

@Injectable()
export class MyWorkService {
  imageUrlBase: string = '../../assets/concepts/square/';

  constructor() { }

  getConcepts() {
    return [
      {
        id: 1,
        url: this.imageUrlBase + 'photo-1-square.jpg',
        alt: 'Concept of how to crop a photo',
        description: 'I wanted to move away from a standard image crop. This image shows a circular crop which was meant to help someone crop their profile image.'
      },
      {
        id: 2,
        url: this.imageUrlBase + 'photo-2-square.jpg',
        alt: 'Concept of profile images',
        description: 'Profile images were a new concept for this application. This was an attempt to show different types of profile images that we could use.'
      },
      {
        id: 3,
        url: this.imageUrlBase + '2FA-2-square.jpg',
        alt: 'Concept of multi-factor verification choices',
        description: 'Multi-factor authentication has become a big deal in security. These are mockups of potential types of authentications that we could use.'
      },
      {
        id: 4,
        url: this.imageUrlBase + 'LDSA-mobile-menu-square.jpg',
        alt: 'Concept of mobile menu design',
        description: 'Going from not having a mobile menu at all to having a mobile friendly menu that was easy to use made a world of difference for this application.'
      },
      {
        id: 5,
        url: this.imageUrlBase + 'PD-1-square.jpg',
        alt: 'Concept of list',
        description: 'Creating a mobile application that had different categories.'
      },
      {
        id: 6,
        url: this.imageUrlBase + 'PD-2-square.jpg',
        alt: 'Concept of form',
        description: 'Simple form that is easy to read and understand.'
      },
      {
        id: 7,
        url: this.imageUrlBase + 'PD-3-square.jpg',
        alt: 'Concept of list of items',
        description: 'List of products that could be added to a cart for purchase later.'
      },
      {
        id: 8,
        url: this.imageUrlBase + 'PD-4-square.jpg',
        alt: 'Concept of data graph',
        description: 'Showing some data in a consumable way and allows the person to quickly find what they need.'
      },
      {
        id: 9,
        url: this.imageUrlBase + '2FA-1-square.jpg',
        alt: 'Concept of data graph',
        description: 'Recovery options when using multi-factor authentication.'
      }
    ];
  }

}
