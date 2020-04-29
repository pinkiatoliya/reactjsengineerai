import React, { Component } from 'react';
import axios from 'axios';

const API_KEY= 'Bdv7Cvw5rLNdMJYSFbfnqif74KSpzW2PTBWp1bzf';

class Asteroid extends Component {
    constructor(props){
        super(props);
        console.log(props.location.state);
        this.asteroidID = props.location.state.aseroidID;
        this.state={
          asteroidData: {},
          isDataFound: false
        }
    }
    
    componentDidMount = ()=>{
        const URL = 'https://api.nasa.gov/neo/rest/v1/neo/'+this.asteroidID+'?api_key='+ API_KEY;
        axios.get(URL).then(response=>{
          if(response.status === 200){
            console.log(response);
            this.setState({
                isDataFound: true,
                asteroidData: response.data
            });
          }

        }, error=>{
            console.log(error, 'no data found');
            this.setState({
                isDataFound: false
            });
        })
    }

    
render(){

    const localData = this.state.asteroidData;
    console.log(localData);
    return (
        <div>
            <h2>Asteroid Details</h2>
               <p><b>Asteroid Name: </b>{localData.name}</p>
               <p><b>JPL URL: </b>{localData.nasa_jpl_url}</p>
               <p><b>Is Potentially Hazardous Asteroid: </b>
               {localData.is_potentially_hazardous_asteroid ? 'TRUE' : 'FALSE'}
               </p>

        </div>
      );
}
}

export default Asteroid;
