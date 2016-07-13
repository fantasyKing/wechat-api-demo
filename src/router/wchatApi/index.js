import message from './message';

const wchatApi = Object.assign({}, message);
/**
 * {
 *  'msgtype': [
 *  []
 * ]
 * }
 */
export default {
  event: {
    click: {
      test: wchatApi.sengMsg
    }
  }
};
