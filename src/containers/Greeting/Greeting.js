import React from 'react';
import Title from '../../components/Greeting/Title/Title';
import classes from './Greeting.scss';
import { VelocityComponent } from 'velocity-react';
import { greetingAnim } from '../../animation/greetingAnim';

class Greeting extends React.Component {
    state = {
        titleIsComlete: false,
        windowWidth: null,
    }

    greetingRef = React.createRef();

    componentWillMount = () => {
        this.setState({ windowWidth: window.innerWidth });
    }

    componentDidMount = () => {

    }

    onTitleComlete = () => {
        this.setState({ titleIsComlete: true });
    }

    render() {
        return (
            <VelocityComponent
                animation = { this.state.titleIsComlete ? greetingAnim  : null }
                complete = { this.props.onGreetingComplete }
                >
                <div className={ classes.Greeting } ref={ this.greetingRef }>
                    <Title 
                        onFinish = { this.onTitleComlete } 
                        completed = { this.state.titleIsComlete }
                        windowWidth = { this.state.windowWidth } />
                </div>
            </VelocityComponent>
        );  
    }
}

export default Greeting;