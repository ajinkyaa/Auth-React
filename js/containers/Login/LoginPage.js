import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { login } from '../../utils';
import GoogleLogin from 'react-google-login';
import history from '../../history';
import store from '../../store';

class LoginPage extends Component {
  
  responseGoogle(response) {
    console.log(this.props.userStatus)
    debugger;
  }

  onFailed(response) {
    console.log("hello")
  }

  render() {
    console.log(this.props.userStatus)
    return(
        <div>
          <h1>Login Page</h1>
          <p>
            For this example application, we cannot visit <Link to="/app">/app</Link> until we are logged in.
            Clicking the "Login" button will simulate a login by setting Redux state. This example compliments
            the CSS-Tricks article I wrote for <a target="_blank" href="https://css-tricks.com/react-router-4/">React Router 4</a>.
          </p>
          <GoogleLogin
            clientId="248197141202-lc3heutl2prq75m3lpt4gr84srb8mgvg.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={this.responseGoogle.bind(this)}
            onFailure={this.onFailed.bind(this)}
          />,
        </div>

      )
    }
}

export default LoginPage
