import React, { Component } from 'react'
import { connect } from 'react-redux'

import { actions } from '../store'

import RiverCategories from '../components/RiverCategories'

class KayakApp extends Component {


  render() {
    return (
      <div>
        <RiverCategories riverImages={this.props.riverImages} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    riverImages: state.riverImages
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleChange(input) {
      dispatch(actions.handleChange(input))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(KayakApp)