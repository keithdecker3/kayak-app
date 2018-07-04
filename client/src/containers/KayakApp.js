import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actions } from '../store'

import RiverCategories from '../components/RiverCategories'
import RiverRuns from '../components/RiverRuns'
import RunDetails from '../components/RunDetails'
import AppHeader from '../components/AppHeader'

class KayakApp extends Component {

  render() {
    return (
      <div>
        <AppHeader 
          loggedIn={this.props.loggedIn}
          onLoggedIn={this.props.onLoggedIn}
          onGoHome={this.props.onGoHome}
          onHandleChange={this.props.onHandleChange}
          river={this.props.river}
          date={this.props.date}
          difficulty={this.props.difficulty}
          startTime={this.props.startTime}
          endTime={this.props.endTime}
          meetLat={this.props.meetLat}
          meetLong={this.props.meetLong}
          description={this.props.description} />
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
        <footer>
          <p className="copyright"> &copy;GoPaddle 2018</p>
          <p>Created by Keith Decker</p>
        </footer> 
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    river: state.river,
    date: state.date,
    difficulty: state.difficulty,
    startTime: state.startTime,
    endTime: state.endTime,
    meetLat: state.meetLat,
    meetLong: state.meetLong,
    description: state.description,
    riverImages: state.riverImages,
    riverRuns: state.riverRuns,
    selectedRun: state.selectedRun,
    showRivers: state.showRivers,
    showRuns: state.showRuns,
    showRunDetails: state.showRunDetails,
    loggedIn: state.loggedIn
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onHandleChange(input, name) {
      dispatch(actions.handleChange(input, name))
    },
    onGetRiverRuns(currentRiver) {
      dispatch(actions.getRiverRuns(currentRiver))
    },
    onSelectRun(selectedRun) {
      dispatch(actions.selectRun(selectedRun))
    },
    onGoHome() {
      dispatch(actions.goHome())
    },
    onLoggedIn() {
      dispatch(actions.loggedIn())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(KayakApp)