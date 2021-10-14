import React from 'react';
import './App.css';
import ChangeState from './components/Memo&CallBack/ChangeState';
import DisplayCounter from './components/Memo&CallBack/DisplayCounter';
import DisplayFlag from './components/Memo&CallBack/DisplayFlag';
import Footer from './components/Memo&CallBack/Footer';
import Header from './components/Memo&CallBack/Header';

function App() {
const [count,setCount] = React.useState(0);
const [flag,setFlag] = React.useState(true);

const changeCount = React.useCallback(() => {
  setCount(count + 1)
},[count])
const changeFlag = React.useCallback(() => {
  setFlag(!flag)
},[flag])


  return (
    <div className="App">
      <Header />
      <DisplayCounter count={count} />
      <DisplayFlag flag={flag} />
      <ChangeState caption="change the count" click={changeCount} />
      <ChangeState caption="change the flag" click={changeFlag} />

      <Footer />
    </div>
  );
}

export default App;
