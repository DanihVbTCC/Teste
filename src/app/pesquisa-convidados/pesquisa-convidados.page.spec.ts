import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaConvidadosPage } from './pesquisa-convidados.page';

describe('PesquisaConvidadosPage', () => {
  let component: PesquisaConvidadosPage;
  let fixture: ComponentFixture<PesquisaConvidadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesquisaConvidadosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisaConvidadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
