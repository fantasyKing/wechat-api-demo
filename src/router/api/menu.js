import { menu } from './../../controller';
import Base from './base';

export default new class extends Base {

  createMenu = async (req, res, params) => {
    const me = {
      button: [
        {
          type: 'click',
          name: '测试',
          key: 'test'
        },
        {
          name: '菜单',
          sub_button: [
            {
              type: 'view',
              name: '搜索',
              url: 'http://www.baidu.com'
            },
            {
              type: 'view',
              name: '视频',
              url: 'http://v.qq.com/'
            }
          ]
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
