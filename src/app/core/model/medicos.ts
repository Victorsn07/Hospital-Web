import { Paciente } from "./pacientes";
export class Medico {
  id: number;
  nome: string;
  endereco: any;
  numeroCRM: number;
  especializacao: string;
  pacientes: Paciente[];
}

