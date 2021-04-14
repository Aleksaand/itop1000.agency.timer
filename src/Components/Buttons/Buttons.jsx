import React from 'react';
import './Buttons.css';

export const  BtnComponent = (props) => {

  return (
    <div>
            {(props.status === 0) ? 
            <div>    
              <button onClick={props.start} className="btn startstop-btn-gre">
                  Start/Stop
              </button> 
            </div>
            : ""
            }
            {(props.status === 1) ? 
            <div>    
              <button onClick={props.stop} className="btn startstop-btn-red">
                  Start/Stop
              </button> 
              <button onClick={props.wait} className="btn wait-btn-yell">Wait</button>
              <button onClick={props.reset} className="btn reset-btn-blue">Reset</button>
            </div>
            : ""
            }
            {(props.status === 2) ? 
            <div>    
              <button onClick={props.start} className="btn startstop-btn-gre">
                  Start/Stop
              </button> 
              <button onClick={props.wait} className="btn wait-btn-yell">Wait</button>
              <button onClick={props.reset} className="btn reset-btn-blue">Reset</button>
            </div>
            : ""
            }
            <div>
              <span>«Start / Stop» - запуск / остановка отсчета времени, останавливает и обнуляет значение таймера.</span>
            </div>
            <div>
              <span>«Wait» работает на двойной клик (не более 300 мс!) таймер должен прекратить отсчет времени; если после него нажать старт, то возобновляется отсчет.</span>
            </div>
            <div>
              <span>«Reset» сброс секундомера  на 0.  Обнуляет секундомер и снова начинает отсчет.</span>
            </div>
    </div>
  );
}
