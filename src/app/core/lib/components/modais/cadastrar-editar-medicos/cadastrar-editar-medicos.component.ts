import { MedicosService } from 'src/app/core/service/medicos/medicos.service';
import { Component, Inject, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Medico } from 'src/app/core/model/medicos';
import { CommomService } from 'src/app/core/service/commom/commom.service';
import { Endereco } from 'src/app/core/model/endereco';

@Component({
  selector: 'vex-cadastrar-editar-medicos',
  templateUrl: './cadastrar-editar-medicos.component.html',
  styleUrls: ['./cadastrar-editar-medicos.component.scss']
})
export class CadastrarEditarMedicosComponent {

  form: FormGroup;
  isCadastro!: boolean;
  medico = new Medico();
  legendaBotao: string = '';
  endereco = new Endereco()

  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private medicosService: MedicosService,
    private commomService: CommomService,
    private readonly dialogRef: MatDialogRef<CadastrarEditarMedicosComponent>,
    private readonly fb: FormBuilder,
    private snackbar: MatSnackBar
  ) {
    this.isCadastro = !data.medico;
    this.legendaBotao = this.isCadastro ? "Adicionar" : "Confirmar";
    this.form = this.fb.group({
      nomeMedico: [data?.medico?.nomeMedico, [Validators.required]],
      numeroCRM: [data?.medico?.numeroCRM, [Validators.required]],
      especializacao: [data?.medico?.especializacao, [Validators.required]],
      cep: [data?.endereco?.cep, [Validators.required]],
      cidade: [data?.endereco?.cidade, [Validators.required]],
      estado: [data?.endereco?.estado, [Validators.required]],
      logradouro: [data?.endereco?.logradouro, [Validators.required]],
      pacientes: [data?.medico?.pacientes]
    })
  }

  cadastrarEditarMedicos() {
    this.isCadastro ? this.cadastrarMedico() : this.editarMedico();
  }


  cadastrarMedico() {
    this.medico = this.form.value;
    this.medicosService.cadastrarMedico(this.form.value).subscribe(() => {
      this.dialogRef.close(true);
      this.snackbar.open(
        'Foi cadastrado um novo Medico',
        "FECHAR",
        { duration: 2000 }
      )
    },
      (error) => {
        console.log(error);
        this.snackbar.open(
          "Erro ao cadastrar um novo Medico",
          "FECHAR",
          { duration: 2000 }
        )
      })
  }

  editarMedico(): void {
    this.montarBody();
    this.medicosService.editarMedico(this.medico).subscribe(() => {
      this.dialogRef.close(true);
      this.snackbar.open(
        'Medico foi editado',
        "FECHAR",
        { duration: 2000 }
      )
    },
      (error) => {
        console.log(error);
        this.snackbar.open(
          "Erro ao editar um Medico",
          "FECHAR",
          { duration: 2000 }
        )
      })
  }

  buscarCep(cep: string){
    this.commomService.buscarViaCep(cep).subscribe((data) => {
      this.preencherEndereco(data)
    })
  }

  preencherEndereco(data){
    this.form.patchValue({
      cidade: data.cidade,
      estado: data.uf,
      logradouro: data.logradouro,
      endereco: data.endereco
    })
  }

  private montarBody() {
    let id = this.data?.medico?.id;
    this.medico = this.form.value;
    this.medico.id = id;
  }
}
