import React from 'react';
import classes from './Title.scss';
import RollInText from './RollInText/RollInText';

class TitleMessage extends React.Component {
    state = {
        windowWidth: null,
        messages: [
            'Hi, my name is',
            'Vitalii Khymynets',
            "I'm a Front End",
            "Web Devoloper",
            "from Leeds"
        ],
        output: [],
        curr_message: null,
        animating: false,
    }

    componentDidMount = () => {
        //adjust number of rows accroding to device width
        if (this.props.windowWidth >= 610) {
            const m = this.state.messages;
            const newMessages = [m[0] + ' ' + m[1], m[2] + ' ' + m[3] + ' ' + m[4]];
            this.setState({ messages: newMessages, curr_message: 0 });
        } else {
            this.setState({ curr_message: 0 });
        }
    }

    componentDidUpdate = () => {
        //add new message line
        if (this.state.animating === false && !this.props.skipAnim) {
            if(this.state.curr_message < this.state.messages.length) {
                const newOutput = [ ...this.state.output ];
                newOutput.push(this.state.messages[this.state.curr_message]);
                const next_message = this.state.curr_message + 1;
                this.setState({
                    output: newOutput, 
                    curr_message: next_message, 
                    animating: true 
                });
            } else if(!this.props.completed) {
                this.props.onFinish();
            }
        }
    }

    onRowAnimFinished = () => {
        this.setState({ animating: false });
    }

    render() {
        const messages = this.state.output.map((message, i) => {
            return <RollInText 
                        key={ i } 
                        message = { message } 
                        finished = { this.onRowAnimFinished }
                        skipAnim = { this.props.skipAnim } />
        });
        return (
            <div className={ classes.Title }>
                { messages }
            </div>
        );
    }
}

export default TitleMessage;