import React from 'react';
import useMagicColor from '../../hooks/useMagicColor';
import './Box.scss';
function MagicBox() {

    const color =useMagicColor();
    return (
        <div className='magicbox'
        style={{ backgroundColor: color}}>
          hi  
        </div>
    );
}

export default MagicBox;