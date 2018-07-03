import React, { Component } from 'react'
import { Card, Icon, Button, Modal } from 'semantic-ui-react'

import UserModal from './UserModal'
import RunDetails from './RunDetails'
import RSVP from './RSVP'

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
              <Card key={run.id} style={{marginTop:'30px', marginBottom:'10px', marginLeft:'1.5px', marginRight:'1.5px'}}>
              <Card.Content>
                <Card.Header textAlign='center' className='run-date'>{run.date}</Card.Header>
                <Card.Meta className='run-info'>
                  <span className='date'>{run.start_time} to {run.end_time}</span>
                </Card.Meta>
                <Card.Meta className='run-info'>
                  <span className='difficulty'>Difficulty: {run.difficulty}/5</span>
                </Card.Meta>
                <Card.Description style={{height: "60px", overflow:"auto"}} className='run-description'>{run.description}</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className='details-div'>
                  <UserModal 
                    attending={run.id}/>
                  <Modal size='small'trigger={<a name={index} onClick={(event) => this.props.onSelectRun(this.props.riverRuns[event.target.name])}>Meetup Location</a>}>
                    <RunDetails 
                    selectedRun={this.props.selectedRun} />
                  </Modal>
                </div>
              </Card.Content>
              <Modal size='mini' trigger={<Button className='card-button'>RSVP</Button>}>
                <RSVP />
              </Modal>
            </Card>
            )
          })}
        </section>
      </div>
    )
  }
}

export default RiverRuns