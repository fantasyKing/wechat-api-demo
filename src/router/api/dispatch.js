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
    logger.info('dispatchEventParams = ', params);
    try {
      return await this.autoJudge(req, res, params);
    } catch (err) {
      logger.error('dispatchEvent发生错误', err.message, err);
      return res.end('success');
    }
  }

  autoJudge = async (req, res, params) => {
    const { MsgType, Event, EventKey } = params;
    logger.info('MsgType | Event | EventKey', MsgType, Event, EventKey);
    let method = wchatApi[MsgType.toLowerCase()];
    if (Event) {
      method = method[Event.toLowerCase()];
      if (Event.toLowerCase() !== 'view' && EventKey && (typeof method === 'object') && method[EventKey.toLowerCase()]) {
        method = method[EventKey.toLowerCase()];
      }
    }
    return await method(req, res, params);
  }
};
