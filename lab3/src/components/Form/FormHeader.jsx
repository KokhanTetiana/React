import React from 'react';
import '../../styles/FormHeader.css'

const FormHeader = ({ setActiveTab }) => (
    <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <button type="button" onClick={() => setActiveTab('roundTrip')} className="button">В обидва кінці</button>
        <button type="button" onClick={() => setActiveTab('class')} className="button">Економ-клас</button>
        <button type="button" onClick={() => setActiveTab('passenger')} className="button">1 Пасажир</button>
        <button type="button" onClick={() => setActiveTab('features')} className="button">Особливості</button>
        <button type="button" onClick={() => setActiveTab('luggage')} className="button">Багаж</button>
    </div>
);

export default FormHeader;
