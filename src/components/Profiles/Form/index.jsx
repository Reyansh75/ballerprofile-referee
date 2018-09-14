import cn from 'classnames';
import React from 'react';
import { connect } from 'react-redux';

import selectors from './selectors';

import { Input, Form } from '../../common/components';

import actions from '../../../actions';

class ProfilesForm extends Form {
  constructor() {
    super();

    this.state = {
      errors: {},
      validating: {},
    }

    this.formId = 'PROFILES';
    this.validations = {};
  }

  render() {
    const { values } = this.props;

    return (
      <div className="container h-100 sn-mt-100">
        <div className="sn-navigation">
          Create your Referee Profile
        </div>
          <div className="row justify-content-center my-5">
            <div className="sn-image-form-box">
              <span>+</span>
            </div>
          </div>
          <div className="row">
            <Input {...this.getFieldProps('first_name')} label="First name" className="sn-font-italic" />
            <Input {...this.getFieldProps('last_name')} label="Last name" className="mt-3 sn-font-italic" />
          </div>
          <div className="row mt-5">
            <p className="sn-subtitle">D.O.B</p>
          </div>
          <div className="row">
            <div className="col p-0">
              <Input {...this.getFieldProps('day')} label="Day" className="sn-font-italic" />
            </div>
            <div className="col">
              <Input {...this.getFieldProps('month')} label="Month" className="sn-font-italic" />
            </div>
            <div className="col p-0">
              <Input {...this.getFieldProps('year')} label="Year" className="sn-font-italic" />
            </div>
          </div>
          <div className="row">
            <Input {...this.getFieldProps('postcode')} label="Postcode" className="mt-3 sn-font-italic" />
          </div>
          <div className="sn-footer">
            DONE
          </div>
      </div>
    );
  }
}

export default connect(
  selectors,
  {
    ...actions.forms,
  }
)(ProfilesForm);