import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay'
import Loader from './loader'


class App extends React.Component {
    state = {
        lat:null,
        long:null,
        errMessage:''
    };
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         lat:null,
    //         long:null,
    //         errMessage:''
    //     }
        
    // }
    componentDidMount(){
        console.log('componentDidMount called..');
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat:position.coords.latitude, long:position.coords.longitude}), err => this.setState({errMessage:err.message}) 
        )
    }
    componentDidUpdate(){
        console.log('componentDidUpdate called..')
    }
    render(){
        if(!this.state.errMessage && this.state.lat) {
        return(
            <SeasonDisplay lat={this.state.lat} long={this.state.long} />
        ) 
        }
        if(this.state.errMessage && !this.state.lat) {
        return(
            <h4>Error : {this.state.errMessage} <Loader /></h4>
        ) 
        }
        return <Loader msg="Please Allow the Location.." />;
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));