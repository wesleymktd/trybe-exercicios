import React, { Component } from 'react';
import AnecdoteInput from './components/AnecdoteInput';
import NameInput from './components/NameInput';
import SelectInput from './components/SelectInput';

class Form extends Component {
  constructor() {
    super();

      this.state = {
        name: '',
        email: '',
        age: '',
        anecdote: '',
        terms: false,
        formularioComErros: true,
      };

    this.handleChange = this.handleChange.bind(this);
  };

  handError() {
    const { name, email, age, anecdote, terms } = this.state;

    const errorCases = [
      !name.length,
      !email.match(/^\S+@\S+$/i),
      !age.length,
      !anecdote.length,
      !terms,
    ];

    const formularioPreenchido = errorCases.every((error) => error !== true);

    this.setState({
      formularioComErros: !formularioPreenchido,
    });
  }

  handleChange({target}) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, this.handleError);
  }

  render() {
    const { name, email, age, anecdote, terms, formularioComErros } = this.state;

    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
          <fieldset>
            <legend>Informações pessoais</legend>

              <NameInput name={ name } handleChange={this.handleChange}/>

              <label htmlFor="email">
                Email:
                <input 
                  id="email"
                  name="email"
                  type="email"
                  onChange={this.handleChange}
                  value={ email }
                />
              </label>

              <SelectInput age={ age } handleChange={this.handleChange} />
          </fieldset>

          <fieldset>
            <legend>Texto e arquivos</legend>

            <AnecdoteInput anecdote={ anecdote } handleChange={this.handleChange} />
            <input type="file" />
          </fieldset>
          

          <label htmlFor="terms">
            <input
              id="terms" 
              type="checkbox"
              name="terms"
              onChange={ this.handleChange }
              value={ terms }
            />
            Concordo com  termos e acordos
          </label>
        </form>
        { formularioComErros
        ? <span style={ {color: 'red'} }>Preencha todos os campos</span>
        : <span style={ {color: 'green'} }>Todos os campos forão preenchidos</span> }
      </div>
    );
  }
}

export default Form;