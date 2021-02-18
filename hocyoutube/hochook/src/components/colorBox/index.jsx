import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './colorBox.scss';

ColorBox.propTypes = {
    
};
function getRandomColor(){
    const color_list=['green', 'pink', 'black', 'blue', 'yellow'];
    const randomIndex=Math.trunc(Math.random() *5);
    return color_list[randomIndex];
}


function ColorBox() {
    
    const[color, setColor]=useState(()=> {
        const initColor=localStorage.getItem('box_color') || 'red';
        console.log(initColor);
        return initColor;
    });
    function handleBoxClick(){
        const newColor=getRandomColor();
        setColor(newColor);

        localStorage.setItem('box_color', newColor);

    }
    return (
        <div 
        className='color-box' 
        style={{ backgroundColor: color}}
        onClick={handleBoxClick}
        >
          Linh  
        </div>
    );
}

export default ColorBox;