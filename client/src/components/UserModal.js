import React, { Component } from 'react'

import { Modal, Icon, Button } from 'semantic-ui-react'

class UserModal extends Component {
  render() {
    return (
      <Modal size='small' trigger={
        <a className='detail-anchor'>
          <Icon name='user' />
          {this.props.attending} Attending
        </a>
      }>
        <Modal.Header >People Attending</Modal.Header>
        <Modal.Content>
          <p className='attending-paragraph'>Keith Decker - Skill: Intermediate | Safety Training: Intermediate </p>
          <p className='attending-paragraph'>Matthew Hyrka - Skill: Advanced | Safety Training: Advanced </p>
          <p className='attending-paragraph'> Shaun Carter - Skill: Intermediate | Safety Training: Beginner </p>
          <p className='attending-paragraph'> David Gurley - Skill: Beginner | Safety Training: Beginner </p>
        </Modal.Content>
      </Modal>
    )
  }
}

export default UserModal

