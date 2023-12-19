import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarEditarMedicosComponent } from './cadastrar-editar-medicos.component';

describe('CadastrarEditarMedicosComponent', () => {
  let component: CadastrarEditarMedicosComponent;
  let fixture: ComponentFixture<CadastrarEditarMedicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarEditarMedicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarEditarMedicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
