import React, { Component } from 'react'

import { Card, Image, Button } from 'semantic-ui-react'

class RunDetails extends Component {
  render() {
    const position = [Number(this.props.selectedRun.meet_lat), Number(this.props.selectedRun.meet_lng)]
    return (
      <Modal trigger={
        <a>
          <Icon name='user' />
          22 Attending  -  View or RSVP
        </a>
      }>
        <Modal.Header>Users Attending</Modal.Header>
        <Modal.Content>
          <p>Keith Decker - Skill: Intermediate | Safety Training: Intermediate </p>
        </Modal.Content>
      </Modal>
    )
  }
}

export default RunDetails

