import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemaindersPage } from './remainders.page';

describe('RemaindersPage', () => {
  let component: RemaindersPage;
  let fixture: ComponentFixture<RemaindersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemaindersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemaindersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
