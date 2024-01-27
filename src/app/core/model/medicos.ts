import { Paciente } from "./pacientes";
export class Medico {
  id: number;
  nomeMedico: string;
  numeroCRM: number;
  especializacao: string;
  pacientes: Paciente[];
}

