import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

import PostRun from './PostRun'

class AppHeader extends Component {
  render() {
    return (
      <div>
        <header>
          <div className='title-container'>
            <h1>GoPaddle</h1>
          </div>
          <div className='post-div'>
            <Button.Group >
            <Button className='nav-button' onClick={this.props.onGoHome}>Home</Button>
            <PostRun 
            onHandleChange={this.props.onHandleChange}
            river={this.props.river}
            date={this.props.date}
            difficulty={this.props.difficulty}
            startTime={this.props.startTime}
            endTime={this.props.endTime}
            meetLat={this.props.meetLat}
            meetLong={this.props.meetLong}
            description={this.props.description} />
            </Button.Group>
          </div>
        </header>  
        <div className='header-buffer' />     
      </div>
    )
  }
}

export default AppHeader