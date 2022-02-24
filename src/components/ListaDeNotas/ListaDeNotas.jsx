import React, { Component } from "react";
import CardNota from "../CardNota/CardNota.jsx";
import { v4 as uuid} from 'uuid';
import "./estilo.css";

const getUniqList = (arr, key) => [...new Map(arr.map((item) => [item[key], item])).values()];
class ListaDeNotas extends Component {
  constructor() {
    super();
    this.state = { notas: [] };
    this._novasNotas = this._novasNotas.bind(this);
  }

  componentDidMount() {
    this.props.notas.inscrever(this._novasNotas);
  }
  
  componentWillUnmount() {
    this.props.notas.desinscrever(this._novasNotas);
  }
  _novasNotas(note) {
    const data = getUniqList([...JSON.parse(localStorage.getItem('notas')) || [], ...note], 'id')
    const notas = data.map(item => ({...item, id:uuid()}))
    localStorage.setItem('notas', JSON.stringify(notas))
    this.setState({ ...this.state, notas});
  }
  render() {
    const parsedNotas = JSON.parse(localStorage.getItem('notas'))
    return (
      <ul className="lista-notas">
        {(parsedNotas?.length  ? parsedNotas : this.state.notas).map((nota) => {
          return (
            <li className="lista-notas_item" key={nota.id}>
              <CardNota
                indice={nota.id} //Guardando o index em uma variavel
                apagarNota={this.props.apagarNota}
                titulo={nota.titulo}
                texto={nota.texto}
                categoria={nota.categoria}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;