import React, { Component } from 'react'

import { Card, Image, Button, } from 'semantic-ui-react'

class KayakApp extends Component {
  render() {
    return (
      <div className='category-div'>
        <section className='category-container'>
          {this.props.riverImages.map((river, index) => {
            return (
            <Card className='river-card' key={index} style={{marginTop:'30px', marginBottom:'10px', marginLeft:'1.5px', marginRight:'1.5px'}}>
              <Image src={river.image} />
              <Card.Content>
                <Card.Header textAlign='center' className='arvo-font' >{river.text}</Card.Header>
              </Card.Content>
              <Button className='card-button' name={river.text} onClick={(event) => this.props.onGetRiverRuns(event.target.name)}>View Trips</Button>
            </Card>
            )
          })}
        </section>
      </div>
    )
  }
}

export default KayakApp