import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actions } from '../store'

import RiverCategories from '../components/RiverCategories'
import RiverRuns from '../components/RiverRuns'
import RunDetails from '../components/RunDetails'
import AppHeader from '../components/AppHeader'

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
        <AppHeader />
        {this.props.showRivers ? 
        <RiverCategories 
          onGetRiverRuns={this.props.onGetRiverRuns}
          riverImages={this.props.riverImages} />
          : '' }
        {this.props.showRuns ?
        <RiverRuns 
          riverRuns={this.props.riverRuns} 
          selectedRun={this.props.selectedRun} 
          onSelectRun={this.props.onSelectRun} />
          : '' }
        {this.props.showRunDetails ?
        <RunDetails
          selectedRun={this.props.selectedRun} 
          onSelectRun={this.props.onSelectRun} />
          : '' }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    riverImages: state.riverImages,
    riverRuns: state.riverRuns,
    selectedRun: state.selectedRun,
    showRivers: state.showRivers,
    showRuns: state.showRuns,
    showRunDetails: state.showRunDetails
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
    onSelectRun(selectedRun) {
      dispatch(actions.selectRun(selectedRun))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(KayakApp)