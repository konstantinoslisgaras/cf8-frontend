import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step8DrivenForms } from './step8-driven-forms';

describe('Step8DrivenForms', () => {
  let component: Step8DrivenForms;
  let fixture: ComponentFixture<Step8DrivenForms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step8DrivenForms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Step8DrivenForms);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
