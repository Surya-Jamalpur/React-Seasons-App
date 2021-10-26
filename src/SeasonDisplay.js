import React from 'react';
import './style.css';


const seasonsConfig = {
    Summer:{
        text:'It\'s time to hit the beach..',
        iconName:'sun',
        clsName:'summer'
    },
    Winter:{
        text:'Burrr.. is ts chilled...',
        iconName:'snowflake',
        clsName:'winter'
    },
}
const getSeason = (lat, month) => {
    if(month > 2 && month < 9){
        return lat > 0 ? 'Summer' : 'Winter';
    } else {
        return lat < 0 ? 'Winter' : 'Summer';
    }
    }

const SeasonDisplay =(props) => {
const currentMonth = new Date().getMonth();
const season = getSeason(props.lat, currentMonth);
const {text, iconName, clsName} = seasonsConfig[season];
    return (
        <div className={clsName}><i className={`icon iconOne ${iconName}`}></i>
        <h1> {text} </h1><i className={`icon icontwo ${iconName}`}></i>
        </div>
    )
}
export default SeasonDisplay;