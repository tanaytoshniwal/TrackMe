import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodolistPage } from './todolist.page';

describe('TodolistPage', () => {
  let component: TodolistPage;
  let fixture: ComponentFixture<TodolistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodolistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodolistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
