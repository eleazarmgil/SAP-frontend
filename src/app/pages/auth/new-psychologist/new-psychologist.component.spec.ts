import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPsychologistComponent } from './new-psychologist.component';

describe('NewPsychologistComponent', () => {
  let component: NewPsychologistComponent;
  let fixture: ComponentFixture<NewPsychologistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewPsychologistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewPsychologistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
