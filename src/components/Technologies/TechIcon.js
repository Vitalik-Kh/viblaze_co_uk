import React from 'react';
import classes from './TechIcon.scss';
import { tooltipMouseEnter, tooltipMouseLeave } from '../../animation/toolTipAnim';

import Ai from '../../assets/svg/technologies/ai.svg';
import Bootstrap from '../../assets/svg/technologies/bootstrap.svg';
import Css from '../../assets/svg/technologies/css.svg';
import Git from '../../assets/svg/technologies/git.svg';
import Html from '../../assets/svg/technologies/html.svg';
import Jest from '../../assets/svg/technologies/jest.svg';
import Jquery from '../../assets/svg/technologies/jquery.svg';
import Js from '../../assets/svg/technologies/js.svg';
import Npm from '../../assets/svg/technologies/npm.svg';
import ReactIcon from '../../assets/svg/technologies/react.svg';
import Redux from '../../assets/svg/technologies/redux.svg';
import Sass from '../../assets/svg/technologies/sass.svg';
import Webpack from '../../assets/svg/technologies/webpack.svg';
import Xd from '../../assets/svg/technologies/xd.svg';

class SvgEl extends React.Component {

    mouseEnterHandler = () => {
        tooltipMouseEnter(this.tooltipRef.current, this.iconRef.current);
        
    }

    mouseLeaveHandler = () => {
        tooltipMouseLeave(this.tooltipRef.current, this.iconRef.current);
    }

    icon = {
        ai: { el: <Ai />, title: 'Illustrator' },
        bootstrap: { el: <Bootstrap />, title: 'Bootstrap' },
        css: { el: <Css />, title: 'CSS' },
        git: { el: <Git />, title: 'Git' },
        html: { el: <Html />, title: 'HTML' },
        jest: { el: <Jest />, title: 'Jest' },
        jquery: { el: <Jquery />, title: 'jQuery' },
        js: { el: <Js />, title: 'JavaScript' },
        npm: { el: <Npm />, title: 'Npm' },
        react: { el: <ReactIcon />, title: 'React' },
        redux: { el: <Redux />, title: 'Redux' },
        sass: { el: <Sass />, title: 'Sass' },
        webpack: { el: <Webpack />, title: 'Webpack' },
        xd: { el: <Xd />, title: 'Adobe Xd' }
    }

    tooltipRef = React.createRef();
    iconRef = React.createRef();
    
    render() {
        return (
            <div 
                onMouseEnter={ this.mouseEnterHandler }
                onMouseLeave={ this.mouseLeaveHandler } 
                className={ classes.TechIcon }>
                <div 
                    ref={ this.tooltipRef } 
                    className={ classes.Tooltip }
                >
                    { this.icon[this.props.name].title }
                </div>
                <div ref= { this.iconRef }>
                    { this.icon[this.props.name].el }
                </div>
                
            </div>
        )
    }

    
}

export default SvgEl;