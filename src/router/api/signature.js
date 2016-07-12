import Base from './base';
import signatureCtrl from './../../controller/signature';

export default new class extends Base {
  async checkSignature(req, res, params) {
    try {
      const result = await signatureCtrl.checkSignature(params);
      return res.json({ echostr: result });
    } catch (err) {
      return res.json({ echostr: '' });
    }
  }
};
