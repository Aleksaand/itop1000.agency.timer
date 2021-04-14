import React from 'react';


export const  Display = (props) => {

  return (
    <div >
        <h3>TimerDisplay</h3>
        
        <div className="App">
          <span>{('0' + Math.floor((props.time / 3600) % 60 )).slice(-2)} :</span>
          <span>{('0' + Math.floor((props.time / 60) % 60 )).slice(-2)} :</span>
          <span>{('0' + ((props.time) % 60 )).slice(-2)}</span>
        </div>
    </div>
  );
}

