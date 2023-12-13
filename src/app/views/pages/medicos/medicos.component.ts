import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vex-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.scss']
})
export class MedicosComponent implements OnInit {

  displayedColumns =
  [
    'numeroCRM',
    'nome',
    'especializacao',
    'pacientes',
    'icon'
  ];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

  apagar(): void{
    alert('apagado')
  }
  editar(): void{
    alert('editado')
  }
  filtrarProdutos() {
  throw new Error('Method not implemented.');
  }
  abrirModalCadastrar() {
  throw new Error('Method not implemented.');
  }
  limparFiltro() {
  throw new Error('Method not implemented.');
  }
}

const ELEMENT_DATA: Medicos[] = [
  { numeroCRM: "CRM/SP 123456", nome: 'Dr Neymar', especializacao: "ginicologista", pacientes: 'Messi, Neymar, Cr7' },
  { numeroCRM: "CRM/SP 123456", nome: 'Dr Neymar', especializacao: "ginicologista", pacientes: 'Messi, Neymar, Cr7' },
];

export interface Medicos{
  numeroCRM: any;
  nome: string;
  especializacao: string;
  pacientes: string;

}

