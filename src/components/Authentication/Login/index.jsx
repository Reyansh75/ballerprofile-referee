import React from 'react';
import { Row, Col, Card, Form as AntForm, Button } from 'antd';
import { connect } from 'react-redux';

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

    this.validating = {};
    this.formId = forms.LOGIN;
  }

  render() {
    return (
      <Row>
        <Col span={6} offset={9}>
          <Card title="Login">
            <AntForm>
              <AntForm.Item>
                <Input {...this.getFieldProps('email')} placeholder="Email" type="email" />
              </AntForm.Item>
              <AntForm.Item>
                <Input {...this.getFieldProps('password')} placeholder="Password" type="password" />
              </AntForm.Item>
              <AntForm.Item>
                <Button type="primary">
                  Log in
                </Button>
              </AntForm.Item>
            </AntForm>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default connect(
  selectors,
  {
    ...actions.forms,
  },
)(Login);
