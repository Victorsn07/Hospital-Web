import { Endereco } from "./endereco";
import { Medico } from "./medicos";

export class Paciente {
  id: number;
  nomePaciente: string;
  numeroCPF: number;
  dtCriacao: number;
  dtNascimento: number;
  endereco: Endereco;
  telefone: number;
  medico: Medico
}
