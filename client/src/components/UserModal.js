import React, { Component } from 'react'

import { Modal, Icon, Button } from 'semantic-ui-react'

class UserModal extends Component {
  render() {
    return (
      <Modal size='tiny' trigger={
        <a>
          <Icon name='user' />
          22 Attending  -  View or RSVP
        </a>
      }>
        <Modal.Header>People Attending</Modal.Header>
        <Modal.Content>
          <p>Keith Decker - Skill: Intermediate | Safety Training: Intermediate </p>
        </Modal.Content>
      </Modal>
    )
  }
}

export default UserModal

