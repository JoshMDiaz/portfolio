import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWorkDetailComponent } from './my-work-detail.component';

describe('MyWorkDetailComponent', () => {
  let component: MyWorkDetailComponent;
  let fixture: ComponentFixture<MyWorkDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyWorkDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyWorkDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
