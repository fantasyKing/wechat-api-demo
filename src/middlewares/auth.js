import { parseParams } from './../util/parse_params';
import utility from 'utility';

export default new class {
  validateSign = async (req, res, next) => {
    try {
      const params = await parseParams(req);
      if (!params.signature) {
        return res.end('error');
      }
      const signature = params.signature;
      const obj = Object.assign({}, params);
      if (obj.signature) {
        delete obj.signature;
      }
      if (obj.echostr) {
        delete obj.echostr;
      }
      const arr = [];
      if (req.method === 'GET') {
        arr.push('weixin');
        arr.push(obj.timestamp);
        arr.push(obj.nonce);
      } else {
        for (const key of Object.keys(obj)) {
          arr.push(obj[key]);
        }
      }
      const sign = utility.sha1(arr.sort().join(''));
      if (sign !== signature) {
        return res.end('error');
      }
      if (req.method === 'GET') {
        return res.end(params.echostr);
      }
      logger.info('auth.validateSign===params', params);
      return next();
    } catch (err) {
      return next(err);
    }
  }
};
