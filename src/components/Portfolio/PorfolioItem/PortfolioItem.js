import React from 'react';
import classes from './PortfolioItem.scss';
import PlayBtn from '../../UI/PortfolioItem/PlayBtn/PlayBtn';
import SrcCodeBtn from '../../UI/PortfolioItem/SrcCodeBtn/SrcCodeBtn';
import { projectMouseEnter, projectMouseLeave } from '../../../animation/portfolioAnim';
import ScrollShow from '../../../hoc/ScrollShow/ScrollShow';

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
            //<ScrollShow effect='transition.slideUpBigIn' duration={ 1000 } id='project item' delay={ 200 }>
                <div className={ classes.PortfolioItem }>
                    <div 
                        className = { classes.Content } 
                        ref = { this.contentRef }
                        onMouseEnter = { this.mouseEnterHandler }
                        onMouseLeave = { this.mouseLeaveHandler  }>
                        
                        <img src={ this.props.imgSrc } alt={ this.props.title } />
                        <div className={ classes.TextContainer } ref={ this.textRef }>
                            <div className={ classes.ItemText }>
                                <h3>{ this.props.title }</h3>
                                <div className={ classes.BtnsContainer }>
                                    <a className={ classes.PlayBtn } href={ this.props.playLink } title='View live'><PlayBtn /></a>
                                    <a className={ classes.SrcCodeBtn } href={ this.props.srcLink } title='View source code'><SrcCodeBtn /></a>
                                </div>
                                <p>Technologies used:</p>
                                <p>{ this.props.techs.join(' ') }</p>
                            </div>
                        </div>
                    </div>
                </div>
            //</ScrollShow>
        );
    }
}

export default PortfolioItem;