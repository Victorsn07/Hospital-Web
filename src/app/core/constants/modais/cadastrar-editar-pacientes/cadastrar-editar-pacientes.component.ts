import { Component, Inject, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Paciente } from 'src/app/core/model/pacientes';
import { PacientesService } from 'src/app/core/service/pacientes/pacientes.service';

@Component({
  selector: 'vex-cadastrar-editar-pacientes',
  templateUrl: './cadastrar-editar-pacientes.component.html',
  styleUrls: ['./cadastrar-editar-pacientes.component.scss']
})
export class CadastrarEditarPacientesComponent {

  form: FormGroup;
  cadastro!: boolean;
  paciente = new Paciente();
  legendaBotao: string = '';

  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private pacientesService: PacientesService,
    private readonly dialogRef: MatDialogRef<CadastrarEditarPacientesComponent>,
    private readonly fb: FormBuilder,
    private snackbar: MatSnackBar
  ) {
    this.cadastro = !data.paciente;
    this.legendaBotao = this.cadastro ? "Adicionar" : "Confirmar";
    this.form = this.fb.group({
      nomePaciente: [data?.paciente?.nome, [Validators.required]],
      numeroCPF: [data?.paciente?.cpf, [Validators.required]],
      dtCriacao: [data?.paciente?.dtCriacao, [Validators.required]],
      dtNascimento: [data?.paciente?.dtNascimento, [Validators.required]],
      telefone: [data?.paciente?.telefone, [Validators.required]],
    })
   }

   cadastrarEditarPacientes() {
    this.cadastro ? this.cadastrarPaciente() : this.editarPaciente();
   }


   cadastrarPaciente() {
    this.paciente = this.form.value;
    this.pacientesService.cadastrarPaciente(this.form.value).subscribe(() => {
      this.dialogRef.close(true);
      this.snackbar.open(
        'Foi cadastrado um novo Paciente'
      )
    },
    (error) => {
      console.log(error);
      this.snackbar.open(
        "Erro ao cadastrar um novo Paciente",
        )
      })
    }

    editarPaciente(): void {
      this.paciente = this.form.value;
      this.paciente.id = this.data?.medico?.id;
      this.pacientesService.editarPacientes(this.paciente).subscribe(() =>{
        console.log(this.form.value);
        this.dialogRef.close(true);
        this.snackbar.open(
          'Paciente foi editado'
          )
        },
        (error) =>{
          console.log(error);
          this.snackbar.open(
            "Erro ao editar um Paciente",
            )
        })
      }
}
