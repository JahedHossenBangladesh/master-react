import logo from './logo.svg';
import React from 'react';
import './App.css';
import Event from './components/Event/Event'
import Useeffect from './components/UseEffect/Useeffect';
import  UseEffect2 from "./components/UseEffect2/UseEffect2";
import UseRef from './components/UseRef/UseRef';

function App() {
  const [show, hide] = React.useState(true);
  return (
    <div className="App">
     <UseRef/>
    </div>
  );
}

export default App;
