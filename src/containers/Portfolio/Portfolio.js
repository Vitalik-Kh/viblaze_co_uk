import React from 'react';
import classes from './Portfolio.scss';
import PortfolioItem from '../../components/Portfolio/PorfolioItem/PortfolioItem';
import projects from '../../constants/projects';
import ScrollShow from '../../hoc/ScrollReveal/ScrollShow';

class Portfolio extends React.Component {
    state = {
        projectsRef: null
    }

    componentDidMount = () => {
        this.setState({ projectsRef: this.projectsRef.current })
    }

    projectsRef = React.createRef()

    render() {
        const portfolio_items = projects.map((project, i) => {
            return <PortfolioItem 
                key = { i } 
                title = { project.title }
                imgSrc = { project.imgSrc }
                techs = { project.techs }
                playLink = { project.playLink }
                srcLink = { project.srcLink }
                projectsNodes = { this.state.projectsRef ? this.state.projectsRef.children : null } />
        })
        return (
            <section className={ classes.Portfolio }>
                <div className={ classes.Container }>
                    <ScrollShow id='My Work' effect='transition.slideUpBigIn' duration={ 1000 } delay={200}> 
                        <h2>My Work</h2> 
                    </ScrollShow>
                    <div className={ classes.Projects } ref={ this.projectsRef }>
                        { portfolio_items }
                    </div>
                </div>
            </section>
        );
    }
}

export default Portfolio;