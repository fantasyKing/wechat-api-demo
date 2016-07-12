import Base from './base';
import signatureCtrl from './../../controller/signature';

export default new class extends Base {
  checkSignature = async (req, res, params) => {
    try {
      const result = await signatureCtrl.checkSignature(params);
      return res.json(result);
    } catch (err) {
      return res.json(false);
    }
  }
};
