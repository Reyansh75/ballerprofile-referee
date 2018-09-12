import { get } from 'lodash';

import forms from '../../../../constants/forms';

export default state => ({
  values: get(state, `forms.data[${forms.LOGIN}].values`, {}),
});
