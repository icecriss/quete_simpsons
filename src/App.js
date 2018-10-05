// src/App.js
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// import Quote from "./Quote";
import Quotes from "./Quotes";
import Lamp from "./Lamp";

class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      // PAS SURE QUE CA SOIT UTILE CAR LE CODE FONCTIONNE SANS LA LIGNE CI-DESSOUS
      // MAIS PAR CONTRE LE THIS.STATE SEMBLE INDISPENSABLE MEME SI VIDE
      working: props.working
    };
  }
  handleClick = () => {
    // Négation de la valeur actuelle, et affectation comme nouvelle valeur
    this.setState({ working: !this.state.working });
  }


  render() {
    const pause = this.state.working ? 'working' : 'onBreak';

    return (
      <div className="App">
        <header className="App-header">
          <h1>Simpsons Quotes</h1>
          <img src={logo} className={`App-logo ${pause}`} alt="logo" />
          {/* <h1 className="App-title">Simpsons Quotes</h1> */}
        </header>
        <button
          className={pause}
          onClick={
            this.handleClick
          }>
          {pause.toUpperCase()}
        </button>
        <Lamp on />
        <Lamp />
        <Quotes />
        <div className="Lamp">

        </div>
      </div>
    );
  }
}

export default App;