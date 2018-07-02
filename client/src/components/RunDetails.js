import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

import { Card, Image, Button } from 'semantic-ui-react'

class RunDetails extends Component {
  render() {
    const position = [Number(this.props.selectedRun.meet_lat), Number(this.props.selectedRun.meet_lng)]
    return (
      <div className='map-div'>
        <div center className='map-container'>
            <Map center={position} zoom={15}>
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
      </div>
    )
  }
}

export default RunDetails