import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StripesBgComponent } from './stripes-bg.component';

describe('StripesBgComponent', () => {
  let component: StripesBgComponent;
  let fixture: ComponentFixture<StripesBgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StripesBgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StripesBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
