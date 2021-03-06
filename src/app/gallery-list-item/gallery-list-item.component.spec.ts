import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryListItemComponent } from './gallery-modal.component';

describe('GalleryListItemComponent', () => {
  let component: GalleryListItemComponent;
  let fixture: ComponentFixture<GalleryListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
