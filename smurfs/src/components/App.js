import React, { Component } from "react";
import "./App.css";
import Smurfs from "./Smurfs";
import Form from './Form';
class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>Smurfs State Management App with Redux</h1>
       <Form />
       <Smurfs />
      </div>
    );
  }
}

export default App;
