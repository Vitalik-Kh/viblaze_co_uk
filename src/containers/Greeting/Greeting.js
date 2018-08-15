import React from 'react';
import Title from '../../components/Greeting/Title/Title';
import classes from './Greeting.scss';
import { VelocityComponent, VelocityTransitionGroup } from 'velocity-react';
import * as Anims from '../../utility/animations';

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
        console.log(Anims.greeting);
    }

    onTitleComlete = () => {
        this.setState({ titleIsComlete: true });
    }

    render() {
        let line_width = '70%';
        if (this.state.windowWidth >= 610  ) {
            line_width = '550px';
        }
        
        return (
            <VelocityComponent
                animation = {this.state.titleIsComlete ? 
                    Anims.greeting  : null}
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