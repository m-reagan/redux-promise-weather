import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class GoogleMap extends Component {
  componentDidMount() {
    new google.maps.Map(this.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
     
  }
  render() {
    return <div ref={(map) => { this.map = map; }} />;
  }
}
