import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnotePage } from './addnote.page';

describe('AddnotePage', () => {
  let component: AddnotePage;
  let fixture: ComponentFixture<AddnotePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnotePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
