import React from 'react';

const PassengerPanel = ({ passengerCount, handlePassengerCountChange }) => {
    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '20px' }}>
            <div style={{ marginBottom: '10px' }}>
                <label>Дорослі (старше 11): </label>
                <button
                    type="button"
                    onClick={() => handlePassengerCountChange('adult', 'decrease')}
                    disabled={passengerCount.adult <= 1}
                >
                    -
                </button>
                <span>{passengerCount.adult}</span>
                <button type="button" onClick={() => handlePassengerCountChange('adult', 'increase')}>+</button>
            </div>
            <div style={{ marginBottom: '10px' }}>
                <label>Діти (2-11): </label>
                <button
                    type="button"
                    onClick={() => handlePassengerCountChange('child', 'decrease')}
                    disabled={passengerCount.child <= 0}
                >
                    -
                </button>
                <span>{passengerCount.child}</span>
                <button type="button" onClick={() => handlePassengerCountChange('child', 'increase')}>+</button>
            </div>
            <div style={{ marginBottom: '10px' }}>
                <label>Немовлята (до 2): </label>
                <button
                    type="button"
                    onClick={() => handlePassengerCountChange('infant', 'decrease')}
                    disabled={passengerCount.infant <= 0}
                >
                    -
                </button>
                <span>{passengerCount.infant}</span>
                <button type="button" onClick={() => handlePassengerCountChange('infant', 'increase')}>+</button>
            </div>
        </div>
    );
};

export default PassengerPanel;
