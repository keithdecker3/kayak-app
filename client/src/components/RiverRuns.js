import React, { Component } from 'react'
import { Card, Icon, Button } from 'semantic-ui-react'

class RiverRuns extends Component {

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
                <a>
                  <Icon name='user' />
                  22 Attending
                </a>
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