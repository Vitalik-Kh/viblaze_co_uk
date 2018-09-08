import React from 'react';
import Title from '../Title/Title';
import MenuBar from '../../components/MenuBar/MenuBar';
import Portfolio from '../Portfolio/Portfolio';
import Technologies from '../Technologies/Technologies';
import About from '../About/About';

class Layout extends React.Component {
    state = {
        titleRef: null,
        portfolioRef: null,
        techsRef: null,
        aboutRef: null
    }
    
    titleRef = React.createRef();
    portfolioRef = React.createRef();
    techsRef = React.createRef();
    aboutRef = React.createRef();

    componentDidMount = () => {
        this.setState({ 
            titleRef: this.titleRef,
            portfolioRef: this.portfolioRef,
            techsRef: this.techsRef,
            aboutRef: this.aboutRef
        })
    }

    render() {

        return (
            <React.Fragment>
                <MenuBar 
                    scrollToTitle={ this.state.titleRef ? this.state.titleRef.current.scrollIn : null }
                    scrollToPortfolio={ this.state.portfolioRef ? this.state.portfolioRef.current.scrollIn : null }
                    scrollToTechs={ this.state.techsRef ? this.state.techsRef.current.scrollIn : null }
                    scrollToAbout={ this.state.aboutRef ? this.state.aboutRef.current.scrollIn : null }
                />
                <Title ref={ this.titleRef }/>
                <Portfolio ref={ this.portfolioRef }/>
                <Technologies ref={ this.techsRef } />
                <About ref={ this.aboutRef } />
            </React.Fragment>
        );
    }  
}

export default Layout;