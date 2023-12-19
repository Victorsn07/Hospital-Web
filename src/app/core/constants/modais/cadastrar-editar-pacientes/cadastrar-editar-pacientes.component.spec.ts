import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarEditarPacientesComponent } from './cadastrar-editar-pacientes.component';

describe('CadastrarEditarPacientesComponent', () => {
  let component: CadastrarEditarPacientesComponent;
  let fixture: ComponentFixture<CadastrarEditarPacientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarEditarPacientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarEditarPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
