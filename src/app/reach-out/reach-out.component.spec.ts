import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReachOutComponent } from './reach-out.component';

describe('ReachOutComponent', () => {
  let component: ReachOutComponent;
  let fixture: ComponentFixture<ReachOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReachOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReachOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
