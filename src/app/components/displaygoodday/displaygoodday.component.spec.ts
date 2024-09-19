import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaygooddayComponent } from './displaygoodday.component';

describe('DisplaygooddayComponent', () => {
  let component: DisplaygooddayComponent;
  let fixture: ComponentFixture<DisplaygooddayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplaygooddayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplaygooddayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
