import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodocompletedPage } from './todocompleted.page';

describe('TodocompletedPage', () => {
  let component: TodocompletedPage;
  let fixture: ComponentFixture<TodocompletedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodocompletedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodocompletedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
