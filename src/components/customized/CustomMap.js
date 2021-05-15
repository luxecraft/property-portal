import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MapMarker from './MapMarker';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class CustomMap extends Component {
  static defaultProps = {
    zoom: 15
  };

  render() {
    return (
      <div className="map-overlay">
        <div style={{ height: '25em', width: '60em', borderRadius: "20px" }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyBVG1AFgOTC7nAqOFY3Tmb1KAUqoWRzuUo" }}
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

export default CustomMap;