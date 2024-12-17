import React from 'react';

const RadioPanel = ({ options, selectedValue, onChange }) => (
  <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '20px' }}>
    <h4>Оберіть опцію:</h4>
    {options.map((option) => (
      <label key={option.value} style={{ display: 'block', marginBottom: '5px' }}>
        <input
          type="radio"
          name="radioGroup"
          value={option.value}
          checked={selectedValue === option.value}
          onChange={() => onChange(option.value)}
        />
        {option.label}
      </label>
    ))}
  </div>
);

export default RadioPanel;
