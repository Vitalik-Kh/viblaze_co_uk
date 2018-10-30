import React from 'react';

import photo from '../../../assets/imgs/me.png';
import photo_15x from '../../../assets/imgs/me_15x.png';
import photo_2x from '../../../assets/imgs/me_2x.png';

const myPhoto = () => {

    return (
        <React.Fragment>
            <img 
                srcSet = { `${photo}, ${photo_15x} 1.5x, ${photo_2x} 2x` }
                src = { photo } alt = 'Developer' />
        </React.Fragment>
    )
}

export default myPhoto;