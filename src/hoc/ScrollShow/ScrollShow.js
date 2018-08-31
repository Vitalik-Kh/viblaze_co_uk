import React from 'react';
import { VelocityComponent } from 'velocity-react';
import Velocity from 'velocity-animate';

class ScrollShow extends React.Component {
    state = {
        inView: false      
    }

    ref = React.createRef();
    children = null

    componentDidMount = () => {
        this.children = this.ref.current.children;
        window.addEventListener('scroll', this.scrollHandler);
        console.log(window.innerHeight, 'innerHeight');
        Velocity(this.children, {opacity: 0}, {duration: 1});
    }

    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.scrollHandler);
    }

    scrollHandler = (event) => {
        const bounding = this.children[0].getBoundingClientRect();
        console.log('left:',bounding.left,'right:', bounding.right,'top:', bounding.top,'bottom:', bounding.bottom);
        if (
            bounding.top >= 0 &&
            bounding.left >= 0 &&
            // bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
            bounding.top <= (window.innerHeight || document.documentElement.clientHeight)
        ) {
            
           if (!this.state.inView) {
               this.setState({ inView: true });
               console.log('can see', this.props.id);
                //if you have few elements for a stagger effect
                if (this.props.stagger) {
                    console.log('stagger is on');
                    Velocity(
                        this.children, 
                        this.props.effect, 
                        { 
                            stagger: this.props.stagger || 200, 
                            drag: this.props.drag || false,
                            backwards: this.props.backwards || false,
                            delay: this.props.delay || null,
                            complete: () => {
                                for(let i=0; i<this.children.length; i++) {
                                    this.children[i].removeAttribute('style');
                                }
                                if (this.complete) {
                                    this.complete();
                                }
                            },
                            easing: this.props.easing || 'ease-in-out'
                        }); 
                    
                } else { //if you want to animate all elements as at the same time as one entity
                    Velocity(
                        this.children, 
                        this.props.effect, 
                        { 
                            duration: this.props.duration || 400,
                            delay: this.props.delay || null,
                            complete: () => {
                                for(let i=0; i<this.children.length; i++) {
                                    this.children[i].removeAttribute('style');
                                }
                                if (this.complete) {
                                    this.complete();
                                }
                            },
                            easing: this.props.easing || 'ease-in-out'
                        });
                }                   
           }
        } else {
            // if (this.state.inView) {
            //     console.log('set to false');
            //     this.setState({ inView: false });
            // }
        }
    }

    render() {
        return (
                <div ref={ this.ref }> 
                    { this.props.children }
                </div>
        );
    }
}

export default ScrollShow;