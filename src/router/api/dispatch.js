/**
 * 获取微信post过来的消息例如：
 * { ToUserName: 'gh_c1339db8f486',
 *   FromUserName: 'o3yxQwOuVYyT5td8CJb-WxNTRr0o',
 *   CreateTime: '1468378927',
 *   MsgType: 'event',
 *   Event: 'CLICK',
 *   EventKey: 'test'
 *  }
 * 根据MsgType,Event,EventKey来分发调用那个controller来处理消息
 */
import wchatApi from './../wchatApi';

export default new class {
  dispatchEvent = async (req, res, params) => {
    logger.info('dispatchEvent', params);
    try {
      const result = await wchatApi['event']['click']['test'](req, res, params);
      return res.end('success');
    } catch (err) {
      return res.end('success');
    }
  }
};
