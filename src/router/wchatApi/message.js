import message from './../../controller/message';

export default new class {
  sendMsg = async (req, res, params) => {
    logger.info('wechatApi.sendMsg', params);
    try {
      const result = await message.sendMsg(params);
      logger.info('wechatApi.sendMsg.result', result);
      if (result) {
        return res.end('success');
      }
      return res.end('error');
    } catch (err) {
      return res.end('error');
    }
  }
};
