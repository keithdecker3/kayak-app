import React, { Component } from 'react'
import { Button, Header, Image, Modal, Form, Dropdown, Rating, TextArea } from 'semantic-ui-react'
import { actions } from '../store'

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
                <Dropdown label='River' placeholder='Select River' selection options={riverOptions} name='river' value={this.props.value} onChange={(event, {value}) => this.props.onHandleChange(value, 'river')} />
                <Form.Input label='Trip Date' placeholder='Select Date' type='date' name='date' onChange={(event) => this.props.onHandleChange(event.target.value, event.target.name)} />
                <div>
                  <div>Difficulty: {this.props.difficulty}</div>
                  <input type='range' min={0} max={5} value={this.props.difficulty} name='difficulty' onChange={(event) => this.props.onHandleChange(event.target.value, event.target.name)} />
                  <br />
                  <Rating rating={this.props.difficulty} maxRating={5} />
                </div>
              </Form.Group>
              <Form.Group>
                <Form.Input  label='Start Time'  name='startTime' type='time' onChange={(event) => this.props.onHandleChange(event.target.value, event.target.name)}/>
                <Form.Input  label='End Time' name='endTime' type='time' onChange={(event) => this.props.onHandleChange(event.target.value, event.target.name)} />
                <Form.Input  label='Meetup Latitude' name='meetLat' type='number' onChange={(event) => this.props.onHandleChange(event.target.value, event.target.name)} />
                <Form.Input  label='Meetup Longitude' name='meetLong' type='number' onChange={(event) => this.props.onHandleChange(event.target.value, event.target.name)} />
              </Form.Group>
              <TextArea placeholder='Describe the trip'name='description' onChange={(event) => this.props.onHandleChange(event.target.value, event.target.name)} />
              <Button type='submit'>Submit</Button>
            </Form>
          </Modal.Content>
        </Modal>        
      </div>
    )
  }
}


export default PostRun