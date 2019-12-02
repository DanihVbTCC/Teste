import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarServicoEventoPage } from './adicionar-servico-evento.page';

describe('AdicionarServicoEventoPage', () => {
  let component: AdicionarServicoEventoPage;
  let fixture: ComponentFixture<AdicionarServicoEventoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionarServicoEventoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarServicoEventoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
