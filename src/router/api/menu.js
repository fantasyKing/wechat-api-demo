import { menu } from './../../controller';
import Base from './base';

export default new class extends Base {

  createMenu = async (req, res, params) => {
    const me = {
      button: [
        {
          type: 'click',
          name: '我的测试',
          key: 'test'
        }
      ]
    };
    try {
      const result = await menu.createMenu(me);
      return this.ok(res, result);
    } catch (err) {
      return this.fail(res)(err);
    }
  }
};
