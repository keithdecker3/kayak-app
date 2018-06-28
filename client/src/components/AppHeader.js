import React, { Component } from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

import PostRun from './PostRun'

class AppHeader extends Component {
  render() {
    return (
      <div>
        <header>
          <div className='title-container'>
            <h1>KayakApp</h1>
          </div>
        </header>
        <PostRun />
      </div>
    )
  }
}

export default AppHeader