import React, { Component } from 'react';

import GoogleMapReact from 'google-map-react';

import { FaMapMarkerAlt } from 'react-icons/fa'

//SCSS
import './../SCSS/GoogleMapReact.scss'

const AnyReactComponent = ({ text }) => <div className = "map_marker">
  <FaMapMarkerAlt/>
</div>;


class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 26.4499,
      lng: 80.3319
    },
    zoom: 11
  };
 
  render() {
    return (
      <div className = "map_container">

        <GoogleMapReact defaultCenter={this.props.center} defaultZoom={this.props.zoom}>

          <AnyReactComponent
            lat={26.4499}
            lng={80.3319}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;