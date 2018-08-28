import React from 'react';
import classes from './Portfolio.scss';
import PortfolioItem from '../../components/Portfolio/PorfolioItem/PortfolioItem';
import projects from '../../constants/projects';

class Portfolio extends React.Component {
    state = {
        projectsRef: null
    }

    componentDidMount = () => {
        this.setState({ projectsRef: this.projectsRef.current })
    }

    projectsRef = React.createRef()

    render() {
        console.log(this.projectsRef);
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
            <div className={ classes.Portfolio }>
                <div className={ classes.Container }>
                    <h2>My Work</h2>
                    <div className={ classes.Projects } ref={ this.projectsRef }>
                        { portfolio_items }
                    </div>
                </div>
            </div>
        );
    }
}

export default Portfolio;