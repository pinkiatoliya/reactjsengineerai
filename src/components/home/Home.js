import React, { Component } from 'react';

class Home extends Component {
  constructor(props){
      super(props);
      this.state={
        asteroidID: ''
      }
  }

  onChangeHandler = (e)=>{
   console.log(e.target.value);
   this.setState({
       asteroidID: e.target.value
   });
  }
   onSubmitHandler = ()=>{
       this.props.history.push({
           pathname: '/asteroid-list',
           state: {
               aseroidID: this.state.asteroidID
           }
       })
   }

render(){
    return (
        <form action="/action_page.php">
            <div className="form-group">
                <label>Enter Asteroid ID:</label>
                <input type="text" className="form-control" id="email" placeholder="Enter Asteroid ID" value={this.state.asteroidID} onChange={this.onChangeHandler} />
            </div>
      <button type="button" className="btn btn-default" onClick={this.onSubmitHandler}>Submit</button>
    </form>
      );
}
}

export default Home;
