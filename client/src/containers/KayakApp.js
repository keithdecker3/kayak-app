import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actions } from '../store'

import RiverCategories from '../components/RiverCategories'
import RiverRuns from '../components/RiverRuns'
import RunDetails from '../components/RunDetails'

// var config = {
//   apiKey: "AIzaSyDRmeOoIkVwFF2OveGuF6-OZb-qbkkoVwM",
//   authDomain: "kayak-app.firebaseapp.com",
//   databaseURL: "https://kayak-app.firebaseio.com",
//   projectId: "kayak-app",
//   storageBucket: "kayak-app.appspot.com",
//   messagingSenderId: "989994694489" 
// }

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
        <RunDetails/>
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