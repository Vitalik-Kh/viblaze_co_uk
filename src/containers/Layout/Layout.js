import React from 'react';
import Title from '../Title/Title';
import MenuBar from '../../components/MenuBar/MenuBar';

const layout = (props) => {
    return (
        <div>
            <MenuBar />
            <Title />
        </div>
    );
}

export default layout;