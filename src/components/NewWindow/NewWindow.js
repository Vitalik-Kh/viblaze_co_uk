import React from 'react';
import classes from './NewWindow.scss';
import CloseBtn from './Btns/CloseBtn';
import NewWindowBtn from './Btns/NewWindowBtn';

const newWindow = (props) => {
    return (
        <div className = { classes.NewWindow }>
            <div className={ classes.TopBar }>
                <a className={ classes.NewWindowBtn } href={ props.src } target='_blank' title='Open in new window'>
                    <NewWindowBtn/>  
                </a> 
                <CloseBtn className={ classes.CloseBtn } closeWindow={ props.closeWindow } />
            </div>
            {
                props.isAnimatedIn ?
                <iframe src={ props.src } title={ props.title } ></iframe> :
                null
            }
            
        </div>
    );
    
}

export default newWindow;