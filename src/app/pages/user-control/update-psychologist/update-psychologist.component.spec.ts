import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePsychologistComponent } from './update-psychologist.component';

describe('UpdatePsychologistComponent', () => {
  let component: UpdatePsychologistComponent;
  let fixture: ComponentFixture<UpdatePsychologistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatePsychologistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePsychologistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
