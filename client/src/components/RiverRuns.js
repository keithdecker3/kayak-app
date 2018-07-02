import React, { Component } from 'react'
import { Card, Icon, Button, Modal } from 'semantic-ui-react'

import UserModal from './UserModal'
import RunDetails from './RunDetails'

class RiverRuns extends Component {

//   <a>
//   <Icon name='user' />
//   {run.id -3} Attending -  View or RSVP
// </a>

  render() {
    return (
      <div className='category-div'>
        <section className='category-container'>
          {this.props.riverRuns.map((run, index) => {
            return (
              <Card key={run.id}>
              <Card.Content>
                <Card.Header textAlign='center' className='run-date'>{run.date}</Card.Header>
                <Card.Meta className='run-info'>
                  <span className='date'>{run.start_time} to {run.end_time}</span>
                </Card.Meta>
                <Card.Meta className='run-info'>
                  <span className='date'>Difficulty: {run.difficulty}/5</span>
                </Card.Meta>
                <Card.Description className='run-description'>{run.description}</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <UserModal />
                <Modal size='small'trigger={<Button className='card-button' name={index} onClick={(event) => this.props.onSelectRun(this.props.riverRuns[event.target.name])}>Meetup Location</Button>}>
                  <RunDetails 
                  selectedRun={this.props.selectedRun} />
                </Modal>
              </Card.Content>
              <Button className='card-button' name={index} onClick={(event) => this.props.onSelectRun(this.props.riverRuns[event.target.name])}>Meetup Location</Button>
            </Card>
            )
          })}
        </section>
      </div>
    )
  }
}

export default RiverRuns