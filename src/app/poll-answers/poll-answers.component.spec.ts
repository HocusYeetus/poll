import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollAnswersComponent } from './poll-answers.component';

describe('PollAnswersComponent', () => {
  let component: PollAnswersComponent;
  let fixture: ComponentFixture<PollAnswersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PollAnswersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PollAnswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
