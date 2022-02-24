import React from "react";
import "./estilo.css";

const currentDate = new Date().toLocaleDateString();

const CardNota = (props) => {
  const { indice, titulo, apagarNota, categoria, texto } = props;

  const handleClear = () => {
    if (confirm(`Tem certeza que deseja deletar a nota: ${titulo}"`)) {
      apagarNota(indice);
    }
  };

  return (
    <section className={`card-nota`}>
      <span className="delete" onClick={handleClear}>
        &times;
      </span>
      <header className="card-nota_cabecalho">
        <h3 className="card-nota_titulo">{titulo}</h3>
        <p className="categoria_tipo"> {categoria}</p>
      </header>
      <p className="card-nota_texto">{texto}</p>
      <br />
      <br />
      <p className="date">{currentDate} </p>
    </section>
  );
};

export default CardNota;