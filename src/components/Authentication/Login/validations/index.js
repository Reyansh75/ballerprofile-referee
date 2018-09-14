import { validations } from '../../../common/utils';

export default () => ({
  email: value => Promise.resolve(validations.isEmpty(value) ? 'Name is required' : ''),

  password: value => Promise.resolve(validations.isEmpty(value) ? 'Password is required' : ''),
})