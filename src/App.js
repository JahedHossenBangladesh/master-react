import logo from './logo.svg';
import React from 'react';
import './App.css';
import Event from './components/Event/Event'
import Useeffect from './components/UseEffect/Useeffect';
import UseEffect2 from './components/UseEffect2/UseEffect2'
function App() {
  const [show, hide] = React.useState(true);
  return (
    
    <div className="App">
      {
        show ?<UseEffect2/>:<h1>Not Sound  </h1>
      }

<button onClick={()=>hide(!show)}>Click</button>

{/* <Useeffect/> */}
    </div>
  );
}

export default App;
