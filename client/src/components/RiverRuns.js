import React, { Component } from 'react'
import { Card, Icon, Button } from 'semantic-ui-react'

class RiverRuns extends Component {
  // componentDidMount() {
  //   this.props.onGetRiverRuns(this.props.currentRiver)
  // }

  render() {
    return (
      <div>
        {this.props.riverRuns.map(run => {
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
            <Button>View Details</Button>
          </Card>
          )
        })}
      </div>
    )
  }
}

export default RiverRuns