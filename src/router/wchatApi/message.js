import message from './../../controller/message';

export default new class {
  sendMsg = async (req, res, params) => {
    logger.info('wechatApi.sendMsg', params);
    const result = await message.sendMsg(params);
    logger.info('wechatApi.sendMsg.result', result);
    return result;
  }
};
