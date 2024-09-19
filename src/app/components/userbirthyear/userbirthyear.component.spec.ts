import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserbirthyearComponent } from './userbirthyear.component';

describe('UserbirthyearComponent', () => {
  let component: UserbirthyearComponent;
  let fixture: ComponentFixture<UserbirthyearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserbirthyearComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserbirthyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
