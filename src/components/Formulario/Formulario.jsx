import React, { Component } from 'react';
import './estilo.css';

class Formulario extends Component {
  constructor(props) {
    super(props);
    this.titulo = '';
    this.texto = '';
    this.categoria = 'Sem categoria';
    this.state = { categorias: [] };

    this._novasCategorias = this._novasCategorias.bind(this);
  }


  componentDidMount() {
    this.props.categorias.inscrever(this._novasCategorias.bind(this));
  }

  componentWillUnmount() {
    this.props.categorias.desinscrever(this._novasCategorias);
  }

  _novasCategorias(categorias) {
    this.setState({ ...this.state, categorias });
  }

  _handleMudancaCategoria(evento) {
    evento.stopPropagation();
    this.categoria = evento.target.value;
  }

  _handleMudancaTitulo(evento) {
    evento.stopPropagation();
    this.titulo = evento.target.value;
  }

  _handleMudancaTexto(evento) {
    evento.stopPropagation();
    this.texto = evento.target.value;
  }

  _criarNota(evento){
    evento.preventDefault();
    evento.stopPropagation();
    if(this.titulo === '' && this.texto ===''){
      alert("Digite algo")
    }else{
    this.props.criarNota(this.titulo, this.texto, this.categoria);}
  }



  render() {
    return (
      <form className='form-cadastro' onSubmit={this._criarNota.bind(this)}>
        <select
          onChange={this._handleMudancaCategoria.bind(this)}
          className='form-cadastro_input border'
        >
          <option>Sem categoria</option>
          {this.state.categorias.map((categoria, index) => {
            return <option key={index}>{categoria}</option>;
          })}
        </select>
        <input
          type='text'
          placeholder='Título'
          className='form-cadastro_input border'
          onChange={this._handleMudancaTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder='Escreva sua nota...'
          className='form-cadastro_input border'
          onChange={this._handleMudancaTexto.bind(this)}
        />
        <button className='form-cadastro_input form-cadastro_submit'>
          Criar Nota
        </button>
        <input type="checkbox" id="switch" />
      </form>
    );
  }
}

export default Formulario;
