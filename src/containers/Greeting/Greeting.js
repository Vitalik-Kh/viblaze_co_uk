import React from 'react';
import Title from '../../components/Greeting/Title/Title';
import classes from './Greeting.scss';
import { VelocityComponent } from 'velocity-react';
import { greetingAnim } from '../../animation/greetingAnim';
import SkipBtn from '../../components/Greeting/SkipBtn/SkipBtn';

class Greeting extends React.Component {
    state = {
        titleIsComlete: false,
        skipAnim: false,
        windowWidth: null,
    }

    greetingRef = React.createRef();

    componentWillMount = () => {
        this.setState({ windowWidth: window.innerWidth });
    }

    componentDidMount = () => {

    }

    onTitleComplete = () => {
        this.setState({ titleIsComlete: true });
    }

    skipAnimation = () => {
        this.setState({ skipAnim: true });
    }

    render() {
        return (
            <div className={ classes.GreetingContainer }>
                <SkipBtn 
                    stopAnimation={ this.skipAnimation } 
                    advanceToMainLook={ this.props.onGreetingComplete } />
                <VelocityComponent
                    animation = { this.state.titleIsComlete ? greetingAnim  : null }
                    complete = { this.props.onGreetingComplete }
                    >
                    <div className={ classes.Greeting } ref={ this.greetingRef } >
                        <Title 
                            onFinish = { this.onTitleComplete } 
                            completed = { this.state.titleIsComlete }
                            skipAnim = { this.state.skipAnim }
                            windowWidth = { this.state.windowWidth } />
                    </div>
                </VelocityComponent>
            </div>
        );  
    }
}

export default Greeting;