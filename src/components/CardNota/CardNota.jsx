import React, { Component } from 'react';
import './estilo.css';
//import deleteSVG from '../../assets/img/delete.svg';
import { ReactComponent as DeleteSVG } from '../../assets/img/delete.svg';

class CardNota extends Component {
  apagar() {
    if (
      confirm(`Tem certeza que deseja deletar a nota "${this.props.titulo}"`)
    ) {
      const indice = this.props.indice;
      this.props.apagarNota(indice);
    }
  }

  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.titulo}</h3>

          {/* <img src={deleteSVG} /> */}
          <DeleteSVG onClick={this.apagar.bind(this)} className="delete" />
          <p className="categoria_tipo">{this.props.categoria}</p>
        </header>
        <p className="card-nota_texto">{this.props.texto}</p>
      </section>
    );
  }
}

export default CardNota;
