import React from 'react';
import classes from './PortfolioItem.scss';
import PlayBtn from '../../UI/PlayBtn/PlayBtn';
import SrcCodeBtn from '../../UI/SrcCodeBtn/SrcCodeBtn';

const portfolioItem = (props) => {
    return (
        <div className={ classes.PortfolioItem }>
            <div className={ classes.Content }>
                <img src={ props.imgSrc } alt={ props.title } />
                <div className={ classes.TextContainer }>
                    <div className={ classes.ItemText }>
                        <h3>{ props.title }</h3>
                        <div className={ classes.BtnsContainer }>
                            <a className={ classes.PlayBtn } href='#' title='View live'><PlayBtn /></a>
                            <a className={ classes.SrcCodeBtn } href='#' title='View source code'><SrcCodeBtn /></a>
                        </div>
                        <p>Technologies used:</p>
                        <p>{ props.techs.join(' ') }</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default portfolioItem;