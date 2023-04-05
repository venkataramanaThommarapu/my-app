import React from 'react';
import './index.css';

function Index() {
  const [temperature, setTemperature] = React.useState(24);

  const handleIncrement = () => {
    setTemperature(prevTemperature => prevTemperature + 1);
  };

  const handleDecrement = () => {
    setTemperature(prevTemperature => prevTemperature - 1);
  };

  let circleColor = 'green';
  let temperatureText = '';
  if (temperature > 10 && temperature <= 20 ) {
    circleColor = 'orange';
    temperatureText = 'Cold';

  } 
  else if (temperature >= 30) {
    circleColor = 'red';
    temperatureText = 'Hot';
  }
  
  else if (temperature <= 10) {
    circleColor = 'blue';
    temperatureText = 'ice';
  } 
  
  else {
    temperatureText = 'room';
  }

  return (
    <div className="new-div">
      <div className="container">
        <div className="round" style={{ backgroundColor: circleColor }}>
          <span>{temperature.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 1 })}°C<br />{temperatureText}</span>
          
        </div>
        <div className="d-flex mt-4">
          <div className="round1" onClick={handleIncrement}>
            <span>+</span>
          </div>
          <div className="round2" onClick={handleDecrement}>
            <span>-</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;



