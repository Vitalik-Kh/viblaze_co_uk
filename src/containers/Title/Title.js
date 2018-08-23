import React from 'react';
import classes from './Title.scss';
import Dots from '../../components/Dots/Dots';

class Title extends React.Component {
    state = {
        windowWidth: null,
    }

    componentWillMount = () => {
        this.setState({ windowWidth: window.innerWidth });
    }

    render() {
        const doted_lines = [];
        for(let i=0; i<20; i++) {
            doted_lines.push(<Dots key={ i } />)
        }
        return (
            <div className={ classes.Title }>
                { doted_lines }
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