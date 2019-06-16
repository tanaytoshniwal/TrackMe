import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessPage } from './fitness.page';

describe('FitnessPage', () => {
  let component: FitnessPage;
  let fixture: ComponentFixture<FitnessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FitnessPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FitnessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
