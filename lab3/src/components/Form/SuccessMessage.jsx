import React from 'react';

const SuccessMessage = ({ message }) => {
    if (!message) return null;

    return (
        <p style={{ color: 'green', marginTop: '10px' }}>
            {message}
        </p>
    );
};

export default SuccessMessage;
