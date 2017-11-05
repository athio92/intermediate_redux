import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component{
  renderWeather(cityData){
    const temps = cityData.list.map( (listItem) => listItem.main.temp);
    const pressures = cityData.list.map( (listItem) => listItem.main.pressure);
    const humidities = cityData.list.map( (listItem) => listItem.main.humidity);

    console.log(pressures);
    console.log(humidities);

    return(
      <tr key={cityData.city.id}>
        <td>{cityData.city.name}</td>
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
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
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