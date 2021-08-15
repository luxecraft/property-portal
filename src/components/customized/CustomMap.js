import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MapMarker from './MapMarker';

class CustomMap extends Component {
  render() {
    return (
      <div className="map-overlay">
        <div style={{ height: '25em', width: '60em', borderRadius: '20px' }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: 'AIzaSyBVG1AFgOTC7nAqOFY3Tmb1KAUqoWRzuUo',
            }}
            defaultCenter={{ lat: this.props.lat, lng: this.props.lng }}
            defaultZoom={this.props.zoom}
          >
            <MapMarker
              lat={this.props.lat}
              lng={this.props.lng}
              text="Property"
            />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

CustomMap.defaultProps = {
  zoom: 15,
};

export default CustomMap;
