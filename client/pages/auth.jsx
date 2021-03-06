import React from 'react';
import Redirect from '../components/redirect';
import AuthForm from '../components/auth-form';
import AppContext from '../lib/app-context';

export default class AuthPage extends React.Component {

  render() {
    const { user, route, handleSignIn } = this.context;
    if (user) return <Redirect to="" />;
    return (
      <div className="container p-5">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="text-center">
              <img src='/images/logo.png' className='text-center w-50 mb-3' />
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <AuthForm
              key={route.path}
              action={route.path}
              onSignIn={handleSignIn} />
          </div>
        </div>
      </div>
    );
  }
}

AuthPage.contextType = AppContext;
