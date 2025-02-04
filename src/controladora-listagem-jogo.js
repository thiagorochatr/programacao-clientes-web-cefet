import { GestorJogo } from "./gestor-jogo.js";

export class ControladoraListagemJogo {
  visao = null;

  constructor(visao) {
    this.visao = visao;
  }
  
  async listar() {
    const gestor = new GestorJogo();
    try{
      const jogos = await gestor.jogos();
      this.visao.desenharJogos(jogos);
    }catch(e){
      this.visao.mostrarMensagem(e.message);
    }
  }

  async remover(id) {
    const gestor = new GestorJogo();
    try {
        await gestor.remover(id);
        this.listar();
    } catch (e) {
        this.visao.exibirMensagem(e.message);
    }
}

}

