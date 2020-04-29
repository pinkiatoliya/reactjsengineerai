import React, { Component } from 'react';
import axios from 'axios';

const API_KEY= 'Bdv7Cvw5rLNdMJYSFbfnqif74KSpzW2PTBWp1bzf';

class Asteroid extends Component {
    constructor(props){
        super(props);
        this.asteroidID = props.location.state.aseroidID;
        this.state={
          asteroidData: {},
          isDataFound: true
        }
    }
    
    componentDidMount = ()=>{
        const URL = 'https://api.nasa.gov/neo/rest/v1/neo/'+this.asteroidID+'?api_key='+ API_KEY;
        axios.get(URL).then(response=>{
          if(response.status === 200){
            this.setState({
                isDataFound: true,
                asteroidData: response.data
            });
          }

        }, error=>{
            this.setState({
                isDataFound: false
            });
        })
    }

    
render(){

    const localData = this.state.asteroidData;
    return (
        <div className="container">
            <h2>Asteroid Details</h2>
            {!!localData.id ? <div>
               <p><b>Asteroid Name: </b>{localData.name}</p>
               <p><b>JPL URL: </b>{localData.nasa_jpl_url}</p>
               <p><b>Is Potentially Hazardous Asteroid: </b>
               {localData.is_potentially_hazardous_asteroid ? 'TRUE' : 'FALSE'}
               </p>
            </div> : this.state.isDataFound ? <h3>Loading Data.....</h3> : 
            <div class="alert alert-info">
                <strong>Information!</strong> No Data Found for this <b>{this.props.location.state.aseroidID} </b> ID, you have entered.
            </div>
           }
        </div>
      );
}
}

export default Asteroid;
