import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { notification } from 'antd';

import selectors from './selectors';

import actions from '../../actions';

import { POLLING_INTERVAL_MS, NOTIFICATION_TIMEOUT_MS } from '../../constants';

class Root extends React.Component {
  componentDidMount() {
    const { healthCheck } = this.props;

    healthCheck();
    setInterval(healthCheck, POLLING_INTERVAL_MS);
  }

  componentWillReceiveProps(newProps) {
    if (!newProps.isConnected) {
      notification.error({
        message: 'Connection lost',
        description: 'Retrying to connect. Please stand still.',
        placement: 'bottomRight',
        bottom: 50,
        duration: (NOTIFICATION_TIMEOUT_MS / 1000),
      });
    } else if (newProps.isConnected) {
      notification.info({
        message: 'Connection restored',
        description: 'You can continue working.',
        placement: 'bottomRight',
        bottom: 50,
        duration: (NOTIFICATION_TIMEOUT_MS / 1000),
      });
    }
  }

  render() {
    const { children } = this.props;

    return (
      <React.Fragment>
        <div>
          {children}
        </div>
      </React.Fragment>
    );
  }
}

Root.propTypes = {
  children: PropTypes.element.isRequired,
  healthCheck: PropTypes.func.isRequired,
};

export default connect(
  selectors,
  {
    ...actions.healthCheck,
  },
)(Root);
