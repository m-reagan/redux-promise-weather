import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

const renderCityRow = (cityData) => {
  const temps = cityData.list.map(weather => weather.main.temp);
  const pressures = cityData.list.map(weather => weather.main.pressure);
  const humidities = cityData.list.map(weather => weather.main.humidity);

  const tempsAvg = _.round(_.sum(temps)/temps.length);
  const pressureAvg = _.round(_.sum(pressures)/pressures.length);
  const humidityAvg = _.round(_.sum(humidities)/humidities.length);

  return (
    <tr key={cityData.city.name}>
      <td><GoogleMap lat={cityData.city.coord.lat} lon={cityData.city.coord.lon}/></td>
      <td><div><Chart data={temps} color="green" /> {tempsAvg} (K) </div></td>
      <td><div><Chart data={pressures} color="red" /> {pressureAvg} (hPa) </div></td>
      <td><div><Chart data={humidities} color="black" /> {humidityAvg} (%) </div></td>
    </tr>
  );
}


class WeatherList extends Component {
    
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K) </th>
            <th>Pressure (hPa) </th>
            <th>Humidity (%) </th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(weather => renderCityRow(weather))}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps(state) {
  return {
    weather: state.weather
  };
}

export default connect(mapStateToProps)(WeatherList);
