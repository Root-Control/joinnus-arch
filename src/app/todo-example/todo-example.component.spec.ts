import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoExampleComponent } from './todo-example.component';

describe('TodoExampleComponent', () => {
  let component: TodoExampleComponent;
  let fixture: ComponentFixture<TodoExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
