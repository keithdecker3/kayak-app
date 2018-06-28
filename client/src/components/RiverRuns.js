import React, { Component } from 'react'
import { Card, Icon, Button } from 'semantic-ui-react'

class RiverRuns extends Component {

  render() {
    return (
      <div>
        {this.props.riverRuns.map((run, index) => {
          return (
            <Card key={run.id}>
            <Card.Content>
              <Card.Header>{run.date}</Card.Header>
              <Card.Meta>
                <span className='date'>{run.start_time} to {run.end_time}</span>
              </Card.Meta>
              <Card.Meta>
                <span className='date'>Difficulty: {run.difficulty}/5</span>
              </Card.Meta>
              <Card.Description>{run.description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='user' />
                22 Attending
              </a>
            </Card.Content>
            <Button name={index} onClick={(event) => this.props.onSelectRun(this.props.riverRuns[event.target.name])}>View Details</Button>
          </Card>
          )
        })}
      </div>
    )
  }
}

export default RiverRuns