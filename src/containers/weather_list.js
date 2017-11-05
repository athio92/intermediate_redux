import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component{
  renderWeather(cityData){
    //extracting all temps/pressures/humidities into a single array
    const temps = cityData.list.map( (listItem) => listItem.main.temp - 273.15);
    const pressures = cityData.list.map( (listItem) => listItem.main.pressure);
    const humidities = cityData.list.map( (listItem) => listItem.main.humidity);
    
    return(
      <tr key={cityData.city.id}>
        <td>
          <GoogleMap lat={cityData.city.coord.lat} lon={cityData.city.coord.lon}/>
        </td>
        <td>
          <Chart data={temps} color="red"/>
        </td>
        <td>
          <Chart data={pressures} color="orange"/>
        </td>
        <td>
          <Chart data={humidities} color="blue"/>
        </td>
      </tr>
    );

  }


  render(){
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>       
    );
  }

}

function mapStateToProps(state){
  return {weather:state.weather};
}

export default connect(mapStateToProps)(WeatherList);