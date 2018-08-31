import React from 'react';
import classes from './Portfolio.scss';
import PortfolioItem from '../../components/Portfolio/PorfolioItem/PortfolioItem';
import projects from '../../constants/projects';
import ScrollShow from '../../hoc/ScrollShow/ScrollShow';

class Portfolio extends React.Component {
    state = {
        windowWidth: null
    }

    componentDidMount = () => {
        window.addEventListener('resize', this.resizeHandler);
        this.setState({
            windowWidth: window.innerWidth
        })
    }

    componentWillUnmount = () => {
        window.removeEventListener('resize', this.resizeHandler);
    }

    resizeHandler = () => {
        this.setState({
            windowWidth: window.innerWidth
        })
    }

    createProjectItem = (projectData, index) => {
        return <PortfolioItem 
                key = { index } 
                title = { projectData.title }
                imgSrc = { projectData.imgSrc }
                techs = { projectData.techs }
                playLink = { projectData.playLink }
                srcLink = { projectData.srcLink } />
    }

    createProjectsRow = (index, columns) => {
        const row = [];
        for(let i=0; i<columns; i++) {
            row.push(this.createProjectItem(projects[index+i], index+i))
        }
        return <ScrollShow 
                    key={index} 
                    className={ classes.Projects } 
                    effect='transition.slideUpBigIn' 
                    stagger={ 400 }
                >
                   { row }
                </ScrollShow>
    }

    render() {
        let portfolio_items = null;
        //display one column
        if (this.state.windowWidth < 770) {
            const portfolio_items_arr = [];
            for(let i=0; i<projects.length; i++) {
                portfolio_items_arr.push( 
                    <ScrollShow 
                        key={i} 
                        effect='transition.slideUpBigIn' 
                        duration={ 500 }
                        delay={ 200 }
                    >
                        { this.createProjectItem(projects[i], i) }
                    </ScrollShow>
                );   
            }
            portfolio_items = (
                <div className={ classes.Projects } >
                    { portfolio_items_arr }
                </div>
            )
        }
        //display 2 columns
        if (this.state.windowWidth >= 770) {
            portfolio_items = [];
            for(let i=0; i<projects.length; i+=2) {
                portfolio_items.push( this.createProjectsRow(i, 2) )
            }
        }
        //display 3 columns
        if (this.state.windowWidth >= 1120) {
            portfolio_items = [];
            for(let i=0; i<projects.length; i+=3) {
                portfolio_items.push( this.createProjectsRow(i, 3) )
            }
        }

        return (
            <section className={ classes.Portfolio }>
                <div className={ classes.Container }>
                    <ScrollShow id='My Work' effect='transition.slideUpBigIn' duration={ 1000 } delay={200}> 
                        <h2>My Work</h2> 
                    </ScrollShow>
                    { portfolio_items }
                </div>
            </section>
        );
    }
}

export default Portfolio;