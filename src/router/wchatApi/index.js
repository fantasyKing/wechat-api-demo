import message from './message';

const wchatApi = Object.assign({}, message);
console.log('wchatApi.message', message);
console.log('wchatApi', wchatApi);
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
    }
  }
};
