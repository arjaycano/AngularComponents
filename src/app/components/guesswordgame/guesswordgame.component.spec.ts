import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuesswordgameComponent } from './guesswordgame.component';

describe('GuesswordgameComponent', () => {
  let component: GuesswordgameComponent;
  let fixture: ComponentFixture<GuesswordgameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuesswordgameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuesswordgameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
