import { get } from 'lodash';

export default state => ({
  values: get(state, `forms.data[${'PROFILES'}].values`, {}),
});