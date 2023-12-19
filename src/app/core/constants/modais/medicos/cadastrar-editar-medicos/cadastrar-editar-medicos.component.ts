import { MedicosService } from './../../../../service/medicos/medicos.service';
import { Component, Inject, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Medico } from 'src/app/core/model/medicos';

@Component({
  selector: 'vex-cadastrar-editar-medicos',
  templateUrl: './cadastrar-editar-medicos.component.html',
  styleUrls: ['./cadastrar-editar-medicos.component.scss']
})
export class CadastrarEditarMedicosComponent {

  form: FormGroup;
  cadastro!: boolean;
  medico = new Medico();
  legendaBotao: string = '';

  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private medicosService: MedicosService,
    private readonly dialogRef: MatDialogRef<CadastrarEditarMedicosComponent>,
    private readonly fb: FormBuilder,
    private snackbar: MatSnackBar
  ) {
    this.cadastro = !data.medico;
    this.legendaBotao = this.cadastro ? "Adicionar" : "Confirmar";
    this.form = this.fb.group({
      nomeMedico: [data?.medico?.nome, [Validators.required]],
      numeroCRM: [data?.medico?.numeroCRM, [Validators.required]],
      especializacao: [data?.medico?.especializacao, [Validators.required]],
      endereco: [data?.medico?.endereco, [Validators.required]],
      pacientes: [data?.medico?.pacientes]
    })
   }

   cadastrarEditarMedicos() {
    this.cadastro ? this.cadastrarMedico() : this.editarMedico();
   }


  cadastrarMedico() {
    this.medico = this.form.value;
    this.medicosService.cadastrarMedico(this.form.value).subscribe(() => {
      this.dialogRef.close(true);
      this.snackbar.open(
        'Foi cadastrado um novo Medico'
      )
    },
    (error) => {
      console.log(error);
      this.snackbar.open(
        "Erro ao cadastrar um novo Medico",
        )
      })
    }

    editarMedico(): void {
      this.medico = this.form.value;
      this.medico.id = this.data?.medico?.id;
      this.medicosService.editarMedico(this.medico).subscribe(() =>{
        console.log(this.form.value);
        this.dialogRef.close(true);
        this.snackbar.open(
          'Medico foi editado'
          )
        },
        (error) =>{
          console.log(error);
          this.snackbar.open(
            "Erro ao editar um Medico",
            )
        })
      }
}
