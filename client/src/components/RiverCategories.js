import React, { Component } from 'react'

import { Card, Image, Button } from 'semantic-ui-react'

class KayakApp extends Component {
  render() {
    return (
      <div>
        {this.props.riverImages.map((river, index) => {
          return (
            <Card key={index}>
            <Image src={river.image} />
            <Card.Content>
              <Card.Header>{river.river}</Card.Header>
            </Card.Content>
            <Button>View Trips</Button>
          </Card>
          )
        })}
      </div>
    )
  }
}

export default KayakApp