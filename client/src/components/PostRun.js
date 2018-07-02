import React, { Component } from 'react'
import { Button, Header, Image, Modal, Form, Dropdown, Rating, TextArea } from 'semantic-ui-react'
import { actions } from '../store'


const riverOptions = [
  {
    text: 'Poudre',
    value: 'Poudre',
    image: {avatar: true, src: 'https://boofingtonheights.files.wordpress.com/2011/08/dsc_0589.jpg'},
  },
  {
    text: 'Colorado',
    value: 'Colorado',
    image: {avatar: true, src: 'https://www.colorado.com/sites/default/files/styles/1000x685/public/Glenwood-Canyon-Kayaker-Glenwood-Springs.jpg'},
  },
  {
    text: 'Animas',
    value: 'Animas',
    image: {avatar: true, src: 'https://www.americanwhitewater.org/photos/archive/medium/885497.jpg'},
  },
  {
    text: 'Arkansas',
    value: 'Arkansas',
    image: {avatar: true, src: 'http://mtntownmagazine.com/wp-content/uploads/2014/08/buena_vista_river_park-00001-3.jpg'},
  },
  {
    text: 'Clear Creek',
    value: 'Clear Creek',
    image: {avatar: true, src: 'http://www.goldenvisitorsbureau.com/gvcimages/gvckayaking.jpg'},
  },
  {
    text: 'Blue River',
    value: 'Blue River',
    image: {avatar: true, src: 'https://www.summitdaily.com/wp-content/uploads/2016/08/KayakBlue-Sdn-090613-a-1-325x217.jpg'},
  }
]

class PostRun extends Component {

  formSubmit = (event) => {
    event.preventDefault()
    const postData = {
      river: this.props.river,
      date: this.props.date,
      start_time: this.props.startTime,
      end_time: this.props.endTime,
      description: this.props.description,
      meet_lat: this.props.meetLat,
      meet_lng: this.props.meetLong,
      difficulty: this.props.difficulty
    }
      console.log(postData)
      fetch('http://localhost:3000/runs', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(postData),
      })
      .then(response => response.json())
  }

  render() {
    return (
        <Modal size='small' trigger={<Button className='nav-button'>Post a Trip</Button>}>
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
              <Button type='submit' onClick={this.formSubmit}>Submit</Button>
            </Form>
          </Modal.Content>
        </Modal>        
    )
  }
}


export default PostRun