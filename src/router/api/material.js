import { material } from './../../controller';
import Base from './base';

export default new class extends Base {
  uploadMaterial = async (req, res, params) => {
    try {
      const result = await material.uploadMaterial(params);
      this.ok(res, result);
    } catch (err) {
      logger.error('material.uploadMaterial,error', err);
      this.fail(res)(err);
    }
  }

  uploadNewsMaterial = async (req, res, params) => {
    try {
      const result = await material.uploadNewsMaterial(params);
      this.ok(res, result);
    } catch (err) {
      logger.error('material.uploadNewsMaterial,error', err);
      this.fail(res)(err);
    }
  }
};
