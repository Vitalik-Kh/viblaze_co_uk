import React from 'react';

const modalBackground = () => {
    return (
        <div style={ {
            position: 'fixed',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            zIndex: 190,
            background: 'rgba(0,0,0,0.3)'
        } }>
        </div>
    )
}

export default modalBackground;