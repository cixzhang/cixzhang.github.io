
import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

const lat = 33.985469;
const long = -117.927168;
const zoom = 15;

const clat = 33.987557;
const clong = -117.927168;

class WeddingMap extends Component {
  render() {
    const position = [lat, long]
    const cposition = [clat, clong]
    return (
      <Map center={cposition} zoom={zoom} className="wedding-map">
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={position}>
          <Popup>
            <a target="_blank" href="https://goo.gl/maps/7LGcA5vmMky">Open in Google Maps</a>
          </Popup>
        </Marker>
      </Map>
    )
  }
}

export default WeddingMap;
