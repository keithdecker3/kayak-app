import React, { Component } from 'react'
import { connect } from 'react-redux'

import { actions } from '../store'

import RiverCategories from '../components/RiverCategories'
import RiverRuns from '../components/RiverRuns'

class KayakApp extends Component {

  render() {
    return (
      <div>
        {this.props.showRivers ? 
        <RiverCategories 
          onGetRiverRuns={this.props.onGetRiverRuns}
          riverImages={this.props.riverImages} />
          : '' }
        {this.props.showRuns ?
        <RiverRuns 
          riverRuns={this.props.riverRuns} />
          : '' }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    riverImages: state.riverImages,
    riverRuns: state.riverRuns,
    showRivers: state.showRivers,
    showRuns: state.showRuns
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onHandleChange(input) {
      dispatch(actions.handleChange(input))
    },
    onGetRiverRuns(currentRiver) {
      dispatch(actions.getRiverRuns(currentRiver))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(KayakApp)