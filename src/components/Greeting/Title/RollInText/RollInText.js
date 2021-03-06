import React from 'react';
import classes from './RollInText.scss';
import randomizer from '../../../../utility/randomizer';

class RollInText extends React.Component {
    state = {
        message: ''
    }

    componentDidMount = () => {
        this.runAnimation(this.props.message, this.props.finished);
    }

    runAnimation = (message, callback) => {
        const symbols = '£+#*%&?§$';
        let current_length = 0;
        let messageBuffer = null;
        const speed = 50;        
        
        const generateRandomString = (length) => {
            let string = '';
            while(string.length < length) {
                string += symbols.charAt(randomizer(0, symbols.length-1));
            }
            return string;
            
        }
        
        const startAnim = () => {
            if (!this.props.skipAnim) {
                if (current_length < message.length) {
                    current_length += 2;
                    if (current_length > message.length) {
                        current_length = message.length;
                    }
                    const output = generateRandomString(current_length);
                    this.setState({ message: output });
                    setTimeout(startAnim, speed);
                } else {
                    showMessage();
                }
            }  
        }

        const showMessage = () => {
            if (!messageBuffer) {
                messageBuffer = [];
                for(let i=0; i<message.length; i++) {
                    messageBuffer.push({
                        cycles: randomizer(1,12),
                        char: message.charAt(i)
                    });
                }
            }
            
            let do_cycles = false;
            let output = ''
            for (let i=0; i<messageBuffer.length; i++) {
                const currIndex = messageBuffer[i];
                if (currIndex.cycles > 0) {
                    do_cycles = true;
                    currIndex.cycles--;
                    output += symbols.charAt(randomizer(0, symbols.length-1));
                } else {
                    output += message.charAt(i);
                }
            }

            this.setState({ message: output });

            if (do_cycles && !this.props.skipAnim) {
                setTimeout(showMessage, speed);
            } else {
                if (typeof callback === 'function') {
                    callback();
                }
            }
        }
        startAnim();
    }

    render() {
        return (
            <p className={ classes.Message }>
                { this.state.message }
            </p>
        );
    }
}

export default RollInText;