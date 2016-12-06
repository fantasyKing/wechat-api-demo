import { message } from './../../controller';
import Base from './base';

export default new class extends Base {
  // 群发接口
  sendNews = async (req, res, params) => {
    try {
      params.options = {
        mpnews: {
          media_id: 'T8GD0S-0UmutnjdW_gTJHrLYv_Pb9hBDRRhB2hq4PyA'
        },
        msgtype: 'mpnews'
      };
      params.receivers = ['o3yxQwOuVYyT5td8CJb-WxNTRr0o'];
      const result = await message.massSend(params);
      logger.info('sendNews.result', result);
      this.ok(res, result);
    } catch (err) {
      logger.error('sendNews.error', err);
      this.fail(res)(err);
    }
  }
};


