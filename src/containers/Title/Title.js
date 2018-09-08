import React from 'react';
import classes from './Title.scss';
import Dots from '../../components/Dots/Dots';
import withRefs from '../../hoc/WithRefs';
import scrollToAnim from '../../animation/scrollToAnim';

class Title extends React.Component {
    state = {
        windowWidth: null,
    }

    sectionRef = React.createRef();

    scrollIn = () => {
        scrollToAnim(this.sectionRef.current);
    }

    componentWillMount = () => {
        this.setState({ windowWidth: window.innerWidth });
    }

    render() {
        const doted_lines = [];
        for(let i=0; i<15; i++) {
            doted_lines.push(<Dots key={ i } />)
        }
        return (
            <section className={ classes.Title } ref={ this.sectionRef }>
                { doted_lines }
                <div className={ classes.Message }>
                    <div className={ classes.CodeTagLeft }>&lt;</div>
                    <h3>Be.Better.Than.Yesterday</h3>
                    <div className={ classes.CodeTagRight }>/&gt;</div>
                </div>
                
            </section>
        );
    }
}

export default withRefs(Title);