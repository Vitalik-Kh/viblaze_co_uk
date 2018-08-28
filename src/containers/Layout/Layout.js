import React from 'react';
import Title from '../Title/Title';
import MenuBar from '../../components/MenuBar/MenuBar';
import Portfolio from '../Portfolio/Portfolio';

const layout = (props) => {
    return (
        <div>
            <MenuBar />
            <Title />
            <Portfolio />
        </div>
    );
}

export default layout;