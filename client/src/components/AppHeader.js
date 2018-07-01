import React, { Component } from 'react'

import PostRun from './PostRun'

class AppHeader extends Component {
  render() {
    return (
      <div>
        <header>
          <div className='title-container'>
            <h1>GoPaddle</h1>
          </div>
        </header>
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
      </div>
    )
  }
}

export default AppHeader