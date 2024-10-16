import React from "react";
import './ResetButton.css';

function ResetButton({ onReset }) {
    return (
        <button className="reset-button" onClick={onReset}>Перезапустити гру</button>
    );
};

export default ResetButton; 
