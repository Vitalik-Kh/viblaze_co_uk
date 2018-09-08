import React from 'react';
import classes from './MenuBar.scss';

const menuBar = (props) => {
    console.log(props);
    return (
        <div className={ classes.MenuBar }>
            <ul>
                <li onClick={ props.scrollToTitle }>home</li>
                <li onClick={ props.scrollToPortfolio }>portfolio</li>
                <li onClick={ props.scrollToTechs }>technologies</li>
                <li onClick={ props.scrollToAbout }>about</li>
            </ul>
        </div>
    );
}

export default menuBar;