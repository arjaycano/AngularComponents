import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowgoodbuttonComponent } from './showgoodbutton.component';

describe('ShowgoodbuttonComponent', () => {
  let component: ShowgoodbuttonComponent;
  let fixture: ComponentFixture<ShowgoodbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowgoodbuttonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowgoodbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
