import React from 'react';

const closeBtn = (props) => {

    return (
        <svg onClick={ props.closeWindow } className={ props.className } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path data-name="Path 64" d="M17.444 19.615L10 12.172l-7.443 7.443a1.316 1.316 0 0 1-1.861 0l-.31-.31a1.316 1.316 0 0 1 0-1.861L7.83 10 .386 2.557a1.316 1.316 0 0 1 0-1.861l.31-.31a1.316 1.316 0 0 1 1.861 0L10 7.83 17.444.386a1.316 1.316 0 0 1 1.861 0l.31.31a1.316 1.316 0 0 1 0 1.861L12.172 10l7.444 7.444a1.316 1.316 0 0 1 0 1.861l-.31.31a1.316 1.316 0 0 1-1.861 0z" />
        </svg>
    );
}

export default closeBtn;