import { actions, paths } from '../constants';

export default {
  healthCheck: () => ({
    [actions.API_CALL]: {
      types: [
        actions.HEALTH_CHECK_REQUEST,
        actions.HEALTH_CHECK_SUCCESS,
        actions.HEALTH_CHECK_FAILURE,
      ],
      promise: client => client.get(paths.api.v1.HEALTH_CHECK),
    },
  }),
};
