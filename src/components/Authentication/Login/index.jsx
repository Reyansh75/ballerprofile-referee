import React from 'react';
import cn from 'classnames';
import { connect } from 'react-redux';

import validations from './validations';
import selectors from './selectors';

import actions from '../../../actions';

import { Form, Input } from '../../common/components';

import forms from '../../../constants/forms';

class Login extends Form {
  constructor(props) {
    super(props);

    this.state = {
      errors: {},
      validating: {},
    };

    this.validations = validations;
    this.formId = forms.LOGIN;
  }

  handleLogin = (ev) => {
    this.handleSubmit(ev)
      .then((canSubmit) => {
        if(canSubmit) {
          const { values, login } = this.props;

          login(values)
        }

        return canSubmit;
      })
  }

  render() {
    const { values} = this.props;

    return (
      <div className="container h-100">
        <div className="d-flex flex-column h-100">
            <div className="col d-flex flex-column justify-content-center align-items-center">
              <img src="/img/logo.png" height="70" width="70" />
              <strong className="mt-4">Referee App</strong>
            </div>
            <div className="col d-flex flex-column justify-content-center align-items-center">
              <Input {...this.getFieldProps('email')} label="Email address" className="sn-font-italic" />
              <Input {...this.getFieldProps('password')} label="Password" className="mt-3 sn-font-italic" type="password" />
            </div>
            <div className="col d-flex flex-column justify-content-center align-items-center">
              <button onClick={this.handleLogin} className={cn("sn-login button w-100 mb-5", { 'sn-fill-blue': values.email && values.password })}>
                <span>Sign in</span>
              </button>
              <button className="sn-special linkedin w-100">
                <span>Continue with LinkedIn</span>
                <img src="/img/linkedin.png" height="30" width="30" />
              </button>
              <button className="sn-special twitter w-100 mt-3">
                <span>Continue with Twitter</span>
                <img src="/img/twitter.png" height="30" width="30" />
              </button>
            </div>
        </div>
      </div>
    );
  }
}

export default connect(
  selectors,
  {
    ...actions.forms,
    ...actions.authentication,
  },
)(Login);
