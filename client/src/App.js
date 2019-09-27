import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Nav from './components/Nav';

class App extends Component {
  constructor(props) {
    super(props)
    axios
      .get('/postagens')
      .then(resultado=>{
        console.log(resultado)
      }).catch(erro=>{
        console.log("erro"+erro)
      })
  }
  render() {
    return (
      <div className="App">
    
       <div className="intro">
         <p>Teste</p>
       </div>
      </div>
    );
  }
}

export default App;
