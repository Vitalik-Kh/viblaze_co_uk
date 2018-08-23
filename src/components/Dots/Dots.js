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
        const dots = [];
        for(let i = 1; i<=8; i++) {
            dots.push(<div key={ i } className={ classes.Dot }></div>);
        }
        return (
            <div className={ classes.Dots } ref={ this.dotsRef }>
                { dots }
            </div>
            
        );
    }
}

export default DotedLine;