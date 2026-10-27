import React from 'react';
import '../styles/dashBoardCss/button.css'; // Import the CSS file

function Button({ name, icon, onClick, bg, bPad, color, bRad, bb }) {
    return (
        <button
            className="button"
            style={{
                background: bg,
                padding: bPad,
                borderRadius: bRad,
                color: color,
                border: bb||"none",
                
            }}
            onClick={onClick}
        >
            {icon}
            {name}
        </button>
    );
}

export default Button;
