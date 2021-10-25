import React from 'react';

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
const iconName = season ===
    return (
        <div>
        <h1>Latitude : {props.lat}</h1>
        <h4>{season}</h4>
        </div>
    )
}
export default SeasonDisplay;