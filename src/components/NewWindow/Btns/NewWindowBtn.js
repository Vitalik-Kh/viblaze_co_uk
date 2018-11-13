import React from 'react';

const newWindowBtn = (props) => {

    return (
        <svg className={ props.className } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path data-name="Path 65" d="M17.778 17.778H2.222V2.222H10V0H2.222A2.222 2.222 0 0 0 0 2.222v15.556A2.222 2.222 0 0 0 2.222 20h15.556A2.222 2.222 0 0 0 20 17.778V10h-2.222zM12.222 0v2.222h3.983L5.283 13.144l1.572 1.572L17.778 3.794v3.983H20V0z"
            />
        </svg>
    );
}

export default newWindowBtn;