import React from 'react';
import classes from './SkipBtn.scss';

const skipBtn = (props) => {

    return (
        <div 
            className={ classes.SkipBtn } 
            onClick={ () => {
                props.stopAnimation();
                setTimeout(() => {
                    props.advanceToMainLook();
                }, 300);
                
            }} >
            <div className={ classes.Text }>Skip</div>
        </div>
    )
}

export default skipBtn;