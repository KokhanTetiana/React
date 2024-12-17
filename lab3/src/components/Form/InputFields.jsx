import React from 'react';

const FormInput = ({ name, label, type = 'text', placeholder, register, error }) => (
    <div style={{ marginBottom: '10px' }}>
        <label>{label}</label>
        <input type={type} placeholder={placeholder} {...register(name)} />
        {error && <p style={{ color: 'red' }}>{error.message}</p>}
    </div>
);

export default FormInput;
