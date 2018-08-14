import React from 'react';
import Title from '../../components/Greeting/Title/Title';
import classes from './Greeting.scss';
import { VelocityComponent } from 'velocity-react';

class Greeting extends React.Component {
    state = {
        titleIsComlete: false,
        windowWidth: null,    
    }

    componentWillMount = () => {
        this.setState({ windowWidth: window.innerWidth });
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
                    { backgroundSize: `${line_width} 3px, ${line_width} 3px` } : null}
                duration = '600'>
                <div className={ classes.Greeting }>
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