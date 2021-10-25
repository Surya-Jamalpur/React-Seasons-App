import React from 'react';
import './style.css';

const SeasonDisplay =(props) => {
const getSeason = (lat, month) => {
if(month > 2 && month < 9){
    return lat > 0 ? 'Summer' : 'Winter';
} else {
    return lat < 0 ? 'Winter' : 'Summer';
}
}

const currentMonth = new Date().getMonth();
const season = getSeason(props.lat, currentMonth);
    return (
        <div className={season == 'Winter' ? 'winter' : 'summer'}>
        <h1>{season}</h1>
        </div>
    )
}
export default SeasonDisplay;