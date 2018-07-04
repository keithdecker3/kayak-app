import React, { Component } from 'react'

import { Modal, Checkbox, Button } from 'semantic-ui-react'

class RSVP extends Component {
  render() {
    return (
      <div className='rsvp-div'>
        <Modal.Header>Are You Attending?</Modal.Header>
        <Modal.Content>
          <div className='checkbox-div'>
            <label className='rsvp-label'>No -- Yes</label>
            <Checkbox toggle color='black' />
            <div className='rsvp-button-div'>
              <Button id='rsvp-button'>Submit</Button>
            </div>
          </div>
        </Modal.Content>
      </div>
    )
  }
}

export default RSVP