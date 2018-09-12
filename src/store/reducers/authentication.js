import { get } from 'lodash';
import { actions, paths } from '../../constants';

const initialState = {
  hasUpdatedPassword: false,
  hasRegistered: false,
  hasVerifiedToken: false,
  isSubmitting: false,
};

const actionMap = {
  [actions.AUTHENTICATION_LOGIN_REQUEST]: state => ({ ...state, isSubmitting: true }),
  [actions.AUTHENTICATION_LOGIN_SUCCESS]: state => ({ ...state, isSubmitting: false }),
  [actions.AUTHENTICATION_LOGIN_FAILURE]: state => ({ ...state, isSubmitting: true }),
};

export default (state = initialState, action) => {
  if ([401, 403].includes(get(action, 'error.response.status'))) {
    window.location = paths.client.LOGIN;
  }

  if (actionMap[action.type]) {
    return actionMap[action.type](state, action);
  }

  return state;
};
