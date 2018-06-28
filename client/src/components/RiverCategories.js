import React, { Component } from 'react'

import { Card, Image, Button } from 'semantic-ui-react'

class KayakApp extends Component {
  render() {
    return (
      <div id='category-container'>
        {this.props.riverImages.map((river, index) => {
          return (
            <Card className='river-card' key={index}>
            <Image src={river.image} />
            <Card.Content>
              <Card.Header>{river.river}</Card.Header>
            </Card.Content>
            <Button name={river.river} onClick={(event) => this.props.onGetRiverRuns(event.target.name)}>View Trips</Button>
          </Card>
          )
        })}
      </div>
    )
  }
}

export default KayakApp