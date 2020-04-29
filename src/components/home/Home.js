import React, { Component } from 'react';
import Axios from 'axios';

const API_KEY = 'Bdv7Cvw5rLNdMJYSFbfnqif74KSpzW2PTBWp1bzf';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            asteroidID: '',
            isFetchingData: false
        }
    }

    onChangeHandler = (e) => {

        if (!!e.target && !!e.target.value) {
            this.setState({
                asteroidID: e.target.value,
                isValid: true
            });
        } else {
            this.setState({
                asteroidID: '',
                isValid: false
            });
        }
        console.log(e.target.value);

    }
    onSubmitHandler = () => {
        this.props.history.push({
            pathname: '/asteroid-list',
            state: {
                aseroidID: this.state.asteroidID
            }
        });
    }


    getRandomNumber(max) {
        return Math.floor(Math.random() * max);
    }
    onRandomHandler = () => {
        this.setState({
            isFetchingData: true
        });
        const URL = 'https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=' + API_KEY;
        Axios.get(URL).then(response => {
            if (response.status === 200) {
                let dataArray = response.data.near_earth_objects;
                let randomNumber = this.getRandomNumber(dataArray.length);

                this.props.history.push({
                    pathname: '/asteroid-list',
                    state: {
                        aseroidID: dataArray[randomNumber].id
                    }
                });
            }
        })
    }

    render() {
        return (
            <div className="container">
                 {this.state.isFetchingData? 
                <div class="alert alert-info">
                    <strong>Fetching!</strong> Please wait while process is going on.
                </div> : null}

                <form >
                    <div className="form-group">
                        <label>Enter Asteroid ID:</label>
                        <input type="text" className="form-control" id="email" placeholder="Enter Asteroid ID" value={this.state.asteroidID} onChange={this.onChangeHandler} />
                    </div>
                    <button type="button" className="btn btn-success" style={{ marginRight: '10px' }} onClick={this.onSubmitHandler} disabled={!this.state.isValid}>Submit</button>

                    <button type="button" className="btn btn-info" onClick={this.onRandomHandler}>Random Asteroid</button>
                </form>
                <br />
                <br />
               
            </div>

        );
    }
}

export default Home;
