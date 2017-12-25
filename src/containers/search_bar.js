import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeatherActCreator } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {term: ''};
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onSubmitHandler(event) {
    event.preventDefault();
    console.log(event);
    this.props.fetchWeatherActCreator(this.state.term);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  render() {
    return (
      <form onSubmit={this.onSubmitHandler}>
        <div className="row">
          <div className="col-md-8">
            <input
              value={this.state.term}
              onChange={this.onInputChange}
              autoFocus
              className="form-control form-control-md" 
              type="text"
              placeholder="Enter a city name to get the weather forecast"
            />
          </div>
            <div className="col-md-4">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </div>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeatherActCreator }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);