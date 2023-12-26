import { Paciente } from "./pacientes";
export class Medico {
  id: number;
  nomeMedico: string;
  numeroCRM: number;
  especializacao: string;
  endereco: string;
  cep: string;
  cidade: string;
  estado: string;
  pacientes: Paciente[];
}

