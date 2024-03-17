import React from 'react';
import Ground1 from '../assets/images/ground1.jpg';

export const BackgroundWrapper = ({children}) => {
    return (
        <div>
            <img src={Ground1} style={{ width: '100%', position:'absolute', zIndex:'-1' }} />
            <div style={{paddingTop:'30px'}}>{children}</div>
        </div>
    )
}