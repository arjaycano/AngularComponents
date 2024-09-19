import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowercaseconverterComponent } from './lowercaseconverter.component';

describe('LowercaseconverterComponent', () => {
  let component: LowercaseconverterComponent;
  let fixture: ComponentFixture<LowercaseconverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LowercaseconverterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LowercaseconverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
