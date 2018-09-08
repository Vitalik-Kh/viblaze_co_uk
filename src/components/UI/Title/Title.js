import React from 'react';
import ScrollShow from '../../../hoc/ScrollShow/ScrollShow';

const title = (props) => {
    return (
        <ScrollShow 
            effect='transition.bounceIn' 
            duration={ 1000 } 
            delay={200} > 

            <h2> { props.children } </h2> 
        </ScrollShow>
    );
}

export default title;