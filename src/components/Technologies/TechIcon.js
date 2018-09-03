import React from 'react';
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

const svgEl = (props) => {
    const icon = {
        ai: <Ai />,
        bootstrap: <Bootstrap />,
        css: <Css />,
        git: <Git />,
        html: <Html />,
        jest: <Jest />,
        jquery: <Jquery />,
        js: <Js />,
        npm: <Npm />,
        react: <ReactIcon />,
        redux: <Redux />,
        sass: <Sass />,
        webpack: <Webpack />,
        xd: <Xd />
    }

    return icon[props.name];
}

export default svgEl;