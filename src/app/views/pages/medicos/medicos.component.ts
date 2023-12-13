import { MedicosService } from './../../../core/service/medicos/medicos.service';
import { Medicos } from 'src/app/core/model/medicos';
import { Component, OnInit } from '@angular/core';
import { CadastrarEditarMedicosComponent } from 'src/app/core/constants/modais/medicos/cadastrar-editar-medicos/cadastrar-editar-medicos.component';
import { MatDialog } from '@angular/material/dialog'
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'vex-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.scss']
})
export class MedicosComponent implements OnInit {

  form: FormGroup;

  displayedColumns: string[] =
    [
      'numeroCRM',
      'nome',
      'especializacao',
      'pacientes',
      'icon'
    ];

  dataSource = new MatTableDataSource<Medicos>();

  todosMedicos: Medicos[] = [];

  constructor(
    public dialog: MatDialog,
    private medicosService: MedicosService,
    private fb: FormBuilder
  ) {
    this.form = fb.group({

    })
  }

  ngOnInit(): void {
    this.buscarMedicos();
  }

  buscarMedicos() {
    this.medicosService.buscarMedicos().subscribe(
      (response) => {
        this.todosMedicos = response;
        this.dataSource = new MatTableDataSource<Medicos>(
          this.todosMedicos
        );
      }
    )
  }

  abrirModalCadastrarEditar() {
    // const dialogRef = this.dialog.open(CadastrarEditarMedicosComponent, {
    //   data: {

    //   }

    // });
    // dialogRef.afterClosed().subscribe(result => {
    //   if (result) {
    //     this.buscarMedicos();
    //   }
    // });
  }

  apagar(): void {
    alert('apagado')
  }

  editar(): void {
    alert('editado')
  }

  filtrarProdutos() {
    throw new Error('Method not implemented.');
  }

  limparFiltro() {
    throw new Error('Method not implemented.');
  }
}

// const ELEMENT_DATA: Medicos[] = [
//   { numeroCRM: "CRM/SP 123456", nome: 'Dr Neymar', especializacao: "ginicologista", pacientes: 'Messi, Neymar, Cr7' },
//   { numeroCRM: "CRM/SP 123456", nome: 'Dr Neymar', especializacao: "ginicologista", pacientes: 'Messi, Neymar, Cr7' },
// ];

// export interface Medicos {
//   numeroCRM: any;
//   nome: string;
//   especializacao: string;
//   pacientes: string;

// }

