import React from 'react';
import { Display } from './Components/Display/Display';
import { BtnComponent } from './Components/Buttons/Buttons';
import './App.css';

function App() {
  const [time, setTime] = React.useState(0);
  const [timerOn, setTimerOn] = React.useState(false);
  const [status, setStatus] = React.useState(0);
  let wait1 = true;

  React.useEffect(() => {
    let interval = null;
    if (timerOn) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [timerOn]);

  const start = () => {
    setStatus(1);
    setTimerOn(true);
  };
  const stop = () => {
    setStatus(2);
    setTimerOn(false);
    setTime(0);
  };
  const wait = () => {
    if (wait1) {
      wait1 = false;
      setTimeout(() => {
        wait1 = true;
      }, 300);
    } else {    
      setTimerOn(false);
      setStatus(2);
    }
  };
  const reset = () => {
    setTimerOn(false);
    setTime(0);
    setTimerOn(true);
    setStatus(1);
  };





  
  
  return (
    <div className="App">
      <header className="App-header">
        <div className="display" >
          <Display time={time} />
        </div>
          <BtnComponent 
            status={status}
            start={start}
            stop={stop}  
            wait = {wait} 
            reset={reset} 
          />
      </header>
    </div>
  );
}

export default App;
