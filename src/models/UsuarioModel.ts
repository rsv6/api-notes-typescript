

export class UsuarioModel {
  private nome: string;
  private login: string;
  private senha: string;
  private nivel: Array<string> = ['user', 'admin'];
  private authe: string;

  constructor(nome: string, login: string, senha: string) {
    this.nome = nome;
    this.login = login;
    this.senha = senha;
    this.authe = this.nivel[0];
  }
}