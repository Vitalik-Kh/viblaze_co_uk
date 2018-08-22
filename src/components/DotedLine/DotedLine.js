import React from 'react';
import classes from './DotedLine.scss';
import { VelocityTransitionGroup } from 'velocity-react'
import Velocity from 'velocity-animate';

class DotedLine extends React.Component {

    componentDidMount = () => {
        const dotedLine = this.dotedLineRef.current;
        const dots = dotedLine.children;
        const lastDot = dots[7];

        function AnimDotedLine() {
            this.animate = () => {
                const runReposition = () => {
                    this.reposition();
                }
                const animProps = { left: '+=35px' };
                const animOptions = { duration: 700, easing: 'linear' };
                const opacity = 0.5;
                const sequence = [
                    { e: dots[0], p: { opacity: opacity }, o: { duration: 1 } },

                    { e: lastDot, p: animProps, o: animOptions },
                    { e: dots[1], p: { opacity: opacity }, o: { duration: 1 } },
        
                    { e: lastDot, p: animProps, o: animOptions },
                    { e: dots[2], p: { opacity: opacity }, o: { duration: 1 } },
        
                    { e: lastDot, p: animProps, o: animOptions },
                    { e: dots[3], p: { opacity: opacity }, o: { duration: 1 } },
        
                    { e: lastDot, p: animProps, o: animOptions },
                    { e: dots[4], p: { opacity: opacity }, o: { duration: 1 } },
        
                    { e: lastDot, p: animProps, o: animOptions },
                    { e: dots[5], p: { opacity: opacity }, o: { duration: 1 } },
        
                    { e: lastDot, p: animProps, o: animOptions },
                    { e: dots[6], p: { opacity: opacity }, o: { duration: 1 } }, 
                    
                    { e: lastDot, p: animProps, o: animOptions },
        
                    { 
                        e: dots, 
                        p: { scaleX: 0, scaleY: 0 }, 
                        o: { duration: 2000, sequenceQueue: false, complete: function() { runReposition() } } 
                    }
                    
                ];
                Velocity.RunSequence(sequence);
            }

            this.reposition = () => {
                const runAnimate = () => { this.animate() }
                const newTop = Math.floor(Math.random() * 60 + 20) + '%';
                const newLeft = Math.floor(Math.random() * 60 + 20) + '%';
                const rotates = [ 0, 90, 180, 270 ];
                const newRotate = rotates[Math.floor(Math.random() * 4)];
                const newSize = Math.random() + 0.1;

                Velocity(dots, { scaleX: 1, scaleY: 1, opacity: 0 }, { duration: 1 });
                Velocity(lastDot, { opacity: 0.5, left: 0 }, { duration: 1 });
                Velocity(
                    dotedLine, 
                    { 
                        top: [newTop, 0], 
                        left: [newLeft,0], 
                        rotateZ: newRotate,
                        scaleX: newSize,
                        scaleY: newSize
                    }, 
                    { 
                        duration: 1, 
                        complete: function() {
                            runAnimate()
                        } 
                    }
                );
            }

            this.init = () => {
                this.reposition();
            }
        }

        const currAnim = new AnimDotedLine();
        const timeout = Math.floor(Math.random() * 7000) + 2000;
        setTimeout(() => {
            console.log('boo');
            currAnim.init();
        }, timeout);
        

    }

    dotedLineRef = React.createRef();

    render() {
        const circles = [];
        for(let i = 1; i<=8; i++) {
            circles.push(<div key={ i } className={ classes.Dot }></div>);
        }

        return (
            <div className={ classes.DotedLine } ref={ this.dotedLineRef }>
                { circles } 
            </div>
            
        );
    }
}

export default DotedLine;