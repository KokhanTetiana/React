import React from 'react';

const LuggagePanel = ({ luggageCount, handleLuggageCountChange }) => {
    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '20px' }}>
            <div style={{ marginBottom: '10px' }}>
                <label>Ручна поклажа: </label>
                <button
                    type="button"
                    onClick={() => handleLuggageCountChange('carryOn', 'decrease')}
                    disabled={luggageCount.carryOn <= 0}
                >
                    -
                </button>
                <span>{luggageCount.carryOn}</span>
                <button type="button" onClick={() => handleLuggageCountChange('carryOn', 'increase')}>+</button>
            </div>
            <div style={{ marginBottom: '10px' }}>
                <label>Зареєстрований багаж: </label>
                <button
                    type="button"
                    onClick={() => handleLuggageCountChange('checked', 'decrease')}
                    disabled={luggageCount.checked <= 0}
                >
                    -
                </button>
                <span>{luggageCount.checked}</span>
                <button type="button" onClick={() => handleLuggageCountChange('checked', 'increase')}>+</button>
            </div>
        </div>
    );
};

export default LuggagePanel;
