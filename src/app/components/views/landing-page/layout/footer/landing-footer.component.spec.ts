import {ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingFooterComponent } from './landing-footer.component';

describe('FooterComponent', () => {
  let component: LandingFooterComponent;
  let fixture: ComponentFixture<LandingFooterComponent>;


  beforeEach(() => {
    fixture = TestBed.createComponent(LandingFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
