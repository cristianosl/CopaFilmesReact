import React from 'react';
export default function FilmesSelecionado(props) {
  return (
    <div className="selecionados">
      Selecionados<br /><span>{props.numSelecionados}</span> de <span>{props.numTotal}</span> filmes
    </div>
  )
}
