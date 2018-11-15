import React from 'react';
import Title from '../Title/Title';
import MenuBar from '../../components/MenuBar/MenuBar';
import Portfolio from '../Portfolio/Portfolio';
import Technologies from '../Technologies/Technologies';
import About from '../About/About';
import NewWindow from '../../components/NewWindow/NewWindow';
import ModalBackground from '../../components/UI/Modal/ModalBackground'
import Transition from 'react-transition-group/Transition';
import Velocity from 'velocity-animate';

class Layout extends React.Component {
    state = {
        titleRef: null,
        portfolioRef: null,
        techsRef: null,
        aboutRef: null,
        newWindowRef: null,
        newWindowIsUp: false,
        newWindowAnimatedIn: false
    }

    newWindowSrc = '';

    newWindowTitle = '';
    
    titleRef = React.createRef();
    portfolioRef = React.createRef();
    techsRef = React.createRef();
    aboutRef = React.createRef();

    componentDidMount = () => {
        this.setState({ 
            titleRef: this.titleRef,
            portfolioRef: this.portfolioRef,
            techsRef: this.techsRef,
            aboutRef: this.aboutRef,
        })
    }

    closeNewWindow = () => {
        this.setState({ newWindowIsUp: false });
    }

    openNewWindow = (link, title) => {
        this.newWindowSrc = link;
        this.newWindowTitle = title;
        this.setState({ newWindowIsUp: true });
    }

    render() {

        return (
            <React.Fragment>
                <Transition 
                    in = { this.state.newWindowIsUp } 
                    timeout={400}
                    mountOnEnter
                    unmountOnExit
                    onEnter = { (el) => {
                        Velocity(el, 'transition.expandIn', 400 )
                    }}
                    onEntered = { () => {
                        this.setState({ newWindowAnimatedIn: true })
                    }}
                    onExit = { (el) => {
                        Velocity(el, 'transition.fadeOut', 200 )
                    }}
                    onExited = { () => {
                        this.setState({ newWindowAnimatedIn: false })
                    }} >
                        <NewWindow
                            closeWindow = { this.closeNewWindow }
                            src = { this.newWindowSrc }
                            title = { this.newWindowTitle }
                            isAnimatedIn = { this.state.newWindowAnimatedIn } />         
                </Transition>

                <Transition 
                    in = { this.state.newWindowIsUp } 
                    timeout={400}
                    mountOnEnter
                    unmountOnExit
                    onEnter = { (el) => {
                        Velocity(el, 'transition.fadeIn', 400 )
                    }}
                    onExit = { (el) => {
                        Velocity(el, 'transition.fadeOut', 200 )
                    }} >
                        <ModalBackground />         
                </Transition>
                
                <MenuBar 
                    scrollToTitle={ this.state.titleRef ? this.state.titleRef.current.scrollIn : null }
                    scrollToPortfolio={ this.state.portfolioRef ? this.state.portfolioRef.current.scrollIn : null }
                    scrollToTechs={ this.state.techsRef ? this.state.techsRef.current.scrollIn : null }
                    scrollToAbout={ this.state.aboutRef ? this.state.aboutRef.current.scrollIn : null }
                />
                <Title ref={ this.titleRef } />
                <Portfolio openNewWindow={ this.openNewWindow } ref={ this.portfolioRef } />
                <Technologies ref={ this.techsRef } />
                <About ref={ this.aboutRef } />
            </React.Fragment>
        );
    }  
}

export default Layout;