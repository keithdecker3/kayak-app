import React, { Component } from 'react'
import { Button, Header, Image, Modal, Form } from 'semantic-ui-react'

class PostRun extends Component {
  render() {
    return (
      <div>
        <Modal trigger={<Button>Show Modal</Button>}>
          <Modal.Header>Add a Trip</Modal.Header>
          <Modal.Content>
            <Form>
              <Form.Group widths='equal'>
                <Form.Input fluid label='First name' placeholder='First name' />
                <Form.Input fluid label='Last name' placeholder='Last name' />
              </Form.Group>
              <Button type='submit'>Submit</Button>
            </Form>
          </Modal.Content>
        </Modal>        
      </div>
    )
  }
}

export default PostRun