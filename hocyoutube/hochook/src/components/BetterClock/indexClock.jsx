import React from 'react';

import useClock from '../../hooks/useClock';


BetterClock.propTypes = {};


function BetterClock() {
    const { timeString} =useClock();
   
    return (
        <p>{timeString}</p>
    );
}

export default BetterClock;