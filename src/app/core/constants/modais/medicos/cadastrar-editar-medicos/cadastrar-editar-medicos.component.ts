import { MedicosService } from './../../../../service/medicos/medicos.service';
import { Component, Inject, Optional } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
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

  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private medicosService: MedicosService,
    private readonly dialogRef: MatDialogRef<CadastrarEditarMedicosComponent>,
    private readonly fb: FormBuilder,
  ) {
    this.cadastro = !data.medico;
    this.form = this.fb.group({
      nome: [data?.medico?.nome],
      endereco: [data?.medico?.endereco],
      numeroCRM: [data?.medico?.numeroCRM],
      especializacao: [data?.medico?.especializacao],
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
    },
    (error) => {
      console.log(error)
    })
  }

  editarMedico(): void {
    this.medico = this.form.value;
    this.medico.id = this.data?.medico?.id;
    this.medicosService.editarMedico(this.medico).subscribe(() =>{
      console.log(this.form.value);
      this.dialogRef.close(true);
    },
    (error) =>{
      console.log(error);
    })
  }
}
