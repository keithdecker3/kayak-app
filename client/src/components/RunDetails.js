import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

import { Card, Image, Button } from 'semantic-ui-react'

class RunDetails extends Component {
  render() {
    const position = [this.props.selectedRun.meet_lat, this.props.selectedRun.meet_lng]
    return (
      <div>
        <Map center={position} zoom={17}>
          <TileLayer
            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
            </Popup>
          </Marker>
        </Map>
      </div>
    )
  }
}

export default RunDetails