import React, {Component} from 'react';
//google map is already wired in index.html, no need more imports.
//https://developers.google.com/maps/documentation/javascript/reference

class GoogleMap extends Component{
    componentDidMount(){
      new google.maps.Map(this.refs.map,{
        zoom:12,
        center:{
          lat:this.props.lat,
          lng:this.props.lon
        }
      });
    }

    render(){
      //ref = reference to existing html element that has been rendered on page.
      return <div ref="map" />
    }
}

export default GoogleMap;