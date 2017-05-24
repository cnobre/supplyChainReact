
import React from 'react';
var PropTypes = require('prop-types');

import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => (
  <div style={{
    position: 'relative', color: 'white', background: 'red',
    height: 40, width: 60, top: -20, left: -30,    
  }}>
    {text}
  </div>
);

class SimpleMap extends React.Component {

  // static propTypes = {
  //   center: PropTypes.array,
  //   zoom: PropTypes.number,
  //   greatPlaceCoords: PropTypes.any
  // };

  // static defaultProps = {
  //   center: [59.938043, 30.337157],
  //   zoom: 14,
  //   greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
  // };


  static defaultProps = {
    center: {lat: 59.95, lng: 30.33},
    zoom: 11
  };

  render() {
    return (
       <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <AnyReactComponent 
          lat={59.955413} 
          lng={30.337844} 
          text={'Kreyser Avrora'} 
        />
      </GoogleMapReact>
    );
  }
}

export default SimpleMap
