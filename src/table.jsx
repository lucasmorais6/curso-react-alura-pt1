import React, { Component } from 'react';

class TableHead extends Component {
  render() {
    return (
      <thead>
        <tr>
          <th>Autores</th>
          <th>Livros</th>
          <th>Preços</th>
          <th>Remover</th>
        </tr>
      </thead>
    )
  }
}

const TableBody = props => {
  const linhas = props.autores.map((linha, index) => {  //linha é o individul, o elemento no momento da operação e o index é o "id"
  // console.log(linha,index);
    return (
      <tr key={index}>
        <td>{linha.nome}</td>
        <td>{linha.livro}</td>
        <td>{linha.preco}</td>
        <td><button className="waves-effect waves-light btn light-blue accent-3" onClick = {() => { props.removeAutor(index) }}>Remover</button></td>
      </tr>
    )
  });
  return (
    <tbody>
      {linhas}
    </tbody>
  )
}

class Tabela extends Component {
  render() {

    const { livros, removeAutor } = this.props; //pegando so metodos como props de app.js
 
    return (
      <div className="App">
        <table className="centered hightlight">
          <TableHead />
          <TableBody autores={livros} removeAutor = {removeAutor} />
        </table>
      </div>
    );
  }
}

export default Tabela;
