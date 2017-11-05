import React, {Component} from 'react';
//SearchBar need to Connect to Redux so it can dispatch actionCreators
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

//we will control the <input /> value with COMPONENT state (not Redux state)

class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state={ term:"" };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event){
    this.setState({term:event.target.value});
  }

  onFormSubmit(event){
    //prevent browser default behavior of submitting form & refreshing page  
    event.preventDefault();
    //call fetchWeather from SearchBar props, which have been wrapped w. 'dispatch'
    this.props.fetchWeather(this.state.term) 
    //clear SearchBox input text
    this.setState({term:''});
  }

  render(){
    return(
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input 
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary"> Submit!</button>
        </span>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchWeather},dispatch);
}

//we don't need mapStateToProps because SearchBar doesn't have
//any children, so it doesn't need to pass any state as props.
export default connect(null,mapDispatchToProps)(SearchBar);