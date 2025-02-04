import { ControladoraListagemJogo } from "./controladora-listagem-jogo.js";

export class VisaoListagemJogo {
  controladora = null;
  constructor() {
    this.controladora = new ControladoraListagemJogo(this);
  }
  iniciar() {
    this.controladora.listar()
  }
  desenharJogos(jogos) {
    document.querySelector('tbody').innerHTML =
      jogos.map(j => `
        <tr>
          <td>${j.id}</td>
          <td>${j.nome}</td>
          <td>${j.desenvolvedora}</td>
          <td>${j.anoLancamento}</td>
          <td>${j.nota}</td>
          <td><button data-id="${j.id}" class="remover">Remover</button></td>
        </tr>
        `).join('');

        document.querySelectorAll('.remover').forEach(button => {
          button.addEventListener('click', () => {
              const id = button.dataset.id;
              this.controladora.remover(id);
          });
      });

  }
  exibirMensagem( mensagem ) {
    document.querySelector( 'output' ).value = mensagem;
  }
}

const visao = new VisaoListagemJogo();
visao.iniciar();