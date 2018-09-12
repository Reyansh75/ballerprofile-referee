import { combineReducers } from 'redux';

import authentication from './authentication';
import forms from './forms';
import healthCheck from './healthCheck';

export default combineReducers({
  authentication,
  forms,
  healthCheck,
});
