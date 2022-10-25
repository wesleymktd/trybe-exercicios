import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
  super();
  this.state = {
    clickBtnOne: 0,
    clickBtnTwo: 0,
    clickBtnThree: 0,
  }
  
  this.handleClickOne = this.handleClickOne.bind(this)
  this.handleClickTwo = this.handleClickTwo.bind(this)  
  // this.handleClickThree = this.handleClickThree.bind(this) 
  
  
  }
// com arrow function fica assim
  // state = {
  //   clickBtnOne: 0,
  //   clickBtnTwo: 0,
  //   clickBtnThree: 0,
  // }

  handleClickOne() {
    const { clickBtnOne } = this.state;
    this.setState((prevState) => ({
      clickBtnOne: prevState.clickBtnOne +1,
    }), () => {
      console.log(`Botão 1: ${this.getButtonColor(clickBtnOne)}`);
    });
  }
  
  handleClickTwo() {
    const { clickBtnTwo } = this.state;
    this.setState((prevState) => ({
      clickBtnTwo: prevState.clickBtnTwo +1,
    }), () => {
      console.log(`Botão 2: ${this.getButtonColor(clickBtnTwo)}`);
    });
  }
  

  handleClickThree = () => {  //desestruturando o clickBtnThree e utilizando arrow function dispensa o uso do construtor a propriedade para acessar o this
    const { clickBtnThree } = this.state;
    this.setState(( {clickBtnThree} ) => ({
      clickBtnThree: clickBtnThree +1,
    }),() => {
      console.log(`Botão 3: ${this.getButtonColor(clickBtnThree)}`);
    });
  }

  getButtonColor = (num) => {
    return num % 2 === 0 ? 'green' : 'white';
  }

  render() {
    const { clickBtnOne, clickBtnTwo, clickBtnThree } = this.state;
  return (
    <div>
      <button 
        type="button"
        onClick={ this.handleClickOne }
        style={ {backgroundColor: this.getButtonColor(clickBtnOne)} }
        >
        {`Cliques botão 1: ${clickBtnOne}`}
      </button>
      <button 
        type="button" 
        onClick={this.handleClickTwo}
        style={ {backgroundColor: this.getButtonColor(clickBtnTwo)} }
        >
        {`Cliques botão 2: ${clickBtnTwo}`}
      </button>
      <button 
        type="button"
        onClick={this.handleClickThree}
        style={ {backgroundColor: this.getButtonColor(clickBtnThree)} }
        >
        {`Cliques botão 3 ${clickBtnThree}`}
      </button>
    </div>
  );
}
}

export default App;
