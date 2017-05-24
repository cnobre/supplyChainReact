
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
  
  render() {
    return (
       <GoogleMapReact
        bootstrapURLKeys={{key:'AIzaSyB42BSn5hxy34ZXrqno8lewYMAUoD2DBsE&'}} 
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

SimpleMap.propTypes = {
  center: PropTypes.any,
    zoom: PropTypes.number
}

SimpleMap.defaultProps = {
  center: {lat: 59.95, lng: 30.33},
    zoom: 11
}


export default SimpleMap

