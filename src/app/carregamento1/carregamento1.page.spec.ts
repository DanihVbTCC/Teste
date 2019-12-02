import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Carregamento1Page } from './carregamento1.page';

describe('Carregamento1Page', () => {
  let component: Carregamento1Page;
  let fixture: ComponentFixture<Carregamento1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Carregamento1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Carregamento1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
