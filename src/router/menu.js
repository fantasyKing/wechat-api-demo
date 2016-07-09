import { menu } from '../controller';

export default new class {

  createMenu = async (req, res, next) => {
    const me = {
      button: [
        {
          type: 'click',
          name: '我的测试',
          key: 'V1001_TODAY_MUSIC'
        }
      ]
    };
    try {
      const result = await menu.createMenu(me);
      return res.json(result);
    } catch (err) {
      return next(err);
    }
  }
};
