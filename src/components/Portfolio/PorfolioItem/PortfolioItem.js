import React from 'react';
import classes from './PortfolioItem.scss';
import PlayBtn from '../../UI/PortfolioItem/PlayBtn/PlayBtn';
import SrcCodeBtn from '../../UI/PortfolioItem/SrcCodeBtn/SrcCodeBtn';
import { projectMouseEnter, projectMouseLeave } from '../../../animation/portfolioAnim';

class PortfolioItem extends React.Component {

    textRef = React.createRef();
    contentRef = React.createRef();

    mouseEnterHandler = () => {
        projectMouseEnter(this.contentRef.current, this.textRef.current)
    }

    mouseLeaveHandler = () => {
        projectMouseLeave(this.contentRef.current, this.textRef.current);
    }

    render() {

        return (
            <div className={ classes.PortfolioItem }>
                <div 
                    className = { classes.Content } 
                    ref = { this.contentRef }
                    onMouseEnter = { this.mouseEnterHandler }
                    onMouseLeave = { this.mouseLeaveHandler  }>
                    
                    <img 
                        srcSet={ `${this.props.imgSrc[0]}, ${this.props.imgSrc[1]} 1.5x, ${this.props.imgSrc[2]} 2x` }
                        src={ this.props.imgSrc[0] } 
                        alt={ this.props.title } />
                    <div className={ classes.TextContainer } ref={ this.textRef }>
                        <div className={ classes.ItemText }>
                            <h3>{ this.props.title }</h3>
                            <div className={ classes.BtnsContainer }>
                                <div 
                                    className={ classes.PlayBtn }
                                    title='Live project'
                                    onClick={ () => { this.props.openProject(this.props.playLink, this.props.title) }} >
                                    <PlayBtn />
                                </div>
                                <a 
                                    className={ classes.SrcCodeBtn } 
                                    href={ this.props.srcLink } 
                                    title='View source code'
                                    target='_blank' >
                                    <SrcCodeBtn />
                                </a>
                            </div>
                            <p>Technologies used:</p>
                            <p>{ this.props.techs.join(' ') }</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PortfolioItem;