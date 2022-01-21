import React from 'react';
import AppContext from '../lib/app-context';

export default class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGuestLogin = this.handleGuestLogin.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { action } = this.props;
    fetch(`/api/auth/${action}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(result => {
        if (action === 'sign-up') {
          window.location.hash = 'sign-in';
        } else if (action === 'sign-in' && result.user && result.token) {
          this.props.onSignIn(result);
          window.location.hash = 'search';
        }
      });
  }

  handleGuestLogin() {
    const result = {
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsInVzZXJuYW1lIjoiR3Vlc3QiLCJpYXQiOjE2NDI3NTMyOTh9.pimGI-u0AH7kYD8Qq-Q6f6YPY-PfKPIuNCBjvyBqCZs',
      user: {
        userId: 2,
        username: 'Guest'
      }
    };
    this.props.onSignIn(result);
  }

  render() {
    const { action } = this.props;
    const { handleChange, handleSubmit } = this;
    const alternateActionHref = action === 'sign-up'
      ? '#sign-in'
      : '#sign-up';
    const alternateActionText = action === 'sign-up'
      ? 'Sign in'
      : 'Register now';
    const alternateActionDesc = action === 'sign-up'
      ? 'Already have an account?'
      : "Don't have an account?";
    const submitButtonText = action === 'sign-up'
      ? 'Register'
      : 'Log In';
    const welcomeMessage = action === 'sign-up'
      ? 'SIGN UP'
      : 'LOG IN';
    return (
      <div className="container">
        <div className="bg-white p-4 rounded shadow mt-4">
          <h2 className="text-center mb-5 mt-3">{welcomeMessage}</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="usernameInput" className="form-label">Username</label>
              <input onChange={handleChange} type="text" name="username" className="form-control" id="usernameInput" aria-describedby="usernameHelp" required autoFocus />
            </div>
            <div className="mb-4">
              <label htmlFor="passwordInput" className="form-label">Password</label>
              <input onChange={handleChange} type="password" name="password" className="form-control" id="passwordInput" required />
            </div>
            <div className="mb-4">
              <button type="submit" className="btn btn-primary btn-lg w-100">{submitButtonText}</button>
            </div>
            <div className="mb-4">
              <p className="text-center">
                {alternateActionDesc}&nbsp;&nbsp;
                <a href={alternateActionHref}>
                  {alternateActionText}
                </a>
              </p>
            </div>
            <div className="d-flex justify-content-center">
              <a href="#search" onClick={this.handleGuestLogin}>Continue as Guest</a>
            </div>
          </form>
          {/* <form onSubmit={this.handleGuestLogin}>

          </form> */}
        </div>
      </div>
    );
  }
}

AuthForm.ContextType = AppContext;

// when user clicks guest button, make a post request for a "guest"
