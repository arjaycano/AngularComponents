import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayageComponent } from './displayage.component';

describe('DisplayageComponent', () => {
  let component: DisplayageComponent;
  let fixture: ComponentFixture<DisplayageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
