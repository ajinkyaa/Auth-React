import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import store from './store'
import history from './history'

// Layouts
import AppContainer from './containers/AppContainer'

const App = props => (
  <Provider store={store}>
    <Router history={history}>
      <div>
        <AppContainer />
      </div>
    </Router>
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('container'))