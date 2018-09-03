import React from 'react';
import Title from '../Title/Title';
import MenuBar from '../../components/MenuBar/MenuBar';
import Portfolio from '../Portfolio/Portfolio';
import Technologies from '../Technologies/Technologies';

const layout = (props) => {
    return (
        <div>
            <MenuBar />
            <Title />
            <Portfolio />
            <Technologies />
        </div>
    );
}

export default layout;