import { PacientesService } from './../../../core/service/pacientes/pacientes.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { CadastrarEditarPacientesComponent } from 'src/app/core/constants/modais/cadastrar-editar-pacientes/cadastrar-editar-pacientes.component';
import { ModalConfirmacaoComponent } from 'src/app/core/constants/modais/modal-confirmacao/modal-confirmacao.component';
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
      'nomePaciente',
      'numeroCPF',
      'dtCriacao',
      'dtNascimento',
      'telefone',
      'icon'
    ];

  constructor(
    public dialog: MatDialog,
    private pacientesService: PacientesService,
    private fb: FormBuilder
  ) {
    this.form = fb.group({
      filtro: ['']
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
      },
      (error) => {
        console.log(error);
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

  abrirModalApagar(paciente: Paciente): void {
    const dialogRef = this.dialog.open(ModalConfirmacaoComponent, {
      data: {
        itens: [paciente.nomePaciente]
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.apagarPacientes(paciente)
      }
    });
  }
  apagarPacientes(paciente: Paciente): void {
    this.pacientesService.apagarPacientes(paciente.id).subscribe(
      () => {
        this.buscarPacientes();
        alert('Paciente APAGADO');
      },
      (error) => {
        console.log(error);
      }
    )
  }

  limparFiltro() {
    this.form.reset();
  }

  filtrarPacientes() {
    let formulario = this.form.value;
    this.pacientesService.filtraPaciente(formulario.filtro).subscribe(response => {
      this.todosPacientes = response;
      this.dataSource = new MatTableDataSource<Paciente>(this.todosPacientes);
    },
    (error) => {
      console.log(error)
    });
  }
}
