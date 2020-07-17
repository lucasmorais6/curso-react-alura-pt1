import React, { Component } from 'react';


class Form extends Component {

  constructor(props) { //vai alterar alguma coisa
    super(props); //vai passar para o pai

    this.stateinicial = { //estado inicial do formulario
      nome: '',
      livro: '',
      preco: '',
    }

    this.state = this.stateinicial; //para zerar o formulario 
  }

  escutadorDeInput = event => { //event parametro opniconaol do js
    const { name, value } = event.target; //A partir de event.target, pegaremos o name e o value do campo.

    this.setState({ //cada digitação do usuario o campo seja alterado
      [name]: value
    });

  }

  submitFormulario = () => {
    this.props.escutadordeSubmnit(this.state); //chamar o escutadorDeSubmit(), passando como parâmetro this.state, enviando as informações do novo autor para o App.js
    this.setState(this.stateinicial) //zeraremos os campos desse formulário setando-o
  }

  render() {

    const { nome, livro, preco } = this.state;

    return (
      <form>
        <div className="row">
          <div className="input-field col s4"> 
            <label className="input-field" htmlFor="nome">Nome</label>
            <input
              className="validate"
              id="nome"
              type="text"
              name="nome"
              value={nome}
              onChange={this.escutadorDeInput}
            />
          </div>
          <div className="input-field col s4"> 
            <label className="input-field" htmlFor="livro">Livro</label>
            <input
              className="validate"
              id="livro"
              type="text"
              name="livro"
              value={livro}
              onChange={this.escutadorDeInput}
            />
          </div>
          <div className="input-field col s4"> 
            <label className="input-field" htmlFor="preco">Preço</label>
            <input
              className="validate"
              id="preco"
              type="text"
              name="preco"
              value={preco}
              onChange={this.escutadorDeInput}
            />
          </div>
          <button onClick={this.submitFormulario} type="button" className="waves-effect waves-light btn light-blue accent-3">Salvar</button>
        </div>
      </form>
    );
  }
}

export default Form;
