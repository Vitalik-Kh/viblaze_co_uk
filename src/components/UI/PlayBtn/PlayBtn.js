import React from 'react';
import classes from './PlayBtn.scss';

const playBtn = () => {

    return (
        <svg className={ classes.PlayBtn } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
        <defs>
            <clipPath id="a">
            <path d="M0 0h50v50H0z"/>
            </clipPath>
        </defs>
        <g clipPath="url(#a)">
            <path fill="transparent" d="M0 0h50v50H0z"/>
            <path className={ classes.Triangle } d="M33.955 23.337l-11.963-8.578a1.929 1.929 0 0 0-3.053 1.567v17.157a1.929 1.929 0 0 0 3.053 1.567l11.963-8.578a1.929 1.929 0 0 0 0-3.135z" stroke="#fff" strokeWidth="4" fill="none"/>
            <g opacity="1" fill="none">
            {/* <path d="M25 0A25 25 0 1 1 0 25 25 25 0 0 1 25 0z"/> */}
            <path className={ classes.Circle } d="M25 46c5.61 0 10.883-2.184 14.85-6.15A20.862 20.862 0 0 0 46 25c0-5.61-2.184-10.883-6.15-14.85A20.863 20.863 0 0 0 25 4a20.863 20.863 0 0 0-14.85 6.15A20.863 20.863 0 0 0 4 25c0 5.61 2.184 10.883 6.15 14.85A20.863 20.863 0 0 0 25 46m0 4C11.193 50 0 38.807 0 25S11.193 0 25 0s25 11.193 25 25-11.193 25-25 25z" fill="#fff"/>
            </g>
        </g>
        </svg>
    );
}

export default playBtn;