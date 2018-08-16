import React from 'react';
import classes from './Title.scss';

class Title extends React.Component {

    render() {
        return (
            <div className={ classes.Title }>
                <div className={ classes.Message }>
                    <div className={ classes.CodeTagLeft }>&lt;</div>
                    <h3>Be.Better.Than.Yesterday</h3>
                    <div className={ classes.CodeTagRight }>/&gt;</div>
                </div>
                
            </div>
        );
    }
}

export default Title;