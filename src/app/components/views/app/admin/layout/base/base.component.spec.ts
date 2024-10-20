import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBaseComponent } from './base.component';

describe('BaseComponent', () => {
  let component: AdminBaseComponent;
  let fixture: ComponentFixture<AdminBaseComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
