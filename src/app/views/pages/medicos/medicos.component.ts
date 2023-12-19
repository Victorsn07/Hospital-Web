import { MedicosService } from './../../../core/service/medicos/medicos.service';
import { Medico } from 'src/app/core/model/medicos';
import { Component, OnInit } from '@angular/core';
import { CadastrarEditarMedicosComponent } from 'src/app/core/constants/modais/cadastrar-editar-medicos/cadastrar-editar-medicos.component';
import { MatDialog } from '@angular/material/dialog'
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalConfirmacaoComponent } from 'src/app/core/constants/modais/modal-confirmacao/modal-confirmacao.component';

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
      'endereco',
      'pacientes',
      'icon'
    ];

  dataSource = new MatTableDataSource<Medico>();

  todosMedicos: Medico[] = [];

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
        this.dataSource = new MatTableDataSource<Medico>(
          this.todosMedicos
        );
      }
    )
  }

  abrirModalCadastrarEditar(medico?: Medico) {
    const dialogRef = this.dialog.open(CadastrarEditarMedicosComponent, {
      data: {
        medico: medico
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.buscarMedicos();
      }
    });
  }

  abrirModalApagar(medico: Medico): void {
    const dialogFef = this.dialog.open(ModalConfirmacaoComponent, {
      data: {
        itens: [medico.nome],

      }
    });

    dialogFef.afterClosed().subscribe(result => {
      if (result) {
        this.apagarMedico(medico)
      }
    });
  }

  apagarMedico(medico: Medico): void {
    this.medicosService.apagarMedico(medico.id).subscribe(
      () => {
        this.buscarMedicos();
        alert('apagado');
      },
      (error) => {
        console.log(error);
      }
    )
  }

  filtrarMedicos() {
    throw new Error('Method not implemented.');
  }

  limparFiltro() {
    throw new Error('Method not implemented.');
  }
}
