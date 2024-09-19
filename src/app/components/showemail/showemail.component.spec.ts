import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowemailComponent } from './showemail.component';

describe('ShowemailComponent', () => {
  let component: ShowemailComponent;
  let fixture: ComponentFixture<ShowemailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowemailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
