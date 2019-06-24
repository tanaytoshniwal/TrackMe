import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddremainderPage } from './addremainder.page';

describe('AddremainderPage', () => {
  let component: AddremainderPage;
  let fixture: ComponentFixture<AddremainderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddremainderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddremainderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
