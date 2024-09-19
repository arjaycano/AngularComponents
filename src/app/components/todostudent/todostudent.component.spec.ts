import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodostudentComponent } from './todostudent.component';

describe('TodostudentComponent', () => {
  let component: TodostudentComponent;
  let fixture: ComponentFixture<TodostudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodostudentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodostudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
