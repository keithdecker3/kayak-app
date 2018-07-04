import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

import PostRun from './PostRun'
import UserLogIn from './UserLogIn'

class AppHeader extends Component {
  render() {
    return (
      <div>
        <header>
          <div className='title-container'>
            <h1>GoPaddle</h1>
            <img id='logo' src='http://clipartmag.com/images/oar-clipart-12.png' alt='kayak icon' />
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
            {this.props.loggedIn ? <Button className='nav-button'>Justin</Button> 
            : <UserLogIn 
              loggedIn={this.props.loggedIn}
              onLoggedIn={this.props.onLoggedIn} />
             }
            </Button.Group>
          </div>
        </header>  
        <div className='header-buffer' />     
      </div>
    )
  }
}

export default AppHeader