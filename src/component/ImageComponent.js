import React from 'react';

function ImageComponent({ src, alt }) {
    return (
        <img src={src} alt={alt} style={{ width:500,height:500 }} />
    );
}

export default ImageComponent;
