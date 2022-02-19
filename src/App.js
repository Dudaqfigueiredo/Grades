import React, { Component } from 'react';
import Formulario from './components/Formulario/Formulario.jsx';
import ListaDeNotas from './components/ListaDeNotas/ListaDeNotas.jsx';
import ListaDeCategorias from './components/ListaDeCategorias/ListaDeCategorias.jsx';
import Categorias from './dados/Categorias.js';
import ArrayDeNotas from './dados/Notas.js';
import './assets/App.css';
import './assets/index.css';

class App extends Component {
  constructor() {
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();

    /* this.state = {
      notas: [],
      //categorias: [],
    };*/
  }

  /*   criarNota(titulo, texto, categoria) {
    const novaNota = { titulo, texto, categoria };
    const novoArrayNotas = [...this.state.notas, novaNota];
    const novoEstado = {
      notas: novoArrayNotas,
    };
    this.setState(novoEstado);
  } */

  /*  deletarNota(index) {
    let arrayNotas = this.state.notas; //Pegando o status de notas
    arrayNotas.splice(index, 1); //Splica vai deletar o item. Se usar o splice(0,1), ele sempre vai começar a deletar o indice 0 e vai deletar só 1
    this.setState({ nota: arrayNotas });
  } */

  /*   adicionarCategoria(nomeCategoria) {
    const novoArrayCategorias = [...this.state.categorias, nomeCategoria];
    const novoEstado = { ...this.state, categorias: novoArrayCategorias };
    this.setState(novoEstado);
  } */

  render() {
    return (
      <section className="conteudo">
        <Formulario
          criarNota={this.notas.adicionarNota.bind(this.notas)}
          categorias={this.categorias}
        />
        <main className="conteudo-principal">
          <ListaDeCategorias
            adicionarCategoria={this.categorias.adicionarCategoria.bind(
              this.categorias
            )}
            categorias={this.categorias}
          />
          <ListaDeNotas
            apagarNota={this.notas.apagarNota.bind(this.notas)}
            notas={this.notas}
          />
        </main>
      </section>
    );
  }
}

export default App;
