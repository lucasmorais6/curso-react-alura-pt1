import React, { Component , useState } from 'react';
import Tabela from './table';
import Header from './header';
import Form from './form';
import './App.css'
import 'materialize-css/dist/css/materialize.min.css'


function ContaClicks() {

  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Você clicou {contador} vezes </p>
      <button onClick={() => setContador(contador + 1)}>clicar</button>
    </div>
  );
}
class App extends Component {
  // State: Serve para guardar valores/estado que podem vir a mudar com a interação do usuário com o componente, 
  // tendo efeito na renderização do mesmo, o state pode ser passado como props!
  // Props: Valores para a configuração de um componente, essas props são passadas pelo elemento acima 
  // (que utiliza o componente que irá receber) e são imutáveis, utilizado para a comunicação de componentes.
  state = {
    autores: [
      { nome: "Paulo", livro: "React", preco: "1000" },
      { nome: "Daniel", livro: "Java", preco: "99" },
      { nome: "Marcos", livro: "Design", preco: "150" },
      { nome: "Bruno", livro: "DevOps", preco: "100" }
    ],
  };

  //setstate() utilizado apra fazer a alteração no state, esse método recebe um JSON que servirá para fazer o merge 
  // dos dados que já estão no state e aqueles que estão sendo passados.
  removeAutor = index => { //metodo de remoção,recebendo o index do elemento clicado

    const { autores } = this.state;

    this.setState(
      {
        autores: autores.filter((autor, posAtual) => {
          console.log(index, posAtual);
          return posAtual !== index;
        }),
      }
    );
  }

  escutadordeSubmnit = autor =>{
    this.setState({ autores : [...this.state.autores, autor] }) //'...' usados para repreesentar oa rray
  }

  render(){
    return (
      <div className="App">
        <Header />
        <div className="container mb-10">
          <Tabela livros={this.state.autores} removeAutor={this.removeAutor} />
          <Form escutadordeSubmnit={this.escutadordeSubmnit}/>
        </div>
        <ContaClicks />
      </div>
    );
  }
}


export default App;
