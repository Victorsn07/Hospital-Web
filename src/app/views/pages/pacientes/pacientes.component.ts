import { PacientesService } from './../../../core/service/pacientes/pacientes.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { CadastrarEditarPacientesComponent } from 'src/app/core/constants/modais/pacientes/cadastrar-editar-pacientes/cadastrar-editar-pacientes.component';
import { Paciente } from 'src/app/core/model/pacientes';

@Component({
  selector: 'vex-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})
export class PacientesComponent implements OnInit {

  form: FormGroup;
  dataSource = new MatTableDataSource<Paciente>();
  todosPacientes: Paciente[] = [];
  displayedColumns: string[] =
    [
      'nome',
      'cpf',
      'dtCriacao',
      'dtNascimento',
      'telefone',
      'endereco'
    ];

  constructor(
    public dialog: MatDialog,
    private pacientesService: PacientesService,
    private fb: FormBuilder
  ) {
    this.form = fb.group({
    })
  }

  ngOnInit(): void {
    this.buscarPacientes();
  }

  buscarPacientes() {
    this.pacientesService.buscarPacientes().subscribe(
      (response) => {
        this.todosPacientes = response;
        this.dataSource = new MatTableDataSource<Paciente>(
          this.todosPacientes
        );
      }
    )
  }

  abrirModalCadastrarEditar(paciente?: Paciente) {
    const dialogRef = this.dialog.open(CadastrarEditarPacientesComponent, {
      data: {
        paciente: paciente
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.buscarPacientes();
      }
    });
  }

  apagarPacientes(paciente?: Paciente): void {
    this.pacientesService.apagarPacientes(paciente.id).subscribe(
      () => {
        this.buscarPacientes();
        alert('apagado');
      },
      (error) => {
        console.log(error);
      }
    )
  }

  limparFiltro() {
    throw new Error('Method not implemented.');
  }
  filtrarPacientes() {
    throw new Error('Method not implemented.');
  }
}
