/**
 * Created on 5/6/16.
 */
import ms_utils from 'ms-utils';
const error = ms_utils.error;

export default class {
  ok = (res, data, wrap) => {
    if (wrap) {
      return res.json({ code: 1, result: { data } });
    }
    return res.json({ code: 1, result: data });
  };

  fail = (res) => {
    const result = (e) => {
      // let message = 'unknown';
      let code = -1;
      if (typeof e === 'string') {
        code = e;
      } else if (typeof e === 'object') {
        //        message = e.toString();
        code = e.message;
      }
      const ret = error(code);
      logger.error('fail error = ', e, e.stack || '', ret);
      res.json(ret);
    };
    return result;
  }
}
