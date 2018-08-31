import React from 'react';
import Velocity from 'velocity-animate';

class ScrollShow extends React.Component {
    state = {
        inView: false      
    }

    ref = React.createRef();
    children = null;

    componentDidMount = () => {
        this.children = this.ref.current.children;
        console.log(this.children);
        window.addEventListener('scroll', this.animate);
        Velocity(this.children, {opacity: 0}, {duration: 1});
        this.animate();
    }

    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.animate);
    }

    isInView = (bounding) => {
        if (
            bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.top <= (window.innerHeight || document.documentElement.clientHeight)
        ) { return true } else { return false }
    }

    animate = (event) => {
        const bounding = this.children[0].getBoundingClientRect();
        if ( this.isInView(bounding) ) {
           if (!this.state.inView) {
               this.setState({ inView: true });
                //if you have few elements for a stagger effect
                if (this.props.stagger) {
                    console.log(this.children);
                    Velocity(
                        this.children, 
                        this.props.effect, 
                        { 
                            stagger: this.props.stagger || 200, 
                            drag: this.props.drag || false,
                            backwards: this.props.backwards || false,
                            //delay: this.props.delay || null,
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
        }
    }

    render() {
        return (
                <div ref={ this.ref } className={ this.props.className || null }> 
                    { this.props.children }
                </div>
        );
    }
}

export default ScrollShow;