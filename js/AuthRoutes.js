import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { getLoggedUser } from './utils'
import { Login } from './containers/Login'
import { bindActionCreators } from 'redux'
import * as actionItems from './actions'



const AuthRoutes = ({userStatus, actions}) => (
  <Route exact path="/login" render={(actions) => (
    userStatus.logged ? (
      <Redirect to="/app" />
    ) : (
      <Login actions={actions} />
    )
    )}
  />
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
)(AuthRoutes)
