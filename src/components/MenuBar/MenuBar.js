import React from 'react';
import classes from './MenuBar.scss';

const menuBar = () => {
    return (
        <div className={ classes.MenuBar }>
            <ul>
                <li>home</li>
                <li>portfolio</li>
                <li>technologies</li>
                <li>about</li>
            </ul>
        </div>
    );
}

export default menuBar;