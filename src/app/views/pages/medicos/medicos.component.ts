import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Icon } from '@visurel/iconify-angular';

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

  apagar(){
    alert('apagado')
  }
  editar(){
    alert('editado')
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

