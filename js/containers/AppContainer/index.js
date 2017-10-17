import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionItems from './actions'

// Layouts
import UnauthorizedLayout from '../Login'
import HomePage from '../HomePage'

const AppContainer = ({userStatus, actions}) => (
  <Switch>
    <Route exact path="/login" render={(props) => (
      <UnauthorizedLayout userStatus={userStatus} actions={actions} />
    )}/>
  </Switch>
)

const mapStateToProps = ({ loggedUserState }) => ({
  userStatus: loggedUserState
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionItems, dispatch)
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer)

