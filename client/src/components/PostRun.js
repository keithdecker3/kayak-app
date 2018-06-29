import React, { Component } from 'react'
import { Button, Header, Image, Modal, Form, Dropdown, Rating, TextArea } from 'semantic-ui-react'

const riverOptions = [
  {
    text: 'Poudre',
    value: 'Poudre',
    image: {avatar: true, src: 'https://wilderness-voyageurs.com/wp-content/uploads/mid-summer10-2381.jpg'},
  },
  {
    text: 'Colorado',
    value: 'Colorado',
    image: {avatar: true, src: 'https://wilderness-voyageurs.com/wp-content/uploads/mid-summer10-2381.jpg'},
  },
  {
    text: 'Animas',
    value: 'Animas',
    image: {avatar: true, src: 'https://wilderness-voyageurs.com/wp-content/uploads/mid-summer10-2381.jpg'},
  },
  {
    text: 'Arkansas',
    value: 'Arkansas',
    image: {avatar: true, src: 'https://wilderness-voyageurs.com/wp-content/uploads/mid-summer10-2381.jpg'},
  },
  {
    text: 'Clear Creek',
    value: 'Clear Creek',
    image: {avatar: true, src: 'https://wilderness-voyageurs.com/wp-content/uploads/mid-summer10-2381.jpg'},
  },
  {
    text: 'Blue River',
    value: 'Blue River',
    image: {avatar: true, src: 'https://wilderness-voyageurs.com/wp-content/uploads/mid-summer10-2381.jpg'},
  }
]

class PostRun extends Component {
  render() {
    return (
      <div>
        <Modal size='small' trigger={<Button>Show Modal</Button>}>
          <Modal.Header>Add a Trip</Modal.Header>
          <Modal.Content>
            <Form>
              <Form.Group widths='equal'>
                <Dropdown label='River' placeholder='Select River' selection options={riverOptions} />
                <Form.Input label='Trip Date' placeholder='Select Date' type='date'/>
                <div>
                  <div>Rating: {3}</div>
                  <input type='range' min={0} max={5} value={3} onChange={this.handleChange} />
                  <br />
                  <Rating rating={3} maxRating={5} />
                </div>
              </Form.Group>
              <Form.Group>
                <Form.Input  label='Start Time'  type='time' />
                <Form.Input  label='End Time'  type='time' />
                <Form.Input  label='Meetup Latitude'  type='number' />
                <Form.Input  label='Meetup Longitude'  type='number' />
              </Form.Group>
              <TextArea placeholder='Describe the trip' />
              <Button type='submit'>Submit</Button>
            </Form>
          </Modal.Content>
        </Modal>        
      </div>
    )
  }
}

export default PostRun