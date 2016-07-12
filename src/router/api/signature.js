import Base from './base';
import signatureCtrl from './../../controller/signature';

export default new class extends Base {
  checkSignature = async (req, res, params) => {
    try {
      const echostr = await signatureCtrl.checkSignature(params);
      return res.end(echostr);
    } catch (err) {
      return res.end(false);
    }
  }
};
