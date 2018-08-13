import React from 'react';
import classes from './Title.scss';
import AnimMatrixText from '../../AnimMatrixText/AnimMatrixText';

class TitleMessage extends React.Component {
    state = {
        windowWidth: null,
        messages: [
            'Hi, my name is',
            'Vitalii Khymynets',
            "I'm Front End",
            "Web Devoloper",
            "from Leeds"
        ],
        output: [],
        curr_message: null
    }

    componentDidMount = () => {
        //adjust number of rows accroding to device width
        const windowWidth = window.innerWidth;
        if (windowWidth > 610) {
            const m = this.state.messages;
            const newMessages = [m[0] + ' ' + m[1], m[2] + ' ' + m[3] + ' ' + m[4]];
            this.setState({ messages: newMessages, curr_message: 0 });
        } else {
            this.setState({ curr_message: 0 });
        }
    }

    componentDidUpdate = () => {
        //add new message line
        setTimeout(() => {
            if(this.state.curr_message < this.state.messages.length) {
                const newOutput = [ ...this.state.output ];
                newOutput.push(this.state.messages[this.state.curr_message]);
                const next_message = this.state.curr_message + 1;
                this.setState({ output: newOutput, curr_message: next_message });
            } else {
                console.log('next one');
            }
        }, 1000);
    }

    render() {
        const messages = this.state.output.map((message, i) => {
            return <AnimMatrixText key={ i } message = { message } />
        });
        return (
            <div className={ classes.Title }>
                { messages }
            </div>
        );
    }
}

export default TitleMessage;