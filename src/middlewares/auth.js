import { parseParams } from './../util/parse_params';
import utility from 'utility';
import xmlUtil from './../util/xmlutil';

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
      arr.push('weixin');// 'weixin'为自己设置的token
      arr.push(obj.timestamp);
      arr.push(obj.nonce);
      const sign = utility.sha1(arr.sort().join(''));
      if (sign !== signature) {
        return res.end('error');
      }
      if (req.method === 'GET') {
        return res.end(params.echostr);
      }
      let postdata = '';
      req.setEncoding('utf8');
      req.on('data', (chunk) => {
        postdata += chunk;
      });
      req.on('end', async () => {
        const data = await xmlUtil.parseString(postdata);
        req.xmljson = data;
        // return res.end('ok');
        return next();
      });
    } catch (err) {
      return next(err);
    }
  }
};
