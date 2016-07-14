import message from './message';
import eventView from './eventView';

const wchatApi = Object.assign({}, message, eventView);
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
      test: wchatApi.sendMsg
    },
    view: wchatApi.letGo
  }
};
