import React from 'react';
import Title from '../../components/Greeting/Title/Title';

class Greeting extends React.Component {
    state = {
        titleIsComlete: false
    }

    onTitleComlete = () => {
        this.setState({ titleIsComlete: true });
    }

    render() {
        return (
            <div>
                <Title 
                    onFinish = { this.onTitleComlete } 
                    completed = { this.state.titleIsComlete } />
            </div>
        );  
    }
}

export default Greeting;