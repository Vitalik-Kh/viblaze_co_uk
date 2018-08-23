import React from 'react';
import classes from './Dots.scss';
import dotsAnim from '../../animation/titleAnim';

class DotedLine extends React.Component {

    componentDidMount = () => {
        const currAnim = new dotsAnim(this.dotsRef.current);
        const timeout = Math.floor(Math.random() * 7000) + 2000;
        setTimeout(() => {
            currAnim.init();
        }, timeout);
    }

    dotsRef = React.createRef();

    render() {
        return (
            <div className={ classes.Dots } ref={ this.dotsRef }>
                <div className={ classes.Dot }></div>
                <div className={ classes.Dot }></div>
            </div>
            
        );
    }
}

export default DotedLine;