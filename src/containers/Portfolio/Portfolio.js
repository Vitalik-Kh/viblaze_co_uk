import React from 'react';
import classes from './Portfolio.scss';
import PortfolioItem from '../../components/Portfolio/PorfolioItem/PortfolioItem';
import projects from '../../constants/projects';

class Portfolio extends React.Component {
    state = {

    }

    render() {
        const portfolio_items = projects.map((project, i) => {
            return <PortfolioItem 
                key = { i } 
                title = { project.title }
                imgSrc = { project.imgSrc }
                techs = { project.techs }
                playLink = { project.playLink }
                srcLink = { project.srcLink } />
        })
        return (
            <div className={ classes.Portfolio }>
                <div className={ classes.Container }>
                    <h2>My Work</h2>
                    <div className={ classes.PortfolioContainer }>
                        { portfolio_items }
                    </div>
                </div>
            </div>
        );
    }
}

export default Portfolio;