import message from './../../controller/message';

export default new class {
  sendMsg = async (req, res, params) => {
    const result = await message.sendMsg(params);
    logger.info('wechatApi.sendMsg.result', result);
    return res.end('success');
  }
  image = async (req, res, params) => {
    logger.info('收到图片消息', params.MsgId, params.PicUrl);
    return await this.sendMsg(params);
  }

  location = async (req, res, params) => {
    logger.info('收到位置消息', params.Label);
    return await this.sendMsg(params);
  }

};
