import message from './message';

const wchatApi = Object.assign({}, message);
logger.info('wchatApi.message', message);
logger.info('wchatApi', wchatApi);
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
