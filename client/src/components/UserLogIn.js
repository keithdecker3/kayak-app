import React, { Component } from 'react'

import { Form, Button, Modal } from 'semantic-ui-react'

class UserLogIn extends Component {
  render() {
    return (
      <Modal trigger={<Button className='nav-button'>Log In</Button>}>
        <Modal.Header>Log in or Create an Account</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Field>
              <label>Email</label>
              <input placeholder='Enter Email' />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input placeholder='Enter Password' />
            </Form.Field>
          </Form>
          <Button id='login-button'>Submit</Button>
          <div className='create-account-div'>
            <a className='create-account'>Don't have an account? Create one now</a>
          </div>
        </Modal.Content>
      </Modal>
    )
  }
}

export default UserLogIn